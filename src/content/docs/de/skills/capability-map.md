---
title: Fähigkeitenkarte
description: Beziehungen von Skill, MCP, Plugin, Hooks, Slash-Befehlen und AGENTS.md.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Viele Erweiterungsmechanismen — leicht zu verwechseln. Hier nur die Beziehungen, keine Installationsschritte.

## Beziehungsskizze

![Von einem Prompt zu einem Team-Fähigkeitenpaket](/diagrams/codex-capability-ladder-de.svg)

```text
                    ┌─────────────────┐
                    │  Dein Aufgabenziel │
                    └────────┬────────┘
                             │
         ┌───────────────────┼───────────────────┐
         ▼                   ▼                   ▼
   ┌───────────┐      ┌─────────────┐     ┌──────────────┐
   │ AGENTS.md │      │ Prompt/Vorlage │   │ Slash-Befehl │
   │ Dauerregeln│     │ Diese Aufgabe │   │ Du löst aus  │
   └───────────┘      └─────────────┘     └──────────────┘
         │                   │                   │
         └───────────────────┼───────────────────┘
                             ▼
                    ┌─────────────────┐
                    │      Skill       │
                    │ Wiederverwendbares │
                    │ Workflow-Paket   │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
        ┌──────────┐  ┌──────────┐  ┌─────────────┐
        │   MCP    │  │  Hooks   │  │  Scripts    │
        │ Externe  │  │ Audit/   │  │ Skripte im  │
        │ Werkzeuge│  │ Prüfung  │  │ Skill       │
        └──────────┘  └──────────┘  └─────────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │     Plugin       │
                    │ Verteilung &     │
                    │ Kombi-Paket      │
                    └────────┬────────┘
                             ▼
                    ┌─────────────────┐
                    │  Automations     │
                    │ Unbeaufsichtigt/ │
                    │ zeitgesteuert    │
                    └─────────────────┘
```

## Vergleichstabelle

| | Wer löst aus | Persistenz | Externe Systeme | Team-Verteilung |
|---|---|---|---|---|
| AGENTS.md | Auto-Laden | hoch (Git) | leicht |
| Prompt | du | niedrig | schwer |
| Slash-Befehl | du | mittel | produktabhängig |
| Skill | du oder Modell-Match | hoch | leicht (Verzeichnis/Git) |
| MCP | Modell ruft Werkzeug | Konfig-Ebene | braucht Governance |
| Plugin | nach Installation kombiniert | hoch | offizielle/Team-Kanäle |
| Hooks | Systemereignis | Konfig-Ebene | oft Enterprise |
| Automations | Zeit/Ereignis | Konfig-Ebene | braucht Freigabe-Flow |

## Typische Zuordnung

| Bedarf | Empfehlung |
|---|---|
| Einheitlicher Stil und Testbefehle | AGENTS.md |
| „PR prüfen“ standardisieren | Skill |
| Jira/Linear-Tickets lesen | MCP |
| Teamweit ein Integrationspaket | Plugin |
| Secret-Scan vor jedem Commit | Hooks |
| Montags Wochenbericht-Entwurf | Automations (+ menschliche Veröffentlichung) |

## Von einer Aufgabe zum Team-Fähigkeitenpaket

Diese Linie hilft bei der Entscheidung, ob ein Ablauf weiter gehärtet werden sollte:

| Stufe | Form | Passt wann |
|---|---|---|
| Einmaliger Prompt | Aufgabenbeschreibung in der aktuellen Unterhaltung | Nur einmal nötig oder noch explorativ |
| Vorlage | Feste Struktur für Ziel, Kontext, Grenzen und Abnahme | Ähnliche Aufgaben wiederholen sich, Schritte ändern sich noch |
| Skill | `SKILL.md` plus Vorlagen, Referenzen oder Skripte | Stabiler Prozess mit klaren Erfolgskriterien |
| Subagent | Spezialisierte Rolle mit eigenem Kontext | Abgegrenzte Reviews, Tests, Debugging oder Recherche |
| MCP | Aufrufbare Werkzeuge für externe Systeme | Tickets, Repos oder interne Systeme werden gebraucht |
| Hook | Ereignisbasierte Prüfung oder Sperre | Secret-Scan, Formatierung, riskante Befehle |
| Plugin | Installierbares Teampaket | Skills, MCP, Hooks, Vorlagen und Doku werden gemeinsam verteilt |
| Automation | Zeit- oder ereignisgesteuerte Aufgabe | Berichte, Monitoring, wiederkehrende Reviews |

Beginne nicht mit einem Plugin. Lass die Aufgabe erst einmal laufen, beobachte dann, welche Schritte sich wiederholen, welche Prüfungen automatisch sein müssen und welche externen Rechte wirklich nötig sind.

Verzweigungslogik: [Erweiterungsmethode wählen](/skills/choosing-an-extension-method/).

## Unabhängig vom Produkteinstieg

Diese Mechanismen sind **nicht** an eine Oberfläche gebunden: CLI, Desktop-App und IDE können Skills/MCP unterschiedlich unterstützen — siehe [Funktionsvergleich](/guide/reference/feature-comparison/) und offizielle Hinweise.

---

**Status:** outdated  
**Anwendbare Produkte:** App / CLI / IDE  
**Nachprüfhinweis:** Die Seite zeichnet Skill, MCP, Plugin, Hooks und Automations als feste Beziehungen und impliziert Support-Ebenen; Grenzen und Einstiege sind in öffentlichen Quellen vom 2026-07-26 unvollständig — nach aktuellem Produkt neu schreiben.  
**Zuletzt geprüft:** 2026-07-26
