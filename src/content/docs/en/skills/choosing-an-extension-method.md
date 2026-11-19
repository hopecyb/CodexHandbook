---
legacyVerification:
  status: "verified"
  products: "ChatGPT Web / desktop App / Codex CLI / IDE (support differs by mechanism)"
  basis: "Compared against OpenAI Skills, Plugins, MCP, Hooks, and Scheduled tasks documentation on 2026-08-25."
  checkedAt: "2026-08-25"
title: Choose an extension method
description: Choose prompts, AGENTS.md, Skills, MCP, Hooks, Plugins, or Scheduled tasks by what must persist.
locale: en
source_locale: zh-CN
source_revision: 'ef86d5a'
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: "2026-10-25"
---

The common mistake is selecting a technology name before identifying the problem. Ask first: **what must persist, or what should happen automatically?**

The frequently confused names are:

- Prompts
- AGENTS.md
- Skills
- MCP
- Plugins
- Scheduled tasks

Sometimes a prompt is enough; heavier mechanisms are conditional.

## Decision diagram

![Codex extension-method selection diagram](/illustrations/map-extension-selection.webp)

This is not an exclusive tree. A mature workflow may combine `AGENTS.md`, a Skill, and MCP; the diagram prevents assigning the wrong responsibility.

## Seven questions

### 1. Only this task?

Use a prompt. State the goal, input, scope, acceptance criteria, and permissions. This has the lowest setup cost and makes actual problems easiest to observe.

### 2. Every run in this repository?

Use `AGENTS.md` for tests, style, prohibited directories, and install rules. Do not persist one-off requirements.

### 3. Stable steps and output for a task class?

Create a Skill with reusable instructions, templates, references, assets, or scripts. If success criteria are not yet defined, keep experimenting with prompts first.

### 4. External data or actions?

Evaluate MCP or a Connector. List the tools and data actually needed, prioritize read-only access, the smallest scope, and auditable configuration, and avoid an extra connection when local files or commands suffice.

### 5. Check at a fixed lifecycle point?

Use a Hook for pre-command policy, post-write patch scan, or closing summary. Test timeout, failure, and false positives.

### 6. Distribute a capability bundle?

Use a Plugin for Skills, connectors, MCP, Hooks, and Scheduled templates. Installation does not automatically establish trust.

### 7. Manually stable and needs repetition by time?

Create a Scheduled task only after verifying prompt, Skill, permissions, and output. Inspect early runs and retain human publish/merge gates.

## Scenario mapping

| Scenario | Combination |
|---|---|
| Standard tests and commit rules | AGENTS.md |
| Pre-merge checklist | `pr-review` Skill |
| Fetch Linear ticket context | MCP plus task prompt |
| Weekly dependency report | Scheduled task → draft issue |
| Scan a patch for secrets after writing | Hook or CI; both for high risk |
| Distribute review flow and GitHub tools | Plugin after permission and Hook review |
| Weekly dependency-risk report | Verified Skill + Scheduled task + human review |
| Parallel security, test, maintainability reviews | Read-only subagents, main Agent consolidates |

## Cost dimensions

| Mechanism | Authoring | Maintenance | Security risk |
|---|---|---|---|
| Prompt | Low | Low | Low |
| AGENTS.md | Medium | Medium | Low |
| Skill | Medium | Medium | Low–medium |
| MCP | High | High | Medium–high |
| Hook | Medium | Medium–high | Medium–high |
| Plugin | Low to install / high to build | Medium–high | Medium–high |
| Scheduled task | Medium | High | High |

## Anti-patterns

- **Skill bloat:** dozens of overlapping descriptions.
- **MCP hammer:** API integration where `git` suffices.
- **Scheduling without acceptance checks:** scheduled code edits with no stop conditions, run evidence, or human review.
- **Rebuilding official connectors:** unnecessary custom MCP.
- **Misplaced rule:** one-off requirement in `AGENTS.md`.
- **Hook overload:** long business logic on every tool call.

## Common questions

### 1. Install Plugins and MCP immediately?

No. Clear prompts, scope, and `AGENTS.md` solve many tasks.

### 2. How many repetitions justify a Skill?

No fixed count. Stability, success criteria, and failure cost matter more.

### 3. Where do beginners start?

Usually:

- Prompts
- `AGENTS.md`
- Skills

MCP and unattended automation rarely belong at the beginning.

Match responsibility, minimize permission, and verify results.

## Minimal exercise

For pre-merge diff review:

1. Run a prompt twice and record repeated checks.
2. Put fixed repository commands and generated-file exclusions in `AGENTS.md`.
3. Put review steps, severity, and output format in a `pr-review` Skill.
4. Add MCP/Connector only for GitHub comments or CI state.
5. Add Hook or Scheduled only for fixed automatic checks.
6. Build a Plugin only when several teams must install the bundle.

For every added layer, ask: which access was added, how is it verified, and how is it disabled or rolled back?

## Further reading

- [Capability map](/en/skills/capability-map/)
- [Human approval patterns](/en/cases/workflows/human-approval-patterns/)
- [Turn a workflow into a Skill](/en/cases/workflows/turn-a-workflow-into-a-skill/)

## Official sources

- [Skills and Plugins](https://learn.chatgpt.com/docs/skills-and-plugins)
- [Build Codex Skills](https://learn.chatgpt.com/docs/build-skills)
- [Codex MCP](https://learn.chatgpt.com/docs/extend/mcp)
- [Codex Hooks](https://learn.chatgpt.com/docs/hooks)
- [Codex Plugins](https://learn.chatgpt.com/docs/plugins)
- [Scheduled tasks](https://learn.chatgpt.com/docs/automations)
