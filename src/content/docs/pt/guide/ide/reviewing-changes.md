---
title: Rever mudanças no IDE
description: Ler Diff, comentar e aceitar/rejeitar sugestões do Codex no editor.
locale: pt
source_locale: zh-CN
source_revision: 1ca9ffe
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 70
reviewed_at: 2026-08-26
---


The IDE is useful for reading summaries beside source code and focusing on a diff. A change appearing in the editor is not the same as acceptance. Inspect the diff, run tests, and then decide what to keep.

## Complete a local review

1. Read the result summary, but do not substitute it for the diff.
2. Expand changed lines and inspect every affected file.
3. Keep required edits and request follow-up changes for anything outside scope.
4. Run `/review` in the input area.
5. Compare against a base branch or review uncommitted changes.
6. Run project tests and static checks in the IDE terminal.
7. Confirm the final Git state with Git tools.

`/review` appears only when the open project is a Git repository. It reports findings by priority and does not modify the worktree. In the IDE you can choose:

- **Review against a base branch:** compare the current branch with the selected base.
- **Review uncommitted changes:** inspect current worktree changes.

Results appear in the current chat by default. Set `chatgpt.reviewDelivery` to `detached` to open a separate review chat.

## Prompt with explicit reviewer criteria

```text
Review the current uncommitted changes. Prioritize defects that could cause
wrong behavior, data loss, or security issues. Ignore pure style preferences.
Every finding must include a file location, trigger condition, and verifiable
impact. If there are no findings, state the remaining test gaps.
```

## Acceptance checklist

- [ ] Changed files match the allowed task scope.
- [ ] No accidental deletion, whole-file formatting, or sensitive files.
- [ ] Failure paths and edge cases are covered.
- [ ] Required tests, lint, and type checks pass.
- [ ] High-priority reviewer findings are fixed or explicitly accepted.
- [ ] `git diff --check` and `git status --short` are clean as expected.

For line comments, staging, or hunk-level reverts, use [Diffs, comments, and review](/pt/guide/desktop-app/diffs-comments-and-review/). For the general method, see [Review diffs](/pt/guide/quality/review-diffs/).

## Official sources

- [Code review](https://learn.chatgpt.com/docs/code-review)
- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)

---

**Status:** verified

**Applies to:** IDE

**Last verified:** 2026-08-26
