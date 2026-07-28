---
title: Verify Technical Content
description: How to mark pages verified—in reproduction steps, official sources, and dates.
locale: es
source_locale: en
source_revision: 5fadcc9
translation_status: fallback
translated_at: '2026-07-28'
---

Commands, permissions, pricing, and product features change. **Verification** means readers who follow the doc today get predictable results.

## What this page covers

Many first-time doc contributors confuse “looks fine to me” with “verified.”

For a technical handbook:

- The first is subjective
- The second means you tried it on current version, environment, and steps

This page explains upgrading “seems right” to “evidence it still works.”

## What verification checks

Not only prose—confirm a reader can do it **today**.

Especially important because:

- Commands change
- Menu locations move
- Permission defaults shift
- Product capabilities and regions evolve

Verification prevents readers following stale docs into traps.

## Status meanings

| Status | Meaning |
|---|---|
| `planned` | Planned, not yet written |
| `draft` | In progress, not finalized |
| `review` | Complete, awaiting second pass |
| `verified` | Checked per stated basis |
| `outdated` | Product changed; needs update |
| `archived` | Historical; not in main nav |

## Common misconceptions

### `verified` means evidence, not confidence

Not a tone—it is an evidence state.

Mark `verified` only after reproduction, official cross-check, and scope/date alignment.

### Community articles inform topics, not facts

CodexGuide, AI-Coding-Guide-Zh, etc. help you see what to cover.

For:

- Command names
- Permission behavior
- Product entry points
- Pricing, quotas, regional differences

—use official docs or live behavior.

### Verification is not one sentence at a time

Sentences may each look fine while the whole path fails:

- Products mismatch page scope
- Step order wrong
- Unstated assumptions
- Title promises more than body verified

Verify the **full operational path**.

## Verification checklist

1. **State scope**: product (App/CLI/IDE/Cloud), OS, CLI version
2. **Reproduce step by step**: from zero or clean worktree
3. **Official basis**: at least one OpenAI doc or Help Center link
4. **Community sources**: CodexGuide / KimYx0207 etc. for topics only—facts from official
5. **Update date**: footer `Last verified: YYYY-MM-DD`
6. **Independent review**: `verified` ideally confirmed by someone other than author

## Verification order

1. Confirm product, entry, scenario
2. Walk the documented steps
3. Cross-check volatile facts with official docs
4. Downgrade uncertain or unreproduced parts
5. Update status and date last

Prefer `review` over premature `verified`.

## Volatile information

Re-check quarterly or on major releases:

- Command and subcommand names, flags
- Default permissions and sandbox behavior
- Plans, model names, regional availability
- MCP/Hook event names

## On failure

- Downgrade to `review`, `draft`, or `outdated` as appropriate
- In PR, note which step disagrees with official docs
- Large drift: open issue labeled `outdated`

## Related

- [Handbook version policy](/guide/start-here/handbook-version-policy/)
- [Official resources](/guide/reference/official-resources/)

`verified` means checked against stated current basis with traceable evidence—not author gut feel alone.

---

**Status:** verified  
**Verification basis:** Cross-checked handbook status system, completed review practice, and official-first principle; describes internal standards for promoting pages to `verified` and when to downgrade.  
**Last verified:** 2026-07-26
