---
title: Install and enable the IDE integration
description: Open Codex correctly in VS Code-family editors, Xcode, and JetBrains IDEs.
locale: en
source_locale: zh-CN
source_revision: fb7ff84
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 20
---

IDE entry points fall into two groups; their installation paths are not interchangeable:

| Editor | Current entry | How to open |
|---|---|---|
| Visual Studio Code, Cursor, Windsurf, VS Code Insiders | Codex extension | Select the Codex icon or run `Codex: Open Codex Sidebar` |
| Xcode | Xcode coding assistant integration | Start a chat and select the Codex Agent |
| JetBrains IDEs | JetBrains AI Chat integration | Open AI Chat and select Codex |

See [Supported editors](/en/guide/ide/supported-editors/) for the complete matrix.

## Install and verify in VS Code-family editors

1. Install the Codex extension from the official Marketplace entry.
2. Open a practice project rather than an empty window.
3. Select the Codex icon. If it is not visible, run `Codex: Open Codex Sidebar` from the Command Palette.
4. Authenticate with a ChatGPT account or API key.
5. Start a chat, attach the current file, and ask a read-only question.

Minimal acceptance prompt:

```text
Read only the file that is currently open. Do not edit code.
Explain its responsibility, inputs, and outputs in three points, citing a symbol
name for each point.
```

A response that matches the current file and symbols indicates that editor context is arriving correctly. Create a Git checkpoint before a write task.

## Common failures

- **Sidebar missing:** run `Codex: Open Codex Sidebar` from the Command Palette.
- **Wrong context:** confirm that the project window, current file, and selection belong to the expected repository.
- **Repeated sign-in:** CLI and IDE share cached authentication; check the active account and sign in again.
- **Windows toolchain in WSL:** enable `chatgpt.runCodexInWindowsSubsystemForLinux` only when needed; changing it reloads VS Code.
- **Different third-party behavior:** verify compatibility with the VS Code extension. Do not copy the Xcode or JetBrains entry point into another editor.

For the longer beginner path, see [Install an IDE integration](/en/guide/getting-started/install-ide-extension/).

## Official sources

- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)
- [IDE settings](https://learn.chatgpt.com/docs/ide/settings)

---

**Status:** verified

**Applies to:** IDE

**Last verified:** 2026-08-26
