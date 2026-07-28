---
title: Memories and Persistent Context
description: How Codex remembers preferences and facts across sessions—capabilities, boundaries, and team norms.
locale: vi
source_locale: en
source_revision: cf8f791
translation_status: fallback
translated_at: '2026-07-28'
---

Some Codex clients support **Memory**: keeping preferences or facts you confirm across multiple turns for later sessions. It complements `AGENTS.md` and project configuration, but it **cannot** replace versioned team norms.

## Contents

- What memory should and should not store
- Precedence versus AGENTS.md, the Memories feature, and project instructions
- How individuals and teams should manage memory content

## What Memory Is Good For

Think of memory as: **Codex helping you remember things you always have to repeat but are not worth re-explaining every time.**

For example:

- You prefer explanations in Chinese
- You like conclusion first, then details
- In a project, which directory “backend” refers to by default

It is closer to “personal long-term preferences and a few stable facts,” not a project manual or a secret vault.

## What Memory Should Store

| Good fit | Poor fit |
|---|---|
| Personal coding preferences (comment language, indentation habits) | Production keys, tokens |
| Repeated project aliases (“backend means `services/api`”) | Changing sprint task status |
| Non-sensitive facts you explicitly say “please remember” | Team norms that belong in Git |

Team-level norms should go into **`AGENTS.md` or project configuration** for review and newcomer onboarding. See [Scope and Precedence](/guide/customization/agents-md/scope-and-precedence/).

## Common Misconceptions

### Memory does not “remember everything forever for you”

Many people assume that once they said something, Codex will remember it completely, permanently, and stably afterward.

A more accurate view: memory is an auxiliary layer that reduces repetition, but it cannot replace documentation and formal information in the repo.

### Memory is not for team consensus

If only your account’s memory knows a rule, others cannot see it and it cannot be reviewed.

That content should go back to:

- `AGENTS.md`
- Project documentation
- Configuration files

### Memory is not for sensitive information

Even if a client supports memory, you should not store:

- tokens
- Customer data
- Internal accounts
- Unreleased business information

in it long term.

## Comparison with Related Mechanisms

| Mechanism | Who can see it | How it changes |
|---|---|---|
| One-off prompt | Current task | You type it |
| Memory | Usually only your account/workspace | Confirm in conversation or manage in settings |
| `AGENTS.md` | All repo collaborators | Git PR |
| Project configuration | By configuration layer | Files + managed policy |

## Recommended Usage

1. **Write into the repo first**: test commands, directory structure, no push—these should not live only in memory
2. **Use memory for personal preferences**: such as “explain in Chinese” or “diff comments in English”
3. **Clean up regularly**: delete stale memory after major architecture changes
4. **Sensitive projects**: disable or limit memory to avoid cross-project context leakage

## How to Decide Whether Something Belongs in Memory

If you are unsure whether a piece of information should go into memory, ask yourself:

1. Is this a preference I often repeat personally?
2. Is this a fact that stays relatively stable for a while?
3. Would collaboration be unaffected if others cannot see this information?

If all three lean toward “yes,” memory is a better fit.

## Security Boundaries

- Do not let memory become a **secret channel** that bypasses `AGENTS.md` prohibitions
- Do not store customer data, credentials, or unreleased financial information in memory
- Enterprise environments may disable memory—follow managed policy

## Common Mistakes

- Putting “this week’s epic list” only in memory, invisible to collaborators
- Not updating either side when memory conflicts with `AGENTS.md`
- Assuming memory means “the model always remembers the whole repo”

Memory is best for “personal preferences and a few stable facts you always repeat”; it is not a substitute for repo documentation, team rules, or sensitive information management.

## References

- OpenAI Codex memory documentation (per version)
- stormzhang `19-memory.md`
- codex.bozhouai.com memory chapter (structure reference)

---

**Status:** verified  
**Applicable products:** App / CLI (depending on version)  
**Verification basis:** Cross-checked against OpenAI Help Center’s current official ChatGPT Memory description and this handbook’s verified project instructions, personal preferences, and security boundary chapters; page content is limited to the stable principle that memory suits personal preferences and a few stable facts and does not replace repo rules or sensitive information management.  
**Last verified:** 2026-07-26
