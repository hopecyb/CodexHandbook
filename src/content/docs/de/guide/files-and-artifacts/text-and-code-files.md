---
title: Text- und Codedateien
description: "Quellcode, Config und Dokument-Textdateien mit Codex korrekt lesen und schreiben."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Die meisten Entwicklungsaufgaben landen bei **Text- und Codedateien**: Quellcode, Tests, Config, Markdown. Diese Seite: Umfang begrenzen, Stil halten, sicher mergen.

Wenn Codex Text oder Code ändert: am richtigen Ort, auf die richtige Weise — und nicht nebenbei zu viel.

## Inhalt dieser Seite

- Änderungen auf korrektem Pfad und Encoding landen lassen
- Mehrdatei-Edits organisieren
- Abstimmung mit Formatter und Linter

## Dateitypen und Hinweise

| Typ | Achtung |
|---|---|
| Quellcode `.ts` `.py` usw. | `AGENTS.md` und bestehende Muster folgen |
| Config `.json` `.yaml` `.toml` | Struktur leicht kaputt; gültige Syntax verlangen |
| Dokumente `.md` | Relative Links, gemischtsprachige Konventionen |
| Generierter Code | Ob committen oder gitignore klarstellen |

Kontext: [Datei- und Ordnerkontext](/guide/context/file-and-folder-context/)

## Warum diese Dateien oft scheitern

Typische Problemstellen:

- Falsche Datei beschrieben
- Für eine kleine Änderung große Flächen umgeschrieben
- Stil weicht vom Projekt ab
- Config-Syntax still kaputt

## Empfohlene Prompt-Struktur

```text
Ziel: <ein Satz>
Erlaubt: <Pfad-Glob>
Verboten: Lockfile, irrelevante Verzeichnisse
Stil: wie <Beispieldatei>
Fertig: geänderte Dateien listen + <Testbefehl> ausführen
```

Siehe [Anatomie guter Aufgaben](/prompts/task-anatomy/)

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

Oft stabiler: „kleiner Umfang, erklärbar, reviewbar“ statt „nebenbei groß flächig optimieren“.

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

- [Diffs prüfen](/guide/quality/review-diffs/): Logik, Umfang, Löschungen
- [Tests ausführen](/guide/quality/run-tests/)
- Unbeabsichtigte `TODO`-Platzhalter ohne Umsetzung

## Häufige Fehler

- „Ganzes Projekt refactoren“ → Hunderte Dateien
- Binär- oder Minified-Dateien als Text erzwingen
- Absolute Dokumentlinks → interne 404

Text und Code scheitern oft an zu viel, zu verstreut, schwer reviewbar. Umfang, Stil und Überprüfung klar sagen spart viele Runden.

---

**Status:** verified  
**Gilt für:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen verifizierte Kapitel zu Datei-/Ordnerkontext, Aufgabenanatomie, Diff-Review und Tests; diese Seite bestätigt nur das stabile Prinzip „Pfade begrenzen, Stil halten, Überprüfung vorab klären“.  
**Zuletzt geprüft:** 2026-07-26
