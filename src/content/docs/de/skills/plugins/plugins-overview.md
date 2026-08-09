---
title: Plugins-Überblick
description: Skills, MCP und App-Connectoren paketieren — einheitliche Team-Verteilung und Verwaltung.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Ein Plugin ist ein Installationspaket: vorkonfigurierte Erweiterungen zum direkten Installieren durch andere.

**Plugin (Plugin/Connector)** bündelt Skills, MCP-Server, App-Integrationen zu einer **installierbaren, aktualisierbaren, steuerbaren** Einheit — ideal, wenn eine Person konfiguriert und das Team wiederverwendet.

## Kernunterschied

| Einzeln | Über Plugin |
|---|---|
| Skill-Verzeichnis manuell kopieren | Ein-Klick-Install/Upgrade |
| MCP-JSON jeweils selbst | Voreingestellte Server + Berechtigungshinweise |
| Doku verstreut | Publisher liefert Liste und Versionshinweise |

Plugin = **Verteilungs- und Kombi-Schicht**. Die Fähigkeiten selbst bleiben Skill, MCP, Connector — siehe [Fähigkeitenkarte](/skills/capability-map/).

## Plugin vs. Skill vs. MCP

Kurzfassung:

- **Skill**: „Nach welchen Schritten?“
- **MCP**: „Welche externen Werkzeuge?“
- **Plugin**: Das oben paketieren — Installation und Governance

Viele Verwechslungen kommen davon, diese drei Schichten gleichzusetzen.

## Typischer Aufbau

```text
Plugin-Paket
├── Skills (optional)
├── MCP-Server-Definitionen (optional)
├── App-Connector / OAuth-Flow (optional)
└── Metadaten: Version, Berechtigungsdeklaration, Changelog
```

## Wann Plugin

| Plugin nutzen | Kein Plugin |
|---|---|
| Team installiert einheitlich Figma/Linear/GitHub-Pakete | Persönliches Einmal-Skript |
| Versionsverwaltung und Rollback nötig | Ein `SKILL.md` reicht |
| Enterprise nur Whitelist-Erweiterungen | Experimentelles Prototyp |

## Wann Plugin relevant wird

- Nur persönlich lernen, ein paar Skills schreiben: erstmal aufschieben
- Team einheitlich erweitern: Plugin angehen

Plugin löst vor allem **Verteilung und Governance** — kein Muss für den ersten Codex-Einstieg.

## Geeignete Plugin-Pakete

Plugin lohnt sich besonders, wenn mehrere Fähigkeiten gemeinsam ausgeliefert werden.

| Team-Paket | Kann enthalten |
|---|---|
| PR-Review-Paket | Review-Skill, nur lesendes GitHub MCP, Review-Vorlage, Risiko-Hook |
| Dokumentationspaket | Doku-Skill, Glossar, Linkcheck-Hook, Release-Notiz-Vorlage |
| Design-Kollaboration | Design-Connector, Screenshot/Annotation-Skill, Rechtehinweis, Beispiele |
| Security-Prüfung | Nur lesender Review-Skill, Secret-Scan-Hook, Auditlog-Konfiguration |

Ein persönliches Skript braucht kein Plugin. Wenn ein Team Fähigkeiten wiederholt installiert, aktualisiert und entzieht, lohnt Verpackung.

## Vor dem Verpacken

- Stabiler Team-Workflow oder Experiment?
- Welche Teile sind Skill, MCP und Hook?
- Ist die Rechtebeschreibung in einer Minute verständlich?
- Gibt es Rollback für kaputte Upgrades oder Fehlinstallation?
- Wie werden Berechtigungen bei Austritt oder Projektende entzogen?

## Installation und Verwaltung (Konzept)

1. Plugin aus **offiziellem Marktplatz oder Team-Whitelist** wählen
2. Berechtigungshinweise lesen: welche Repos, welche SaaS
3. Nach Installation Sitzung neu starten; Werkzeug- und Skill-Liste prüfen
4. Regelmäßig updaten; Major-Versionen zuerst in Staging

Buttons und Befehle: aktuelle UI von Desktop-App / CLI.

## Häufige Missverständnisse

### 1. Installiert ≠ automatisch sicher

Bequemere Verteilung ≠ sichere Berechtigungen. Weiter prüfen:

- Was kann es erreichen?
- Führt es externe Aktionen in deinem Namen aus?
- Ist die Quelle vertrauenswürdig?

### 2. Was man installieren kann, lohnt sich

Langfristig nur Erweiterungen, die das Team warten, zurückziehen und auditieren kann.

## Sicherheit und Privatsphäre

- Nur vertrauenswürdige Quellen; OAuth-Scopes des Plugins prüfen
- „Designs lesen“ vs. „Nachrichten senden“-Berechtigungen trennen
- Bei Austritt/Rollenwechsel Connector-Auth zurückziehen
- Mit [Berechtigungen und Freigabe](/guide/foundations/permissions-and-approvals/) stapeln — Plugin bringt keine eigene Sicherheit mit

## Vergleich zu anderen Agent-Ökosystemen

„Plugin“ meint in Produkten Unterschiedliches. Beim Vergleich: **was paketiert, Berechtigungsmodell, open source auditierbar?** — siehe [Funktionsvergleich](/guide/reference/feature-comparison/).

## Häufige Fehler

- Für jeden kleinen Skill ein Plugin → Wartungsexplosion
- Nie updaten → verpasste Sicherheitsfixes
- Experimentelle Plugins im Produktions-Repo

## Quellen
- OpenAI Codex Plugins-Dokumentation
---

**Status:** outdated  
**Anwendbare Produkte:** App / CLI  
**Nachprüfhinweis:** OpenAI Help bestätigt Plugins als Container für Skills, Apps und App-Templates; diese Seite enthält zu konkrete Install-, Upgrade- und Governance-Abläufe jenseits stabiler öffentlicher Grundlage.  
**Zuletzt geprüft:** 2026-07-26
