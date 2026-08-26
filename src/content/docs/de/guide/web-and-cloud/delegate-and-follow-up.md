---
title: Delegieren und nachfassen
description: Starte eine unabhängig ausführbare Cloud-Aufgabe und korrigiere im selben Chat Richtung und Ergebnisabnahme.
sidebar:
  order: 60
locale: de
source_locale: zh-CN
source_revision: 681ea7d
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Delegieren bedeutet nicht, „ein Problem wegzuwerfen“, sondern einem unabhängigen Cloud-Chat Ziel, Einschränkungen, Umgebung und Fertigstellungskriterien zu übergeben. Die Aufgabe kann im Hintergrund laufen. Du kannst Protokolle lesen, Kontext ergänzen, Änderungen verlangen und abschließend den Diff prüfen.

## Wann Delegation geeignet ist

- Die Aufgabe erfordert einen längeren Build oder Testlauf.
- Die Eingaben befinden sich bereits im Remote-Repository.
- Die Umgebung lässt sich per Skript reproduzieren.
- Die Aufgabe kann unabhängig von deiner aktuellen Arbeit fortgesetzt werden.
- Du bist bereit, das Ergebnis nach Abschluss zu prüfen, statt es direkt zusammenzuführen.

Aufgaben, die von lokalem nicht committetem Zustand, lokalen Diensten oder fortlaufender menschlicher Bedienung abhängen, sollten zunächst lokal bleiben.

## Vollständiger Delegationsauftrag

```text
Ziel: Behebe das Problem aus #42, durch das die Verbindung einer Login-Anfrage nach 30 Sekunden noch nicht freigegeben wird.
Ausgangspunkt: Branch fix/42-timeout in acme/api.
Umfang: packages/auth/** und zugehörige Tests.
Verboten: Keine Abhängigkeiten aktualisieren, keine öffentliche API ändern und nicht nach main pushen.
Verifikation: pnpm test --filter auth; pnpm typecheck.
Abschluss: Ursache, Diff, Befehle und Exit-Ergebnisse zeigen; nicht automatisch zusammenführen.
```

Bestätige nach dem Start zuerst die richtige Umgebung und den richtigen Branch. Fasse während des Laufs nur nach, wenn eine Voraussetzung fehlt oder die Arbeit in die falsche Richtung geht:

```text
Zusätzliche Einschränkung: Ändere nicht den globalen HTTP-Client. Begrenze den Fix auf den auth adapter.
Erkläre zuerst, wie dies den aktuellen Ansatz verändert, und fahre dann fort.
```

Der bestehende Kontext bleibt im selben Chat erhalten. Das eignet sich zur Korrektur desselben Ziels. Für ein vollständig unabhängiges Ziel erstellst du einen neuen Chat. Parallele Aufgaben dürfen nicht denselben Branch oder dieselbe Dateimenge beschreiben.

## Nach dem Ergebnis

1. Lies die Zusammenfassung und den vollständigen Diff.
2. Gleiche die Dateien mit den erlaubten Pfaden der Aufgabe ab.
3. Prüfe die tatsächliche Ausgabe jedes Verifikationsbefehls.
4. Verlange eine Erklärung für fehlgeschlagene oder nicht ausgeführte Prüfungen.
5. Formuliere nötige Änderungen als konkretes Follow-up im selben Chat.
6. Erstelle nach Erfüllung der Kriterien einen PR und übergib die weitere Abnahme an CI und menschliches Review.

Cloud-Aufgaben können über Web, IDE, GitHub, GitLab (Beta), Linear oder Slack gestartet werden. Die offizielle Cloud-Seite beschreibt außerdem das Starten und Prüfen von Arbeit über die Codex CLI. Der Einstieg verändert die Grenzen von Repository, Umgebung, Netzwerk und Review nicht.

## Bei Fehlschlägen gezielt nachfassen

Schreibe nicht nur „Versuche es erneut“. Gib den Fehlernachweis und den nächsten Schritt an:

```text
Der Test schlägt in retry.test.ts:48 fehl. Erkläre zuerst, ob dieser Fehlschlag durch die aktuelle Änderung verursacht wurde.
Falls ja, behebe nur diese Regression und führe die auth-Tests erneut aus. Falls nein, erhalte den Fehlschlag und dokumentiere ihn ausdrücklich.
```

## Offizielle Grundlage

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Long-running work](https://learn.chatgpt.com/docs/long-running-work)

---

**Status:** verified

**Unterstützte Produkte:** Cloud, App, IDE, CLI

**Zuletzt geprüft:** 2026-08-26
