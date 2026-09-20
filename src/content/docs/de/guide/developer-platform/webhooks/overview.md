---
title: Grenzen von Webhooks und Aufgabeneignissen
description: Lokale Codex-Ergebnisse, App-Server-Ereignisse und selbst entworfene HTTP-Rückrufe unterscheiden.
contentType: reference
audiences: [developer]
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: Ausführungs- und Ereignismodell von SDK und App Server wurden geprüft. HTTP-Rückrufe sind eine Empfehlung für eine eigene Architektur; ein einheitlicher Codex-Cloud-Webhook-Vertrag wird nicht behauptet.
  evidence:
    - label: Offizielle SDK-Dokumentation
      href: https://learn.chatgpt.com/docs/codex-sdk
    - label: App-Server-Protokoll und -Ereignisse
      href: https://learn.chatgpt.com/docs/app-server
sidebar:
  order: 10
locale: de
source_locale: zh-CN
source_revision: 8a84ab8
translation_status: draft
translated_at: '2026-09-20'
---

Nach Abschluss einer Aufgabe kannst du ein internes System per Programm-Rückgabewert, Prozessstatus, Ereignisstream oder HTTP-Rückruf benachrichtigen. Bestimme zuerst Absender und Protokoll und entscheide dann, ob ein Webhook nötig ist.

## Drei Mechanismen nicht verwechseln

| Mechanismus | Empfang | Grenze |
|---|---|---|
| Lokale SDK-/CLI-Ausführung | Programmergebnis oder Prozessstatus | Keine gehostete HTTP-Rückruf-API |
| App-Server-Ereignisse | JSON-RPC-Benachrichtigungen in einer bestehenden Verbindung | Verbindung aufbauen, initialisieren und Nachrichten protokollgemäß verarbeiten |
| Rückruf des eigenen Runners | HTTP-Anfrage deines Dienstes | Ereignisnamen, Signaturen, Retries und Speicherung selbst festlegen |

`turn/completed` ist eine App-Server-Protokollbenachrichtigung; der Endstatus kann abgeschlossen, unterbrochen oder fehlgeschlagen sein. Prüfe Status und fachliches Ergebnis, bevor du allein wegen des Ereignisnamens eine Bereitstellung auslöst. Siehe die [offizielle Ereignisdokumentation](https://learn.chatgpt.com/docs/app-server).

Diese Seite hat weder einen einheitlichen Codex-Cloud-Endpunkt für Webhook-Registrierung noch Signatur-Header oder einen Vertrag für `task.completed` verifiziert. Deshalb werden keine URLs, Header oder Ereignistabellen als offizielle Schnittstelle dargestellt. Wenn dein konkretes Produkt Webhooks anbietet, verwende dessen versionierte Dokumentation.

## Wann ein eigener Rückruf sinnvoll ist

Eine einzelne CI-Aufgabe kann meist anhand ihres Exit-Status und der gespeicherten Ausgabe fortgesetzt werden. Allein das Wort „asynchron“ erfordert keinen öffentlichen Empfänger.

Wenn dein System Aufgaben prozessübergreifend plant und danach ein Ticket aktualisieren soll, kann die interne Kette so aussehen:

```text
Eigene Warteschlange → kontrollierter Runner mit SDK/CLI → Ergebnis und Status speichern
                                                     → eigener Benachrichtigungsdienst → internes Ticket
```

Dies ist eine Architektur-Empfehlung dieser Website und keine SDK-Bereitstellungsfunktion. Ausführungsort und Integrationsgrenzen beschreibt der [SDK-Überblick](/de/guide/developer-platform/sdk-overview/).

## Was ein eigenes Protokoll festlegen muss

- **Identität und Integrität:** Definiere die Prüfung des Absenders durch den Empfänger und nutze eine geprüfte Authentifizierung. Erfinde keinen „offiziellen Signatur-Header“.
- **Stabile IDs und Deduplizierung:** Protokolliere Aufgaben-ID, Ereignis-ID und Versuchszahl; doppelte Zustellung darf keine externen Wirkungen verdoppeln.
- **Status und Version:** Trenne Abschluss, Fehler, Unterbrechung und fachliche Abnahme; versioniere die Nutzdaten.
- **Dauerhafter Empfang:** Bestätige erst nach zuverlässiger Speicherung oder Einreihung. Fehler müssen wiederholbar sein; bestätige keinen Empfang und verliere anschließend das Ereignis.
- **Datenumfang:** Übertrage nur benötigte Zusammenfassungen und sichere Referenzen; protokolliere keine Zugangsdaten.
- **Stoppbedingungen:** Begrenze Retries und lege menschliche Übernahme sowie Rücknahme späterer Aktionen fest.

Diese Punkte sind noch zu implementierende und zu prüfende Entwurfsanforderungen, kein direkt ausführbares Beispiel. Die Seite verbindet nicht automatisch Ticketsysteme, sendet keine Nachrichten und erstellt keinen Deployment-Ablauf.

## Minimale Abnahmeszenarien

Teste mindestens Erfolg, Ausführungsfehler, Abbruch, Duplikate, falsche Identität und vorübergehende Unerreichbarkeit des Empfängers. Wiederholte Zustellung darf nur eine fachliche Wirkung haben; ein Abbruch darf nicht als Erfolg gelten, und ungeprüfte generierte Ergebnisse dürfen nicht direkt veröffentlicht werden.

Üben kannst du mit dem [Fall zur Issue-Sortierung](/de/cases/use-cases/team-automation/issue-triage-suggestions/) und der [geplanten Linkprüfung](/de/cases/use-cases/team-automation/scheduled-link-check/); der Materialstatus steht jeweils auf der zugehörigen Seite.
