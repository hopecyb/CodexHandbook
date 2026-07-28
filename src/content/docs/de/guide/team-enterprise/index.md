---
title: Team und Enterprise
description: Adoption, Standards, Verwaltung und Sicherheits-Governance — Codex skalieren, ohne die Kontrolle zu verlieren.
sidebar:
  order: 70
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Das Kapitel **Team und Enterprise** richtet sich an Engineering-Leads, Plattform- und Sicherheitsteams: Codex von persönlich nutzbar zu teamfähig, auditierbar und nachvollziehbar machen. Zusammen mit [Lernpfad · Team](/guide/learning-paths/team/) liegt der Fokus hier auf Governance und Rollout.

Bei persönlicher Nutzung oder noch beim Einüben der Grundlagen können Sie dieses Kapitel später lesen. Hier geht es darum, wie bei vielen Nutzern Grenzen, Abläufe und Verantwortung geklärt werden.

Typische Fragen:

- Wer darf nutzen
- In welchem Umfang
- Wie Vorfälle nachverfolgen
- Wie risikoträchtige Erweiterungen freigeben

## Inhalt dieses Kapitels

- Weg vom kleinen Team-Pilot zur Organisationsausweitung
- Sicherheit, Compliance und Erweiterungsrisiken (Plugin/MCP)
- Querverweise zu anderen Handbuchkapiteln

## Für wen

| Rolle | Zuerst lesen |
|---|---|
| EM / Lead | [Bedrohungsmodell](/guide/team-enterprise/security/threat-model/) · [Acceptable Use](/guide/team-enterprise/governance/acceptable-use/) |
| Plattform-Engineering | [Team-Regeln](/guide/customization/rules/team-rules/) · [Hooks](/skills/hooks/hooks-overview/) |
| Security | [Plugin- und MCP-Risiken](/guide/team-enterprise/security/plugin-and-mcp-risk/) · [Prompt Injection](/guide/team-enterprise/security/prompt-injection/) |

## Governance-Modell (Konzept)

```text
Policy (Organisationsverwaltung, AUP)
    ↓
Standards (AGENTS.md, freigegebene Erweiterungsliste)
    ↓
Durchsetzung (Regeln, Sandbox, Hooks, CI)
    ↓
Beobachtung (Audit, Metriken, Retros)
```

## Navigation (Start)

| Thema | Seite |
|---|---|
| Sicherheit | [Bedrohungsmodell](/guide/team-enterprise/security/threat-model/) · [Plugin/MCP-Risiken](/guide/team-enterprise/security/plugin-and-mcp-risk/) · [Prompt Injection](/guide/team-enterprise/security/prompt-injection/) |
| Governance | [Acceptable-Use-Policy](/guide/team-enterprise/governance/acceptable-use/) |

Die Roadmap ergänzt adoption, administration, deployment-patterns u. a.; siehe [chapter-outline](/docs/planning/chapter-outline.md) (Repo-Planungsdokument).

## Verhältnis zur Personalisierung

- Organisationsschicht in [AGENTS.md-Priorität](/guide/customization/agents-md/scope-and-precedence/)
- [Team-Regelstrategie](/guide/customization/rules/team-rules/)

## Häufige Fehler

- Sitze kaufen ohne Training und Standards
- Persönliche Sandbox-Lockerung als Organisationsdefault
- Alle Community-Plugins ohne Liste freigeben

## Abnahme-Checkliste

- [ ] Schriftliche AUP oder gleichwertige Policy
- [ ] Freigabeprozess für risikoträchtige Erweiterungen
- [ ] Klare Incident-Kontakte (Security/Plattform)

## Häufige Missverständnisse

### 1. Ich nutze allein — brauche ich dieses Kapitel?

Nicht unbedingt jetzt tief.  
Aber wissen: Wird Codex vom persönlichen Werkzeug zum Teamsystem, reicht „wie schreibe ich Prompts“ nicht mehr.

### 2. Warum immer Audit, Governance, Policy?

Im Team verwässern Grenzen, wenn viele langfristig zusammen nutzen.

### 3. Zum Konzeptaufbau zuerst was lesen?

Zum Beispiel:

- [Plugin- und MCP-Risiken](/guide/team-enterprise/security/plugin-and-mcp-risk/)
- [Acceptable-Use-Policy](/guide/team-enterprise/governance/acceptable-use/)

Für den persönlichen Einstieg später; bei Team-Rollout, Berechtigungsverwaltung oder Risikokontrolle zurückkommen.

---

**Status:** verified  
**Anwendbare Produkte:** Organisations-/Teamfunktionen (je nach Plan)  
**Prüfgrundlage:** OpenAI Help Center und Plugin-/App-Dokumentation betonen weiterhin RollenZugriff, Plugin-Freigabe, Aktions-Freigabe, Datengrenzen und Audit-Verantwortung für Team-Rollouts; diese Seite navigiert nur und fokussiert Governance-Modell und Leseordnung, ohne konkrete Admin-Pfade zu binden.  
**Zuletzt geprüft:** 2026-07-26
