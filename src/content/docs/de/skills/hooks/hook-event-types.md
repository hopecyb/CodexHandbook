---
title: Hook-Ereignistypen
description: Wähle Ereignisse für Sitzung, Aufgabenrunde, Werkzeugaufruf, Komprimierung und Subagent-Lebenszyklus.
locale: de
source_locale: zh-CN
source_revision: 7da5c40
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Die erste Frage bei der Hook-Auswahl lautet nicht „Wie schreibe ich das Skript?“, sondern „Muss die Nebenwirkung vor oder nach ihrem Auftreten behandelt werden?“ Ein falsch platziertes Ereignis kann selbst mit einem guten Skript nur noch nachträglich Bericht erstatten.

![Lebenszyklus und zentrale Ereignisse eines Codex-Hooks](/diagrams/hook-lifecycle-events-de.svg)

## Aktuelle Ereignisliste

| Ereignis | Zeitpunkt | Was filtert matcher? | Häufiger Zweck |
|---|---|---|---|
| `SessionStart` | Sitzung oder Wiederaufnahme beginnt | `startup`, `resume`, `clear`, `compact` | Umgebung erklären, Kontext wiederherstellen |
| `SubagentStart` | Subagent startet | Subagent-Typ | Zusätzliche Einschränkungen für Subagent |
| `UserPromptSubmit` | Benutzer sendet Prompt | Nicht unterstützt; Konfiguration wird ignoriert | Zugangsdaten erkennen, Entwicklungskontext ergänzen |
| `PreToolUse` | Vor Ausführung eines unterstützten lokalen Werkzeugs | Werkzeugname | Aufruf ablehnen oder umschreiben |
| `PermissionRequest` | Codex steht kurz vor einer Genehmigungsanfrage | Werkzeugname | Erlauben, ablehnen oder reguläre Genehmigung fortsetzen |
| `PostToolUse` | Nach Rückgabe eines unterstützten lokalen Werkzeugs | Werkzeugname | Ergebnis protokollieren, Feedback für weiteres Reasoning geben |
| `PreCompact` | Vor Kontextkomprimierung | `manual` / `auto` | Zustand vor Komprimierung sichern |
| `PostCompact` | Nach Kontextkomprimierung | `manual` / `auto` | Erforderlichen Kontext wieder ergänzen |
| `SubagentStop` | Subagent möchte enden | Subagent-Typ | Eine weitere Prüfrunde verlangen |
| `Stop` | Hauptaufgabenrunde möchte enden | Nicht unterstützt; Konfiguration wird ignoriert | Hauptthread zur weiteren Verifikation auffordern |
| `SessionEnd` | Hauptthread endet | Derzeit `other` | Kurzes Abschlussprotokoll; läuft nicht für Subagents |

## Werkzeug-matcher

Häufige Werte:

```text
Bash
^apply_patch$
Edit|Write
mcp__filesystem__read_file
mcp__filesystem__.*
```

Shell und einheitliche Befehlsausführung werden als `Bash` abgeglichen. `apply_patch` lässt sich auch über die Aliase `Edit` oder `Write` abgleichen. MCP- und andere lokale Funktionswerkzeuge verwenden ihren tatsächlichen Werkzeugnamen.

## Drei häufig verwechselte Ereignisse

### PreToolUse

Die Eingabe enthält `tool_name`, `tool_use_id` und werkzeugspezifisches `tool_input`. Möglich sind:

- `permissionDecision: "deny"`: Unterstützten Werkzeugaufruf blockieren
- `permissionDecision: "allow"` mit `updatedInput`: Eingabe eines unterstützten Werkzeugs ändern
- `additionalContext`: Nicht blockieren, sondern zusätzlichen Modellkontext bereitstellen

Normaler Text auf stdout wird ignoriert. Gib das offiziell definierte JSON aus. Exitcode `2` mit stderr kann ebenfalls blockieren und einen Grund liefern.

### PermissionRequest

Dieses Ereignis tritt nur auf, wenn Codex ohnehin eine Genehmigung für Shell-Eskalation, verwaltetes Netzwerk oder ähnlichen Zugriff anfordern möchte. Der Hook kann erlauben, ablehnen oder keine Entscheidung treffen und dadurch die reguläre Genehmigungsoberfläche fortsetzen. Verwende ihn nicht statt `PreToolUse` als allgemeine Werkzeugrichtlinie.

### PostToolUse

Das Werkzeug wurde bereits ausgeführt; bei Bash tritt das Ereignis auch nach einem Exitcode ungleich null auf. Eine blockierende Rückgabe oder Exitcode `2` kann nur das Feedback ersetzen und das Modell weiterarbeiten lassen. Sie macht einen Befehl, Dateischreibvorgang oder eine externe Aktion nicht rückgängig.

## Stop ist keine Schaltfläche zum „Ablehnen des Endes“

`decision: "block"` bei `Stop` erzeugt aus dem angegebenen reason automatisch einen Fortsetzungsprompt und lässt Codex eine weitere Runde ausführen. Bereits entstandene Werkzeugnebenwirkungen werden nicht rückgängig gemacht. Das Skript muss `stop_hook_active` prüfen, um eine Endlosschleife zu verhindern.

## Übung zur Ereignisauswahl

| Anforderung | Wahl | Grund |
|---|---|---|
| Vermutetes Token vor einem Dateischreibzugriff blockieren | `PreToolUse` mit `apply_patch|Edit|Write` | Muss vor dem Schreiben geschehen |
| Fehlerquote von Shell-Befehlen erfassen | `PostToolUse` mit `Bash` | Benötigt das Ausführungsergebnis |
| Wichtige Entscheidung vor automatischer Kontextkomprimierung sichern | `PreCompact` | Tritt vor der Komprimierung auf |
| Aufgabe nicht abschließen, bevor Tests beendet sind | `Stop` | Aktuelle Aufgabenrunde muss fortgesetzt werden |
| 30-sekündige Netzwerkanfrage beim Ende des Hauptthreads | Nicht für `SessionEnd` geeignet | Höchstens 3 Sekunden; lange Arbeit gehört nicht in ein Abschlussereignis |

## Offizielle Quelle

- [OpenAI: Hook events and matchers](https://learn.chatgpt.com/docs/hooks)

---

**Status:** verified

**Unterstützte Produkte:** Umgebungen mit lokalem Codex-Host

**Zuletzt geprüft:** 2026-08-25
