---
title: Agent-Arbeit
description: "Codex wie einen kollaborativen Ausführenden führen — nicht wie eine Einmal-Antwortmaschine."
sidebar:
  order: 31
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Agent-Arbeit fragt: Wie bringt man eine Aufgabe in einen **überprüfbaren Fertigzustand**? Wann zuerst planen, wann Subaufgaben splitten, wann mittendrin korrigieren, wann übergeben und fortsetzen — das behandelt dieses Kapitel.

Es geht um Kollaborationsweise, nicht um ein einzelnes Feature.

Viele Aufgaben scheitern nicht am Aussprechen der Anforderung, sondern daran, sie bis „wirklich fertig und prüfbar“ zu bringen.

## Worum es geht

- Komplexe Aufgaben zu einem Plan verdichten
- Bei Drift unterwegs klein korrigieren
- Welche Teilprobleme an Subagents
- Lange Aufgaben unterbrechen, übergeben und fortsetzen

## Empfohlene Lesereihenfolge

1. [Planung](/guide/agent-work/planning/)
2. [Fortschritt und Steuerung](/guide/agent-work/progress-and-steering/)
3. [Subagents](/guide/agent-work/subagents/)
4. [Übergabe und Fortsetzen](/guide/agent-work/handoff-and-resume/)

## Ein üblicher Rahmen

Agent-Arbeit als vier zusammenhängende Aktionen:

```text
Zuerst verstehen → dann planen → während der Ausführung korrigieren → zuletzt übergeben/abschließen
```

Fehlt ein Zwischenschritt, typische Folgen:

- Ohne Verständnis: falsche Richtung
- Ohne Plan: Umfang außer Kontrolle mittendrin
- Ohne Korrektur: immer weiter daneben
- Ohne Übergabe: nach Abbruch weiß niemand, wo man steht

## Häufige Missverständnisse

### 1. Agent-Arbeit = Prompt länger schreiben

Nicht genug.

Prompt ist Start; Qualität hängt auch an:

- Plan vorhanden?
- Korrektur unterwegs?
- Komplexe Teile gesplittet?
- Zustand zum Weitermachen hinterlassen?

### 2. Richtung ändern unterwegs = alles umsonst

Oft ist „während der Ausführung einengen“ normal — nicht so tun, als sei beim ersten Mal alles perfekt gesagt.

### 3. Mehr Subagents = immer effizienter

Nicht immer.

Ohne klare Grenzen verwirrten mehr Subaufgaben den Hauptthread.

## Bezug zu anderen Kapiteln

- Vollständiger Hauptworkflow: [Explore—Plan—Execute—Verify](/cases/workflows/explore-plan-execute-verify/)
- Aufgabe klar formulieren: [Prompts](/prompts/)
- Kontext managen: [Kontext](/guide/context/)
- Mehrere Personen/Aufgaben parallel: [Parallele Agents](/guide/desktop-app/parallel-agents/) und [Multi-Agent-Kollaboration](/cases/workflows/multi-agent-coordination/)

## Minimalen Ablauf zuerst

Nur das Nötigste:

1. Aufgabe klar sagen
2. Bei Komplexität zuerst Plan verlangen
3. Unterwegs anhand Ergebnissen klein korrigieren
4. Vor dem Ende überprüfbares Ergebnis verlangen

Wenn diese 4 Schritte sitzen, fallen Subagents und Übergabe natürlicher.

Agent-Arbeit misst, ob die Aufgabe in Planung, Ausführung, Korrektur und Abschluss kontinuierlich in die richtige Richtung geht.

## Häufige Fallen

- Agent wie Suchfeld: ein vages Ziel
- „Umformulierung unterwegs“ = alles neu starten
- Lange Aufgabe ohne Übergabe-Artefakt
- Subaufgaben ohne Grenzen — Hauptthread chaotischer

## Quellen
- Offizielle OpenAI-Codex-Hinweise zu Aufgabenkollaboration und Ausführung
---

**Status:** verified  
**Gilt für:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen verifizierte Kapitel zu Planung, Kontext, Überprüfung und Multi-Task-Kollaboration; nur stabile Kollaborationsprinzipien — keine Client-UI oder Einstiege als langfristigen Vertrag.  
**Zuletzt geprüft:** 2026-07-26
