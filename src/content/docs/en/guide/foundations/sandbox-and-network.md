---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: The current Codex CLI documentation in the OpenAI Help Center still describes Full Auto as a sandboxed, network-disabled environment scoped to the current directory and distinguishes it from approval modes. This page only explains that sandbox and network are separate risk boundaries and how beginners can limit access.
  checkedAt: '2026-07-26'
title: Sandbox and network
description: Understand execution isolation, network access, and risk boundaries.
locale: en
source_locale: zh-CN
source_revision: '5937622'
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 80
---

“Sandbox” and “network” refer to different things: the sandbox limits what Codex can touch, while network controls where it can connect.

The **sandbox** limits which parts of the filesystem and certain system capabilities the agent can access, reducing the scope of mistakes. **Network access** creates another risk: sensitive information in the prompt could be exposed, or untrusted data could be retrieved.

## Why these limits matter

Without these boundaries, a misunderstanding of your task could have wider consequences, such as:

- Changing a directory you did not want touched
- Reading a sensitive file it should not read
- Sending task content to an external site
- Retrieving data or scripts from an unknown source

These limits are safety guardrails, not barriers added for their own sake.

## Getting started

1. During practice, turn off unnecessary network access or allow only explicitly needed access.
2. Do not put production secrets in your practice project.
3. If you see a request to access the network or write to a sensitive path, pause and understand it before approving.

## Common misunderstandings

### 1. Does a sandbox mean Codex is not capable enough?

The sandbox mainly controls risk; it is not intended simply to weaken capability.

### 2. Is more network access always better?

More access means:

- A wider and more complicated range of information sources
- Greater exposure to untrusted content
- The possibility that task content reaches an external service

During practice, avoid network access when you do not need it.

### 3. How should I judge a permission request?

Ask three questions:

1. Does this task really need network access?
2. Is the path or site what I expected?
3. If I refuse this step, can Codex continue in a safer way?

## A simpler picture

Think of these as two doors:

- **Sandbox door**: which files and system areas Codex may enter
- **Network door**: whether it may look or connect outside

Both doors are technical settings and ways for you to control risk.

For product controls, see desktop app [Settings](/en/guide/desktop-app/settings/). For official details, see [developers.openai.com/codex](https://developers.openai.com/codex).

At the start, it is better to keep access narrower until you understand the risks.
