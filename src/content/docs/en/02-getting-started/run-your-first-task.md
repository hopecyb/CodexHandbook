---
title: Run your first task
description: Complete a small change with a clear prompt.
locale: en
source_locale: zh-CN
translation_status: draft
translated_at: 2026-07-25
---

The example below defaults to the **desktop App**; CLI/IDE can use the same prompt.

## Example task

In your practice project, tell Codex:

```text
Goal: Append a section "Today's practice" at the end of hello.md with a three-item bullet list.
Constraints: Only modify hello.md; do not delete existing content; do not make network requests.
Acceptance: The file ends with that heading and exactly three list items.
If information is missing, ask me first—do not guess.
```

## While it runs

1. Ask for a short plan first (or request one yourself)
2. When approving file writes, confirm paths are correct
3. When done, go to [Review the result](/02-getting-started/review-the-result/)

Prompting basics: [Prompt basics](/05-core-capabilities/prompting/prompt-basics/).


---

**Status:** review  
**Applicable products:** App / CLI / IDE  
**Last verified:** 2026-07-25
