---
title: Extension capability map
description: 'Understand Codex extensions through eight responsibilities: task, rules, process, tools, guards, distribution, triggering, and parallel work.'
locale: en
source_locale: zh-CN
source_revision: fa5604a
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Extension mechanisms are confusing because they appear in one workflow while solving different problems.

Prompts and `AGENTS.md` provide tasks and rules; Skills provide reusable processes; MCP provides external tools; Hooks guard lifecycle points; Plugins compose and distribute; Scheduled tasks trigger by time. They combine without a fixed upgrade order.

## System architecture

![Reusable Codex work-system architecture](/diagrams/codex-work-system-architecture-en.svg)

Read the diagram around three ideas:

- **Task input** defines this run; project rules define every run.
- **Execution capability** expands reach but does not prove correctness; MCP, subagents, and scripts remain subject to permissions and acceptance.
- **Distribution and triggering** are not the workflow itself. A Plugin bundles capabilities; a Scheduled task starts a run.

## Eight responsibilities

| Responsibility | Mechanism | Best problem | Not responsible for |
|---|---|---|---|
| Current task | Prompt | Goal, scope, acceptance | Persistent project rules |
| Persistent rules | `AGENTS.md` | Commands, conventions, directory boundaries | Full steps for a task class |
| Reusable process | Skill | Stable steps, references, templates, scripts | External-system authorization |
| External tools | MCP / Connector | Repository-external data and actions | Correct business goals |
| Lifecycle guard | Hook | Observe, check, add context, or block around events | Replacing tests and human review |
| Composition/distribution | Plugin | Bundle Skills, connectors, MCP, Hooks, templates | Making every component trustworthy |
| Time trigger | Scheduled task | Periodically run a verified task | Replacing prompts and stop conditions |
| Parallel division | Subagent | Independent exploration, test, or review | Eliminating write conflicts and coordination cost |

## Combining capabilities

For weekly dependency-risk checks:

1. `AGENTS.md` defines package manager, tests, and prohibited directories.
2. A `dependency-audit` Skill defines collection, advisory checks, grading, and verification.
3. GitHub or package-source MCP supplies read-only external data.
4. A Hook blocks real credentials or logs external calls.
5. A Plugin distributes the Skill, MCP config, and Hook.
6. A Scheduled task runs weekly and creates only a report or draft issue for human review.

Missing a layer does not make a solution inferior. One local check may need only a clear prompt and terminal commands.

## Common mappings

| Need | Choose |
|---|---|
| Standard code style and test commands | AGENTS.md |
| Standardize PR review | Skill |
| Read Jira/Linear issues | MCP |
| Install one integration bundle for a team | Plugin |
| Scan credentials before each commit | Hooks |
| Draft a report every Monday | Automations plus human publication |

## From success to team asset

| Stage | Form | When |
|---|---|---|
| One-off prompt | Current task specification | One use or ongoing exploration |
| Template | Goal/context/constraints/acceptance skeleton | Repeated class, changing steps |
| Skill | `SKILL.md` plus templates/references/scripts | Stable process and success criteria |
| Plugin | Bundle of Skills, connectors, MCP, Hooks, templates | Unified installation, update, governance |
| Scheduled task | Saved task, schedule, run history | Manually verified periodic work |

MCP, Hooks, and subagents are not required stages; add them only for external tools, lifecycle guards, or parallel work. See [Choose an extension method](/en/skills/choosing-an-extension-method/).

## Current product boundaries

- A Codex Skill is a directory containing `SKILL.md`, optionally scripts, references, and assets; full instructions load when needed.
- The desktop App, CLI, and IDE share MCP configuration on one Codex host.
- Plugins work in supported ChatGPT surfaces, Codex desktop, and CLI; the IDE integration does not support Plugin browsing or use.
- Scheduled tasks are managed in ChatGPT Web or desktop App; CLI and IDE can test inputs but have no management UI.
- Subagents fit independent read-only exploration, test, and review; concurrent writes raise conflict cost.

Check [Feature comparison](/en/guide/reference/feature-comparison/) and official sources before configuring changing entry points.

## Official sources

- [Skills and Plugins](https://learn.chatgpt.com/docs/skills-and-plugins)
- [Build Codex Skills](https://learn.chatgpt.com/docs/build-skills)
- [Codex MCP](https://learn.chatgpt.com/docs/extend/mcp)
- [Codex Hooks](https://learn.chatgpt.com/docs/hooks)
- [Codex Plugins](https://learn.chatgpt.com/docs/plugins)
- [Scheduled tasks](https://learn.chatgpt.com/docs/automations)
- [Codex subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents)

---

**Status:** verified
**Applies to:** ChatGPT Web / desktop App / Codex CLI / IDE (see individual mechanism boundaries)
**Verification basis:** Rebuilt from OpenAI Skills, Plugins, MCP, Hooks, Scheduled tasks, and Subagents documentation available on 2026-08-25.
**Last verified:** 2026-08-25
