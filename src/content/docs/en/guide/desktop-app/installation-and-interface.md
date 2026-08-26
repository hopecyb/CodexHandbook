---
title: Installation and first use
description: Learn the project, chat, Codex, and review entry points in the ChatGPT desktop App.
locale: en
source_locale: zh-CN
source_revision: d61c2fa
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

This chapter is for readers opening the ChatGPT desktop App for the first time. The goal is not to memorize every button. It is to complete one **reviewable, verifiable small task**.

For installation and sign-in, see [Install the desktop App](/en/guide/getting-started/install-desktop-app/). The official App is currently available for macOS, Windows, and Linux. After signing in, you can start a chat, create a project, or open a local folder.

## Three objects to recognize first

| Object | Purpose | First step for beginners |
|---|---|---|
| Project or folder | Provides files and a working directory to the chat | Open a practice repository, not a production directory |
| Chat | Keeps the goal, context, progress, and result | Use one chat for one clear goal |
| Codex | Reads, changes, and verifies project content | Start with a low-risk change that is easy to check |

The interface will continue to evolve, but these objects are more stable than the location of any particular button.

## Complete your first real task

Prepare an existing Git repository. First confirm that it does not contain unrecorded changes you need to preserve. Open the folder in the App and start a Codex chat.

Enter:

```text
Read README.md first and modify only its "Run locally" section:
1. Fix the startup command that no longer works.
2. Leave every other section unchanged.
3. Show the diff and run any verification command documented in the project.
4. If verification is not possible, explain why. Do not claim completion.
```

When Codex finishes, do not rely only on the chat summary. Check:

1. whether the review pane contains only the expected files;
2. whether any deletion is justified;
3. whether the terminal output actually supports the claim that verification passed;
4. whether `git diff` matches the requested scope.

## Choosing Chat, Work, or Codex

- Use Chat for knowledge questions or idea exploration.
- Use Work for general work that spans files and tools.
- Use Codex when the task requires understanding, modifying, and testing a repository.

Use Quick chat for a temporary question that does not need lasting context. Keep work that requires continuity in a regular chat or project.

## What to check when something fails

- **Files are missing:** confirm that the correct folder is open and file access was not denied.
- **A command cannot run:** confirm dependencies are installed, then inspect the first meaningful terminal error.
- **Old changes are mixed in:** use `git status` to separate changes that existed before the task from current work.
- **The interface differs from this page:** navigate by logical objects—project/folder, chat, review, and terminal—instead of relying on a fixed screenshot layout.

Next, read [Diffs, comments, and review](/en/guide/desktop-app/diffs-comments-and-review/) and [Integrated terminal](/en/guide/desktop-app/integrated-terminal/).

## Official sources

- [ChatGPT desktop App](https://learn.chatgpt.com/docs/app)
- [Code review](https://learn.chatgpt.com/docs/code-review)

---

**Status:** verified

**Applies to:** App

**Last verified:** 2026-08-26
