---
title: Diff, comentários e revisão
description: Ler mudanças e deixar comentários de revisão.
locale: pt
source_locale: zh-CN
source_revision: 3efee20
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 50
reviewed_at: 2026-08-26
---


A chat summary is Codex's explanation of the work. A Git diff is what actually changed in the files. The desktop App's review pane shows diffs, lets you add line-level comments, and lets you choose which changes to stage, revert, commit, or push.

The project must be in a Git repository to use the full review pane and `/review`.

## Two review layers

First inspect the scope yourself, then invoke an independent reviewer to look for implementation issues:

1. Open the review pane and check the number and paths of changed files.
2. Select **Last turn** to see exactly what changed in the latest turn.
3. Switch between **Unstaged**, **Staged**, **Commit**, and **Branch** to confirm the review scope.
4. Run `/review` in the input area.
5. Choose whether to compare against a base branch, review uncommitted changes, inspect a specific commit, or apply custom criteria.
6. Read the findings in priority order, then decide what to fix.

The `/review` reviewer is read-only by default and does not modify the worktree. If you subsequently ask Codex to fix a finding, the original sandbox and approval rules still apply.

## Reusable review criteria

```text
Review the current uncommitted changes. Focus on:
- changes outside the task scope;
- behavioral regressions, edge cases, or security issues;
- whether tests cover failure paths;
- whether the documentation matches the implementation.

List findings first, ordered by severity. For each finding, provide the file,
location, evidence, and the smallest reasonable fix.
If you find no issues, say so explicitly and list any remaining test gaps.
```

## Reduce ambiguity with line comments

Hover over a suspicious line, select the **+** that appears, and write specific feedback. After leaving all comments, send one explicit instruction:

```text
Address the line comments I left. Keep the change set minimal, rerun the
relevant tests, and show the new diff when finished.
```

Useful comments identify a risk or acceptance condition, such as "What does this return for an empty array?" A comment that only says "This is wrong" is usually insufficient.

## Staging and reverting

The review pane can stage, unstage, or revert an entire diff, a file, or an individual hunk. Reverting discards changes. Before doing so, confirm that the changes were not already present when the task began.

Use a consistent acceptance order: scope → behavior → tests → security → maintainability. See [Review diffs](/pt/guide/quality/review-diffs/) for more techniques.

## Official sources

- [Code review](https://learn.chatgpt.com/docs/code-review)

---

**Status:** verified

**Applies to:** App, CLI, IDE

**Last verified:** 2026-08-26
