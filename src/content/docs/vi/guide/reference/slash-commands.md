---
title: Slash Commands and Quick Entry
description: '`/` commands and `$` Skill invocation—learning quick reference, not a full parameter manual.'
locale: vi
source_locale: en
source_revision: e0dc6df
translation_status: fallback
translated_at: '2026-07-28'
---

Slash commands are not jargon to memorize—they are named quick entry points you invoke on purpose.

They usually jump into a fixed mode or built-in flow. Slash commands (`/command`) relate to [Skill](/skills/overview/) `$name` invocation but are not the same. Lists **change by product and version**—use in-client `/` completion and official docs before relying on names.

## Conceptual split

| Entry | Who invokes | Typical use |
|---|---|---|
| `/review` etc. | You type `/` | Built-in or configured fixed flows |
| `$skill-name` | You or model | Project or user Skill |
| Natural language | You | General tasks |

## Three ways in plain terms

- `/command`: you pick a shortcut in chat
- `$skill`: you or model names a Skill
- Natural language: you state the need; model decides how

If you know the flow you want, `/command` is more direct.

## What it is

- Not a terminal command
- Not secret vocabulary
- Think “shortcut button in chat”

Best when:

- You know which flow you want
- You do not want to re-explain the same intent every time

## Common misconceptions

### 1. Slash commands are not shell commands

They are chat shortcuts—not `codex ...` in the terminal.

### 2. Lists are not fixed forever

Available commands differ by product, version, and environment—**completion in your environment** beats memorization.

### 3. Slash does not bypass approval and sandbox

If the flow writes files, runs commands, or uses the network, policy still applies.

### 4. You can use Codex well without slash commands

Natural language covers most work. Slash commands speed known flows after you are comfortable.

## Common categories (illustrative)

Names may be added or removed by version—**learning categories only**:

### Session and mode

- Switch plan mode, compact context, view help
- Pairs with [Planning](/guide/agent-work/planning/)

### Review and quality

- Review current diff or PR
- With [Review diffs](/guide/quality/review-diffs/)

### Workspace and Git

- Status, draft commit message (you still confirm commit)
- Follow [Human approval patterns](/cases/workflows/human-approval-patterns/)

### Extensions

- Install or list Skills (e.g. `skill-installer` if available)

## Usage notes

1. **Type `/` first**—see what your environment supports; do not memorize stale lists
2. Team flows → **Skill + docs** so knowledge is not tribal
3. Slash-triggered writes still subject to sandbox and approval

## Try it

1. Type `/`
2. See what is available
3. Pick one whose name and purpose you understand

## First-time path

1. `/` to see offerings
2. Try one clear command
3. Notice: mode switch vs workflow run
4. For recurring team flows, consider a Skill

Shows split: slash = quick entry, Skill = durable reusable flow.

## vs CLI commands

| | In-chat `/` | Terminal `codex …` |
|---|---|---|
| Context | Current session and @ files | `--cwd` directory |
| Best for | Interactive exploration | Scripts, CI |

Slash commands are chat shortcuts—what your environment actually offers beats memorizing names.

CLI subcommands: [CLI interactive mode](/guide/cli/interactive-mode/) and [Non-interactive mode](/guide/cli/non-interactive-mode/). Full parameter table: [CLI command reference](/guide/reference/commands/).

---

**Status:** outdated  
**Products:** App / CLI / IDE  
**Review note:** Centers `/review`, slash categories, and `$skill` relationships—availability, naming, and behavior change quickly; without current official command list and behavior docs, `outdated` is appropriate.  
**Last verified:** 2026-07-26
