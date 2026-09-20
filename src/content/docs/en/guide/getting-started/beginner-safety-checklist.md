---
legacyVerification:
  status: verified
  products: App / CLI / IDE
  basis: Cross-checked against this handbook's verified chapters on approvals, sandbox and network access, result inspection, and undo and recovery. This page covers prerequisites and low-risk practice for first use rather than details of a particular product interface.
  checkedAt: '2026-07-26'
title: Beginner Safety Checklist
description: Safety checks to make before using Codex for the first time.
sidebar:
  order: 120
locale: en
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 75bfe4d
---

Before using Codex for the first time, ask: “If it makes a mistake, will the cost be too high?” This checklist helps lower the stakes of that first task.

Check these before starting:

- [ ] I am using a disposable practice directory, not a production repository.
- [ ] The directory contains no real keys, passwords, or private customer data.
- [ ] I understand that high-risk actions may require my approval.
- [ ] I will not approve a command or network request I cannot understand.
- [ ] I plan to inspect the diff before accepting the result.
- [ ] I know how to [undo changes](/en/guide/getting-started/undo-and-recover/).

For background, see [Permissions and Approvals](/en/guide/foundations/permissions-and-approvals/) and [Sandbox and Network](/en/guide/foundations/sandbox-and-network/).

## Common misconceptions

### 1. Is this checklist only for unusually cautious people?

It is for people using Codex for the first time. On a first attempt, it is easy to overestimate how much you will understand.

### 2. Is avoiding obviously dangerous commands enough?

More common first-time problems include choosing the wrong project, including sensitive files, failing to inspect the diff, and having no way to undo changes.

### 3. Can I learn as I go without checking anything beforehand?

You can learn while using it, but going through these few items first makes the first task steadier.

Keep the cost of mistakes low on your first Codex task; later work will be easier.
