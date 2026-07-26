---
title: AGENTS.md Scope and Precedence
description: Multiple files, monorepos, and who wins between project rules and conversation prompts.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---


When multiple `AGENTS.md` files, configuration files, and the current conversation coexist, you need clarity on **which rule applies**.

This page is about: when two rules look different, which one should you follow?

## Precedence Overview

```text
Managed organization policy > nearer-directory AGENTS.md > repo-root AGENTS.md > user configuration > current conversation
```

“Nearer” means the subdirectory file **closer to the current working path**. For example, when working under `packages/web/AGENTS.md`, that file merges with the root file; on conflict, **the subdirectory wins**.

## How to Understand “Closer Wins”

Think of it as:

- Root rules are “whole-repo default law”
- Subdirectory rules are “special notes for this local area”

So rules closer to where you are working are usually more specific and should take priority.

## Relationship with Conversation Prompts

| Source | Persistence | Good for |
|---|---|---|
| AGENTS.md | Cross-session, versioned | Team consensus, build commands, no-go areas |
| Task prompt | This session only | This task’s goal, scope, deadline |
| @ file reference | Session context boost | Specific implementation files, design files |

**Do not** paste the entire `AGENTS.md` into chat repeatedly; if you must emphasize one item, reference it in one line: “Follow test requirements in AGENTS.md; additionally do not change `legacy/` this time.”

## Monorepo Pattern

```text
repo/
├── AGENTS.md              # Whole repo: package manager, CI, security
├── apps/
│   └── web/
│       └── AGENTS.md      # Frontend: component library, E2E commands
└── packages/
    └── api/
        └── AGENTS.md      # Backend: database migration conventions
```

Principles:

- **Root file**: 10–20 hard rules shared across the repo
- **Subpackage files**: commands and directory notes specific to that package only
- Avoid three files that are 80% duplicate—put shared content at the root; subpackages write only deltas

## Boundary with Personal Preferences

Personal habits (theme, default model, local paths) belong in **user configuration**; do not put them in the team repo’s `AGENTS.md` or collaborators get hurt by mistake.

## Common Misconceptions

### 1. What I say in the current conversation is newest, so it has highest priority

Conversation is for “extra requirements this time,” not for casually overriding team or organization hard rules.

### 2. Subdirectory `AGENTS.md` is just copying root rules

It should not be.

Better practice:

- Root rules hold what is common
- Subdirectories write only deltas and exceptions

### 3. Knowing the order alone is not enough

You also need to know:

- Which kind of information belongs on which layer
- Why one layer wins on conflict

## How to Judge on Conflict

When two rules seem to conflict, check in this order:

1. Which is closer to the current working directory
2. Which is a long-term project rule versus a temporary addition for this time only
3. Whether organization or managed policy restricts from above

On rule conflict, usually prefer the layer that is closer, harder, and more explicit—do not assume “the latest sentence” always wins.

## Common Mistakes

- Subdirectory `AGENTS.md` contradicts the root file without saying which wins
- Putting sensitive keys in `AGENTS.md` and committing to Git—use secret management and environment variables
- Expecting a “temporary relaxation” in conversation to override team-managed policy (usually not possible)

## Acceptance Checklist

- [ ] Root `AGENTS.md` and subpackage files have a clear division of labor
- [ ] Clear awareness that conflicting rules favor the subdirectory
- [ ] Task prompts write only deltas, not a full copy of the project manual

---

**Status:** outdated  
**Applicable products:** App / CLI / IDE / Cloud  
**Review note:** This page currently states precedence among `AGENTS.md`, user configuration, and the current conversation as an overly fixed linear order; actual precedence may differ across clients, organization-managed capabilities, and runtime environments. It needs a rewrite after official current sources are added.  
**Last verified:** 2026-07-26
