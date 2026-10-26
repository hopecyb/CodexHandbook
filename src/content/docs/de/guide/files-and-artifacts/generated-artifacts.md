---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Kreuzgeprüft gegen verifizierte Kapitel zu Artefaktprüfung, Definition of Done, Unsicherheit und Datei-Artefakten; Fokus „Generieren ≠ lieferbar, öffnen und abnehmen, commit-Klarheit“."
  checkedAt: "2026-07-26"
title: Generierte Artefakte abnehmen
description: "Von Codex neu angelegte oder exportierte Dateien, Reports und Build-Artefakte systematisch abnehmen."
locale: de
source_locale: zh-CN
source_revision: "7401176"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 60
---

Beim Abschluss einer Aufgabe kann der Agent **Artefakte** wie Berichte, Skripte, statische Websites und Testdaten erstellen. Sie durchlaufen nicht unbedingt den gewohnten Code-Review-Prozess. Deshalb brauchen sie eine eigene Abnahme.

Neu generiert heißt nicht automatisch einsatzbereit.

## Inhalt dieser Seite

- Abnahmeunterschied zu „bestehenden Code ändern“
- Checkliste
- Wann du ein Ergebnis ablehnen und neu erstellen lassen solltest

## Artefakttypen

| Typ | Abnahme-Fokus |
|---|---|
| Skripte `.sh` `.py` | ausführbar, harmlos, idempotent |
| Reports `.md` `.html` | Fakten korrekt, Links gültig |
| Build-Output `dist/` | Prüfen, ob das Verzeichnis in `.gitignore` gehört |
| Test-Fixtures | keine echten personenbezogenen Daten |
| Konfigurationsvorlagen | keine schwachen Standardpasswörter |

## Was „Artefakt“ hier meint

- neu geschriebene Dateien
- exportierte Reports
- gebaute Seiten, Verzeichnisse oder Pakete

Diese Ergebnisse unterscheiden sich von einer Änderung an wenigen bestehenden Codezeilen: Ihr tatsächlicher Inhalt wird leichter übersehen.

## Abnahmeprozess

```text
1. Artefakt öffnen (nicht nur Agent-Textzusammenfassung)
2. Mit der „Definition of Done“ der Aufgabe abgleichen
3. Relevante Tests oder Vorschaubefehle ausführen
4. Pfad, Berechtigungen, Volumen prüfen
5. Entscheiden: annehmen / gezielt nachbessern / verwerfen und neu erstellen
```

Methoden: [Artefakte überprüfen](/de/guide/quality/verify-artifacts/), [Definition of Done](/de/guide/quality/definition-of-done/)

## Häufige Missverständnisse

### 1. „Fertig“ gesagt — trotzdem echtes Artefakt ansehen

Die Zusammenfassung beschreibt, was der Agent seiner Ansicht nach getan hat. Sie ersetzt nicht das Öffnen und Prüfen der Datei.

### 2. Neue Datei ≠ sicherer als Änderung

Auch neue Dateien können folgende Probleme enthalten:

- falschen Inhalt
- überflüssige Dependencies
- Leaks
- zu große Dateien, die nicht ins Repo gehören

### 3. Läuft ≠ wert, zu committen

Manche Artefakte eignen sich nur für eine vorübergehende lokale Nutzung und gehören nicht in Git.

## Bezug zu Git

- Klar: welche Artefakte **committen**, welche `.gitignore`
- Keine megabytegroßen Build-Caches in einen PR aufnehmen
- Große Artefakte: CI Artifact oder externer Speicher

## Übliche Abnahmereihenfolge

Bei frischen Artefakten:

1. Welche Dateien entstanden
2. Das kritischste öffnen
3. Liegt es im erlaubten Verzeichnis
4. Soll es ins Repo
5. Annehmen, ändern oder neu

## Nicht vertrauenswürdige Artefakte

Bei nicht vertrauenswürdigen Repositories oder Aufgaben mit externen Eingabedaten:

- Skript zuerst lesen, dann ausführen
- Vorsicht vor `curl | bash`, verschleierten Nutzdaten
- Preview in Sandbox oder Container

Artefakte nicht nur als „schon generiert“ werten — mindestens öffnen, prüfen, wissen ob committen.

## Häufige Fehler

- Nur die Stichpunktzusammenfassung des Agents lesen, ohne die Datei zu öffnen
- Einmalige Debug-Ausgabe nach main committen
- HTML-Reports mit Tracking-Pixel oder ungeprüften Fremdskripten

## Abnahmeliste

- [ ] Jeder neue Dateipfad im erlaubten Bereich
- [ ] Hauptinhalt geöffnet und überflogen
- [ ] Automation (lint/test/link check) gelaufen
- [ ] Keine Secrets, keine überflüssigen Generierungsverzeichnisse

## Quellen
- [Unsicherheit handhaben](/de/guide/quality/handle-uncertainty/)
