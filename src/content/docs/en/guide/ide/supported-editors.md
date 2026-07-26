---
title: Supported editors
description: Which editors support the Codex IDE extension, how to choose, and common limits.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

The IDE extension embeds Codex in the **editor you already use**—start tasks, view diffs, and accept changes in the same UI. This page covers support scope and choice; installation: [Install IDE extension](/guide/ide/installation/).

## What's covered

- Which editors have official extensions
- IDE extension vs desktop App vs CLI
- Unifying workflow across editors on a team

## What to look at when choosing

Two questions: which editors are officially supported, and whether to stay in the IDE if you already have a favorite editor.

## Official support scope

**Concrete list and version requirements: [OpenAI Codex documentation](https://developers.openai.com/codex)**. Commonly includes:

| Editor | Typical users | Notes |
|---|---|---|
| Visual Studio Code | Most developers | Marketplace install; mature ecosystem |
| VS Code forks like Cursor | AI-editor users | Usually compatible with VS Code extension mechanism—verify in practice |
| JetBrains family (if offered) | Java/Kotlin/IDEA users | Features/UI may differ from VS Code build |

Editors not on the official list: use [CLI](/guide/cli/) or [desktop App](/guide/desktop-app/) instead—do not rely on unofficial ports.

## Common misconceptions

### Official support does not mean feature parity across clients

"Has an extension" is not "can do everything here."

Different entry points emphasize different work:

- IDE: code-adjacent edits
- App: project-level tasks and multi-task coordination
- CLI: terminal, scripts, remote environments

### Editor choice is not only habit

IDE fits well when you mostly:

- Edit code locally
- Use selection
- Edit and test in the same place

App or CLI often fit better for:

- Long tasks
- Document coordination
- Parallel multiple tasks

## When to choose the IDE extension

| Good fit | Less ideal |
|---|---|
| Want current file/selection in context automatically | Need parallel Agents, worktrees, App-only features |
| Prefer inline diff in editor | Mostly non-code long tasks (docs, research) |
| Already run tests and debug in IDE | Need standardized Cloud environment from scratch |

Decision entry: [Choose your Codex client](/guide/getting-started/choose-your-codex-client/)

## Division of labor with desktop App

```text
IDE extension: while editing → small steps → inline review → local tests
Desktop App: project tasks → parallel Agents → worktrees → notifications and Cloud delegation
```

Same account and project config can be shared; see [editor context](/guide/ide/editor-context/) and [AGENTS.md scope](/guide/customization/agents-md/scope-and-precedence/).

## Team alignment

1. Document **recommended editor + minimum extension version** in README
2. Core standards in `AGENTS.md`—not IDE-private features
3. Code review still uses Git diff—not views only one IDE can show

## Quick decision questions

1. Do you spend most time editing code in an editor?
2. Do you rely on current file, selection, and inline diff?
3. Do you not need multi-Agent, worktrees, or heavier task management yet?

If mostly yes, start with the IDE extension.

## Common mistakes

- Assuming IDE extension and App are 1:1 equivalent
- Starting tasks without workspace root open → wrong paths and `AGENTS.md` resolution
- Multiple AI extensions fighting for context and shortcuts

Often you pick the IDE extension simply because that is where you already work.

## References

- OpenAI Codex IDE documentation
- stormzhang `09-ide.md`
- KimYx0207 CX-08 IDE

---

**Status:** outdated  
**Applicable products:** IDE  
**Review note:** Official Help Center strongly confirms "Codex VS Code extension is compatible with most VS Code forks," but this page extends to Cursor, Windsurf, JetBrains support shapes and comparisons; needs an updated support matrix before `verified`.  
**Last verified:** 2026-07-26
