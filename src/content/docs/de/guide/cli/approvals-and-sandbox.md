---
title: Freigabe und Sandbox
description: Freigabestrategien für Shell, Schreibzugriff und Netz in der CLI — und wie die Sandbox Agent-Verhalten begrenzt.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 60
---

In der CLI kann der Agent **Dateien lesen und schreiben, Shell ausführen, ggf. netzwerken** — Freigabe und Sandbox sind das Sicherheitsventil zwischen dir und Automatisierung. Falsche Konfiguration: ständige Popups interaktiv, oder unkontrolliertes Risiko in unbeaufsichtigtem CI.

## Inhalt dieser Seite

- Was Freigabe-Dialoge fragen und wie wählen
- Wie Sandbox-Stufen Dateien und Netz beeinflussen
- Wie Teams Strategie zwischen CLI und `AGENTS.md` angleichen

## Was Freigabe und Sandbox jeweils steuern

Merksatz:

- **Freigabe** fragt: „Darf dieser Schritt weiterlaufen?“
- **Sandbox** begrenzt: „Auch wenn ja — wohin höchstens?“

Zusammen bestimmen sie, ob die CLI eher konservativ oder zu weit geöffnet wirkt.

Grundlagen: [Berechtigungen und Freigaben](/guide/foundations/permissions-and-approvals/) · [Sandbox und Netz](/guide/foundations/sandbox-and-network/)

## Wann Freigabe kommt

Typische Auslöser (laut Produkt):

| Aktionstyp | Risiko | Default-Tendenz |
|---|---|---|
| Dateien im Projekt schreiben | mittel | oft Bestätigung |
| Pfade außerhalb des Projekts | hoch | ablehnen oder streng bestätigen |
| Shell ausführen | hoch | Befehlsinhalt bestätigen |
| Netz / curl | hoch | Ziel und Daten bestätigen |
| MCP-Werkzeugaufruf | je Server | granular pro Werkzeug |

Interaktiv: Optionen wie **einmal erlauben / für die Sitzung / ablehnen** (Namen versionsabhängig). **Unverstandene Befehle nie «immer erlauben».**

## Sandbox-Stufen (Konzept)

| Stufenabsicht | Geeignet |
|---|---|
| streng / nur-lesen | unvertrauenswürdigen Code prüfen, CI nur-lesen-Review |
| Standard | alltägliche Entwicklungsrepos |
| gelockert | persönliche vertrauenswürdige Umgebung, unternehmenskonform |

Sandbox kann begrenzen:

- schreibbare Verzeichnisbereiche
- Zugriff auf andere Projekte unter `$HOME`
- Subprozesse und Netzfähigkeit

Einstieg: [CLI-Konfiguration](/guide/cli/configuration/) · Matrix: [Berechtigungsmatrix](/guide/reference/permission-matrix/)

## Interaktiv vs. nicht-interaktiv

| Modus | Freigabe-Charakter |
|---|---|
| Interaktiv `codex` | Mensch dabei, Fall für Fall |
| Nicht-interaktiv `exec` | ohne dich — Sandbox vorher eng + fester Prompt |

Pflicht für CI: [Nicht-interaktiver Modus](/guide/cli/non-interactive-mode/) · [Muster für menschliche Freigabe](/cases/workflows/human-approval-patterns/)

Empfohlene CI-Prinzipien:

- nur-lesen oder begrenzte Schreibpfade
- kein beliebiges `curl`, das Repo-Inhalte hochlädt
- Fehler = Non-Zero-Exit, Logs behalten

## Mit Allow/Deny-Regeln

Projekte können in [Allow- und Deny-Regeln](/guide/customization/rules/allow-and-deny-patterns/) «erwartete Befehle» deklarieren. **Regeln müssen zum echten Produktverhalten passen** — sonst blockiert der Agent weiter oder wird zu weit.

## Häufige Fehler

- Global «alle Shells auto-freigeben», dann Kundenrepos bearbeiten
- `sudo`, DB löschen, `~/.ssh` ändern versehentlich durchwinken
- CI mit derselben gelockerten Config wie der Entwicklerrechner
- Sandbox als Ersatz für Code Review sehen — sie verhindert Fehlbedienung, nicht bösartige Prompt-Injection

## Häufige Missverständnisse

### Viele Popups ≠ kaputte Einstellung

Beim CLI-Einstieg sind mehr Freigaben oft sicherer — sie zwingen dich, jeden Schritt zu verstehen.

Gefährlich wird es, wenn du ohne Lesen durchklickst — nicht wenn es „zu oft fragt“.

### Einmal gelockert ≠ dauerhaft sicher

Manche lockern einmal aus Bequemlichkeit und übernehmen dasselbe in anderen Repos und Aufgaben.

Sicherheitsgrenzen folgen dem Aufgabenrisiko — nicht der Bequemlichkeit der letzten Sitzung.

## Abnahmeliste

- [ ] Die letzte Freigabeanfrage erklären können
- [ ] Wissen, wo Sandbox-Stufe geändert und Sitzung neu gestartet wird
- [ ] Team-Doku: welche Befehle verboten, welche erwartbar auto-durchlaufen

Am Anfang CLI-Freigabe und Sandbox eher konservativ. Erst lockern, wenn du weißt, was du öffnest.

## Quellen
- OpenAI-Codex-CLI-Sicherheits- und Sandbox-Dokumentation
---

**Status:** verified  
**Anwendbare Produkte:** CLI  
**Prüfgrundlage:** Aktuelle OpenAI-Help-Center-CLI-Einstiegsdokumentation unterscheidet weiterhin approval modes für Lesen/Schreiben, Befehlsausführung und Sandbox-/Netzgrenzen; diese Seite fokussiert Konzepte, Interaktion und Risikounterschiede ohne feste Buttontexte oder Modusnamen als Fakten.  
**Zuletzt geprüft:** 2026-07-26
