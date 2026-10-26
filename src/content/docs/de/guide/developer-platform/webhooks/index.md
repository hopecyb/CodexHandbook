---
legacyVerification:
  status: "verified"
  products: "API / Cloud"
  basis: "Gegen die aktuelle Webhooks-Unterstruktur und Einstiegslinks abgeglichen; diese Seite beschreibt nur die Rolle „Ereignis-Trigger“ in der Integration, ohne Ereignisfelder oder Implementierungsdetails als festen Vertrag zu setzen."
  checkedAt: "2026-07-26"
title: Webhooks
description: 'Erläuterungsseite zur ereignisgesteuerten Integration: Webhooks empfangen Benachrichtigungen und ersetzen keine Workflow-Gestaltung.'
locale: de
source_locale: zh-CN
source_revision: "68cb29b"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
---

Das Wort `Webhook` klingt abstrakt.
Einfach gesagt: Wenn etwas passiert, schickt das System dir aktiv eine Benachrichtigung.

In Codex-Integrationen löst es „ein externes Ereignis ist da — wie starte ich den Folgeprozess?“.

## Einstieg in diese Gruppe

- [Grenzen von Webhooks und Aufgabenereignissen](/de/guide/developer-platform/webhooks/overview/): Unterscheide lokale Ausführungsergebnisse, App-Server-Ereignisse und eigene HTTP-Rückrufe. Dieser Abschnitt bietet keinen ungeprüften einheitlichen Cloud-Webhook-Vertrag.

## Inhalt dieser Gruppe

- Wie externe Systeme Ereignisse an dich senden
- Wie der Folgeprozess nach dem Ereignis anschließt
- Warum ein Webhook nur Trigger ist, keine vollständige Automatisierung

Ein Webhook ist eher die Türklingel: „Es ist etwas passiert.“ Was danach passiert, musst du selbst gestalten.
