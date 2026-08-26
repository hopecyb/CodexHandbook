---
title: Einstellungen der IDE-Erweiterung
description: Unterscheide die gemeinsam genutzte Agent-Konfiguration von Verhaltenseinstellungen VS-Code-basierter Editoren.
sidebar:
  order: 80
locale: de
source_locale: zh-CN
source_revision: d4a3506
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

In der IDE gibt es zwei Einstellungsebenen:

| Ebene | Speicherort | Zuständigkeit |
|---|---|---|
| Codex-Agent-Einstellungen | `config.toml` | Modell, Reasoning-Intensität, Berechtigungen, Sandbox, MCP und Personalisierung; gemeinsam mit der CLI verwendet |
| Editoreinstellungen | `chatgpt.*` im Einstellungssystem von VS Code | Seitenleiste, Nachrichtenwarteschlange, Sendetaste, Review-Anzeige, Sprache und Schrift |

Repositoryregeln gehören weiterhin in `AGENTS.md`, nicht in die persönlichen Editoreinstellungen einer Person.

## Einstellungen öffnen

Wähle in der Codex-Seitenleiste das Zahnrad und anschließend **Codex Settings**. Häufige Agent-Optionen lassen sich im Bereich ändern. Mit **Open config.toml** kannst du die aktuell wirksame Konfigurationsebene direkt bearbeiten.

Suche für Einstellungen zum Editorverhalten in Settings nach `@ext:openai.chatgpt`, `Codex` oder einem konkreten Schlüsselnamen.

## Wichtige Einstellungen für den Einstieg

| Schlüssel | Standardwert | Wann ändern? |
|---|---:|---|
| `chatgpt.openOnStartup` | `false` | Wenn die Erweiterung beim Start automatisch die Seitenleiste fokussieren soll |
| `chatgpt.followUpQueueMode` | `queue` | Bei `steer` steuert eine neue Nachricht die aktuelle Ausführung |
| `chatgpt.composerEnterBehavior` | `enter` | Wenn mehrzeilige Prompts häufig versehentlich abgesendet werden |
| `chatgpt.reviewDelivery` | `inline` | Mit `detached` wird `/review` in einem eigenen Chat angezeigt |
| `chatgpt.localeOverride` | Automatisch | Wenn die UI-Sprache fest eingestellt werden soll |
| `chatgpt.runCodexInWindowsSubsystemForLinux` | `false` | Aktivieren, wenn Repository und Werkzeugkette in WSL2 liegen |

`chatgpt.cliExecutable` dient ausschließlich der Entwicklung der Codex CLI. Normale Benutzer sollten die in der Erweiterung enthaltene ausführbare Datei nicht manuell überschreiben, da sonst Funktionen ausfallen können.

## Konfigurationsrangfolge praktisch verstehen

- Organisationsrichtlinien definieren unveränderliche Obergrenzen.
- `config.toml` legt das Standardverhalten des Agents fest.
- `AGENTS.md` stellt Regeln für Repository und Verzeichnisse bereit.
- Editoreinstellungen verändern nur die IDE-Erfahrung.
- Der Prompt ergänzt Ziel und Grenzen der einzelnen Aufgabe.

Wenn eine Einstellung scheinbar nicht greift, prüfe zuerst, welche Ebene du geändert hast, und anschließend, ob eine höherrangige Richtlinie sie einschränkt. Die vollständige Erklärung bietet [Geltungsbereich und Rangfolge](/de/guide/customization/agents-md/scope-and-precedence/).

## Nach einer Änderung verifizieren

Ändere jeweils nur eine Einstellung. Setze zum Beispiel `chatgpt.reviewDelivery` auf `detached`, führe in einem Git-Repository `/review` aus und prüfe, ob ein separater Review-Chat geöffnet wird. Notiere den Ausgangswert. Stelle ihn wieder her und lade den Editor neu, wenn das Ergebnis abweicht.

## Offizielle Grundlage

- [Referenz der Codex-IDE-Einstellungen](https://learn.chatgpt.com/docs/ide/settings)
- [Konfigurationsgrundlagen](https://learn.chatgpt.com/docs/config)

---

**Status:** verified

**Unterstützte Produkte:** IDE

**Zuletzt geprüft:** 2026-08-26
