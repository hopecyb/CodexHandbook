---
title: Exemplos de configuração de Hook
description: Esqueletos adaptáveis de configuração e script Hook — scan de segredo, log de auditoria e validação de formato.
locale: pt
source_locale: zh-CN
source_revision: 5a86fd4
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---


This chapter removes old illustrative event names and fields. The example follows the current official `hooks.json` structure and includes runnable tests.

Complete files are in [`examples/hooks/secret-guard/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/hooks/secret-guard).

## Goal and boundary

Before a `Bash` or `apply_patch` call runs, deny command input containing a test string shaped like an AWS Access Key ID.

This demonstrates Hook input, output, and test structure only:

- It does not replace a professional secret scanner.
- The regular expression has false positives and false negatives.
- It does not scan hosted tools.
- It must not log complete tool input.

## 1. Configure hooks.json

```json
{
  "description": "Block obvious secret-shaped strings before local writes.",
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash|apply_patch",
        "hooks": [
          {
            "type": "command",
            "command": "python3 \"$(git rev-parse --show-toplevel)/examples/hooks/secret-guard/pre_tool_use_guard.py\"",
            "timeout": 3,
            "statusMessage": "Checking tool input for secret-shaped strings"
          }
        ]
      }
    ]
  }
}
```

In a real repository, place configuration in `.codex/hooks.json` and the script under `.codex/hooks/`. The handbook keeps example paths so the complete artifact can be tested directly.

## 2. Denial output

The script reads event JSON from stdin and checks only `tool_input.command`. On a match it prints:

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Secret-shaped string blocked by example hook."
  }
}
```

On no match it exits `0` with no output. Plain stdout is not a valid `PreToolUse` decision.

## 3. Run tests

```bash
python3 -m unittest discover examples/hooks/secret-guard -p 'test_*.py'
```

Expected: three tests pass, covering a normal command, suspected credential, and non-object `tool_input`.

You can also pipe a fixture manually:

```bash
printf '%s\n' '{"hook_event_name":"PreToolUse","tool_name":"Bash","tool_input":{"command":"git status"}}' \
  | python3 examples/hooks/secret-guard/pre_tool_use_guard.py
```

Normal input produces no stdout.

## 4. Enable it in a project

1. Put configuration and script in the target repository using a stable repository-relative path.
2. Run unit tests and one real normal command in an isolated repository.
3. Start Codex and open `/hooks` to inspect the source and exact definition.
4. After trusting it, verify both a normal pass and test-string denial.
5. Review again after editing the script; a hash change returns an unmanaged Hook to pending trust.

## From warning to blocking

Production teams usually start with non-blocking audit or context, then move to deny. Before upgrading, answer:

- Do fixtures cover known false positives?
- Is a timeout or crash understandable to the user?
- Does CI or service policy also enforce the rule?
- Are bypass and emergency recovery auditable?

## Official source

- [OpenAI: Hook configuration and PreToolUse output](https://learn.chatgpt.com/docs/hooks)

---

**Status:** verified

**Applies to:** Environments using a local Codex host; use Codex CLI `/hooks` for trust management

**Last verified:** 2026-08-25
