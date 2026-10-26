---
legacyVerification:
  status: "verified"
  products: "CLI"
  basis: "Checked against the current official Non-interactive mode and Codex GitHub Action guidance. Corrected `--cd` and made separation of the API-key job from repository write permissions the default safety boundary."
  checkedAt: "2026-08-26"
reviewed_at: "2026-10-25"
title: Scripts and Pipelines
description: Orchestrate codex exec in shell, Makefile, and GitHub Actions—repeatable and auditable.
locale: en
source_locale: zh-CN
source_revision: '07aeb4f'
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 20
---

This is about turning Codex from a one-off action into **steps your team can rerun, audit, and hand off**.

Scripts define the workflow; pipelines repeat it on schedule or in response to events.

This page shows how to embed [codex exec](/en/guide/developer-platform/non-interactive/codex-exec/) in shell, Makefile, or CI pipelines.

## What this page covers

- Local scripts vs CI jobs
- Managing prompts and secrets
- Combining with [code review automation](/en/guide/developer-platform/ci-cd/code-review-automation/)

## What this solves

“Scripts and pipelines” turns “I did this manually today” into “the team can reliably do the same thing later.”

Three priorities:

- Repeatable
- Auditable
- Handoff-friendly

## Why teams avoid pasting prompts into CI UI

Hard to maintain:

- New owners do not know the original design
- Logic changes cannot go through normal code review
- Failures are hard to attribute to prompt vs environment vs script

Putting prompts, scripts, and rules in Git is version control for automation.

## Common misconceptions

### Stabilize the workflow before automating it

Many teams string everything together before prompts stabilize, success criteria are clear, or permissions are tight—then debugging gets painful.

### Scripts make a process repeatable

A good script turns steps people memorize into files everyone can read and review.

## Minimal shell snippet

```bash
#!/usr/bin/env bash
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"
PROMPT_FILE="prompts/ci/security-review.md"
codex exec --cd "$ROOT" --ephemeral "$(cat "$PROMPT_FILE")"
```

Keep `prompts/ci/security-review.md` in Git; changes go through review.

## Habits worth forming first

Do not aim for “everything at once.” Fix these three first:

1. Where prompt files live
2. What the entry script is called
3. How success and failure are judged

Then adding logs, schema, and notifications is much easier.

## GitHub Actions: use the official Action

```yaml
jobs:
  codex-review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
    steps:
      - uses: actions/checkout@v5
        with:
          fetch-depth: 0
      - name: Run review
        uses: openai/codex-action@v1
        with:
          openai-api-key: ${{ secrets.OPENAI_API_KEY }}
          prompt-file: prompts/ci/pr-review.md
```

:::caution
Prefer the official `openai/codex-action` in GitHub Actions. Do not expose the API key to an entire job that also runs repository code. If a later step must write to a PR, separate write permission and the key into different jobs and pass a patch artifact between them.
:::

## Recommended layers

| Layer | Content |
|---|---|
| Repo | `prompts/`, `tools/run-codex.sh` |
| CI | Read-only checkout, pinned CLI, upload log artifacts |
| Callback | Optional [Webhook](/en/guide/developer-platform/webhooks/overview/) to update internal systems |

## How to decide

Good candidates for scripts or pipelines:

- You do it repeatedly
- You want each run to follow the same approach

Examples: PR review, change summaries, security scans, doc checks.

Do not rush “full auto” before the flow is stable; script first, then pipeline, is usually safer.

## Common mistakes

- Dynamic prompt from `${{ github.event.pull_request.body }}` without escaping (injection)
- No concurrency control on the same PR, duplicate runs burn quota
- Works locally, CI missing deps (no `npm ci`)
- Success = “finished” with no structured conclusion parsing
- Automation granted write permission too early

## Security boundaries

- CI token least privilege; no `git push` unless a separate approval job
- Fork PR workflows with secrets need security review (`pull_request_target`)

## Acceptance checklist

- [ ] Prompts and scripts are versioned in Git
- [ ] CI failure blocks merge when policy requires
- [ ] Artifact retention meets compliance
- [ ] Matches local `make review` behavior

## Reference sources
- OpenAI Codex + GitHub integration docs
