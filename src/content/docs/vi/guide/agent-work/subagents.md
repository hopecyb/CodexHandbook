---
title: Subagent
description: Ủy thác tác vụ con cho ngữ cảnh độc lập — khi nào tách, bàn giao thế nào, nghiệm thu thế nào.
locale: vi
source_locale: zh-CN
source_revision: d65f0ec
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 30
reviewed_at: 2026-08-26
---

A **subagent** is an independent work unit started by the main Agent for a defined subproblem. It has its own context and returns conclusions and evidence to the main thread. The main Agent retains global decisions and final acceptance.

![Codex subagent orchestration: the main Agent delegates bounded work, subagents return evidence, and the main Agent consolidates and verifies](/diagrams/subagent-orchestration-vi.svg)

## Three isolation layers

| Layer | Isolated? | Meaning |
|---|---|---|
| Conversation context | Yes | Each subagent focuses on its task without carrying every main-thread detail |
| Sandbox and permission mode | Inherited | Independent execution does not grant higher access |
| Workspace files | Not necessarily | Agents may see one workspace; concurrent writes can conflict |

The key rule is: **context isolation is not file isolation.** Divide ownership by directory, component, or worktree before parallel edits.

## Current availability

Current Codex versions provide subagents by default, with activity visible in relevant desktop App, CLI, and IDE surfaces. UI details change; the stable pattern is to ask Codex to delegate independent work while the main thread consolidates it.

Use `/agent` in the CLI to inspect or switch threads. Supporting IDE surfaces show background Agents, and the desktop App displays task thread activity. Exact controls depend on client and account.

## When to split work

Consider a subagent when at least two apply:

1. The task can be described independently without frequent synchronization.
2. It has an explicit deliverable such as a file list, test result, or one-page conclusion.
3. It can run in parallel, or deep isolation greatly reduces main-thread noise.

### Good parallel work

- Read-only mapping of frontend, backend, and tests.
- Independent investigation of unrelated failing tests.
- Evidence collection for two technical options.
- Dedicated security, performance, or documentation review.

### Keep in the main thread

- Requirements are unclear and need user dialogue.
- Steps must run strictly in sequence.
- Edits concentrate in one file or code region.
- “Look around” has no completion criterion.

Subagents add token and consolidation costs. Do not parallelize a small task that one clear thread handles well.

## Main Agent responsibilities remain

The main Agent retains:

- global goal, user constraints, and final decisions;
- subtask boundaries and file ownership;
- resolution of conflicting conclusions;
- merged tests, build, and risk reporting.

A subagent reporting “done” is a subtask signal, not proof that the whole task is complete.

## Write an acceptable delegation contract

```text
Start one subagent to analyze session refresh in packages/auth, read-only.

Scope: packages/auth and corresponding tests; do not edit.
Question: Can an old token be reused after refresh failure?
Deliver: conclusion, key files and lines, reproduction path, recommended test.
Verification: every claim must be checkable in source or existing tests.
Return: under 500 words; the main thread decides whether to edit.
```

It defines responsibility, scope, question, prohibition, verification, and decision owner.

## Three-way example

For an intermittent sign-in regression:

| Subtask | Permission and scope | Deliverable |
|---|---|---|
| A: code path | Read-only `src/auth/` | Call chain from entry to failure branch |
| B: test evidence | Read-only tests and logs | Smallest stable reproduction |
| C: recent changes | Read-only related Git history | Most likely introducing change and evidence |

After all return, compare evidence before choosing a repair. Do not let A, B, and C all edit `src/auth/session.ts`.

## Isolate parallel writes

1. Split writes into non-overlapping directories or components.
2. Assign separate worktrees or branches.
3. State the exact files each Agent owns.
4. Let the main Agent merge and rerun verification.

Passing isolated tests does not prove the merged combination works.

## Acceptance checklist

- Does the result answer the original question without expanding scope?
- Does it include verifiable file locations, logs, or tests?
- Did it obey read-only, directory, and command constraints?
- Are conflicting results explicitly resolved?
- Were full tests and build rerun after merging?
- Are unresolved issues and residual risks stated?

## Combine with other capabilities

- **Skill** preserves a subtask method and output format.
- **MCP** gives controlled external tools or data.
- **Hook** adds guards at subagent start, stop, or tool calls.
- **Worktree** isolates file edits; it solves workspace conflicts, not context.

Continue with [Multi-agent coordination](/vi/cases/workflows/multi-agent-coordination/) and [Handoff and resume](/vi/guide/agent-work/handoff-and-resume/).

---

**Trạng thái:** verified

**Áp dụng cho:** App / CLI / IDE

**Căn cứ kiểm chứng:** Compared with current subagent documentation; explains context isolation, inherited permissions, activity entry points, token cost, write conflicts, and main-Agent final responsibility.

**Kiểm chứng gần nhất:** 2026-08-26
