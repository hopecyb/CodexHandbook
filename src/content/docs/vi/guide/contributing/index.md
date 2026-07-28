---
title: Contributing
description: How to contribute guides, cases, prompt examples, and translations—process and quality standards.
sidebar:
  order: 80
locale: vi
source_locale: en
source_revision: 110f6ba
translation_status: fallback
translated_at: '2026-07-28'
---

**Codex Handbook** is a community-maintained documentation site. We welcome fixes, new pages, reproducible cases, and prompt examples in [examples/](/examples/README.md).

## What this page covers

- Contribution types and entry points
- Writing and verification standards
- PR and release expectations

## What helps most

If you notice:

- Sections you cannot follow as a newcomer
- Nav entries with thin content
- Outdated commands, screenshots, or explanations

—that is already a high-value contribution signal.

You do not need to be the domain expert first. Many improvements come from first-time readers saying “this assumes I already know X.”

## Contribution types

| Type | Description | Guide |
|---|---|---|
| Fix / small edit | Typos, links, one outdated sentence | Direct PR |
| New guide page | Chapter body under `src/content/docs/` | [Write a guide](/guide/contributing/write-a-guide/) |
| Case study | `src/content/docs/cases/` | [Case template](/cases/use-cases/case-study-template/) |
| Prompt example | `examples/prompts/` | [Add a prompt example](/guide/contributing/add-a-prompt-example/) |
| Technical verification | Mark `verified`, update dates | [Verify technical content](/guide/contributing/verify-technical-content/) |
| Translation | `en/`, `zh-tw/`, etc. | Roadmap M6; stabilize source first |

## Common misconceptions

### Contributing ≠ writing a whole chapter

Valuable contributions include:

- A paragraph that helps beginners
- Fixing misleading wording
- A missing nav entry
- Downgrading or dating outdated commands

### “Not an expert” ≠ useless feedback

If your audience includes beginners, where you get stuck is signal—if you make it specific and improve the text, not only “confusing.”

## Core principles

1. **Simplified Chinese `root` is source** (unless stated otherwise)
2. **Do not copy** external tutorials verbatim; see [External source integration plan](/docs/planning/external-source-integration.md)
3. **Volatile facts** need `Last verified` dates
4. **Every sidebar slug** needs a markdown file or `npm run build` fails
5. New pages must update `astro.config.mjs` sidebar

## First contribution path

1. Pick something you actually got stuck on
2. Decide: copy fix, new page, example, or verify outdated info
3. Change one focused slice—but explain reader context
4. Run build so site structure stays valid

Smaller scoped PRs review faster than whole-chapter rewrites.

## Local development

```bash
source ~/.nvm/nvm.sh && nvm use 22
pnpm install
pnpm dev
```

Before merge:

```bash
npm run build
```

## Code of conduct

- Respect others’ work; discuss ideas not people
- No real keys or customer data
- Large refactors: issue or RFC first

A first contribution does not need to be huge—clarify one real beginner pain point and pass build.

## Related links

- Repository: <https://github.com/hopecyb/CodexHandbook>
- [Chapter outline](/docs/planning/chapter-outline.md) (planning)

---

**Status:** verified  
**Verification basis:** Cross-checked repo directory structure, sidebar maintenance, page status system, and contribution flow; handbook maintenance rules—not volatile Codex UI behavior.  
**Last verified:** 2026-07-26
