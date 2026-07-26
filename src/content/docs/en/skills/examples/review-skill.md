---
title: 'Example: Review Skill'
description: pr-review-based Skill example for team reuse or adaptation.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

# Example: Review Skill

This example matches `pr-review` in [Create your first Skill](/skills/create-your-first-skill/)—adjust for your team.

## SKILL.md

```md
---
name: pr-review
description: Review git diff; list blocking issues, test gaps, and style suggestions. Use when the user mentions review, audit, or pre-merge checks. Not for writing new features.
---

# PR review

## Input
- Default compare branch: main (or default branch if main does not exist)

## Process
1. List changed files and change type (feature/fix/refactor/docs)
2. For each logic change: missing tests? API break?
3. Check for secrets, debug logs, oversized unrelated diff
4. Output: 🔴 blocking / 🟡 suggestion / 🟢 pass

## Do not
- Do not git push
- Do not change public API without discussion
```

## Try it

```text
$pr-review Please review my current uncommitted changes
```
---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Verification basis:** Reviewing diffs with structured conclusions remains a typical Codex use case; this page provides an illustrative `SKILL.md` skeleton, not a volatile UI dependency.  
**Last verified:** 2026-07-26
