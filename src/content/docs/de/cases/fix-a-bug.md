---
title: Einen Bug beheben
description: "Vom fehlgeschlagenen Test zur minimalen Korrektur und Regression — das häufigste Entwickler-Schleifenbeispiel."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

## Metadaten

| Feld | Inhalt |
|---|---|
| Zielgruppe | Entwickler |
| Client | CLI oder IDE (lokales Repository) |
| Geschätzte Dauer | 30–60 Minuten |
| Prüfdatum | 2026-07-25 |

## 1. Ziel und Kontext

**Ziel:** Einen Regressions-Bug beheben, der bereits durch einen Unit-Test gefangen wurde, und Tests ergänzen, damit er nicht wiederkommt.

**Erfolgskriterien:**

- Der ursprünglich fehlgeschlagene Test besteht
- Die gesamte Testsuite bleibt grün
- Der Diff betrifft nur notwendige Dateien

**Außerhalb des Umfangs:** Großes Refactoring, Major-Upgrades von Abhängigkeiten.

## 2. Vorbereitung

- Repository klonen, `pnpm install` (oder gemäß `AGENTS.md`)
- Lokale Reproduktion des Fehlers bestätigen: `pnpm test -- path/to/failing.test.ts`
- Branch: `fix/issue-123-short-desc`

## 3. Workflow

### Erkunden

```text
Ändere vorerst keinen Code. Lies den fehlgeschlagenen Test @tests/auth/login.test.ts und die Implementierung @src/auth/login.ts,
erkläre in höchstens 5 Punkten die Fehlerursache und zitiere Assertion sowie Stack-Zeilennummern.
```

### Planen

```text
Gib einen Fix-Plan: welche Dateien ändern, ob neue Tests nötig sind, wie überprüfen.
Warte auf meine Antwort «Ausführen», bevor du Code änderst.
```

### Ausführen

```text
Führe Plan-Schritte 1–2 aus. Nach jedem Schritt nur die relevanten Tests laufen lassen.
```

### Überprüfen

```text
Vollständige Testsuite ausführen; Diff zur Review zusammenfassen; kein git push.
```

Manuell: Diff lesen, unrelated Änderungen ausschließen, gemäß [Diffs prüfen](/guide/quality/review-diffs/) kontrollieren.

## 4. Fehler und Wiederherstellung

| Problem | Vorgehen |
|---|---|
| Nach dem Fix neue Fehlschläge | `git stash` oder Commit zurücksetzen, Änderungsumfang verkleinern |
| Falsche Root-Cause-Annahme | Zurück zur Erkundung, neue Hypothese verlangen |
| Flaky Tests | Zuerst Tests stabilisieren, dann Geschäftslogik reparieren |

## 5. Verstetigen

- Wenn solche Bugs wiederholt auftreten, eine Regel in `AGENTS.md` ergänzen
- Optional `$regression-guard`-Skill extrahieren: vor dem Merge kritische Testliste ausführen

## 6. Verwandte Kapitel

- [Eine Codebasis verstehen](/cases/understand-a-codebase/)
- [Diffs prüfen](/guide/quality/review-diffs/)
- [Tests ausführen](/guide/quality/run-tests/)

---

**Status:** verified  
**Geeignete Produkte:** CLI / IDE  
**Prüfgrundlage:** Die OpenAI-Developers-Startseite beschreibt Codex weiterhin als geeignet zum Beheben von Defekten, Ausführen von Tests und Prüfen von Änderungen. Das Beispiel auf dieser Seite fokussiert den stabilen Engineering-Kreislauf „zuerst Fehlschlag reproduzieren, minimale Korrektur, Tests ergänzen und Regression prüfen“ und hängt nicht an einem bestimmten Framework oder einer Produkt-UI.  
**Zuletzt geprüft:** 2026-07-26
