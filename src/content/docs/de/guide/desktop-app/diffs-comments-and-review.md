---
title: Diffs, Kommentare und Reviews
description: Prüfe vor Commit oder Push im Review-Bereich die tatsächlichen Änderungen und hinterlasse zeilenbezogenes Feedback.
sidebar:
  order: 50
locale: de
source_locale: zh-CN
source_revision: 3efee20
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Die Chat-Zusammenfassung ist Codex' Erklärung der erledigten Arbeit. Der Git-Diff zeigt dagegen, was sich in den Dateien tatsächlich geändert hat. Im Review-Bereich der Desktop-App kannst du Diffs anzeigen, zeilenbezogene Kommentare hinzufügen und entscheiden, welche Inhalte vorgemerkt, verworfen, committet oder gepusht werden.

Das Projekt muss sich in einem Git-Repository befinden, damit der vollständige Review-Bereich und `/review` verfügbar sind.

## Review in zwei Ebenen

Prüfe zuerst selbst den Änderungsumfang und beauftrage anschließend einen unabhängigen Reviewer mit der Suche nach Implementierungsproblemen:

1. Öffne den Review-Bereich und prüfe zuerst Anzahl und Pfade der Dateien.
2. Wähle **Last turn**, um die Änderungen der letzten Runde zu sehen.
3. Wechsle zwischen **Unstaged**, **Staged**, **Commit** und **Branch**, um den Review-Umfang zu bestätigen.
4. Führe im Eingabebereich `/review` aus.
5. Wähle den Vergleich mit dem Basis-Branch, nicht committete Änderungen, einen bestimmten Commit oder eigene Kriterien.
6. Lies die nach Priorität geordneten Findings und entscheide dann, ob sie behoben werden sollen.

Der Reviewer von `/review` arbeitet standardmäßig nur lesend und verändert den Worktree nicht. Wenn du Codex anschließend mit der Behebung eines Findings beauftragst, gelten weiterhin die bestehenden Sandbox- und Genehmigungsregeln.

## Wiederverwendbare Review-Kriterien

```text
Prüfe die aktuellen nicht committeten Änderungen. Achte besonders auf:
- Änderungen außerhalb des Aufgabenbereichs;
- Verhaltensregressionen, Grenzfälle und Sicherheitsprobleme;
- fehlende Tests für Fehlerpfade;
- Widersprüche zwischen Dokumentation und Implementierung.

Liste zuerst die Probleme nach Schweregrad auf. Nenne für jedes Problem Datei, Position, Nachweis und den kleinsten sinnvollen Lösungsvorschlag.
Wenn du keine Probleme findest, sage das ausdrücklich und nenne weiterhin nicht abgedeckte Testrisiken.
```

## Mehrdeutigkeit mit zeilenbezogenen Kommentaren reduzieren

Bewege den Mauszeiger über eine verdächtige Zeile, wähle das eingeblendete **+** und schreibe konkretes Feedback. Sende nach Abschluss aller Kommentare eine eindeutige Anweisung:

```text
Bearbeite meine zeilenbezogenen Kommentare. Halte den Änderungsumfang so klein wie möglich,
führe anschließend die relevanten Tests erneut aus und zeige den neuen Diff.
```

Ein hilfreicher Kommentar beschreibt ein Risiko oder Abnahmekriterium, etwa: „Was gibt diese Stelle bei einem leeren Array zurück?“ Die Aussage „Das ist falsch“ reicht in der Regel nicht.

## Vormerken und Verwerfen

Im Review-Bereich kannst du einen vollständigen Diff, einzelne Dateien oder einzelne Hunks vormerken, aus dem Index entfernen oder verwerfen. Beim Verwerfen gehen Änderungen verloren. Prüfe vorher unbedingt, ob sie schon vor Aufgabenbeginn vorhanden waren und vom Benutzer stammen.

Eine sinnvolle feste Abnahmereihenfolge lautet: Umfang → Verhalten → Tests → Sicherheit → Wartbarkeit. Weitere Methoden findest du unter [Diffs prüfen](/de/guide/quality/review-diffs/).

## Offizielle Grundlage

- [Code review](https://learn.chatgpt.com/docs/code-review)

---

**Status:** verified

**Unterstützte Produkte:** App, CLI, IDE

**Zuletzt geprüft:** 2026-08-26
