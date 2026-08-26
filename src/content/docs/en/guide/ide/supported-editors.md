---
title: Supported editors
description: Distinguish the VS Code-compatible extension from Xcode and JetBrains integrations.
locale: en
source_locale: zh-CN
source_revision: 1f0b54d
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

Codex enters mainstream editors through different mechanisms: the Codex extension for VS Code-family editors, and native integration entry points for Xcode and JetBrains IDEs.

## Current support paths

| Editor | Codex entry | How to open |
|---|---|---|
| Visual Studio Code | Codex extension | Codex icon or `Codex: Open Codex Sidebar` |
| Cursor | Compatible Codex extension | Codex icon or Command Palette |
| Windsurf | Compatible Codex extension | Codex icon or Command Palette |
| Visual Studio Code Insiders | Codex extension | Extensions panel and Codex sidebar |
| Xcode | Xcode coding assistant integration | Start a chat and select Codex Agent |
| JetBrains IDEs | JetBrains AI Chat integration | Open AI Chat and select Codex |

Installation entry points and minimum versions can change. Start from the [official Codex IDE page](https://learn.chatgpt.com/docs/codex/ide) rather than inferring official support from similarly named third-party extensions.

## Best uses for the IDE entry point

- Attach the currently open file or selection directly to a question.
- Explain, modify, and follow up on local code.
- Review summaries and changes beside source code.
- Keep small tasks local and delegate longer work when it grows.

Example:

```text
Inspect the retry loop in the current selection.
Explain the termination condition first, then make the smallest change.
Modify only the current file and its corresponding test.
Report the diff and test command; do not upgrade dependencies.
```

## Keep multiple editors consistent

1. Put build, test, and formatting commands in repository `AGENTS.md` or contribution docs.
2. Constrain file scope in prompts rather than relying on an IDE-specific button.
3. Accept against the Git diff and the same test set, not merely “it runs in my IDE.”
4. Write editor-specific instructions only when exact UI guidance is necessary.

## Editors outside the list

For editors outside this list, use [Codex CLI](/en/guide/cli/) or the [desktop App](/en/guide/desktop-app/). Do not force-install the VS Code package into an incompatible editor or treat a third-party integration as an OpenAI feature by default.

See [Install and enable the IDE integration](/en/guide/getting-started/install-ide-extension/) for installation and [Editor context](/en/guide/ide/editor-context/) for context behavior.

---

**Status:** verified

**Applies to:** IDE

**Last verified:** 2026-08-26
