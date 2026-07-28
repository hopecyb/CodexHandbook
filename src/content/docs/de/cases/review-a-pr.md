---
title: Einen PR prüfen
description: Vor dem Merge eine strukturierte Diff-Prüfung mit Codex durchführen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Einen PR prüfen

## Metadaten

| Feld | Inhalt |
|---|---|
| Zielgruppe | Entwickler / Teams |
| Client | CLI / IDE / Cloud |
| Geschätzte Dauer | 20–40 Minuten |

## 1. Ziel und Kontext

**Ziel:** Vor dem Merge Scope-Creep, Sicherheitsrisiken und Testlücken finden.

**Erfolgskriterien:** Die Prüfausgabe ist auf konkrete Dateien/Zeilen zurückführbar; P0-Punkte sind behoben oder blockieren den Merge.

## 2. Empfohlener Prompt

```text
Vergleiche den Diff des aktuellen Branches mit main (noch keinen Code ändern):
1. Geht der Umfang über das Issue hinaus?
2. Gibt es offensichtliche Sicherheitsrisiken (Secrets, Injection, Berechtigungen)?
3. Fehlen Tests oder Dokumentation?
Ausgabe als Checklist mit P0/P1 und Dateipfaden.
```

## 3. Team-Verstetigung

- Skill [`$pr-review`](/skills/examples/review-skill/) verwenden
- CI-Integration siehe [Code-Review-Automatisierung](/guide/developer-platform/ci-cd/code-review-automation/)

## 4. Verwandt

- [Prüf-Vorlage](/prompts/templates/review/)
- [Prüfung vor dem Merge](/cases/workflows/review-before-merge/)
---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Die aktuellen Codex-Use-Cases bei OpenAI Developers enthalten weiterhin „Review GitHub pull requests“ und betonen das Auffangen von Regressionen und potenziellen Problemen vor der menschlichen Prüfung. Das Beispiel auf dieser Seite verlangt nur eine strukturierte Diff-Prüfung mit P0/P1 und Dateipfaden und hängt nicht an einer bestimmten Oberfläche oder festen Befehlen.  
**Zuletzt geprüft:** 2026-07-26
