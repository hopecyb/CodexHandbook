---
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-11-18"
  summary: Checked against the OpenAI Hooks documentation and the public source, license, and Codex integration documentation for HOL Guard 3.x. The third-party section is source-checked only; this site did not install it or independently test its blocking behavior.
  evidence:
    - label: OpenAI Hooks documentation
      href: https://learn.chatgpt.com/docs/hooks
    - label: HOL Guard source and Apache-2.0 license
      href: https://github.com/hashgraph-online/hol-guard
    - label: HOL Guard Codex 3.x integration guide
      href: https://hol.org/guard/docs/guard/codex-harness
    - label: HOL Guard local and Cloud boundary
      href: https://github.com/hashgraph-online/hol-guard/blob/main/docs/guard/local-vs-cloud.md
legacyVerification:
  status: "verified"
  products: "Environments using a local Codex host; CLI provides `/hooks` trust management"
  checkedAt: "2026-08-25"
title: Hooks overview
description: Understand Hook discovery, trust review, handlers, runtime behavior, and security boundaries.
locale: en
source_locale: zh-CN
source_revision: '595bd2a'
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-11-19
---

Hooks run command scripts or tools from connected MCP servers inside the Codex Agent loop. Typical uses include prompt secret scanning, tool-call policy, audit logging, session summaries, and verification before stopping.

![Codex Hook lifecycle across sessions, turns, tool calls, compaction, and subagents](/illustrations/flow-hook-lifecycle.webp)

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

## Third-party tool reference

If you do not want to write a guard script from scratch, you can evaluate [HOL Guard](https://github.com/hashgraph-online/hol-guard) as a candidate. It is a third-party open-source project under the Apache-2.0 license. Its [Codex 3.x integration guide](https://hol.org/guard/docs/guard/codex-harness) says the installer registers Hooks such as `PreToolUse` and `PermissionRequest`, and uses a startup shim plus partial MCP proxying to deny, warn about, or send supported shell commands, sensitive reads, MCP calls, and package operations for human approval according to local policy. It does not simply pause every operation for confirmation. Guard Cloud is a separate optional paid service; local protection does not require signing in to Cloud.

This is not an official OpenAI tool, and this site has not independently tested its blocking rate or security. Before trying it, run `hol-guard install codex --dry-run`, inspect changes to `~/.codex/config.toml`, the startup command, and MCP configuration, then review the current version's [coverage and failure behavior](https://github.com/hashgraph-online/hol-guard/blob/main/docs/guard/harness-support.md). Test Hook errors, timeouts, malformed results that may fail open, and the uninstall rollback path. Like a custom Hook, it is limited by Codex tool coverage and does not replace sandboxing, least privilege, secret management, or server-side controls.

## Acceptance checklist

- [ ] Event names come from the current official list.
- [ ] Matchers cover only required tools or sources.
- [ ] Scripts have fixture tests and readable errors.
- [ ] Logs omit tokens, complete prompts, and sensitive tool inputs.
- [ ] Failure, timeout, and disabled paths were exercised.
- [ ] The team understands trust changes shown by `/hooks`.

## Official source

- [OpenAI: Hooks](https://learn.chatgpt.com/docs/hooks)
