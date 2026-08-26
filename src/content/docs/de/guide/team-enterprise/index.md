---
title: Teams und Unternehmen
description: Einführung, Standards, Verwaltung und Sicherheitsgovernance für einen kontrollierten Einsatz von Codex in größerem Maßstab.
sidebar:
  order: 70
locale: de
source_locale: zh-CN
source_revision: 3a4af60
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Das Kapitel **Teams und Unternehmen** richtet sich an Engineering-Verantwortliche, Plattform- und Sicherheitsteams. Es beschreibt den Weg von individueller Nutzung zu einem teamweit verwaltbaren, auditierbaren und auswertbaren Codex-Einsatz. Zusammen mit dem [Lernpfad für Teams](/de/guide/learning-paths/team/) gelesen konzentriert sich dieses Kapitel stärker auf Governance und Umsetzung.

Wenn du Codex bisher nur persönlich verwendest oder noch die Grundlagen lernst, kannst du dieses Kapitel später lesen. Es behandelt vor allem Grenzen, Abläufe und Verantwortlichkeiten, sobald viele Personen gemeinsam mit Codex arbeiten.

Im Mittelpunkt stehen diese Fragen:

- Wer darf Codex verwenden?
- Welche Bereiche sind erreichbar?
- Wie lassen sich Probleme nachvollziehen?
- Wie werden Erweiterungen mit hohem Risiko genehmigt?

## Inhalt dieses Kapitels

- Weg vom Pilotprojekt in einem kleinen Team zur Einführung in der Organisation
- Sicherheit, Compliance und Risiken von Erweiterungen wie Plugin und MCP
- Querverweise zu anderen Kapiteln des Handbuchs

## Zielgruppen

| Rolle | Empfohlener Einstieg |
|---|---|
| Engineering Manager / Verantwortliche | [Bedrohungsmodell](/de/guide/team-enterprise/security/threat-model/) · [Zulässige Nutzung](/de/guide/team-enterprise/governance/acceptable-use/) |
| Platform Engineering | [Teamregeln](/de/guide/customization/rules/team-rules/) · [Hooks](/de/skills/hooks/hooks-overview/) |
| Sicherheit | [Risiken von Plugins und MCP](/de/guide/team-enterprise/security/plugin-and-mcp-risk/) · [Prompt Injection](/de/guide/team-enterprise/security/prompt-injection/) |

## Governance-Modell

```text
Richtlinien (organisationsweit verwaltet, AUP)
    ↓
Standards (AGENTS.md, Liste genehmigter Erweiterungen)
    ↓
Durchsetzung (Regeln, Sandbox, Hooks, CI)
    ↓
Beobachtung (Audit, Metriken, Retrospektive)
```

## Navigation zum Einstieg

| Thema | Seiten |
|---|---|
| Sicherheit | [Bedrohungsmodell](/de/guide/team-enterprise/security/threat-model/) · [Risiken von Plugins und MCP](/de/guide/team-enterprise/security/plugin-and-mcp-risk/) · [Prompt Injection](/de/guide/team-enterprise/security/prompt-injection/) |
| Governance | [Richtlinie zur zulässigen Nutzung](/de/guide/team-enterprise/governance/acceptable-use/) |

Die Roadmap wird weitere Abschnitte zu adoption, administration und deployment-patterns ergänzen. Siehe [chapter-outline](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/chapter-outline.md), ein Planungsdokument des Repositorys.

## Beziehung zu persönlichen Konfigurationen

- Organisationsweit verwaltete Ebene unter [Rangfolge von AGENTS.md](/de/guide/customization/agents-md/scope-and-precedence/)
- [Strategie für Teamregeln](/de/guide/customization/rules/team-rules/)

## Häufige Fehler

- Nur Plätze kaufen, ohne Schulung und Standards einzuführen
- Eine persönlich gelockerte Sandbox als Organisationsstandard übernehmen
- Alle Community-Plugins ohne Genehmigungsliste zulassen

## Abnahmecheckliste

- [ ] Eine schriftliche AUP oder gleichwertige Richtlinie ist vorhanden
- [ ] Für Erweiterungen mit hohem Risiko gibt es einen Genehmigungsablauf
- [ ] Kontaktpersonen für Vorfälle in Sicherheit und Plattform sind eindeutig

## Häufige Missverständnisse

### 1. Muss ich dieses Kapitel lesen, wenn nur ich Codex verwende?

Nicht unbedingt sofort.  
Du solltest aber wissen, dass beim Übergang vom persönlichen Werkzeug zum Teamsystem mehr Fragen entstehen als nur die richtige Prompt-Formulierung.

### 2. Weshalb geht es so häufig um Audit, Governance und Richtlinien?

Das größere Risiko in einer Teamumgebung besteht darin, dass Grenzen bei einer langfristigen gemeinsamen Nutzung zunehmend unscharf werden.

### 3. Was soll ich für einen ersten Überblick lesen?

Beginne mit:

- [Risiken von Plugins und MCP](/de/guide/team-enterprise/security/plugin-and-mcp-risk/)
- [Richtlinie zur zulässigen Nutzung](/de/guide/team-enterprise/governance/acceptable-use/)

Wenn du dich derzeit hauptsächlich persönlich einarbeitest, kannst du dieses Kapitel zunächst zurückstellen und bei einer Teameinführung, Berechtigungsverwaltung oder Risikokontrolle darauf zurückkommen.

---

**Status:** verified  
**Unterstützte Produkte:** Organisations- und Teamfunktionen, abhängig vom Tarif  
**Prüfgrundlage:** Das aktuelle OpenAI Help Center sowie die Plugin- und App-Dokumentation betonen weiterhin, dass die Einführung von Codex und ChatGPT im Team Rollen- und Funktionszugriff, Plugin-Aktivierung, Aktionsgenehmigungen, Datengrenzen und Auditverantwortung benötigt. Diese Seite dient nur als Navigation für das Team- und Unternehmenskapitel, konzentriert sich auf Governance-Modell und Lesereihenfolge und bindet sich nicht an einen bestimmten Administrationspfad.  
**Zuletzt geprüft:** 2026-07-26
