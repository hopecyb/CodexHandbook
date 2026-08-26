---
title: MCP im Überblick
description: Verstehe MCP-Client, Server, Werkzeuge, Authentifizierung und Sicherheitsgrenzen.
locale: de
source_locale: zh-CN
source_revision: 7b8726f
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

MCP wandelt den Wunsch eines Modells nach einer externen Funktion in einen strukturierten Werkzeugaufruf um. Es eignet sich zur Einbindung von Drittanbieterdokumentation, Browsern, Figma, Ticketsystemen und internen Diensten.

## Aufrufkette

```text
Codex in einer Aufgabe
  -> MCP-Client (vom Codex-Host bereitgestellt)
  -> MCP-Server (lokaler Prozess oder Remote-Dienst)
  -> Externes System (Dokumentation, Design, Tickets, interne API)
  -> Strukturiertes Ergebnis zurück an die Aufgabe
```

| Komponente | Zuständigkeit | Nicht zuständig für |
|---|---|---|
| Codex-Host | Konfiguration lesen, Server verbinden und Agent Werkzeuge bereitstellen | Fachliche Berechtigungen des Servers definieren |
| MCP-Server | Werkzeuge, Authentifizierung, Parameter und strukturierte Ergebnisse definieren | Werkzeugsicherheit automatisch garantieren |
| Skill | Festlegen, wann und in welchen Schritten Werkzeuge verwendet werden | Netzwerkverbindung herstellen |
| Plugin | Skills, Connectoren, MCP und weitere Funktionen bündeln und verteilen | Kein alternatives Werkzeugprotokoll |

## Aktuell unterstützte Serverarten

### STDIO

Codex startet einen lokalen Prozess und kommuniziert über Standardein- und -ausgabe. Geeignet ist dies für lokale Entwicklungswerkzeuge und Dienste, die nur auf dem aktuellen Rechner laufen.

Wichtigstes Risiko: Der Prozess erbt die lokale Ausführungsumgebung. Prüfe Befehl, Abhängigkeitsquellen und weitergereichte Umgebungsvariablen.

### Streamable HTTP

Codex verbindet eine Remote-Adresse. Die aktuelle offizielle Dokumentation bestätigt Unterstützung für Bearer token, OAuth und die ChatGPT-Sitzungsauthentifizierung vertrauenswürdiger Erstanbieterserver.

Wichtigstes Risiko: Der Remote-Dienst erhält Werkzeugparameter. Prüfe TLS, Identität, Protokollierung, Datenaufbewahrung und Werkzeugberechtigungen.

## Kombination von MCP, Skill und Plugin

Beispiel „Wöchentlich Tickets hoher Priorität prüfen“:

| Ebene | Inhalt |
|---|---|
| MCP | Werkzeuge wie `search_issues` und `get_issue` bereitstellen |
| Skill | Filterkriterien, Nachweisanforderungen und Berichtsformat festlegen |
| Plugin | Skill, Connector und MCP-Definition für die Teaminstallation bündeln |
| Scheduled task | Bereits verifizierte Aufgabe zu einer festen Zeit ausführen |

Dies sind voneinander unabhängige Zuständigkeiten, keine Aufstiegsleiter. Die vollständige Beziehung zeigt die [Karte der Erweiterungsfunktionen](/de/skills/capability-map/).

## Wann sich MCP lohnt

| Lohnend | Vorerst nicht lohnend |
|---|---|
| Wiederholte Abfragen desselben externen Systems | Einmalige Abfrage einer öffentlichen Website |
| Strukturierte Werkzeugparameter und Ergebnisse erforderlich | Repository-Dateioperationen reichen aus |
| OAuth oder granulare Werkzeugkontrolle nötig | Nur Schreibschnittstelle mit hohen Berechtigungen, keine Testumgebung |
| Team soll die Verbindung einheitlich wiederverwenden | Serverquelle ist nicht prüfbar |

## Sicherheitsstufen

1. **Schreibgeschützter Test:** Öffentliche Dokumentation oder Testmandant; nur Suchwerkzeuge aktivieren.
2. **Teamverifikation:** Projekt, Rolle und Werkzeug-Allowlist begrenzen; Fehler und Laufzeit protokollieren.
3. **Begrenztes Schreiben:** Kleine umkehrbare Schreibaktionen mit menschlicher Genehmigung.
4. **Governance-Betrieb:** Autorisierung widerrufbar, Konfiguration prüfbar, Protokolle bereinigt und Umgebungen isoliert.

Schreibe Tokens nicht in Prompt, Git oder statische HTTP-Header. Verwende vorzugsweise OAuth, `bearer_token_env_var` oder weitergereichte Umgebungsvariablen.

## Checkliste vor der Verbindung

- [ ] Serverquelle, Version und Startbefehl sind prüfbar
- [ ] Werkzeugliste unterscheidet Lese- und Schreibzugriffe
- [ ] Testmandant oder Konto mit minimalen Berechtigungen wird verwendet
- [ ] Es ist bekannt, welche Parameter und Ergebnisse in Remote-Protokolle gelangen
- [ ] Schreibzugriffe besitzen Genehmigungs-, Rückgängig- und Auditpfad
- [ ] Das Team weiß, wie der Server deaktiviert und die Autorisierung widerrufen wird

## Nächster Schritt

Öffne [Einen MCP-Server verbinden](/de/skills/mcp/connect-an-mcp-server/), verbinde zuerst einen schreibgeschützten Server und verifiziere ihn mit `codex mcp list` und `/mcp`.

## Offizielle Quellen

- [OpenAI: Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)
- [OpenAI: Plugins](https://learn.chatgpt.com/docs/plugins)

---

**Status:** verified

**Unterstützte Produkte:** ChatGPT-Desktop-App / Codex CLI / IDE; ChatGPT Web verwendet Remote-MCP-Werkzeuge über Plugins

**Zuletzt geprüft:** 2026-08-25
