---
title: What Is AGENTS.md
description: Project-level persistent instruction file—a "collaboration contract" for Codex, not an architecture encyclopedia.
locale: es
source_locale: en
source_revision: 7e393ee
translation_status: fallback
translated_at: '2026-07-28'
---


`AGENTS.md` is a **Markdown project instruction** file in the repo (or a subdirectory). Codex reads it when entering the project to align on coding style, test requirements, commit conventions, and no-go areas.

Think of `AGENTS.md` as instructions for “how Codex should work with this project.”

It is not an advanced architecture document or a complete handbook for new human hires; it is project collaboration rules for Codex.

## One Core Concept

Treat it as a **condensed new-hire handbook**: only “how to work in this repo,” not company history.

| Good fit for AGENTS.md | Poor fit |
|---|---|
| How to run tests, lint, build | Full API docs (link to formal docs) |
| Directory conventions, naming style | Thousands of lines of historical design decisions |
| Prohibitions (e.g. do not change `main`, do not commit secrets) | Temporary needs that differ every task |
| Commit messages, PR checklists | Personal preferences unrelated to code |

## Minimum Viable Practice

Create `AGENTS.md` at the repo root:

```md
# Project Instructions

## Build and Test
- Install: `pnpm install`
- Test: `pnpm test` (must run after logic changes)
- Type check: `pnpm typecheck`

## Code Style
- Use TypeScript strict mode
- New components go in `src/components/`, filenames PascalCase

## Prohibited
- Do not modify `pnpm-lock.yaml` unless dependencies change
- Do not commit `.env` or API keys
- Do not run `git push` without confirmation

## Definition of Done
- Related tests pass
- No new lint errors
- Describe verification steps in the PR description
```

After saving, in a new task write only **this task’s delta**, for example: “Fix login page layout on Safari; accept per AGENTS.md.”

## Common Misconceptions

### 1. Do I have to repeat these rules manually every time?

Usually not.  
That is one reason `AGENTS.md` exists:
put **stable project rules** there so you do not re-explain them every new task.

### 2. If I write it, will Codex always follow it 100%?

`AGENTS.md` matters, but it still works together with:

- Explicit requirements in this task
- Product permissions and approval mechanisms
- Sandbox, network, and team policy

More accurately, it helps alignment; it is not a universal enforcer.

### 3. If I am not a programmer, do I still need to care about this file?

You need the basic idea.  
Even if you do not write code yourself, as long as you have Codex working on a project over time, `AGENTS.md` reduces repeated explanation and drift.

## Where to Put It

| Location | Scope |
|---|---|
| Repo root `AGENTS.md` | Default for the whole project |
| Subdirectory `AGENTS.md` | That directory and subpaths (common in monorepos) |
| User-level notes | Personal configuration or global preferences—do not mix with project instructions |

Scope and conflict handling: [Scope and Precedence](/guide/customization/agents-md/scope-and-precedence/).

## Difference from Skills and Slash Commands

| Mechanism | Essence | Typical use |
|---|---|---|
| AGENTS.md | Persistent, passive project rules | Style, tests, no-go areas |
| Skill | Reusable workflow package (`SKILL.md`) | Release checklist, specialized review flow |
| Slash command | Shortcut you trigger actively | `/review`, one-off workflows |

Use `AGENTS.md` for project rules; **repeatable, shareable step sets** fit better as a [Skill](/skills/overview/).

## How to Decide Where to Write Something

If unsure where a sentence belongs, use this rule:

- **This rule holds long term**: better in `AGENTS.md`
- **This is special for this task only**: in the current task prompt
- **This is a reusable procedure**: consider a Skill

For example:

- “This repo validates with `pnpm test`” → `AGENTS.md`
- “Only change the login page this time; do not touch registration” → current task
- “Run the same check flow before every release” → better as a Skill

## Common Mistakes

- File too long; the model only reads the first part—**put hard constraints in the first 30 lines**
- Writing high-risk instructions like “always auto push,” conflicting with [Permissions and Approvals](/guide/foundations/permissions-and-approvals/)
- Nobody on the team maintains it; docs disagree with real script commands

## Security Boundaries

`AGENTS.md` **cannot replace** sandbox and approval. Even if you write “feel free to run any command,” the product may still require confirmation; team-managed policy can tighten further.

`AGENTS.md` tells Codex how this project usually works—not what to do in this specific task.

## References

- OpenAI Codex project context documentation
- freestylefly/CodexGuide: `docs/advanced/02-agents-md.md`
- stormzhang/ai-coding-guide: `codex/11-agents-md.md`

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Verification basis:** Cross-checked against OpenAI Developers’ current public description of project context, task boundaries, and approval/sandbox constraints; page content is limited to purpose, boundaries, and common patterns for `AGENTS.md`, without unverified mandatory precedence details.  
**Last verified:** 2026-07-26
