---
title: MCP overview
description: Model Context Protocol—let Codex connect safely to external tools and data sources.
locale: de
source_locale: en
source_revision: c63cc21
translation_status: fallback
translated_at: '2026-07-28'
---


MCP is a standard way for Codex to connect to external tools and data sources.

If you want Codex to query Jira, read a knowledge base, access internal APIs, or operate a controlled tool, you need a mechanism for **how to connect, what can be called, and how permissions are managed**. **MCP (Model Context Protocol)** addresses that.

## Contents

- What problem MCP solves: Codex cannot reach real systems alone
- Division of labor with Skill and Plugin
- Why MCP must be part of security governance

## What it is not

MCP is not:

- Pasting account passwords directly to Codex
- Letting the model connect however it wants
- Making any third-party service implicitly trusted

It is a normalized wiring path so connecting external systems is more controllable and auditable.

## Core concepts

```text
Codex  ←→  MCP client  ←→  MCP server  ←→  External system
```

| Component | Role |
|---|---|
| MCP server | Exposes a set of tools (e.g. `search_issues`, `get_user`) |
| Configuration | Tells Codex how to start/connect to the server |
| Tool calls | Model picks tools in a task; you often approve |

MCP does **not** provide business logic. Your server implements read/write rules; Codex picks which tool to use in the task.

## Where MCP sits

Skill is more like an "operator manual"; MCP handles "tool interfaces."

- Skill explains steps
- MCP hands certain external tools to Codex

They often appear together:  
Skill defines the flow; a step in the flow calls an MCP tool.

## Relationship to Skill and Plugin

| | MCP | Skill | Plugin |
|---|---|---|---|
| Nature | Tool protocol | Workflow instructions | Distribution package |
| Typical content | API wrappers | Steps and standards | Skill + MCP + app connectors |
| Maintainer | You or third-party server | You or team | Publisher |

Common combo: **Skill defines flow**, a step **calls MCP tools** to fetch ticket lists.

## When to consider MCP

If the task only needs read/write inside the current repo, you usually do not need MCP.  
If it must touch real systems **outside** the repo, start evaluating MCP, APIs, or other controlled integrations.

## Use cases

| Good for MCP | Poor for MCP |
|---|---|
| Query Linear/Jira tickets | Pure in-repo code changes |
| Read-only docs/knowledge base | Simple `curl` with no reuse need |
| Controlled internal tools | Unaudited high-privilege production DB writes |

## Common misconceptions

### 1. MCP means Codex can do anything

It can only do what the MCP server exposes and what those tools allow.

### 2. MCP is technical only, not security

Once MCP touches real systems, it is also:

- Permissions
- Data exposure
- Audit
- Supply chain

### 3. With MCP, no Skill or docs needed

Still needed. MCP solves "can call tools," not "which flow to follow or when not to call."

## Security boundaries

- **Least privilege**: read-only, scoped projects, scoped IPs
- **Credentials**: OAuth or short-lived tokens—not in prompt, not in Git
- **Human approval**: writes, bulk deletes, outbound messages should be reviewed
- **Supply chain**: connect only trusted servers; review third-party MCP source

Enterprise: roadmap `11-team-enterprise/security/plugin-and-mcp-risk`.

## Onboarding order

1. Read official MCP docs; confirm current client config format
2. Start with a **read-only** official or community example server
3. Verify a single tool call in a test project
4. Connect real systems with a runbook

Steps: [Connect an MCP server](/skills/mcp/connect-an-mcp-server/)

## Common mistakes

- Over-permissive MCP server "for convenience"
- Treating MCP as Skill replacement (flow still belongs in Skill or AGENTS.md)
- MCP config changes not in code review

## References

- [Model Context Protocol](https://modelcontextprotocol.io/)
- OpenAI Codex MCP documentation
- KimYx0207 CX-05; stormzhang `20-mcp.md`

---

**Status:** outdated  
**Applicable products:** App / CLI / IDE  
**Verification basis:** Conceptual content mixed with judgments about "client config format" and "approval behavior"; as of 2026-07-26 public official basis is insufficient for full verification.  
**Last verified:** 2026-07-26
