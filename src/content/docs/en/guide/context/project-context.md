---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "This page explains how to record lasting project context; its concepts, examples, and boundaries have been checked, and it does not depend on volatile product facts."
  checkedAt: "2026-07-26"
title: Project context
description: Project instructions and directory-level background.
locale: en
source_locale: zh-CN
source_revision: "fb3eb50"
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 10
---

“Project context” is background information that stays stable within a project and is reused across many tasks.

For example:

- How directories are organized
- Common commands
- Code style conventions
- Files that should not be changed casually
- How completed work is checked

Explaining all this from scratch on every task is tiring and makes omissions more likely.

## What it means in practice

Think of project context as an explanation of “how we normally work on this project.”

It does not describe what to do in this particular task. It tells Codex in advance:

- How this repository is organized
- Which practices apply over the long term
- Which boundaries should generally be respected
- How work is usually verified

Codex then does not need to guess the team's practices from scratch each time it enters the project.

## Why this often goes wrong

When people first use Codex, they often put every requirement into the current task.

That may work briefly, but problems soon appear:

- You must explain the same things every time
- Instructions differ across tasks
- Important rules get forgotten
- In a long conversation, the truly important background becomes harder to see

Separate the two kinds of instructions:

- Put **lasting rules** in project context
- Put **requirements specific to this task** in the current prompt

## How to distinguish it from the current task

The simplest distinction has two layers:

- **Project context:** how this project is usually handled
- **Task prompt:** what you want done this time

For example:

- “Put all components in `src/components/`” → project context
- “Change only the homepage banner copy this time” → current task

## Common misconceptions

### 1. Should project context contain as much as possible?

The valuable information is:

- Stable over time
- Used across multiple tasks
- Likely to cause mistakes if left unstated

One-off details turn project instructions into noise.

### 2. If I explain every task clearly, do I still need project context?

That works in the short term, but becomes burdensome over time:

- You repeat the same instructions
- You phrase them differently across tasks
- You mention a rule this time and forget it next time

### 3. Will project context make the rules too rigid?

No, provided you treat it as the project's lasting defaults rather than unchangeable commands.

Put genuine exceptions in the current task.

## Common places to put it

Put stable conventions in project instructions, such as `AGENTS.md` or the product's project instruction feature:

- Directory structure
- Common commands
- Code style
- Prohibitions

In task prompts, state only **what differs this time**; move repeated background to the project level. Configuration is covered in greater depth in the later `06-customization` milestone.

## How to decide what belongs in project context

Consider adding an instruction if both are true:

1. You will probably need it next time
2. Forgetting it repeatedly causes mistakes or wastes time

## What to record first

Start with:

- Common commands
- Directory conventions
- Code style
- Areas that must not be changed
- Default verification methods

Anything likely to apply again next time is worth recording in project context instead of typing it out for every task.
