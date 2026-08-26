---
title: "Beispiel: Review-Skill"
description: Skill-Beispiel auf Basis von pr-review — zur Team-Wiederverwendung oder Anpassung.
locale: de
source_locale: zh-CN
source_revision: 5fb154c
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Beispiel: Review-Skill

Entspricht `pr-review` in [Ersten Skill erstellen](/de/skills/create-your-first-skill/) — nach Teambedarf anpassen.

## SKILL.md

```md
---
name: pr-review
description: "Prüft den git Diff, listet Blocker, Testlücken und Stilhinweise. Nutzen, wenn der Nutzer Review, Prüfung oder Checks vor dem Merge erwähnt. Nicht für neue Features."
---

# PR-Review

## Eingabe
- Standard-Vergleichsbranch: main (sonst Default-Branch)

## Ablauf
1. Geänderte Dateien und Typen listen (Feature/Fix/Refactor/Docs)
2. Pro Logikänderung: fehlen Tests? API-Bruch?
3. Prüfen auf Secrets, Debug-Logs, zu große irrelevante Diffs
4. Ausgabe: 🔴 Blocker / 🟡 Empfehlung / 🟢 OK

## Verboten
- Kein git push
- Keine unbesprochenen öffentlichen APIs ändern
```

## Ausprobieren

```text
$pr-review Bitte prüfe meine aktuellen uncommitteten Änderungen
```
---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diff prüfen und strukturierte Schlüsse ausgeben bleibt typisches Codex-Szenario; diese Seite liefert ein illustratives `SKILL.md`-Skelett, keine volatile UI.  
**Zuletzt geprüft:** 2026-07-26
