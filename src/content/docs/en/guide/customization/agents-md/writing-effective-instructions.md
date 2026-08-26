---
title: Writing Effective Project Instructions
description: AGENTS.md writing checklist—short, hard, executable, verifiable.
locale: en
source_locale: zh-CN
source_revision: 2d236a3
translation_status: reviewed
translated_at: 2026-07-26
reviewed_at: 2026-08-26
sidebar:
  order: 30
---

Effective project instructions are closer to a **checklist**. The goal is for Codex to make fewer predictable mistakes on the first try.

When writing project instructions for the first time, a common problem is many ideas but unclear key constraints.

## Contents

- What project instructions should look like
- What “short, hard, executable” means
- Patterns that most confuse Codex and humans

## Recommended Structure

```md
# Project Instructions

## Quick Start (3–5 lines)
Install, dev server, most common test command

## Must Follow
Numbered list of non-negotiable rules

## Code and Directories
Naming, placement, dependency conventions

## Definition of Done
What counts as “ready to commit”

## Prohibited
Explicitly state what not to do
```

## Writing Principles

### 1. Front-load hard constraints

Put “must” and “must not” near the top of the file. When context is limited, the model weights the beginning higher—the same logic as [Context Priority](/en/guide/context/context-priority/).

### 2. Commands should be copy-pasteable

Write **real runnable** commands, not “run the tests”:

```md
# Good
pnpm test --filter @app/web

# Poor
Make sure tests pass
```

### 3. Verifiable definition of done

```md
## Definition of Done
- `pnpm lint` and `pnpm test` pass with no failures
- New APIs have corresponding unit tests
- User-visible changes include manual test steps (browser + mobile)
```

### 4. Keep “why” to one sentence when possible

```md
- Do not edit `generated/`: code-generated; manual edits are overwritten on next build
```

Long background should link to formal `docs/`.

## What “Good Instructions” Mean

Good instructions let humans and Codex quickly grasp:

- What to do first
- What not to do
- What “done” looks like

If after reading you still do not know which command to run first, what not to touch, or how to know you are finished, it is not useful enough yet.

## Team Playbook Snippet Example

```md
## PR and Git
- Branch naming: `feat/`, `fix/`, `docs/` prefixes
- One PR does one thing; large refactors get their own PR
- Human review of the diff is required before merge, even if Codex ran tests

## Working with Codex
- For large tasks, ask for “a plan first; wait for my confirmation before changing code”
- For database migrations, output migration SQL for human review first
```

## Common Mistakes

| Mistake | Consequence |
|---|---|
| Piling on framework encyclopedia | Key test commands ignored |
| Contradictory rules | Model picks one at random |
| Vague lines like “be elegant” | Cannot verify |
| Keys or internal URLs included | Leak risk |

## Common Misconceptions

### 1. More detail is not always better

Too scattered, too long, too encyclopedic—and high-priority rules get drowned out.

### 2. Does “follow conventions” count as an instruction?

Usually not executable enough.  
Better to give:

- Real commands
- Explicit directories
- Concrete completion criteria

### 3. Can background and execution rules be mixed freely?

Not recommended.  
Better:

- Rules up front
- Background compressed to one line
- Longer explanation in docs

## When Rewriting, Start Here

If you have a scattered project instruction doc, tighten it this way:

1. Move “must/must not” to the front
2. Turn vague language into concrete commands or checks
3. Shorten long background; replace with links
4. Provide a minimal definition of done

Good project instructions are not about volume—they make key constraints, key commands, and completion criteria clear enough to execute directly.

## Maintenance Rhythm

- **Update** `AGENTS.md` whenever CI commands change
- Quarterly review: remove obsolete rules
- First onboarding step for new members: read AGENTS.md and complete “Quick Start”

## Further Reading

- [Project Instructions](/en/guide/customization/project-instructions/)
- [Explore—Plan—Execute—Verify](/en/cases/workflows/explore-plan-execute-verify/)
- [Define Done](/en/prompts/define-done/)

## From one task to a project rule

Not every good prompt belongs directly in `AGENTS.md`. First decide which layer should own it.

| Repeated content | Better place |
|---|---|
| “Do not edit generated directories” | `AGENTS.md` prohibition |
| “Review every PR in this fixed format” | Skill or prompt template |
| “Format files after writing” | Hook |
| “Read Linear/Jira before coding” | MCP + matching Skill |
| “I prefer Chinese explanations” | Memory or personal preference |

`AGENTS.md` is best for long-lived, shared, verifiable rules. Process content can move to Skills; automatic checks to Hooks; external access to MCP.

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Verification basis:** Cross-checked against this repo’s current `AGENTS.md` series, context, and workflow chapters; this page only states stable writing principles and maintenance rhythm for project instructions and does not treat any one client’s implementation details as a long-term promise.  
**Last verified:** 2026-07-26
