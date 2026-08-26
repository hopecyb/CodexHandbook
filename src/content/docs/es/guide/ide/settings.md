---
title:  Ajustes de la extensión IDE
description:  Entradas de configuración en el IDE para modelo, Aprobación, Contexto y comportamiento de la extensión.
locale: es
source_locale: zh-CN
source_revision: d4a3506
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 80
---

IDE settings have two layers:

| Layer | Location | Controls |
|---|---|---|
| Codex Agent settings | `config.toml` | Model, reasoning effort, permissions, sandbox, MCP, and personalization; shared with the CLI |
| Editor settings | VS Code settings with `chatgpt.*` | Sidebar, message queueing, send key, review delivery, language, and fonts |

Keep repository rules in `AGENTS.md`, not in one person's editor settings.

## Open settings

Select the gear in the Codex sidebar, then **Codex Settings**. Change common Agent options in the panel or select **Open config.toml** to edit the active configuration layer.

Change editor behavior in the editor's Settings by searching `@ext:openai.chatgpt`, `Codex`, or a specific key.

## Settings worth understanding first

| Key | Default | Change it when |
|---|---:|---|
| `chatgpt.openOnStartup` | `false` | You want the extension to focus the sidebar at startup |
| `chatgpt.followUpQueueMode` | `queue` | Set `steer` to let a new message steer the current run |
| `chatgpt.composerEnterBehavior` | `enter` | Multiline prompts are often sent accidentally |
| `chatgpt.reviewDelivery` | `inline` | Set `detached` to show `/review` in a separate chat |
| `chatgpt.localeOverride` | automatic | You need a fixed UI language |
| `chatgpt.runCodexInWindowsSubsystemForLinux` | `false` | The repository and toolchain are in WSL2 |

`chatgpt.cliExecutable` is for Codex CLI development. Ordinary users should not override the extension's bundled executable; some features may stop working.

## How to reason about configuration precedence

- Organization policy defines limits that cannot be exceeded.
- `config.toml` sets Agent defaults.
- `AGENTS.md` supplies repository and directory rules.
- Editor settings change only the IDE experience.
- A one-off prompt adds the current task's goal and boundary.

If a setting appears ineffective, identify which layer you changed and check whether a higher-level policy constrains it. See [Scope and precedence](/es/guide/customization/agents-md/scope-and-precedence/) for the full model.

## Verify changes

Change one setting class at a time. For example, after setting `chatgpt.reviewDelivery` to `detached`, run `/review` in a Git repository and confirm that a separate review chat opens. Record the old value, restore it if behavior is unexpected, and reload the editor.

## Official sources

- [Codex IDE settings](https://learn.chatgpt.com/docs/ide/settings)
- [Configuration basics](https://learn.chatgpt.com/docs/config)

---

**Status:** verified

**Applies to:** IDE

**Last verified:** 2026-08-26
