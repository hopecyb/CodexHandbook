---
title: Add a Prompt Example
description: Submit reproducible prompts to examples/prompts with metadata and acceptance criteria.
locale: de
source_locale: en
source_revision: 48a7e2f
translation_status: fallback
translated_at: '2026-07-28'
---

Prompt examples live at repo root [`examples/prompts/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/prompts), linked from handbook pages. Design spec: [`docs/planning/examples-system.md`](/docs/planning/examples-system.md).

## What this page covers

Common blockers:

- What makes a prompt “worth including”
- What format lets others reuse it

This page explains how to submit something **others can try, learn from, and reproduce**.

## Inclusion criteria

We collect reproducible examples with context, boundaries, and acceptance criteria—not inspiration snippets.

A solid example answers:

- When to use it
- Exactly what to say
- How to judge success afterward

Clever one-liners without prerequisites or verification are notes—not examples.

## File naming

```text
examples/prompts/<category>/<slug>.md
```

`category` examples: `development`, `research`, `meta-workflows`, `team`.

## Required metadata (YAML frontmatter)

```yaml
---
id: prompt.fix-bug-with-tests
title: Fix Bug and Add Tests
content_type: prompt
audience: [beginner, developer]
difficulty: beginner
products: [app, cli, ide]
capabilities: [planning, file-editing, testing]
status: draft
last_verified: YYYY-MM-DD
---
```

## Required body sections

1. **Use case**
2. **Prerequisites** (permissions, branch, context files)
3. **Recommended prompt** (full, copy-paste ready)
4. **Acceptance criteria** (checklist, objectively verifiable)
5. **Common failure modes**
6. **Related handbook pages** (links to `src/content/docs/`)

Optional: minimal variant, teaching breakdown, replaceable variables.

## Common misconceptions

### Do not bury the prompt

Background and theory are fine—but put the **copy-paste prompt** up front, then prerequisites and failures, then explanation.

### Used once ≠ complete example

Readers do not share your implicit assumptions. State:

- Which product entry
- Required files, screenshots, or context
- Whether edits, commands, or network are assumed allowed

### No real secrets in examples

Real tokens, accounts, internal URLs, or customer data do not belong in a public repo.

Teach the method—not your production environment.

## Acceptance criteria example

```markdown
## Acceptance criteria

- [ ] Previously failing test passes
- [ ] Agreed test suite passes
- [ ] Diff only touches task-related files
- [ ] No `git push` executed
```

## Quality bar

- Clear goal and definition of done
- Permission and security boundaries stated
- No real keys or PII
- `verified` status needs [independent verification](/guide/contributing/verify-technical-content/)

## Submission flow

1. Identify the real task class this solves
2. Write a copy-paste prompt
3. State minimum prerequisites and boundaries
4. Define what success looks like
5. Check for secrets and correct directory

## PR checklist

- [ ] New file path indexed in `examples/README.md` if index is maintained
- [ ] At least one case or workflow page links to the example (optional but recommended)

A good prompt example lets someone reproduce and get a similar outcome.

---

**Status:** verified  
**Verification basis:** Cross-checked current `examples/` layout, example frontmatter, indexing, and contribution flow; aligned with case/workflow link patterns—not volatile product UI behavior.  
**Last verified:** 2026-07-26
