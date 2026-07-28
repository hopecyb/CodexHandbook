---
title: Hook event types
description: Hook trigger points in the Codex execution chain—for validation, logs, and blocks at the right stage.
locale: de
source_locale: en
source_revision: '6802e43'
translation_status: fallback
translated_at: '2026-07-28'
---

This section is about **when** the same check should fire.

**Hook events** are when the system calls your configured logic at fixed nodes. Understanding event types lets you implement "audit and validate" from [Hooks overview](/skills/hooks/hooks-overview/) without slowing every tool call.

## Contents

- Common event phases and use cases
- How events divide work with [command rules](/guide/customization/rules/command-rules/)
- Performance and failure strategy when configuring

## One decision principle

Do not start with "can this Hook do it?"  
Ask: do you want to stop something **before** it happens, or record it **after**?

Many misplaced Hooks fail because timing was wrong.

:::note
**Event names and fields follow [official Hooks documentation](https://developers.openai.com/codex).** The table below is conceptual grouping—after CLI upgrades, check `--help` and release notes.
:::

## Event groups (conceptual)

| Phase | Typical events (conceptual) | Good for |
|---|---|---|
| Session | `session.start` / `session.end` | Environment checks, summarize changes, audit footer |
| Before tool | `tool.call.before` / `pre_tool_use` | Block dangerous commands, scan secret patterns |
| After tool | `tool.call.after` / `post_tool_use` | Structured logs, metrics, redacted archive |
| Prompt | `user_prompt.submit` | Policy scan injection, length limits |
| Artifact | `artifact.create` | License headers, file type allowlist |
| Integration | `pr.before_create` (if supported) | Issue numbers, changelog format |

Do not hang the same logic on multiple events—pick the **earliest point that can block**.

## How to read these phases

- **Session**: Task start or end
- **Before tool**: Command or tool not executed yet
- **After tool**: Action happened—log, summarize, re-check
- **Prompt**: Right after user content is submitted
- **Artifact**: Right after a file or result is created

Understand at this level first; memorizing every event name can wait.

## Relationship to the rules engine

```text
User prompt → (optional) prompt Hook
    → Model proposes tool call
    → Rules engine allow/deny
    → (optional) pre_tool Hook → execute → post_tool Hook
```

- **Rules**: Declarative, fast—known command patterns
- **Hook**: Imperative scripts—complex policy and external systems

## Common misconceptions

### 1. If it can be checked, before vs after does not matter

It matters a lot.

To **prevent side effects**, attach as early as possible.  
If you only discover the problem in `post_tool`, it is often too late.

### 2. More granular events means more professional config

Prefer "few and precise"—get the logic on the right single point first.

### 3. Hook event types are just technical detail

They directly affect:

- Whether risk is stopped in time
- Whether logs are useful
- Whether the whole interaction slows down

## Failure strategies

| Strategy | When to use |
|---|---|
| `block` | Security violation, hard compliance |
| `warn` | Style, advisory checks |
| `log` | Observe only, no block |

Hook timeout or crash should default **safe**: production tends toward block or fail closed, with errors logged for investigation.

## When unsure where to attach

Simplified rules:

- Stop dangerous action: prefer pre-events
- Record what happened: prefer post-events
- Opening checks or closing summaries: session events

That covers most configuration cases.

## Minimal configuration approach

1. Pick one event (start with `post_tool` read-only logging)
2. Script stdin receives JSON payload (tool name, argument summary, working directory)
3. Exit code `0` pass, non-`0` per policy block/warn
4. Unit test: run script with fixed JSON fixture

Decide whether you are blocking or recording, then pick the event.

Full examples: [Hook configuration examples](/skills/hooks/hooks-examples/).

## Common mistakes

- Blocking in `post_tool` what should block in `pre_tool` (side effects already happened)
- LLM or slow network inside Hook, killing interactivity
- Payload contains secrets written to plaintext logs
- Hook not versioned—teammate environments diverge

## Security boundaries

- Hook script permissions should be ≤ monitored Agent permissions
- See [recommended team Hook use cases](/skills/hooks/hooks-overview/#recommended-team-use-cases) and [threat model](/guide/team-enterprise/security/threat-model/)

## Acceptance checklist

- [ ] Can name your team's most common event and why
- [ ] Readable error on failure
- [ ] Script has unit tests or fixtures
- [ ] Config in code review

## References

- OpenAI Codex Hooks reference
- stormzhang `22-hooks.md`
- KimYx0207 CX-08

---

**Status:** outdated  
**Applicable products:** CLI / App (version-dependent)  
**Verification basis:** Core content is Hook event grouping, payload, and failure strategy—high-churn implementation detail; official public material as of 2026-07-26 is insufficient to mark stable.  
**Last verified:** 2026-07-26
