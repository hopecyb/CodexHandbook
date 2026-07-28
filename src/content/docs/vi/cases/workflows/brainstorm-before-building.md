---
title: Brainstorm before building
description: Structured exploration to converge on an approach before code or long-form writing—reduces rework.
locale: vi
source_locale: en
source_revision: b64945f
translation_status: fallback
translated_at: '2026-07-28'
---

**Brainstorm before building** fits tasks where the goal is fuzzy or multiple approaches exist: new features, redesigns, content topics, tech selection. It connects to the ① Explore phase of [explore—plan—execute—verify](/cases/workflows/explore-plan-execute-verify/), but emphasizes **diverge and converge** rather than immediately reading code and editing files.

## What this page covers

- When brainstorm is worth it vs going straight to EPXV
- How to bound divergence and avoid empty chat
- Artifacts: option table, decision record, next-step plan

## Who it's for

| Scenario | Example |
|---|---|
| Product / feature | "Add export for users—three UI options" |
| Content | "Who is this tutorial for, how to structure it" |
| Technical | "Queue vs cron for scheduled tasks" |

## Minimum viable approach

**Phase A — Diverge (time-boxed)**

```text
Do not change any files yet. For "export CSV" requirement, list 3 implementation paths:
each with pros/cons, involved modules, estimated effort (S/M/L).
Do not pick a final approach.
```

**Phase B — Converge**

```text
From the table above, recommend 1 default and 1 backup;
note 2 decision points I must confirm (format, permissions).
```

**Phase C — Enter planning**

After confirmation, proceed to [specification-driven work](/cases/workflows/specification-driven-work/) or EPXV ② Plan.

## Recommended workflow

```text
State constraints (time, stack, what cannot change)
    → Diverge 3–5 options (no code)
    → Rank by value / risk / cost
    → Human picks direction or requests more info
    → Written plan + execute
```

Set a **time box**: e.g. complete divergence in 15 minutes to prevent drift.

## Common mistakes

- Treating brainstorm as execution—model starts editing files—use "do not change yet" constraint
- Too many options without ranking—decision fatigue
- Rejected options not recorded—same debate two weeks later
- Skipping constraints—beautiful plan but not feasible

## Safety boundaries

- Brainstorm may still read sensitive files—use `@` to scope references precisely
- Compliance/privacy options need human legal/security review—not model-only decisions

## Acceptance checklist

- [ ] At least 2 viable options with clear recommendation
- [ ] Decision points marked, awaiting human confirmation
- [ ] No unauthorized repo writes
- [ ] Next step can connect to written plan

## Related chapters

- [Explore—plan—execute—verify](/cases/workflows/explore-plan-execute-verify/)
- [Specification-driven work](/cases/workflows/specification-driven-work/)
- [Ask for a plan](/prompts/ask-for-a-plan/)

## Reference sources

- CodexGuide requirement clarification and option comparison
- codex.bozhouai.com task templates and topic selection methods

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** Cross-checked against currently verified EPXV, planning, specification-driven, and prompts chapters in this handbook; this page only describes the stable collaboration method—diverge first, converge, then plan—not dependent on specific product entry details.
