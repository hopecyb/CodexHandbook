---
title: SDK-Überblick
description: 'Über das offizielle SDK Codex-Aufgaben in Anwendungen starten — Konzepte zu Authentifizierung, Sitzungen und Fehlerbehandlung.'
locale: de
source_locale: zh-CN
source_revision: a701e2d
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

Das SDK (Name und Sprachen gemäß [offizieller Dokumentation](https://developers.openai.com/codex)) lässt Sie in **eigenen Diensten** Aufgaben erstellen, Status pollen und Ergebnisse abrufen — ohne nur auf die Terminal-TUI angewiesen zu sein.

Wenn Sie „SDK“ zum ersten Mal sehen: Es ist ein Entwicklerwerkzeug, mit dem Programme Codex aufrufen — keine Oberfläche zum Durchklicken für Menschen.

Es eignet sich also eher dafür, dass **Ihr System** Codex aufruft. Für eine einmalige Aufgabe brauchen Sie in der Regel kein SDK.

## Was diese Seite behandelt

- Wann SDK statt CLI `exec`
- Authentifizierung und Mandantentrennung
- Zusammenspiel mit Webhook und Queues

Plattformüberblick: [Entwicklerplattform](/de/guide/developer-platform/)

## SDK vs CLI

| | SDK | CLI `exec` |
|---|---|---|
| Integrationsort | Backend-Dienste, interne Tools | Shell, GitHub Actions |
| Statusverwaltung | Ihr Code | Prozess-Exit-Code |
| Geeignet für | Multi-Tenant-Produkte, Custom-UI | Einfache Pipelines |

Viele Teams nutzen **CLI in CI und SDK im Produkt**.

## Häufige Missverständnisse

### 1. Worin unterscheiden sich SDK und CLI?

Grob:

- **CLI**: Mensch oder Skript ruft im Terminal auf
- **SDK**: Sie schreiben Code und betten Codex-Fähigkeiten in eigene Dienste ein

### 2. Sollte ich zuerst das SDK lernen?

Meist nein.

Wenn Sie Codex zuerst nutzen wollen, eignen sich lokale Einstiege und der interaktive CLI-Modus besser als erster Schritt.

### 3. Wann lohnt sich das SDK?

Zum Beispiel, wenn Sie:

- Codex-Aufgaben aus dem eigenen Produkt starten wollen
- Aufgabenstatus und Ergebnisse selbst verwalten wollen
- Custom-UI, Berechtigungen und Abläufe brauchen

Das SDK passt zu „System an System anbinden“, nicht als Haupteinstieg für den ersten Codex-Kontakt.

## Kernkonzepte (sprachunabhängig)

1. **Authentifizierung**: Organisations-API-Key oder OAuth-Delegation — Least Scope
2. **Aufgabe / Thread**: Eine Nutzeranfrage entspricht einer nachverfolgbaren ID
3. **Werkzeugstrategie**: Server legt Sandbox und Freigabe fest, konsistent mit dem Client
4. **Ergebnis**: Nachrichtenverlauf, Datei-Diff, Artifact-URL (je nach API)
5. **Fehler**: Wiederholbar (429) vs. nicht wiederholbar (400) unterscheiden

Fehlerindex: [Fehler- und Hinweisreferenz](/de/guide/reference/error-reference/)

## Minimale Integrations-Checkliste

- [ ] In Staging mit Read-only-Repo testen
- [ ] Logs anonymisieren; vollständige Nutzer-Prompts mit PII nicht speichern
- [ ] Timeout und Abbruch: Aufgabe beenden können, wenn Nutzer die Seite verlassen
- [ ] SDK- und Modell-IDs versioniert fixieren

## Anbindung an CI/CD

Das SDK triggert Cloud oder Remote-Runner, oder CI ruft Ihren Dienst zurück, um den PR-Status zu aktualisieren. Beispielmuster: [Code-Review-Automatisierung](/de/guide/developer-platform/ci-cd/code-review-automation/).

## Häufige Fehler

- Session-Cookies aus dem Browser als API-Schlüssel verwenden
- Ohne Concurrency-Limits Quoten bei Traffic-Spitzen ausreizen
- Vom SDK erzeugte PRs automatisch mergen

## Quellen
- OpenAI Codex SDK Reference
---

**Status:** verified  
**Anwendbare Produkte:** API  
**Prüfgrundlage:** Gegen aktuelle öffentliche Hinweise der OpenAI Developers zu Codex-API/Modellen und Entwicklerplattform-Anwendungsfällen sowie gegen geprüfte Kapitel zu Entwicklerplattform, CI/CD und Nicht-interaktivem Modus abgeglichen; diese Seite bestätigt nur die stabile Arbeitsteilung „SDK für programmatische Integration, Statusverwaltung und Custom-UI“.  
**Zuletzt geprüft:** 2026-07-26
