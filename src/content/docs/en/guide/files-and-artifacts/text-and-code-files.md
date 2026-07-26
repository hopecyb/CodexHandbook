---
title: Text and Code Files
description: Have Codex read and write source, config, and documentation text files correctly.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

Most development work is **text and code files**: source, tests, config, Markdown. This page covers scoping changes, keeping style consistent, and merging safely.

The key is changing the right places the right way—without extra collateral edits.

## What this page covers

- Correct paths and encoding
- Organizing multi-file edits
- Coordinating with formatters and linters

## File types and notes

| Type | Notes |
|---|---|
| Source `.ts` `.py` etc. | Follow `AGENTS.md` and existing patterns |
| Config `.json` `.yaml` `.toml` | Easy to break structure; require valid syntax |
| Docs `.md` | Relative links, mixed-language conventions |
| Generated code | Clarify commit vs gitignore |

Context: [File and folder context](/guide/context/file-and-folder-context/)

## Why these files go wrong

Often:

- Writes to wrong files
- Rewrites large areas for a small fix
- Style diverges from project norms
- Config syntax broken quietly

## Recommended prompt structure

```text
Goal: <one line>
Allowed edits: <path glob>
Forbidden: lockfile, unrelated directories
Style: match <example file>
Done when: list changed files + run <test command>
```

See [Task anatomy](/prompts/task-anatomy/)

## Common misconceptions

### 1. “Fix this file” alone is usually thin

Add:

- Allowed files
- Off-limits files
- Style reference
- How to verify

### 2. Config is not “just text”

`.json`, `.yaml`, `.toml` often fail on structure, indentation, syntax.

### 3. Bigger change ≠ faster

Small, explainable, reviewable edits beat sweeping “while I’m here” refactors.

## Encoding and line endings

- Default **UTF-8**; declare special encodings in `AGENTS.md`
- Match `.editorconfig` / `prettier` to avoid whole-file newline diffs
- Large files: @ specific functions, not full rewrite

## If you fear scope creep

Require:

1. List affected files first
2. Minimal change for this task only
3. Verification steps after edit

## Review focus

- [Review diffs](/guide/quality/review-diffs/): logic, scope, deletions
- [Run tests](/guide/quality/run-tests/)
- No unimplemented `TODO` placeholders left behind

## Common mistakes

- “Refactor the whole project” → hundreds of files
- Text edit on binary or minified files
- Doc links as absolute paths → 404 on site

Text and code edits fail when scope sprawls and review is hard. State scope, style, and verification up front.

---

**Status:** verified  
**Products:** App / CLI / IDE / Cloud  
**Verification basis:** Cross-checked against verified file/folder context, task anatomy, review-diffs, and run-tests pages; stable principle: scope paths, match style, state verification.  
**Last verified:** 2026-07-26
