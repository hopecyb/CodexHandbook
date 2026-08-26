---
title: Einen Workflow als Skill verfestigen
description: "Beim dritten Mal lohnt sich ein Skill — Trigger, Anleitung und Abnahme in einem Paket."
locale: de
source_locale: zh-CN
source_revision: bc54539
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Wenn dieselbe Aufgabenklasse (Release-Check, Docs-Sync, Security-Scan) **zum dritten Mal** per Copy-Paste-Prompt erledigt wird, ist ein [Skill](/de/skills/overview/) fällig. Dieses Kapitel verbindet [Workflow-Methoden](/de/cases/workflows/) mit dem Erweiterungssystem.

## Welches Problem löst diese Seite

- Wann von Prompt-Vorlage zu Skill upgraden
- Welche Teile ein Skill braucht (Anleitung, Ressourcen, Skripte)
- Wie Teams teilen und versionieren

## Signale für Verstetigung

- Feste Schritte + feste Abnahme-Checkliste
- Referenz auf Vorlagen oder Skripte im Repository nötig
- Mehrere Personen brauchen konsistentes Verhalten
- Das Modell soll den Ablauf bei verwandten Aufgaben **automatisch erinnern**

Nicht verstetigen: einmalige Erkundung, kleine Fixes stark abhängig vom Tageskontext.

## Minimal brauchbares Vorgehen

1. **SKILL.md klar schreiben**: Wann triggern, Ein-/Ausgabe, Verbote
2. **`references/` anhängen**: Checklist, Beispiel-Diff
3. **Optional `scripts/`**: wiederholbare Überprüfungsbefehle (konsistent mit [Befehlsregeln](/de/guide/customization/rules/command-rules/))
4. **Skill-Namen in README oder AGENTS.md erwähnen**
5. **2–3 Probeläufe**, dann als `verified` markieren

Einstieg: [Ersten Skill erstellen](/de/skills/create-your-first-skill/)

## Empfohlener Workflow

```text
Aus erfolgreichem Fall Prompt und Abnahmepunkte extrahieren
    → Auf Skill-Text kürzen (Umgangssprache raus, Constraints behalten)
    → Trigger-Beschreibung («vor Merge», «vor Release»)
    → Team-PR-Review
    → In vereinbartes examples/-Verzeichnis, Team-Plugin oder interne Skill-Bibliothek
```

Vergleich mit [Abläufe automatisieren](/de/skills/automations/scheduled-tasks/): Skills sind eher **interaktive Anleitung**; Automations eher **zeitgesteuert / unbeaufsichtigt**.

## Häufige Fehler

- Skill länger als `AGENTS.md` zu lesen
- Keine Abnahme-Checkliste → Qualitätsdrift
- Skripte brauchen lokale Secrets ohne SECURITY-Hinweis
- Widerspruch zu Hook-Regeln

## Sicherheitsgrenzen

- Siehe [Skill-Sicherheit und Versionierung](/de/skills/security/)
- Team-Skills in die Freigabeliste für Erweiterungen aufnehmen (siehe [Plugin- und MCP-Risiko](/de/guide/team-enterprise/security/plugin-and-mcp-risk/))

## Abnahme-Checkliste

- [ ] Neue Kolleg:innen schaffen eine Aufgabe allein mit dem Skill
- [ ] Trigger klar, Fehlauslösungen selten
- [ ] Version oder CHANGELOG (Team-Ebene)
- [ ] Querverlinkung zum Quell-Workflow-Dokument

## Referenzquellen
- Im Repo [`docs/planning/examples-system.md`](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/examples-system.md) und [`examples/README.md`](https://github.com/hopecyb/CodexHandbook/blob/main/examples/README.md)
---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE  
**Prüfgrundlage:** Kreuzgeprüft gegen aktuelle öffentliche Use Cases „Save workflows as skills“ bei OpenAI Developers sowie die bereits geprüften Kapitel zu Skills, Automatisierung, Befehlsregeln und Erweiterungsrisiken. Der Inhalt beschränkt sich auf stabile Methoden „wann wiederkehrende Abläufe als Skill verstetigen und wie Anleitung plus Abnahme organisieren“.  
**Zuletzt geprüft:** 2026-07-26
