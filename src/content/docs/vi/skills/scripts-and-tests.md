---
title: scripts/ and tests
description: Add deterministic scripts to a Skill and verify their behavior.
locale: vi
source_locale: en
source_revision: c4f1381
translation_status: fallback
translated_at: '2026-07-28'
---

Early on, it is tempting to put everything in `SKILL.md`. That works for simple flows, but once a step must run **stably, repeatedly, and verifiably**, scripts beat prose.

Hand fixed actions to scripts; leave judgment and collaboration to the Skill.

# scripts/ and tests

When a step must run deterministically (run tests, generate diff, validate format), provide a script under `scripts/` and document when to call it in `SKILL.md`.

## Example

```text
my-skill/
├── SKILL.md
└── scripts/
    └── run-checks.sh
```

## When to consider scripts/

If a step matches any of these, scripts are a strong choice:

- Should run exactly the same every time
- Exit code itself carries meaning
- Natural-language description would be verbose
- You want reuse in CI or other tools later

Actions like "run checks," "generate diff," "validate format," and "export report on a fixed schedule" fit scripts well.

## Testing suggestions

- Run scripts manually in a practice repo; confirm exit codes and output
- Trigger end-to-end via the Skill; confirm scripts are called as expected
- Team scenario: verify scripts still work in CI or pre-commit

## Common misconceptions

### 1. Scripts make Skills complex, so avoid them

If a script stabilizes a flaky step, the whole thing often gets simpler.

### 2. If a script runs locally, the Skill is fine

Also check:

- Whether the Skill triggers it correctly
- Whether approval policy blocks it
- Whether it still works in team environments or CI

### 3. "Testing the Skill" means testing the script

Not enough.

Script tests one action;  
Skill tests when to call, how to call, and whether output matches expectations.

## Suggested verification order

When starting out:

1. Run the script alone
2. Check exit code and output clarity
3. Run full flow through the Skill once
4. Test again in a realistic environment

That separates "script is broken" from "Skill integration is wrong."

Do not rely on prose alone for actions that must repeat reliably. Get scripts working first, then confirm Skill invocation.

Scripts inherit the current approval policy; see [command rules](/guide/customization/rules/command-rules/) and [Skill security](/skills/security/).
---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Verification basis:** Current Codex runtime allows skills to work with scripts and deterministic commands; this page's principle—script stable actions, Skill constrains flow—matches current capability.  
**Last verified:** 2026-07-26
