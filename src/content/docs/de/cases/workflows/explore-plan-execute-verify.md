---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Mit den geprüften Handbuchseiten zu Planung, Diagnose, Definition of Done, Tests und AGENTS.md abgeglichen. Diese Seite behandelt den vierphasigen Ablauf der Zusammenarbeit und seine Prüfpunkte, ohne veränderliche Produktoptionen."
  checkedAt: "2026-07-26"
title: "Erkunden—Planen—Ausführen—Überprüfen"
description: "Erkundung, Planung, Ausführung und Prüfung nach Umfang und Unsicherheit der Aufgabe zuschneiden und Entscheidungen benennen, auf die gewartet werden muss."
locale: de
source_locale: zh-CN
source_revision: "4a95760"
translation_status: draft
translated_at: 2026-09-20
---

Dies ist die vom Handbuch empfohlene Art, Aufgaben zu organisieren – von „noch unklar, wie es geht“ bis „bereit zur Abnahme“. Vier Phasen bedeuten nicht vier Genehmigungen. Eine kleine Aufgabe mit klarem Umfang kann ohne Unterbrechung erledigt werden; nur wenn die Vorgehensweise offen ist oder eine nötige Berechtigung fehlt, muss auf eine Entscheidung gewartet werden. Beginnen Sie mit den [Aufgabenstufen](/de/prompts/ask-for-a-plan/).

## Überblick der vier Phasen

```text
① Erkunden Explore   → Ist-Zustand, Umfang und Risiken klären
② Planen Plan        → Schritte, Dateien, Akzeptanzkriterien und nötige Abwägungen
③ Ausführen Execute  → Code/Dokumentation/Konfiguration im autorisierten Umfang ändern
④ Überprüfen Verify  → Tests, Diff-Prüfung, Abgleich mit der Definition of Done
```

Wenn der Ist-Zustand unklar ist, zuerst erkunden und planen, statt eine Korrektur zu erraten. Eine klar eingegrenzte Tippfehlerkorrektur braucht keine vier Interaktionen. Siehe [Erst diagnostizieren, dann korrigieren](/de/cases/workflows/diagnose-before-fixing/).

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

Die obige Aufforderung beschränkt die Aufgabe ausdrücklich auf einen Plan; daher muss die Ausführung warten. Wenn die Umsetzung bereits autorisiert ist, kann stattdessen ein kurzer Plan verlangt werden, gefolgt von fortlaufender Ausführung und Prüfung im vereinbarten Umfang. Ob eine Pause nötig ist, hängt von Autorisierung, erforderlichen Abwägungen und tatsächlichen Berechtigungen ab – nicht von der Zahl der Planschritte.

## ③ Ausführen

**Ziel:** Änderungen klein und rückgängig machbar halten.

- Jeweils auf ein Teilziel konzentrieren
- Durch Tests abgedeckte Pfade bevorzugen
- Bei gewöhnlichen Umsetzungsdetails den Plan aktualisieren und fortfahren; ändern sich Voraussetzungen oder Umfang, zu ② zurückkehren und prüfen, ob eine neue Entscheidung nötig ist

Leitformulierung: „Erledige den autorisierten Umfang weiter; falls er erweitert werden muss, erläutere die konkreten Folgen und Wahlmöglichkeiten.“

## ④ Überprüfen

**Ziel:** Beweisen, dass die «Definition of Done» erfüllt ist.

| Überprüfungstyp | Vorgehen |
|---|---|
| Automatisch | Unit-Tests, Lint, Typprüfung |
| Manuell | Diff lesen, kritische Pfade handtesten |
| Artefakt | Screenshots, Log-Ausschnitte, API-Antworten |

Zugehörige Checklisten: [Done definieren](/de/prompts/define-done/) und [Tests ausführen](/de/guide/quality/run-tests/).

## Nach Aufgabengröße zuschneiden

| Umfang | Erkunden | Planen | Ausführen | Überprüfen |
|---|---|---|---|---|
| Tippfehler | Zieltext prüfen | Kann implizit sein | Kurz | Diff prüfen und nach Projektregeln verifizieren |
| Bug in einer Datei | Leicht | 3–5 Schritte | Mittel | Tests + Diff |
| Modulübergreifende Funktion | Abhängigkeiten klären | Schriftlicher Plan; nötige Abwägungen klären | Im autorisierten Umfang schrittweise abschließen | Dem Umfang entsprechende Tests + manuelle Prüfung |
| Produktionsvorfall | Erst diagnostizieren | Rücknahmeplan zuerst | Sehr kleine Schritte | Überwachung + Nachbesprechung |

## Mit der EPXV-Fallvorlage

Teams können die vier Phasen in die [Fallvorlage](/de/cases/use-cases/case-study-template/) und PR-Beschreibungen schreiben und so eine gemeinsame Sprache schaffen.

## Häufige Fehler

- Plan nur im Kopf, Ausführung driftet
- Überprüfung nur als «sieht so aus, als liefe es»
- Zu wenig Erkundung → falsches Modul geändert
