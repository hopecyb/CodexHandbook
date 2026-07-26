---
title: Run your first task
description: Complete a small change with a clear prompt.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: reviewed
translated_at: 2026-07-26
reviewed_at: 2026-07-26
---

The example below defaults to the **desktop App**; CLI/IDE can use the same prompt.

Many people try to make Codex “build a full website” or “refactor the whole project” on the first run. That often goes out of control quickly.

A small first task is safer. Completing the full loop once matters more than starting big.

## Why keep the first task this small

A good first task usually meets all three:

- Small change scope
- Result you can check at a glance
- Easy to undo if something goes wrong

So this page uses a tiny practice example.

## Example task

In your practice project, tell Codex:

```text
Goal: Append a section "Today's practice" at the end of hello.md with a three-item bullet list.
Constraints: Only modify hello.md; do not delete existing content; do not make network requests.
Acceptance: The file ends with that heading and exactly three list items.
If information is missing, ask me first—do not guess.
```

## What each part of the prompt does

This prompt separates several critical pieces:

- **Goal**: what to do
- **Constraints**: what must not be changed
- **Acceptance**: how to know it is done
- **Ask me first if information is missing**: stop it from guessing

This is not a fixed template—it just makes the parts that are easiest to leave vague explicit.

## Common misconceptions

### 1. A bigger first task teaches you more

The first run is about completing the full loop, not doing the biggest possible job.

### 2. Once the prompt is written, let it improvise

On the first task, watch three things:

- Whether scope stays within bounds
- Whether it is editing the files you named
- Whether the result matches acceptance

### 3. If it gets the first task wrong, I must be doing it wrong

The first task is supposed to include:

- Spotting what went wrong
- Pointing out the problem
- Knowing how to roll it back

## While it runs

1. Ask for a short plan first (or request one yourself)
2. When approving file writes, confirm paths are correct
3. When done, go to [Review the result](/guide/getting-started/review-the-result/)

## Suggested order

Follow these five steps:

1. Pick a safe practice project
2. Give a small task that touches only one file
3. Before approving, check what it will change
4. After it finishes, check scope and results
5. If you are unhappy, undo or steer with a precise correction

After these five steps, the collaboration rhythm feels much clearer.

## What to check when it finishes

Focus on three things:

1. Did it only change `hello.md`?
2. Does the end of the file really contain that new section?
3. Are there exactly three list items?

If all three pass, the small first task basically worked.

## If it got it wrong

Getting it wrong the first time is normal. You can continue like this:

```text
You changed too much. Revert edits to other files and keep only the hello.md changes.
```

Or:

```text
Do not make more edits. Tell me exactly what you changed just now.
```

Prompting basics: [Prompt basics](/prompts/basics/).


---

**Status:** verified  
**Applicable products:** App / CLI / IDE  
**Last verified:** 2026-07-26
