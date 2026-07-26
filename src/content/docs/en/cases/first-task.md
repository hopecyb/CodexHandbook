---
title: First task
description: Complete a small change with a clear prompt and learn how to review results.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

# First task

The example below assumes the **Desktop App** by default; CLI/IDE can use the same prompt.

## Meta information

| Field | Content |
|---|---|
| Audience | Beginners |
| Client | Desktop App (recommended) |
| Estimated time | 15–20 minutes |

## 1. Goal and background

**Goal:** Complete a safe file edit in a practice project.

**Success criteria:** Only the specified file is modified, the result matches the acceptance description, and you can read the diff.

## 2. Preparation

- Client installed and signed in
- Practice project created (with `hello.md` or similar file)

## 3. Recommended prompt

```text
Goal: Append a section "Today's practice" at the end of hello.md with a three-item bullet list.
Constraints: Only modify hello.md; do not delete existing content; do not run network requests.
Acceptance: The heading and exactly three list items appear at the end of the file.
If information is insufficient, ask me first; do not guess.
```

## 4. Execution and review

1. Ask for a short plan first (or request one yourself)
2. When approving file writes, confirm the path is correct
3. After completion, check the diff against each acceptance criterion

## 5. Next steps

- [Prompt basics](/prompts/basics/)
- [Verification](/guide/verification/)
- [Start here](/guide/start-here/)

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** This page is a low-risk introductory exercise within the handbook: limited to editing one file, no network access, requiring you to read the diff and check each acceptance criterion. Related prerequisite chapters (installation, practice project, verification) have been cross-checked; content does not depend on specific product version details.
