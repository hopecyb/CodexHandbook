---
legacyVerification:
  status: "verified"
  basis: "Cross-checked against the handbook’s current status system, completed rounds of review, and the official-first principle. This page describes internal standards for promoting pages to `verified` and for downgrading them."
  checkedAt: "2026-07-26"
title: Verify Technical Content
description: Distinguish editorial status, source checks, and example runs; record scope, environment, and evidence.
locale: en
source_locale: zh-CN
source_revision: 'cfb077d'
translation_status: reviewed
reviewed_at: "2026-10-25"
translated_at: 2026-09-20
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Updated contribution guidance for the site’s new metadata fields; this does not mean every product mechanism cited here was rerun.
sidebar:
  order: 30
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

### Editorial status and verification method are separate fields

`editorialStatus` records writing and review progress. `verification.kind` records which kind of check was actually performed; readers cannot infer from `verified` that an example was run.

| Verification method | Supported conclusion | Required evidence |
|---|---|---|
| `editorial` | Structure, wording, or internal references were reviewed | Check summary and date |
| `source-checked` | Facts within the stated scope agree with the sources | Specific source links, summary, and date |
| `run-tested` | The example ran in the recorded environment | Environment, execution and review records, summary, and date |

`run-tested` does not guarantee that the example works on every platform. The summary must say what was and was not checked; an independent calculation self-check is not a review by a second author. Old records without evidence remain in `legacyVerification` and do not automatically imply any new verification status.

```yaml
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Checked the structure and internal links; the example has not been run.
```

Source checks and runs use an `evidence` list whose entries each contain `label` and `href`. Runs also require `environment`, specifying the system, relevant client version, and dependency versions. The build rejects run records that lack an environment or evidence links. A link’s existence alone does not prove that the evidence is sufficient; maintainers must read the record.

### Community articles inform topics, not facts

Community articles can help you see what to cover.

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
3. **Official basis**: cite specific official sources for product facts; for stable method exercises, use real inputs and check records without claiming official endorsement
4. **Community sources**: community articles for topics only—facts from official
5. **Update date**: set `verification.checkedAt` only to the actual check date; do not bulk-refresh old dates and pass them off as renewed review
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

- [Handbook version policy](/en/guide/start-here/handbook-version-policy/)
- [Official resources](/en/guide/reference/official-resources/)

`verified` means checked against stated current basis with traceable evidence—not author gut feel alone.
