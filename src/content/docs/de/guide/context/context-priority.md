---
title: Kontext-Priorität
description: Bei widersprüchlichen Anweisungen — wer gilt.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Häufige Konflikte: Projektbeschreibung vs. aktueller Prompt vs. altes Gespräch. Praxis:

1. **Aktueller Aufgaben-Prompt** hat für diesen Rahmen höchste Priorität
2. Projektweite Sicherheitsverbote (z. B. «kein Push», «keine Produktionsgeheimnisse») immer einhalten
3. Bei Konflikt klar schreiben: «Diese Nachricht gilt; frühere Anweisungen zu X ignorieren»

„Kontext-Priorität“ = bei mehreren widersprüchlichen Anweisungen, welche zählt.

## Was „Priorität“ meint

Alltägliche Konflikte:

- früher „nur lesen / analysieren“
- später „ändere direkt“
- im Projekt „dieses Verzeichnis nicht anfassen“

Ohne Schichten: will ändern und darf nicht — Chaos.

## Häufige Missverständnisse

### 1. Ein späterer Satz überschreibt immer alles Frühere?

Nicht ganz. Projektweite Sicherheitsgrenzen lässt ein temporärer Satz oft nicht kippen.

### 2. Widersprüche egal — es versteht schon?

Genau dann geht’s schief. Je widersprüchlicher, desto klarer sagen: „welche gilt diesmal“.

### 3. Nur Theorie?

Sehr praktisch — beeinflusst:

- Fehländerungen
- Verstöße gegen Repo-Regeln
- alte Aufgabe in neue ziehen

## Klarer bei Konflikten schreiben

Bei möglichen Widersprüchen direkt:

```text
Diese Nachricht gilt; frühere Anweisungen zu X ignorieren.
```

Besonders nützlich in langen Threads.

Bei Kontextkonflikt: „diesmal dieser Anweisung folgen“ festlegen. Team-Pflichtstrategien können persönliche Vorlieben überstimmen.


---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite erklärt nur den Umgang mit widersprüchlichem Kontext; ohne Abhängigkeit von konkreter Client-UI oder volatilen Produktfakten; Konzepte und Beispiele geprüft.  
**Zuletzt geprüft:** 2026-07-26
