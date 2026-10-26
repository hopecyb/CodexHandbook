---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Kreuzgeprüft gegen verifizierte Kapitel zu Dateikontext, Artefaktprüfung, sensiblem Kontext und Dateiverarbeitung; bestätigt nur „PDF begrenzen, OCR/Layout-Fehler beachten, nach Erzeugung wirklich öffnen“."
  checkedAt: "2026-07-26"
title: PDF und Dokumente
description: "Umfang, Werkzeuge und Abnahme, wenn Codex PDF-Dokumente liest, zusammenfasst oder erzeugt."
locale: de
source_locale: zh-CN
source_revision: "1f4f82b"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 30
---

PDFs werden für Spezifikationen, wissenschaftliche Arbeiten, Scans und exportierte Berichte verwendet. Anders als reine Textdateien sind sie **strukturell komplex, groß und schwer als Diff zu prüfen**. Vereinbare deshalb gesondert, wie die Aufgabe bearbeitet werden soll.

Häufige Probleme: unvollständiges Strukturverständnis oder zu großer Umfang.

## Inhalt dieser Seite

- Wie der Agent PDF-Inhalt richtig „liest“
- Format- und Pfadvereinbarungen beim Erzeugen/Ändern
- Abnahme: „Datei da“ ≠ „öffnet und stimmt“

## Warum PDF besonders knifflig ist

PDF kann gleichzeitig enthalten:

- Scan-Bilder
- Mehrspalten-Layout
- Kopf-/Fußzeilen
- Tabellen
- Bild-Text-Mischung

Je klarer „welchen Abschnitt, welches Ergebnis“, desto stabiler.

## PDF lesen

### Empfohlenes Vorgehen

1. **Pfad nennen**: `docs/spec.pdf` oder @-Verweis (clientabhängig)
2. **Ziel sagen**: Zusammenfassung, Kapitelabgleich, Tabellenextraktion
3. **Seiten oder Kapitel**: lange Docs begrenzen, Kontext sparen
4. **Sensibel**: Verträge, Ausweise usw. über [sensiblen Kontext](/de/guide/context/sensitive-context/)

### Grenzen

- Gescannte PDFs benötigen möglicherweise OCR; prüfe deren Ergebnisse manuell anhand von Stichproben
- Bei komplexen Layouts, mehreren Spalten und Fußnoten kann die Struktur verloren gehen
- Riesige PDFs nicht in einer Aufgabe — abschnittsweise oder zuerst Markdown-Gliederung

## Häufige Missverständnisse

### 1. Ganzes PDF reinwerfen ≠ stabile Extraktion der Schwerpunkte

Bei Länge, komplexer Struktur, Scan-Seiten:

- Umfang begrenzen
- Aufgabe spezifizieren
- abschnittsweise

### 2. Scan-PDF ≠ Text-PDF

Scans sind oft auf OCR angewiesen. Fehler bei der Texterkennung können Zusammenfassung, Extraktion und Bewertung verfälschen.

### 3. PDF-Datei erzeugt ≠ fertig

Prüfen:

- Öffnet sich
- Kein Zeichensatz-Chaos
- Seiten, Inhaltsverzeichnis, Tabellen korrekt
- CJK-/chinesische Schriften wirklich eingebettet

## PDF erzeugen oder aktualisieren

| Weg | Geeignet für |
|---|---|
| Aus Markdown/LaTeX kompilieren | Tech-Docs, Reports (reproduzierbar) |
| Aus HTML drucken | einfache Layouts |
| Bibliothek (z. B. reportlab) | programmatische Belege, Labels |

Im Prompt klar:

- Ausgabepfad und Dateiname
- Seitenformat, Sprache, Schrift (bei chinesischen PDFs: Einbettung)
- Ob nach Git (große Binärdateien oft Artifact/Release)

## Direkt nutzbare Formulierung

```text
Bitte nur Seiten 12–18 von `docs/spec.pdf` lesen und Abnahmekriterien extrahieren.
Nicht das ganze Dokument zusammenfassen.
Bei OCR- oder Layout-Unsicherheit klar markieren.
```

## Repo-Strategie

- Große Binär-PDFs: **Git LFS** oder nicht ins Repo
- Unlesbarer Diff: Abnahme durch **Öffnen** + [Artefakte überprüfen](/de/guide/quality/verify-artifacts/)
- Generiertes: [Generierte Artefakte abnehmen](/de/guide/files-and-artifacts/generated-artifacts/)

## Häufige Fehler

- „Ein Wort im PDF ändern“ ohne editierbare Quelle (`.md` / `.tex`)
- Vertrauliche PDFs in ein öffentliches Repository stellen und anschließend in Cloud verarbeiten lassen
- Nur „Datei existiert“ prüfen, nicht öffnen

## Abnahmeliste

- [ ] PDF im vorgesehenen Leseprogramm oder in der Druckumgebung zu öffnen
- [ ] Seiten, TOC, kritische Tabellen wie erwartet
- [ ] Repo-Volumen und LFS-Policy teamkonform

Bei PDF: je klarer der Umfang, desto stabiler. Nach dem Erzeugen nicht nur „Datei da“ — öffnen und Inhalt prüfen.
