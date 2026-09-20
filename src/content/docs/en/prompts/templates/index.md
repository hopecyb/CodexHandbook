---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "This page explains template usage only; in-site links and template categories were rechecked, and the body does not depend on volatile facts such as product versions, pricing, or UI details."
  checkedAt: "2026-07-26"
title: Prompt templates
description: Reusable prompt skeletons by task type—understand, create, change, diagnose, review, research, automate.
locale: en
source_locale: zh-CN
source_revision: fae2ed3
translation_status: draft
translated_at: 2026-09-20
---


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
| [Understand](/en/prompts/templates/understand/) | Read codebase, docs, or materials to build shared understanding first |
| [Create](/en/prompts/templates/create/) | Build features, documents, or artifacts from scratch |
| [Change](/en/prompts/templates/change/) | Iterate on something that already exists |
| [Diagnose](/en/prompts/templates/diagnose/) | Find root cause before changing code |
| [Review](/en/prompts/templates/review/) | Review diffs, PRs, or document changes |
| [Research](/en/prompts/templates/research/) | Investigation and comparison with citations |
| [Automate](/en/prompts/templates/automate/) | Repeatable tasks, scripts, unattended flows |

## From template to workflow

Some prompts are one-off. Others repeat often enough that they should be stabilized.

| Repeating task | Start as | Upgrade to when stable |
|---|---|---|
| PR preparation | Review/change template | Skill with a fixed checklist |
| API docs generation | Create/change template | Skill + documentation script |
| Expanding test coverage | Change template | Skill + agreed test commands |
| Performance investigation | Diagnose template | Subagent or focused Skill |
| Check formatting every time files change | Not a template problem | Hook |
| Read external tickets before coding | Research template | MCP + Skill |

Templates fit human-initiated tasks; Skills fit repeated processes; Hooks fit automatic checks at fixed points; MCP fits access to external systems.

## Quick choice: what should this task become?

Ask four questions:

1. Will you do it only once?
2. Will the steps be much the same next time?
3. Is there a fixed output format or checklist?
4. Does it need an external system, script, or automatic guard?

| Situation | Suggested form |
|---|---|
| One-off work that still needs discussion | A complete prompt |
| Repeated work still being adjusted | A template |
| Stable process and fixed output | A Skill |
| An independent role must investigate deeply | A subagent |
| External-system data is needed | MCP, preferably read-only first |
| A check must run at a lifecycle point every time | A Hook |
| The team needs one distributed package | A Plugin |

Longer prompts are not automatically better. What is worth reusing is a task you have checked repeatedly, with clear boundaries and acceptance criteria.

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

Writing principles: [Prompt basics](/en/prompts/basics/) and [Task anatomy](/en/prompts/task-anatomy/).
