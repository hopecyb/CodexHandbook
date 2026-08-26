---
title: Hooks
description: Thêm kiểm tra, nhật ký và chặn tại điểm thực thi cố định — khi nào nên chặn, khi nào nên ghi.
locale: vi
source_locale: zh-CN
source_revision: c768708
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

A Hook is an automatic handler in the Codex lifecycle. It can run a script or MCP tool when a session starts, a prompt is submitted, before or after a tool call, around context compaction, when a subagent stops, or when the main thread ends.

## What this section solves

- Choose a real event rather than inventing a name such as `pre_tool`.
- Separate blocking before execution from feedback after execution.
- Start with a testable, low-risk Hook.
- Review the trust boundary of project Hooks and Hooks bundled in Plugins.

## Reading order

1. [Hooks overview](/vi/skills/hooks/hooks-overview/): configuration layers, trust, and runtime behavior
2. [Hook event types](/vi/skills/hooks/hook-event-types/): choose events and matchers by lifecycle position
3. [Hook examples](/vi/skills/hooks/hooks-examples/): run a unit-tested `PreToolUse` guard

## Fastest decision

| Goal | Consider first |
|---|---|
| Deny or rewrite tool input before execution | `PreToolUse` |
| Decide when Codex is about to request elevated permission | `PermissionRequest` |
| Log or add feedback after a tool finishes | `PostToolUse` |
| Check a submitted prompt or add context | `UserPromptSubmit` |
| Require the main thread or a subagent to continue another turn | `Stop` / `SubagentStop` |

Hooks do not replace sandboxing, approvals, command rules, or service-side permissions. They are an additional guardrail, and some managed-tool paths do not pass through local tool Hooks.

## Official source

- [OpenAI: Hooks](https://learn.chatgpt.com/docs/hooks)

---

**Trạng thái:** verified

**Áp dụng cho:** Environments using a local Codex host; trust review and `/hooks` management follow the Codex CLI documentation

**Kiểm chứng gần nhất:** 2026-08-25
