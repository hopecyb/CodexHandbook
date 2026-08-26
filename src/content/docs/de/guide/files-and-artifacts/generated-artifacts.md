---
title: Generierte Artefakte abnehmen
description: "Von Codex neu angelegte oder exportierte Dateien, Reports und Build-Artefakte systematisch abnehmen."
locale: de
source_locale: zh-CN
source_revision: 4b46d0b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 60
---

Beim Aufgabenabschluss kann der Agent Reports, Skripte, Static Sites, Testdaten usw. als **Artefakte** neu anlegen. Sie laufen oft nicht über Ihren gewohnten Code-Review-Pfad — eigene Abnahmegewohnheit nötig.

Neu generiert heißt nicht automatisch einsatzbereit.

## Inhalt dieser Seite

- Abnahmeunterschied zu „bestehenden Code ändern“
- Checkliste
- Wann ablehnen und neu verlangen

## Artefakttypen

| Typ | Abnahme-Fokus |
|---|---|
| Skripte `.sh` `.py` | ausführbar, harmlos, idempotent |
| Reports `.md` `.html` | Fakten korrekt, Links gültig |
| Build-Output `dist/` | ob gitignore |
| Test-Fixtures | kein echtes PII |
| Config-Templates | keine Default-Schwachpasswörter |

## Was „Artefakt“ hier meint

- neu geschriebene Dateien
- exportierte Reports
- gebaute Seiten, Verzeichnisse oder Pakete

Anders als „ein paar Zeilen bestehenden Code“ — Inhalt wird leichter übersehen.

## Abnahmeprozess

```text
1. Artefakt öffnen (nicht nur Agent-Textzusammenfassung)
2. Gegen «Definition of Done» der Aufgabe
3. Relevante Tests oder Preview-Befehle
4. Pfad, Berechtigungen, Volumen prüfen
5. Entscheiden: annehmen / lokal ändern / verwerfen und neu
```

Methoden: [Artefakte überprüfen](/de/guide/quality/verify-artifacts/), [Definition of Done](/de/guide/quality/definition-of-done/)

## Häufige Missverständnisse

### 1. „Fertig“ gesagt — trotzdem echtes Artefakt ansehen

Zusammenfassung sagt, was der Agent *denkt* getan zu haben — ersetzt nicht das Öffnen.

### 2. Neue Datei ≠ sicherer als Änderung

Neue Dateien können ebenso:

- falschen Inhalt
- überflüssige Dependencies
- Leaks
- zu große Dateien, die nicht ins Repo gehören

### 3. Läuft ≠ wert, zu committen

Manches Artefakt nur lokal temporär — nicht für Git.

## Bezug zu Git

- Klar: welche Artefakte **committen**, welche `.gitignore`
- Keine Megabyte Build-Caches in einem PR
- Große Artefakte: CI Artifact oder externer Speicher

## Übliche Abnahmereihenfolge

Bei frischen Artefakten:

1. Welche Dateien entstanden
2. Das kritischste öffnen
3. Liegt es im erlaubten Verzeichnis
4. Soll es ins Repo
5. Annehmen, ändern oder neu

## Untrusted Artefakte

Bei untrusted Repos oder extern datengetriebenen Aufgaben:

- Skript zuerst lesen, dann ausführen
- Vorsicht vor `curl | bash`, obfuscated Payloads
- Preview in Sandbox oder Container

Artefakte nicht nur als „schon generiert“ werten — mindestens öffnen, prüfen, wissen ob committen.

## Häufige Fehler

- Nur Agent-Bullet-Summary, Datei nicht öffnen
- Einmalige Debug-Ausgabe nach main committen
- HTML-Reports mit Tracking-Pixel oder ungeprüften Fremdskripten

## Abnahmeliste

- [ ] Jeder neue Dateipfad im erlaubten Bereich
- [ ] Hauptinhalt geöffnet und überflogen
- [ ] Automation (lint/test/link check) gelaufen
- [ ] Keine Secrets, keine überflüssigen Generierungsverzeichnisse

## Quellen
- [Unsicherheit handhaben](/de/guide/quality/handle-uncertainty/)
---

**Status:** verified  
**Gilt für:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen verifizierte Kapitel zu Artefaktprüfung, Definition of Done, Unsicherheit und Datei-Artefakten; Fokus „Generieren ≠ lieferbar, öffnen und abnehmen, commit-Klarheit“.  
**Zuletzt geprüft:** 2026-07-26
