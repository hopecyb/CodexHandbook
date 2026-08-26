---
title: Erkunden—Planen—Ausführen—Überprüfen
description: "Der allgemeine Haupt-Workflow von Codex — vier Phasen-Prüfpunkte, stabiler als «alles in einem Schritt»."
locale: de
source_locale: zh-CN
source_revision: ac26bee
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Das ist der in diesem Handbuch empfohlene Standard-Workflow — von „noch unklar, wie“ bis „merge-fähig“.

## Überblick der vier Phasen

```text
① Erkunden Explore   → Status, Umfang, Risiken klären
② Planen Plan        → Schritte, Dateien, Akzeptanzkriterien (große Aufgaben brauchen deine Bestätigung)
③ Ausführen Execute  → Code/Docs/Config ändern, in kleinen Schritten committen
④ Überprüfen Verify  → Tests, Diff-Prüfung, Abgleich mit «Definition of Done»
```

① und ② nicht überspringen und direkt zu ③ gehen — das wird leicht zu „raten und reparieren“. Siehe [Zuerst diagnostizieren, dann fixen](/de/cases/workflows/diagnose-before-fixing/).

## ① Erkunden

**Ziel:** Zuerst den Ist-Zustand klar machen, dann entscheiden, wie geändert wird.

Beispiel-Prompt:

```text
Ändere vorerst keinen Code. Lies @src/auth/ und die zugehörigen Tests und erkläre in einer Liste:
1. Aktuellen Login-Ablauf
2. Dateien, die mit dem Safari-Layout-Bug zusammenhängen könnten
3. Einen Punkt, den du unsicher bist und den ich bestätigen soll
```

Artefakt: Problemstellung, Wirkungsradius, offene Bestätigungspunkte.

## ② Planen

**Ziel:** Eine prüfbare Schrittliste.

```text
Basierend auf der gerade erfolgten Erkundung einen Plan geben: Schrittnummern, betroffene Dateien, wie jeder Schritt überprüft wird.
Vor meiner Antwort «Plan ausführen» keinen Code schreiben.
```

Große oder riskante Änderungen brauchen zuerst Bestätigung. Bei kleinen Aufgaben kann man vereinbaren: „Pläne mit höchstens 3 Schritten dürfen automatisch ausgeführt werden“ — und das in [AGENTS.md](/de/guide/customization/agents-md/writing-effective-instructions/) festhalten.

## ③ Ausführen

**Ziel:** Änderungen klein und rückrollbar halten.

- Pro Durchgang ein Teilziel
- Bevorzugt Pfade, die Tests abdecken
- Bei planfremden Problemen **zurück zu ②**, statt durchzudrücken

Steuerungssatz: «Schritt 2 ausführen; bei Planänderung zuerst stoppen und erklären.»

## ④ Überprüfen

**Ziel:** Beweisen, dass die «Definition of Done» erfüllt ist.

| Überprüfungstyp | Vorgehen |
|---|---|
| Automatisch | Unit-Tests, Lint, Typprüfung |
| Manuell | Diff lesen, kritische Pfade handtesten |
| Artefakt | Screenshots, Log-Ausschnitte, API-Antworten |

Zugehörige Checklisten: [Done definieren](/de/prompts/define-done/) und [Tests ausführen](/de/guide/quality/run-tests/).

## Nach Aufgabengröße zuschneiden

| Größe | Erkunden | Planen | Ausführen | Überprüfen |
|---|---|---|---|---|
| Typo-Fix | optional | 1 mündlicher Schritt | kurz | Lint |
| Einzeldatei-Bug | leicht | 3–5 Schritte | mittel | Tests + Diff |
| Modulübergreifendes Feature | Pflicht | schriftlicher Plan + Bestätigung | in Phasen | Volltests + Handtest |
| Produktionsvorfall | Diagnose zuerst | Rollback-Plan zuerst | minimale Schritte | Monitoring + Retro |

## Mit der EPXV-Fallvorlage

Teams können die vier Phasen in die [Fallvorlage](/de/cases/use-cases/case-study-template/) und PR-Beschreibungen schreiben und so eine gemeinsame Sprache schaffen.

## Häufige Fehler

- Plan nur im Kopf, Ausführung driftet
- Überprüfung nur als «sieht so aus, als liefe es»
- Zu wenig Erkundung → falsches Modul geändert

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen die bereits geprüften Seiten zu Planung, Diagnose, Definition of Done, Tests ausführen und `AGENTS.md`. Der Inhalt ist auf die vierphasige Kollaborations-Hauptkette und Prüfpunkte beschränkt und enthält keine volatilen Produktparameter oder Einstiegsdetails.  
**Zuletzt geprüft:** 2026-07-26
