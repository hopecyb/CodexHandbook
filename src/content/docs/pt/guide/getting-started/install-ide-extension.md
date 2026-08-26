---
title: Instalar a extensão IDE
description: Instale a extensão Codex em um editor suportado.
locale: pt
source_locale: zh-CN
source_revision: 1196b38
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 50
reviewed_at: 2026-08-26
---


Current IDE support has more than one installation path:

| IDE | Installation or activation |
|---|---|
| Visual Studio Code, Cursor, Windsurf, VS Code Insiders | Install or enable the Codex extension |
| Xcode | Select Codex Agent in Xcode's coding assistant |
| JetBrains IDEs | Select Codex in AI Chat |

Use the entry for your IDE on the [official Codex IDE page](https://learn.chatgpt.com/docs/codex/ide). Do not infer button locations from a different IDE.

## VS Code-compatible editors

1. Install the Codex extension from the official Marketplace entry.
2. Open the root of a real project workspace.
3. Select the Codex icon. If it is missing, open the Command Palette and run `Codex: Open Codex Sidebar`.
4. Sign in with ChatGPT or an API key.

## Xcode and JetBrains

- Xcode: open the coding assistant, start a chat, and select Codex as the Agent.
- JetBrains: open AI Chat and select Codex.

These entry points are provided by their respective IDEs and do not have the same interface as the VS Code extension.

## Check editor context after installation

Open a source file, select a short section, and ask:

```text
Explain only the inputs, outputs, and failure paths of the current selection.
Do not edit files. Cite the relevant symbol names.
```

If the answer is unrelated to the selection, check:

- whether the expected project root is open;
- whether the file or selection is attached to the composer;
- whether the correct identity and workspace are active;
- whether another AI extension conflicts with the integration or shortcuts.

Continue with the [local IDE task workflow](/pt/guide/ide/local-task-workflow/). See [Supported editors](/pt/guide/ide/supported-editors/) for the complete support matrix.

---

**Status:** verified

**Applies to:** IDE

**Verification basis:** The current official IDE quickstart lists VS Code, Cursor, Windsurf, VS Code Insiders, Xcode, and JetBrains, with separate integration paths for the latter two groups.

**Last verified:** 2026-08-26
