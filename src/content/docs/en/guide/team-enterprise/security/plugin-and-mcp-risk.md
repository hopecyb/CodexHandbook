---
title: Plugin and MCP Risk
description: What extensions can access, how teams approve and monitor—unified risk view for Skills, Plugins, and MCP.
locale: en
source_locale: zh-CN
source_revision: 7e3cb49
translation_status: reviewed
translated_at: 2026-07-26
reviewed_at: 2026-08-26
sidebar:
  order: 20
---

**Plugins** and **MCP servers** connect Codex to external systems: tickets, databases, internal APIs. More capability means a larger [threat model](/en/guide/team-enterprise/security/threat-model/) surface for exfiltration and overreach. Read with [MCP overview](/en/skills/mcp/mcp-overview/) and [Plugins overview](/en/skills/plugins/plugins-overview/).

You do not need perfect definitions on day one. Core point: connecting Codex externally increases capability and risk.

Whether it is called Plugin or MCP, ask:

- What can it read
- What can it write
- Who approves
- How incidents are traced

## What this page covers

- Extension risk categories
- Approval lists and version pinning
- Isolation during debug and incidents

## Risk categories

| Type | Example | Control |
|---|---|---|
| Data read | MCP reads customer DB | Read-only account, row-level permissions |
| Data write | Auto-close tickets, change config | Human approval, dual confirmation |
| Network | Arbitrary outbound | Egress allowlist |
| Credentials | OAuth token on disk | Secret management, short-lived tokens |
| Supply chain | Third-party server update tampering | Pin version, hash lock |

## Team approval flow (recommended)

```text
Request (purpose, data class, permissions) → security/architecture review
    → enter “approved list” repo or internal directory
    → pin version + owner
    → quarterly or major-upgrade re-review
```

Experimental personal MCP **should not** share production repo tokens.

## Minimum practices

1. **Deny by default** unlisted remote MCP installs
2. **Local MCP** may still read the whole disk—dedicated OS user or container
3. **Logs**: tool name and parameter summary (redacted)—see [Hook audit](/en/skills/hooks/hooks-examples/)
4. **Skill vs MCP**: Skill describes flow, MCP performs external calls—permissions union; apply strictest policy

## Common mistakes

- “Official marketplace” = “security reviewed”
- Dev and prod share one MCP OAuth app
- `DEBUG=*` in debug dumps tokens into CI logs

## Common misconceptions

### 1. Plugin vs MCP unclear—does it matter early?

Not much at first.

Both connect Codex to external systems—permissions and risk apply either way.

### 2. Why “read-only first”?

Read-only usually means:

- Easier pilot
- Easier to prove value
- Lower blast radius on mistakes

### 3. Install and forget?

Even convenient features need:

- What data it accesses
- Whether it writes back
- How credentials are managed

For external extensions: permissions and boundaries before feature strength.

## Acceptance checklist

- [ ] Written approval list or equivalent process
- [ ] Each production MCP has owner and data classification
- [ ] Consistent with [Skill security](/en/skills/security/) policy

## Reference sources
- [Debugging MCP](/en/skills/mcp/debugging-mcp/)
---

**Status:** verified  
**Products:** CLI / App / Cloud  
**Verification basis:** OpenAI Help Center plugin docs still emphasize app/plugin capability constrained by role access, action control, confirmation, domain/source boundaries, and underlying source permissions; mapped here to unified Plugin/MCP risk view with read-only first, version pinning, owners, and approval lists.  
**Last verified:** 2026-07-26
