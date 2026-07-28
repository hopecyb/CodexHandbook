---
title: Konfigurationsreferenz
description: 'Konzeptindex zu Codex-Config-Schlüsseln auf Nutzer- und Projektebene — Pfade und Felder nach offizieller Dokumentation.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Seiten wie „Konfigurationsreferenz“ überfordern schnell mit Schlüsseln, Schichten und Überschreibungen. Eine Frage zuerst macht es leichter:

> **Welches Verhalten gehört in Config — und was sollte Config nicht lösen?**

Config-Dateien vereinheitlichen oft **Modell, Sandbox, Freigabe, MCP**. Dies ist ein **Konzeptindex**; konkrete Pfade und TOML/YAML-Schlüssel: [OpenAI Codex Docs](https://developers.openai.com/codex) und Ihre Version.

## Ein Entscheidungsprinzip

In Config eher „**soll langfristig Verhalten prägen**“ — nicht:

- Sensitive Werte
- Volle Teamregeltexte
- Einmalige Aufgabenbeschreibungen

Drei Klassen:

- **Langfristige Verhaltenspräferenzen** → meist Config
- **Konkrete Aufgabenanforderungen** → Prompt / `AGENTS.md` / Skill
- **Sensitive Werte** → Env-Var oder Secret

Unklar: Ändern Sie langfristige Gewohnheiten von Codex — oder diese Aufgabe?

- Langfristige Gewohnheit → Config
- Aktuelle Aufgabe → Prompt, `AGENTS.md` oder Aufgabenbeschreibung

## Config-Schichten

| Schicht | Ort (Konzept) | Typischer Inhalt |
|---|---|---|
| Nutzer | `~/.codex/` usw. | Default-Modell, persönliche Freigabegewohnheiten |
| Projekt | Config im Repo | Team-Sandbox, MCP-Liste |
| Env-Vars | Shell / CI | Keys, temporäre Schalter |
| Managed | Organisation | Nicht überschreibbare Zwangspolicy |

## Was die Schichten steuern

- **Nutzer**: Ihre Defaults
- **Projekt**: Geteilte Defaults fürs Repo
- **Env-Vars**: Temporär für diesen Lauf
- **Managed**: Organisationsgrenze, lokal nicht änderbar

Zuerst nicht „wer überschreibt wen“ pauken — ungefähre Rolle reicht:

- Nutzer: „so arbeite ich persönlich meist“
- Projekt: „so soll das Repo möglichst für alle“
- Env: „nur für diesen Lauf“
- Managed: „Organisation hat die Grenze gesetzt“

Einstieg: [Config-Grundlagen](/guide/customization/configuration/config-basics/) · Terminal: [CLI-Konfiguration](/guide/cli/configuration/)

## Domänenindex (Konzept)

### Modell und Reasoning

| Absicht | Erklärung |
|---|---|
| Default-Modell | Modell-ID neuer Sitzungen |
| Reasoning-Stärke | Stufe für komplexe Aufgaben (falls unterstützt) |
| Temperature usw. | Meist Default; bei Skripten fixieren |

Hintergrund: [Modelle und Reasoning](/guide/foundations/models-and-reasoning/)

### Sandbox und Netz

| Absicht | Erklärung |
|---|---|
| Dateisystemumfang | Schreibbare Pfade, außerhalb erlaubt? |
| Netz | Verboten / eingeschränkt / erlaubt |
| Outbound-Domains | Allowlist (falls unterstützt) |

Hintergrund: [Sandbox und Netzwerk](/guide/foundations/sandbox-and-network/)

### Freigabe-Policy

| Absicht | Erklärung |
|---|---|
| Vor Shell | Immer fragen / Trust-Liste / auto (risikoträchtig) |
| Vor Schreibdatei | Ebenso |
| MCP-Tool-Aufrufe | Pro Server oder Tool |

Hintergrund: [Berechtigungen und Freigaben](/guide/foundations/permissions-and-approvals/) · Matrix: [Berechtigungsmatrix](/guide/reference/permission-matrix/)

### Workspace und CLI

| Absicht | Erklärung |
|---|---|
| Default-`cwd` | Startverzeichnis |
| Nicht-interaktive Defaults | Freigabe und Sandbox für exec |
| Loglevel | Zum Troubleshooting erhöhen |

### MCP-Server

| Absicht | Erklärung |
|---|---|
| Serverliste | Befehl, URL, Transport |
| Env-Injection | An MCP-Prozess gebunden, nicht ins Git |

[MCP verbinden](/skills/mcp/connect-an-mcp-server/)

### IDE- / App-Erweiterungen

Manche nur in der Erweiterungs-UI; ggf. gleiches Nutzer-Config-Backend wie CLI — produktspezifisch.

[IDE-Einstellungen](/guide/ide/settings/) · [Desktop-App-Einstellungen](/guide/desktop-app/settings/)

## Häufige Missverständnisse

### 1. Nicht alles Konfigurierbare in die Config-Datei

Besser oft:

- `AGENTS.md`
- Env-Vars
- Skill
- Aktuelle Aufgabenbeschreibung

Config ist kein Universalbehälter.

### 2. Nicht jeden Schlüssel sofort verstehen

Die meisten brauchen zuerst:

- Modell
- Sandbox
- Freigabe
- MCP

Das deckt die meisten Praxisfragen.

### 3. Projektconfig ersetzt Team-Doku?

Config = System-Defaults; ersetzt nicht „warum“ und „wann nicht“.

### 4. Viele offizielle Schlüssel ≠ alles auf einmal lernen

Einsteiger treffen meist:

- Default-Modell
- Sandbox-Umfang
- Freigabe-Policy
- MCP-Verbindung

Diese vier reichen für die Einstiegsphase oft.

## Mit Env-Vars

| Typ | Wohin |
|---|---|
| API-Key, Token | Env-Var oder Secret-Manager |
| Nicht-sensible Schalter | Env oder Config |
| Coding-Normen | `AGENTS.md`, nicht Config |

## Ob etwas in Config gehört

Vier Fragen:

1. Soll es langfristig default wirken?
2. Ist es sensitiv?
3. Persönliche Gewohnheit oder geteilte Projektrege?
4. Systemverhalten oder nur diese Aufgabe?

Danach landet es seltener falsch.

## Verhalten anpassen

Bei „Codex-Verhalten ändern“:

1. Langfristiger Default oder temporäre Aufgabe?
2. Sensitiv oder gewöhnliche Config?
3. Persönlich oder Projekt-geteilt?

Dann eher:

- Config-Datei
- Env-Var
- `AGENTS.md`
- Skill
- Aktueller Prompt

## Typische Szenarien

| Absicht | Meist wohin |
|---|---|
| Modell langfristig fixieren | Nutzer- oder Projektconfig |
| Team: vor Codeänderung Tests | `AGENTS.md` |
| Diesmal nur `docs/` ändern | Aktueller Prompt |
| API-Key / Token | Env oder Secret |
| MCP-Dienst verbinden | Projektconfig + Env |

Klarer als nur Schlüssellisten starren.

Cloud Secrets: [Secrets und Umgebungsvariablen](/guide/web-and-cloud/secrets-and-variables/)

## Änderungsdisziplin

1. Pro Änderung eine Config-Klasse, eine Woche beobachten
2. Projektänderungen über PR-Review
3. Nach CLI-Upgrade offizielle Migration-Diffs
4. Keine Keys in Config-Dateien committen

Config für langfristige Defaults — nicht Sensitive, nicht Ersatz für Aufgabenbeschreibung und Teamregeln.

## Häufige Fehler

- Dokumentierte Schlüssel ≠ alte CLI
- Persönlich gelockerte Sandbox auf Kundenrepos
- Widerspruch zu `AGENTS.md` (Config erlaubt, Doku verbietet)

## Quellen
- OpenAI Codex configuration reference
---

**Status:** verified  
**Anwendbare Produkte:** CLI / App / IDE  
**Prüfgrundlage:** OpenAI Help Center Config-Material bestätigt weiterhin Träger wie `~/.codex/config.toml` und `~/.codex/.env`; Seite als Konzeptindex positioniert, ohne feste Schlüssel-, Pfadprioritäts- oder Altversionsfelder — daher `verified`.  
**Zuletzt geprüft:** 2026-07-26
