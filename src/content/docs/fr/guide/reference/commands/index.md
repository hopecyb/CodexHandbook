---
title: "Référence des commandes CLI"
description: Sous-commandes et flags Codex CLI courants — index d'apprentissage, pas substitut à la doc officielle.
locale: fr
source_locale: zh-CN
source_revision: bdc537d
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Command reference helps you pick an entry point—not memorize every flag:

> **Should I use interactive entry or a one-shot command?**

This page indexes the current Stable **Codex CLI** entry points for search and comparison. Continue to run `codex --help` and each subcommand's `--help`; use [Developer commands](https://learn.chatgpt.com/docs/developer-commands) for complete maturity and parameter details.

## When to use this page

- Interactive vs one-shot command
- Chat-style vs script-style task
- You know CLI is right but not which entry

## Entry choice

- Chat while you work: `codex`
- One task, result when done: `codex exec`

For new CLI users, that split solves most entry questions.

## Stable command overview

| Entry | Purpose | Detail |
|---|---|---|
| `codex` | Interactive TUI session | [Interactive mode](/fr/guide/cli/interactive-mode/) |
| `codex exec` / `codex e` | Non-interactive single/pipeline task | [Non-interactive mode](/fr/guide/cli/non-interactive-mode/) |
| `codex doctor` | Generate an installation, configuration, authentication, runtime, Git, and terminal diagnostic report | [CLI troubleshooting](/fr/guide/cli/troubleshooting/) |
| `codex login` / `codex logout` | Manage authentication | [Sign-in and authentication](/fr/guide/getting-started/sign-in-and-authentication/) |
| `codex resume` / `codex fork` | Continue or fork a saved session | [Handoff and resume](/fr/guide/agent-work/handoff-and-resume/) |
| `codex mcp` | Manage MCP servers | [Connect an MCP server](/fr/skills/mcp/connect-an-mcp-server/) |
| `codex plugin` | Install, list, and remove Plugins | [Plugins](/fr/skills/plugins/) |

:::caution[Different maturity levels]
The official reference also contains Experimental, Beta, and Deprecated commands. This beginner reference does not mix them into the Stable list; confirm maturity and risk before using one.
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

Slash commands: [Slash command reference](/fr/guide/reference/slash-commands/)

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
# Working directory and one-shot prompt
codex exec --cd /path/to/repo "Your complete task description"

# Current common flags
# --cd, -C       working directory
# --model        pin model
# --sandbox      sandbox policy
# --ask-for-approval, -a  approval policy
# stdin pipe     read prompt from file or upstream command
```

Security: [Human approval patterns](/fr/cases/workflows/human-approval-patterns/)

## Configuration and auth (conceptual)

| Action | Notes |
|---|---|
| Sign in | Same as [Sign-in and authentication](/fr/guide/getting-started/sign-in-and-authentication/) |
| Config files | User/project level—see [Configuration reference](/fr/guide/reference/configuration-reference/) |
| MCP | [Connect MCP](/fr/skills/mcp/connect-an-mcp-server/) |

## Exit codes and automation

Non-interactive mode usually uses **exit codes** for CI:

- `0`: completed per agreement
- Non-`0`: failure or needs human—check stderr/logs

CLI command pages help you pick entry and intent—not memorize parameters.

Do not ignore stderr in CI; keep logs for [Diagnose before fixing](/fr/cases/workflows/diagnose-before-fixing/).

## vs in-chat slash commands

| | `codex` terminal | In-session `/` |
|---|---|---|
| Docs | This page + product guide | [slash-commands](/fr/guide/reference/slash-commands/) |
| Best for | Scripts, CI | Interactive exploration |

## Troubleshooting

| Symptom | See |
|---|---|
| Command not found | [Install CLI](/fr/guide/getting-started/install-cli/) |
| Config not applied | [CLI configuration](/fr/guide/cli/configuration/) |
| Approval blocks CI | Tighten prompt + read-only sandbox |

[CLI troubleshooting](/fr/guide/cli/troubleshooting/)

---

**Status:** outdated
**Products:** CLI
**Review note:** Written as an entry map but still centers `codex`, `codex exec`, in-session `/`, and parameter intent—high-churn CLI details; restore `verified` after latest official command documentation.
**Last verified:** 2026-07-26
