---
title: Hooks overview
description: Understand Hook discovery, trust review, handlers, runtime behavior, and security boundaries.
locale: en
source_locale: zh-CN
source_revision: 169a1ec
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Hooks run command scripts or tools from connected MCP servers inside the Codex Agent loop. Typical uses include prompt secret scanning, tool-call policy, audit logging, session summaries, and verification before stopping.

![Codex Hook lifecycle across sessions, turns, tool calls, compaction, and subagents](/diagrams/hook-lifecycle-events-en.svg)

The most important distinction is that `PreToolUse` can deny or rewrite supported local tool input before execution. `PostToolUse` runs afterward and cannot undo side effects.

## Configuration discovery

Codex looks beside active configuration layers for:

- `~/.codex/hooks.json`
- `[hooks]` in `~/.codex/config.toml`
- `<repo>/.codex/hooks.json`
- `[hooks]` in `<repo>/.codex/config.toml`
- Hooks bundled with enabled Plugins
- Managed Hooks delivered through system policy, MDM, Cloud, or `requirements.toml`

Project `.codex/` content loads only for a trusted project. Matching Hooks from multiple sources all run; a higher-priority layer does not replace the lower layer's whole Hook set.

When one layer contains both `hooks.json` and inline `[hooks]`, Codex merges them and warns at startup. Prefer one representation per layer.

## Review every unmanaged Hook

Codex records trust against the Hook definition hash. New or changed unmanaged Hooks are skipped as pending review until a user trusts the new definition.

Use `/hooks` in the CLI to inspect sources, review changes, trust, or disable an individual unmanaged Hook. Plugin Hooks follow the same trust process. Organization policy trusts Managed Hooks, which users cannot disable in their personal Hook browser.

## Two executable handlers

| Handler | Purpose | Boundary |
|---|---|---|
| `command` | Run a local script with event JSON on stdin | The script has local-process capability; review dependencies and output |
| `mcp_tool` | Call a tool on an already connected MCP server | Does not start or reconnect a server; unsupported for `SessionEnd` |

The current documentation says `prompt` and `agent` handlers can be parsed but are skipped. Do not put them in runnable configuration.

## Runtime behavior

- Multiple matching command Hooks start concurrently; one cannot stop another that has already matched.
- Most Hooks default to a 600-second `timeout`. `SessionEnd` defaults to one second and allows at most three. Production guards should set shorter explicit timeouts.
- A command Hook runs with the session `cwd`. Resolve repository scripts from the Git root so a subdirectory start does not break relative paths.
- Asynchronous Hooks fit logging and analysis but cannot block, approve, rewrite, or control their triggering action.

## Relationship to other security layers

| Layer | Responsibility |
|---|---|
| Sandbox | Filesystem, network, and system capability boundary |
| Approval | Human decision before high-risk actions |
| Command rules | Declarative allow/deny for known command patterns |
| Hook | Custom, testable logic at lifecycle points |
| Service permission | Final external-system read/write authority |

Hook tool coverage is not a complete security boundary. Some dedicated tool paths can bypass the default Hook path; hosted tools such as WebSearch also do not run local `PreToolUse` or `PostToolUse`.

## Adoption order

1. Start with redacted logging in `PostToolUse` or `SessionEnd`.
2. Use `systemMessage` or additional context for high-confidence warnings.
3. Block in `PreToolUse` only when the rule is certain, the script has fixtures, and false positives are acceptable.
4. Align Hooks with CI, pre-commit checks, and service permissions so policies do not conflict.

## Acceptance checklist

- [ ] Event names come from the current official list.
- [ ] Matchers cover only required tools or sources.
- [ ] Scripts have fixture tests and readable errors.
- [ ] Logs omit tokens, complete prompts, and sensitive tool inputs.
- [ ] Failure, timeout, and disabled paths were exercised.
- [ ] The team understands trust changes shown by `/hooks`.

## Official source

- [OpenAI: Hooks](https://learn.chatgpt.com/docs/hooks)

---

**Status:** verified

**Applies to:** Environments using a local Codex host; CLI provides `/hooks` trust management

**Last verified:** 2026-08-25
