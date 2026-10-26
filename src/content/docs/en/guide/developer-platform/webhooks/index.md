---
legacyVerification:
  status: "verified"
  products: "API / Cloud"
  basis: "Cross-checked against current webhooks subsection structure and entry links in this repo; this page only describes webhooks as event triggers in integration, without fixing event fields or implementation contracts."
  checkedAt: "2026-07-26"
title: Webhooks
description: Event-driven integration—webhooks receive notifications; they do not replace workflow design.
locale: en
source_locale: zh-CN
source_revision: '68cb29b'
translation_status: reviewed
translated_at: 2026-07-26
reviewed_at: "2026-10-25"
---

“Webhook” sounds abstract.  
Simply: when something happens, a system actively notifies you.

In Codex integration, it answers “when an external event arrives, how do we trigger what comes next?”

## Section entry

- [Webhooks and task event boundaries](/en/guide/developer-platform/webhooks/overview/): distinguish local execution results, App Server events, and custom HTTP callbacks. This section does not provide an unverified, unified Cloud webhook contract.

## What this section covers

- How external systems push events to you
- What to wire after an event arrives
- Why a webhook is only a trigger, not a full automation design

A webhook is like a doorbell—it says “something happened”; you still connect the workflow.
