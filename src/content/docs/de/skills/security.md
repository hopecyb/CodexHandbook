---
title: Skill-Sicherheit und Versionierung
description: Installationsquellen, Berechtigungsgrenzen, Upgrade und Rollback — Skills teamfähig steuern.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Ein Skill ist mehr als eine weitere Prompt-Vorlage.

Er beeinflusst, wie Codex arbeitet, und kann Skripte oder Extra-Ressourcen mitbringen.

Bei unglaubwürdiger Quelle, ungeprüftem Inhalt oder Versionsdrift ist das Risiko kaum geringer als bei MCP. Diese Seite: Skills **auswählen, installieren, upgraden und auditieren**.

## Inhalt

- Welche Skills nicht installieren
- Version pinnen und Änderungen prüfen
- Bezug zur Plugin-Verteilung

## Warum auch Alltagnutzer das wissen sollten

Wenn du:

- von anderen geteilte Skills installierst
- Team-Skills im Projekt referenzierst
- bestehende Skills upgradest
- Skills Kolleg:innen empfiehlst

bist du Teil der Risikokette.

Skill-Sicherheit braucht nicht nur „eine zentrale Stelle“ — jede nutzende Person braucht Grundurteilskraft.

Basis: [Skill-Überblick](/skills/overview/) · [Ersten Skill erstellen](/skills/create-your-first-skill/)

## Bedrohungsmodell (vereinfacht)

| Risiko | Erscheinung |
|---|---|
| Bösartiger Skill | Secrets leaken, destruktive Shell |
| Übermäßige Berechtigung | Pfade lesen/schreiben, die tabu sind |
| Lieferkette | Manipulierte Drittanbieter-Skill-Repos |
| Veralteter Skill | Inkompatibel mit neuer CLI, seltsames Verhalten |

## Vor der Installation prüfen

Drei Fragen:

1. Woher kommt er?
2. Was lässt er Codex zusätzlich tun?
3. Verstehe ich `SKILL.md` und mitgelieferte Skripte?

Bei zwei „weiß ich nicht“: nicht direkt ins Produktionsprojekt.

## Installationsprinzipien

1. **Quelle**: Offizieller Marktplatz, Firmen-Git zuerst; anonyme Gists meiden
2. **Lesen**: Vor Installation `SKILL.md` und Skripte öffnen — seltsame Berechtigungen?
3. **Trennung**: Kundenprojekte und persönliche Experiment-Skills getrennt
4. **Minimal**: Ein Skill reicht → keine zehn stapeln

## Häufige Irrtümer

### 1. Skills sind nur Text — kein echtes Risiko

Sie beeinflussen Workflow, Werkzeugwahl und Skriptausführung — Risiko ist mehr als „Ton ändert sich“.

### 2. Beliebte Skills können direkt in Produktion

„Andere nutzen es“ ≠ passt zu deinem Repo, Berechtigungsgrenzen und Teamregeln.

### 3. Skill-Upgrade ≈ Doc-Upgrade

Für Teams ist Skill-Upgrade = Upgrade automatisierten Verhaltens — so ernst wie Dependency-Upgrades.

## Version und Upgrade

| Praxis | Hinweis |
|---|---|
| Version pinnen | In Team-Docs Skill-Name + Commit/Tag |
| Änderungsprüfung | Skill-Updates als PR, wie Dependency-Upgrades |
| Changelog | Release Notes für das Team-Skill-Set |
| Rollback | Vorversion behalten; bei Problemen schnell wechseln |

Plugins können Skills gebündelt verteilen: [Plugins-Überblick](/skills/plugins/plugins-overview/)

## Teamgewohnheiten

Wenn ein Skill langfristig von vielen genutzt wird, nicht bei „jemand hat privat einen Pfad geschickt“ stehen bleiben. Besser:

- Feste Quelle
- Versionshistorie
- Upgrade-Hinweise
- Rollback-Pfad

## Zu `$skill`-Aufrufen

Bei explizitem `$name` ist die Absicht klar; bei **automatischer Modell-Wahl** in `AGENTS.md` erlaubte Liste und Szenarien einschränken.

## Team-Governance-Checkliste

- [ ] Whitelist erlaubter Skill-Quellen
- [ ] Onboarding neuer Mitarbeitender nur „Basispaket“
- [ ] Quartalsweise: noch benötigte Skills prüfen
- [ ] Abgestimmt mit [Allow- und Deny-Regeln](/guide/customization/rules/allow-and-deny-patterns/)

## Häufige Fehler

- „One-Click-Alleskönner-Skill“ aus Chat-Links
- Produktions-`AGENTS.md` referenziert persönliche Skill-Pfade
- Nach Upgrade kein Smoke-Test
- `SKILL.md` ungelesen vertrauen

## Quellen
- OpenAI Codex Skills-Sicherheitsleitfaden
---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE  
**Prüfgrundlage:** OpenAI Help „Skills in ChatGPT“ bestätigt, dass Skills Instructions, Begleitdateien und Code enthalten können und Nutzer Quelle und Risiko vor/nach dem Upload prüfen müssen; die Governance-Hinweise hier passen dazu.  
**Zuletzt geprüft:** 2026-07-26
