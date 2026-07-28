---
title: Eine Präsentation erstellen
description: Fallbeispiel zur Artefakt-Erzeugung von der Gliederung bis zur vorführbaren Folienpräsentation.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Eine Präsentation erstellen

## Metadaten

| Feld | Inhalt |
|---|---|
| Zielgruppe | Autoren |
| Client | App |
| Geschätzte Dauer | 1–2 Stunden |

## 1. Ziel und Kontext

**Ziel:** Aus einem Thema eine klar strukturierte Präsentation erzeugen (Markdown/HTML/PPT usw., je nach Umgebungsfähigkeiten).

**Erfolgskriterien:** Seitenzahl stimmt mit der Gliederung überein, jede Seite hat klar vortragbare Punkte, keine erfundenen Daten.

## 2. Empfohlener Prompt

```text
Thema: 【Präsentationsthema】
Zielgruppe: 【Hintergrund der Zuhörer】
Dauer: 【Minuten】
Gib zuerst Kapitel sowie pro Seite Titel + 3 Stichpunkte; erzeuge noch keine Enddatei.
Nach Bestätigung Ausgabe nach slides/, Format: 【mdx/html/pptx】.
Einschränkungen: Daten mit Quelle kennzeichnen oder als «Beispiel» markieren; keine ausgehenden Netzwerkanfragen ohne Freigabe.
```

## 3. Überprüfung

- Jede Seite darauf prüfen, ob sie in einer Minute vortragbar ist
- Quellen von Diagrammen und Zahlen abgleichen

## 4. Verwandt

- [Präsentationsfähigkeiten](/guide/files-and-artifacts/presentations/)
---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Die aktuellen Codex-Use-Cases bei OpenAI Developers enthalten weiterhin „Generate slide decks“ und beschreiben die Arbeit mit pptx-Dateien sowie Bildgenerierung zur automatischen Folienherstellung. Der Inhalt dieser Seite bleibt auf der stabilen Workflow-Ebene „zuerst Gliederung, dann Ausgabe je nach Umgebung, Zahlen immer mit Quelle oder als Beispiel kennzeichnen“.  
**Zuletzt geprüft:** 2026-07-26
