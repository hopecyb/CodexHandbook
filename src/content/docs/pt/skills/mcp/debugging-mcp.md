---
title: Debugging MCP connections
description: Systematic troubleshooting when MCP servers fail to start, tools time out, or results look wrong.
locale: pt
source_locale: en
source_revision: f45a7ae
translation_status: fallback
translated_at: '2026-07-28'
---

MCP brings external systems into Codex. Failures often fall into three buckets: **process won't start**, **auth wrong**, **tool logic or timeout**. This page gives a check order so you are not guessing at config.

## Contents

- Minimal reproduction for MCP issues
- Log and configuration checklist
- When to suspect the server implementation vs Codex

Related: [MCP overview](/skills/mcp/mcp-overview/) · [Connect an MCP server](/skills/mcp/connect-an-mcp-server/)

## Triage flow

```text
1. Can the server start alone in a terminal?
2. Is config JSON/TOML syntax and path correct?
3. Are environment variables visible inside the MCP process?
4. Was the Codex session restarted to load new config?
5. Does a single tool call timeout or have bad parameters?
```

## Startup failures

| Check | Notes |
|---|---|
| Command path | Is `npx`, `uvx`, absolute path on PATH? |
| Dependency versions | Node/Python versions meet MCP server requirements? |
| Manual run | Run command + args from config in shell |
| Transport | stdio vs HTTP/SSE matches docs? |

## Auth failures

- API key injected via environment variable (not in repo)
- OAuth MCP may need re-authorization when expired
- Corporate proxy blocking MCP outbound

Environment variable index: [environment variables](/guide/reference/environment-variables/)

## Abnormal tool calls

| Symptom | Possible cause |
|---|---|
| Tool not found | Server version vs client schema mismatch |
| Timeout | Slow external API; increase timeout or optimize query |
| Empty result | Wrong parameter names; check MCP server logs |
| Garbled text | Non–UTF-8 encoding |

In prompt, ask Agent to **print tool return structure** (redacted) for debugging.

## Safe debugging habits

- Use **test tenant** API keys, not production
- Do not paste full tokens into chat logs
- If MCP is suspicious, disconnect immediately and rotate keys

Error index: [error reference](/guide/reference/error-reference/)

## Common mistakes

- Config changed but Codex session not restarted
- Inconsistent MCP config in IDE vs CLI
- MCP server log level always debug; screenshots submitted with secrets

## Acceptance checklist

- [ ] Can start MCP server independently in terminal
- [ ] At least one read-only tool call succeeded
- [ ] Team standard MCP config template documented

## References

- Model Context Protocol spec and debugging guide
- KimYx0207 CX-07
- stormzhang `21-mcp.md`

---

**Status:** outdated  
**Applicable products:** CLI / IDE / App  
**Verification basis:** Troubleshooting depends on how current Codex clients load, display, and invoke MCP tools—high change risk; needs rewrite against current docs.  
**Last verified:** 2026-07-26
