---
title: Planung
description: "Zuerst Schritte, Risiken und Überprüfung klären lassen — dann entscheiden, ob ausgeführt wird."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Bei „fang einfach an zu ändern“ passiert oft:

- falsche Route
- zu großer Umfang
- Risiken nicht vorab sichtbar
- Überprüfung unzureichend

Planung holt „wie ich vorgehen will“ zuerst zur Ansicht.

Sinn der Planung: „Ich dachte, du machst X“ wird zu einem **reviewbaren Zwischenartefakt**. Bei komplexen Aufgaben genehmigen Sie einen Ausführungspfad — nicht nur einen Start-Button.

## Was „zuerst Plan“ bestätigt

Zwei Dinge:

- Ob das Ziel wirklich verstanden wurde
- Ob Sie die vorgeschlagene Route tragen wollen

## Was ein brauchbarer Plan mindestens enthält

| Element | Rolle |
|---|---|
| Schritte | Reihenfolge, kein Blindstart |
| Betroffene Dateien oder Umfang | Wirkungsfläche vorab |
| Risiken und offene Punkte | Annahme nicht als Fakt |
| Überprüfung | „Fertig“ beweisbar |

Nur „ändere A, dann B“ ohne Risiko und Überprüfung ist eher Todo-Liste als echter Plan.

## Häufige Fallen

### 1. Plan = Schritte auflisten?

Brauchbare Pläne sagen auch:

- Welche Dateien/Bereiche
- Wo Unsicherheit
- Wie Fertigstellung bewiesen wird

### 2. Kleine Aufgaben brauchen nie Planung?

Nicht absolut. Auch bei kleinen Änderungen, wenn:

- Repo unbekannt
- Freigabe/Berechtigungen involviert
- Drift schwer rückholbar

Trotzdem kurz stoppen und erklären lassen.

### 3. Plan zuerst = nur Formalität?

Nur wenn Sie nicht reviewen. Schauen Sie Umfang, Risiko und Überprüfung — dann entdecken Sie Abweichungen früher und sparen Nacharbeit.

## Wann Planung Pflicht

- Mehrere Dateien oder Module
- Unvertrautes Repo
- Menschliche Freigabe vor Ausführung
- Mögliche Online- oder Teamregel-Wirkung
- Gefühl: „wenn das daneben geht, schwer aufräumen“

Kleine Copy-Änderungen brauchen keinen Formalplan; mittelgroße und große Aufgaben besser zuerst stoppen.

## Unsicher? So entscheiden

Fragen Sie:

> **Wenn es jetzt direkt startet und danebenliegt — kann ich das schwer aufräumen?**

Antwort „ja“ → zuerst Plan.

## Empfohlene Plananfrage

Zuerst Plan, nicht Start:

```text
Noch keine Dateien ändern. Bitte Plan auf Basis des aktuellen Repos mit:
1. Zielverständnis
2. Nummerierte Schritte
3. Betroffene Dateien
4. Risiken oder offene Punkte
5. Überprüfung je Schritt
```

Ausführlicher: [Zuerst einen Plan verlangen](/prompts/ask-for-a-plan/).

## Was Sie reviewen

Nicht nur „klingt richtig“, sondern:

1. Echtes Ziel verstanden?
2. Wirkungsbereich vernünftig?
3. Offensichtliche Vorchecks übersprungen?
4. Überprüfung reicht zum Beweis?

Viele Nacharbeiten kommen von genehmigten unscharfen Plänen.

Plan zuerst klärt Route und Risiko vor Dateiänderungen — günstiger.

## Feedback zum Plan

Nicht den ganzen Plan umschreiben — Abweichungen zeigen:

```text
Schritt 1 behalten; Refactor in Schritt 2 noch nicht.
DB-Änderung als eigenen Schritt.
Rollback bei Fehlschlag ergänzen.
Nur lesen/analysieren, noch keine Umsetzung.
```

„Kleine Kurskorrektur“ ist meist effizienter als „alles neu“.

## Grenze Plan vs. Ausführung

Wichtige Kollaborationsgewohnheit:

- **Planphase**: explorieren, Optionen, Unsicherheit sichtbar machen
- **Ausführungsphase**: bestätigten Pfad vorantreiben

Ändern sich Prämissen unterwegs → zurück zur Planung, nicht durchbrechen. Siehe [Fortschritt und Steuerung](/guide/agent-work/progress-and-steering/).

## Häufige Fehler

- Plan ohne Überprüfung
- Ohne Bestätigung von Plan zu Ausführung
- Mehrere unabhängige Ziele in einem Plan
- Statt Bestätigung nur „ich fange an“

## Empfohlene Kombinationen

- Vollständige Hauptkette: [Explore—Plan—Execute—Verify](/cases/workflows/explore-plan-execute-verify/)
- Prompt klar: [Zuerst einen Plan verlangen](/prompts/ask-for-a-plan/)
- Korrektur unterwegs: [Fortschritt und Steuerung](/guide/agent-work/progress-and-steering/)
- Langfristige Normen: [Was ist AGENTS.md](/guide/customization/agents-md/what-is-agents-md/)

---

**Status:** verified  
**Gilt für:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen aktuelle OpenAI-Developers-Beschreibung von Codex „verstehen → planen → ausführen und prüfen“ sowie verifizierte Prompt-, Qualitäts- und Workflow-Kapitel; stabile Planungsmethoden, keine volatilen Versionsparameter.  
**Zuletzt geprüft:** 2026-07-26
