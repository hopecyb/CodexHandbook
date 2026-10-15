---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: The current Codex CLI introduction in the OpenAI Help Center still distinguishes approval modes and groups reading files, writing files, and running commands by risk. This page only explains why approval exists, when to approve cautiously, and how to assess the affected scope; it does not state fixed product defaults.
  checkedAt: '2026-07-26'
title: Permissions and approvals
description: Understand when Codex needs your approval to act.
locale: en
source_locale: zh-CN
source_revision: 1beec63
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 70
---

Codex should not perform high-risk operations without consent. **Approval** is the gate in collaboration between you and Codex.

If Codex could read any file, use the network freely, and run arbitrary commands, a misunderstanding of your task could be costly.

![Illustration: four doors with different access—read files, write files, run commands, go online—and a person deciding which key to hand the assistant](/illustrations/permissions-approvals.webp)

## What you need to consider

- Whether it may read or write paths outside the current project
- Whether it may access the network
- Whether it may run particular shell commands
- Whether your team has imposed mandatory policies through managed configuration

## What approval controls

Think of approval as a confirmation prompt before a risky step.

For example, Codex should stop and ask you before:

- Writing to files
- Running commands that may change the system
- Accessing paths outside the project
- Reading or sending content over the network

A prompt for confirmation does not necessarily mean Codex made a mistake. Often it means that it is respecting a safety boundary.

## Common misunderstandings

### 1. Why does it sometimes act directly and sometimes ask me?

Different actions carry different risks.

- Reading an ordinary file is relatively low risk.
- Changing many files, accessing the network, or running commands can carry higher risk.

### 2. Should I always click Allow?

First check at least three things:

1. What does it intend to do?
2. Where will the action have an effect?
3. Is this an action you actually wanted?

### 3. Will rejecting a request ruin the whole task?

Usually not. You can reject it and ask Codex to continue in a safer way.

## A simple rule while working

- If you do not understand the request, do not approve it yet.
- Be especially careful with access outside the current project.
- Take another look before network use, command execution, or bulk file changes.
- If unsure, ask Codex why it needs that permission.

## Where each kind of guidance belongs

| Layer | What it explains | Where to read |
|---|---|---|
| Concept (this page) | Why approval is needed | — |
| Product differences | How each client asks for confirmation | [Product guides](/en/guide/) |
| Prompt strategy | How to state permission boundaries in a task | [Define constraints](/en/prompts/constraints-and-boundaries/) |

Official policies and defaults can change. Check [developers.openai.com/codex](https://developers.openai.com/codex).

Approval keeps the decision about what Codex may do in your hands.
