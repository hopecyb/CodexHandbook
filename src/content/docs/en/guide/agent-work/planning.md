---
title: 'Planning: Make the Execution Path and Verification Clear'
description: Use a plan to resolve scope, dependencies, and tradeoffs; distinguish planning from pausing for approval, and keep moving within existing authorization.
contentType: guide
editorialStatus: review
verification:
  kind: editorial
  checkedAt: '2026-09-18'
  summary: This page offers working-method guidance. It was cross-checked against task classification and permissions, and makes no claim about default client behavior or measured efficiency gains.
locale: en
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 10
source_revision: a129229
---

A plan is an execution path you can inspect and adjust. It helps reveal gaps in scope, dependencies, and acceptance criteria early. A larger task does not automatically call for repeated pauses to seek confirmation.

Start with [task classification](/en/prompts/ask-for-a-plan/): complete the task directly, plan and then execute within the authorization already given, or produce a proposal only in this round. A request that explicitly says “propose a plan first; do not edit files” should remain read-only. A request to implement something should not end with only a plan.

![Illustration: a small assistant sketches a step-by-step plan on a whiteboard while a person points at one step to adjust it before work starts](/illustrations/agent-planning.webp)

## A plan that is detailed enough

| Element | What to specify |
|---|---|
| Goal | The observable behavior when the work is done |
| Scope | Relevant files, inputs, and exclusions |
| Order | Real dependencies, without treating every tool call as a separate step |
| Verification | Outputs or checks that will demonstrate completion |
| Tradeoffs | Only decisions that remain unresolved and affect the result |

For example, to add a data grouping to an existing report, the plan might be “check the definitions → update aggregation and display → reconcile totals and groups using a sample.” You need not request approval separately to read files, make each edit, or run each test.

## Two different planning requests

**The solution is not yet decided:**

```text
Analyze this round in read-only mode. Compare two export approaches for dependencies,
compatibility, and maintenance cost. Recommend one and identify decisions I need
to make. Do not change the implementation.
```

**The scope is decided and implementation is needed:**

```text
Complete the CSV export according to the existing requirements. Inspect the repository
and give a brief plan first, then implement and verify continuously within the agreed
scope. You need not wait after each step. If a new service, public-interface change,
or expanded data access is required, explain the specific reason first.
```

These are examples designed for this handbook. Whether a product displays an approval prompt depends on the tools, policies, and permissions in use.

## Adjusting during execution

- If you discover an ordinary implementation detail, update the plan and continue within the authorized scope.
- If an original assumption proves false, explain the evidence and impact, then offer an alternative within scope.
- If a tradeoff requires a decision from the user, ask a specific question and continue with work that does not depend on the answer.
- If an unauthorized external action becomes necessary, prepare a reviewable result and request the relevant authorization before taking that action.

Do not treat a problem that *might* occur as a reason to stop work. Equally, do not follow a plan so rigidly that you ignore an actual change in scope.

## Giving feedback on a plan

```text
Keep steps 1 and 2, but remove the refactor.
This round, make only a local preview; do not publish.
Add an acceptance check that the old file format still reads correctly.
```

Feedback changes only what it explicitly addresses. Constraints and completion criteria that were not withdrawn still apply. If work is interrupted, record the current files, completed checks, and next step in a [handoff note](/en/guide/agent-work/handoff-and-resume/).

## Return to the evidence when done

Check that the plan's goal is actually met, rather than merely checking off every step. Record tests that were not run, previews that were not inspected, and facts that were not verified. For the full workflow, see [Explore → Plan → Execute → Verify](/en/cases/workflows/explore-plan-execute-verify/).
