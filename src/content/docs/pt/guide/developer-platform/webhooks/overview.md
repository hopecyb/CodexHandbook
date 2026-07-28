---
title: Webhooks Overview
description: Connect Codex task state to internal systems via HTTP callbacks—events, signatures, and idempotency.
locale: pt
source_locale: en
source_revision: d96d87e
translation_status: fallback
translated_at: '2026-07-28'
---

**Webhooks** let Codex or Cloud send HTTP callbacks when task state changes—driving ticket updates, Slack notifications, or internal approval UIs. This chapter is the event-integration entry for the [developer platform](/guide/developer-platform/).

## What this page covers

- Webhooks vs polling with the SDK
- Common events and payload fields (conceptual)
- Signature verification, replay, and idempotency

## What it does

If webhooks are new: when task state changes, Codex notifies your system instead of you polling “is it done yet?”

Best when something else must happen after a task ends.

:::note
Webhook paths, event names, and signature algorithms follow [official API docs](https://developers.openai.com/codex).
:::

## Common misconceptions

### Webhooks are not the default for all automation

For a single `codex exec`, exit codes are usually enough—no webhook needed.

Webhooks fit better:

- Long tasks
- Multi-step orchestration
- Notifying or driving other systems when done

### Receiving a callback does not mean trust it

Without signature verification, idempotency, and timeout handling, you risk forged requests, duplicate delivery, or instability.

## When to use webhooks

| Fits | Does not fit |
|---|---|
| Task-complete notifications to internal systems | Strong real-time token streaming |
| Integration with existing event buses | Simple cron that only needs `exec` exit codes |
| Multi-step flows (complete → trigger deploy) | No public endpoint and no queue |

Simple pipelines: [Scripts and pipelines](/guide/developer-platform/non-interactive/scripts-and-pipelines/) only. Productized multi-tenant services often combine **SDK + Webhook**.

## Typical events (conceptual)

| Event | Use |
|---|---|
| `task.completed` | Fetch results, update PR status |
| `task.failed` | Alert, retry queue |
| `task.needs_approval` | Push to human approval UI |
| `review.posted` | Sync code review conclusions |

Payload should include: `task_id`, status, timestamp, repo/project id; **avoid** full prompts in webhook body if they contain PII.

## Minimum receiver requirements

1. **HTTPS** endpoint; verify official signature header (e.g. `X-Signature` + HMAC)
2. **Idempotency**: process each `event_id` once
3. **Fast 2xx**: heavy logic in async queue
4. **Log redaction**: no keys or full user input

Sketch (pseudocode):

```python
def handle(request):
    verify_signature(request.headers, request.body)
    event = parse_json(request.body)
    if already_processed(event["id"]):
        return 200
    enqueue(process_codex_event, event)
    return 200
```

## Relationship to CI

- In-CI `codex exec` usually **does not** need webhooks—exit codes suffice
- Cloud long tasks and mobile approval scenarios fit webhooks to internal systems

## Common mistakes

- No signature verification; forged callbacks
- Handler exceeds platform timeout → duplicate delivery
- Synchronous second Codex run inside webhook handler
- Webhook URL exposed in client frontend

## How to decide

Ask:

1. Do I need proactive notification on task state changes?
2. After a task ends, is there a system-level next step to automate?
3. Do I have a backend that can safely receive HTTP callbacks?

More “yes” answers → webhooks matter more.

## Security boundaries

- See [Threat model](/guide/team-enterprise/security/threat-model/) and [Acceptable use](/guide/team-enterprise/governance/acceptable-use/)
- Rotate webhook secrets on an ops calendar

## Acceptance checklist

- [ ] Signature failure returns 4xx
- [ ] Idempotency table or dedupe key implemented
- [ ] Async worker and DLQ configured
- [ ] Aligned with [structured output](/guide/developer-platform/non-interactive/structured-output/) field conventions

Webhooks connect task state changes to other systems—after signature verification, idempotency, and async handling are in place.

## Reference sources

- OpenAI Codex / Cloud API event documentation
- KimYx0207 integration chapter

---

**Status:** verified  
**Products:** API / Cloud  
**Verification basis:** Cross-checked against OpenAI Developers’ public developer-platform and event-driven integration guidance, plus verified Webhooks section, CI/CD, structured output, and team security pages in this handbook; confirms stable principles: webhooks for status notification, receivers must verify signatures, enforce idempotency, and process asynchronously.  
**Last verified:** 2026-07-26
