---
title: Szenarien und Fallbibliothek
description: End-to-end reale Aufgaben — Vorbereitung, Ausführung, Überprüfung, Fehlerwiederherstellung und Retro.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Die Fallbibliothek beantwortet: «**Wie fühlt sich ein kompletter Codex-Durchlauf bei diesem realen Ziel an?**» und ergänzt einzelne Produktbeschreibungen.

## Fall vs. Tutorial

| | Einstiegstutorial | Fallbibliothek |
|---|---|---|
| Ziel | Einen Button/Begriff lernen | Eine Klasse realer Ergebnisse liefern |
| Struktur | Nach Produktfunktion | Nach Aufgabentyp |
| Fehlerbehandlung | Oft weggelassen | Pflicht |

## Nutzung

1. Fall wählen, der deinem Ziel am nächsten kommt (oder nur dessen «Vorbereitungsliste»)
2. Mit [Erkunden—Planen—Ausführen—Überprüfen](/cases/workflows/explore-plan-execute-verify/) abgleichen
3. Danach mit der [Fallvorlage](/cases/use-cases/case-study-template/) retrospektieren und entscheiden, ob ein Skill entsteht

## Vorhandene Starter-Fälle

| Bereich | Fall | Hinweis |
|---|---|---|
| Softwareentwicklung | [Bug-Fix mit Überprüfung](/cases/use-cases/software-development/fix-a-bug-with-verification/) | Häufigster Entwickler-Kreislauf |
| Content-Erstellung | [Dokumentationssite mit Prüfung refactoren](/cases/use-cases/content-creation/refactor-docs-with-review/) | Mehrdatei-Docs und Build-Abnahme |
| Recherche und Lernen | [Wettbewerbs-Feature-Matrix](/cases/use-cases/research-and-learning/competitive-feature-matrix/) | Recherche-Artefakt mit Quellen |
| Team-Automatisierung | [Geplante Dokumentenlink-Prüfung](/cases/use-cases/team-automation/scheduled-link-check/) · [Issue-Triage-Vorschläge](/cases/use-cases/team-automation/issue-triage-suggestions/) | Leichte CI- und Ticket-Automatisierung |

Kopierbare Prompts: [`examples/prompts/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/prompts). Weitere Bereichsfälle werden laufend ergänzt.

## Beitragsrichtung

- Reproduzierbare Schritte (Repo, Branch, Befehle)
- Client und Prüfdatum kennzeichnen
- Keine unverifizierbaren «einmal erfolgreich»-Narrative

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen die aktuelle Fallbibliotheksstruktur dieses Repos, die Bereichs-Einstiegsseiten, die Fallvorlage und den examples-Prompt-Einstieg. Diese Seite dient nur der Navigation „Fälle nach realem Aufgabentyp organisieren“.  
**Zuletzt geprüft:** 2026-07-26
