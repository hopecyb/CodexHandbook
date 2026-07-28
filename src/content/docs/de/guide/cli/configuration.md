---
title: CLI-Konfiguration
description: Modell, Sandbox, Freigabe und MCP — Codex-Verhalten im Terminal vereinheitlichen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


CLI-Konfiguration steuert **Default-Modell, Arbeitsverzeichnis, Freigabestrenge, MCP-Server** usw. Konzeptuell wie [Konfigurationsgrundlagen](/guide/customization/configuration/config-basics/); Fokus hier auf häufige Terminal-Anpassungen.

## Inhalt dieser Seite

Viele denken bei CLI-Konfiguration zuerst an „ein fortgeschrittenes Einstellungs-Panel“. Das erzeugt zwei Missverständnisse:

- ohne Config geht’s — und dann dieselben Einstellungen bei jedem Start manuell wiederholen
- mehr Config = professioneller — und persönliche Vorlieben, Teamregeln und Experimente landen an einem Ort, schwer zu debuggen

Hier vor allem: **Was langfristig fixieren, was nur temporär ändern.**

## Was CLI-Konfiguration steuert

Denk an „Default-Arbeitsgewohnheiten von Codex im Terminal“.

- Modell: wer standardmäßig die Arbeit macht
- Sandbox und Freigabe: wie weit standardmäßig, wo du nicken musst
- Arbeitsverzeichnis: in welchem Projekt standardmäßig
- MCP und Erweiterungen: welche externen Fähigkeiten standardmäßig

Ohne Config arbeitet Codex trotzdem — du wiederholst nur häufiger dieselben Entscheidungen.

## Wo liegt Konfiguration

| Schicht | Zweck |
|---|---|
| Benutzerebene | persönliche Defaults, projektübergreifend |
| Projektebene | geteilte Teamstrategie (vor Commit prüfen) |
| Umgebungsvariablen | CI injiziert Secrets und Schalter |

**Pfade und Dateinamen** ändern sich mit der CLI-Version — laut [Official-Dokumentation](https://developers.openai.com/codex). Häufig `config.toml` oder Äquivalent unter dem Benutzerverzeichnis.

## Häufige Missverständnisse

### Nicht alles gehört ins Projekt

Einsteiger mischen oft „mein Default-Modell“, „mein lokaler Pfad“ und „Team-Freigabestrategie“.

Klarer:

- persönliche Langzeitvorlieben → Benutzerebene
- Repo-weit konsistent → Projektebene
- nur CI/Skript/einmaliger Lauf → Umgebungsvariablen

### Config ≠ Rechte sofort weit offen

Eine Strategie in der Config heißt nicht, dass alle Aktionen bedingungslos durchlaufen. Produkt-Einstieg, Laufumgebung, Managed Policy und Aufgabeninhalt wirken mit.

Config ist eher Default-Tendenz, kein Dauerprivileg.

## Häufig geänderte Punkte

### Default-Modell und Reasoning-Stärke

Beeinflusst Tempo, Kosten und Erfolg komplexer Aufgaben. In Skripten **Modell fixieren**, damit Logs vergleichbar bleiben.

### Sandbox und Netz

| Absicht | Hinweis |
|---|---|
| streng | unvertrauenswürdige Repos |
| Standard | Alltag |
| gelockert | nur persönliche vertrauenswürdige Umgebung, unternehmenskonform |

Konzept: [Sandbox und Netz](/guide/foundations/sandbox-and-network/)

### Freigabestrategie

CLI kann vor Shell, Schreiben, Netz fragen. Teams sollten in `AGENTS.md` schreiben, welche Befehle erwartbar auto-durchlaufen — wirksam nur bei Übereinstimmung mit echtem Produktverhalten.

### MCP-Serverliste

Gemeinsam mit [MCP-Server verbinden](/skills/mcp/connect-an-mcp-server/); nach Änderung Sitzung neu starten.

## Ausreichende Konfigurationsreihenfolge

Am Anfang nicht alle Felder. Diese Reihenfolge ist leichter:

1. Häufigstes Modell fixieren
2. Default-Arbeitsverzeichnis = aktuelles Projekt?
3. Freigabe und Sandbox: konservativ oder gelockert?
4. Dann erst MCP, Automatisierung, fortgeschrittene Erweiterungen

Die ersten zwei sind Alltag; die letzten zwei eher Risikosteuerung.

## Projekt und CLI angleichen

«App läuft, CI scheitert» vermeiden:

1. Im README empfohlene Mindest-CLI-Version
2. Projektebene nur **Teamkonsens**
3. Secrets nie ins Repo

## Fehlerbehebung

| Phänomen | Prüfen |
|---|---|
| Config wirkt nicht | falsche Schicht? Neustart nötig? |
| MCP nicht geladen | JSON/TOML-Syntax, Pfade |
| Freigabe zu häufig | Sandbox-Modus und Allowlist |

Mehr: [CLI-Fehlerbehebung](/guide/cli/troubleshooting/)

CLI-Config = „Default-Arbeitsgewohnheiten“ — nur das fixieren, was du **fast jedes Mal wieder wählst**. Fortgeschrittenes später.

## Quellen

- OpenAI Codex CLI configuration
- stormzhang `18-config.md`

---

**Status:** verified  
**Anwendbare Produkte:** CLI  
**Prüfgrundlage:** Aktuelle OpenAI-Help-Center-Config-Materialien nutzen weiterhin `~/.codex/config.toml` und `~/.codex/.env` als prüfbare Beispiele; diese Seite bindet keine konkreten Feldnamen, sondern fasst Absicht, Schichten und Risikogrenzen zusammen — daher als Konzeptseite `verified`.  
**Zuletzt geprüft:** 2026-07-26
