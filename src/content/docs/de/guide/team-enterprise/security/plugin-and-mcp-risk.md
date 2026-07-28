---
title: Plugin- und MCP-Risiken
description: 'Was Erweiterungen erreichen können und wie Teams freigeben und überwachen — einheitliche Risikosicht auf Skills, Plugins und MCP.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Plugins** und **MCP-Server** verbinden Codex mit externen Systemen: Tickets, Datenbanken, interne APIs. Je stärker die Fähigkeit, desto größer Exfiltration und Overreach im [Bedrohungsmodell](/guide/team-enterprise/security/threat-model/). Zusammen lesen mit [MCP-Überblick](/skills/mcp/mcp-overview/) und [Plugins-Überblick](/skills/plugins/plugins-overview/).

Beim ersten Kontakt nicht sofort Definitionen pauken. Ein Punkt reicht: Sobald Codex externe Systeme erreicht, wachsen Fähigkeit und Risiko gemeinsam.

Ob Plugin oder MCP — die Kernfragen ähneln sich:

- Was kann es lesen
- Was kann es ändern
- Wer gibt frei
- Wie nachverfolgen bei Vorfällen

## Inhalt

- Risikoklassen von Erweiterungen
- Freigabeliste und Versionspinning
- Isolation bei Debug und Incidents

## Risikoklassen

| Typ | Beispiel | Kontrolle |
|---|---|---|
| Daten lesen | MCP liest Kunden-DB | Read-only-Konto, Row-Level-Rechte |
| Daten schreiben | Tickets auto-schließen, Config ändern | Menschliche Freigabe, Double-Confirm |
| Netz | Beliebige Externverbindungen | Egress-Allowlist |
| Credentials | OAuth-Token auf Disk | Secret-Management, kurzlebige Tokens |
| Lieferkette | Drittanbieter-Server-Update poisoned | Feste Version, Hash-Pin |

## Empfohlener Team-Freigabeprozess

```text
Antrag (Zweck, Datenklasse, Rechte) → Security/Architektur-Review
    → Eintrag in «Freigabeliste»-Repo oder internes Verzeichnis
    → Versionsnummer + Owner fixieren
    → Quartalsweise oder bei Major-Upgrade erneut prüfen
```

Experimentelle persönliche MCPs **nicht** mit demselben Token wie Produktionsrepos.

## Minimale Praxis

1. **Default deny** für Remote-MCPs außerhalb der Liste
2. **Lokales MCP** kann trotzdem die ganze Disk lesen — eigener OS-User oder Container
3. **Logs**: Tool-Name und Parameterzusammenfassung (redaktiert); siehe [Hook-Audit](/skills/hooks/hooks-examples/)
4. **Skill vs. MCP**: Skill beschreibt Ablauf, MCP macht Externzugriff — Rechte als Schnittmenge, strengste Policy

## Häufige Fehler

- „Offizieller Marketplace“ = „sicherheitstechnisch reviewed“
- Dev und Prod teilen dieselbe MCP-OAuth-App
- Debug mit `DEBUG=*` schreibt Tokens in CI-Logs

## Häufige Missverständnisse

### 1. Plugin und MCP noch unklar — macht das was?

In Phase eins wenig.

Gemeinsam:  
Beide bringen Codex an externe Systeme — Rechte und Risiko zählen.

### 2. Warum immer „Read-only zuerst“?

Read-only heißt meist:

- leichterer Pilot
- schnellerer Nutzennachweis
- geringerer Fehlerpreis

### 3. Einmal installiert = bedenkenlos?

Auch bei bequemen Features fragen:

- Welche Daten erreicht es
- Schreibt es zurück
- Wie werden Credentials verwaltet

Bei Externerweiterungen zuerst Rechte und Grenzen, dann Feature-Stärke.

## Abnahme-Checkliste

- [ ] Schriftliche Freigabeliste oder gleichwertiger Prozess
- [ ] Jedes Produktions-MCP hat Owner und Datenklasse
- [ ] Konsistent mit [Skill-Security](/skills/security/)

## Quellen
- [MCP debuggen](/skills/mcp/debugging-mcp/)
---

**Status:** verified  
**Anwendbare Produkte:** CLI / App / Cloud  
**Prüfgrundlage:** OpenAI Help Center Plugin-Dokumentation betont weiterhin gemeinsame Begrenzung von App/Plugin-Fähigkeiten durch RollenZugriff, Aktionskontrolle, Bestätigung, Domain-/Quellgrenzen und darunterliegende Quellsystemrechte; diese Seite mappt das auf eine einheitliche Plugin-/MCP-Risikosicht mit Read-only-first, Versionspin, klarem Owner und Freigabeliste.  
**Zuletzt geprüft:** 2026-07-26
