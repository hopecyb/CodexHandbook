---
title: Eine Anleitungsseite schreiben
description: Vorgaben für Struktur, Frontmatter und Querverweise neuer Handbuchseiten.
sidebar:
  order: 10
locale: de
source_locale: zh-CN
source_revision: 9b6d47f
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Diese Seite erklärt, wie du unter `src/content/docs/` eine **Anleitungsseite** hinzufügst oder überarbeitest, also weder ein reines Fallbeispiel noch eine reine Referenztabelle.

## Inhalt dieser Seite

Typische Schwierigkeiten sind:

- Es ist unklar, wie eine Anleitungsseite aufgebaut sein soll
- Es ist unklar, ob du gerade ein Tutorial, eine Vorgabe oder nur eine Kapitelzusammenfassung schreibst
- Es ist unklar, wie der Text Einsteigern tatsächlich hilft

Die folgenden Abschnitte trennen diese Fragen und helfen dir, eine verständliche und langfristig pflegbare Anleitungsseite zu schreiben.

## Zweck einer Anleitungsseite

Eine „Anleitungsseite“ ist nicht fertig, sobald Informationen auf ihr gesammelt wurden. Sie soll Leser von „Ich weiß, dass dieses Thema existiert“ zu „Ich verstehe ungefähr, wann ich es brauche, womit ich beginne und welche Fehler ich vermeiden sollte“ führen.

Deshalb enthält sie üblicherweise mehr als eine Liste von Begriffen oder Befehlen. Sie zeigt außerdem, wie die Leser anschließend weiterarbeiten können.

## Frontmatter

```yaml
---
title: Seitentitel
description: Ein Satz zum Problem, das diese Seite löst
---
```

Optional kannst du den einheitlichen Footer bestehender Seiten verwenden:

```markdown
---

**Status:** planned | draft | review | verified | outdated | archived
**Unterstützte Produkte:** App / CLI / IDE / Cloud
**Zuletzt geprüft:** YYYY-MM-DD
```

## Empfohlene Struktur

Wähle passende Abschnitte aus der [Vorlage zur Integration externer Quellen](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/external-source-integration.md#6-%E6%8E%A8%E8%8D%90%E9%A1%B5%E9%9D%A2%E6%A8%A1%E6%9D%BF). Häufig verwendet werden:

- Welches Problem löst die Seite?
- Für wen ist sie gedacht?
- Was ist die kleinste brauchbare Vorgehensweise?
- Welcher Workflow wird empfohlen?
- Welche Fehler treten häufig auf?
- Wo liegen die Sicherheitsgrenzen?
- Welche Punkte müssen bei der Abnahme geprüft werden?
- Welche Quellen wurden verwendet?

Seiten zur Produktbedienung dürfen stärker schrittweise aufgebaut sein, Konzeptseiten stärker mit Tabellen und Diagrammen arbeiten.

## Häufige Missverständnisse

### Nicht jede Seite muss eine Enzyklopädie sein

Beim Schreiben der ersten Anleitungsseite landet leicht das gesamte eigene Wissen im Text. Dadurch geht der Schwerpunkt verloren.

Eine üblichere Reihenfolge ist:

- Zuerst erklären, welches zentrale Problem die Seite löst
- Danach die wahrscheinlichsten Missverständnisse der Leser behandeln
- Anschließend eine ausreichende Vorgehensweise oder Entscheidungshilfe geben

Das hilft Einsteigern meist mehr als eine möglichst vollständige Sammlung aller Details.

### Nicht nur an das Schreiben, sondern auch an das Lesen denken

Du selbst kennst den Kontext, neue Leser jedoch nicht.

Ergänze deshalb bewusst diese Übergangsinformationen:

- Für wen die Seite geeignet ist
- Welches Problem nach dem Lesen lösbar sein soll
- Welcher Punkt für einen schnellen Einstieg zuerst wichtig ist

### Eine Anleitungsseite ersetzt nicht die offizielle Dokumentation

Ein Community-Handbuch kann Informationen verständlich machen, verbinden und auf die Praxis übertragen. Veränderliche Fakten müssen jedoch weiterhin anhand der offiziellen Dokumentation verifiziert werden.

## Querverweise

- Verwende für interne Links absolute Pfade: `/de/cases/workflows/explore-plan-execute-verify/`
- Verlinke auf maßgebliche Seiten, statt große Textteile zu duplizieren
- Trage neue Seiten im `index.md` des Kapitels und in der Sidebar von `astro.config.mjs` ein

## Tonalität

- Deutsch für Praktiker
- Unsicherheit offen benennen, etwa mit „Maßgeblich ist die offizielle Dokumentation“
- Keine Erzählung vom „Universal-Prompt“ verwenden

## Schreibreihenfolge

Eine hilfreiche Reihenfolge ist:

1. Beschreibe zuerst das konkrete Problem der Seite.
2. Behandle dann die Stellen, die Leser am ehesten missverstehen oder überspringen.
3. Ergänze anschließend die kleinste brauchbare Vorgehensweise, einen Workflow oder eine Entscheidungshilfe.
4. Füge zum Schluss Querverweise und Quellen hinzu.

## Verifikation

Lies vor dem PR [Technische Inhalte verifizieren](/de/guide/contributing/verify-technical-content/). Veränderliche Angaben wie Befehle, Preise und Berechtigungen müssen erneut überprüft werden.

Eine gute Anleitungsseite zeichnet sich nicht dadurch aus, dass sie jedes Detail enthält. Sie zeigt neuen Lesern, weshalb die Seite existiert, womit sie beginnen und wohin sie anschließend gehen können.

## Quellen
- Offizielle OpenAI-Dokumentation zu Codex
```
---

**Status:** verified  
**Prüfgrundlage:** Anhand des aktuellen Frontmatters, der Footer-Status, der Querverweise und der Sidebar-Pflege dieses Repositorys geprüft. Die Seite beschreibt Schreibregeln und Strukturempfehlungen für Handbuchtexte und hängt nicht von Einzelheiten einer Produktversion ab.  
**Zuletzt geprüft:** 2026-07-26
