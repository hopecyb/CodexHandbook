---
title: Hooks-Überblick
description: An Agent-Schlüsselknoten Validierung, Logs und Audit einfügen — Team-Sicherheit und Compliance ergänzen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Kurz: Ein Hook steckt an kritischen Knoten automatisch eine Prüflogik oder Aufzeichnung ein.

**Hooks** lassen an festen Knoten der Codex-Ausführungskette eigene Logik laufen — z. B. Secret-Scan vor Commit, MCP-Aufrufe loggen, gefährliche Befehle blockieren. Sie ergänzen Politik und Beobachtbarkeit von [Freigabe und Sandbox](/guide/cli/approvals-and-sandbox/).

## Inhalt

- Unterschied Hooks vs. Skill vs. MCP
- Typische Team-Anwendungsfälle
- Sicherheitsprinzipien beim Hook-Design

## Warum Teams Hooks nutzen

Auch ohne eigene Hooks hilft zu wissen, wofür sie im Team stehen:

- Warum manche Aktionen an kritischen Punkten extra gestoppt werden
- Warum „dieser Check ist kein Skill, sondern Hook“
- Warum manche Regeln nicht im Prompt, sondern an Systemknoten stehen

Viele „warum hier noch ein Check?“-Momente sind Hooks.

Auswahl: [Erweiterungsmethode wählen](/skills/choosing-an-extension-method/)

## Was Hooks tun

| Phase (Konzept) | Mögliche Hook-Aktion |
|---|---|
| Vor Werkzeugaufruf | Befehle mit `rm -rf` oder `.env`-Leak ablehnen |
| Nach Werkzeugaufruf | Audit-Log nach SIEM |
| Sitzungsende | Liste geänderter Dateien zusammenfassen |
| Vor PR-Erstellung | Issue-Nummernformat prüfen |

## Vom Skill unterscheiden

- **Skill**: „Bei solchen Aufgaben so vorgehen“
- **Hook**: „An diesem Knoten zuerst automatisch prüfen“

Unterschiedliche Probleme:

- Skill → Workflow-Anleitung
- Hook → Schleuse oder Beobachtungspunkt im Ablauf

Ereignisnamen und Konfigurationsformat: [offizielle Hooks-Dokumentation](https://developers.openai.com/codex).

## Unterschied zu Skill / MCP

| | Hooks | Skill | MCP |
|---|---|---|---|
| Auslöser | Systemereignis | Nutzer oder Modell | Werkzeuganfrage |
| Zweck | Politik, Audit | Workflow-Anleitung | Externe Systeme |
| Wer pflegt | Plattform/Team-Infra | Produkt/Engineering | Integrationsentwickler |

## Häufige Irrtümer

### 1. Hooks ersetzen Freigabe und Sandbox

Hooks sind Ergänzung — keine alleinige Sicherheitsgrenze.

### 2. Mehr Hooks = sicherer

Zu viele langsame, schwere, unklare Hooks bremsen und erschweren Debugging.

### 3. Hooks eignen sich nicht für komplexe Logik

Hooks eignen sich für:

- schnell
- deterministisch
- testbar

Keine komplexe Inferenz darüberlegen.

## Empfohlene Team-Fälle

1. **Secret-Leak-Erkennung**: AWS-Key-Muster im Diff → blockieren
2. **Lizenzkopf-Check**: Neue Datei ohne Firmen-Copyright → warnen
3. **Compliance-Log**: Wer, wann, welches Repo geschrieben (maskiert)
4. **CI-Alignment**: Lokale Hook-Regeln möglichst aus derselben Quelle wie GitHub Action

## Leitplanken, mit denen man beginnen sollte

Hooks sollten eng und deterministisch starten, nicht als großer „intelligenter Richter“.

| Hook-Muster | Erste Version | Reife Version |
|---|---|---|
| Befehlsaudit | Befehl, Zeit, Arbeitsverzeichnis loggen | Bei riskanten Befehlen warnen oder zweite Bestätigung verlangen |
| Secret-Scan | Bei `.env`, Key-Dateien oder Token-Mustern warnen | Blockieren und Behandlung erklären |
| Formatprüfung | Formatabweichungen melden | Denselben Formatter wie CI ausführen |
| Abhängigkeitsprüfung | Bei Paketdateien Review anstoßen | Schwachstellen- oder Lizenzstrategie anbinden |
| Sitzungszusammenfassung | Dateien und Prüfungen protokollieren | Übergabe oder PR-Vorlage füllen |

Ein guter Hook scheitert langweilig: klare Meldung, kleiner Radius, protokollierter Bypass.

## Einführungsreihenfolge

1. Erst protokollieren
2. Dann nur bei hoher Sicherheit warnen
3. Später nur deterministische, akzeptierte Regeln blockieren
4. CI-Skripte wiederverwenden, damit lokale und entfernte Checks nicht auseinanderlaufen

## Wann Hooks passen

Wenn ein Check beides erfüllt:

- Immer an festen Knoten
- Nicht jedes Mal manuell erinnern müssen

Z. B. Sensitive-Scan, Namensprüfung, Audit-Aufzeichnung.

## Designprinzipien

- **Schnell**: Hook-Timeouts verlangsamen jeden Werkzeugaufruf
- **Deterministisch**: Kein LLM im Hook
- **Testbar**: Hook-Skript mit festen Inputs unit-testen
- **Abschaltbar**: Notfall-Bypass fürs Team (mit Audit)

Sicherheitsblick: Roadmap `11-team-enterprise`; Einzelpersonen starten oft mit Read-only-Log-Hooks.

Hooks gehören an kritische Systemknoten für Auto-Checks. Sie sind keine Workflow-Anleitung und ersetzen keine Freigabe.

## Häufige Fehler

- Hook-Skript selbst mit Netz-Schreibrechten → neue Angriffsfläche
- Widerspruch zu `AGENTS.md`-Regeln
- Hook-Konfig nicht versioniert → abweichende Team-Umgebungen

## Abnahme-Checkliste

- [ ] Ein wichtigstes Hook-Szenario des Teams nennen können
- [ ] Bei Hook-Fehler klare Meldung an Entwickler:innen
- [ ] Konfig in Code-Review

## Quellen
- OpenAI Codex Hooks-Dokumentation
---

**Status:** outdated  
**Anwendbare Produkte:** CLI / App (versionsabhängig)  
**Nachprüfhinweis:** Seite hängt an aktuellem Hook-Fähigkeitsstand, typischen Knoten und Team-Governance; öffentliche Doku stützt diese Details unzureichend — nach aktuellem Client neu schreiben.  
**Zuletzt geprüft:** 2026-07-26
