---
title: Erweiterungsmethode wählen
description: Entscheidungsbaum von Prompt bis Automations — ohne „Technik um der Technik willen“.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Je mehr Erweiterungsmechanismen, desto teurer die falsche Wahl. Diese Seite hilft, vor Plugin-Installation oder MCP-Schreiben zu prüfen, ob es nötig ist.

Leicht vermischt:

- Prompt
- AGENTS.md
- Skill
- MCP
- Plugin
- Automation

Alles „erweitert Codex“ — manchmal reicht ein Prompt, manchmal braucht es schwerere Mechanik.

## Entscheidungsbaum

```text
Aufgabe wiederholt sich ≥3 Mal?
├─ Nein → Guten Prompt + @-Referenzen nutzen
└─ Ja → Braucht dauerhafte Regeln?
    ├─ Ja → In AGENTS.md schreiben
    └─ Nein → Ablauf fest und beschreibbar?
        ├─ Ja → Skill bauen
        └─ Nein → Externe Systeme lesen?
            ├─ Ja → MCP bewerten (zuerst nur lesen)
            └─ Nein → Unbeaufsichtigt nötig?
                ├─ Ja → Automations + menschliche Schleusen
                └─ Nein → Bei Skill + manuellem Auslösen bleiben
```

Soll das Team mehrere Skills + MCP einheitlich verteilen? Am Ende der Pfade **Plugin** erwägen.

## Szenario-Zuordnung

| Szenario | Empfohlene Kombination |
|---|---|
| Einheitliche Test- und Commit-Normen | AGENTS.md |
| Checkliste vor jedem Merge | Skill `pr-review` |
| Ticket-Kontext aus Linear holen | MCP + Aufgaben-Prompt |
| Wöchentlicher Abhängigkeitsbericht | Automation → Issue öffnen |
| Secret-Scan vor Commit | Hooks (Enterprise) oder CI |
| Einsteiger-One-Click-Toolset | Plugin (nach Sicherheitsprüfung) |

## Kostendimensionen

| Mechanismus | Schreibaufwand | Wartung | Sicherheitsrisiko |
|---|---|---|---|
| Prompt | niedrig | niedrig | niedrig |
| AGENTS.md | mittel | mittel | niedrig |
| Skill | mittel | mittel | niedrig–mittel |
| MCP | hoch | hoch | mittel–hoch |
| Plugin | niedrig (fertig) / hoch (selbst) | mittel | mittel–hoch |
| Automations | hoch | hoch | hoch |

## Anti-Patterns

- **Skill-Aufblähung**: Dutzende Skills, descriptions kämpfen um Matching
- **MCP als Allzweckhammer**: Was `git` kann, trotzdem über API
- **Automation ohne Abnahme**: Zeitgesteuert Code ändern, niemand sieht den Diff
- **Räder neu erfinden**: Offizieller Connector existiert, trotzdem eigenes MCP

## Häufige Fragen

### 1. Gleich Plugin installieren und MCP anschließen?

Viele Probleme lösen sich mit gutem Prompt, Scope-Kontrolle und `AGENTS.md`.

### 2. Wie den Entscheidungsbaum lesen?

Ein Prinzip: Leichtes zuerst, bei Bedarf schwerer.

### 3. Womit startet man meist?

Oft diese drei:

- Prompt
- `AGENTS.md`
- Skill

MCP oder unbeaufsichtigte Automation sind selten der erste Schritt.

Schlüssel ist nicht „wie fortgeschritten“, sondern „passt es zum Problem“.

## Weiterlesen

- [Fähigkeitenkarte](/skills/capability-map/)
- [Menschliche Freigabe-Muster](/cases/workflows/human-approval-patterns/)
- [Ablauf als Skill absichern](/cases/workflows/turn-a-workflow-into-a-skill/) (Roadmap-Seite)

---

**Status:** outdated  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Nachprüfhinweis:** Der Entscheidungsbaum berührt aktuelle Grenzen von Automations, Plugins, MCP und offiziellen Connectors; diese Produktformen ändern sich schnell, öffentliche Quellen tragen die Ganzseiten-Beurteilung nicht stabil.  
**Zuletzt geprüft:** 2026-07-26
