---
title: Prompt basics
description: The basic building blocks of a good prompt.
locale: en
source_locale: zh-CN
source_revision: b2a486e
translation_status: reviewed
translated_at: 2026-07-26
reviewed_at: 2026-08-26
---

When you're new to prompting, it's easy to focus on whether your wording sounds "advanced."  
For Codex, what matters is whether you've made these things clear:

- What you actually want it to do
- Where it can act and where it cannot
- What counts as done
- When uncertain—ask first, investigate first, or stop first

A good prompt's job is to make task boundaries clear. It doesn't need to read like a spell.

## What this covers

It mainly helps you avoid these common problems:

- Goals so vague the result is just "optimize it a bit"
- No scope stated, so Codex changes more than you intended
- No acceptance criteria, so you end up judging by feel
- No instruction when information is missing, so it starts guessing

## What you can treat a prompt as

Think of a prompt as a task ticket.  
A solid ticket should at least answer:

- What to do
- Why
- What materials to use
- What not to touch
- What "passing" looks like

If none of that is clear, polished sentences won't fix it.

## Three levels (the example library follows these too)

- **Minimal:** when the goal is already crystal clear
- **Recommended:** goal, context, inputs, constraints, acceptance, permissions
- **Teaching:** explains why each section exists

## Common misconceptions

### 1. Longer prompts are better

Relevance matters.  
A long block of irrelevant background dilutes the boundaries that actually matter.

### 2. If the goal is stated, everything else is optional

Goal-only prompts often miss:

- Scope of changes
- Style constraints
- How to verify
- What to do when uncertain

### 3. Prompts are mainly for "teaching the model how to think"

For beginners, a more practical view: prompts reduce misunderstanding.

## A minimal structure that works

If you don't want to learn everything at once, start with these four lines:

```text
Goal: what I want you to do
Scope: where you can change things
Acceptance: what counts as done
When uncertain: ask first, don't guess
```

That's already much clearer than "help me optimize this."

## When minimal is enough vs. when full is safer

### Minimal fits

- Small single-file edits
- Very specific goals
- You know the repo and task well

### Recommended is safer

- Changes across multiple files
- You're unfamiliar with the project
- Higher risk
- Approvals, tests, or review required

For most beginners, practicing the **recommended** version first is usually the safer path.

The core of a good prompt is reducing guessing, drift, and overreach.

See examples in [Run your first task](/en/cases/first-task/) and [Task anatomy](/en/prompts/task-anatomy/).

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** This page covers only general prompting methods; in-site links were rechecked, and the body does not depend on volatile facts such as product versions, pricing, or UI details.
