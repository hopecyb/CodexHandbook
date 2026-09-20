---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "This page only explains a framework of goals, context, actions, and acceptance for breaking down tasks; its internal links and example structure have been checked, and it does not rely on volatile product facts."
  checkedAt: "2026-07-26"
title: Goals, context, and actions
description: Break a successful interaction into goals, background, actions, and acceptance.
locale: en
source_locale: zh-CN
source_revision: "280cea9"
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 30
---

Some tasks run smoothly while others drift as the conversation continues. The difference is often whether you have broken down the task clearly, not a sudden change in the model's intelligence.

The short version: the goal says “what the final result should be”; context says “what to base the work on”; actions say “what it may do”; and acceptance says “what counts as done.”

A reliable Codex interaction usually has four parts:

1. **Goal:** What should be delivered?
2. **Context:** Relevant background, files, and constraints
3. **Actions:** Steps Codex may take, such as reading, editing, and running commands
4. **Acceptance:** What counts as complete and how to check it

The prompting guide expands these parts into a reusable framework; see [Anatomy of a good task](/en/prompts/task-anatomy/).

## What each part does

Think of this as assigning a task to an assistant who can act:

- **Goal:** What exactly should it deliver?
- **Context:** What must it know before making decisions?
- **Actions:** May it read files, edit them, run commands, or research online?
- **Acceptance:** By what standard will you say “done”?

Missing any part causes problems:

- No goal: it may stay busy without working on the right thing
- No context: it will guess
- No action boundaries: it may do too much or hesitate to act
- No acceptance criteria: you may disagree about what “done” means

## Common misconceptions

### 1. Stating the goal is enough

It is not.

“Help me change the homepage” gives a direction but not enough to act consistently. Codex also needs to know:

- Which file to change
- What to preserve
- What not to touch
- What the finished result should look like

### 2. The more context, the better

Too little context causes guessing; too much buries what matters. Provide **relevant context**, not everything available.

### 3. Can I leave actions unstated and let Codex decide?

Sometimes, but it is less reliable for beginners.

Results tend to be more consistent when you say:

- Which files it may edit
- Not to install dependencies
- Not to change configuration
- To propose an approach before editing

## An order to follow when you are unsure

If you do not know how to structure a task, answer these four questions:

1. What do I want completed?
2. Which background and constraints must guide it?
3. What may it do, and what may it not do?
4. By what standard will I check completion?

This is clearer than “please handle this problem.”

## A small example

> Goal: organize the heading hierarchy in `notes.md`.
> Context: change only that file; preserve the order of existing paragraphs.
> Actions: edit the file; do not install dependencies.
> Acceptance: when opened, the headings progress from H1 to H3 without skipping levels.

A reliable task states at least the goal, context, action boundaries, and how the result will be checked.
