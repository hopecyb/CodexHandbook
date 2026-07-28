---
title: Plugins
description: Team distribution of extensions—Plugins are a packaging layer, not a new capability type.
locale: vi
source_locale: en
source_revision: f7ad9b9
translation_status: fallback
translated_at: '2026-07-28'
---

Plugins mainly solve how to ship and manage a set of extensions for others to install.

They focus on:

- Packaging
- Distribution
- Upgrades
- Permission governance

They are not a separate new capability type.

## When this section applies

Mainly two situations:

- You are about to ship one extension pack to the whole team
- You want to judge whether a plugin is worth installing

For personal learning, one overview page is often enough.

## Entry in this section

- [Plugins overview](/skills/plugins/plugins-overview/): How Plugin relates to Skill and MCP, and why it is a distribution layer

## Common misconceptions

### 1. Installing a Plugin is automatically safe

A Plugin only makes capabilities easier to distribute—not implicitly trusted or low-permission.

### 2. More features means worth installing

Better to check first:

- Is the source trustworthy?
- How wide are permissions?
- Can the team upgrade, roll back, and audit?

A Plugin is a distribution pack for extensions—not a replacement for Skill or MCP.

---

**Status:** outdated  
**Applicable products:** App / CLI  
**Verification basis:** Plugin catalog, install policy, and surface support are still evolving; this section states those details too fixedly—marked `outdated` pending rewrite for current Plugin catalog.  
**Last verified:** 2026-07-26
