---
title: Agent song song
description: Đẩy nhiều tác vụ Agent cùng lúc mà không kéo mình vào xung đột merge và rối rà soát.
locale: vi
source_locale: zh-CN
source_revision: 6f0977b
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 30
reviewed_at: 2026-08-26
---

The basic unit of parallel work is a chat with its own context, messages, result, and goal. A task is suitable for parallel execution when **its parts are independent, have clear file boundaries, and can be accepted separately**, not merely because it has many steps.

![Orchestration diagram in which the main thread delegates independent work to several subagents and consolidates evidence and conflicts](/diagrams/subagent-orchestration-vi.svg)

## Decide whether work can run in parallel

| Can run in parallel | Should remain sequential |
|---|---|
| Two read-only investigations | The second task depends on the first task's conclusion |
| Code and documentation have non-overlapping directories | Both tasks modify the same core file |
| Two approaches produce separate prototypes | Requirements are still changing frequently |
| Each task has independent tests | Correctness can only be established after joint integration |

The official guidance recommends avoiding two chats that write to the same data source. Use separate Git worktrees for parallel coding.

## Progress from simple to complex

### 1. Start with parallel read-only tasks

```text
Task: Analyze the latest failure in the authentication module. Do not edit files.
Scope: src/auth/** and the corresponding tests.
Deliverable: root-cause hypotheses, evidence paths, remaining uncertainty,
and recommended verification commands.
```

Read-only tasks do not create merge conflicts and are a good first exercise.

### 2. Then parallelize write tasks

For each chat, define the goal, file ownership, exclusions, and acceptance criteria:

```text
Goal: Document authentication error codes.
Ownership: docs/auth/** only.
Do not modify: src/**, lockfiles, or shared configuration.
Acceptance: run pnpm check:links and report the result.
```

Put each coding chat in a separate [worktree](/vi/guide/desktop-app/worktrees/). Assign shared configuration to the main chat or one designated owner.

### 3. Consolidate centrally

Do not concatenate results without review. The main chat should verify:

1. that each task stayed within its boundary;
2. that its evidence and tests are reproducible;
3. that conclusions do not conflict;
4. whether integration tests must be rerun after merging.

## Long-running work and Goal mode

Enter `/goal` in the desktop App, CLI, or IDE to start Goal mode. A goal should define the outcome, constraints, and verification criteria. Each chat has its own goal. Parallel execution does not expand sandbox access or permissions; work still pauses when an operation requires a decision.

For finer-grained tool orchestration, see [Subagents](/vi/guide/agent-work/subagents/).

## Official sources

- [Long-running work](https://learn.chatgpt.com/docs/long-running-work)
- [Git worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees)
- [Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents)

---

**Trạng thái:** verified

**Áp dụng cho:** App, CLI, IDE

**Kiểm chứng gần nhất:** 2026-08-26
