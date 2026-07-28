---
title: Hook configuration examples
description: Adaptable Hook config and script skeletons—secret scan, audit log, format validation.
locale: vi
source_locale: en
source_revision: 7448bb4
translation_status: fallback
translated_at: '2026-07-28'
---

When reading Hook examples, confirm what they defend against, then adapt to your environment.

This chapter provides **illustrative** config and scripts for team adaptation. Field names and paths follow [official documentation](https://developers.openai.com/codex) and local `codex --help`; try in an isolated repo before copying.

Prerequisites: [Hooks overview](/skills/hooks/hooks-overview/) · [Hook event types](/skills/hooks/hook-event-types/)

## Confirm scope before use

Do not treat these as copy-paste "standard answers."  
Treat them as three patterns:

- Log only
- Block first
- Light input check

Understand the idea, then decide whether to extend.

## Example 1: Audit log after tool call (read-only)

**Goal:** Record who wrote which paths when—do not write secrets to disk if redaction fails.

`hooks.json` (illustrative):

```json
{
  "hooks": [
    {
      "event": "tool.call.after",
      "command": ".codex/hooks/audit-log.sh",
      "timeout_ms": 500
    }
  ]
}
```

`.codex/hooks/audit-log.sh`:

```bash
#!/usr/bin/env bash
# stdin: JSON payload (structure per official docs)
payload=$(cat)
tool=$(echo "$payload" | jq -r '.tool // "unknown"')
ts=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
echo "$ts tool=$tool" >> "${CODEX_AUDIT_LOG:-/tmp/codex-audit.log}"
exit 0
```

**Acceptance:** After one file write, log has one line; script always exits 0.

Log-only examples are lowest risk—usually the best starting point.

## Example 2: Block suspected secrets before tool call

**Goal:** `block` when diff or write content matches AWS access key pattern.

```json
{
  "hooks": [
    {
      "event": "tool.call.before",
      "command": ".codex/hooks/secret-scan.sh",
      "on_failure": "block",
      "timeout_ms": 300
    }
  ]
}
```

Core logic in `secret-scan.sh` (illustrative):

```bash
#!/usr/bin/env bash
payload=$(cat)
text=$(echo "$payload" | jq -r '.arguments // empty' 2>/dev/null)
if echo "$text" | grep -qE 'AKIA[0-9A-Z]{16}'; then
  echo "Blocked: possible AWS access key in tool arguments" >&2
  exit 1
fi
exit 0
```

**Acceptance:** Test string with `AKIA` blocked; normal `git status` passes.

:::caution
Regex scanning has false positives/negatives—supplement only; real secrets should use secret scanners and pre-commit; see [sensitive context](/guide/context/sensitive-context/).
:::

Use block-style Hooks after you know you need to stop real actions. Starting with block makes debugging costlier.

## Example 3: Length and keyword policy on user prompt submit

**Goal:** Reject obvious attempts to override system instructions (simplified).

```bash
#!/usr/bin/env bash
prompt=$(cat | jq -r '.prompt // empty')
if [ "${#prompt}" -gt 50000 ]; then
  echo "Prompt too long" >&2
  exit 1
fi
if echo "$prompt" | grep -qi 'ignore previous instructions'; then
  echo "Blocked: possible injection pattern" >&2
  exit 1
fi
exit 0
```

**Acceptance:** Overlong and pattern hits fail; normal tasks pass.

At minimum:

- Can inspect input
- Clear failure reason
- Does not block normal requests excessively

## Same source as team rules

Extract "forbidden command substrings" into `tools/codex-policy.json` for Hooks and [command rules](/guide/customization/rules/command-rules/) to share—avoid maintaining two places.

## Common misconceptions

### 1. If the example runs, it is production-ready

Examples teach structure and ideas—not drop-in production config.

### 2. Block Hooks are more mature than log Hooks

Many teams start with logs, confirm false positives and performance, then move to warn or block.

### 3. Hook examples are only about script syntax

Also consider:

- Which event it attaches to
- Failure strategy
- Whether the team can explain why it blocks this way

## Testing Hooks

```bash
# Test script with fixture (illustrative)
echo '{"tool":"shell","arguments":"git status"}' | .codex/hooks/secret-scan.sh
echo $?
```

## Common progression

Many teams follow:

1. Read-only log Hook
2. Warn Hook
3. Block Hook

That separates "logic is correct" from "team accepts blocking."

Hook examples are for learning structure—not copying verbatim into production.

## Common mistakes

- Script missing `chmod +x`, fails silently
- `timeout_ms` too short causes false blocks
- Log path not writable breaks whole Hook chain
- `curl` full payload outbound from Hook

## Acceptance checklist

- [ ] Each Hook has fixture tests
- [ ] Failure strategy (block/warn) matches team policy
- [ ] Config and scripts same repo, same PR review
- [ ] Docs note verification date and applicable CLI version

## References

- OpenAI Codex Hooks examples
- freestylefly/CodexGuide audit configuration
- stormzhang `22-hooks.md`

---

**Status:** outdated  
**Applicable products:** CLI / App (version-dependent)  
**Verification basis:** Includes Hook config structure, event names, payload fields, and script examples—strongly tied to current implementation; lacks stable official public basis.  
**Last verified:** 2026-07-26
