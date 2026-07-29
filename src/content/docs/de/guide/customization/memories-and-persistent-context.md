---
title: Erinnerungen und persistenter Kontext
description: "Wie Codex Vorlieben und Fakten über Sessions merkt: Fähigkeiten, Grenzen und Teamnormen."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 20
---

Einige Codex-Clients unterstützen **Erinnerung (Memory)**: Vorlieben oder Fakten, die Sie in mehreren Runden bestätigt haben, bleiben für spätere Sessions. Das ergänzt `AGENTS.md` und Projektkonfiguration, **ersetzt** aber keine versionierten Teamnormen.

## Inhalt

- Was Erinnerung speichern soll — und was nicht
- Priorität gegenüber AGENTS.md, Memories-Feature und Projektanweisungen
- Wie Einzelpersonen und Teams Erinnerungsinhalte verwalten

## Wofür Erinnerung gut ist

Erinnerung heißt: **Codex merkt sich, was Sie sonst immer wieder sagen müssten, ohne es jedes Mal neu zu erklären.**

Zum Beispiel:

- Erklärungen auf Deutsch
- zuerst Fazit, dann Details
- in einem Projekt meint „Backend“ standardmäßig welches Verzeichnis

Das ist eher „persönliche langfristige Vorliebe und wenige stabile Fakten“ — keine Projektanleitung und kein Geheimtresor.

## Was Erinnerung speichern darf

| Geeignet | Nicht geeignet |
|---|---|
| Persönliche Coding-Vorlieben (Kommentar-Sprache, Einrückung) | Produktionsgeheimnisse, Token |
| Wiederholt erklärte Projekt-Aliase („Backend = `services/api`“) | Wechselnder Sprint-Status |
| Nicht-sensible Fakten, die Sie ausdrücklich „bitte merken“ sagen | Teamnormen, die in Git gehören |

Teamnormen gehören in **`AGENTS.md` oder Projektkonfiguration**, damit Review und Onboarding funktionieren. Siehe [Geltungsbereich und Priorität](/guide/customization/agents-md/scope-and-precedence/).

## Häufige Missverständnisse

### Erinnerung merkt sich nicht „alles für immer“

Viele denken: einmal gesagt, merkt Codex es fortan vollständig und stabil.

Genauer: Erinnerung ist eine Hilfsschicht gegen Wiederholung — kein Ersatz für Dokumentation und formelle Repo-Informationen.

### Erinnerung trägt keinen Teamkonsens

Kennt nur Ihre Kontenerinnerung eine Regel, sehen andere sie nicht und können sie nicht reviewen.

Solche Inhalte gehören zurück nach:

- `AGENTS.md`
- Projektdokumentation
- Konfigurationsdateien

### Erinnerung ist kein Ort für sensible Daten

Auch wenn ein Client Erinnerung bietet, sollten Sie nicht langfristig speichern lassen:

- Token
- Kundendaten
- interne Konten
- unveröffentlichte Geschäftsinformationen

## Vergleich verwandter Mechanismen

| Mechanismus | Sichtbar für | Änderung |
|---|---|---|
| Einmal-Prompt | Aktuelle Aufgabe | Sie tippen |
| Erinnerung | Typischerweise nur Ihr Konto/Arbeitsbereich | Bestätigung im Dialog oder Einstellungsseite |
| `AGENTS.md` | Alle Repo-Mitwirkenden | Git-PR |
| Projektkonfiguration | Nach Config-Schicht | Datei + Managed Policy |

## Empfohlene Nutzung

1. **Zuerst ins Repo schreiben**: Testbefehle, Verzeichnisstruktur, Push-Verbote — nicht nur in Erinnerung
2. **Erinnerung für persönliche Vorlieben**: z. B. „Erklärung auf Deutsch“, „Diff-Kommentare auf Englisch“
3. **Regelmäßig bereinigen**: nach großen Architekturwechseln veraltete Erinnerungen löschen
4. **Sensible Projekte**: Erinnerung deaktivieren oder einschränken, Querkontext-Lecks vermeiden

## Ob etwas in Erinnerung gehört

Unsicher? Fragen Sie:

1. Ist das eine persönliche Vorliebe, die ich oft wiederhole?
2. Ist das kurzfristig relativ stabil?
3. Stört es die Teamkollaboration, wenn andere es nicht sehen?

Nähern sich alle drei Antworten „ja“, passt Erinnerung eher.

## Sicherheitsgrenzen

- Erinnerung darf kein **Geheimkanal** sein, um Verbote aus `AGENTS.md` zu umgehen
- Keine Kundendaten, Credentials oder unveröffentlichte Finanzdaten in Erinnerung
- Unternehmensumgebungen können Erinnerung deaktivieren — Managed Policy einhalten

## Häufige Fehler

- „Epic-Liste dieser Woche“ nur in Erinnerung — Mitwirkende sehen nichts
- Konflikt zwischen Erinnerung und `AGENTS.md`, ohne eine Seite zu aktualisieren
- Annehmen, Erinnerung bedeute „das Modell kennt das ganze Repo für immer“

Erinnerung eignet sich am besten für „persönliche Vorlieben und wenige stabile Fakten, die man sonst wiederholt“ — nicht als Ersatz für Repo-Doku, Teamregeln und Geheimnisverwaltung.

## Quellen
- OpenAI-Codex-Memory-Dokumentation (versionabhängig)
---

**Status:** verified  
**Gilt für:** App / CLI (versionsabhängig)  
**Prüfgrundlage:** Kreuzgeprüft gegen aktuelle OpenAI-Help-Center-Hinweise zu ChatGPT Memory sowie verifizierte Kapitel zu Projektanweisungen, persönlichen Vorlieben und Sicherheitsgrenzen; Inhalt beschränkt auf das stabile Prinzip „Erinnerung für persönliche Vorlieben und wenige stabile Fakten — kein Ersatz für Repo-Regeln und Geheimnisverwaltung“.  
**Zuletzt geprüft:** 2026-07-26
