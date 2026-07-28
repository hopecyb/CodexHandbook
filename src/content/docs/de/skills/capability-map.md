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

Verzweigungslogik: [Erweiterungsmethode wählen](/skills/choosing-an-extension-method/).

## Unabhängig vom Produkteinstieg

Diese Mechanismen sind **nicht** an eine Oberfläche gebunden: CLI, Desktop-App und IDE können Skills/MCP unterschiedlich unterstützen — siehe [Funktionsvergleich](/guide/reference/feature-comparison/) und offizielle Hinweise.

---

**Status:** outdated  
**Anwendbare Produkte:** App / CLI / IDE  
**Nachprüfhinweis:** Die Seite zeichnet Skill, MCP, Plugin, Hooks und Automations als feste Beziehungen und impliziert Support-Ebenen; Grenzen und Einstiege sind in öffentlichen Quellen vom 2026-07-26 unvollständig — nach aktuellem Produkt neu schreiben.  
**Zuletzt geprüft:** 2026-07-26
