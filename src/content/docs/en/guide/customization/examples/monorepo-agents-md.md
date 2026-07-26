---
title: AGENTS.md in a Monorepo
description: Example patterns for placing project instructions, scope, and test commands in a single-repo multi-package structure.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

In a monorepo with multiple apps, shared packages, and different stacks—a single giant `AGENTS.md` makes it easy for the Agent to **edit the wrong package** or run the wrong tests. This page gives a reusable **layered instruction** pattern (example—trim for your repo).

## What This Page Covers

- How root and subpackages divide instruction writing
- How to align @ files and path constraints with package boundaries
- Consistency with CI / Cloud environment commands

## Why Layered Instructions Matter More Here

If a normal repo is one house, a monorepo is a building.

Different rooms, residents, and rules.  
If you only post one very long notice at the entrance, Codex often hits two problems:

- Sees everything but does not know which layer applies now
- Intended to change one package but touches elsewhere

The point is to make rules follow directory boundaries clearly—not mechanically add more `AGENTS.md` files.

## Recommended Structure (Example)

```text
repo-root/
  AGENTS.md              # Global: branch policy, commit conventions, prohibitions
  apps/web/AGENTS.md     # Frontend: framework, test commands, routing conventions
  apps/api/AGENTS.md     # Backend: API style, migration discipline
  packages/shared/       # Link from root only, or short sub-note
```

Root `AGENTS.md` should include:

- Directories the Agent **must not** modify (e.g. `infra/prod/`)
- **Owner or doc links** for each subpackage
- Global install command: `pnpm install` at root

## Common Misconceptions

### 1. As directories grow, do not pile everything at the root

Many first monorepo instruction attempts put all constraints in root `AGENTS.md`.

Result:

- Very long file
- Rules relevant to the current task do not stand out
- Subpackage-specific conventions get buried

Steadier practice: global consensus at root; local special rules in subpackages.

### Subpackage notes narrow mistaken edits—they do not duplicate root rules

If `apps/web` and `apps/api` differ in dev commands, test commands, and constraints, writing those differences in each directory helps Codex avoid wrong paths.

## Subpackage AGENTS.md Template Snippet

```markdown
## Scope
Modify only `apps/web/**` unless the task explicitly requires cross-package changes.

## Development
- Install: `pnpm install` at repo root
- Dev: `pnpm --filter web dev`
- Test: `pnpm --filter web test`
- Type check: `pnpm --filter web typecheck`

## Dependencies
Import shared types from `@acme/shared`; do not copy-paste.
```

## Task Prompt Coordination

For cross-package refactors, **list paths explicitly**:

```text
Goal: use new API client in apps/web
Allowed changes: apps/web/**, packages/api-client/**
Prohibited: change apps/api server directly
Acceptance: pnpm --filter web test && pnpm --filter api-client test
```

See [File and Folder Context](/guide/context/file-and-folder-context/)

## Cloud and CI

Monorepos on Cloud often fail from **install not at root** or wrong filter. In root `AGENTS.md`, state:

- Default working directory is repo root
- Filter commands for single-package tasks
- Cache strategy (if using turborepo/nx, note task graph)

[Cloud Environments](/guide/web-and-cloud/cloud-environments/)

## Common Mistakes

- Instructions only in `apps/web`; Agent changes lockfile at root
- Inconsistent test commands per subpackage, undocumented
- Subpackage AGENTS.md conflicts with root doc

## Root vs Subpackage: How to Decide

When unsure whether a note belongs at root or subpackage, ask:

1. Is this consensus every package must follow?
2. Does this hold only for one directory?
3. If this rule is in the wrong place, will the Agent edit the wrong scope?

Closer to (1) → root; closer to (2) and (3) → subpackage.

## Acceptance Checklist

- [ ] Root and at least one subpackage each have readable scope notes
- [ ] Any package can run its test command alone
- [ ] Cross-package tasks state allowed paths in the prompt

AGENTS.md in a monorepo does not need to be centralized; “global consensus” and “directory-local rules” each belong in the right place.

## References

- freestylefly/CodexGuide monorepo playbook
- codex.bozhouai.com large-repo chapter
- stormzhang monorepo and Git practices

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Verification basis:** Cross-checked against this handbook’s current `AGENTS.md`, file/folder context, and Cloud environment chapters; page content is limited to monorepo layered instruction example patterns and command organization, without treating specific product entry points or managed implementation as fixed contracts.  
**Last verified:** 2026-07-26
