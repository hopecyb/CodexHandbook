---
title: references/ directory
description: Organize long reference docs in a Skill for progressive disclosure.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

`references/` holds long material you do not need to expand every time—so the main flow stays short and clear.

It is not just "extra files"; it is material that is **not always needed immediately but matters at a specific step**, loaded when needed.

# references/ directory

When `SKILL.md` grows too long, move detailed standards, API notes, and checklists to `references/` and reference them from steps as needed.

## Example

```text
my-skill/
├── SKILL.md
└── references/
    ├── style-guide.md
    └── api-contracts.md
```

In `SKILL.md`:

```md
When reviewing code style, read references/style-guide.md and check against its rules.
```

## What it does

- `SKILL.md` owns the main line
- `references/` owns "open when needed" material

Or simply:

- `SKILL.md` is the work instruction
- `references/` is the reference shelf

Readers are not buried in background on first read; details are there when needed.

## When to split out references/

Consider splitting when `SKILL.md` has:

- A large standards block eating space every time
- Multiple reference topics mixed together
- Background breaking the main flow so first read loses the thread

Your first Skill does not need `references/`.  
Common order: **get it working, split when content actually grows.**

## Common misconceptions

### 1. references/ is not just copying content elsewhere

Its job is keeping the main flow short, clear, and runnable first.

### 2. More reference files is not always better

Dumping everything into `references/` just moves clutter across files.

### 3. With references/, SKILL.md can be very thin

The main process should still live in `SKILL.md` so first-time readers know how to execute.

## Principles

- Main flow stays in `SKILL.md`; references load on demand
- One file, one topic—easier maintenance
- Avoid repeating SKILL.md steps inside references

## What belongs in references/

If content answers "**what rules apply**," it usually fits `references/`; if it answers "**what step comes next**," keep it in the main flow.

`references/` shortens the main flow and expands detail when needed.
---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Verification basis:** Current Codex runtime explicitly uses on-demand reads of skill body and related material; this page describes stable documentation organization for `references/`.  
**Last verified:** 2026-07-26
