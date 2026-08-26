---
title: Tests ausführen
description: Überprüfungsschritte zum Teil der Aufgabe machen.
locale: de
source_locale: zh-CN
source_revision: 13d4ba5
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 20
---

Nach der Änderung braucht es einen Weg zu bestätigen, dass nichts Offensichtliches kaputt ist.

Dieser „Beweis“ kann automatische Tests sein, ein erfolgreicher Build oder klare manuelle Schritte.

## Was Tests beantworten

Tests beantworten vor allem:

> **Woher wissen Sie, dass diese Änderung nicht nebenbei etwas anderes kaputtgemacht hat?**

Ohne Überprüfung ist das Ergebnis oft nur „sieht ungefähr richtig aus“.

In den Abnahmekriterien des Prompts Testbefehle nennen. Fehlen Tests im Repo, mindestens: Start-/Build-Befehl erfolgreich oder manuelle Überprüfungsschritte.

„Fertig“ ohne Überprüfung ist oft nur subjektives Urteil.

## Häufige Missverständnisse

### 1. Nicht nur Entwickler brauchen Überprüfung

Auch bei Doku, Seiten, Config oder Inhalten braucht es passende Überprüfung.

### 2. Ohne Repo-Tests trotzdem abnehmen

Fehlen automatische Tests, mindestens eines:

- Build erfolgreich
- Start erfolgreich
- Klare manuelle Checks

### 3. „Kleine Änderung“ heißt nicht automatisch überspringen

Kleine Änderungen können Nebenwirkungen haben — besonders in unbekannten Projekten.

## Überprüfungsreihenfolge

Unklar wo anfangen:

1. Relevante Tests zuerst, falls vorhanden
2. Sonst Build oder Start
3. Sonst minimale manuelle Schritte ergänzen

Wichtig: nicht ohne jede Überprüfung liefern — nicht sofort volle Coverage.

## Direkt in den Prompt

In der ersten Aufgabe ergänzen:

```text
Danach bitte relevante Überprüfung ausführen; fehlen automatische Tests, nennen Sie minimale manuelle Schritte.
```

So wird Überprüfung auch bei schwachen Repo-Tests nicht komplett übersprungen.

## Bei Bedarf noch ein Satz

```text
Sagen Sie, welche Überprüfungen Sie wirklich ausgeführt haben; wenn nicht möglich, den Grund klar nennen — nicht standardmäßig als bestanden werten.
```

Überprüfung darf leicht sein, aber nicht fehlen — sonst hält „fertig“ kaum.

---

**Status:** verified  
**Gilt für:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite erklärt nur, warum Überprüfungsschritte in die Aufgabenabnahme gehören; Beispielsätze und Reihenfolge wurden geprüft, der Text hängt nicht von volatilen Produktfakten ab.  
**Zuletzt geprüft:** 2026-07-26
