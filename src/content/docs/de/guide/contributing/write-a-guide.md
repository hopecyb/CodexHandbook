---
title: Guide-Seite schreiben
description: "Struktur, Frontmatter und Cross-Link-Konventionen für neue Handbuchtexte."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Diese Seite: Wie Sie unter `src/content/docs/` **Guide-Seiten** anlegen oder umschreiben (keine reinen Fallstudien, keine reinen Referenztabellen).

## Inhalt dieser Seite

Typische Stolperstellen:

- Unklar, wie eine Guide-Seite aussehen soll
- Unsicher, ob „Tutorial“, „Norm“ oder „Inhaltsverzeichnis-Zusammenfassung“
- Unklar, was Einsteigern wirklich hilft

Hier getrennt — für wartbare, lesbare Guides.

## Rolle der Guide-Seite

Nicht „Material stapeln“. Sie soll von „Thema existiert“ zu „wann nutzen, was zuerst lesen, welche Fallen“ führen.

Also nicht nur Wissensliste oder Befehlsliste — sondern nächster Schritt klar.

## Frontmatter

```yaml
---
title: Seitentitel
description: In einem Satz, welches Problem die Seite löst
---
```

Optional einheitlicher Footer (wie bestehende Seiten):

```markdown
---

**Status:** planned | draft | review | verified | outdated | archived
**Gilt für:** App / CLI / IDE / Cloud
**Zuletzt geprüft:** YYYY-MM-DD
```

## Empfohlene Struktur

Abschnitte nach [External-Source-Integrations-Template](/docs/planning/external-source-integration.md#6-推荐页面模板); häufig:

- Welches Problem die Seite löst
- Für wen
- Minimal nutzbares Vorgehen
- Empfohlener Workflow
- Häufige Fehler
- Sicherheitsgrenzen
- Abnahmeliste
- Quellen

Produktbedienseiten eher Schritte; Konzeptseiten eher Tabellen und Diagramme.

## Häufige Missverständnisse

### Nicht jede Seite als Enzyklopädie

Beim ersten Schreiben alles reinpacken — Fokus geht verloren.

Stabiler:

- Zuerst Hauptproblem
- Dann typische Missverständnisse
- Dann brauchbares Vorgehen oder Entscheidungsverfahren

Hilft Einsteigern oft mehr als alle Details auf einmal.

### Nicht nur schreiben, was Sie wissen — wie andere lesen

Sie kennen den Kontext; Erstleser nicht.

Brücken bewusst:

- Für wen die Seite
- Was nach dem Lesen lösbar sein soll
- Was zuerst greifen, wenn nur Einstieg

### Guide ersetzt keine offizielle Doku

Community hilft verstehen, verbinden, landen — flüchtige Fakten weiter an der offiziellen Doku prüfen.

## Cross-Links

- Interne Links mit Root-Pfad: `/cases/workflows/explore-plan-execute-verify/`
- Auf Autoritätsseiten verlinken, große Duplikate vermeiden
- Neue Seite in Kapitel-`index.md` und `astro.config.mjs`-Sidebar eintragen

## Ton

- Technisches Deutsch für Praktiker
- Unsicherheit anerkennen („laut offizieller Doku“)
- Keine „Wunder-Prompt“-Erzählung

## Schreibreihenfolge

1. Welches Problem löst die Seite
2. Was Leser leicht missverstehen oder überspringen
3. Minimal nutzbares Vorgehen, Workflow oder Entscheidung
4. Zuletzt Cross-Links und Quellen

## Prüfung

Vor dem PR [Technische Inhalte prüfen](/guide/contributing/verify-technical-content/) lesen. Befehle, Preise, Berechtigungen usw. nachprüfen.

Gute Guide-Seiten gewinnen nicht durch „alles voll“ — sondern dadurch, dass Erstleser wissen, warum die Seite existiert, was zuerst und wohin als Nächstes.

## Quellen schreiben

```markdown
## Quellen

- Offizielle OpenAI-Codex-Dokumentation
- Community-Strukturreferenz: CodexGuide (nur Themen, kein Originaltext)
```

---

**Status:** verified  
**Prüfgrundlage:** Gegen aktuelles Frontmatter, Footer-Status, Cross-Link-Gewohnheiten und Sidebar-Pflege geprüft; Schreibnorm und Strukturvorschläge, ohne produktversionsabhängige Details.  
**Zuletzt geprüft:** 2026-07-26
