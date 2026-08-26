---
title: Choose a Codex client
description: Choose among the desktop App, CLI, IDE integration, and Cloud based on where and how the work happens.
locale: en
source_locale: zh-CN
source_revision: 1e89f67
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 2
---

When choosing a Codex entry point for the first time, do not compare dozens of features. Answer one question first: **where does this work mainly happen?**

![Codex client-selection diagram: choose the desktop App, CLI, IDE integration, or Cloud from the work location](/diagrams/codex-client-selection-en.svg)

## Decide in 30 seconds

| Where the work mainly happens | First choice | Best interaction |
|---|---|---|
| Across several local projects and parallel tasks | **Desktop App** | Track tasks, review diffs, handle approvals, and manage longer work |
| In terminals, scripts, or existing command-line workflows | **CLI** | Assign tasks, run commands, combine scripts, and automate |
| In VS Code, compatible editors, Xcode, or JetBrains | **IDE integration** | Ask with editor context and edit and review in place |
| In connected remote repositories and isolated environments | **Cloud** | Delegate remote runs, parallelize work, and review results later |

Without a strong preference, the **desktop App** is usually the clearest starting point. If you already live in a terminal or VS Code, staying in that work surface reduces context switching.

## What each entry point solves

### Desktop App: control console for local work

The desktop App is useful when you need task state, file changes, and approvals to remain visible. It is especially suitable for:

- following several tasks or projects;
- isolating parallel changes with worktrees;
- reviewing a diff before following up or correcting work;
- scheduling work that must keep running on a local project.

Example: let one task fix a sign-in regression and another perform a read-only performance analysis, then review the results separately.

### CLI: put Codex in the terminal workflow

The CLI is for people who already manage projects from the command line. It is closest to tests, Git, and scripts, and makes repeatable steps easy to document for a team.

```bash
codex
```

Example: start Codex at the repository root and ask it to reproduce a failing test, identify the root cause, make the smallest change, and rerun the same test.

### IDE integration: work around the current code

Use the IDE integration when the question is strongly tied to the current file, selection, or diff. Current support has two forms: VS Code, Cursor, Windsurf, and compatible editors use the Codex extension; Xcode and JetBrains IDEs use their own Codex integration entry points.

Example: select a difficult function, ask Codex to explain inputs, outputs, and exception paths, then request tests for its edge cases.

### Cloud: delegate in an isolated remote environment

Cloud fits connected remote repositories and tasks that should run independently of your computer. Isolated cloud tasks are useful for parallel exploration, longer work, and centralized review after completion.

Example: delegate three independent repository issues as separate cloud tasks, wait for their changes and verification evidence, and review each result.

## They work together

One workflow can hand off between clients:

1. Clarify a local issue around the current file in the IDE.
2. Delegate longer exploration to the desktop App or Cloud.
3. Run team-standard checks in the CLI.
4. Return to the desktop App or review surface to inspect the final diff.

The decision is not “which is strongest?” It is **which is closest to the current context and makes the result easiest to verify?**

## Two common scenarios

### Scenario 1: first real bug fix

Start with the desktop App. You can see the conversation, changes, and permission requests together. After completing one full loop, try the CLI or IDE.

### Scenario 2: the team already has fixed commands and CI conventions

Start with the CLI and record installation, test, and formatting commands in `AGENTS.md`. Codex can then follow the same project rules in every task.

## Verify immediately after choosing

Do more than confirm that the client opens. Complete this loop in a practice repository:

1. Ask Codex to read and explain a file.
2. Request a small, reversible change.
3. Inspect the diff rather than only the final response.
4. Run one verification command.
5. Confirm that you know how to deny or narrow a permission request.

See [Feature comparison](/en/guide/reference/feature-comparison/) for the full matrix and [Permissions and sandboxing](/en/guide/permissions-and-sandbox/) for execution boundaries.

---

**Status:** verified

**Applies to:** App / CLI / IDE / Cloud

**Verification basis:** Compared with the current official documentation for the ChatGPT desktop App, Codex CLI, IDE, and Cloud. The guidance chooses by work location and interaction model and distinguishes the VS Code-compatible extension from the Xcode and JetBrains integrations.

**Last verified:** 2026-08-26
