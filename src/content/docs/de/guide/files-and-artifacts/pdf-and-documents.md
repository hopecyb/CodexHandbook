---
title: PDF und Dokumente
description: "Umfang, Werkzeuge und Abnahme, wenn Codex PDF-Dokumente liest, zusammenfasst oder erzeugt."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

PDFs dienen Spezifikationen, Papieren, Scans und Exportberichten. Anders als Reiner Text: PDF ist **strukturell komplex, groß, schwer zu diffen** — Aufgabenweise separat vereinbaren.

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
4. **Sensibel**: Verträge, Ausweise usw. über [sensiblen Kontext](/guide/context/sensitive-context/)

### Grenzen

- Scan-PDFs brauchen oft OCR — Stichproben manuell
- Komplexe Layouts, Mehrspalten, Fußnoten verlieren Struktur leicht
- Riesige PDFs nicht in einer Aufgabe — abschnittsweise oder zuerst Markdown-Gliederung

## Häufige Missverständnisse

### 1. Ganzes PDF reinwerfen ≠ stabile Extraktion der Schwerpunkte

Bei Länge, komplexer Struktur, Scan-Seiten:

- Umfang begrenzen
- Aufgabe spezifizieren
- abschnittsweise

### 2. Scan-PDF ≠ Text-PDF

Scans hängen oft an OCR; OCR-Fehler ziehen Zusammenfassung, Extraktion und Urteil mit.

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
- Seitenformat, Sprache, Schrift (bei CJK-PDF: Einbettung)
- Ob nach Git (große Binärdateien oft Artifact/Release)

## Direkt nutzbare Formulierung

```text
Bitte nur Seiten 12–18 von `docs/spec.pdf` lesen und Abnahmekriterien extrahieren.
Nicht das ganze Dokument zusammenfassen.
Bei OCR- oder Layout-Unsicherheit klar markieren.
```

## Repo-Strategie

- Große Binär-PDFs: **Git LFS** oder nicht ins Repo
- Unlesbarer Diff: Abnahme durch **Öffnen** + [Artefakte überprüfen](/guide/quality/verify-artifacts/)
- Generiertes: [Generierte Artefakte abnehmen](/guide/files-and-artifacts/generated-artifacts/)

## Häufige Fehler

- „Ein Wort im PDF ändern“ ohne editierbare Quelle (`.md` / `.tex`)
- Vertrauliche PDFs ins öffentliche Repo und dann Cloud
- Nur „Datei existiert“ prüfen, nicht öffnen

## Abnahmeliste

- [ ] PDF im Ziel-Reader/Druckumgebung öffnbar
- [ ] Seiten, TOC, kritische Tabellen wie erwartet
- [ ] Repo-Volumen und LFS-Policy teamkonform

Bei PDF: je klarer der Umfang, desto stabiler. Nach dem Erzeugen nicht nur „Datei da“ — öffnen und Inhalt prüfen.

---

**Status:** verified  
**Gilt für:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen verifizierte Kapitel zu Dateikontext, Artefaktprüfung, sensiblem Kontext und Dateiverarbeitung; bestätigt nur „PDF begrenzen, OCR/Layout-Fehler beachten, nach Erzeugung wirklich öffnen“.  
**Zuletzt geprüft:** 2026-07-26
