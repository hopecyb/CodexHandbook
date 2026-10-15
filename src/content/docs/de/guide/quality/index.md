---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Die OpenAI-Developers-Startseite betont weiterhin Bau, Test, Review und Lieferung von Änderungen mit Codex; diese Seite zerlegt Überprüfung in Diff-Prüfung, Tests, Quellenvalidierung und Fertig-Definition und wurde mit den Qualitätskapiteln der Site abgeglichen."
  checkedAt: "2026-07-26"
title: Qualität und Überprüfung
description: "Diffs prüfen, Tests ausführen, Quellen validieren und Fertigkriterien definieren."
sidebar:
  order: 21
locale: de
source_locale: zh-CN
source_revision: 90d62fb
translation_status: draft
translated_at: 2026-09-20
---


Der häufigste Anfängerfehler beim ersten Codex-Einsatz: **„fertig“ zu glauben, nur weil es „fertig“ sagt**.

Überprüfung heißt: Nicht danach urteilen, was es sagt — sondern danach, ob das Ergebnis deine Anforderungen wirklich erfüllt.

Codex-Ausgaben müssen prüfbar sein. Überprüfung ist kein optionaler Schritt — sie gehört zu jedem Aufgabenkreislauf.

![Illustration: Eine Lupe prüft hinzugefügte und entfernte Zeilen eines Diffs, daneben eine Checkliste mit einem markierten Punkt und bestandene Tests](/illustrations/verification.webp)

## Was Überprüfung wirklich prüft

Ob Code, Doku oder Recherche — am Ende dieselbe Frage:

> **Ist das jetzt „sieht ungefähr so aus“ — oder „kann geliefert werden“?**

Viele Nacharbeiten kommen nicht davon, dass das Modell alles falsch gemacht hat, sondern davon, dass:

- Unerwünschte Stellen geändert wurden
- Die Hälfte fehlt
- Es „Quellen geprüft“ behauptet, die Quellen aber unzuverlässig sind
- Die Seite öffnet, der Ablauf aber nicht durchläuft
- Doku da ist, aber Anfänger nicht danach handeln können

Überprüfung **hält Risiko vor der Lieferung zurück**.

## Häufige Irrwege

### 1. Läuft = fertig

„Läuft“ heißt nur: kein sofortiger Fehler — nicht:

- Logik korrekt
- Umfang korrekt
- Keine Regression
- Entspricht dem gewünschten Ergebnis

### 2. Das Modell sagt „überprüft“ = entspannt bleiben

Schau, **welche Überprüfung es wirklich gemacht hat**. Zum Beispiel:

- Tests wirklich gelaufen?
- Diff wirklich gelesen?
- Artefakt wirklich geöffnet und geprüft?
- Nachvollziehbare Quellen angegeben?

### 3. Überprüfung nur für Programmierer?

Artikel schreiben, Tabellen machen, Konfiguration erzeugen, Material ordnen, PR-Beschreibungen — alles braucht Überprüfung. Nur die Methode unterscheidet sich.

## Wenn du noch keinen eigenen Ablauf hast

Dann diese Reihenfolge:

1. Ergebnis thematisch daneben?
2. Änderungsumfang zu groß?
3. Automatische Checks laufen lassen
4. Zum Schluss menschlich: lieferbar?

Anders gesagt:

- **Richtung ok?**
- **Zu viel geändert?**
- **Maschine geprüft?**
- **Mensch traut sich, es anzunehmen?**

## Kernthemen

- [Diffs prüfen](/de/guide/quality/review-diffs/) — Diff lesen, Umfang und Risiko bestätigen
- [Tests ausführen](/de/guide/quality/run-tests/) — automatische Regression
- [Artefakte prüfen](/de/guide/quality/verify-artifacts/) — Doku, Konfiguration, Generiertes
- [Quellen validieren](/de/guide/quality/validate-sources/) — Recherche-Schlussfolgerungen nachvollziehbar
- [Unsicherheit handhaben](/de/guide/quality/handle-uncertainty/) — wenn das Modell unsicher ist
- [Fertig-Definition](/de/guide/quality/definition-of-done/) — was „fertig“ heißt
- [Nutzung, Zeitaufwand und Modellwahl](/de/guide/quality/usage-time-and-model-choice/)
- [Workflow-Bewertung und 20 Beispiele](/de/guide/quality/workflow-evaluation/)

## Unterschiedliche Aufgaben, unterschiedliche Schwerpunkte

- **Code ändern**: Diff, dann Tests, dann kritische Pfade manuell
- **Doku schreiben**: Passt zur Zielgruppe? Links ok? Schritte wirklich nachmachbar?
- **Recherche**: Quellen echt und aktuell? Schlussfolgerung über Evidenz hinaus?
- **Konfiguration oder Skripte erzeugen**: Umgebungsvoraussetzungen, Berechtigungsumfang, Wiederherstellung nach Fehlern

Unklar, womit starten? Standard: [Fertig-Definition](/de/guide/quality/definition-of-done/).

Überprüfung bestätigt: Dieses Ergebnis ist nutzbar, vertrauenswürdig und abgabefähig.

Wie Abnahmekriterien im Prompt stehen: [Fertigkriterien definieren](/de/prompts/define-done/). End-to-End-Fälle: [Praxisbeispiele](/de/cases/).
