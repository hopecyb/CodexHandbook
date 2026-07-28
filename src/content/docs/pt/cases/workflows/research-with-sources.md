---
title: Research with sources
description: Use Codex for search, comparison, and fact-checking—traceable sources and conclusions.
locale: pt
source_locale: en
source_revision: cc7038f
translation_status: fallback
translated_at: '2026-07-28'
---

**Research with sources** means every key conclusion can be traced to a specific source—official docs, papers, or repo files—not just an unsupported claim. It fits tech selection, competitive comparison, literature review, and policy interpretation.

## What's covered

- When to use [web search](/guide/tools/web-search/) vs read-only repo work
- How to require citation format and uncertainty labels
- How this pairs with [validate sources](/guide/quality/validate-sources/)

## Minimum viable approach

```text
Research "Rust vs Go for this repo's context":
1. List evaluation dimensions first (performance, ecosystem, team familiarity)
2. Attach source URL or @in-repo file path to each conclusion
3. Mark unverifiable items as "to confirm"
4. End with recommendation and open questions
Do not change code.
```

## Recommended workflow

```text
Define question and exclusions
    → collect sources (search / read docs / MCP)
    → comparison table + pros/cons
    → label confidence and conflicting sources
    → human decision or move to spec phase
```

For long research, split across rounds—see [Long-running task management](/cases/workflows/long-running-task-management/).

## Common mistakes

- No URL required—output can't be rechecked
- Mix outdated blogs with official docs without saying so
- Treat research conclusions as implementation orders, skipping spec
- Upload confidential data to unauthorized external tools

## Security boundaries

- Internal unpublished material must not leave via uncontrolled MCP
- Volatile facts (pricing, versions, regional availability) need a [verification date](/guide/start-here/handbook-version-policy/)

## Acceptance checklist

- [ ] Key conclusions have at least one clickable or traceable source
- [ ] Conflicting information is presented side by side
- [ ] "Uncertain" items are listed, not disguised as facts
- [ ] Sensitive data does not appear in prompts or logs

## Related chapters

- [Handle uncertainty](/guide/quality/handle-uncertainty/)
- [Case: Refactor docs with review](/cases/use-cases/content-creation/refactor-docs-with-review/)

## References

- CodexGuide research and citation methods
- stormzhang search and verification chapters

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** Cross-checked against OpenAI Developers' current public web search and source-backed research capabilities, plus this handbook's verified web search, validate sources, handle uncertainty, and version policy chapters; this page confirms only the stable research method that key conclusions trace to sources and conflicts/uncertainty are explicit.
