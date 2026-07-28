---
title: Personal Preferences
description: User-level configuration, default models, and UI habits—without polluting team conventions in the repo.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

**Personal preferences** are settings on your machine that apply across projects: default model, theme, approval habits, personal Skill paths, and so on. Unlike `AGENTS.md` in the repo, personal preferences should **not** assume teammates are the same.

## Contents

- What belongs in the personal layer versus the project layer
- How to pair with [Profiles](/guide/customization/configuration/profiles/) to switch scenarios
- How to avoid leaking relaxed personal settings into team repos

Priority overview: [Customization](/guide/customization/) · [Scope and Precedence](/guide/customization/agents-md/scope-and-precedence/)

## Why Separate This Layer

Many people mix these at first:

- How I personally like to work
- What this repo requires
- What the company or team mandates

If you do not separate them, you later get:

- Your local setup feels smooth, but teammates cannot reproduce it
- You think rules are active when only your machine is compensating
- You bring relaxed settings into a more serious project

## Team Content That Should Not Live Only in the Personal Layer

- Code style, test commands, directory structure → **project `AGENTS.md`**
- Mandatory sandbox policy → **project configuration or organization management**
- Compliance requirements for customer repos → **documentation + CI**, not personal memory alone

## Recommended Practices

1. **Separate work/personal Profiles**: use a strict Profile for customer projects; practice projects can be relaxed
2. **Read project rules when entering a new repo**, then decide whether to temporarily override personal defaults
3. **Clean up regularly**: personal MCP and Skills; remove unused third-party sources
4. When changing machines or reinstalling, export a configuration checklist (without secret values)

## Common Misconceptions

### 1. What I usually like is not always a good global default

If your default habits are relaxed, they may be inappropriate in customer or team projects.

### 2. Personal preferences and project rules are basically the same?

They differ a lot.  
Personal preferences are “I am used to working this way”; project rules are “everyone in this repo should try to work this way.”

### 3. “My machine is fine” is not enough to judge whether the setup is reasonable

Better criteria:

- Does not pollute the repo
- Does not depend on defaults only you know
- Does not cause harm when switching to a strict project

## How to Decide Whether Something Belongs in the Personal Layer

When unsure whether a setting belongs in the personal layer, ask:

1. Is this a habit only I care about?
2. Will it affect others reproducing results?
3. Is it appropriate to carry into every project?

If questions 2 or 3 lean dangerous, do not set it as a global default lightly.

Personal preferences exist to make your own workflow feel natural; they are not a backstop for team rules, and you should not dump relaxed settings into every project.

## And the Memory Feature

If the product offers “memory” or persistent preferences, see [Memories and Persistent Context](/guide/customization/memories-and-persistent-context/). Memory suits stable habits; **project-specific constraints should still come from repo files**.

## Common Mistakes

- Hard-coding a company API key in personal configuration
- Globally auto-approving shell on your machine while handling customer code
- Teammates clone the repo and complain “rules do not work”—because rules were never committed

## Acceptance Checklist

- [ ] You can give one example each for personal vs project vs organization layers
- [ ] You have configured at least one strict Profile for a customer project
- [ ] No personal secrets in the repo

---

**Status:** verified  
**Applicable products:** App / CLI / IDE  
**Verification basis:** Cross-checked against this handbook’s currently verified project instructions, Profiles, settings division of labor, and security boundary chapters; this page only states the stable layering principle that personal habits should not pollute team repo rules and does not treat any one client’s current settings UI as a fixed contract.  
**Last verified:** 2026-07-26
