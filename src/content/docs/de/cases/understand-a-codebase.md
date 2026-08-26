---
title: Eine Codebasis verstehen
description: Unbekannte Repositories nur lesend erkunden und eine handlungsfähige mentale Karte aufbauen.
locale: de
source_locale: zh-CN
source_revision: cb227a1
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Eine Codebasis verstehen

## Metadaten

| Feld | Inhalt |
|---|---|
| Zielgruppe | Entwickler |
| Client | CLI / IDE |
| Geschätzte Dauer | 30–60 Minuten |

## 1. Ziel und Kontext

**Ziel:** Vor Änderungen Modulgrenzen, Einstiegspunkte und Risikobereiche klären.

**Erfolgskriterien:** Du kannst anderen den Hauptpfad «von Request zu Response» oder «von Befehl zu Ausgabe» erklären.

## 2. Empfohlener Prompt

```text
Ändere vorerst keinen Code. Lies @src/ und @README und erkläre in höchstens 8 Punkten:
1. Zweck des Projekts und Tech-Stack
2. Aufgaben der wichtigsten Verzeichnisse
3. Start-/Test-Einstiegspunkte
4. Die 3 Dateien, die für 【mein Ziel】 am relevantesten sind
5. 3 Fragen, die ich bestätigen soll
```

## 3. Überprüfung

- Gegen die tatsächliche `package.json` / Einstiegsdateien stichprobenartig prüfen
- Schlussfolgerungen in ein Issue oder eine `AGENTS.md`-Zusammenfassung schreiben

## 4. Verwandt

- [Verstehen-Vorlage](/de/prompts/templates/understand/)
- [Erkunden—Planen—Ausführen—Überprüfen](/de/cases/workflows/explore-plan-execute-verify/)
---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Die aktuellen Codex-Use-Cases bei OpenAI Developers enthalten weiterhin „Understand large codebases“; Fokus ist das Verfolgen des Hauptpfads, das Erkennen zentraler Module und das schnelle Finden relevanter Dateien. Das Beispiel auf dieser Seite ist ein nur lesendes Erkundungsszenario und entspricht der aktuellen offiziellen Positionierung.  
**Zuletzt geprüft:** 2026-07-26
