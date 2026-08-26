---
title: Verzeichnis templates/
description: Ausgabevorlagen und Report-Skelette im Skill bereitstellen.
locale: de
source_locale: zh-CN
source_revision: 9f93d04
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

`templates/` spart nicht nur Layout-Zeit. Der praktische Nutzen: Skill-Ausgaben werden stabiler — ohne jedes Mal neu zu improvisieren.

Während `references/` eher „was beim Input gilt“ betrifft, geht es bei `templates/` um „wie die Ausgabe aussieht“. Feste Struktur und leichte Nachprüfung gehören hierher.

# Verzeichnis templates/

`templates/` speichert Ausgabeformate, die der Skill wiederverwendet — z. B. Review-Report, Changelog-Skelett, Forschungs-Vergleichstabelle.

## Beispiel

```text
review-skill/
├── SKILL.md
└── templates/
    └── review-report.md
```

In `SKILL.md`: „Review-Ergebnis nach Struktur von templates/review-report.md ausgeben.“

## Was es leistet

- `SKILL.md` = Ablauf
- `templates/` = Aussehen des Ergebnisses

Oder:

- Skill entscheidet „wie vorgehen“
- Template entscheidet „wie präsentieren“

Das reduziert zwei typische Probleme:

- Jedes Mal andere Ausgabe-Struktur
- Information vorhanden, aber schwer lesbar, vergleichbar, nachprüfbar

## Wann `templates/` lohnt

Wenn Ergebnisse jedes Mal ähnlich aussehen sollen:

- Review-Reports
- Changelog
- Forschungs-Vergleichstabellen
- Release-Checklisten

Beim ersten Skill optional.  
Sobald du wiederholt „bitte in dieser Struktur ausgeben“ sagst, lohnt die Extraktion.

## Häufige Irrtümer

### 1. Templates nur fürs Aussehen

Sie machen Ergebnisse auch stabiler, vergleichbarer und leichter nachprüfbar.

### 2. Mit Template entfallen Ausgabe-Anforderungen in SKILL.md

Nein.

`SKILL.md` muss weiterhin sagen, wann die Vorlage gilt und welche Felder Pflicht sind.

### 3. Jede Ausgabe braucht ein Template

Nicht immer.

Bei seltenen oder stark variierenden Ergebnissen engen Templates eher ein.

## Wann ein eigenes `templates/`?

Wenn du zwei- bis dreimal hintereinander „in dieser Struktur ausgeben“ wiederholst, lohnt `templates/`.

Kernwert: stabile Ausgabe-Struktur und bessere Wiederverwendung.
---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Die aktuelle Codex-Laufzeit kann Skills mit Begleitdateien führen; diese Seite behandelt das stabile Muster Ausgabevorlagen und hängt nicht an Client-UI oder Installationsabläufen.  
**Zuletzt geprüft:** 2026-07-26
