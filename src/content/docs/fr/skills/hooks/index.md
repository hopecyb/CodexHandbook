---
title: Hooks
description: Ajouter contrôles, journaux et blocages à des nœuds d'exécution fixes — quand bloquer, quand seulement enregistrer.
locale: fr
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

1. [Hooks overview](/fr/skills/hooks/hooks-overview/): configuration layers, trust, and runtime behavior
2. [Hook event types](/fr/skills/hooks/hook-event-types/): choose events and matchers by lifecycle position
3. [Hook examples](/fr/skills/hooks/hooks-examples/): run a unit-tested `PreToolUse` guard

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

**Status:** verified

**Applies to:** Environments using a local Codex host; trust review and `/hooks` management follow the Codex CLI documentation

**Last verified:** 2026-08-25
