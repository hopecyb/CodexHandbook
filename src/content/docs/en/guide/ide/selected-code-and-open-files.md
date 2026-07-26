---
title: Selection and open files
description: Using selected code and open files to narrow IDE task scope precisely.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

The IDE extension excels at **small, high-precision** edits: select code, state intent, Codex changes nearby context. This page shows how selection and open files tighten scope and avoid editing the wrong place.

Selection tells Codex: focus here—do not expand scope on your own.

## What's covered

- Selection vs whole file vs @ path—when to use which
- Organizing context for multi-file refactors
- Reducing "it changed a bunch of unrelated files"

## Three ways to bound scope

| Method | When | Example |
|---|---|---|
| **Selection** | Single function, component, near stack trace | Select `parseUser()`, add null handling |
| **Open files** | Multiple related spots in-file | Open `auth.ts` + `auth.test.ts` |
| **@ path** | Cross-directory, not open | `@src/api/client.ts` align types with backend |

Deeper concept: [file and folder context](/guide/context/file-and-folder-context/)

## Minimum viable approach

1. Select the **smallest relevant snippet** (often 10–80 lines); state goal and [definition of done](/prompts/define-done/) in the prompt
2. If callers matter, open or @ 1–2 upstream files
3. Ask to "change only files related to X; list files before editing"
4. Accept IDE diff block by block—not accept all

## Multi-file tasks

```text
Open: implementation + tests + type definitions
Selection: optional—start from entry function
Prompt: module boundaries, directories that must not change
```

Large refactors: prefer [desktop App worktrees](/guide/desktop-app/worktrees/) or [planning mode](/guide/agent-work/planning/). IDE fits finishing touches and small commits.

## Common questions

### 1. Must I always select?

No—but if you know the focus is a small region, selection beats a vague "fix this function."

### 2. More selected lines ≠ safer

Too large relaxes scope again; too small may miss needed context. Aim for "just enough."

### 3. Open files vs @ paths?

- **Open files**: show what you are currently looking at
- **@ paths**: explicitly name files that must be included

Selection and open files exist to avoid dragging unrelated scope along.

## Pair with review

Before accepting, check [review diffs](/guide/quality/review-diffs/):

- Only agreed files changed?
- Unexpected deletes outside selection?
- Tests cover new branches?

Product page: [IDE reviewing changes](/guide/ide/reviewing-changes/)

## Common mistakes

| Mistake | Consequence |
|---|---|
| Select entire 1000-line file | Wasted context, oversized edits |
| Zero selection, "optimize this" | Model expands scope |
| Accept all without reading diff | Style drift or security issues |

## References

- [Constraints and boundaries](/prompts/constraints-and-boundaries/)
- stormzhang `09-ide.md`

---

**Status:** verified  
**Applicable products:** IDE  
**Verification basis:** This page describes stable IDE scope control: selection, open files, and explicit @ paths—general context organization in the editor, not tied to a specific extension button name.  
**Last verified:** 2026-07-26
