---
legacyVerification:
  status: verified
  products: Integrations
  basis: Current OpenAI Help Center guidance on plugins and apps still describes integration through plugins, apps, and app templates, with administrators able to control role access, read and write actions, confirmation requirements, and data boundaries separately. This page focuses on design principles, permission levels, and rollout order rather than an external system's current UI.
  checkedAt: '2026-07-26'
title: Integrations (Overview)
description: Understand boundaries, permissions, and feedback loops when connecting GitHub, ticketing, chat, and internal platforms to Codex.
sidebar:
  order: 55
locale: en
source_locale: zh-CN
translation_status: reviewed
reviewed_at: 2026-10-25
translated_at: 2026-09-20
source_revision: '140102c'
---

Integration is valuable not merely because Codex gains another tool. It places an agent in workflows you already use: code hosting, ticket queues, notifications, internal platforms, and knowledge bases.

Before connecting anything, decide:

- Who may trigger this automation?
- What may Codex read and write back?
- Who will know when it fails, who owns the response, and how can the change be rolled back?

## What does integration change?

Think of integration as **bringing Codex into existing systems to work with you**, instead of leaving it to answer in a chat window.

For example, it might read a GitHub PR and submit a comment, read ticket context and propose a response, or send a result to a chat tool after a task ends. What changes is whether Codex can enter the real workflow.

## Common misconceptions

### More integrations are not always better

A team may want to connect GitHub, Jira, Slack, a knowledge base, and an internal API at once. For a first pilot, a single short workflow whose value is easy to observe is usually better. More connections make permission boundaries harder to explain, failures harder to locate, and trust easier to lose.

### “Can run automatically” does not mean “should start fully automatic”

It is tempting to automate status changes, code edits, notifications, and merges immediately. A more manageable progression is to read data first, then generate suggestions, then add human confirmation, and only later consider automatic writeback. That makes responsibilities and boundaries clearer.

## Answer three questions before connecting systems

### 1. Is it reading data or changing system state?

| Type | Risk | Suggested approach |
|---|---|---|
| Read-only query | Relatively lower | Start here |
| Draft or comment generation | Medium | Add human review |
| State changes, PR creation, or messages | Higher | Limit permissions, audit, and plan rollback |

Often the first useful step is only **reading context and generating suggestions**, even when a team initially asks for automatic changes.

### 2. Is it interactive or asynchronous?

| Scenario | Better fit |
|---|---|
| You ask Codex in a session to inspect an issue | MCP or interactive task |
| A PR opening triggers a draft review | Cloud, CI, or automation |
| A daily status summary | Scheduled or background task |

The same system can be connected in several ways; one mechanism need not serve every case.

### 3. Is integration helping people or making decisions for them?

A useful default is to put Codex in the **suggestion layer**, not the final decision layer. It can draft PR review comments or summarize issues. Automatic merging, production configuration changes, or closing high-risk tickets should not be the starting default.

## Common integration types

### GitHub and code hosting

This is a common, mature category. It can support cloud tasks reading repositories, creating branches and PRs, non-interactive CI reviews, and follow-up fixes based on review comments. Start with [GitHub Integration](/en/guide/integrations/github/) and [Web and Cloud](/en/guide/web-and-cloud/).

### Tickets and project management

Examples include Linear, Jira, Trello, and internal request systems. Codex can read issue background before code changes, suggest triage based on labels or status, and summarize iteration progress. A **read-only MCP connection plus a Skill workflow** is often a sensible first step.

### Chat and notification systems

Examples include Slack, email, and company messaging. They can notify people when tasks complete, fail, or await approval, and deliver scheduled daily or weekly summaries. A notification tool should not be the only audit record; keep logs and ticket records for important work.

### Internal platforms and knowledge bases

Examples include developer portals, runbooks, internal APIs, and documentation sites. They can supply team rules or on-call instructions as context, and let Codex call internal capabilities within defined boundaries. Permission levels and the trustworthiness of content matter especially here.

## Decide what to pilot

To make a quick first-pass decision, ask:

1. Is this work already repeated by the team?
2. Can reading and organizing information alone create value?
3. Can a person easily catch and recover from an imperfect result?

If all three are true, the integration is a good candidate for an early pilot.

## Suggested rollout order

For a first integration, move from lower to higher risk:

1. Connect one external source read-only.
2. Let Codex generate a summary or suggestion without executing it.
3. Add human approval and notification.
4. Consider automated writeback only afterward.

This lets you test value before widening permissions.

## A minimal useful integration

For a draft PR review:

1. GitHub triggers a task.
2. Codex reads the diff and relevant rules.
3. It outputs a comment draft or checklist.
4. A person decides whether to use it.

This is easier to launch and earn trust in than automatically editing and merging code.

## Risk-control checklist

- [ ] Each integration has a named owner.
- [ ] Read-only, comment, and writeback permissions are distinguished.
- [ ] You can trace what each run read and wrote.
- [ ] Failures produce a notification instead of waiting to be discovered.
- [ ] Sensitive-data access receives a security review.

On a first integration, using Codex to **look and suggest** is usually easier to establish than immediately having it **change and execute**.

## Chapter navigation

| Integration | Page |
|---|---|
| GitHub | [GitHub Integration](/en/guide/integrations/github/) |
| Slack, Linear, Jira, etc. | Consult official documentation and this handbook's MCP and automation chapters as coverage grows |

## Related chapters

- For connectors and packaged distribution, see [Plugins Overview](/en/skills/plugins/plugins-overview/).
- For external data, see [MCP Overview](/en/skills/mcp/mcp-overview/).
- For scheduled and background work, see [Scheduled and Background Tasks](/en/skills/automations/scheduled-tasks/).
- For cloud repository collaboration, see [Web and Cloud](/en/guide/web-and-cloud/).

## Reference source

- Official OpenAI Codex integration and developer documentation.
