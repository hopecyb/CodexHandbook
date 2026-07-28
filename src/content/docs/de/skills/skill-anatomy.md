---
title: Skill anatomy
description: Roles of SKILL.md, references/, templates/, and scripts/, with examples.
locale: de
source_locale: en
source_revision: '31950e9'
translation_status: fallback
translated_at: '2026-07-28'
---

The first time you open a Skill directory, folders look familiar—but it is not always obvious why they are laid out this way.

This page explains how to separate main flow, long docs, templates, and scripts instead of stuffing everything into one file.

That makes reading, editing, and reuse easier and avoids a mess as you grow.

# Skill anatomy

## Directory layout

```text
my-skill/
├── SKILL.md          # Required
├── scripts/          # Optional: deterministic steps
├── references/       # Optional: long reference docs
└── templates/        # Optional: output templates
```

## What each layer does

- `SKILL.md`: Main manual—what it is, when to use it, what steps to follow
- `references/`: Long reference shelf; do not cram all background into the main file
- `templates/`: Output skeletons so you are not improvising every time
- `scripts/`: Hand deterministic steps to scripts instead of only natural language

At first you may only need `SKILL.md`.  
Split out `references/`, `templates/`, and `scripts/` when things actually get complex.

## Minimal SKILL.md example

```md
---
name: pr-review
description: Review the diff of the current branch against main; flag risks and test gaps. Use when the user asks for review, PR review, or pre-merge checks.
---

## Steps
1. Get the diff against main
2. Classify by file: logic errors, security, performance, tests
3. Output tiered list: blocking / suggestion / nit
4. Do not auto push or merge
```

## Common misconceptions

### 1. You must create every directory on day one

Many good Skills start with only `SKILL.md` and grow other dirs as reuse increases.

### 2. references/ is just for "more content"

The point is moving long material you should not always load into the main flow.

### 3. Avoid scripts if you can

If a step should be stable, deterministic, and repeatable, a script is often more reliable than repeated natural-language description.

## Directory roles

| Directory | Purpose |
|---|---|
| `SKILL.md` | Main flow, triggers, prohibitions |
| `references/` | Long docs, standards, API notes |
| `templates/` | Output format, report skeleton |
| `scripts/` | Deterministic commands and checks |

## When to split directories

Ask in this order:

1. Is the main flow too long to read in one pass?
2. Is there a large block of material not needed every time?
3. Is there a fixed output format you repeat?
4. Is there a step stable enough to script?

If one or two answers are yes, start splitting.

Run with `SKILL.md` first; split references, templates, and scripts when complexity warrants it.

Full exercise: [Create your first Skill](/skills/create-your-first-skill/).
---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Verification basis:** Current Codex runtime still centers skills on `SKILL.md` with optional scripts and references; this page covers directory roles, not volatile product entry points.  
**Last verified:** 2026-07-26
