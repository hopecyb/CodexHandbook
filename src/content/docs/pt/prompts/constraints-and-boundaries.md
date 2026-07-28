---
title: Constraints and boundaries
description: Limit what can change, style rules, and forbidden actions.
locale: pt
source_locale: en
source_revision: d18b013
translation_status: fallback
translated_at: '2026-07-28'
---

Many tasks fail not because the goal was missing entirely, but because **boundaries were unclear**.

You say "help me fix this page" and Codex might read it as:

- copy only
- copy plus styles
- components too
- add dependencies

When you only wanted "this paragraph of copy, don't touch structure."

Constraints answer: where does this stop, and what is absolutely off limits?

## What this covers

It mainly helps avoid:

- changing more than asked
- unauthorized actions
- edits at layers you didn't intend
- "done" outcomes with too much collateral change

## Common constraints

Constraints answer: "what must never happen?"

- only listed files/directories
- don't change API contracts / don't change the database
- don't add new dependencies
- don't make network requests
- keep existing formatter configuration

## Goal vs. constraints

- **Goal:** what you want it to achieve
- **Constraints:** lines it must not cross while doing it

Example:

```text
Goal: Make the homepage hero copy clearer
Constraints: Don't change layout, don't add dependencies, don't change CTA behavior
```

Without constraints, "make it clearer" often becomes a much larger redesign.

## Common misconceptions

### 1. Constraints make results worse

Clear constraints often produce results closer to what you actually want—they cut detours.

### 2. "Don't change too much" is enough

Too vague.

More useful:

- only `src/content/docs/...`
- don't change components
- don't change APIs
- don't install dependencies

### 3. Constraints only matter for high-risk tasks

Small tasks need them too—one vague sentence easily expands the scope.

## A usable skeleton

```text
Constraints:
- Only change 【directory/file】
- Don't change 【components / API / database / config】
- Don't add dependencies
- Ask when information is insufficient; don't guess
```

## When to write constraints more finely

Be explicit when:

- legacy codebase with heavy baggage
- you want a local patch only
- hard team rules on style or architecture
- permissions, network, or dependency installs are involved

Goal tells Codex what to do; constraints tell it where to stop.

Write permission boundaries with constraints to reduce "while I'm here" overreach. See also [Define done](/prompts/define-done/) and [Permissions and sandbox](/guide/permissions-and-sandbox/).

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** This page explains constraint and boundary writing only; in-site links were rechecked, and the body does not depend on volatile facts such as product versions, pricing, or UI details.
