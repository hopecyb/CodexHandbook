---
title: "When to act directly and when to ask for a plan"
description: "Choose direct execution, planning, or approval for a specific action based on scope, uncertainty, and external impact, with two prompt comparisons."
contentType: prompt
audiences: [beginner, developer, creator]
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: "The three task categories and two comparisons are editorial collaboration advice. Authorization and execution boundaries were checked; they are not fixed client modes, and no model success-rate experiment was performed."
locale: en
source_locale: zh-CN
source_revision: 706f11b
translation_status: draft
translated_at: 2026-09-20
---

Whether to ask for a plan depends on which decisions remain open. A clearly scoped, reversible change can be done directly. Plan first when the route is uncertain. Stop before a specific action that needs additional authorization. Asking for a plan does not mean asking the user to reply after every step.

## First decide which category applies

| Category | How to recognize it | What to specify | When to pause |
|---|---|---|---|
| Execute directly | Input, scope, and acceptance criteria are clear; the change is reversible | Where to change, what counts as done, and what is excluded | When work would exceed the scope or essential information is missing |
| Plan first | There are architecture choices, unclear scope, or several interdependent steps | Inspect the current state, then outline the route, impact, and verification | When a tradeoff requires the user's decision or the user explicitly asks to review the plan first |
| Action needs approval | A specific action would create an unauthorized external effect or reach an execution-permission limit | Prepare a reviewable result, then identify the exact action, target, and impact | Before that action; keep the preparation already completed |

“Three files are involved” is not a universal approval threshold; even one production configuration file can have a large effect. See [Permissions and sandbox](/en/guide/permissions-and-sandbox/) for product prompts and actual execution permissions. This table is not a permissions configuration for every client.

## Comparison one: local copy edit

Task: correct two typos in the README without changing its structure.

**Counterexample with excessive pauses:**

```text
First list a plan and wait for my approval before reading files.
After reading, list the two proposed edits and wait for approval before editing.
Stop after each edit to ask me, then ask whether to check the result.
```

These waits add no necessary decision; they fragment a task that was already authorized and clearly defined.

**Prompt with a clear scope:**

```text
Change the two instances of “帐户” in the body of README.md to “账户”.
Preserve code blocks, links, and all other content. Complete the edit directly,
check the diff, and report where you changed it. If the actual count is not two,
explain the difference first; do not expand this into a full copy edit.
```

Acceptance means exactly two correct edits with unrelated content untouched. Such a change usually needs no new tests; perform the appropriate checks under the project's existing rules.

## Comparison two: edit and publish a site

Task: update three tutorials and publish to the production site. Separate content preparation from the impact of publishing.

**Counterexample with unclear authorization:**

```text
Write a plan first, then change the whole website and put it live.
```

It does not identify the content to change, the publication target, or whether replacing the live version is authorized.

**Prompt with concrete boundaries:**

```text
Update these three tutorials and fix related internal links. Read the current
state and give a short plan, then make the edits, build, and check the preview
within these files and related navigation without pausing at every step.
Deliver the preview, change summary, and verification results. Publishing to
production is not yet authorized. When preparation is complete, list the version
to publish, the target environment, and the rollback method, then wait for my
confirmation of the publication action.
```

At this point, finish the local work before asking for final publication authorization. If the user has already explicitly authorized the specific publication target and action, apply the current policy to decide whether to continue; do not ask again solely because this template includes confirmation language.

Both comparisons are instructional designs, not actual model output or efficiency measurements.

## When to make only a plan

When you are still comparing approaches, need a budget decision, or explicitly want to review the design first, limit the work to planning:

```text
This turn is for planning only. Read the current implementation and present two
options, their impact, and how to verify them. Identify the tradeoffs that truly
require my decision. Do not change the implementation. Execute only after the
approach has been settled.
```

This explicit stage limit should be followed. An agent's usual autonomy does not override it.

## What to keep in a plan

A sufficient plan states the goal, affected scope, steps, verification, and unresolved tradeoffs. Do not turn known answers into questions awaiting confirmation. A short, low-risk task does not need a rollback section just to satisfy a template.

When new circumstances arise during execution, distinguish ordinary implementation details from a change of goal. Resolve small issues within the original scope and explain them. If a new dependency, broader change, interface change, or new external action appears, first determine whether it remains authorized.

## Default rules you can put in project instructions

```md
- Execute clearly scoped, reversible tasks directly and verify appropriately.
- For complex tasks, write a short plan first. Wait only if the user asked to
  review it first or a necessary tradeoff requires a decision.
- Continue within the authorized scope without repeated step-by-step approval.
- Explain the specific issue if key information is missing, the task scope is
  exceeded, or an unauthorized action is required.
- Do not treat completed local edits as automatic authorization to publish,
  send messages, or delete data.
```

These are adjustable working conventions, not substitutes for system rules, organization policy, or sandbox limits. See [Context priority](/en/guide/context/context-priority/), [Planning](/en/guide/agent-work/planning/), and [Human approval patterns](/en/cases/workflows/human-approval-patterns/).
