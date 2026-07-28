---
title: MCP
description: Connect external tools and data sources—when MCP is actually needed.
locale: pt
source_locale: en
source_revision: 73c3ee1
translation_status: fallback
translated_at: '2026-07-28'
---

`MCP` is a standard way for Codex to connect to external tools and data sources.

If Skill is more about "steps to do the work," MCP handles "bringing external tools in."

## What this section covers

- When you really need MCP
- How to connect external systems without opening permissions too wide
- What to check first when connection or calls fail

## Recommended order

1. [MCP overview](/skills/mcp/mcp-overview/): Separate MCP from Skill and Plugin first
2. [Connect an MCP server](/skills/mcp/connect-an-mcp-server/): Wire your first server by configuration
3. [Debugging MCP](/skills/mcp/debugging-mcp/): When connection fails, tools missing, or permissions wrong

## Common misconceptions

### 1. MCP makes Codex "all-powerful"

What it can do depends entirely on which tools the MCP server exposes and what permissions those tools grant.

### 2. MCP is only a technical integration problem

Once it touches real systems, it immediately becomes:

- A permissions problem
- A data exposure problem
- An audit problem

So this section covers not only "how to connect" but "how not to connect badly."

MCP is worth it when the task must touch real systems outside the repo.

---

**Status:** outdated  
**Applicable products:** App / CLI / IDE  
**Verification basis:** This section covers how Codex currently connects MCP, config locations, and permission pairing; official public material has limited client detail—needs rewrite for current products.  
**Last verified:** 2026-07-26
