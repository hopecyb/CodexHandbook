---
title: Den richtigen Mechanismus wählen
description: "Temporärer Prompt, AGENTS.md, Erinnerung, Skill, MCP — wohin gehört welche Schicht; ein Entscheidungsrahmen."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

Viele Teamprobleme entstehen, weil **dieselbe Information am falschen Ort** landet: Repo-Regeln landen im Chat, Skill-taugliche Abläufe in `AGENTS.md`, und Daten, die nur lesend angebunden werden sollten, bekommen ein hochprivilegiertes MCP.

Hier geht es um eine praktische Frage:

> Wenn Sie merken „das wird wiederkehren“, auf welche Schicht soll es wandern?

## Kurztabelle

| Mechanismus | Am besten geeignet für |
|---|---|
| Einmal-Prompt | Ziel, Constraints und Abnahmekriterien nur für diese Aufgabe |
| `AGENTS.md` | Repo-weite Kollaborationsregeln und langfristige Constraints |
| Erinnerung | Persönliche Vorlieben oder wenige nicht-sensible, sessionübergreifende Fakten |
| Skill | Wiederverwendbare Workflows, Checklisten, Spezialroutinen |
| MCP | Zugriff auf externe Werkzeuge, Datenquellen und Systemfähigkeiten |

Reicht die Tabelle nicht, lesen Sie weiter.

## Fünf-Schritte-Entscheidung

### 1. Information gilt nur für die aktuelle Aufgabe

Solche Informationen gehören zuerst in den **aktuellen Prompt**.

Geeignet:

- „Diesmal nur `docs/` ändern, keinen Code anfassen“
- „Deutsche Zusammenfassung ausgeben, am Ende eine offene Frage“
- „Zuerst Ursachen analysieren, Dateien nicht sofort ändern“

Nicht geeignet:

- Das Team verlangt langfristig `pnpm test`
- Verzeichnisse, die im Repo nicht geändert werden dürfen
- Jede PR-Prüfung folgt derselben Ausgabevorlage

Solche langfristigen Regeln sollten weiter „absinken“.

### 2. Projekt-Kollaborationsregel oder persönliche Gewohnheit?

Geht es um **Regeln, die alle Mitwirkenden kennen sollten**, gehört das in [`AGENTS.md`](/guide/customization/agents-md/what-is-agents-md/).

Zum Beispiel:

- Test-, Lint- und Build-Befehle
- Welche Verzeichnisse unantastbar sind
- Commit-Message- oder PR-Abnahmeregeln
- Spezialnormen in Monorepo-Unterverzeichnissen

Geht es nur um **Ihre Vorlieben** — etwa „Erklärung auf Deutsch“, „zuerst Fazit, dann Details“ — passen [Erinnerung](/guide/customization/memories-and-persistent-context/) oder persönliche Konfiguration besser.

Faustregel:

- Was in die PR-Review gehört → bevorzugt ins Repo
- Was andere nicht sehen müssen → erst dann die persönliche Schicht erwägen

### 3. „Regel“ oder „Schritte“?

Viele Dokumente funktionieren schlecht, weil Regeln und Schritte vermischt sind.

| Wenn es … ist | Besser geeignet |
|---|---|
| „Nicht direkt nach main pushen“ | `AGENTS.md` |
| „Bei Review zuerst Tests, dann Risiken, dann Regression“ | Skill |
| „Vor dem Release diese 4 Befehle“ | Skill oder Skript |
| „Nur Lesezugriff auf Issue-Daten“ | MCP + Berechtigungskonfiguration |

Zuerst diese beiden Punkte greifen:

- **Regeln** beantworten „was darf / was darf nicht“
- **Schritte** beantworten „wie macht man so etwas üblicherweise“

Wiederverwendbare Schritte eignen sich meist besser als [Skill](/skills/overview/).

## Häufige Kombinationen statt Entweder-oder

Reife Teams nutzen selten nur einen Mechanismus — sie kombinieren.

### Kombination 1: `AGENTS.md` + Skill

Geeignet: Code-Review, Release-Checks, Incident-Triage.

Aufteilung:

- `AGENTS.md` schreibt harte Constraints: kein Auto-Merge, welche Checks Pflicht sind
- Skill schreibt den Ablauf: wie prüfen, nach welchem Template ausgeben, wie Probleme einstufen

### Kombination 2: Skill + MCP

Geeignet: Tickets lesen, Datenbank abfragen, Designs holen, Wochenberichte erzeugen.

Aufteilung:

- Skill definiert Reihenfolge und Ausgabeformat
- MCP liefert „wohin verbinden, was lesen, was ändern“

Getrennt denken:

> Skill ist die Arbeitsanweisung, MCP der angeschlossene Werkzeugkasten.

### Kombination 3: `AGENTS.md` + Erinnerung

Geeignet: Teamregeln sind stabil, Ausdrucksgewohnheiten unterscheiden sich.

Aufteilung:

- `AGENTS.md` schreibt gemeinsame Teamnormen
- Erinnerung hält persönliche Vorlieben: Sprache, Erklärstil, Standard-Ausgabe struktur

Nicht umkehren. Teamregeln dürfen nicht nur in einer privaten Erinnerung leben.

## Praktischere Entscheidungsmatrix

| Frage | Ja | Nein |
|---|---|---|
| Betrifft nur die aktuelle Aufgabe? | Prompt | Weiter prüfen |
| Sollen alle das einhalten? | `AGENTS.md` / Projektkonfiguration | Weiter prüfen |
| Wiederholbarer Ablauf? | Skill | Weiter prüfen |
| Braucht Live-Daten oder externe Aktionen? | MCP | Weiter prüfen |
| Nur langfristige persönliche Vorliebe? | Erinnerung / Benutzerkonfiguration | Prompt |

Landet eine Anforderung in beiden Spalten, heißt das meist: **Schichten trennen**, nicht alles an einem Ort stopfen.

## Drei typische Beispiele

### Beispiel 1: Das Team vergisst Regressionstests

Nicht nur im Chat „bitte Tests laufen lassen“ sagen.

Stabiler:

1. In `AGENTS.md` festschreiben: „Bei Geschäftslogik-Änderungen `pnpm test` ausführen“
2. Bei komplexem Ablauf einen Test-Skill ergänzen
3. CI als letzte Absicherung

### Beispiel 2: Bei jeder PR-Review soll Codex dasselbe Format ausgeben

Nicht jedes Mal die ganze Vorlage einfügen.

Stabiler:

1. Ausgabe struktur als Skill
2. In der `description` klarstellen: „bei review, Prüfung, Pre-Merge-Check verwenden“
3. Bei Team-Standard den Skill-Pfad in die Projektdoku aufnehmen

### Beispiel 3: Linear-Ticket lesen und dann Code ändern

Keine API-Token in den Chat kleben.

Stabiler:

1. Linear per MCP anbinden
2. Standard: nur Lese-Berechtigung
3. Für feste Abläufe per Skill: „zuerst Ticket, dann Code, dann Vorschlag“

## Typische Fallen

### `AGENTS.md` zur Enzyklopädie machen

Harte Constraints verschwinden; wichtige Befehle und Tabuzonen gehen unter. `AGENTS.md` sollte kurz, hart und ausführbar sein.

### Skill als „Universalschublade“

Ein Skill für Review, Release, Debug und Tagesbericht zugleich — schwer auszulösen und schwer zu pflegen.

### MCP als Standardantwort

Was direkt aus dem Repo lesbar ist, braucht kein externes Werkzeug „der Eleganz wegen“. MCP erweitert Fähigkeiten — es ist kein Komplexitätspreis.

### Erinnerung als Träger von Teamfakten

Wer es auf dem Konto speichert, verliert die Regel beim Weggang oder Gerätewechsel. Solche Informationen gehören zurück ins Repo.

## Empfohlene Einführungsreihenfolge

Wenn das Team noch unordentlich ist, so konvergieren:

1. Zuerst eine minimal nutzbare `AGENTS.md`
2. Abläufe, die dreimal wiederkehren, zu Skills verdichten
3. MCP nur bei echtem Bedarf an externe Systeme
4. Zuletzt persönliche Erinnerungen und Vorlieben sortieren

So stabilisieren Sie zuerst den **Kollaborationskonsens**, dann erweitern Sie Fähigkeiten.

## Weiterlesen

- [Was ist AGENTS.md](/guide/customization/agents-md/what-is-agents-md/)
- [Erinnerungen und persistenter Kontext](/guide/customization/memories-and-persistent-context/)
- [Skills-Überblick](/skills/overview/)
- [MCP-Überblick](/skills/mcp/mcp-overview/)
- [Erweiterungsmethode wählen](/skills/choosing-an-extension-method/)

## Quellen
- Offizielle OpenAI-Codex-Dokumentation (jeweils aktuelle Version)
---

**Status:** verified  
**Gilt für:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen die bereits verifizierten Kapitel zu `AGENTS.md`, Kontext, Skills, MCP und Qualität; diese Seite behält nur den stabilen Entscheidungsrahmen „temporäre Anforderungen, Projektregeln, persönliche Vorlieben, Ablaufkapselung und externe Fähigkeiten gehören in Schichten“.  
**Zuletzt geprüft:** 2026-07-26
