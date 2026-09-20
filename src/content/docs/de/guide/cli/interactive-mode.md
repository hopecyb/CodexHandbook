---
title: Interaktiver Modus
description: Im Terminal mit Codex sprechen und Aufgaben ausführen.
locale: de
source_locale: zh-CN
source_revision: 822e8f7
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 20
---

„Interaktiver Modus“ heißt: Du redest im Terminal hin und her mit Codex — es erklärt, führt aus und wartet bei Bedarf auf deine Bestätigung.

Das ist eine der gängigen CLI-Nutzungen.

Nach Start der interaktiven Sitzung:

1. Im Projektverzeichnis starten (oder Arbeitsverzeichnis laut Dokumentation setzen)
2. Prompts in derselben Qualität wie in der App eingeben
3. Bei Aufforderung Werkzeugaufrufe freigeben / ablehnen
4. Mit `/`-artigen Shortcuts (falls vorhanden) die Sitzung steuern — laut aktueller CLI-Hilfe

Prompt-Methoden gelten weiter: [Prompts](/de/prompts/)

## Aufgaben, für die der interaktive Modus passt

Der interaktive Modus eignet sich besonders für Arbeit, bei der du unterwegs Entscheidungen triffst:

| Aufgabensituation | Warum Interaktion hilft |
|---|---|
| Anforderungen noch nicht vollständig geklärt | Du kannst sie während der Arbeit präzisieren |
| Vor dem nächsten Schritt muss ein Diff geprüft werden | Du kannst schrittweise genehmigen oder den Umfang eingrenzen |
| Ein Workflow wird im Projekt erstmals ausprobiert | Du siehst leichter, was Codex liest und ändert |
| Berechtigungen, externe Tools oder Dateischreibvorgänge sind beteiligt | Ein Mensch kann an wichtigen Punkten eingreifen |

Wenn die Aufgabe so stabil ist, dass keine Rückfragen mehr nötig sind, ziehe den [nicht interaktiven Modus](/de/guide/cli/non-interactive-mode/) oder Automatisierung in Betracht.

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
