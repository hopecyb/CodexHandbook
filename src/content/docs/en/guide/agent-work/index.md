---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Cross-checked section by section against this handbook's verified planning, context, verification, and multi-task collaboration chapters. This page covers stable collaboration practices rather than treating one client's current interface as a lasting contract.
  checkedAt: '2026-07-26'
title: Agent Work
description: Help Codex act as a collaborator who carries work through, rather than a machine that gives one-off answers.
sidebar:
  order: 31
locale: en
source_locale: zh-CN
translation_status: reviewed
reviewed_at: 2026-10-25
translated_at: 2026-09-20
source_revision: '3eb251e'
---

Agent work asks how to carry a task to a **verifiably complete state**. This chapter covers when to plan first, when to split off subtasks, how to steer work that starts drifting, and how to hand it off or resume it.

These are collaboration methods, not a single product feature. The hard part of many tasks is not stating the request; it is bringing the work all the way to “actually done and checkable.”

## What this chapter covers

- Turning a complex task into a focused plan.
- Correcting course in small steps during execution.
- Choosing subproblems worth giving to a subagent.
- Handing off and resuming a long interrupted task.

## Recommended reading order

1. [Planning](/en/guide/agent-work/planning/).
2. [Progress and Steering](/en/guide/agent-work/progress-and-steering/).
3. [Subagents](/en/guide/agent-work/subagents/).
4. [Handoff and resume](/en/guide/agent-work/handoff-and-resume/).

## A useful framework

Agent work can be seen as four consecutive actions:

```text
Understand first → plan → steer during execution → hand off or finish
```

Leaving any one out has a common consequence:

- Without understanding, changes go in the wrong direction.
- Without planning, scope can escape control halfway through.
- Without steering, each attempted fix may drift farther.
- Without a handoff, no one knows where an interrupted task stands.

## Common misconceptions

### 1. Agent work just means writing a longer prompt

That is not enough. A prompt is a starting point. Task quality also depends on planning, mid-course correction, separating complex parts, and leaving a state someone can resume.

### 2. A direction change halfway through means earlier work was wasted

Often it is normal to narrow and refine the work while executing. You need not pretend the first request anticipated everything.

### 3. More subagents automatically means greater efficiency

Not always. When boundaries are unclear, more subtasks can make the main task harder to coordinate.

## How this chapter relates to others

- For the complete workflow, see [Explore → Plan → Execute → Verify](/en/cases/workflows/explore-plan-execute-verify/).
- To state tasks clearly, see [Prompts](/en/prompts/).
- To manage context, see [Context](/en/guide/context/).
- For parallel work, see [Parallel Agents](/en/guide/desktop-app/parallel-agents/) and [Multi-agent Coordination](/en/cases/workflows/multi-agent-coordination/).

## Try the smallest complete workflow first

If you want the simplest way to carry a task through, use four steps:

1. State the task clearly.
2. Ask for a plan first when the task is complex.
3. Adjust the work in small steps based on its results.
4. Before finishing, require a result you can verify.

Once those four steps work for you, subagents and handoffs are easier to learn. Agent work centers on keeping a task headed toward the right outcome through planning, execution, correction, and completion.

## Frequent mistakes

- Treating the agent like a search box and giving only a vague goal.
- Assuming any mid-task correction requires starting over.
- Running a long task without a handoff artifact.
- Splitting subtasks without boundaries, leaving the main thread harder to manage.

## Reference source

- Official OpenAI Codex guidance on task collaboration and execution.
