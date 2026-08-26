---
title: MCP
description: Trang giải thích nối công cụ và nguồn dữ liệu ngoài — giúp quyết khi nào cần MCP.
locale: vi
source_locale: zh-CN
source_revision: ff68431
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

MCP (Model Context Protocol) answers “how can an Agent call tools and data outside the repository?” It does not define a workflow.

## Who it is for

- Individual developers who want Codex to query documentation, designs, tickets, or internal tools.
- Teams that need consistent external-tool configuration, OAuth, and least privilege.
- Maintainers diagnosing “the server is configured, but its tools are unavailable or calls fail.”

If the task only reads and writes the current repository, start with built-in file and terminal capabilities. Add MCP only when third-party context or action is required.

## Reading order

1. [MCP overview](/vi/skills/mcp/mcp-overview/): separate the responsibilities of MCP, Skills, and Plugins
2. [Connect an MCP server](/vi/skills/mcp/connect-an-mcp-server/): connect the first server with the CLI or `config.toml`
3. [Debug MCP](/vi/skills/mcp/debugging-mcp/): diagnose configuration, startup, authentication, and tool layers

## Current support boundaries

- The ChatGPT desktop App, Codex CLI, and IDE integration share MCP configuration when they use the same Codex host.
- Local Codex clients support STDIO and Streamable HTTP servers.
- ChatGPT Web does not read local `~/.codex/config.toml`; it uses remote MCP tools supplied by installed Plugins.

## Three rules

1. MCP exposes tools; it does not define a reliable process. Put durable workflows in a Skill or `AGENTS.md`.
2. Server capability depends on its exposed tools and the scope of the underlying credential.
3. Begin with read-only tools, a test tenant, and a small tool set. Do not experiment with a production administrator token.

## Official sources

- [OpenAI: Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)
- [Model Context Protocol specification](https://modelcontextprotocol.io/)

---

**Trạng thái:** verified

**Áp dụng cho:** ChatGPT desktop App / Codex CLI / IDE; ChatGPT Web uses remote MCP tools through Plugins

**Verification scope:** Client support, shared configuration, transport types, and CLI commands

**Kiểm chứng gần nhất:** 2026-08-25
