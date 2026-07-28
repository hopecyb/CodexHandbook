---
title: Understand a codebase
description: Read-only exploration of unfamiliar repos to build an actionable mental map.
locale: pt
source_locale: en
source_revision: fdd9043
translation_status: fallback
translated_at: '2026-07-28'
---

# Understand a codebase

## Meta information

| Field | Content |
|---|---|
| Audience | Developers |
| Client | CLI / IDE |
| Estimated time | 30–60 minutes |

## 1. Goal and background

**Goal:** Before changing code, understand module boundaries, entry points, and risk areas.

**Success criteria:** You can explain the main path from "request to response" or "command to output" to someone else.

## 2. Recommended prompt

```text
Do not change code yet. Read @src/ and @README; explain in 8 bullets or fewer:
1. Project purpose and tech stack
2. Main directory responsibilities
3. Start/test entry points
4. 3 files most relevant to [my goal]
5. 3 questions for me to confirm
```

## 3. Verification

- Spot-check against actual `package.json` / entry files
- Write conclusions into an issue or `AGENTS.md` summary

## 4. Related

- [Understand template](/prompts/templates/understand/)
- [Explore—plan—execute—verify](/cases/workflows/explore-plan-execute-verify/)

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** OpenAI Developers' current Codex use cases still include "Understand large codebases," focusing on tracing main paths, identifying key modules, and quickly locating relevant files; this page's read-only exploration example aligns with the current official positioning.
