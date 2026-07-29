---
title: Webhooks-Überblick
description: 'Per HTTP-Callback Codex-Aufgabenstatus in interne Systeme bringen — Ereignisse, Signatur und Idempotenz.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

**Webhooks** lassen Sie bei Statusänderungen von Codex- oder Cloud-Aufgaben HTTP-Callbacks an eigene Dienste senden — für Ticket-Updates, Slack-Benachrichtigungen oder interne Freigabe-UIs. Dieses Kapitel ist der Einstieg in Ereignisintegration der [Entwicklerplattform](/guide/developer-platform/).

## Was diese Seite behandelt

- Abwägung Webhook vs. SDK-Polling
- Typische Ereignisse und Payload-Felder (Konzept)
- Signaturprüfung, Replay und Idempotenz

## Zuerst verstehen, was passiert

Wenn Sie Webhooks zum ersten Mal sehen: Bei Statusänderung benachrichtigt Codex Ihr System aktiv — statt dass Sie ständig „schon fertig?“ abfragen.

Gut geeignet, wenn nach Aufgabenende weitere Systemaktionen anschließen sollen.

:::note
Webhook-Pfade, Ereignisnamen und Signaturalgorithmen richten sich nach der [offiziellen API-Dokumentation](https://developers.openai.com/codex).
:::

## Häufige Missverständnisse

### Webhook ist nicht die Standardantwort für jede Automatisierung

Für einen einmaligen `codex exec` reicht oft der Exit-Code — kein Webhook nötig.

Webhooks eignen sich eher für:

- Lange Aufgaben
- Mehrstufige Orchestrierung
- Nach Aufgabenende Benachrichtigung oder Ansteuerung anderer Systeme

### Ein Callback heißt nicht, dass man ihm blind vertrauen darf

Anfänger behandeln Webhooks oft als „offizielle Nachricht, also direkt nutzbar“.

Ohne Signaturprüfung, Idempotenz und Timeout-Handling riskieren Sie gefälschte Requests, Doppelzustellung oder Systemjitter.

## Wann Webhooks

| Geeignet | Weniger geeignet |
|---|---|
| Interne Systeme bei Aufgabenende benachrichtigen | Stark echtzeitiges Token-Streaming nötig |
| Anbindung an bestehende Event-Busse | Einfacher Cron braucht nur `exec`-Exit-Code |
| Mehrstufige Orchestrierung (fertig → Deploy) | Kein öffentlich erreichbarer Endpoint und keine Queue |

Einfache Pipelines reichen oft mit [Skripten und Pipelines](/guide/developer-platform/non-interactive/scripts-and-pipelines/); produktisierte Multi-Tenant-Dienste kombinieren oft **SDK + Webhook**.

## Typische Ereignisse (Konzept)

| Ereignis | Nutzen |
|---|---|
| `task.completed` | Ergebnis holen, PR-Status aktualisieren |
| `task.failed` | Alarm, Retry-Queue |
| `task.needs_approval` | An menschliche Freigabe-UI pushen |
| `review.posted` | Code-Review-Ergebnis synchronisieren |

Payload sollte enthalten: `task_id`, Status, Zeitstempel, Repo-/Projektkennung; **keine** vollständigen Prompts mit PII im Webhook-Body.

## Minimale Anforderungen am Empfänger

1. **HTTPS**-Endpoint, offizielle Signaturheader prüfen (z. B. `X-Signature` + HMAC)
2. **Idempotenz**: dieselbe `event_id` nur einmal verarbeiten
3. **Schnelles 2xx**: schwere Logik asynchron in die Queue
4. **Log-Redaktion**: keine Secrets und keine vollständigen Nutzereingaben loggen

Skizze (Pseudocode):

```python
def handle(request):
    verify_signature(request.headers, request.body)
    event = parse_json(request.body)
    if already_processed(event["id"]):
        return 200
    enqueue(process_codex_event, event)
    return 200
```

## Verhältnis zu CI

- `codex exec` in CI braucht meist **keinen** Webhook — Exit-Code reicht
- Lange Cloud-Aufgaben und mobile Freigaben eignen sich besser für Webhook-Push an interne Systeme

## Häufige Fehler

- Keine Signaturprüfung → gefälschte Callbacks
- Verarbeitung länger als Plattform-Timeout → Doppelzustellung
- Im Webhook-Handler synchron einen zweiten Codex-Lauf starten
- Webhook-URL im Client-Frontend exponieren

## Wie entscheiden, ob Sie Webhooks brauchen

Wenn unklar, fragen Sie:

1. Brauche ich aktive Benachrichtigung bei Statusänderungen?
2. Gibt es nach Aufgabenende einen systemweiten nächsten Schritt?
3. Habe ich bereits ein Backend, das HTTP-Callbacks sicher empfangen kann?

Je mehr „ja“, desto sinnvoller der Webhook.

## Sicherheitsgrenzen

- Siehe [Bedrohungsmodell](/guide/team-enterprise/security/threat-model/) und [Acceptable Use](/guide/team-enterprise/governance/acceptable-use/)
- Rotation des Webhook-Secrets in den Ops-Kalender aufnehmen

## Abnahme-Checkliste

- [ ] Signaturfehler → 4xx
- [ ] Idempotenz-Tabelle oder Dedupe-Key implementiert
- [ ] Asynchroner Worker und DLQ (Dead Letter) konfiguriert
- [ ] Feldkonventionen mit [Strukturierter Ausgabe](/guide/developer-platform/non-interactive/structured-output/) abgestimmt

Webhooks bringen Aufgabenstatus in andere Systeme — zuerst Signaturprüfung, Idempotenz und asynchrone Verarbeitung absichern.

## Quellen
- OpenAI Codex / Cloud API Event-Dokumentation
---

**Status:** verified  
**Anwendbare Produkte:** API / Cloud  
**Prüfgrundlage:** Gegen aktuelle öffentliche Hinweise der OpenAI Developers zu Entwicklerplattform und ereignisgesteuerter Integration sowie gegen geprüfte Webhooks-Gruppen-, CI/CD-, Strukturierte-Ausgabe- und Team-Sicherheitsseiten abgeglichen; diese Seite bestätigt nur das stabile Prinzip „Webhooks für Statusbenachrichtigung; Empfänger mit Signatur, Idempotenz und asynchroner Verarbeitung“.  
**Zuletzt geprüft:** 2026-07-26
