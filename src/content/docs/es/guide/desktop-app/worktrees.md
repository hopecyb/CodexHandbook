---
title:  Árboles de trabajo
description:  Probar cambios en paralelo con árboles de trabajo aislados.
locale: es
source_locale: zh-CN
source_revision: f050c32
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 40
---

A Git worktree gives one repository multiple independent checkout directories. Each directory has its own files and branch state while sharing the repository's Git metadata. Worktrees let coding chats run in parallel without overwriting one another's files.

## Prerequisites

- The project must be in a Git repository.
- Each task boundary must be independently describable and verifiable.
- Parallel tasks should not modify the same core files.

If you are learning Codex for the first time, complete tasks sequentially in Local mode. Introduce worktrees when waiting time or file conflicts become an actual problem.

## Create a worktree in the App

1. Select **Worktree** below the input area of a new chat.
2. Choose a starting branch: the main branch, a feature branch, or the current branch with unstaged changes.
3. Submit the prompt; the App creates a Git worktree.
4. Inspect, test, and review the work in its independent chat.
5. Use **Handoff** when you are ready to return to the local checkout.

A worktree created by default uses a detached HEAD. Codex can still work there, but define the destination branch and merge approach before preserving or sharing commits.

## Two parallel tasks

| Chat | Worktree task | File ownership | Acceptance |
|---|---|---|---|
| A | Fix a sign-in error | `src/auth/**` | Authentication tests pass |
| B | Extend authentication docs | `docs/auth/**` | Link check passes |

Do not let both chats modify a shared lockfile or configuration file. If that is unavoidable, assign the change to one chat and let the other provide analysis only.

## Pre-handoff checks

```bash
git status --short
git diff --check
git diff --stat
```

Then run the task-specific tests. Use Handoff, commit, or merge only after you know which chat produced each change, which branch should receive it, and whether verification passed.

## Scheduled tasks and Remote

- A scheduled task in a Git repository can use a dedicated background worktree to avoid conflicts with current work.
- Remote can control a worktree chat on a connected computer from a mobile device. The repository and commands remain on that computer or in its remote development environment.
- A non-Git project has no worktree isolation; a scheduled task operates directly in the project directory.

## Official sources

- [Git worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees)
- [Long-running work and parallel chats](https://learn.chatgpt.com/docs/long-running-work)

---

**Status:** verified

**Applies to:** App

**Last verified:** 2026-08-26
