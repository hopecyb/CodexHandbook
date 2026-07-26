---
title: Refactor docs with review
description: Case study—batch link and section updates in an Astro/Starlight docs project; small diffs and build verification.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

This case demonstrates a **content engineering** task: multi-file Markdown, sidebar config, build verification. The stack matches this handbook, but the pattern applies to any static site.

## Metadata

| Item | Value |
|---|---|
| Domain | Content creation / docs engineering |
| Entry | CLI or IDE |
| Risk | Medium (many links and navigation) |
| Duration | 1–3 hours (depends on scale) |

Template reference: [Case study template](/cases/use-cases/case-study-template/)

## Background

After adding a new handbook chapter, you need to:

1. Update `astro.config` sidebar slugs
2. Fix in-page relative links
3. `npm run build` with zero errors

Humans often miss slugs; this fits Agent **checklist execution + build verification**.

## Preparation

- [ ] Clean git branch
- [ ] Local `npm run build` works
- [ ] List new page paths and target sidebar positions

## Task prompt (example)

```text
Goal: add environment-variables.md under 12-reference and wire it into sidebar and index links.
Constraints: only change src/content/docs and astro.config.mjs; do not upgrade dependencies.
Acceptance: npm run build succeeds; no dead links.
Steps: config first, then md, then update 12-reference/index.md.
```

## Execution notes

- **Config before content**: avoids missing-slug build errors
- Commit in batches of 3–5 files for easier review
- Use [Explore–Plan–Execute–Verify](/cases/workflows/explore-plan-execute-verify/)

## Checks

- [ ] Every sidebar slug has a matching file
- [ ] Internal links follow relative path conventions
- [ ] Build log has no Starlight warnings (if team requires zero warnings)

## Failure recovery

| Issue | Action |
|---|---|
| Sidebar slug error | Fix slug or add md per astro docs |
| Dead link | `grep` target path; fix link or add page |
| Build OOM | Change in batches; increase Node memory locally |

## Retro

- Third similar "new chapter + sidebar" task should become a Skill
- Check off ROADMAP items so docs and plan stay aligned

## References

- This repo's actual M2 docs iteration flow
- codex.bozhouai.com docs maintenance case (structural reference)

---

**Status:** verified  
**Applicable products:** CLI / IDE  
**Last verified:** 2026-07-26  
**Verification basis:** Cross-checked against this handbook's verified content artifacts, EPXV, build verification, and case template chapters; content is limited to the stable content-engineering case of small multi-file doc-site edits, build verification, and failure recovery.
