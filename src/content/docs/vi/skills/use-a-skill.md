---
title: Use a Skill
description: Explicit and implicit Skill triggers, and how to write a good description.
locale: vi
source_locale: en
source_revision: 63ea4c8
translation_status: fallback
translated_at: '2026-07-28'
---

A common early mistake is thinking "once installed, it just works." Using a Skill means having Codex follow a pre-written workflow.

A Skill can be **named explicitly** or **chosen automatically** when the scene fits. Knowing both avoids debugging dead ends.

# Use a Skill

## Trigger modes

1. **Explicit**: In supported environments, call with `$skill-name` (name matches frontmatter `name`)
2. **Implicit**: The model judges whether the task fits `description` semantically

## Telling the two apart

- **Explicit**: You directly say "use this Skill"
- **Implicit**: You do not name it, but your task reads like its intended scenario

When first trying Skills, prefer **explicit** triggers. That makes it easier to see:

- Whether the Skill was recognized
- Whether behavior matches expectations
- Whether name and description are correct

## Examples

```text
$pr-review Please review my current uncommitted changes
```

Or in natural language: "Review the diff the team way, focus on tests."

## Common misconceptions

### 1. I wrote a Skill, so it will always auto-trigger

Auto-trigger depends on a clear `description` and whether the task looks like its scenario.

### 2. Natural language and `$name` always behave the same

They do not.

`$name` is explicit—good for verification and forcing use. Natural language is convenient but the model may pick the wrong Skill or none at all.

### 3. If a Skill does not trigger, the Skill must be broken

It might also be:

- Wrong name
- `description` too broad
- Task wording missing trigger keywords

When debugging, check not only "is the file there?" but "does it read like something that would be selected?"

## Suggested test order

To get one clean run:

1. Call explicitly with `$skill-name`
2. Check output matches expectations
3. Adjust `description`
4. Test whether natural language triggers it

That separates "Skill content is wrong" from "auto-trigger conditions are weak."

## Writing a good description

- State when to use and when not to use
- Include keywords users might say (review, release, changelog)
- Avoid vague "help the user write code"
- Put core trigger scenarios **first** (Skill list has a character budget)

## Is the description clear enough?

A useful bar: after reading `description`, you know when to use it and when not to.

If it still sounds like "does everything," it is probably too broad.

More concepts: [Skills overview](/skills/overview/).
---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Verification basis:** Current Codex runtime still supports explicit skill references and automatic matching when appropriate; OpenAI Help "Skills in ChatGPT" also confirms Skills are used automatically when helpful. This page focuses on triggers and writing principles.  
**Last verified:** 2026-07-26
