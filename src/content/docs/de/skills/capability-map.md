---
title: Karte der Erweiterungsfunktionen
description: Verstehe das Codex-Erweiterungssystem anhand der acht Aufgaben Aufgabe, Regeln, Workflow, Werkzeuge, Schutz, Verteilung, Auslösung und Parallelisierung.
locale: de
source_locale: zh-CN
source_revision: fa5604a
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Erweiterungsmechanismen werden leicht verwechselt, weil sie oft im selben Workflow vorkommen, aber unterschiedliche Probleme lösen.

Diese Seite stellt zunächst das Gesamtsystem dar: Prompts und `AGENTS.md` liefern Aufgabe und Regeln, ein Skill einen wiederverwendbaren Ablauf, MCP externe Werkzeuge, ein Hook Schutz an Lebenszykluspunkten, ein Plugin gebündelte Verteilung und eine Scheduled task zeitgesteuerte Auslösung. Sie lassen sich kombinieren und bilden keine feste „Aufstiegsreihenfolge“.

## Systemarchitektur

![Architektur eines wiederverwendbaren Codex-Arbeitssystems](/diagrams/codex-work-system-architecture-de.svg)

Achte beim Lesen der Grafik auf drei Punkte:

- **Aufgabeneingaben** bestimmen die aktuelle Arbeit, Projektregeln die dauerhaft einzuhaltenden Vorgaben.
- **Ausführungsfunktionen** können den erreichbaren Umfang vergrößern, beweisen aber nicht automatisch die Richtigkeit des Ergebnisses. MCP, Subagents und Skripte benötigen Berechtigungsgrenzen und Abnahme.
- **Verteilung und Auslösung** sind nicht der Workflow selbst. Ein Plugin bündelt Funktionen; eine Scheduled task startet einen Lauf zur angegebenen Zeit.

## Acht Aufgabenbereiche

| Aufgabe | Mechanismus | Besonders geeignet für | Nicht zuständig für |
|---|---|---|---|
| Aktuelle Aufgabe | Prompt | Ziel, Umfang und Abnahme dieses Laufs | Langfristige Projektregeln |
| Dauerhafte Regeln | `AGENTS.md` | Repository-Befehle, Konventionen und Verzeichnisgrenzen | Vollständige Schritte einer Aufgabenkategorie |
| Wiederverwendbarer Workflow | Skill | Stabile Schritte, Referenzmaterialien, Vorlagen und Hilfsskripte | Externe Systemberechtigungen aus dem Nichts |
| Externe Werkzeuge | MCP / Connector | Daten und Aktionen außerhalb des Repositorys aufrufen | Richtigkeit des fachlichen Ziels bestimmen |
| Schutz im Lebenszyklus | Hook | Vor oder nach Sitzung und Werkzeugaufruf protokollieren, prüfen, Kontext ergänzen oder blockieren | Tests und menschliches Review ersetzen |
| Gebündelte Verteilung | Plugin | Skills, Connectoren, MCP, Hooks und Aufgabenvorlagen paketieren | Alle enthaltenen Funktionen automatisch vertrauenswürdig machen |
| Zeitgesteuerte Auslösung | Scheduled task | Verifizierte Aufgaben geplant oder periodisch ausführen | Eindeutige Prompts und Abbruchbedingungen ersetzen |
| Parallele Aufteilung | Subagent | Unabhängige Untersuchungen, Tests oder Reviews delegieren | Schreibkonflikte und Koordinationskosten automatisch beseitigen |

## Kombination in einer Aufgabe

Angenommen, ein Team prüft wöchentlich Abhängigkeitsrisiken:

1. `AGENTS.md` legt erlaubten Paketmanager, Testbefehle und nicht veränderbare Verzeichnisse fest.
2. Der Skill `dependency-audit` standardisiert Erfassung von Abhängigkeiten, Abgleich mit Hinweisen, Einstufung und Verifikation.
3. GitHub- oder Paketquellen-MCP stellt externe Informationen bereit, vorzugsweise nur lesend.
4. Ein Hook kann Ausgaben mit echten Zugangsdaten blockieren oder externe Werkzeugaufrufe protokollieren.
5. Ein Plugin verteilt Skill, MCP-Konfiguration und Hook gemeinsam an das Team.
6. Eine Scheduled task startet wöchentlich einen Lauf und erstellt nur einen Bericht oder Issue-Entwurf; ein Mensch prüft vor Veröffentlichung.

Eine fehlende Ebene macht den Ansatz nicht „weniger fortgeschritten“. Für eine einmalige lokale Abhängigkeitsprüfung können ein eindeutiger Prompt und vorhandene Terminalbefehle ausreichen.

## Häufige Zuordnungen

| Anforderung | Empfohlene Wahl |
|---|---|
| Codestil und Testbefehle vereinheitlichen | AGENTS.md |
| Ablauf „PR prüfen“ standardisieren | Skill |
| Jira-/Linear-Tickets lesen | MCP |
| Ein Integrationspaket für das gesamte Team installieren | Plugin |
| Vor jedem Commit Zugangsdaten erkennen | Hooks |
| Jeden Montag einen Wochenberichtsentwurf erstellen | Automations mit menschlicher Veröffentlichung |

## Vom einmaligen Erfolg zum Team-Asset

Entscheide anhand dieser Stufen, ob weitere Verstetigung sinnvoll ist:

| Stufe | Form | Geeignete Situation |
|---|---|---|
| Einmaliger Prompt | Aufgabenbeschreibung im aktuellen Gespräch | Einmalige Aufgabe oder noch offene Untersuchung |
| Vorlage | Festes Gerüst aus Ziel, Kontext, Einschränkungen und Abnahme | Aufgabenkategorie wiederholt sich, Schritte ändern sich noch |
| Skill | `SKILL.md` mit Vorlage, Referenzen oder Skript | Ablauf ist stabil und Erfolgskriterien sind eindeutig |
| Plugin | Paket aus Skills, Connectoren, MCP, Hooks und Vorlagen | Einheitliche Installation, Aktualisierung und Governance erforderlich |
| Scheduled task | Gespeicherte Aufgabe, Zeitregel und Laufhistorie | Manuell verifiziert und für periodische Ausführung geeignet |

MCP, Hook und Subagent sind keine Pflichtstufen dieser Verstetigung. Füge sie nur hinzu, wenn die Aufgabe tatsächlich externe Werkzeuge, Schutz im Lebenszyklus oder parallele Aufteilung benötigt.

Die vollständige Verzweigungslogik beschreibt [Den Erweiterungsmechanismus wählen](/de/skills/choosing-an-extension-method/).

## Aktuelle Produktgrenzen

- Codex Skills sind Verzeichnisse mit `SKILL.md` und können Skripte, Referenzen und Assets enthalten. Codex lädt die vollständigen Anweisungen bei Bedarf.
- Desktop-App, Codex CLI und IDE-Erweiterung teilen MCP-Konfiguration im selben Codex-Host.
- Plugins sind derzeit in unterstützten ChatGPT-Einstiegen, Codex Desktop und Codex CLI verfügbar. Die IDE-Erweiterung unterstützt weder Plugin-Browsing noch Plugin-Verwendung.
- Scheduled tasks werden in ChatGPT Web oder der Desktop-App erstellt und verwaltet. CLI und IDE können Prompt, Skill oder Skript vorher testen, besitzen aber keine Scheduled-Verwaltungsoberfläche.
- Subagents eignen sich für unabhängige schreibgeschützte Untersuchungen, Tests und Reviews. Parallele Schreibzugriffe auf dieselben Dateien erhöhen die Konfliktkosten.

Produkteinstiege können sich weiterhin ändern. Prüfe vor einer konkreten Konfiguration den [Funktionsvergleich](/de/guide/reference/feature-comparison/) und die folgenden offiziellen Quellen.

## Offizielle Grundlage

- [Skills and Plugins](https://learn.chatgpt.com/docs/skills-and-plugins)
- [Build Codex Skills](https://learn.chatgpt.com/docs/build-skills)
- [Codex MCP](https://learn.chatgpt.com/docs/extend/mcp)
- [Codex Hooks](https://learn.chatgpt.com/docs/hooks)
- [Codex Plugins](https://learn.chatgpt.com/docs/plugins)
- [Scheduled tasks](https://learn.chatgpt.com/docs/automations)
- [Codex Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents)

---

**Status:** verified
**Unterstützte Produkte:** ChatGPT Web / Desktop-App / Codex CLI / IDE; der genaue Unterstützungsumfang steht im Text
**Prüfgrundlage:** Aufgabenmodell und Einstiegsgrenzen wurden anhand der am 2026-08-25 verfügbaren offiziellen OpenAI-Dokumentation zu Skills, Plugins, MCP, Hooks, Scheduled tasks und Subagents neu strukturiert.
**Zuletzt geprüft:** 2026-08-25
