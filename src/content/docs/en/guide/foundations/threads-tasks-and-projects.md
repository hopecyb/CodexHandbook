---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: This page only explains the three levels of project, thread, and task. Its internal links and concepts have been reviewed; the body does not depend on changing product facts.
  checkedAt: '2026-07-26'
title: Threads, tasks, and projects
description: Understand how conversations, tasks, and project workspaces relate.
locale: en
source_locale: zh-CN
source_revision: c360452
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 60
---

Different products may use slightly different terms. This handbook uses:

- **Project / workspace**: the folder or repository root linked to Codex
- **Thread / conversation**: a continuous exchange in which context accumulates
- **Task**: work with a specific goal, possibly involving several tool calls

People often blur these terms together, then wonder:

- Why does Codex still remember something I said earlier?
- Why does it keep following the old direction after I change the question?
- Why start a new thread in the same project?

The project determines where Codex works, the thread determines which conversation it continues, and the task defines what you want done now. Keeping the three separate makes many habits easier to understand.

![Illustration: a cutaway view of a large project box holding several task folders, each containing a few conversation threads](/illustrations/threads-tasks-projects.webp)

## Separate the three levels

- **Project / workspace**: the repository or folder you bring Codex into
- **Thread / conversation**: the current continuous chat between you and Codex
- **Task**: a specific goal within that chat

One project can have many threads.
One thread can contain more than one task.
Problems often start when the task changes but the thread still carries the old context.

## Practical advice

- **Start a new thread** when the topic changes to avoid interference from old context.
- For a long task, define phases and checkpoints; see [Prompts for long-running tasks](/en/prompts/long-running-tasks/).
- To continue across conversations, prepare a handoff summary; see [Handoff and resume](/en/guide/agent-work/handoff-and-resume/).

## Common misunderstandings

### 1. Should I always use the same thread in the same repository?

Not necessarily. The repository can stay the same while the task changes. Once the topic changes, old context may become noise.

### 2. Does a new thread mean losing all context?

That is not always a bad thing. Often you need to drop irrelevant context and carry forward only what matters for this task.

### 3. Are task and thread the same thing?

No. A thread is like a container; a task is one piece of specific work within it.

The project defines where Codex works, the thread defines which history it carries, and the task defines what it must accomplish now.
