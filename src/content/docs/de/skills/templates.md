---
title: templates/ directory
description: Provide output templates and report skeletons inside a Skill.
locale: de
source_locale: en
source_revision: 8524d98
translation_status: fallback
translated_at: '2026-07-28'
---

`templates/` is not just for saving formatting time. Its practical job is stable Skill output without improvising every run.

If `references/` is more about **what to consult on input**, `templates/` is more about **what the output should look like**. Fixed structure and easy review belong here.

# templates/ directory

`templates/` holds output formats the Skill reuses—review reports, changelog skeletons, research comparison tables, and similar.

## Example

```text
review-skill/
├── SKILL.md
└── templates/
    └── review-report.md
```

In `SKILL.md`: "Output review conclusions using the structure in templates/review-report.md."

## What it does

- `SKILL.md` owns the process
- `templates/` owns how results look

Or simply:

- Skill decides **how to do it**
- template decides **how to present it**

That reduces two common problems:

- Different structure every time
- Information is there but hard to read, compare, or audit

## When templates are worth it

If you want similar-looking results every time, use a template—for example:

- Review reports
- Changelogs
- Research comparison tables
- Release checklists

Your first Skill does not need `templates/`.  
Once you keep saying "output in this structure," extract it.

## Difference from references/

| Directory | Focus |
|---|---|
| `references/` | Input standards, rules, APIs |
| `templates/` | Output format, report structure |

## Common misconceptions

### 1. Templates are only for looks

They also make results more stable, comparable, and auditable.

### 2. With a template, SKILL.md does not need output rules

Still not true.

`SKILL.md` should say when to use the template and which fields are required.

### 3. Every output deserves a template

Not always.

If output rarely repeats or structure varies a lot, forcing a template can constrain you.

## When to add templates/

If you have said "output in this structure" two or three times in a row, make `templates/`.

The core value of `templates/` is stable output structure for reuse and review.
---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Verification basis:** Current Codex runtime supports guiding use of bundled files in skills; this page discusses stable output-template practice, not current client UI or install flows.  
**Last verified:** 2026-07-26
