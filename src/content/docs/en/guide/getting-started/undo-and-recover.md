---
legacyVerification:
  status: verified
  products: App / CLI / IDE
  basis: 'Cross-checked against this handbook''s verified introductory principles on approvals, result review, failure recovery, and Git and the workspace. This page confirms the stable rollback method: pause, inspect scope, prefer undo, then restore a safe state. It does not treat any client''s undo control as a fixed interface contract.'
  checkedAt: '2026-07-26'
title: Undo and recover
description: Safely roll back when the result is unsatisfactory.
locale: en
source_locale: zh-CN
source_revision: 5e7a06e
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 100
---

A common worry when using Codex for the first time is: if it makes a bad change, can I go back?

Usually you can, but follow a safe rollback process.

When the result is outside the agreed scope or its quality is poor:

1. Use the client's undo or revert changes feature, according to its current interface.
2. If the project uses Git, discard working tree changes using a method you know. Beginners can start without Git in a disposable practice directory.
3. Start a new thread, tighten the constraints, and try again.

Often it helps to keep the scope small in advance: allow only a few files, state what must not change, and review a plan before execution.

## Distinguish “undo” from “recover”

- **Undo**: roll back the particular change you did not want.
- **Recover**: return the project to a state you know is safe.

Undoing a change to one small practice file is usually simple. More difficult cases include:

- Codex changed several files.
- You made additional manual changes afterward.
- You no longer remember who changed what.

Pause further edits and narrow down the affected scope first.

## What to do after the first mistake

1. Stop making changes; do not panic and ask Codex to change even more.
2. Confirm which files it changed.
3. Prefer the product's undo feature when available.
4. If the project already uses Git, roll back with a Git method you know.
5. Once you are back in a safe state, give clearer instructions before trying again.

## If you do not know Git yet

The word “recovery” can make beginners think they must first learn many Git commands. That is not necessary at the start.

Instead:

- Practice in a disposable directory.
- Ask Codex to change only one small file at a time.
- Undo the result directly if you do not like it.

Learn Git rollback methods systematically when you begin working on real projects.

## Prevention matters more than repair

These habits greatly reduce the chance that a mistake becomes hard to clean up:

- State exactly which file may be changed.
- Ask for a plan before execution.
- Review each step as it finishes instead of accumulating many changes.
- Confirm high-risk operations in advance.

## Use recovery points to explore

Recovery is useful not only after mistakes but also before trying alternative approaches.

Consider creating a recovery point before:

- Comparing two implementation directions
- Asking an agent for a broad refactor
- Trying an automation script or batch replacement
- Working on requirements that may soon change

A safer rhythm is:

```text
Confirm the current safe state
→ Ask Codex which files it will affect
→ Create a recovery point or confirm Git status
→ Make a small change
→ Review the diff and verification results
→ Keep it, roll it back, or try another approach
```

If the client supports checkpoints or replay, you can use those built-in features. In a Git project, a branch, stash, or small commit can also serve as a recovery point. What matters is not memorizing one command, but avoiding wider changes while you still cannot see their impact clearly.

Making a mistake is manageable. Continuing to change things without understanding the affected scope is much harder to recover from.
