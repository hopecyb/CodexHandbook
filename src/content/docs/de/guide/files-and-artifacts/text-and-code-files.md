---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Kreuzgeprüft gegen verifizierte Kapitel zu Datei-/Ordnerkontext, Aufgabenanatomie, Diff-Review und Tests; diese Seite bestätigt nur das stabile Prinzip „Pfade begrenzen, Stil halten, Überprüfung vorab klären“."
  checkedAt: "2026-07-26"
title: Text- und Codedateien
description: "Quellcode, Config und Dokument-Textdateien mit Codex korrekt lesen und schreiben."
locale: de
source_locale: zh-CN
source_revision: "1537793"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 10
---

Die meisten Entwicklungsaufgaben landen bei **Text- und Codedateien**: Quellcode, Tests, Config, Markdown. Diese Seite erklärt, wie du den Umfang begrenzt, den Stil beibehältst und Änderungen sicher zusammenführst.

Wenn Codex Text oder Code ändert: am richtigen Ort, auf die richtige Weise — und nicht nebenbei zu viel.

## Inhalt dieser Seite

- Änderungen auf korrektem Pfad und Encoding landen lassen
- Mehrdatei-Edits organisieren
- Abstimmung mit Formatter und Linter

## Dateitypen und Hinweise

| Typ | Achtung |
|---|---|
| Quellcode `.ts` `.py` usw. | `AGENTS.md` und bestehenden Mustern folgen |
| Config `.json` `.yaml` `.toml` | Struktur leicht kaputt; gültige Syntax verlangen |
| Dokumente `.md` | Relative Links, gemischtsprachige Konventionen |
| Generierter Code | Ob committen oder gitignore klarstellen |

Kontext: [Datei- und Ordnerkontext](/de/guide/context/file-and-folder-context/)

## Warum diese Dateien oft scheitern

Typische Problemstellen:

- In die falsche Datei geschrieben
- Für eine kleine Änderung große Flächen umgeschrieben
- Stil weicht vom Projekt ab
- Die Syntax der Konfigurationsdatei wurde unbemerkt beschädigt

## Empfohlene Prompt-Struktur

```text
Ziel: <ein Satz>
Erlaubt: <Pfad-Glob>
Verboten: Lockfile, irrelevante Verzeichnisse
Stil: wie <Beispieldatei>
Fertig: geänderte Dateien listen + <Testbefehl> ausführen
```

Siehe [Anatomie guter Aufgaben](/de/prompts/task-anatomy/)

## Häufige Missverständnisse

### 1. Nur „ändere bitte diese Datei“

Meist zu wenig Information.

Besser ergänzen:

- Welche Dateien erlaubt
- Welche nicht anfassen
- Stil-Referenz
- Wie danach prüfen

### 2. Config = normaler Text

Nein.

Bei `.json`, `.yaml`, `.toml` scheitern oft Struktur, Einrückung, Syntax.

### 3. Je umfassender, desto sparsamer

Oft stabiler: „kleiner Umfang, erklärbar, reviewbar“ statt „nebenbei großflächig optimieren“.

## Encoding und Zeilenenden

- Default **UTF-8**; Sonderfälle in `AGENTS.md` deklarieren
- An `.editorconfig` / `prettier` halten — ganze Datei-Diffs wegen Zeilenenden vermeiden
- Große Dateien abschnittsweise: @ auf konkrete Funktionen, nicht ganze Datei umschreiben

## Wenn zu viel Änderung droht

Direkt verlangen:

1. Zuerst sagen, welche Dateien betroffen sind
2. Nur den Minimalumfang der Aufgabe
3. Überprüfungsschritte nach Abschluss listen

## Review-Schwerpunkte

- [Diffs prüfen](/de/guide/quality/review-diffs/): Logik, Umfang, Löschungen
- [Tests ausführen](/de/guide/quality/run-tests/)
- Unbeabsichtigte `TODO`-Platzhalter ohne Umsetzung

## Häufige Fehler

- „Ganzes Projekt refactoren“ → Hunderte Dateien
- Binärdateien oder minimierte Dateien mit ungeeigneten Textbearbeitungen ändern
- Absolute Dokumentlinks → interne 404

Bei Text- und Codeaufgaben sind weit verstreute, unnötig große Änderungen besonders schwer zu prüfen. Klare Vorgaben zu Umfang, Stil und Prüfung sparen Rückfragen und Nacharbeit.
