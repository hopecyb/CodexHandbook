---
title: "Raccourcis clavier"
description: Index d'apprentissage des raccourcis courants dans App, CLI TUI et extension IDE — selon votre version installée.
locale: fr
source_locale: zh-CN
source_revision: 0edf4f3
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Shortcuts vary by platform, client, and customization. This page includes only combinations explicitly documented today; use in-App **Keyboard Shortcuts** for the complete list.

## Desktop App

| Action | macOS | Windows |
|---|---|---|
| Open Settings | `Cmd + ,` | `Ctrl + ,` |
| Open/close Activity | `Cmd + Option + U` | `Ctrl + Alt + U` |
| Open integrated terminal | `Ctrl` + backtick | `Ctrl` + backtick |
| Open App command palette | `Cmd + K` | Check Keyboard Shortcuts |
| Clear terminal display | `Ctrl + L` | `Ctrl + L` |

`Cmd + K` opens the App command palette; it does not clear the terminal.

Keyboard Shortcuts in Settings can search by command or key, change a binding, and restore defaults. After customization, the local binding takes precedence over an online reference card.

## IDE

In VS Code-family editors, `chatgpt.composerEnterBehavior` determines how Enter and `Cmd/Ctrl + Enter` submit multiline prompts. Do not assume every computer uses the same send key.

While Codex is running, `chatgpt.followUpQueueMode` determines whether a new message queues or steers immediately. Press `Cmd/Ctrl + Shift + Enter` for a single send that reverses the current default.

If the Codex sidebar is missing, run this from the editor Command Palette:

```text
Codex: Open Codex Sidebar
```

## CLI

Use the current CLI TUI's `/help` and on-screen hints. This page does not guess `y`, `n`, or other approval keys because terminal, mode, and version affect interaction.

The general terminal signal `Ctrl + C` may interrupt a command or session. Inspect current state rather than treating it as a side-effect-free Back key.

## Learning order

First learn to open Settings and Activity, open the terminal, and submit multiline prompts. Search in the App for other frequent actions. Team documentation should name actions rather than force the same customized bindings on everyone.

## Official sources

- [Desktop App settings](https://learn.chatgpt.com/docs/app/settings)
- [Notifications and Activity](https://learn.chatgpt.com/docs/notifications)
- [Integrated terminal](https://learn.chatgpt.com/docs/integrated-terminal)
- [IDE settings](https://learn.chatgpt.com/docs/ide/settings)

---

**Status:** verified

**Applies to:** App, CLI, IDE

**Last verified:** 2026-08-26
