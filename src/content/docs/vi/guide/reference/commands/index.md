---
title: CLI Command Reference
description: Common Codex CLI subcommands and flags—learning index, not a substitute for official docs.
locale: vi
source_locale: en
source_revision: 1383fbe
translation_status: fallback
translated_at: '2026-07-28'
---

Command reference helps you pick an entry point—not memorize every flag:

> **Should I use interactive entry or a one-shot command?**

This page indexes common **Codex CLI** entry points for search and comparison. **Names, flags, and defaults change by version**—run `codex --help` and subcommand `--help`, and follow [OpenAI Codex documentation](https://developers.openai.com/codex).

## When to use this page

- Interactive vs one-shot command
- Chat-style vs script-style task
- You know CLI is right but not which entry

## Entry choice

- Chat while you work: `codex`
- One task, result when done: `codex exec`

For new CLI users, that split solves most entry questions.

## Command overview (illustrative)

| Entry | Purpose | Detail |
|---|---|---|
| `codex` | Interactive TUI session | [Interactive mode](/guide/cli/interactive-mode/) |
| `codex exec` (or equivalent) | Non-interactive single/pipeline task | [Non-interactive mode](/guide/cli/non-interactive-mode/) |
| Configuration | Read/write user/project config | [CLI configuration](/guide/cli/configuration/) |

:::caution[Version-sensitive]
Parameter names below reflect common community docs—**may not match your installed CLI**. Re-check `--help` after upgrades.
:::

## Common misconceptions

### 1. You do not need to memorize everything

Know which entry class fits the task; look up flags when needed.

### 2. `codex exec` is not just “advanced `codex`”

It targets unattended scripts and CI—not a stronger chat mode.

### 3. Seeing a flag ≠ you should use it now

Many flags depend on version, environment, and security policy—understand intent first.

### 4. Command reference ≠ tutorial

It is:

- An entry map
- A parameter index
- A pointer to deeper pages

## Interactive mode (conceptual)

```bash
# Start interactive session at repo root (illustrative)
codex

# Common in-session actions (per TUI)
# - Enter task description
# - / slash commands → see slash-commands page
# - Approve shell / file write requests
```

Slash commands: [Slash command reference](/guide/reference/slash-commands/)

## Entry decision flow

1. Run `codex --help`
2. Choose interactive or `exec`
3. For a subcommand, read its `--help`

Avoid drowning in the full flag table on day one.

## Quick start

1. `codex --help`
2. Chat while working → `codex`
3. CI or scripts → study `codex exec`

## Non-interactive exec (conceptual)

```bash
# Working directory and one-shot prompt (illustrative)
codex exec --cwd /path/to/repo "Your complete task description"

# Common intents (flag names per official docs)
# --cwd          working directory
# --model        pin model
# --sandbox      sandbox policy
# --approval     approval policy (critical unattended)
# stdin pipe     read prompt from file or upstream command
```

Security: [Human approval patterns](/cases/workflows/human-approval-patterns/)

## Configuration and auth (conceptual)

| Action | Notes |
|---|---|
| Sign in | Same as [Sign-in and authentication](/guide/getting-started/sign-in-and-authentication/) |
| Config files | User/project level—see [Configuration reference](/guide/reference/configuration-reference/) |
| MCP | [Connect MCP](/skills/mcp/connect-an-mcp-server/) |

## Exit codes and automation

Non-interactive mode usually uses **exit codes** for CI:

- `0`: completed per agreement
- Non-`0`: failure or needs human—check stderr/logs

CLI command pages help you pick entry and intent—not memorize parameters.

Do not ignore stderr in CI; keep logs for [Diagnose before fixing](/cases/workflows/diagnose-before-fixing/).

## vs in-chat slash commands

| | `codex` terminal | In-session `/` |
|---|---|---|
| Docs | This page + product guide | [slash-commands](/guide/reference/slash-commands/) |
| Best for | Scripts, CI | Interactive exploration |

## Troubleshooting

| Symptom | See |
|---|---|
| Command not found | [Install CLI](/guide/getting-started/install-cli/) |
| Config not applied | [CLI configuration](/guide/cli/configuration/) |
| Approval blocks CI | Tighten prompt + read-only sandbox |

[CLI troubleshooting](/guide/cli/troubleshooting/)

---

**Status:** outdated  
**Products:** CLI  
**Review note:** Written as an entry map but still centers `codex`, `codex exec`, in-session `/`, and parameter intent—high-churn CLI details; restore `verified` after latest official command documentation.  
**Last verified:** 2026-07-26
