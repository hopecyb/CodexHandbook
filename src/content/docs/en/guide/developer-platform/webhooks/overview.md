---
title: Webhooks and Task Event Boundaries
description: Distinguish local Codex results, App Server events, and HTTP callbacks that you design yourself.
contentType: reference
audiences: [developer]
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: The execution and event models of the SDK and App Server were checked. The HTTP callback section is guidance for a custom architecture; it does not claim a unified Codex Cloud webhook contract exists.
  evidence:
    - label: Official SDK documentation
      href: https://learn.chatgpt.com/docs/codex-sdk
    - label: App Server protocol and events
      href: https://learn.chatgpt.com/docs/app-server
sidebar:
  order: 10
locale: en
source_locale: zh-CN
translation_status: reviewed
reviewed_at: "2026-10-25"
translated_at: 2026-09-20
source_revision: '8a84ab8'
---

You can notify an internal system after a task ends through a program return value, process exit status, event stream, or HTTP callback. Identify the sender and protocol first, then decide whether you need a webhook.

## Do not conflate these three mechanisms

| Mechanism | How results are received | Boundary |
|---|---|---|
| Local SDK or CLI execution | Program result or process status | Not a hosted HTTP callback API |
| App Server events | JSON-RPC notifications over an established connection | Connect, initialize, and handle messages according to the protocol |
| Callback from your own runner | An HTTP request sent by your service | You define event names, signatures, retries, and storage |

App Server's `turn/completed` is a protocol notification. The final status may be completed, interrupted, or failed. Check the status and business result before triggering a deployment based on the event name alone. See the [official event documentation](https://learn.chatgpt.com/docs/app-server).

This page has not verified a unified Codex Cloud webhook registration endpoint, signature header, or `task.completed` event contract. It therefore provides no URL, header, or event table presented as an official interface. If a specific product you use offers webhooks, integrate against that product's versioned documentation.

## When a custom callback is useful

A single CI task can usually continue from its exit status and saved output. It needs no public receiver merely because it is “asynchronous.”

If your system schedules work across processes and updates a ticket when a task ends, you can design an internal flow like this:

```text
Your queue → controlled runner executes SDK/CLI → saves result and status
                                               → your notification service → internal ticket
```

This is a handbook architecture suggestion, not a deployment feature built into the SDK. For its runtime and integration boundary, see the [SDK overview](/en/guide/developer-platform/sdk-overview/).

## What a custom protocol must define

- **Identity and integrity:** Specify how the receiver authenticates the sender using a reviewed scheme; do not invent an “official signature header.”
- **Stable IDs and deduplication:** Record the task ID, event ID, and attempt number so a repeated delivery does not repeat an external effect.
- **Status and version:** Distinguish execution completion, failure, interruption, and business acceptance; record the payload version.
- **Durable receipt:** Acknowledge only after the event is reliably stored or queued. Retry failures instead of returning success and then losing the event.
- **Data scope:** Send only the result summary and safe references needed downstream; keep credentials out of logs.
- **Stop conditions:** Set a retry limit, a human takeover path, and a way to cancel subsequent actions.

These are design requirements to implement and verify, not a runnable example. This page does not connect a ticket system, send messages, or create a deployment workflow automatically.

## Minimum acceptance scenarios

In a test environment, check successful results, execution failure, cancellation, duplicate events, invalid identity, and a temporarily unavailable receiver. Verify that repeated delivery causes only one business effect, cancellation is not treated as success, and an unaccepted generated result is not published automatically.

For concrete exercises, start with the [issue triage case](/en/cases/use-cases/team-automation/issue-triage-suggestions/) and [scheduled link check](/en/cases/use-cases/team-automation/scheduled-link-check/). Check each page for the status of its materials.
