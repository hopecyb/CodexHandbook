---
title: Editor-Kontext
description: Wie die IDE-Erweiterung geöffnete Dateien, Workspace und Projektregeln an Codex übergibt.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

In der IDE liest Codex nicht nur deinen Prompt, sondern erhält automatisch **Editorzustand**. Das ist der Kernvorteil gegenüber der CLI. Wer versteht, woher Kontext kommt, vermeidet Frustration vom Typ „Datei ist offen, und es sieht sie trotzdem nicht“.

Codex in der IDE schaut nicht nur auf deine Worte, sondern auch darauf, was im Editor gerade sichtbar ist.

## Inhalt dieser Seite

- Welchen Kontext die IDE automatisch mitschickt
- Wie @-Dateien, Auswahl und AGENTS.md sich überlagern
- Wie Rauschen senken und Trefferquote erhöhen

## Empfohlener Workflow

1. **Repository über die Workspace-Wurzel öffnen**, nicht nur einen Unterordner (Monorepo-Ausnahmen laut Team-Doku)
2. Bei lokaler Logik **zuerst relevanten Code auswählen**, dann Aufgabe beschreiben → [Auswahl und geöffnete Dateien](/guide/ide/selected-code-and-open-files/)
3. Bei modulübergreifenden Aufgaben Dateien per `@` nennen — nicht annehmen „es findet sie schon“
4. Lange Sitzungen regelmäßig [Kontext komprimieren](/guide/context/compaction/) oder neuen Thread öffnen

## Unterschied zur CLI

| | IDE-Erweiterung | CLI |
|---|---|---|
| Dateiwahrnehmung | stark (offen = Kontext) | braucht `--cwd` und Werkzeuge zum Lesen |
| Auswahl | native Unterstützung | Einfügen oder Pfad angeben |
| Geeignet | Zeilenänderungen, Code erklären | Skripte, CI, Umgebungen ohne GUI |

## Häufige Fragen

### 1. Datei ist offen — warum ändert es trotzdem nicht wie gedacht?

„Datei offen“ heißt nicht „Schwerpunkt klar genug“.

Bei unklarem Aufgabenrahmen schaut es ggf. weiter auf andere Inhalte oder verfehlt den Ausschnitt, der dich interessiert.

### 2. Je mehr Dateien offen, desto besser?

Zu viele irrelevante Dateien machen den Kontext laut und verdünnen den Fokus.

### 3. Automatischer Kontext — muss ich dann weniger klar schreiben?

Automatischer Kontext hilft, ersetzt aber keine Aufgabenbeschreibung.  
Ziel, Grenzen und Fertigkriterien musst du trotzdem sagen.

IDE-Kontext hilft, rät aber nicht für dich; je präziser der Dateirahmen, desto stabiler meist das Ergebnis.

## Sensible Informationen

`.env` mit Geheimnissen nicht dauerhaft im Vordergrund offen lassen; siehe [Sensibler Kontext](/guide/context/sensitive-context/).

Logs und Kundendaten vor dem Einfügen anonymisieren; die IDE entscheidet Compliance nicht für dich.

## Häufige Fehler

- Im Einzeldateimodus (ohne Workspace) `AGENTS.md` erwarten
- Dutzende irrelevante große Dateien öffnen und das Kontextfenster füllen
- Nur „diese Funktion“ sagen, ohne Auswahl und ohne @-Datei

## Abnahmeliste

- [ ] Workspace-Wurzel korrekt
- [ ] 1–3 aufgabenrelevante Dateien geöffnet oder @
- [ ] Testbefehle in `AGENTS.md` stimmen mit IDE-Terminal überein

## Quellen
- [Datei- und Ordner-Kontext](/guide/context/file-and-folder-context/)
---

**Status:** verified  
**Anwendbare Produkte:** IDE  
**Prüfgrundlage:** OpenAI Help Center führt die IDE-Erweiterung weiterhin als Hauptzugang mit lokalen Werkzeugen; diese Seite nimmt keine konkreten Editor-Buttons an, sondern fasst die stabile Methode zusammen: Workspace, geöffnete Dateien, Auswahl, `@`-Dateien und Projektregeln bilden gemeinsam den IDE-Kontext.  
**Zuletzt geprüft:** 2026-07-26
