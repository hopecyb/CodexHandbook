---
title: Interaktiver Modus
description: Im Terminal mit Codex sprechen und Aufgaben ausführen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


„Interaktiver Modus“ heißt: Du redest im Terminal hin und her mit Codex — es erklärt, führt aus und wartet bei Bedarf auf deine Bestätigung.

Das ist eine der gängigen CLI-Nutzungen.

Nach Start der interaktiven Sitzung:

1. Im Projektverzeichnis starten (oder Arbeitsverzeichnis laut Dokumentation setzen)
2. Prompts in derselben Qualität wie in der App eingeben
3. Bei Aufforderung Werkzeugaufrufe freigeben / ablehnen
4. Mit `/`-artigen Shortcuts (falls vorhanden) die Sitzung steuern — laut aktueller CLI-Hilfe

Prompt-Methoden gelten weiter: [Prompts](/prompts/)

## Häufige Missverständnisse

### 1. Im Terminal darf der Prompt schludriger sein?

Nein.

Der Einstieg ist Terminal — Aufgabenqualität bleibt gleich wichtig.  
Ziel, Einschränkungen und Fertigkriterien: je klarer, desto stabiler.

### 2. Warum „im Projektverzeichnis starten“ betonen?

Weil die CLI wissen muss, in welchem Projekt sie arbeitet.  
Falsches Verzeichnis → oft:

- relevante Dateien unsichtbar
- Änderungen im falschen Ordner
- Projektregeln unlesbar

### 3. Es fragt im Terminal nach Freigabe — ist das ein Fehler?

Oft heißt das: Es arbeitet entlang der Berechtigungsgrenzen, nicht „abnormal“.

## Einfaches Szenario für den ersten Einsatz

Kleine erste Aufgabe:

- im Projektwurzelverzeichnis starten
- nur eine Datei ändern
- danach erklären lassen, was geändert wurde

CLI-Interaktivmodus = dialogischer Aufgabenfluss im Terminal. Verzeichnis stimmen, Prompt klar halten.


---

**Status:** verified  
**Anwendbare Produkte:** CLI  
**Prüfgrundlage:** Aktuelle OpenAI-Help-Center-CLI-Einstiegsdokumentation beschreibt weiterhin: Codex im Terminal starten, im Gespräch ausführen, Operationen bei Bedarf freigeben; diese Seite skizziert nur die Grundform und erste Tipps — ohne feste Shortcut-Listen.  
**Zuletzt geprüft:** 2026-07-26
