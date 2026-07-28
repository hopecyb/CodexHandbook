---
title: Research with sources
description: Use Codex for search, comparison, and fact-checking—outputs with traceable sources and conclusions.
locale: pt
source_locale: en
source_revision: dbaa231
translation_status: fallback
translated_at: '2026-07-28'
---

**Research with sources** emphasizes that conclusions must trace back to **sources** (official docs, papers, repo files), not model confidence. Suitable for tech selection, competitive comparison, literature review, policy interpretation.

## What this page covers

- When to use [web search](/guide/tools/web-search/) vs read-only repo
- How to require citation format and uncertainty labels
- Connection to [Validate sources](/guide/quality/validate-sources/)

## Minimum viable approach

```text
Research "Rust vs Go suitability for this repo's scenario":
1. List evaluation dimensions first (performance, ecosystem, team familiarity)
2. Each conclusion cites source URL or @in-repo file path
3. Mark unverifiable items as "to confirm"
4. End with recommendation and open questions
Do not change code.
```

## Recommended workflow

```text
Define problem and exclusions
    → Collect sources (search / read docs / MCP)
    → Comparison table + pros and cons
    → Label confidence and conflicting sources
    → Human decision or move to spec phase
```

For long research tasks, split across rounds—see [Long-running tasks](/prompts/long-running-tasks/).

## Common mistakes

- No URL requirement—output cannot be audited
- Mix outdated blogs with official docs without noting it
- Treat research conclusions as implementation instructions, skipping spec
- Upload confidential files to unauthorized external tools

## Safety boundaries

- Internal unpublished material must not be sent via uncontrolled MCP
- Volatile facts (price, version, regional availability) must note [verification date](/guide/start-here/handbook-version-policy/)

## Acceptance checklist

- [ ] Key conclusions have at least one clickable or traceable source
- [ ] Conflicting information is presented side by side
- [ ] "Uncertain" items are listed, not disguised as facts
- [ ] Sensitive data does not appear in prompts or logs

## Related chapters

- [Handle uncertainty](/guide/quality/handle-uncertainty/)
- [Case: Refactor docs with review](/cases/use-cases/content-creation/refactor-docs-with-review/)

## Reference sources

- CodexGuide research and citation methods
- stormzhang search and verification chapters

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** OpenAI Developers' current Codex use cases still include "Learn a new concept," emphasizing turning dense material into auditable learning or research output; this page also requires each conclusion to cite a URL or repo file path and explicitly mark items to confirm—consistent with current "research with sources" best practices.
