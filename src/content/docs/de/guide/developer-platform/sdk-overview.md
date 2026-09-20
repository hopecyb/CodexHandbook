---
title: 'SDK-Überblick: lokale Aufgaben und Client-Integration'
description: Codex SDK, nichtinteraktive CLI, App Server und einen selbst betriebenen entfernten Aufgabendienst unterscheiden.
contentType: reference
audiences: [developer]
level: intermediate
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: Ausführungsort, Thread-Schnittstellen und Integrationsgrenzen wurden mit der offiziellen SDK- und App-Server-Dokumentation abgeglichen. Das Minimalbeispiel wurde nur syntaktisch geprüft; ein authentifizierter Modellaufruf fand nicht statt.
  evidence:
    - label: Offizielle Codex-SDK-Dokumentation
      href: https://learn.chatgpt.com/docs/codex-sdk
    - label: Offizielle Codex-App-Server-Dokumentation
      href: https://learn.chatgpt.com/docs/app-server
sidebar:
  order: 10
locale: de
source_locale: zh-CN
source_revision: e888ae6
translation_status: draft
translated_at: '2026-09-20'
---

Das Codex SDK lässt ein Programm einen lokalen Codex Agent steuern. „Lokal“ bezeichnet den Rechner, auf dem SDK und Agent laufen: deinen Computer oder einen von dir verwalteten CI-Runner. Das SDK ist nicht automatisch ein gehosteter HTTP-Dienst, der Cloud-Aufgaben erstellt, abfragt und Artefakte herunterladen lässt. Siehe die [offizielle SDK-Dokumentation](https://learn.chatgpt.com/docs/codex-sdk).

## Einstieg nach Integrationsziel wählen

| Ziel | Einstieg | Deine Verantwortung |
|---|---|---|
| Eine Aufgabe im Skript ausführen | [`codex exec`](/de/guide/developer-platform/non-interactive/codex-exec/) | Arbeitsverzeichnis, Eingaben, Exit-Status und Ablage der Ergebnisse |
| Aufgaben programmgesteuert ausführen und fortsetzen | Codex SDK | Programmlaufzeit, Umgebung, Fehlerbehandlung und Prüfung |
| Client mit Sitzungen, Genehmigungen und Ereignisstream bauen | App Server | Client-Interaktion, Verbindung, Identität und Bereitstellung |
| Entfernte Mehrbenutzer-Aufgabenplattform anbieten | Eigene Dienstarchitektur | Warteschlange, Mandantentrennung, Zugangsdaten, Speicher, Abbruch und Rückrufe |

Die letzte Zeile ist eine Architekturentscheidung, keine gehostete SDK-Funktion. Die offizielle Dokumentation sieht das SDK für Automatisierung und CI vor und App Server für tiefe Client-Integration. App Server tauscht Anfragen und Ereignisse über bidirektionales JSON-RPC aus. Siehe die [App-Server-Dokumentation](https://learn.chatgpt.com/docs/app-server).

## Minimaler Aufruf des TypeScript-SDK

Das offizielle TypeScript-Paket heißt `@openai/codex-sdk` und benötigt Node.js 18 oder neuer. Das folgende Beispiel zeigt die grundlegende Schnittstelle desselben Pakets mit JavaScript-Modulsyntax; es ist kein vollständiger Produktionsdienst.

Installiere die Abhängigkeit in einem eigenen Übungsverzeichnis und bewahre die tatsächlich aufgelöste Version samt Lockfile auf:

```sh
npm init -y
npm install --save-exact @openai/codex-sdk
npm ls @openai/codex-sdk
```

Erstelle eine `README.md` ohne sensible Informationen und speichere Folgendes als `example.mjs`:

```js
import { Codex } from '@openai/codex-sdk';

const agent = new Codex();
const session = agent.startThread();
const answer = await session.run(
  'Lies nur die README.md im aktuellen Verzeichnis und fasse den Zweck in drei chinesischen Punkten zusammen; ändere keine Dateien und führe keine externen Aktionen aus.'
);
console.log(answer.finalResponse);
```

Führe dann `node example.mjs` aus. Zuvor sind die Authentifizierung für deine Umgebung und die tatsächlichen Sandbox- und Genehmigungseinstellungen zu prüfen. „Nur lesen“ im Prompt ist eine Aufgabenbeschränkung und ersetzt nicht die Grenzen der Laufzeitumgebung. Modellaufrufe können Kontingent verbrauchen; diese Seite hat Installation und Aufruf nicht für dich ausgeführt.

Methodennamen und Rückgabefelder wurden mit dem [offiziellen Beispiel](https://learn.chatgpt.com/docs/codex-sdk) abgeglichen. Diese Website hat lediglich die JavaScript-Syntax geprüft, keine bestimmte SDK-Version festgeschrieben und tatsächlich getestet und keine erfundene Erfolgsausgabe bereitgestellt. Bei eigener Reproduktion protokolliere Paketversion, CLI/Runtime, System, Authentifizierungsart ohne Geheimnisse und Ergebnis.

## Aufgaben fortsetzen und wiederaufnehmen

Auf demselben Thread-Objekt kann `run()` erneut aufgerufen werden; mit einer vorhandenen Thread-ID lässt sich `resumeThread()` verwenden. Welche Threads wiederaufgenommen werden können, hängt von der Umgebung ab, die den Zustand speichert. Eine ID ist keine Cloud-URL, die beliebige Rechner abfragen können. Die offizielle Python-Schnittstelle existiert ebenfalls; prüfe Namen und Abhängigkeiten in ihrem eigenen Kapitel und mische den Code der Sprachen nicht. Siehe [Thread-Aufrufe und Sprachschnittstellen](https://learn.chatgpt.com/docs/codex-sdk).

Prüfe nach dem Fortsetzen zuerst, ob vorhandene Dateien zur Beschreibung im Verlauf passen. Siehe [Übergabe und Wiederaufnahme](/de/guide/agent-work/handoff-and-resume/).

## Nach einem erfolgreichen Aufruf prüfen

1. **Ausführungsort:** Arbeitsverzeichnis und tatsächlich gelesene oder geänderte Dateien festhalten, nicht nur den Prompt.
2. **Ergebnis:** Antwort, Dateiänderungen und Tests prüfen. `finalResponse` bedeutet nicht, dass die fachliche Abnahme bestanden wurde.
3. **Fehlerart:** lokale Abhängigkeits- oder Prozessfehler, Authentifizierung, Modelldienst und Aufgabenprüfung unterscheiden; nicht jeden Fehler auf 400/429 reduzieren.
4. **Folgen eines erneuten Versuchs:** vor dem Retry prüfen, ob bereits Dateien oder externe Wirkungen entstanden sind; dieselbe Anfrage nicht blind wiederholen.
5. **Berechtigungen:** Laufzeitumgebung und verfügbare Werkzeuge liegen in deiner Verantwortung. Der SDK-Name verspricht keine automatische Cloud-Funktion, Organisationsverwaltung oder Mandantentrennung.

Das sind Integrationsprüfungen dieser Website, keine Liste der SDK-Rückgabefelder. Maßgeblich sind die Typen deiner installierten Version und die offizielle Dokumentation.

## Verhältnis zu Rückrufen, Warteschlangen und Remote-Ausführung

Ein eigener Runner kann das SDK ausführen und dein Dienst anschließend eine Fertigmeldung senden. Warteschlangenstatus, HTTP-Rückruf, Signaturformat und Retry-Regeln gehören dann zu deinem eigenen Protokoll. Der App-Server-Ereignisstream ist keine Webhook-Adresse.

Lies weiter über [Webhooks und Aufgabeneignisse](/de/guide/developer-platform/webhooks/overview/) und [Skripte und Pipelines](/de/guide/developer-platform/non-interactive/scripts-and-pipelines/). Diese Seite verspricht nicht, dass ein SDK-Aufruf automatisch Codex-Cloud-Aufgaben, Artefakt-URLs oder OAuth-Delegation erstellt.
