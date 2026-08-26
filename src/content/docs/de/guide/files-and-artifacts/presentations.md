---
title: Präsentationen
description: "Folien erzeugen, überarbeiten und exportieren — Struktur, Master und Speaker Notes."
locale: de
source_locale: zh-CN
source_revision: 791b567
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 50
---

Präsentationen (PPT, Keynote, Google Slides, Marp/Reveal usw.) brauchen **Erzählstruktur** und **visuelle Konsistenz**. Der Agent kann Outline und Erstentwurf — Master und Brand bleiben menschliche Verantwortung.

Wertvoll bei Codex: zuerst Struktur, Reihenfolge und Logik; den Feinschliff schließen Sie.

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

Format am Aufgabenanfang fest — keine gemischten Toolchains.

Nach Empfänger:

- Kunde/Boss/Kollege öffnet und editiert → meist `.pptx`
- Mit Code versionieren → meist Markdown-Slides
- Nur Lesefassung → oft finales PDF

## Empfohlener Workflow

```text
1. Outline: Audience, Dauer, 3–5 Kernbotschaften
2. Pro Seite Titel + 3 Bullets, Notes-Stichpunkte
3. Tool wählen, Erstentwurf erzeugen
4. Mensch: Master, Charts, Datenherkunft
5. PDF exportieren, Probezeit
```

Wie [Explore—Plan—Execute—Verify](/de/cases/workflows/explore-plan-execute-verify/): Outline zuerst abnehmen, dann Details.

## Warum zuerst Struktur

Ohne Struktur-Kontrolle legt Codex leicht viele Seiten, aber:

- Reihenfolge chaotisch
- Seitenzahl außer Kontrolle
- Jede Seite wie eigenes Poster, nicht ein Bericht

Stabiler in 3 Schichten:

1. Was soll diese Präsentation klar machen
2. Welche Kernbotschaft trägt jede Seite
3. Dann erst Text, Chart-Erklärungen, Notes füllen lassen

## Häufige Missverständnisse

### 1. Bunter = stärkere Aussage?

Oft zählt mehr:

- Titel in einem Satz klar
- Fortschritt zwischen Seiten
- Daten mit Quelle

### 2. Ganzes Deck generiert = kein Menschen-Check?

Nein.  
Menschlich prüfen:

- Brand und Master
- kritische Schlussfolgerungen
- Zahlen und Charts
- externe Versandversion

### 3. Vollere Seite = mehr Information?

Meist schwerer zu präsentieren.  
Zu viele Bullets, Charts und Fazits auf einer Seite — Audience greift den Fokus nicht.

## Typische Produktionsreihenfolge

Anforderungen so geben:

1. Wer Audience
2. Wie lange
3. Welche 3 Takeaways
4. Zuerst Outline
5. Nach Outline-OK Seiten ausarbeiten
6. Zuletzt Notes, Visuals, Exportformat

So: zuerst Struktur, dann Text, zuletzt Stil.

## Prompt-Schwerpunkte

- **Audience**: Technik vs. Management → Terminologietiefe
- **Seitenobergrenze**: gegen 80 Seiten Fülltext
- **Brand**: Primärfarbe, Logo-Pfad, kein Clipart (falls Policy)
- **Datencharts**: Quelldatei nennen; aktualisierbar, kein erfundenes Screenshot

Direkt so formulieren:

> „Zuerst Outline max. 10 Seiten, Audience nicht-technisches Management, eine Kernbotschaft pro Seite, danach Speaker Notes.“

Stabiler als „mach ein cooles PPT“.

Bilder: [Bilder und Screenshots](/de/guide/files-and-artifacts/images-and-screenshots/); reine Generierung: [Bildgenerierung](/de/guide/tools/image-generation/).

## Abnahme

- Schriftgröße unter Projektion lesbar
- Animation maßvoll (zu viel schwer wartbar)
- Zahlen konsistent mit [Quellen validieren](/de/guide/quality/validate-sources/)
- Speaker Notes ausreichend (falls nötig)

## Was Codex, was Sie

| Besser Codex | Besser Sie |
|---|---|
| Outline in Seiten | Finale Schlusswortwahl |
| Seitentitel-Entwurf | Brand-Konsistenz |
| Notes-Entwurf | Sensible Daten |
| Chart-Beschreibungen | Externe Release-Version |

Diese Teilung spart Zeit und hält Qualität.

## Häufige Fehler

- Ohne Outline direkt „Quartalsbericht-PPT“
- `.pptx` binär hin und her, ohne Markdown-Quelle
- Chart-Daten weichen von Repo-CSV ab
- Agent soll Struktur, Design, Fazit und Datenkaliber gleichzeitig entscheiden

## Abnahmeliste

- [ ] Outline menschlich bestätigt vor Volltext
- [ ] In Ziel-Playback-Umgebung ohne Schriftchaos
- [ ] Kritische Daten auf Quelldateien rückführbar

---

**Status:** verified  
**Gilt für:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen verifizierte Kapitel zu Artefakt-Priorität, Quellenvalidierung, Bildern und Artefaktprüfung; beschränkt auf „zuerst Struktur, dann Text, zuletzt Stil und Export“.  
**Zuletzt geprüft:** 2026-07-26
