---
title: "Thread, Aufgabe und Projekt"
description: "Klärt die Beziehung zwischen Sitzung, Aufgabe und Projekt-Arbeitsbereich."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 60
---

Produkte können Wörter leicht unterschiedlich nutzen. In diesem Handbook gilt einheitlich:

- **Projekt / Arbeitsbereich**: Ordner oder Repo-Wurzel, an die Codex gebunden ist
- **Thread / Sitzung**: Ein durchgängiges Gespräch — Kontext sammelt sich an
- **Aufgabe**: Eine Arbeit mit klarem Ziel (kann mehrere Werkzeugaufrufe umfassen)

Viele vermischen diese Wörter. Typische Folgen:

- Warum erinnert es sich an frühere Aussagen?
- Warum folgt es trotz neuem Thema noch der alten Richtung?
- Warum empfiehlt man im „selben Projekt“ trotzdem einen neuen Thread?

Das Projekt entscheidet, wo es arbeitet; der Thread, welchem Gespräch es folgt; die Aufgabe, was du diesmal willst. Diese drei Schichten zu trennen macht Nutzungsmuster deutlich klarer.

## Die drei Schichten zuerst trennen

- **Projekt / Arbeitsbereich**: In welches Repo oder welchen Ordner du es bringst
- **Thread / Sitzung**: Das aktuelle durchgängige Chat-Gespräch
- **Aufgabe**: Ein konkretes Ziel innerhalb dieses Gesprächs

Im selben Projekt kann es viele Threads geben.  
Im selben Thread können mehrere Aufgaben gelaufen sein.  
Probleme entstehen oft hier: Die Aufgabe hat gewechselt, der Thread trägt noch alten Kontext.

## Praxistipps

- Bei Themenwechsel **neuen Thread** — alter Kontext stört sonst
- Lange Aufgaben mit Phasen und Checkpoints: [Prompts für lange Aufgaben](/prompts/long-running-tasks/)
- Über Sitzungen hinweg weiterarbeiten: Übergabe-Zusammenfassung in [Übergabe und Fortsetzen](/guide/agent-work/handoff-and-resume/)

## Häufige Missverständnisse

### 1. Im selben Repo immer denselben Thread?

Nicht unbedingt.  
Unverändertes Repo heißt nicht unveränderte Aufgabe.  
Wechselt das Thema, kann der alte Thread Rauschen mitbringen.

### 2. Neuer Thread = allen Kontext verlieren?

Das ist nicht nur schlecht.  
Oft brauchst du genau „irrelevanten Kontext loswerden“ und nur das Behalten, was zur aktuellen Aufgabe gehört.

### 3. Aufgabe und Thread sind dasselbe?

Nein.  
Der Thread ist ein Behälter; die Aufgabe ist konkrete Arbeit darin.

Das Projekt entscheidet, wo es arbeitet; der Thread, welche Historie es mitträgt; die Aufgabe, was diesmal fertig werden soll.

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Überprüfungsgrundlage:** Diese Seite erklärt nur die dreischichtige Beziehung von Projekt, Thread und Aufgabe; interne Links und Konzeptformulierungen wurden geprüft, und der Text hängt nicht von schnell veränderlichen Produktdetails ab.  
**Zuletzt überprüft:** 2026-07-26
