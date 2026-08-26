---
title: Exitcodes und Wiederholungsversuche
description: Interpretiere Erfolg und Fehlschlag von codex exec in Pipelines korrekt und entscheide, wann ein erneuter Versuch sinnvoll ist.
sidebar:
  order: 40
locale: de
source_locale: zh-CN
source_revision: 40d81b7
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

CI bestimmt den Erfolg eines Schritts anhand des **Prozess-Exitcodes**. Dieses Kapitel erläutert typische Bedeutungen von [codex exec](/de/guide/developer-platform/non-interactive/codex-exec/), Wiederholungsstrategien und idempotentes Design.

## Inhalt dieser Seite

- Unterschied zwischen Exitcode und fachlich „nicht bestandenem“ Review
- Ob bei 429- und Netzwerkfehlern ein erneuter Versuch sinnvoll ist
- Wie Nebenwirkungen durch wiederholte Ausführung verhindert werden

## Was ein Exitcode tatsächlich aussagt

Wenn du erstmals mit Exitcodes arbeitest, kannst du sie als kurze Rückmeldung betrachten, die ein Programm nach seiner Ausführung für Skripte und CI hinterlässt.

Meist enthält sie keine ausführliche Erklärung, sondern teilt der Pipeline nur mit:

- Gilt der Lauf als erfolgreich?
- Oder gilt er als fehlgeschlagen?

Ein Wiederholungsversuch beantwortet dagegen eine andere Frage: Sollte der Lauf nach diesem Fehler sofort enden, oder lohnt sich ein weiterer Versuch?

:::note
Die konkreten Exitcodes sind der offiziellen CLI-Dokumentation zu entnehmen. Die folgende Tabelle beschreibt **Gestaltungsprinzipien** für Integrationen.
:::

## Häufige Missverständnisse

### Es gibt verschiedene Arten von Fehlschlägen

Viele Einsteiger behandeln jeden Exitcode ungleich `0` als denselben Fehler.

In der Praxis musst du mindestens unterscheiden:

- Die Aufgabe ist während der Ausführung abgestürzt
- Eine Richtlinie oder Sandbox hat die Aktion blockiert
- Ein externer Dienst ist vorübergehend ausgefallen
- Die Ausführung war erfolgreich, aber das Review-Ergebnis lautet „nicht bestanden“

Diese Situationen erfordern unterschiedliche Reaktionen und dürfen nicht alle einfach erneut ausgeführt werden.

### Automatische Wiederholung erhöht nicht immer die Stabilität

Wenn sich die Ursache durch einen neuen Versuch nicht ändern kann, etwa bei fehlenden Berechtigungen, einer Richtlinienblockade oder einem fehlerhaften Prompt, verbraucht die Wiederholung nur Zeit und Kontingent.

## Empfohlene Semantik

| Situation | Empfohlene Behandlung |
|---|---|
| `0` | Der Prozess `codex exec` wurde erfolgreich abgeschlossen; die fachliche Abnahme hängt weiterhin vom strukturierten Ergebnis ab |
| Exitcode ungleich `0` und Protokoll enthält eine Policy- oder Sandbox-Ablehnung | **Nicht** blind erneut versuchen; Konfiguration oder Prompt korrigieren |
| Exitcode ungleich `0` und der Runner hat einen vorübergehenden Netzwerk- oder Dienstfehler bestätigt | Begrenzte Wiederholungsversuche mit Backoff |
| Das Review findet ein P0-Problem, die Ausführung selbst ist aber erfolgreich | In der [strukturierten Ausgabe](/de/guide/developer-platform/non-interactive/structured-output/) `pass: false` ausgeben und im Skript mit `exit 1` enden |

Ein gefundenes Sicherheitsproblem sollte keinen absturzähnlichen Ausnahmefehler benötigen. Gib stattdessen im JSON ausdrücklich `pass: false` aus und lasse das Wrapper-Skript den Exitcode festlegen.

## Vorlage zum Erfassen des Exitcodes (Bash)

```bash
#!/usr/bin/env bash
set -uo pipefail

log_file="${RUNNER_TEMP:-/tmp}/codex-exec.stderr.log"
codex exec --cd . "$(cat "$PROMPT")" 2>"$log_file"
code=$?

if [ "$code" -ne 0 ]; then
  cat "$log_file" >&2
  exit "$code"
fi
```

Erfinde keine Namen für numerische Werte, die offiziell nicht definiert sind. Nimm zum Beispiel nicht an, dass `2` dauerhaft eine Richtlinienablehnung bedeutet. Falls Wiederholungsversuche nötig sind, soll der äußere Runner nur Fehlertypen verwenden, die er zuverlässig erkennt, und Anzahl, Gesamtdauer sowie Nebenwirkungen begrenzen.

## Idempotenz und Nebenwirkungen

| Risiko | Gegenmaßnahme |
|---|---|
| Doppelte PR-Kommentare | Check-Run-ID verwenden oder vorhandenen Bot-Kommentar aktualisieren |
| Wiederholte Dateischreibvorgänge | Reviews mit `exec` standardmäßig nur lesend ausführen; Schreibvorgänge in einen eigenen Job mit menschlicher Freigabe legen |
| Doppelte Benachrichtigungen | Webhook-Benachrichtigung mit Deduplizierungsschlüssel senden |

## Entscheidung bei Unsicherheit

Wenn du nicht weißt, ob ein Fehler einen neuen Versuch rechtfertigt, frage dich:

1. Sieht der Fehler nach einer vorübergehenden externen Störung aus?
2. Kann ein neuer Lauf doppelte Kommentare, Schreibvorgänge oder Benachrichtigungen erzeugen?
3. Muss ein Mensch eigentlich Konfiguration, Prompt oder Berechtigung korrigieren?

Nur wenn die erste Frage eher zutrifft, ist eine begrenzte Wiederholung sinnvoll. Treffen die zweite oder dritte Frage zu, solltest du anhalten und die Ursache behandeln.

## Häufige Fehler

- Exitcode ignorieren und CI immer als grün markieren
- Richtlinienfehler unbegrenzt erneut versuchen und Kontingent verbrauchen
- Bei einem neuen Versuch Prompt oder Git-SHA nicht fixieren und dadurch nicht vergleichbare Ergebnisse erzeugen

Unterscheide zuerst einen vorübergehenden Fehler von einer Ursache, die sich durch Wiederholung nicht ändert. Nicht jeder Fehlschlag verdient einen weiteren Lauf.

## Abnahmecheckliste

- [ ] CI schlägt bei einem Exitcode ungleich 0 fehl
- [ ] Anzahl und Backoff der Wiederholungsversuche sind begrenzt
- [ ] Fachlich „nicht bestandenes“ Review und abgestürzte Ausführung sind unterscheidbar
- [ ] Protokolle enthalten ausreichende Informationen zur Fehlerdiagnose

## Verwandte Kapitel

- [Fehlerreferenz](/de/guide/reference/error-reference/)
- [Fehlerbehebung und Wiederherstellung](/de/cases/workflows/failure-recovery/)

## Quellen
- OpenAI-Leitfaden zu API-Wiederholungsversuchen (Konzept)
---

**Status:** verified

**Unterstützte Produkte:** CLI

**Prüfgrundlage:** Nicht belegte Bedeutungen einzelner Exitcodes wurden entfernt. Die Seite setzt nur auf den offiziell bestätigten Prozesserfolg oder -fehlschlag sowie Fortschritts- und Fehlerausgaben über `stderr`; fachliche Review-Ergebnisse werden als strukturierte Daten behandelt.

**Zuletzt geprüft:** 2026-08-26
