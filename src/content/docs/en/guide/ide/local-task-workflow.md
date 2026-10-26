---
legacyVerification:
  status: verified
  products: IDE
  basis: >-
    Current OpenAI help guidance still describes the IDE extension as a client used with a local code repository. This workflow follows a stable local collaboration loop: open the workspace, limit files, describe the task, review the diff, run tests, and commit as a person. It does not depend on a specific extension interface.
  checkedAt: '2026-07-26'
title: Local Task Workflow
description: Start, follow, and complete a local Codex task in an IDE using open files and selections.
sidebar:
  order: 50
locale: en
source_locale: zh-CN
translation_status: reviewed
reviewed_at: 2026-10-25
translated_at: 2026-09-20
source_revision: '0264d4d'
---

A local IDE task follows an **open → select → describe → review → test** loop. It suits frequent, small changes. This page gives a common practical path; for context details, see [selected code and open files](/en/guide/ide/selected-code-and-open-files/).

## Recommended workflow

1. **Open the workspace root**—the whole repository, not a single file.
2. Open relevant files and [select a code fragment](/en/guide/ide/selected-code-and-open-files/) if needed.
3. In the Codex panel, state the goal, constraints, and [definition of done](/en/prompts/define-done/).
4. For a complex task, [ask for a plan](/en/prompts/ask-for-a-plan/) before execution.
5. [Review changes](/en/guide/ide/reviewing-changes/) in the diff or inline view.
6. Run the project's test command in the IDE terminal.
7. Make the `git commit` yourself unless your team has expressly authorized an agent to commit.

## Example prompt

```text
Edit only src/auth/login.ts and its corresponding tests.
Goal: change a 500 response on empty-email submission to 400 with an error message.
Do not change package-lock or run git push.
Done: run npm test -- auth and summarize the changes.
```

## When to use another entry point

| Situation | Suggested entry |
|---|---|
| Parallel tasks or worktrees | [Desktop app](/en/guide/desktop-app/) |
| Scripts or CI | [Non-interactive CLI](/en/guide/cli/non-interactive-mode/) |
| Standardized remote environment and PR creation | [IDE cloud task](/en/guide/ide/cloud-task-workflow/) |

## Common mistakes

- Not opening the workspace and therefore missing `AGENTS.md`.
- Accepting all inline suggestions in one click.
- Committing before running tests.

For context, see [editor context](/en/guide/ide/editor-context/) and [file and folder context](/en/guide/context/file-and-folder-context/).

## Common questions

### 1. Why emphasize opening the workspace root?

Much of the IDE extension's context depends on having the full project open, not an isolated file.

### 2. Is less review needed because editing in the IDE is convenient?

No. Convenience makes it easy to accept changes automatically, which is a reason to keep the review habit.

### 3. What is a good first task?

Choose one or two files, a result you can understand at a glance, and a change that is easy to test or preview.

Local IDE tasks work well in small steps, but convenience does not replace review and verification.
