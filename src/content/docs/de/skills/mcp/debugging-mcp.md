---
title: MCP-Verbindungen debuggen
description: Systematische Schritte bei Server-Startproblemen, Timeouts oder seltsamen Ergebnissen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

MCP bringt externe Systeme in Codex. Bei Fehlern oft drei Klassen: **Prozess startet nicht**, **Auth falsch**, **Werkzeuglogik oder Timeout**. Diese Seite gibt eine Prüf-Reihenfolge — statt Konfig zu raten.

## Inhalt

- MCP-Probleme minimal reproduzieren
- Log- und Konfig-Checkliste
- Wann eher Server-Implementierung als Codex verdächtig ist

Verwandt: [MCP-Überblick](/skills/mcp/mcp-overview/) · [MCP-Server verbinden](/skills/mcp/connect-an-mcp-server/)

## Triage-Ablauf

```text
1. Startet der Server allein im Terminal?
2. JSON/TOML-Syntax und Pfade korrekt?
3. Sind Umgebungsvariablen im MCP-Prozess sichtbar?
4. Codex-Sitzung neu gestartet und neue Konfig geladen?
5. Einzelner Werkzeugaufruf: Timeout oder Parameterfehler?
```

## Start fehlgeschlagen

| Check | Hinweis |
|---|---|
| Befehlspfad | `npx`, `uvx`, Absolutpfad in PATH? |
| Dependency-Versionen | Node/Python erfüllt MCP-Server-Anforderungen? |
| Manuell laufen | command + args aus der Konfig in der Shell |
| Transport | stdio vs. HTTP/SSE wie in der Doku? |

## Auth fehlgeschlagen

- API-Key über Env (nicht im Repo)
- OAuth-MCP abgelaufen → neu autorisieren
- Firmenproxy blockiert MCP-Outbound

Env-Index: [Umgebungsvariablen](/guide/reference/environment-variables/)

## Werkzeugaufruf anomal

| Symptom | Mögliche Ursache |
|---|---|
| Tool not found | Server-Version vs. Client-Schema mismatched |
| Timeout | Externe API langsam; Timeout erhöhen oder Query optimieren |
| Leeres Ergebnis | Falsche Parameternamen; MCP-Server-Logs prüfen |
| Zeichensalat | Encoding nicht UTF-8 |

Im Prompt den Agent bitten, **die Struktur der Werkzeugantwort** (maskiert) zu drucken.

## Sichere Debug-Gewohnheiten

- **Test-Tenant**-API-Key, nicht Produktion
- Keine vollen Tokens in Chat-Logs
- Bei Verdacht auf bösartiges MCP sofort trennen und Keys rotieren

Fehlerindex: [Fehler- und Hinweisreferenz](/guide/reference/error-reference/)

## Häufige Fehler

- Konfig ändern, Codex-Sitzung nicht neu starten
- IDE und CLI mit inkonsistenten MCP-Konfigs
- MCP-Server dauerhaft auf debug, Screenshots mit Secrets

## Abnahme-Checkliste

- [ ] MCP-Server allein im Terminal startbar
- [ ] Mindestens ein nur-lesen-Werkzeug erfolgreich
- [ ] Team-Standard-MCP-Konfigvorlage dokumentiert

## Quellen
- Model Context Protocol Spezifikation und Debug-Guide
---

**Status:** outdated  
**Anwendbare Produkte:** CLI / IDE / App  
**Nachprüfhinweis:** Troubleshooting hängt daran, wie der aktuelle Codex-Client MCP lädt, anzeigt und aufruft — hohes Änderungsrisiko; nach aktueller Doku neu prüfen.  
**Zuletzt geprüft:** 2026-07-26
