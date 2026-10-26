---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Cross-checked against current OpenAI Developers descriptions of long tasks, verification, and staged work, plus verified planning, quality, and context chapters in this handbook. This page retains only the stable collaboration principle that local correction is preferable to starting over.
  checkedAt: '2026-07-26'
title: Progress and Steering
description: Use a short instruction to steer Codex back on course when a task begins to drift.
sidebar:
  order: 20
locale: en
source_locale: zh-CN
translation_status: reviewed
reviewed_at: 2026-10-25
translated_at: 2026-09-20
source_revision: 'c9ea3be'
---

When work starts drifting, two common reactions are to say nothing and let it continue, or to say “stop and start everything over.” Usually you can steer during execution instead: keep the parts that are already right and correct only what has gone off course.

## What steering does

Steering adds direction for the current stage, such as:

- Which parts are correct and should stay.
- Where the work began to drift and should stop.
- What to prioritize next.

## What counts as steering

Steering is a **local change in direction** for work already in progress. You may need it when:

- Codex understood the goal but chose a poor order.
- Half the work is already right and should be retained.
- New information changes the remaining steps.
- An unnecessary refactor or expansion is about to start.

## A useful template

A mid-task instruction can be short:

```text
Stop at the current step. Keep A and B; abandon the current approach to changing C;
next do only D. Do not start E.
```

This instruction identifies four things:

1. Where to stop.
2. What to keep.
3. What to abandon.
4. What to do next.

## Common misconceptions

### 1. Should I stop everything and start over when it drifts?

If half the work is correct, starting over often means explaining the context again, losing aligned work, and risking the same drift on the next attempt.

### 2. Should saying “that's wrong” be enough?

Usually it is not. Say what should stay, what should be dropped, and what now takes priority.

### 3. Is steering the same as replanning?

- **Steering:** The route is broadly right and needs a local correction.
- **Replanning:** The goal, assumptions, or scope of impact have changed.

## Why small corrections work better

| Local correction | Starting over |
|---|---|
| Preserves aligned work | Discards work that was already right |
| Uses less context | Requires another explanation of the background |
| Keeps scope easier to control | Risks drifting again |
| Resembles ordinary collaboration | Resembles placing the same order again |

## When to steer and when to return to planning

- **Only the order, scope, or output format is wrong:** Steer first.
- **The goal, assumptions, or affected area changed:** Return to planning.

## Three common ways to steer

### 1. Narrow the scope

When the work starts expanding:

```text
Handle only the login page for now. Do not expand to registration or
password recovery.
```

### 2. Change the order

When the action is right but its timing is wrong:

```text
Add verification and tests before continuing implementation changes.
```

### 3. Change the output format

When you want an analysis before an implementation:

```text
Do not edit files yet. First give me a comparison table showing the current
approach and your proposed approach.
```

## What a good steering instruction includes

- The point at which to stop.
- The part to keep.
- The direction not to continue.
- The new priority.
- Whether execution may continue.

For example:

```text
Keep your diagnosis of the cause, but do not start the refactor yet.
Next, provide only a minimal fix proposal and verification steps.
```

## When to replan

Steering is for local drift. Return to [planning](/en/guide/agent-work/planning/) if the goal itself changes, new evidence invalidates an assumption, the affected scope expands substantially, or two or three consecutive corrections still do not bring the work back on course.

## Common mistakes

- Saying only “wrong” without identifying what is wrong.
- Asking Codex to decide how to fix it without setting priorities.
- Using language that triggers a full redo when you only meant to pause one step.
- Trying to attach a genuinely new task with one extra sentence.

When execution drifts, a short instruction can name what to keep, what to stop, and exactly what to do next.

## Related pages

- To define the execution path: [Planning](/en/guide/agent-work/planning/).
- For the full workflow: [Explore → Plan → Execute → Verify](/en/cases/workflows/explore-plan-execute-verify/).
- To split work: [Subagents](/en/guide/agent-work/subagents/).
- To continue after an interruption: [Handoff and resume](/en/guide/agent-work/handoff-and-resume/).
