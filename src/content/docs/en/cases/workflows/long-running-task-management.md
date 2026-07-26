---
title: Long-running task management
description: Large tasks across hours or sessions—checkpoints, compaction, delegation, and exit conditions.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

Long tasks often run into the same problems: **context fills up**, **people step away**, **direction drifts**, and **it's unclear when to stop**. This page applies [Explore–Plan–Execute–Verify](/cases/workflows/explore-plan-execute-verify/) to scenarios that span hours or multiple sessions.

## What's covered

- When to split tasks vs delegate to Cloud
- What to write in checkpoints and status notes
- Exit conditions for automated long runs

Related: [Delegate and follow up](/guide/web-and-cloud/delegate-and-follow-up/) · [Automations](/skills/automations/scheduled-tasks/)

## Signals of a long task

- Expected machine time over 30 minutes
- Multiple subsystems or >20 files involved
- Waiting on human feedback or external APIs
- Full E2E / performance test runs required

If any apply, write the plan first—don't chat straight through to the end.

## Three-phase management

### 1. Freeze the plan

Produce a written plan: scope, non-goals, milestones, acceptance commands. Get human sign-off before large-scale execution.

[Planning](/guide/agent-work/planning/) · [Subagents](/guide/agent-work/subagents/)

### 2. Checkpoints

After each milestone:

- Commit or stash a reviewable increment
- Update `PROGRESS.md` or an issue comment: what finished, what's next, blockers
- When context is full, use [compaction](/guide/context/compaction/) or start a new session + link the progress file

### 3. Wrap up or delegate

- When local capacity runs out → [Cloud delegation](/guide/web-and-cloud/delegate-and-follow-up/)
- For ongoing monitoring → Automation + explicit **max iterations / deadline**

## Exit conditions (required for automation)

| Condition | Description |
|---|---|
| Time limit | Alert if no progress in 4h |
| Iteration limit | Stop after 3 failures on the same test |
| Human gate | Must @ someone before changing production config |
| Success criteria | Tests green + PR opened |

## Common mistakes

- No PROGRESS file—duplicate work after switching sessions
- Long task with no non-goals; Agent "tidies the whole repo" on the side
- Cloud task left unapproved overnight

## Acceptance checklist

- [ ] Plan document exists before the long task starts
- [ ] At least two checkpoints have reviewable diffs
- [ ] You know how to pause, resume, or hand off

## References

- codex.bozhouai.com long-task and standard workflow material
- freestylefly/CodexGuide task capture
- stormzhang `14-workflows.md`

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** Cross-checked against OpenAI Developers' current public use cases for long-horizon goals and long-task collaboration, plus this handbook's verified handoff/resume, planning, compaction, and delegation chapters; this page covers only stable methods for checkpoints, handoff, and exit conditions on long tasks.
