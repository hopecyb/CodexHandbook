---
title: Scripts and Pipelines
description: Orchestrate codex exec in shell, Makefile, and GitHub Actions—repeatable and auditable.
locale: pt
source_locale: en
source_revision: c359901
translation_status: fallback
translated_at: '2026-07-28'
---

This is about turning Codex from a one-off action into **steps your team can rerun, audit, and hand off**.

Scripts fix the flow; pipelines repeat it on schedule or on events.

This page shows how to embed [codex exec](/guide/developer-platform/non-interactive/codex-exec/) in shell, Makefile, or CI pipelines.

## What this page covers

- Local scripts vs CI jobs
- Managing prompts and secrets
- Combining with [code review automation](/guide/developer-platform/ci-cd/code-review-automation/)

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

### Automation values stability, not speed first

Many teams string everything together before prompts stabilize, success criteria are clear, or permissions are tight—then debugging gets painful.

### Scripts fix the approach

A good script turns steps people memorize into files everyone can read and review.

## Minimal shell snippet

```bash
#!/usr/bin/env bash
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"
PROMPT_FILE="prompts/ci/security-review.md"
codex exec --cwd "$ROOT" "$(cat "$PROMPT_FILE")"
```

Keep `prompts/ci/security-review.md` in Git; changes go through review.

## Habits worth forming first

Do not aim for “everything at once.” Fix these three first:

1. Where prompt files live
2. What the entry script is called
3. How success and failure are judged

Then adding logs, schema, and notifications is much easier.

## GitHub Actions sketch

```yaml
jobs:
  codex-review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Install Codex CLI
        run: |
          # Pin version per official install docs
          npm install -g @openai/codex@<pinned-version>
      - name: Run review
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: |
          codex exec --cwd . "$(cat prompts/ci/pr-review.md)"
```

:::caution
Adjust install method and permission scopes to org security requirements; **do not** echo secrets in workflows.
:::

## Recommended layers

| Layer | Content |
|---|---|
| Repo | `prompts/`, `tools/run-codex.sh` |
| CI | Read-only checkout, pinned CLI, upload log artifacts |
| Callback | Optional [Webhook](/guide/developer-platform/webhooks/overview/) to update internal systems |

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
- codex.bozhouai.com automation chapter

---

**Status:** outdated  
**Products:** CLI  
**Review note:** The principle of versioning prompts, scripts, and pipelines in Git still holds, but examples depend on `codex exec`, CLI install, and GitHub Actions wiring—high-churn details; restore `verified` after current official pipeline docs are added.  
**Last verified:** 2026-07-26
