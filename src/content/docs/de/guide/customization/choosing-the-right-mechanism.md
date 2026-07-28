---
title: Choosing the Right Mechanism
description: A decision framework for where temporary prompts, AGENTS.md, memory, Skills, and MCP belong.
locale: de
source_locale: en
source_revision: e6e6e54
translation_status: fallback
translated_at: '2026-07-28'
---

Many team problems come from **putting the same information in the wrong place**: rules that belong in the repo go into chat, reusable workflows that should be Skills get stuffed into `AGENTS.md`, and read-only data access is handed to a high-privilege MCP.

This page focuses on a practical question:

> When you realize “this will keep happening,” which layer should you sink it into?

## Quick Table

| Mechanism | Best for |
|---|---|
| One-off prompt | Goals, constraints, and acceptance criteria for this task only |
| `AGENTS.md` | Repo-level collaboration rules and long-term constraints |
| Memory | Personal preferences or a small set of non-sensitive, cross-session repeated facts |
| Skill | Reusable workflows, checklists, and specialized playbooks |
| MCP | Access to external tools, data sources, and system capabilities |

If this table is not enough, keep reading.

## Five-Step Decision Method

### 1. Information that applies only to the current task

Put this kind of information in **this prompt** first.

Good fits:

- “Only change `docs/` this time; do not touch code”
- “Output a Chinese summary and end with one question to confirm”
- “Analyze the cause first; do not change files immediately”

Poor fits:

- The team always requires `pnpm test`
- Repo no-go directories
- Every PR review must follow the same template

Those long-term rules should sink further down.

### 2. Is this a project collaboration rule or a personal habit?

If it is something **every collaborator should know**, put it in [`AGENTS.md`](/guide/customization/agents-md/what-is-agents-md/).

For example:

- Test, lint, and build commands
- Which directories must not be touched
- Commit message or PR acceptance rules
- Special conventions for different subdirectories in a monorepo

If it is only **your preference**—for example, “explain in Chinese” or “conclusion first, then details”—[memory](/guide/customization/memories-and-persistent-context/) or personal configuration is a better fit.

Use this rule of thumb:

- If it should go through PR review, prefer the repo
- If others not seeing it is fine, consider the personal layer

### 3. Is this a “rule” or a “procedure”?

Many docs are hard to use because they mix rules and steps.

| If it is… | Better fit |
|---|---|
| “Do not push directly to main” | `AGENTS.md` |
| “When reviewing, check tests first, then risk, then regression” | Skill |
| “Run these 4 commands before release” | Skill or script |
| “Only allow read-only issue data access” | MCP + permission configuration |

When deciding, focus on these two points:

- **Rules** answer “what is allowed and what is not”
- **Steps** answer “how this kind of work is usually done”

Reusable steps usually fit better as a [Skill](/skills/overview/).

## Common Combinations, Not Either/Or

Mature teams usually do not use only one mechanism; they combine them.

### Combination 1: `AGENTS.md` + Skill

Good for: code review, release checks, incident triage.

Division of labor:

- `AGENTS.md` holds hard constraints: no auto-merge, which checks must run
- Skill holds the process: how to review, what template to output, how to grade issues

### Combination 2: Skill + MCP

Good for: reading tickets, querying databases, pulling design files, generating weekly reports.

Division of labor:

- Skill defines execution order and output format
- MCP provides “what can be connected to, queried, and changed”

You can think of them separately:

> A Skill is like a work instruction; MCP is like the toolbox you plug in.

### Combination 3: `AGENTS.md` + memory

Good for: stable team rules with different personal expression habits.

Division of labor:

- `AGENTS.md` holds shared team norms
- Memory keeps personal preferences such as language, explanation style, and default output structure

Do not do it the other way around. Team rules should not live only in one person’s memory.

## A More Practical Decision Matrix

| Question | Yes | No |
|---|---|---|
| Affects only the current task? | Prompt | Keep deciding |
| Everyone should follow it? | `AGENTS.md` / project configuration | Keep deciding |
| A repeatable workflow? | Skill | Keep deciding |
| Needs live external data or actions? | MCP | Keep deciding |
| Only a personal long-term preference? | Memory / user configuration | Prompt |

When a requirement lands in two columns at once, that usually means you should **split layers** instead of forcing everything into one place.

## Three Typical Examples

### Example 1: The team keeps forgetting regression tests

Do not only say “remember to run tests” in chat.

A steadier approach:

1. Write in `AGENTS.md`: “business-logic changes must run `pnpm test`”
2. If the flow is complex, add a test-execution Skill
3. Use CI as the final backstop

### Example 2: Every PR review should follow the same output format

Do not paste the whole template every time.

A steadier approach:

1. Turn the output structure into a Skill
2. In `description`, make clear “use when the user says review, audit, or pre-merge check”
3. If the team uses it uniformly, add the Skill path to project docs

### Example 3: Need to read Linear tickets before changing code

Do not paste API tokens into the conversation.

A steadier approach:

1. Connect Linear through MCP
2. Default to read-only permissions
3. If you want a fixed flow, use a Skill to require “read ticket first, then code, then propose a plan”

## Easiest Pitfalls

### Turning `AGENTS.md` into an encyclopedia

The result is that hard constraints are not visible, and the commands and no-go areas that matter most get buried. `AGENTS.md` works better when it is short, hard, and executable.

### Using a Skill as a “universal junk drawer”

One Skill that holds review, release, debugging, and daily reports becomes hard to trigger and hard to maintain.

### Treating MCP as the default answer

If the repo already has the information, you do not need an external tool just to look “advanced.” MCP is capability extension, not a complexity reward.

### Letting memory carry team facts

Whoever’s account remembers it owns the rule; when they leave or change machines, the rule disappears. That information should go back to the repo.

## Recommended Rollout Order

If the team is still messy, you can converge in this order:

1. Write a minimum viable `AGENTS.md` first
2. Turn flows repeated three or more times into Skills
3. Introduce MCP only when you truly need external systems
4. Finally organize personal memory and preferences

This makes it easier to stabilize **collaboration consensus** first, then expand capabilities.

## Further Reading

- [What Is AGENTS.md](/guide/customization/agents-md/what-is-agents-md/)
- [Memories and Persistent Context](/guide/customization/memories-and-persistent-context/)
- [Skills Overview](/skills/overview/)
- [MCP Overview](/skills/mcp/mcp-overview/)
- [Choosing an Extension Method](/skills/choosing-an-extension-method/)

## References

- OpenAI Codex official documentation (per current version)
- freestylefly/CodexGuide AGENTS/Skill organization approach
- KimYx0207 *AI-Coding-Guide-Zh* Codex extension and automation topics
- stormzhang `11-agents-md.md`, `19-memory.md`, `20-mcp.md`, `22-skills.md`
- [codex.bozhouai.com](https://codex.bozhouai.com/)

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Verification basis:** Cross-checked against this handbook’s verified `AGENTS.md`, context, Skills, MCP, and quality chapters; this page keeps only the stable decision framework that temporary requirements, project rules, personal preferences, workflow packaging, and external capabilities should be stored in separate layers.  
**Last verified:** 2026-07-26
