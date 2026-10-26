---
title: Human Approval Patterns
description: Distinguish task authorization from tool approval; prepare a reviewable result before pausing for a specific action that requires authorization.
contentType: guide
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: The distinct roles of sandboxing and approval were checked. The collaboration patterns below are handbook recommendations, not uniform dialog rules for every client.
  evidence:
    - label: Official sandbox and approval guidance
      href: https://learn.chatgpt.com/docs/agent-approvals-security
locale: en
source_locale: zh-CN
translation_status: reviewed
reviewed_at: 2026-10-25
translated_at: 2026-09-20
source_revision: 'f60dbb5'
---

Approval should correspond to a specific action and its effects. Task authorization describes what the user wants completed; tool approval determines whether an action can run in the current environment. Writing a file, running a command, or accessing the network does not inherently require asking every time. Actual behavior depends on the authorized scope, tool policy, and sandbox together. See the [official guidance](https://learn.chatgpt.com/docs/agent-approvals-security).

## Three collaboration arrangements you can choose explicitly

| Arrangement | What can continue | When to wait |
|---|---|---|
| Read-only analysis | Read, compare, and form a proposal | Do not change the implementation before the user authorizes it |
| Implementation within authorized scope | Modify the specified area, verify appropriately, and prepare a reviewable result | Essential information is missing, the scope changes, or a new unauthorized action is needed |
| Separate approval for the final action | Finish drafts, builds, previews, and recovery preparation | Before publishing, sending, or another action specifically reserved for approval |

These are collaboration agreements, not names of new product modes. Do not request the same authorization again if it was clearly given and remains valid. If an enforced policy requires interactive approval, follow that mechanism.

## Pattern 1: Propose a plan in this round

```text
Read-only this round: inspect the project and propose changes. Do not edit
code or commit. If a check writes a cache, snapshot, or output file, say so;
do not assume that every “test” is read-only.
```

This suits a stage where the goal is undecided and alternatives need comparing. Even a read-only task requires attention to a command's actual side effects. Do not combine “tests may run” with “nothing may be written to disk” without checking what the tests do.

## Pattern 2: Complete local work continuously

```text
You may edit these three documents and related internal links, and run the
existing build checks. Complete the work continuously within that scope;
resolve ordinary implementation details and report them. Do not publish
the site or send messages. Explain any necessary tradeoff or out-of-scope
action first.
```

Editing and verification are already authorized here, so there is no need to ask again before every file write. Whether a particular command is permitted still depends on the execution environment; a prompt cannot override a refusal.

## Pattern 3: Approve a specific publishing action

Prepare a reviewable version first, then provide:

- The exact version or artifact to be published and its verification results.
- The target environment, recipient, or affected people.
- The expected external effects and any necessary recovery method.
- The authorization or conditions still missing.

Approval to “publish this version to the test site” does not authorize publishing any future version to production. Conversely, when the same action has already been clearly approved, a generic template should not trigger another request for confirmation.

## After a refusal

Preserve the original refusal and distinguish missing authorization, a policy prohibition, and an environment failure. Continue if you can narrow the work to a valid approach within the task. Do not evade the same restriction by switching tools, changing command spelling, or rewriting the prompt. If user action really is needed, explain the blocked action, the reason, and available next steps.

## What a reviewer checks

Check whether scope and result match, whether verification actually happened, and whether the external effects are understood. Having a plan does not automatically grant approval, and “no findings” does not guarantee zero risk.

For the working approach, see [task classification](/en/prompts/ask-for-a-plan/). For conflicting instructions, see [context priority](/en/guide/context/context-priority/). Unattended workflows also need [stop, failure, and notification mechanisms](/en/skills/automations/scheduled-tasks/).
