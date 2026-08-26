---
title: codex exec
description: Entrada de execução não interativa — entregar uma Tarefa completa de uma vez em scripts e CI.
locale: pt
source_locale: zh-CN
source_revision: 124836c
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 10
reviewed_at: 2026-08-26
---


If interactive `codex` is chat-while-you-work, **`codex exec`** is closer to handing off a one-shot job and getting a result when it finishes.

It is the core of [non-interactive mode](/pt/guide/cli/non-interactive-mode/): no back-and-forth chat, no mid-run clarification—the process ends with a result or failure. This chapter targets [developer platform](/pt/guide/developer-platform/) integrators and readers wiring Codex into scripts or CI for the first time.

## What this page covers

- How `exec` differs from interactive `codex`
- Minimal command shape and working directory
- Approval and sandbox requirements when unattended

## What `exec` does

Think of `codex exec` as:

- Issuing a one-time work order
- Running to completion and returning a result

Once the instructions are set, it runs accordingly, returns the outcome, and exits.

So it fits when:

- Task boundaries are fixed
- No mid-run clarification is needed
- You want repeatable execution later

## Why it exists

You do not chat with Codex in CI, and you do not expect it to stop ten times to ask questions.

Typical `codex exec` uses:

- Code review automation
- Scheduled jobs
- Batch scripts
- Single analysis or generation steps in a pipeline

It fits when **task boundaries are already clear**; if you are still exploring, interactive mode is usually better.

:::note
**Command names and flags follow the official CLI.** After upgrades, run `codex --help` and `codex exec --help`.
:::

## Minimal viable approach

```bash
cd /path/to/repo
codex exec --cd . "Read-only: compare current branch diff to main, list top 3 security risks, do not modify files"
```

Runs use a read-only sandbox by default. To permit workspace writes explicitly:

```bash
codex exec --cd . --sandbox workspace-write "Fix the failing test; modify only src/auth and tests/auth"
```

Progress is written to `stderr` and the final response to `stdout`. Use `--json` for the full machine-readable event stream, `-o` / `--output-last-message` for only the final response file, and `--output-schema` when downstream code requires stable fields.

Principles:

- In shell scripts, `cd` to a clean worktree first
- Put prompts in versioned `prompts/` or heredocs to avoid shell escaping issues
- In CI, judge pass/fail by **exit code**

## Easy-to-miss reality

In interactive mode you can say “that is not what I meant.”
In `exec`, **if the first prompt is wrong, the whole run can go off track**.

When writing `exec` prompts, be more explicit than usual about:

- What to do
- What not to do
- Output format
- What counts as done
- How to fail when things go wrong

## Common misconceptions

### `exec` fits fixed tasks

Many people treat it as “advanced CLI mode.”

More accurate: it is for **stable, repeatable** runs.

### Short prompts are not always clear prompts

In interactive mode, vague wording can be fixed later.

In `exec`, a short prompt that omits boundaries, limits, and success criteria is often not elegant—it is risky.

## Recommended workflow

```text
Prepare repo (checkout, install, read-only token)
    → Pin prompt version (git sha)
    → codex exec
    → Collect stdout / artifacts
    → Non-zero exit fails CI; do not retry forever
```

See [Scripts and pipelines](/pt/guide/developer-platform/non-interactive/scripts-and-pipelines/).

## What to treat it as

- A scriptable one-shot task command
- Suitable for scripts, CI, or cron

That is why many teams wire it behind `make review`, GitHub Actions, cron, or internal platform buttons.

## Compared to interactive mode

| | Interactive `codex` | `codex exec` |
|---|---|---|
| Clarification | Multi-turn | Must be clear upfront |
| Approval | Human present | Tighten policy beforehand |
| Best for | Learning, exploration | CI, cron |

## When unsure

- Still exploring requirements, may change your mind often: prefer interactive mode
- Task is a template you want to run repeatedly: use `codex exec`

`codex exec` fits tasks that are already clear and worth repeating; if you are still thinking out loud, do not rush it into non-interactive flows.

## Common mistakes

- Stuffing long chat history into a single exec
- CI uses write token and prompt includes unsanitized PR body
- Unpinned CLI version breaks pipelines suddenly
- Ignoring non-zero exit codes and marking green
- Forcing complex human-judgment tasks into unattended runs

## Security boundaries

- Unattended = weaker [human approval](/pt/cases/workflows/human-approval-patterns/); default read-only
- See [Security credentials](/pt/guide/developer-platform/ci-cd/code-review-automation/#permissions-and-security) (cross-reference in same chapter)

## Acceptance checklist

- [ ] Local and CI use the same prompt file
- [ ] Exit codes handled correctly in CI
- [ ] Logs contain no keys or PII
- [ ] Sandbox and rules match or are stricter than interactive dev

## Related

- [CLI non-interactive mode](/pt/guide/cli/non-interactive-mode/)
- [Structured output](/pt/guide/developer-platform/non-interactive/structured-output/)
- [Exit codes and retries](/pt/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## Reference sources
- OpenAI Codex CLI documentation
---

**Status:** verified

**Applies to:** CLI

**Verification basis:** Compared with current Non-interactive mode and Developer commands documentation for Stable `codex exec`, `--cd` / `-C`, the default read-only sandbox, `workspace-write`, JSONL, and schema output.

**Last verified:** 2026-08-26
