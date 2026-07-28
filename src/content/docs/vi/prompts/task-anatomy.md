---
title: Task anatomy
description: Goal, context, inputs, constraints, acceptance, and permission boundaries.
locale: vi
source_locale: en
source_revision: '7709575'
translation_status: fallback
translated_at: '2026-07-28'
---

When you ask for something, it's easy to scatter information—lots of material, unclear focus, and more room for Codex to misread you.

Here is a common set of parts in a well-structured task.

## Task structure

Organize along this order:

- What the outcome is
- Why you're doing it
- What materials are needed
- Where the boundaries are
- How to judge completion

The order isn't fixed, but once these are clear the task is much steadier.

## Recommended template

```text
Goal: … (what the final deliverable is)
Context: … (why it matters, current state)
Inputs: … (relevant files/links/pasted content)
Constraints: … (what can change, style, forbidden actions)
Acceptance criteria: … (checkable completion conditions)
Permission boundaries: … (network, dependencies, config changes)
When information is insufficient: ask first, don't guess.
```

## What each section does

- **Goal:** prevents tasks that have actions but no outcome
- **Context:** helps Codex understand why you're doing it this way
- **Inputs:** hands over files, links, and assets it actually needs to see
- **Constraints:** prevents overreach and "while I'm here" edits
- **Acceptance criteria:** turns "is it done?" into something checkable
- **Permission boundaries:** states upfront whether network, dependencies, or config are allowed

## Common misconceptions

### 1. Every section must be filled in full

This template is closer to a checklist than a form.  
Some tasks don't need long context, but skipping sections removes judgment inputs.

### 2. Goal and acceptance are not the same thing

They are different.

- **Goal** is what you want to get
- **Acceptance** is how you verify it really happened

### 3. Inputs means paste everything you have

More input isn't better—relevance matters.  
The key is handing over what it **must** read.

## Minimal task template

For a usable first version, shrink to:

```text
Goal: turn X into Y
Inputs: relevant files or pages are here
Constraints: only change here, don't touch that
Acceptance: how I check you actually finished
When uncertain: ask
```

## Example

```text
Goal: Make the docs homepage hero copy easier for beginners to understand
Inputs: src/content/docs/guide/index.md
Constraints: Only edit this one file; don't change styles or add components
Acceptance: Keep existing structure; copy is more conversational; pnpm build passes
When uncertain: State your understanding and scope of changes before editing
```

This structure mainly reduces guessing and makes acceptance direct. Templates can be trimmed—but accept what information you lose when you drop a section.

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** This page explains task structure only; examples and in-site links were rechecked, and the body does not depend on volatile facts such as product versions, pricing, or UI details.
