---
title: Browser tool
description: Letting Codex open pages, inspect UI state, and verify frontend behavior—capabilities and boundaries.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

The **browser tool** lets the Agent access real pages in a controlled environment: read the DOM, capture screenshots, sometimes perform simple interactions. Good for frontend acceptance, doc link checks, and design comparison—not a substitute for security audits or casual production admin use.

It differs from search: search finds information; the browser tool actually opens the page.

## Problems it helps with

Common questions:

- What does this page actually look like right now?
- What happens when I click this button?
- Does this layout break at a real viewport width?

Code review or text alone often is not enough—you need the page open.

## What's covered

- What the browser tool can and cannot do
- How it differs from web search and Computer Use
- Safe authorization and constraints

## Capability overview

| Good fit | Poor fit |
|---|---|
| Open local dev server pages for layout | Bulk crawl sites restricted by ToS |
| Verify public doc links are not 404 | Auto-login on unauthorized systems |
| Compare static page to implementation | Replace full E2E test frameworks |
| Read visible page text for debugging | Sites with heavy CAPTCHA |

Background: [tool selection](/guide/tools/tool-selection/)

## Comparison with other tools

| Tool | Input | Output |
|---|---|---|
| Web search | Query | Summary and links |
| Browser | URL / local address | Page structure, screenshots, interaction results |
| Computer Use | Full-screen GUI | Any app operation (heavier, more sensitive) |

## Common misconceptions

### 1. Not a replacement for automated testing

It can inspect pages, screenshot, and click some interactions—it does not replace a full test system.

### 2. Page loads ≠ page is correct

Loading only proves existence; layout, copy, interaction, and links still need review.

### 3. When to use it?

Typical cases:

- Local layout issues
- 404 link checks
- Rough design alignment
- Confirming "code looks right but does the real page?"

## Decision criteria

If your question is:

- "What does it actually render as?"
- "What is visible on the page?"
- "What feedback appears after this interaction?"

The browser tool usually beats pure text analysis.

## Recommended workflow

1. **Local frontend**: run `npm run dev`, then provide `http://localhost:PORT/path`
2. **Specific task**: "Check login form overflow at 375px width"—not "look at the website"
3. **State boundaries**: no external network, no submitting forms to production
4. **Acceptance**: compare with [verify artifacts](/guide/quality/verify-artifacts/) and screenshots

## Example prompt

```text
Only visit http://localhost:4321/guide/foundations/local-vs-cloud/ and check above-the-fold layout and hero image appearance.
Do not access the public internet or submit any forms.
If you find issues, provide screenshot evidence and fix suggestions.
```

## Security boundaries

- Default assumption: browser can reach **everything your machine/environment can**—including internal admin
- Declare in task: `localhost only` or an allowlist of domains
- Do not run untrusted repo tasks in a browser profile logged into personal accounts
- Cloud browser policy follows [Cloud environments](/guide/web-and-cloud/cloud-environments/) and network rules

Approvals: [permissions and approvals](/guide/foundations/permissions-and-approvals/)

## Common mistakes

- Production URL without read-only limits
- Treating screenshots as "tests passed" without automated tests
- Using web search when real rendering check is needed

## Acceptance checklist

- [ ] Access scope fixed in prompt
- [ ] Key visual issues have screenshots or clear text
- [ ] Consistent with unit/E2E results—or documented known gaps

---

**Status:** verified  
**Applicable products:** App / Codex (version and permission dependent)  
**Verification basis:** OpenAI Help Center currently documents built-in browser in the desktop App—open pages in Work or Codex, switch tabs, download files, annotation mode, per-site approval. This page focuses on use cases, distinction from search/Computer Use, and security boundaries.  
**Last verified:** 2026-07-26
