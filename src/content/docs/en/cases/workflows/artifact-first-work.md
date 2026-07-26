---
title: Artifact-first work
description: Agree on final artifact shape and path first, then derive steps—good for docs, config, reports, and other deliverables.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

**Artifact-first** means clarifying deliverable shape and location before Codex derives steps. It fits tasks with clear outputs—Markdown docs, OpenAPI, migration scripts, slide outlines—and can pair with [specification-driven work](/cases/workflows/specification-driven-work/).

## What this page covers

- How to describe artifact structure instead of process details
- Consistency checks for multi-file deliverables
- Alignment with [Files and artifacts](/guide/files-and-artifacts/) capabilities

## Minimum viable approach

```text
Target artifacts:
- docs/api/auth.md (3 sections: overview, endpoints, error codes)
- Style consistent with @docs/api/users.md

Output outline and bullet points per section first; do not write full text;
after I confirm, generate and self-check internal links.
```

## Recommended workflow

```text
Define artifact list (path + format + sample reference)
    → Outline or skeleton files
    → Human confirmation
    → Fill content + cross-links
    → Verify (lint, link check, preview)
```

For visual artifacts, request screenshots or preview notes—see [Verify artifacts](/guide/quality/verify-artifacts/).

## Common mistakes

- Artifact paths don't match repo conventions (wrong directory)
- Single file only, ignoring navigation and index updates
- No sample reference—style feels disjointed
- Binary artifacts (pptx/docx) without how to open and accept manually

## Safety boundaries

- Generated content with third-party copyright needs human compliance review
- Do not overwrite production config paths—produce on a branch or under `draft/` first

## Acceptance checklist

- [ ] All declared files exist and open
- [ ] Format matches reference sample
- [ ] Links / TOC / frontmatter valid
- [ ] Meets [Definition of done](/prompts/define-done/)

## Reference sources

- codex.bozhouai.com docs and template tasks
- KimYx0207 content output workflows

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** Cross-checked against currently verified files and artifacts, definition of done, and verify artifacts chapters in this handbook; page content focuses on the stable method of agreeing on deliverables first, then deriving steps.
