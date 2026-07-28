---
title: Prompt templates
description: Reusable prompt skeletons by task type—understand, create, change, diagnose, review, research, automate.
locale: es
source_locale: en
source_revision: e24d44b
translation_status: fallback
translated_at: '2026-07-28'
---

# Prompt templates

People often react two ways to "templates":

- templates feel too rigid, so they skip them
- or they copy verbatim without knowing what to customize

Templates mainly help you not drop key sections—they don't think for you.

Template pages preserve task structure, not the one true answer.

## How to use templates

1. Pick the closest template type
2. Replace `【】` placeholders with your real task
3. Delete irrelevant sections
4. Add constraints and acceptance specific to this run

Templates are scaffolding, not answer keys.

| Template | When to use |
|---|---|
| [Understand](/prompts/templates/understand/) | Read codebase, docs, or materials to build shared understanding first |
| [Create](/prompts/templates/create/) | Build features, documents, or artifacts from scratch |
| [Change](/prompts/templates/change/) | Iterate on something that already exists |
| [Diagnose](/prompts/templates/diagnose/) | Find root cause before changing code |
| [Review](/prompts/templates/review/) | Review diffs, PRs, or document changes |
| [Research](/prompts/templates/research/) | Investigation and comparison with citations |
| [Automate](/prompts/templates/automate/) | Repeatable tasks, scripts, unattended flows |

## Common misconceptions

### 1. Templates are copy-paste artifacts

Without editing placeholders and trimming sections, templates hollow out the task.

### 2. Using a template automatically makes prompts "professional"

Templates preserve structure—they don't decide:

- the real goal
- where constraints should land
- how acceptance should read

### 3. More template is better

For beginners, "enough but not bloated" is fine.

Pick the right type first, then adapt it—don't treat the template itself as the task.

Writing principles: [Prompt basics](/prompts/basics/) and [Task anatomy](/prompts/task-anatomy/).

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** This page explains template usage only; in-site links and template categories were rechecked, and the body does not depend on volatile facts such as product versions, pricing, or UI details.
