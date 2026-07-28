---
title: Specification-driven work
description: Write an acceptance-ready spec first, then have Codex implement to plan—good for clear delivery tasks.
locale: de
source_locale: en
source_revision: 91c65d9
translation_status: fallback
translated_at: '2026-07-28'
---

**Specification-driven** work means preparing a short spec before large file changes—goals, scope, interfaces, and acceptance criteria. It can follow [Brainstorm before building](/cases/workflows/brainstorm-before-building/), or go straight into [EPXV](/cases/workflows/explore-plan-execute-verify/) with already-clarified requirements.

## What's covered

- How detailed the spec needs to be
- How to keep Codex on-spec without scope creep
- How specs relate to PR descriptions and issues

## Minimum viable spec template

```markdown
## Goal
One sentence of user value

## Scope
- In scope: …
- Out of scope: …

## Interface / behavior
- Inputs / outputs / error cases

## Acceptance criteria
- [ ] Automatically verifiable items
- [ ] Items requiring human check

## Constraints
- Modules that must not change, performance, compatibility
```

Put the template in repo `docs/specs/` or an issue body and `@` reference it in tasks.

## Recommended workflow

```text
① Draft spec (Codex can help; human reviews)
② Confirm spec → reply "execute to spec"
③ Execute step by step against acceptance items
④ Spec changes must explicitly bump version or changelog
```

Prompt example:

```text
Read @docs/specs/export-csv.md. First list implementation plan and risks against the spec;
do not add features not in the spec. Wait for my confirmation before writing code.
```

## Pairing with test-driven work

Acceptance items in the spec should be **testable** where possible; write tests first when you can—see [Test-driven work](/cases/workflows/test-driven-work/).

## Common mistakes

- Spec as long as a design doc—key constraints get buried
- Scope quietly grows during execution without updating the spec
- Vague acceptance ("more usable") leads to arguments
- Spec conflicts with `AGENTS.md` architecture conventions

## Security boundaries

- External API calls only when the spec explicitly allows network-related implementation
- PII field handling must be called out in the spec

## Acceptance checklist

- [ ] Out-of-scope items explicitly excluded
- [ ] At least 3 checkable acceptance criteria
- [ ] Human or written confirmation before execution
- [ ] Changes synced back to the spec file

## References

- KimYx0207 requirements and task decomposition chapters
- freestylefly/CodexGuide spec and acceptance checklists

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** Cross-checked against this handbook's verified brainstorm, EPXV, test-driven, and `AGENTS.md` chapters; content is limited to the stable pattern of writing acceptance-ready specs first, then executing to spec.
