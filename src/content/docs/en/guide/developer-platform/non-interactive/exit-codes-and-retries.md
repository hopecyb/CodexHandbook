---
title: Exit Codes and Retries
description: Interpret codex exec success and failure in pipelines—when to retry vs fail fast.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

CI relies on **process exit codes** to judge step success. This page covers common semantics for [codex exec](/guide/developer-platform/non-interactive/codex-exec/), retry strategy, and idempotent design.

## What this page covers

- Exit codes vs business “review did not pass”
- Whether to retry 429/network errors
- Avoiding duplicate side effects on retry

## What exit codes tell you

If this is new, think of an exit code as a short result left for scripts and CI when a task finishes.

It usually does not explain much—it only tells the pipeline:

- Success this time
- Or failure

“Retry” answers a different question: should this failure stop immediately, or is another attempt worth it?

:::note
The exact exit code table follows official CLI docs; the table below is **design guidance** for integration.
:::

## Common misconceptions

### Not all failures are the same

Beginners often treat every non-`0` as one kind of failure.

At minimum, distinguish:

- Task crashed
- Policy or sandbox blocked it
- External service had a transient issue
- Run succeeded but review conclusion was “fail”

Each needs different handling—not blanket retry.

### “Auto retry” is not automatically more reliable

If the failure will not disappear on retry—permissions, policy blocks, bad prompt—retry only wastes time and quota.

## Recommended semantics (conceptual)

| Situation | Suggested handling |
|---|---|
| `0` | Task completed and met success criteria in the prompt |
| Non-`0` with policy/sandbox denial in logs | **Do not** blindly retry; fix config or prompt |
| Non-`0` with API 429/5xx | Limited exponential backoff retries |
| P0 issues found but execution succeeded | Use [structured output](/guide/developer-platform/non-interactive/structured-output/) `pass: false` + wrapper script `exit 1` |

“Found a security issue” should not rely on a crash—**explicitly** set `pass: false` in JSON and let a wrapper script choose the exit code.

## Retry template (bash)

```bash
max=3
delay=10
for i in $(seq 1 $max); do
  if codex exec --cwd . "$(cat "$PROMPT")"; then
    exit 0
  fi
  code=$?
  if [ "$code" -eq 2 ]; then
    echo "Policy error, not retrying" >&2
    exit "$code"
  fi
  sleep $((delay * i))
done
exit 1
```

Align “do not retry” codes with official docs and branch in `case`.

## Idempotency and side effects

| Risk | Mitigation |
|---|---|
| Duplicate PR comments | Use check run id or “update if bot comment exists” |
| Duplicate file writes | exec defaults to read-only review; writes in separate job + human gate |
| Duplicate notifications | Webhook with dedupe key |

## When unsure

Ask:

1. Does this look like a transient external glitch?
2. On retry, could we duplicate comments, writes, or notifications?
3. Is the real fix config, prompt, or permissions?

Closer to (1): limited retry may help. Closer to (2) or (3): stop and fix root cause.

## Common mistakes

- Ignoring exit codes; CI always green
- Infinite retry on policy errors, burning quota
- Retry without fixed prompt/git sha, incomparable results

First separate “temporary fault” from “retry will not help,” then decide whether to retry. Not every failure deserves another run.

## Acceptance checklist

- [ ] CI fails on non-zero exit codes
- [ ] Retry count and backoff have upper bounds
- [ ] “Review failed” vs “run crashed” are distinguishable
- [ ] Logs retain enough detail for troubleshooting

## Related

- [Error reference](/guide/reference/error-reference/)
- [Failure recovery](/cases/workflows/failure-recovery/)

## Reference sources
- OpenAI API retry guidance (conceptual)
---

**Status:** outdated  
**Products:** CLI  
**Review note:** This page gives reasonable engineering advice on exit codes and retries, but examples assume specific exit semantics (e.g. `code=2`) and `codex exec` behavior without strong current official backing; restore `verified` after new CLI docs are checked.  
**Last verified:** 2026-07-26
