---
title: Failure recovery
description: When tasks drift, tests go red, or context runs out—how to roll back safely and continue.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

**Failure recovery** covers how to stabilize the situation after a task goes off track or stops mid-way. This chapter gives repeatable **detect → stop loss → recover → postmortem** steps—pair with [Undo and recover](/guide/getting-started/undo-and-recover/) and [Long-running task management](/cases/workflows/long-running-task-management/).

## What this page covers

- When to `git stash`, revert commits, or open a new thread
- How to package failure info into the next prompt
- How teams record recurring issues

## Failure signals

| Signal | Possible action |
|---|---|
| Tests failing widely | Stop execution; narrow diff |
| Wrong directory/branch | Undo; re-`@` correct path |
| Plan and implementation diverge badly | Return to explore or plan |
| Context too long, constraints forgotten | New thread + summary handoff |
| Approvals/rules repeatedly rejected | Check if rules conflict with task |

## Minimum viable recovery flow

```text
1. Stop further changes (explicitly say "do not write code yet")
2. Save state: git status / stash / record thread ID
3. Summarize in 5 bullets or fewer: goal, done so far, failure symptom, hypothesis
4. Choose: roll back / narrow scope / continue in new thread
5. On success, write to AGENTS.md or case postmortem
```

Prompt example:

```text
Current changes caused 12 test failures. Do not keep fixing yet.
List files affected by the last 3 commits, suggest minimal rollback point,
and give a smaller fix plan.
```

## Recommended workflow

```text
Detect (tests / human / CI)
    → Stop loss (stop writing, isolate branch)
    → Diagnose (see "diagnose before fixing")
    → Small-step retry
    → Capture lessons
```

Multi-agent: see [Multi-agent coordination](/cases/workflows/multi-agent-coordination/)—on failure, clarify which sub-task owns rollback.

## Common mistakes

- Stack patches in the wrong direction
- Don't save failure logs—new thread repeats same error
- Force `git push` to salvage
- Don't distinguish environment (local vs Cloud)—recovery steps invalid

## Safety boundaries

- Recovery itself constrained by [command rules](/guide/customization/rules/command-rules/)
- Production incidents: roll back first, root cause later—don't let Agent fix production data directly

## Acceptance checklist

- [ ] Can explain chosen recovery strategy and why
- [ ] Repo back to buildable/testable state
- [ ] Failure cause and lesson recorded (issue or AGENTS.md)
- [ ] If new thread needed, key constraint summary included

## Related chapters

- [Diagnose before fixing](/cases/workflows/diagnose-before-fixing/)
- [Handoff and resume](/guide/agent-work/handoff-and-resume/)
- [Error reference](/guide/reference/error-reference/)

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** Cross-checked against currently verified handoff and resume, diagnose, command rules, and error reference chapters in this handbook; this page describes general failure stop-loss and continue methods—not treating one client's recovery button or command as fixed rules.
