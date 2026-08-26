# English and French localization critique

Date: 2026-08-26

## English

- All 66 changed pages were aligned with the current zh-CN source and reviewed in a technical-documentation voice.
- Structural parity passes for headings, fences, tables, images, ordered lists, links, revisions, and review status.
- Stale `--cwd`, zh-CN diagram paths, and superseded App, IDE, Cloud, permission, and secrets guidance were removed.
- The English diagram dictionary covers all 258 visible source strings. Nine localized SVGs were generated and validated as XML, with no Han text remaining in `title`, `desc`, or `text` elements.
- Visual review shortened two labels in the Scheduled task diagram to avoid overflow.

## French

- A bulk lexical draft produced unnatural mixed-language prose and was rejected during critique.
- The 66 pages were restored to their previous readable French content and explicitly left at `translation_status: draft`. They are not presented as current or reviewed translations.
- The remaining structural parity failures are expected and must be resolved through manual, page-level French rewriting against the current source.
- The French diagram dictionary was translated separately, string by string. It covers all 258 visible source strings. Nine localized SVGs were generated and validated as XML, with no Han text or common unintended English prose remaining in visible XML text elements.

## Residual risk

The French diagrams are complete, but the French page corpus is intentionally incomplete. Do not promote those 66 pages to `reviewed` until each body has been rewritten and checked for current facts, natural French, localized links, and structural parity.
