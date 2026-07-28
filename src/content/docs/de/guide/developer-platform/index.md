---
title: Entwicklerplattform
description: 'Codex mit SDK, nicht-interaktivem CLI und CI/CD in die Engineering-Landschaft einbetten — für Integrationsentwickler.'
sidebar:
  order: 50
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Die **Entwicklerplattform** richtet sich an alle, die Codex **produktisieren** und in Pipelines bringen wollen: eigene Apps, Batch-Reviews, Release-Gates, interne Entwicklerportale. Für den Alltag „einen Prompt schreiben und einen Bug fixen“ starten Sie bei [Erste Schritte](/guide/getting-started/).

Dieses Kapitel erklärt nicht den täglichen Umgang mit Codex, sondern wie Sie Codex in Ihre eigenen Systeme einbinden.

Es passt besonders zu diesen Szenarien:

- Aufgaben automatisch in CI ausführen
- Codex in Backend oder interne Tools einbinden
- Codex zum Teil der Team-Workflows machen

## Was diese Seite behandelt

- Grenze zwischen Entwicklerplattform und Endnutzer-Handbuch
- Typische Integrationsarchitektur
- Navigation und Roadmap dieses Kapitels

## Abgrenzung zum Produkthandbuch

| Leserfrage | Wohin |
|---|---|
| Wie starte ich `codex` im Terminal? | [CLI-Produkthandbuch](/guide/cli/) |
| Wie führe ich Reviews in CI per exec aus? | [Nicht-interaktiver Modus](/guide/cli/non-interactive-mode/) + CI in diesem Kapitel |
| Wie bette ich einen Agent in meine App ein? | [SDK-Überblick](/guide/developer-platform/sdk-overview/) |
| Berechtigungen und Sicherheitsmodell | [Muster für menschliche Freigabe](/cases/workflows/human-approval-patterns/) |

## Typische Architektur (Konzept)

```text
Entwicklersystem (CI / interne Plattform / SaaS)
        ↓ API oder CLI
Codex (Modell + Werkzeuge + Policy)
        ↓
Git-Anbieter / Tickets / Artifact-Store
```

## Designprinzipien

1. **Idempotenz und Wiederholbarkeit**: Mehrfache Reviews desselben PR sollten vergleichbar sein
2. **Least Privilege**: CI-Token nur lesend oder auf Repos beschränkt
3. **Beobachtbarkeit**: Prompt-Version, Modell und Diff-Artefakte behalten
4. **Mensch–Maschine-Teilung**: Automatischer Kommentar ≠ automatischer Merge

## Navigation in diesem Kapitel

| Thema | Seite |
|---|---|
| SDK | [SDK-Überblick](/guide/developer-platform/sdk-overview/) |
| Nicht-interaktiv | [codex exec](/guide/developer-platform/non-interactive/codex-exec/) · [Skripte und Pipelines](/guide/developer-platform/non-interactive/scripts-and-pipelines/) · [Strukturierte Ausgabe](/guide/developer-platform/non-interactive/structured-output/) · [Exit-Codes und Retries](/guide/developer-platform/non-interactive/exit-codes-and-retries/) |
| Webhooks | [Überblick](/guide/developer-platform/webhooks/overview/) |
| CI/CD | [Code-Review-Automatisierung](/guide/developer-platform/ci-cd/code-review-automation/) |

Weitere `codex-sdk/`, `app-server/`, `architecture-patterns/` siehe [Kapitelübersicht](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/chapter-outline.md).

## Häufige Missverständnisse

### 1. Muss ich dieses Kapitel lernen, um Codex wirklich zu können?

Wenn Sie Codex zunächst nur nutzen wollen, können Sie dieses Kapitel später lesen.

### 2. Wie verhält es sich zu CLI / App / IDE?

So lässt sich die Rolle einordnen:

- **App / CLI / IDE**: Einstiege, über die Sie oder Ihr Team Codex direkt nutzen
- **Entwicklerplattform**: Codex erneut in andere Systeme und Abläufe einbinden

### 3. Welche Seite lohnt sich beim ersten Lesen am meisten?

Für den Konzeptüberblick zuerst [SDK-Überblick](/guide/developer-platform/sdk-overview/) und das Verhältnis zum [Nicht-interaktiven Modus](/guide/cli/non-interactive-mode/).

Dieses Kapitel behandelt „wie man Codex in Systeme einbindet“. Für den ersten Einstieg in Codex bleiben die früheren Einsteigerseiten maßgeblich.

## Quellen
- Offizielle OpenAI-Codex-API-/SDK-Dokumentation
---

**Status:** verified  
**Anwendbare Produkte:** API / CLI / Cloud  
**Prüfgrundlage:** Gegen die aktuelle developer-platform-Struktur dieses Repos, Navigationseinträge und verwandte CLI-/CI-/SDK-Seiten abgeglichen; diese Seite beschreibt nur die stabile Arbeitsteilung „Entwicklerplattform für Engineering-Integration“, ohne konkrete Parameter oder Laufzeitverhalten zu behaupten.  
**Zuletzt geprüft:** 2026-07-26
