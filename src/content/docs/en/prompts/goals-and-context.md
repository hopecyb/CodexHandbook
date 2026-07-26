---
title: Goals and context
description: Tell Codex what to accomplish and why it matters.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

Many prompts look information-rich but still miss two things:

- What outcome you actually want
- Why you're doing it this way

Goal explains what to deliver; context explains why.

**Goal:** state the final deliverable, not a vague wish.  
"Make the site better" → "Change the homepage primary button copy to … and keep existing style class names."

**Context:** fill in what the reader knows but the Agent needs—stack, audience, deadline reason, known pitfalls.

## Why goal and context shouldn't be mixed

Context without goal reads like a situation report with no deliverable.  
Goal without context invites a solution that's technically possible but wrong for your situation.

## Common misconceptions

### 1. Goal means "I want to improve things"

That's a wish, not a goal.

A clearer goal usually states:

- what to change
- what end state you want
- what must stay the same

### 2. More context is always better

Valuable context is what **you know but Codex doesn't**, and what **changes decisions**.

### 3. Only technical context counts

Not only technical context.

These can also matter:

- who the audience is
- why there's a deadline
- known pitfalls
- team constraints

## A usable minimal form

```text
Goal: change X to Y
Context: why, who it's for, what's blocking you now
```

Example:

```text
Goal: Make the docs homepage hero copy easier for beginners to understand, keeping the existing structure
Context: Current copy assumes readers already know many terms; first-time visitors face a high barrier
```

## How to check if it's clear enough

For goal, check:

- can you see the outcome?
- can you sense the scope?

For context, check:

- will this actually change how it works?

Goal decides what to deliver; context explains why.

Related: project-level background can live in [project context](/guide/context/project-context/) so you don't repeat long blocks in every prompt.

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** This page explains goal and context writing only; in-site links and example phrasing were rechecked, and the body does not depend on volatile facts such as product versions, pricing, or UI details.
