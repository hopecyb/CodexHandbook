---
title: MCP-Überblick
description: Model Context Protocol — Codex sicher mit externen Werkzeugen und Datenquellen verbinden.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

MCP ist ein Standardanschluss für externe Werkzeuge und Datenquellen.

Soll Codex Jira abfragen, Wissensbasen lesen, interne APIs nutzen oder kontrollierte Werkzeuge bedienen, braucht es „wie verbinden, was aufrufbar, wie Berechtigungen steuern“. **MCP (Model Context Protocol)** adressiert genau das.

## Inhalt

- MCP löst „Codex erreicht echte Systeme nicht“
- Teilung mit Skill und Plugin
- Warum MCP in Sicherheits-Governance gehört

## Was es nicht ist

MCP ist nicht:

- Konten/Passwörter direkt an Codex kleben
- Das Modell „verbindet, wie es will“
- Jeder Drittanbieterdienst standardmäßig vertrauenswürdig

Es ist eine normierte Anschlussweise — steuerbarer und auditierbarer.

## Kernkonzepte

```text
Codex  ←→  MCP-Client  ←→  MCP-Server  ←→  externes System
```

| Komponente | Rolle |
|---|---|
| MCP-Server | Exponiert Werkzeuge (z. B. `search_issues`, `get_user`) |
| Konfiguration | Wie Codex den Server startet/verbindet |
| Werkzeugaufruf | Modell wählt Werkzeuge in der Aufgabe — oft mit deiner Freigabe |

MCP liefert **keine** Geschäftslogik. Der Server implementiert Lese-/Schreibregeln; Codex wählt in der Aufgabe das Werkzeug.

## Position von MCP

Skill ≈ Bedienungsanleitung; MCP ≈ Werkzeugschnittstelle.

- Skill erklärt Schritte
- MCP reicht externe Werkzeuge an Codex

Oft zusammen:  
Skill definiert den Ablauf; ein Schritt ruft ein MCP-Werkzeug auf.

## Bezug zu Skill und Plugin

| | MCP | Skill | Plugin |
|---|---|---|---|
| Wesen | Werkzeugprotokoll | Workflow-Anleitung | Verteilungspaket |
| Typischer Inhalt | API-Kapselung | Schritte und Normen | Skill + MCP + App-Connector |
| Wer pflegt | du oder Drittanbieter-Server | du oder Team | Publisher |

Häufig: **Skill definiert Ablauf**, Schritt **ruft MCP-Werkzeug** für Ticketliste.

## Wann MCP erwägen

Nur Repo-Dateien lesen/schreiben → meist kein MCP.  
Systeme „außerhalb des Repos“ → MCP, API oder andere kontrollierte Integration prüfen.

## Einsatzfälle

| MCP geeignet | MCP ungeeignet |
|---|---|
| Linear/Jira-Tickets abfragen | Reine Repo-Codeänderungen |
| Docs/Wissensbasis nur lesen | Einfaches `curl` ohne Wiederverwendung reicht |
| Kontrollierte interne Tools | Schreibzugriff auf Produktions-DB ohne Audit |

## Häufige Irrtümer

### 1. Mit MCP kann Codex alles

Abhängig von exponierten Werkzeugen und deren Erlaubnissen.

### 2. MCP ist nur Technik, keine Sicherheit

Sobald echte Systeme verbunden sind:

- Berechtigung
- Datenexposition
- Audit
- Lieferkette

### 3. Mit MCP entfallen Skill und Doku

Nein. MCP = „kann Werkzeuge aufrufen“; nicht „nach welchem Ablauf / wann nicht“.

## Sicherheitsgrenzen

- **Least Privilege**: nur lesen, Projekt begrenzt, IP begrenzt
- **Credentials**: OAuth oder Kurzzeit-Token — nicht in Prompt, nicht in Git
- **Menschliche Freigabe**: Schreibaktionen, Massenlöschen, externe Nachrichten → Überprüfung
- **Lieferkette**: Nur vertrauenswürdige Server; Drittanbieter-MCP-Quellcode prüfen

Enterprise: Roadmap `11-team-enterprise/security/plugin-and-mcp-risk`.

## Anbindungsreihenfolge

1. Offizielle MCP-Doku: aktuelles Client-Konfigformat
2. Mit **nur-lesen**-Beispielserver (offiziell/Community) starten
3. In Testprojekt einzelnen Werkzeugaufruf prüfen
4. Dann echte Systeme + Runbook

Schritte: [MCP-Server verbinden](/skills/mcp/connect-an-mcp-server/)

## Häufige Fehler

- MCP-Server „zur Entwicklung“ zu hohe Berechtigung
- MCP als Skill-Ersatz (Ablauf bleibt in Skill oder AGENTS.md)
- Konfigänderungen ohne Code-Review

## Quellen
- [Model Context Protocol](https://modelcontextprotocol.io/)
- OpenAI Codex MCP-Dokumentation
---

**Status:** outdated  
**Anwendbare Produkte:** App / CLI / IDE  
**Nachprüfhinweis:** Konzeptuell plus „Client-Konfigformat“ und Freigabe-Verhalten; bis 2026-07-26 reichen öffentliche Quellen nicht für volle Freigabe.  
**Zuletzt geprüft:** 2026-07-26
