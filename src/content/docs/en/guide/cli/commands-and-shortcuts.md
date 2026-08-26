---
reviewed_at: 2026-08-26
title: Commands and shortcuts
description: CLI subcommands, in-session actions, and keyboard habits—product-oriented; full flags in reference.
locale: en
source_locale: zh-CN
source_revision: 6a36a12
translation_status: reviewed
translated_at: 2026-08-26
---

Terminal efficiency comes from three areas: **how you launch**, **in-session shortcuts**, and **pairing with scripts/editors**. This page covers habits; flag tables live in [CLI command reference](/en/guide/reference/commands/) and [keyboard shortcuts](/en/guide/reference/keyboard-shortcuts/).

## What's covered

- When to use `codex` vs `codex exec`
- Common in-session operation types
- Turning repeats into aliases or scripts

## Start by distinguishing

Many newcomers assume "commands and shortcuts" means memorizing syntax and flags.

More practical: distinguish three modes:

- **Chat while working**
- **One-shot task to completion**
- **Shortening actions you repeat**

That clarity usually picks the right command.

## Command entry overview

| Goal | Entry | Details |
|---|---|---|
| Chat and edit interactively | `codex` interactive TUI | [Interactive mode](/en/guide/cli/interactive-mode/) |
| CI / pipeline one-shot | `codex exec` | [Non-interactive mode](/en/guide/cli/non-interactive-mode/) |
| Change defaults | Config files | [CLI configuration](/en/guide/cli/configuration/) |

:::note
`codex` and `codex exec` are currently Stable entry points. Use `codex --help` and `codex exec --help` for current flags.
:::

## Common misconceptions

### `codex` and `codex exec` are not beginner vs pro

Not "simple mode" vs "expert mode."

Practical split:

- `codex` when you are present to steer
- `codex exec` when the task is defined upfront for a one-shot run

### More shortcuts is not better early on

Master first:

- Starting a session
- Discovering `/` commands in your environment
- Exit, restart, change directory

That is enough to start.

## In-session "shortcuts"

Exact keys and `/` commands vary by version; categories are stable:

### Input and history

- Multiline input: product-specific newline combo (often `Shift+Enter` or editor mode)
- Recall last task: terminal history or in-session history if available

### Slash commands

Typing `/` at the prompt triggers built-in flows (review, compact context, etc.). **Do not memorize a frozen list**—use `/` completion in your environment. Learning-oriented taxonomy: [slash commands reference](/en/guide/reference/slash-commands/).

### Approvals

When the Agent requests shell or file writes, the UI prompts approve/deny/always allow (if offered). Read [approvals and sandbox](/en/guide/cli/approvals-and-sandbox/) before unattended use.

## Shell-layer shortcuts (recommended)

Wrap "enter project + start Codex" to avoid wrong-directory mistakes:

```bash
# ~/.zshrc example (adjust as needed)
cx() {
  cd "$1" || return 1
  codex
}
```

Non-interactive review can be a script with prompt in `prompts/review.md` for version control.

## Learning path

1. Start `codex` in the correct directory
2. Learn when `codex exec` fits
3. Wrap frequent actions in aliases, functions, or scripts

Avoid over-abstracting before the base tool feels natural.

## vs IDE / App

| | CLI | IDE extension |
|---|---|---|
| Context | Directory selected with `--cd` / `-C`, plus files read by tools | Open files, selection |
| Best for | Scripts, SSH remote, pure terminal | Edit while viewing diff |
| Shortcuts | Terminal keys + `/` | Editor command palette |

IDE: [local task workflow](/en/guide/ide/local-task-workflow/)

## Common mistakes

- Starting in wrong directory, editing neighbor project
- Running in-app `/review` as a terminal subcommand in external shell
- Pasting unreviewed third-party "magic prompts" into interactive session

You do not need every command and shortcut on day one. Clarify "chat while working" vs "run once" and command choice gets simpler.

## Acceptance checklist

- [ ] Can start interactive session at repo root
- [ ] Know where to find `/` commands for your version
- [ ] Can write a minimal read-only `codex exec` task (if available)

## References
- OpenAI Codex CLI documentation
---

**Status:** outdated
**Applicable products:** CLI
**Review note:** Covers `codex`, `codex exec`, `/` command categories, and session shortcuts—details that shift by version; lacks strong current official command/shortcut documentation to verify; needs rewrite before verification.
**Last verified:** 2026-07-26
