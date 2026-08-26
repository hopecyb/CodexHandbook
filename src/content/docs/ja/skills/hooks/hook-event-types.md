---
title: Hook イベントタイプ
description: Codex 実行チェーンにおける Hook トリガーポイント。適切な段階で検証、ログ、ブロックを行う。
locale: ja
source_locale: zh-CN
source_revision: 7da5c40
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

The first question when choosing a Hook is not “how do I write the script?” It is “must this happen before or after the side effect?” A script attached to the wrong event may only report damage after the fact.

![Codex Hook lifecycle and key events](/diagrams/hook-lifecycle-events-ja.svg)

## Current events

| Event | When it runs | Matcher filters | Common use |
|---|---|---|---|
| `SessionStart` | Session start or resume | `startup`, `resume`, `clear`, `compact` | Environment notes, restored context |
| `SubagentStart` | Subagent starts | Subagent type | Add subagent constraints |
| `UserPromptSubmit` | User submits a prompt | Unsupported; configuration is ignored | Secret scan, development context |
| `PreToolUse` | Before a supported local tool runs | Tool name | Deny or rewrite the call |
| `PermissionRequest` | Codex is about to request approval | Tool name | Allow, deny, or defer to normal approval |
| `PostToolUse` | After a supported local tool returns | Tool name | Record results, feed later reasoning |
| `PreCompact` | Before context compaction | `manual` / `auto` | Save state before compaction |
| `PostCompact` | After context compaction | `manual` / `auto` | Restore required context |
| `SubagentStop` | A subagent is about to stop | Subagent type | Require another check |
| `Stop` | Main task turn is about to stop | Unsupported; configuration is ignored | Require more main-thread verification |
| `SessionEnd` | Main thread ends | Currently `other` | Fast closing log; does not run for subagents |

## Tool matchers

Common values include:

```text
Bash
^apply_patch$
Edit|Write
mcp__filesystem__read_file
mcp__filesystem__.*
```

Shell and unified command execution match `Bash`. `apply_patch` can also match the aliases `Edit` or `Write`. MCP and other local function tools match their actual tool names.

## Three events commonly confused

### PreToolUse

Input contains `tool_name`, `tool_use_id`, and tool-specific `tool_input`. It can return:

- `permissionDecision: "deny"`: stop a supported call.
- `permissionDecision: "allow"` plus `updatedInput`: rewrite supported input.
- `additionalContext`: add model context without blocking.

Plain stdout is ignored; output the documented JSON. Exit code `2` with stderr can also block and provide a reason.

### PermissionRequest

This runs only when Codex was already going to request approval for shell escalation, managed networking, or a similar action. It can allow, deny, or leave the decision to the normal approval UI. It does not replace general `PreToolUse` policy.

### PostToolUse

The tool has already run, and the event fires even when Bash exits non-zero. Returning block or exiting `2` can replace feedback for the model, but cannot undo a command, file write, or external action.

## Stop is not an undo button

`decision: "block"` for `Stop` automatically creates a continuation prompt from the reason, asking Codex to run another turn. It does not roll back completed side effects. Check `stop_hook_active` to prevent an infinite loop.

## Event-selection exercise

| Need | Choose | Why |
|---|---|---|
| Stop a suspected token from being written | `PreToolUse` matching `apply_patch|Edit|Write` | Must act before the write |
| Measure shell failure rate | `PostToolUse` matching `Bash` | Needs the result |
| Save key decisions before automatic compaction | `PreCompact` | Runs before compaction |
| Do not close until tests have run | `Stop` | Continue the current task |
| Send a 30-second network request at shutdown | Not `SessionEnd` | Maximum three seconds; closing events should stay short |

## Official source

- [OpenAI: Hook events and matchers](https://learn.chatgpt.com/docs/hooks)

---

**Status:** verified

**Applies to:** Environments using a local Codex host

**Last verified:** 2026-08-25
