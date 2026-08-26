---
title:  Comandos slash y entradas rápidas
description:  Llamadas a comandos / y Skills $ — consulta de aprendizaje, no un manual completo de parámetros.
locale: es
source_locale: zh-CN
source_revision: 9debf5c
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 40
---

A first list of slash commands can look like jargon to memorize. It is easier to treat them as shortcuts that explicitly enter a known flow.

They usually start a fixed mode or built-in workflow. Slash commands (`/command`) relate to `$name` invocation of a [Skill](/es/skills/overview/), but they are not the same. Exact lists **vary by product and access**, and differ across the desktop App, CLI, IDE, and ChatGPT Web. Use the current composer's `/` completion and official documentation.

## Distinguish the entry points

| Entry | Who invokes it | Typical use |
|---|---|---|
| Slash command such as `/review` | You type `/` | Built-in or configured fixed flow |
| `$skill-name` | You or the model | Project or user Skill |
| Natural language | You | General task |

## The direct distinction

- `/command`: explicitly choose a shortcut in the chat.
- `$skill`: you or the model names a Skill.
- Natural language: describe the need and let the model choose how to work.

Use `/command` when you already know the flow and want to enter it quickly.

## What it is

- Not a terminal command.
- Not hidden jargon.
- A text entry point comparable to a shortcut button in the composer.

It fits when:

- you know which flow you want;
- you do not want to restate the same intent each time.

## Common misconceptions

### 1. Slash commands are terminal commands

They are composer shortcuts, not `codex ...` shell commands.

### 2. The slash-command list never changes

Commands vary by product, version, and environment. The current completion list is more reliable.

### 3. A slash command bypasses approval and sandboxing

Any underlying file write, command, or network action remains subject to current policy.

### 4. You must know slash commands to use Codex well

Natural language handles most tasks. Slash commands accelerate a known workflow after you become familiar with it.

## Common current entries

### Desktop App / IDE

- `/plan`: enter multistep planning mode.
- `/review`: review uncommitted changes or compare with a base branch.
- `/status`: show chat ID, context usage, and rate limits.
- `/mcp`: inspect MCP connection state.
- `/init`: scaffold `AGENTS.md` for the current project.

### CLI-specific session controls

- `/permissions`: adjust the current session's permission mode.
- `/agent`: inspect or switch Agent threads.
- `/model`: choose the current model.
- `/status`: inspect current session settings.

ChatGPT Web has its own composer command menu. Do not assume App or CLI commands exist there under the same name.

## Usage guidance

1. Type `/` and inspect what the current environment supports instead of memorizing an old list.
2. Turn a durable team workflow into a **Skill plus documentation** so it does not depend on experts knowing a command name.
3. Writes triggered by slash commands remain subject to sandboxing and approvals.

## Try it directly

1. Type `/`.
2. Inspect the available entries.
3. Choose one whose name and purpose are clear.

## A useful first exercise

1. Type `/` and inspect what the current environment offers.
2. Try one command with an understandable purpose.
3. Observe whether it changes mode or runs a workflow.
4. If the team must reuse it long-term, consider turning the process into a Skill.

Slash commands provide quick entry points; Skills preserve reusable workflows.

## Difference from CLI commands

| | In-chat `/` | Terminal `codex …` |
|---|---|---|
| Context | Current session and attached files | Directory selected with `--cd` / `-C` |
| Best for | Interactive exploration | Scripts and CI |

Treat slash commands as chat shortcuts. Inspecting the current environment is more useful than memorizing names.

See [CLI interactive mode](/es/guide/cli/interactive-mode/), [non-interactive mode](/es/guide/cli/non-interactive-mode/), and the [CLI command reference](/es/guide/reference/commands/).

---

**Status:** verified

**Applies to:** App / CLI / IDE

**Verification basis:** Compared with current official desktop App Slash commands and Developer commands. Command sets differ by work surface; availability still follows composer completion.

**Last verified:** 2026-08-26
