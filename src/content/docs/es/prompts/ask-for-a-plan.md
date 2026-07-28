---
title: Ask for a plan first
description: Before Codex edits, have it explain steps, risks, and how to verify.
locale: es
source_locale: en
source_revision: df516b9
translation_status: fallback
translated_at: '2026-07-28'
---

Many problems aren't impossible—they started **too fast**. "Help me fix this" blends exploration, planning, and execution, leaving you to accept whatever shows up in the diff.

A better move: ask for a plan first instead of lengthening the requirement forever.

## When you should ask for a plan

| Scenario | Why |
|---|---|
| Cross-file or cross-module work | Easy to hit unrelated areas |
| You're unfamiliar with the codebase | Confirm scope before edits |
| Requirements still shifting | Surface disagreements early |
| You must approve before execution | Separate "authorization to run" from "thinking out loud" |
| High-risk actions | See rollback and verification up front |

A single typo or one-line copy tweak may not need a formal plan—but if going wrong would hurt, pause first.

## What a good plan should include

Even a minimal plan should cover:

1. Steps
2. Files or scope involved
3. Risks or open questions
4. How each step will be verified

Without item 4, it's a todo list—not an executable, verifiable plan.

## Three common phrasings

### Minimal

```text
Don't change code yet. Give me a 3–5 step plan: which files you'll touch and how each step will be verified.
```

Fits when you know the direction and only want the breakdown.

### Recommended

```text
Don't execute yet. Based on the current repo, give me a plan that includes:
1. Your understanding of the goal
2. Numbered steps
3. Files or directories involved
4. Risks and open questions
5. Verification approach

Do not modify files until I reply "execute the plan."
```

Fits daily dev, doc refactors, prompt rewrites, config changes.

### High-risk

```text
Don't make changes yet. Produce a plan and separately explain:
- Which step is most likely to cause regressions
- How to roll back if it fails
- Which operations need my confirmation
- Which tests or manual checks prove completion
```

Fits production issues, permission config, automation scripts, cross-module refactors.

## Plans shouldn't be long for length's sake

You want something **you can approve, steer, and execute**—not a lengthy proposal.

Check whether the plan is usable:

- Can you say "skip step 2, do something else instead"?
- Can you see which critical areas will move?
- Do you know how to verify before starting?

If not, it's not specific enough.

## How to steer a plan

You don't need to rewrite the whole thing—guide it like you'd guide a colleague.

Common steering lines:

```text
Keep steps 1 and 2; drop step 3.
Split database changes into a separate step.
Read-only analysis first—no implementation yet.
Add regression tests and rollback to the plan.
```

This saves context versus "start over" and pulls results back on track.

## Benefits vs. jumping straight in

| Plan first | Start immediately |
|---|---|
| Catch misunderstandings early | Often discover wrong direction after edits |
| Easier approval and collaboration | You only see the final diff |
| Natural split into subtasks | Multiple goals get mashed together |
| Verification visible upfront | Tests remembered only at the end |

Many workflows separate exploration and planning. See [Explore—plan—execute—verify](/cases/workflows/explore-plan-execute-verify/).

## Where plans go wrong

### Actions without boundaries

e.g. "update docs and improve structure" with no directories to touch or modules to avoid—the plan tends to grow.

### Implementation without verification

e.g. "change component logic, update styles, commit" with no proof behavior still works.

### Task list without open questions

Good plans admit uncertainty instead of pretending every assumption holds.

## Recommended pairings

- Formal execution flow: [Planning](/guide/agent-work/planning/)
- Reusable plan structure: [Task anatomy](/prompts/task-anatomy/)
- Mid-run steering: [Progress and steering](/guide/agent-work/progress-and-steering/)
- Clear acceptance: [Define done](/prompts/define-done/)

## A useful team convention

In `AGENTS.md` you can state:

```md
- For changes touching 3+ files, produce a plan first
- Don't run destructive commands without confirmation
- Plans must include verification
```

Then "plan first" becomes default practice—not a one-off reminder.

## Reference sources

- Plan-and-execute patterns in OpenAI Codex official documentation
- Task design and collaboration practices from freestylefly/CodexGuide
- Codex workflow chapters in KimYx0207's AI-Coding-Guide-Zh
- Practical execution methods from stormzhang's Codex series
- [codex.bozhouai.com](https://codex.bozhouai.com/)

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** This page explains plan-first collaboration only; in-site links and example structure were rechecked, and the body does not depend on volatile facts such as product versions, pricing, or UI details.
