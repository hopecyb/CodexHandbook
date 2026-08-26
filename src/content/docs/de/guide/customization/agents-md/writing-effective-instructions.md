---
title: Projektanweisungen schreiben
description: "Schreib-Checkliste für AGENTS.md — kurz, hart, ausführbar, überprüfbar."
locale: de
source_locale: zh-CN
source_revision: 2d236a3
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 30
---

Gute Projektanweisungen ähneln eher einer **Checkliste**. Ziel: Codex macht beim ersten Versuch weniger vorhersehbare Fehler.

Beim ersten Entwurf schreiben viele viele Ideen — die wirklich kritischen Constraints bleiben unklar.

## Inhalt

- Wie Projektanweisungen aussehen sollten
- Was „kurz, hart, ausführbar“ bedeutet
- Welche Formulierungen Codex und Menschen am meisten verwirren

## Empfohlene Struktur

```md
# Projektanweisungen

## Schnellstart (3–5 Zeilen)
Installation, Dev-Server, häufigster Testbefehl

## Muss eingehalten werden
Nummerierte, unverhandelbare Regeln

## Code und Verzeichnisse
Benennung, Ablageorte, Dependency-Konventionen

## Definition of Done
Wann gilt „bereit zum Commit“

## Verbote
Klar sagen, was nicht zu tun ist
```

## Schreibprinzipien

### 1. Harte Constraints nach vorne

„Muss“ und „Verboten“ an den Dateianfang. Bei begrenztem Kontext wiegt der Anfang stärker — dieselbe Logik wie [Kontextpriorität](/de/guide/context/context-priority/).

### 2. Befehle kopierbar

**Wirklich lauffähige** Befehle schreiben, nicht „Tests bitte laufen lassen“:

```md
# Gut
pnpm test --filter @app/web

# Schlecht
Sicherstellen, dass Tests bestehen
```

### 3. Überprüfbare Fertigstellungskriterien

```md
## Definition of Done
- `pnpm lint` und `pnpm test` ohne Fehler
- Neue API mit Unit-Tests
- Nutzer sichtbare Änderungen mit manuellen Testschritten (Browser + Mobil)
```

### 4. „Warum“ möglichst in einem Satz

```md
- `generated/` nicht ändern: wird generiert, Handänderungen überschreibt der nächste Build
```

Längerer Hintergrund gehört verlinkt nach `docs/`.

## Was „gute Anweisungen“ heißt

Mensch und Codex sollen schnell greifen:

- Was zuerst tun
- Was nicht tun
- Wann es fertig ist

Bleibt nach dem Lesen unklar, welchen Befehl man zuerst läuft, was tabu ist und wann man fertig ist — noch nicht gut genug.

## Beispiel-Ausschnitt Team-Playbook

```md
## PR und Git
- Branch-Namen: Präfixe `feat/`, `fix/`, `docs/`
- Ein PR = eine Sache; große Refactors eigener PR
- Vor Merge menschliche Diff-Review, auch wenn Codex schon getestet hat

## Zusammenarbeit mit Codex
- Große Aufgaben zuerst: „Plan vorschlagen, Code erst nach Bestätigung“
- Bei DB-Migrationen zuerst SQL zur menschlichen Prüfung ausgeben
```

## Häufige Fehler

| Fehler | Folge |
|---|---|
| Framework-Enzyklopädie stapeln | Kritische Testbefehle werden ignoriert |
| Widersprüchliche Regeln | Modell wählt zufällig eine |
| Nur Phrasen wie „elegant sein“ | Nicht abnehmbar |
| Secrets oder Intranet-URLs | Leak-Risiko |

## Häufige Missverständnisse

### 1. Mehr Detail ist nicht automatisch besser

Zu verstreut, zu lang, zu enzyklopädisch — die wirklich hochprioren Regeln gehen unter.

### 2. Reicht „bitte Normen beachten“ als Anweisung?

Meist nicht ausführbar.  
Besser direkt:

- echte Befehle
- klare Verzeichnisse
- konkrete Fertigstellungskriterien

### 3. Hintergrund und Ausführungsregeln beliebig mischen?

Besser nicht.  
Stattdessen:

- Regeln nach vorne
- Hintergrund auf einen Satz verdichten
- Längere Erklärungen nach docs

## Beim Umschreiben zuerst greifen

Haben Sie eine sehr verstreute Projektanweisung, so straffen:

1. „Muss/Verboten“ nach vorne
2. Phrasen in konkrete Befehle oder Checkpunkte verwandeln
3. Lange Hintergründe kürzen und verlinken
4. Minimale Definition of Done liefern

Gute Projektanweisungen gewinnen nicht durch Menge, sondern dadurch, dass kritische Constraints, kritische Befehle und Fertigstellungskriterien klar und direkt ausführbar sind.

## Pflege-Rhythmus

- Bei jeder CI-Befehlsänderung `AGENTS.md` **synchron aktualisieren**
- Quartalsreview: veraltete Regeln löschen
- Erster Onboarding-Schritt: AGENTS.md lesen und „Schnellstart“ zum Laufen bringen

## Weiterlesen

- [Projektanweisungen](/de/guide/customization/project-instructions/)
- [Explore—Plan—Execute—Verify](/de/cases/workflows/explore-plan-execute-verify/)
- [Done definieren](/de/prompts/define-done/)

## Von einer Aufgabe zur Projektregel

Nicht jeder gute Prompt gehört direkt in `AGENTS.md`. Entscheiden Sie zuerst, welche Ebene ihn besitzen sollte.

| Wiederkehrender Inhalt | Besserer Ort |
|---|---|
| „Generated-Verzeichnisse nicht ändern“ | Verbot in `AGENTS.md` |
| „Jeden PR im festen Format prüfen“ | Skill oder Prompt-Vorlage |
| „Nach dem Schreiben formatieren“ | Hook |
| „Vor dem Coden Linear/Jira lesen“ | MCP + passender Skill |
| „Ich bevorzuge chinesische Erklärungen“ | Erinnerung oder persönliche Präferenz |

`AGENTS.md` passt für langlebige, gemeinsame und prüfbare Regeln. Prozesslogik kann in Skills, automatische Checks in Hooks, externer Zugriff in MCP.

---

**Status:** verified  
**Gilt für:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen die aktuelle AGENTS.md-Serie sowie Kontext- und Workflow-Kapitel dieses Repos; diese Seite erklärt nur stabile Schreibprinzipien und Pflege-Rhythmus und macht keine langfristigen Versprechen zu Client-Implementierungsdetails.  
**Zuletzt geprüft:** 2026-07-26
