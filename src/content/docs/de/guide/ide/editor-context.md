---
title: Editor-Kontext
description: So übergibt die IDE-Erweiterung geöffnete Dateien, Workspace und Projektregeln an Codex.
sidebar:
  order: 30
locale: de
source_locale: zh-CN
source_revision: b6d208f
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

In einer IDE liest Codex nicht nur deinen Prompt, sondern erhält automatisch den **Editor-Zustand**. Das ist der zentrale Vorteil der IDE gegenüber der CLI. Wenn du weißt, woher der Kontext stammt, vermeidest du die Frustration, dass eine scheinbar sichtbare Datei nicht berücksichtigt wird.

Codex beachtet in der IDE neben deiner Nachricht auch die Inhalte, die du gerade im Editor ansiehst.

## Inhalt dieser Seite

- Welchen Kontext die IDE automatisch beifügt
- Wie er mit @-Dateien, Auswahl und AGENTS.md zusammenwirkt
- Wie du Rauschen reduzierst und die Treffergenauigkeit erhöhst

## Empfohlener Workflow

1. **Öffne das Repository über den Workspace-Stamm**, nicht nur einen Unterordner; Ausnahmen für Monorepos stehen in der Teamdokumentation.
2. Wenn du lokale Logik änderst, **markiere zuerst den relevanten Code** und beschreibe dann die Aufgabe → [Auswahl und geöffnete Dateien](/de/guide/ide/selected-code-and-open-files/).
3. Nenne bei modulübergreifenden Aufgaben wichtige Dateien mit `@`, statt anzunehmen, dass Codex sie selbstständig findet.
4. [Komprimiere den Kontext](/de/guide/context/compaction/) in langen Sitzungen regelmäßig oder starte einen neuen Thread.

## Unterschied zur CLI

| | IDE-Erweiterung | CLI |
|---|---|---|
| Dateierkennung | Stark; geöffnete Dateien werden Kontext | Verzeichnis mit `--cd` / `-C` und Dateien über Werkzeuge lesen |
| Auswahl | Nativ unterstützt | Einfügen oder Pfad angeben |
| Geeignet für | Änderungen auf Zeilenebene und Codeerklärungen | Skripte, CI und Umgebungen ohne GUI |

## Häufige Fragen

### 1. Weshalb wurde die geöffnete Datei nicht wie gewünscht geändert?

„Datei geöffnet“ bedeutet nicht automatisch, dass der Schwerpunkt eindeutig genug ist.

Bleibt der Aufgabenbereich unklar, kann Codex weitere verwandte Inhalte untersuchen oder den für dich entscheidenden Abschnitt übersehen.

### 2. Sind mehr geöffnete Dateien immer besser?

Zu viele irrelevante Dateien machen den Kontext unübersichtlich und verwässern den Schwerpunkt.

### 3. Ersetzt automatischer IDE-Kontext eine genaue Aufgabenbeschreibung?

Automatischer Kontext hilft, ersetzt aber keine Aufgabenbeschreibung.
Ziel, Einschränkungen und Fertigstellungskriterien musst du weiterhin selbst eindeutig formulieren.

IDE-Kontext unterstützt dich, kann deine Absicht aber nicht erraten. Je genauer der Dateibereich ist, desto stabiler ist normalerweise das Ergebnis.

## Vertrauliche Informationen

Lass eine `.env` mit Zugangsdaten nicht dauerhaft im Vordergrund des Editors geöffnet. Siehe [Vertraulicher Kontext](/de/guide/context/sensitive-context/).

Entferne vertrauliche Informationen aus Protokollen und Kundendaten, bevor du sie einfügst. Eine IDE trifft keine automatische Compliance-Entscheidung für dich.

## Häufige Fehler

- Im Einzeldateimodus ohne Workspace erwarten, dass `AGENTS.md` gelesen wird
- Mehr als ein Dutzend große irrelevante Dateien öffnen und das Kontextfenster belegen
- Nur „diese Funktion“ schreiben, ohne sie auszuwählen oder die Datei mit @ zu nennen

## Abnahmecheckliste

- [ ] Der Workspace-Stamm ist korrekt
- [ ] Die 1–3 aufgabenrelevanten Dateien sind geöffnet oder mit @ angegeben
- [ ] Die Testbefehle aus `AGENTS.md` entsprechen denen im IDE-Terminal

## Quellen
- [Datei- und Ordnerkontext](/de/guide/context/file-and-folder-context/)
---

**Status:** verified  
**Unterstützte Produkte:** IDE  
**Prüfgrundlage:** Das OpenAI Help Center führt die IDE-Erweiterung weiterhin als einen wichtigen Einstieg in Verbindung mit lokalen Werkzeugen. Diese Seite setzt keine bestimmte Schaltfläche voraus, sondern beschreibt die stabile Methodik, nach der Workspace, geöffnete Dateien, Auswahl, `@`-Dateien und Projektregeln gemeinsam den IDE-Kontext bilden.  
**Zuletzt geprüft:** 2026-07-26
