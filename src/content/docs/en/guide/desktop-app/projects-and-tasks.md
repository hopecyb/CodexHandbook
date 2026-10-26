---
legacyVerification:
  status: verified
  products: App
  basis: 'Current OpenAI Help Center documentation for the desktop app distinguishes project context from specific chat, work, and Codex conversations and explains that you can open a local folder or project to begin work. This page only explains the conceptual distinction: a project is the workplace; a task is this particular assignment.'
  checkedAt: '2026-07-26'
title: Projects and tasks
description: Manage projects and tasks in the app.
locale: en
source_locale: zh-CN
source_revision: '6a1f17f'
translation_status: reviewed
reviewed_at: 2026-10-25
translated_at: '2026-09-20'
sidebar:
  order: 20
---

“Project” and “task” sound simple, but they are easy to confuse at first. A project is the set of files or repository you are working in; a task is the specific thing you ask Codex to do.

For example:

- Your documentation site repository → project
- “Make the homepage terminology easier to understand” → task

This distinction matters because two levels are always present in the desktop app:

- Which project you are working in
- What you want Codex to do this time

## Project

- Add a practice directory or repository root.
- Focus on one project at a time to avoid mixing contexts.

Think of the project as the **workplace** for this collaboration. If it is the wrong place, many later steps will go wrong too.

## Task

- Start with a complete prompt.
- Observe the plan and tool calls.
- Approve or reject requests when necessary.

The task is your **specific assignment** to Codex. The clearer the assignment, the less it needs to guess while working.

For a conceptual comparison, see [Threads, tasks, and projects](/en/guide/foundations/threads-tasks-and-projects/).

## Common misunderstandings

### 1. Why choose a project before asking a question?

Codex needs to know which files or repository it should work on.

If you select the wrong project, problems such as “Why can't it see my files?” or “Why did it change something elsewhere?” become more likely.

### 2. Can one project have many tasks?

Yes. A steadier pattern is:

- Stay in the same project.
- Work on one clear task at a time.
- Start the next task after the first is finished.

This reduces confusion between contexts.

### 3. How should I describe a task at the start?

Include three kinds of information:

- The goal
- Scope and constraints
- What counts as complete

### 4. Should one large request be one task?

If the work covers a broad area, a safer approach is:

- Keep the same project.
- Split the work into several tasks.
- Give each task one clear goal.

## A useful order

When first working in the desktop app:

1. Confirm that the right project is selected.
2. Make sure the task has one main goal.
3. Add the scope limits and completion criteria.
4. After starting, pay particular attention to the plan, tool calls, and changes.
