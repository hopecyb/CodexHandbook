---
title: Skill anatomy
description: Roles of SKILL.md, references/, templates/, and scripts/, with examples.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
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
## From template to Skill

Many teams do not start by designing a Skill. They start with a prompt they keep copying. Let it evolve in stages:

| Stage | Form | Upgrade when |
|---|---|---|
| One-off prompt | Current conversation | It is only used once |
| Template | Prompt library or team docs | Similar tasks repeat but the steps still change |
| Single-file Skill | One `SKILL.md` | The process is stable and triggers are clear |
| Full Skill directory | `SKILL.md` + `templates/` + `references/` + `scripts/` | Output format, long references, and deterministic checks are all stable |

Do not turn every template into a Skill. Preserve the ones with repeated use, clear success criteria, and team agreement.

## Common reusable Skill components

| Component | Good for |
|---|---|
| Main instructions | Triggers, steps, prohibitions, done criteria |
| Templates | PR review output, document structure, risk report format |
| References | Code standards, glossary, domain rules, API notes |
| Scripts | Complexity analysis, link checks, coverage counts, formatting checks |

A good Skill is not just a longer prompt. It splits reusable work into readable, testable, maintainable parts.

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Verification basis:** Current Codex runtime still centers skills on `SKILL.md` with optional scripts and references; this page covers directory roles, not volatile product entry points.  
**Last verified:** 2026-07-26
