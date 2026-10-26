---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Kreuzgeprüft gegen verifizierte Kapitel zu Artefakt-Priorität, Quellenvalidierung, Bildern und Artefaktprüfung; beschränkt auf „zuerst Struktur, dann Text, zuletzt Stil und Export“."
  checkedAt: "2026-07-26"
title: Präsentationen
description: "Folien erzeugen, überarbeiten und exportieren — Struktur, Master und Sprechernotizen."
locale: de
source_locale: zh-CN
source_revision: "fb319fa"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 50
---

Präsentationen (PPT, Keynote, Google Slides, Marp/Reveal usw.) brauchen **Erzählstruktur** und **visuelle Konsistenz**. Der Agent kann Gliederung und ersten Entwurf liefern. Folienmaster und Markenrichtlinien müssen weiterhin Menschen prüfen.

Wertvoll bei Codex: zuerst Struktur, Reihenfolge und Logik; den endgültigen Feinschliff übernimmst du.

## Inhalt dieser Seite

- Empfohlener Workflow für Folien mit Codex
- Formatwahl (`.pptx`, Markdown-Slides)
- „Jede Seite anderer Stil“ vermeiden

## Lieferformat zuerst festlegen

| Format | Geeignet für |
|---|---|
| Marp / Slidev / reveal.md | Entwickler, versionsfreundlich |
| `.pptx` | Business, Kundenfreigabe |
| Google Slides | Live-Kollaboration (oft Export/MCP) |
| PDF-Export | Nur-Lese-Verteilung |

Lege das Format zu Beginn fest, damit der Agent nicht mehrere Werkzeugketten vermischt.

Nach Empfänger:

- Kunde/Boss/Kollege öffnet und editiert → meist `.pptx`
- Mit Code versionieren → meist Markdown-Slides
- Nur Lesefassung → oft finales PDF

## Empfohlener Workflow

```text
1. Gliederung: Zielgruppe, Dauer, 3–5 Kernbotschaften
2. Pro Folie ein Titel und drei Stichpunkte; Sprechernotizen ergänzen
3. Tool wählen, Erstentwurf erzeugen
4. Folienmaster, Diagramme und Datenquellen manuell prüfen
5. PDF exportieren und den Vortrag mit Zeitmessung proben
```

Wie [Explore—Plan—Execute—Verify](/de/cases/workflows/explore-plan-execute-verify/): Gliederung zuerst abnehmen, dann Details.

## Warum zuerst Struktur

Ohne vorherige Strukturplanung erstellt Codex schnell viele Folien, doch dabei können folgende Probleme entstehen:

- Reihenfolge chaotisch
- Seitenzahl außer Kontrolle
- Jede Seite wie eigenes Poster, nicht ein Bericht

Stabiler in 3 Schichten:

1. Was soll diese Präsentation klar machen
2. Welche Kernbotschaft trägt jede Seite
3. Dann erst Text, Diagrammerläuterungen, Sprechernotizen füllen lassen

## Häufige Missverständnisse

### 1. Bunter = stärkere Aussage?

Oft zählt mehr:

- Titel in einem Satz klar
- Fortschritt zwischen Seiten
- Daten mit Quelle

### 2. Ein vollständiger Entwurf ersetzt die menschliche Prüfung?

Nein.
Menschlich prüfen:

- Markenrichtlinien und Folienmaster
- kritische Schlussfolgerungen
- Zahlen und Diagramme
- externe Versandversion

### 3. Vollere Seite = mehr Information?

Meist schwerer zu präsentieren.
Zu viele Bullets, Diagramme und Fazits auf einer Seite — das Publikum erkennt die Kernaussage nicht.

## Typische Produktionsreihenfolge

Anforderungen so geben:

1. Wer die Zielgruppe ist
2. Wie lange der Vortrag dauert der Vortrag dauert
3. Welche drei Kernbotschaften das Publikum mitnehmen soll
4. Zuerst eine Gliederung anfordern
5. Nach Freigabe der Gliederung die Folien ausarbeiten
6. Zuletzt Sprechernotizen, visuelle Vorgaben und Exportformat ergänzen

So: zuerst Struktur, dann Text, zuletzt Stil.

## Prompt-Schwerpunkte

- **Zielgruppe**: Technik vs. Management → Terminologietiefe
- **Seitenobergrenze**: gegen 80 Seiten Fülltext
- **Marke**: Primärfarbe, Logo-Pfad, kein Clipart (falls Policy)
- **Datendiagramme**: Quelldatei nennen; aktualisierbar, keine erfundenen Daten in einem Screenshot

Direkt so formulieren:

> „Zuerst Gliederung max. 10 Seiten, Zielgruppe nicht-technisches Management, eine Kernbotschaft pro Seite, danach Sprechernotizen.“

Stabiler als „mach ein cooles PPT“.

Bilder: [Bilder und Screenshots](/de/guide/files-and-artifacts/images-and-screenshots/); reine Generierung: [Bildgenerierung](/de/guide/tools/image-generation/).

## Abnahme

- Schriftgröße unter Projektion lesbar
- Animation maßvoll (zu viel schwer wartbar)
- Zahlen konsistent mit [Quellen validieren](/de/guide/quality/validate-sources/)
- Sprechernotizen ausreichend (falls nötig)

## Was Codex übernimmt und was du entscheidest

| Besser Codex | Besser selbst prüfen |
|---|---|
| Gliederung auf Folien verteilen | Formulierung der endgültigen Schlussfolgerungen |
| Seitentitel-Entwurf | Markenkonsistenz |
| Entwurf der Sprechernotizen | Sensible Daten |
| Diagrammbeschreibungen | Version für die externe Veröffentlichung |

Diese Aufgabenteilung spart Zeit und erleichtert die Qualitätskontrolle.

## Häufige Fehler

- Ohne Gliederung direkt „Quartalsbericht-PPT“
- `.pptx` binär hin und her, ohne Markdown-Quelle
- Diagrammdaten weichen von Repo-CSV ab
- Agent soll Struktur, Design, Fazit und Datendefinitionen gleichzeitig entscheiden

## Abnahmeliste

- [ ] Gliederung menschlich bestätigt vor Volltext
- [ ] In vorgesehenen Präsentationsumgebung ohne Schriftchaos
- [ ] Kritische Daten auf Quelldateien rückführbar
