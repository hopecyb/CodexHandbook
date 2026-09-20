---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: This page explains the purpose and wording of a definition of done. Its concepts, examples, and checklist have been reviewed; the body does not depend on changing product facts.
  checkedAt: '2026-07-26'
title: Definition of done
description: A shared completion checklist for individuals and teams.
locale: en
source_locale: zh-CN
source_revision: f55e9f7
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 60
---

A “definition of done” is straightforward: decide in advance what must be true before this task counts as complete.

Without one, a common situation is:

- You think there is still work left.
- Codex thinks it has finished.
- Neither is necessarily wrong; the standards were simply not aligned.

## Why this matters

Many rounds of rework begin because “done” was not defined clearly at the start.

For example:

- Is changing the copy enough, or must the page preview also look right?
- Is a successful build enough, or must someone manually check that the button works?
- Is a working feature enough, or must the documentation be updated too?

If these points are not settled in advance, the two sides can end up judging the same result differently.

Example of a minimum personal definition of done:

- [ ] Diff reviewed
- [ ] Acceptance criteria checked one by one
- [ ] Tests or manual verification completed
- [ ] No secrets committed to the repository
- [ ] Follow-up issues recorded

A team version will be expanded in a later governance milestone.

## Common misunderstandings

### 1. A definition of done need not be formal or complicated

At first, even three points help:

- What to change
- How to accept the result
- What would mean the task is still unfinished

### 2. It is different from the goal

Here is the distinction:

- **Goal**: the result you want
- **Definition of done**: how to prove that result has been achieved

For example:

- Goal: fix the homepage button text
- Definition of done: change only the homepage; use the new button text; confirm the page preview looks right

### 3. It need not be long every time

It does not.

Clarity matters more than length.

## A short template

You can start with this:

```text
Completion criteria:
1. Change only the specified scope
2. Make the result meet my stated requirements
3. Complete the verification steps and tell me how to check
```

The main purpose of a definition of done is to make the completion standard explicit, so you and Codex judge the outcome the same way.
