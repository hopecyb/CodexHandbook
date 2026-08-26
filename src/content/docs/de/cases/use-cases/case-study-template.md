---
title: Fallvorlage
description: Einheitliche Struktur zum Schreiben und Retrospektieren von Codex-Fällen — erleichtert Team-Verstetigung und Vergleich.
locale: de
source_locale: zh-CN
source_revision: a430fba
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Diese Vorlage kopieren, um eine neue Fallseite oder ein internes Retro-Dokument anzulegen.

Vor dem Kopieren Abschnitte streichen, die für Leser und Liefergegenstand irrelevant sind.

---

## Metadaten

| Feld | Ausfüllen |
|---|---|
| Falltitel | |
| Zielgruppe | Einsteiger / Entwickler / Autoren / Teams |
| Client | App / CLI / IDE / Cloud |
| Geschätzte Dauer | |
| Prüfdatum | YYYY-MM-DD |

## 1. Ziel und Kontext

- **Geschäftsziel:** Ein Satz
- **Erfolgskriterien:** beobachtbar, überprüfbar
- **Außerhalb des Umfangs:** klare Ausschlüsse

## 2. Vorbereitung

- Account / Berechtigungen / Repository-Status
- Benötigte Kontext-Dateien (`AGENTS.md`, Designs usw.)
- Risiken: Daten, Produktion, Secrets

## 3. Workflow (EPXV)

### Erkunden

- Eingabe-Prompt (Zusammenfassung)
- Zentrale Erkenntnisse

### Planen

- Schrittliste
- Menschliche Bestätigungspunkte

### Ausführen

- Tatsächlicher Änderungsumfang
- Abweichungen vom Plan und Gründe

### Überprüfen

- Automatische Tests
- Manuelle Prüfung
- Evidenz (Screenshots, Logs, Links)

## 4. Fehler und Wiederherstellung

- Welche Probleme auftraten
- Wie rückgängig gemacht oder korrigiert
- Was am Prompt/Config beim nächsten Mal anders wäre

## 5. Verstetigen

- Ob in `AGENTS.md` / Skill / Automation geschrieben
- 3 Empfehlungen an das Team

## 6. Referenzquellen
- Links zu offiziellen Docs
- Ob dieser Fall externe Tutorials nur als Aufgabentyp adaptiert
---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen die bereits geprüften EPXV-Workflows, Fehlerwiederherstellung, Projektanweisungen und Fallbibliotheksstruktur. Diese Seite liefert nur die einheitliche Vorlage zum Schreiben und Retrospektieren von Fällen und behauptet kein konkretes Produktverhalten.  
**Zuletzt geprüft:** 2026-07-26
