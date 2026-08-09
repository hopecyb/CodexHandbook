---
title: Plugins overview
description: Package Skills, MCP, and app connectors for unified team distribution and management.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

A Plugin is like an installer package: it bundles pre-configured extensions for others to install.

**Plugin** packages Skills, MCP servers, app integrations, and more into **installable, updatable, governable** units—especially "one person configures, whole team reuses."

## Core difference

| Standalone | Via Plugin |
|---|---|
| Manually copy Skill directories | One-click install/upgrade |
| Each person configures MCP JSON | Preconfigured servers and permission notes |
| Docs scattered | Publisher provides manifest and release notes |

Plugin is the **distribution and composition layer**. Capabilities still live in Skill, MCP, connectors—see [capability map](/skills/capability-map/).

## Plugin vs Skill vs MCP

Short version:

- **Skill**: Tell Codex "follow these steps"
- **MCP**: Tell Codex "these external tools are callable"
- **Plugin**: Package the above for install and governance

Much confusion comes from treating all three as the same thing.

## Typical composition

```text
Plugin package
├── Skills (optional)
├── MCP server definitions (optional)
├── App connectors / OAuth flows (optional)
└── Metadata: version, permission declaration, changelog
```

## When to use Plugin

| Use Plugin | Skip Plugin |
|---|---|
| Team-wide Figma/Linear/GitHub enhancement pack | Personal one-off script |
| Need version management and rollback | Single `SKILL.md` is enough |
| Enterprise allowlist extensions only | Experimental prototype |

## When to care about Plugin

- Personal learning, writing a few Skills: can wait
- Shipping one extension pack to the team: time to care about Plugin

Plugin mainly solves **distribution and governance**—not a day-one Codex requirement.

## Bundles that fit Plugin

Plugin is most useful when several capabilities need to ship together.

| Team bundle | May include |
|---|---|
| PR review pack | Review Skill, read-only GitHub MCP, review template, risk Hook |
| Docs maintenance pack | Documentation Skill, glossary, link-check Hook, release-note template |
| Design collaboration pack | Design connector, screenshot/annotation Skill, permission note, examples |
| Security inspection pack | Read-only review Skill, secret-scan Hook, audit log config |

If it is one personal script, keep it simple. If the team repeatedly installs, upgrades, and revokes a group of capabilities, package it as a Plugin.

## Before packaging

- Is this a stable team workflow or a temporary experiment?
- Which parts are Skill, MCP, and Hook?
- Can the permission statement be understood in one minute?
- Can failed upgrades or bad installs roll back?
- How are authorizations revoked when people leave or projects end?

## Install and manage (conceptual)

1. Choose Plugin from **official marketplace or team-approved list**
2. Read permission notes: which repos, which SaaS
3. After install, restart session; verify tools and Skill list
4. Update regularly; try major versions in staging repo first

Exact buttons and commands follow current desktop App / CLI UI.

## Common misconceptions

### 1. Installing a Plugin does not mean automatic safety

Plugin only distributes capabilities more conveniently—not inherently safe permissions. Still check:

- What it can access
- Whether it acts on your behalf externally
- Whether the source is trustworthy

### 2. Not everything installable is worth keeping

Extensions the team can maintain, reclaim, and audit suit long-term enablement.

## Security and privacy

- Install only trusted sources; review OAuth scopes Plugin requests
- Separate "read design files" from "send messages on my behalf"
- Revoke connector auth on offboarding or role change
- Layer with [permissions and approvals](/guide/foundations/permissions-and-approvals/)—do not assume Plugin brings its own security

## Compared to other Agent ecosystems

"Plugin" means different things across products. Compare: **what is bundled, permission model, open source auditable or not**—see [feature comparison](/guide/reference/feature-comparison/).

## Common mistakes

- One Plugin per tiny Skill—maintenance explodes
- Never update after install—miss security fixes
- Experimental Plugin enabled in production repo

## References
- OpenAI Codex Plugins documentation
---

**Status:** outdated  
**Applicable products:** App / CLI  
**Verification basis:** OpenAI Help confirms Plugin bundles Skills, Apps, and app templates, but this page still describes overly specific install, upgrade, and governance flows beyond current stable public basis.  
**Last verified:** 2026-07-26
