---
title: Hooks
description: Führe Skripte oder MCP-Werkzeuge im Codex-Lebenszyklus für Prüfungen, Protokollierung und Richtliniensteuerung aus.
locale: de
source_locale: zh-CN
source_revision: c768708
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Ein Hook ist ein automatischer Handler im Codex-Lebenszyklus. Er kann beim Sitzungsstart, Absenden eines Prompts, vor oder nach Werkzeugaufrufen, bei Kontextkomprimierung, beim Ende eines Subagents oder am Ende des Hauptthreads ein Skript oder MCP-Werkzeug ausführen.

## Welche Fragen diese Seitengruppe beantwortet

- Wie wählst du ein echtes Ereignis statt eines erfundenen Namens wie `pre_tool`?
- Wie unterscheidest du Blockade vor der Ausführung von Feedback nach der Ausführung?
- Wie beginnst du mit einem testbaren Hook mit niedrigem Risiko?
- Wie prüfst du die Vertrauensgrenzen von Projekt- und Plugin-Hooks?

## Lesereihenfolge

1. [Hooks im Überblick](/de/skills/hooks/hooks-overview/): Konfigurationsebenen, Vertrauen und Laufzeitverhalten verstehen
2. [Hook-Ereignistypen](/de/skills/hooks/hook-event-types/): Ereignis und matcher nach Lebenszyklus wählen
3. [Beispiele für Hook-Konfigurationen](/de/skills/hooks/hooks-examples/): Einen durch Unit-Tests geprüften `PreToolUse`-Schutz ausführen

## Kürzeste Entscheidungshilfe

| Ziel | Zuerst erwägen |
|---|---|
| Eingabe vor Werkzeugausführung ablehnen oder ändern | `PreToolUse` |
| Entscheiden, wenn Codex eine Berechtigungserweiterung anfordern möchte | `PermissionRequest` |
| Nach Werkzeugende protokollieren oder Feedback ergänzen | `PostToolUse` |
| Prompt beim Absenden prüfen oder Kontext ergänzen | `UserPromptSubmit` |
| Hauptthread oder Subagent zu einer weiteren Runde auffordern | `Stop` / `SubagentStop` |

Ein Hook ersetzt weder Sandbox, Genehmigung, Befehlsregeln noch serverseitige Berechtigungen. Er ist eine zusätzliche Schutzebene. Einige verwaltete Werkzeugpfade durchlaufen lokale Werkzeug-Hooks nicht.

## Offizielle Quelle

- [OpenAI: Hooks](https://learn.chatgpt.com/docs/hooks)

---

**Status:** verified

**Unterstützte Produkte:** Umgebungen mit lokalem Codex-Host; für Vertrauensprüfung und `/hooks`-Verwaltung gilt die offizielle Beschreibung der Codex CLI

**Zuletzt geprüft:** 2026-08-25
