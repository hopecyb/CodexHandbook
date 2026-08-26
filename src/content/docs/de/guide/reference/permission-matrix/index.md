---
title: Berechtigungsmatrix
description: Unterscheide lokale Permission Profiles, alte Sandbox-Einstellungen und Cloud-Netzwerkrichtlinien.
sidebar:
  order: 70
locale: de
source_locale: zh-CN
source_revision: a161c0c
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Versuche Berechtigungen nicht mit einer starren Tabelle vorherzusagen, die nur fragt, ob App, CLI, IDE oder Cloud einen Dialog anzeigen. Das tatsächliche Verhalten hängt gemeinsam von Ausführungsort, wirksamer Konfiguration, Organisationsanforderungen, Betriebssystem und konkreter Aktion ab.

![Entscheidungsablauf zwischen Sandbox-Blockade, menschlicher Genehmigung und Ausführungsergebnis](/diagrams/sandbox-approval-flow-de.svg)

## Zuerst drei Mechanismen unterscheiden

| Mechanismus | Geltungsbereich | Wichtigste Kontrolle |
|---|---|---|
| Lokale Permission Profiles (Beta) | Lokale Befehle unter macOS, Linux, WSL und nativem Windows | Lesen, Schreiben oder Sperren im Dateisystem sowie Netzwerkziele |
| Alte Sandbox-Einstellungen | Lokales Codex | `read-only`, `workspace-write`, `danger-full-access` und Genehmigungsrichtlinie |
| Cloud-Umgebungsrichtlinie | Codex Cloud | Isolierter Container, Netzwerk in der Setup-Phase, Allowlist und HTTP-Methoden für das Netzwerk der Agent-Phase |

Permission Profiles werden nicht mit dem alten `sandbox_mode` kombiniert. Sobald die geladene Konfiguration `sandbox_mode` enthält, `--sandbox` auf der Kommandozeile angegeben wird oder ein Konfigurationsprofil eine Sandbox festlegt, verwendet Codex die alten Sandbox-Einstellungen statt `default_permissions`.

## Integrierte lokale Permission Profiles

| Name | Grenze | Geeignet für |
|---|---|---|
| `:read-only` | Lokale Befehle nur lesend | Codeverständnis, Review und erster Kontakt mit einem Repository |
| `:workspace` | Aktuelle Workspace-Roots und temporäre Systemverzeichnisse beschreibbar | Reguläre Entwicklungsaufgaben |
| `:danger-full-access` | Entfernt lokale Sandbox-Beschränkungen | Nur wenn eine externe Isolierung besteht und der Zugriff ausdrücklich erforderlich ist |

Ein eigenes Profil kann Pfade auf `read`, `write` oder `deny` setzen und mit spezifischeren Regeln vertrauliche Dateien wie `.env` aus einem breiteren Bereich ausschließen. Bei Konflikten für denselben Pfad hat `deny` Vorrang vor `write`, `write` Vorrang vor `read`.

## Beispiel mit minimalen Berechtigungen

```toml
default_permissions = "project-edit"

[features]
network_proxy = true

[permissions.project-edit.filesystem]
":minimal" = "read"

[permissions.project-edit.filesystem.":workspace_roots"]
"." = "write"
".devcontainer" = "read"
"**/*.env" = "deny"

[permissions.project-edit.network]
enabled = true

[permissions.project-edit.network.domains]
"api.openai.com" = "allow"
"tracking.example.com" = "deny"
```

`network.enabled = true` erlaubt Befehlen lediglich, das Netzwerk zu verwenden. Damit Domainregeln über den Proxy erzwungen werden, muss zusätzlich `features.network_proxy` aktiviert sein.

## Nach Aktion beurteilen

| Aktion | Hauptrisiko | Kleinste Grenze |
|---|---|---|
| Quellcode lesen | Vertrauliche Dateien gelangen in den Kontext | Workspace lesen, Zugangsdaten ausdrücklich sperren |
| Dateien ändern | Überschreiben oder Löschen außerhalb des Umfangs | Nur Ziel-Workspace beschreiben und Diff prüfen |
| Tests ausführen | Nebenwirkungen eines Skripts | Skript prüfen und kontrollierte Umgebung verwenden |
| Abhängigkeiten installieren | Lieferketten- und Netzwerkrisiko | Versionen fixieren und Domains einschränken |
| Git push / PR | Externer Zustand wird verändert | Eigener Branch, Branchschutz und menschliches Review |
| MCP-/Plugin-Werkzeug | Drittanbieterdaten und Schreibzugriffe | Minimaler Scope, Genehmigung pro Aktion und Protokollierung |

`AGENTS.md` kann „nicht pushen“ anweisen, stellt aber keine technisch erzwungene Grenze dar. Kombiniere die Regel mit Sandbox oder Permissions, GitHub-Berechtigungen und menschlichem Review.

## Prüfung im Team

1. Notiere Client- und Codex-Version.
2. Liste alle geladenen Konfigurationsebenen auf.
3. Bestätige, ob ein Permission Profile oder die alte Sandbox verwendet wird.
4. Teste Lesen, Schreiben, Sperren und Netzwerk getrennt in einem Verzeichnis ohne vertrauliche Daten.
5. Binde erst danach das echte Repository ein und behalte Git- und Organisations-Gates bei.

Permission Profiles befinden sich weiterhin in der Beta-Phase. Führe diese Verifikation nach einem Upgrade erneut aus.

## Offizielle Grundlage

- [Permissions (Beta)](https://learn.chatgpt.com/docs/permissions)
- [Sandboxing](https://learn.chatgpt.com/docs/sandboxing)
- [Agent approvals and security](https://learn.chatgpt.com/docs/agent-approvals-security)
- [Cloud internet access](https://learn.chatgpt.com/docs/cloud/internet-access)

---

**Status:** verified

**Unterstützte Produkte:** App, CLI, IDE, Cloud

**Zuletzt geprüft:** 2026-08-26
