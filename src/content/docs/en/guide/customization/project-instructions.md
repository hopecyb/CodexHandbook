---
title: Project Instructions
description: Project-level context beyond AGENTS.md—how README, docs, and conversation references divide labor.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---


“Project instructions” are the **static context** Codex uses to understand a repo, not limited to a single file format.

## Contents

- Besides `AGENTS.md`, where else should project-level information live
- How README, docs, and script files divide labor
- What belongs in the repo versus what should stay only in the current conversation

## Components of Project Context

| Source | Role |
|---|---|
| `AGENTS.md` | Collaboration rules and commands (authoritative: AGENTS series in this chapter) |
| `README.md` | What the project is and how to start it |
| `docs/` | Architecture, ADRs, runbooks |
| Dependencies and scripts | Executable truth in `package.json`, `Makefile`, and similar |

Codex reads these materials with tools; the key is a **single source of truth**—startup commands in the README must actually work.

## Basic Practice

1. Ensure the root `README.md` has four sections: purpose, install, development, test
2. Sink **instructions you repeat to Codex** into `AGENTS.md`
3. In tasks, use `@` to point at specific files instead of pasting full text:

```text
Fix the null pointer in @src/auth/login.ts per test requirements in @AGENTS.md.
See @docs/auth-flow.md for related design.
```

## Why It Matters

Common situations include:

- README says one thing
- docs say another
- The command that actually runs is hidden in `package.json`

Then not only people get confused—Codex does too. The point is to keep “project truth” in the repo as concentrated and consistent as possible.

## Division of Labor with “Conversation Context”

- **Project instructions**: relatively stable for months
- **Conversation context**: this task’s goal, constraints, and intermediate conclusions

In long tasks, if a rule keeps coming up, **write it back** to `AGENTS.md` or `docs/` instead of copy-pasting across ten threads. See [Keep Context Focused](/guide/context/keep-context-focused/).

## Common Mistakes

- Outdated README; Codex runs wrong commands
- Stuffing all documentation into one giant `CONTEXT.md` that nobody maintains
- Putting sensitive information in public repo documentation

## Common Misconceptions

### 1. If I explain clearly in chat, messy repo docs are fine

That may work short term; long term it gets worse.

Next time you explain again, and others never see what you said this time.

### 2. Can `AGENTS.md` solve every project-instruction problem?

No.

`AGENTS.md` suits rules and collaboration constraints better than replacing project introduction, architecture background, and full run instructions.

### 3. More documentation is always better

What matters more:

- Clear division of labor
- Consistent content
- Key commands that actually run

## Suggested Division of Labor

- `README.md`: what the project is, how to start, how to test
- `AGENTS.md`: collaboration rules, no-go areas, definition of done
- `docs/`: longer background, architecture, process documentation
- Scripts and config files: executable truth

The point of project instructions is to help Codex and humans find the same “repo truth.” Document count itself is not the goal.

## Acceptance Checklist

- [ ] Someone who freshly clones the repo (or Codex) can run tests from README + AGENTS.md
- [ ] Task prompts rely mainly on @ references, avoiding repeated long background

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Verification basis:** Cross-checked against OpenAI Developers’ current public description of project context and file collaboration, and this handbook’s verified project context, files, and workflow chapters; page content keeps only the stable division of labor among README, `AGENTS.md`, `docs/`, and task conversation.  
**Last verified:** 2026-07-26
