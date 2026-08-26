---
title: Gỡ lỗi kết nối MCP
description: Các bước điều tra hệ thống khi MCP server không khởi động, công cụ hết thời gian hoặc kết quả bất thường.
locale: vi
source_locale: zh-CN
source_revision: 829c1e9
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

“MCP tool does not work” hides several failure layers. Identify the layer first, then change one variable.

## Preserve four pieces of evidence

```bash
codex mcp list
codex mcp --help
node --version    # only for a Node.js STDIO server
python3 --version # only for a Python STDIO server
```

Also record server name, STDIO versus Streamable HTTP, exact error, and whether it occurred in App, CLI, or IDE. Never record the complete token.

## Four-layer triage

| Layer | Symptom | First check |
|---|---|---|
| Configuration | Server absent from list | File path, TOML syntax, server name, `enabled` |
| Startup/connection | Initialization timeout | STDIO command and PATH, or HTTP URL, TLS, proxy |
| Authentication | 401/403 or sign-in request | OAuth state, token environment variable, scope |
| Tool | Server online but call fails | Tool name, arguments, allowlist, timeout |

## 1. Confirm configuration loaded

- User file: `~/.codex/config.toml`.
- Project file: `.codex/config.toml`, loaded only for a trusted project.
- App, CLI, and IDE share configuration on one Codex host; do not maintain drifting copies.
- Use `codex mcp list` or `/mcp`; file existence is not success evidence.

## 2. STDIO startup failure

Check that `command` is on PATH, runtime version is supported, `cwd` exists, and dependency provenance is trusted.

Running the command directly proves only that it starts. A protocol server may wait indefinitely for input; that is not a complete tool-call test.

Raise `startup_timeout_sec` only for a genuinely slow initialization. The default is 10 seconds; a huge value can hide a wrong command.

## 3. Streamable HTTP connection failure

Check in order:

1. URL and TLS certificate.
2. Corporate proxy or VPN.
3. Existence of the environment variable named by `bearer_token_env_var`.
4. Whether OAuth needs `codex mcp login <server-name>` again.
5. Whether server logs received initialization.

Do not temporarily put the token in static `http_headers`; it can leak into configuration and screenshots.

## 4. Server online, tool unavailable

| Symptom | Check |
|---|---|
| Tools absent | `enabled_tools` / `disabled_tools`, server tool list |
| Tool not found | Server version, renamed tool, stale session list |
| Argument validation | Tool schema rather than old prompt fields |
| Timeout | Smaller query, then `tool_timeout_sec`; default 60 seconds |
| Empty result | Verify source-system visibility and filters with the same identity |

## Minimal reproduction prompt

```text
Inspect only MCP server <server-name>:
1. Report visible tool names.
2. Call <readonly-tool> with <minimal-arguments>.
3. Preserve the error type and server message, but redact credentials.
4. Do not call another server or write.
```

## Acceptance after repair

- [ ] `codex mcp list` shows expected state.
- [ ] One read-only tool succeeds with minimal arguments.
- [ ] The root cause names a layer rather than “restart fixed it.”
- [ ] Temporary tokens, debug logs, and broad permissions are removed.
- [ ] Team configuration and repair notes are updated.

## Official source

- [OpenAI: Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)

---

**Trạng thái:** verified

**Áp dụng cho:** ChatGPT desktop App / Codex CLI / IDE

**Kiểm chứng gần nhất:** 2026-08-25
