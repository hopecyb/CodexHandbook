---
title: Hooks im Überblick
description: Verstehe Konfigurationserkennung, Vertrauensprüfung, Handler und Sicherheitsgrenzen von Hooks.
locale: de
source_locale: zh-CN
source_revision: 169a1ec
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Mit Hooks kannst du Befehlsskripte oder Werkzeuge verbundener MCP-Server innerhalb der Agent-Schleife von Codex ausführen. Typische Zwecke sind die Erkennung von Zugangsdaten im Prompt, Richtlinien für Werkzeugaufrufe, Auditprotokolle, Sitzungszusammenfassungen und Verifikation vor dem Ende.

![Lebenszyklus eines Codex-Hooks mit Ereignissen für Sitzung, Aufgabenrunde, Werkzeugaufruf, Komprimierung und Subagent](/diagrams/hook-lifecycle-events-de.svg)

Der wichtigste Unterschied in der Grafik: `PreToolUse` kann die Eingabe eines unterstützten lokalen Werkzeugs vor der Ausführung ablehnen oder ändern. `PostToolUse` tritt erst nach dem Werkzeugende auf und kann entstandene Nebenwirkungen nicht rückgängig machen.

## Wo Konfigurationen gefunden werden

Codex sucht neben den aktiven Konfigurationsebenen nach:

- `~/.codex/hooks.json`
- `[hooks]` in `~/.codex/config.toml`
- `<repo>/.codex/hooks.json`
- `[hooks]` in `<repo>/.codex/config.toml`
- Hooks aktivierter Plugins
- Verwaltete Hooks, die Administratoren über System, MDM, Cloud oder `requirements.toml` verteilen

Projektbezogene `.codex/`-Inhalte werden nur für ein vertrauenswürdiges Projekt geladen. Passende Hooks aus mehreren Quellen laufen gemeinsam. Eine Konfiguration höherer Priorität ersetzt Hooks niedrigerer Priorität nicht als gesamte Gruppe.

Wenn dieselbe Konfigurationsebene `hooks.json` und eingebettetes `[hooks]` enthält, werden beide zusammengeführt und erzeugen eine Startwarnung. Verwende pro Ebene nach Möglichkeit nur eine Darstellung.

## Nicht verwaltete Hooks müssen geprüft werden

Codex speichert Vertrauen anhand des Hashs einer Hook-Definition. Neue oder geänderte nicht verwaltete Hooks werden als ausstehend markiert und übersprungen, bis ein Benutzer der neuen Definition vertraut.

Mit `/hooks` kannst du in der CLI Quellen anzeigen, Änderungen prüfen und einzelne nicht verwaltete Hooks als vertrauenswürdig markieren oder deaktivieren. Hooks eines Plugins durchlaufen denselben Vertrauensprozess. Verwaltete Hooks werden durch die Organisationsrichtlinie als vertrauenswürdig festgelegt und können im persönlichen Hook-Browser nicht deaktiviert werden.

## Zwei ausführbare Handler

| Handler | Zweck | Wichtige Grenze |
|---|---|---|
| `command` | Lokales Skript ausführen, das Ereignis-JSON von stdin erhält | Skript besitzt lokale Prozessfunktionen; Abhängigkeiten und Ausgaben müssen geprüft werden |
| `mcp_tool` | Werkzeug eines verbundenen MCP-Servers aufrufen | Startet oder verbindet Server nicht selbstständig neu; `SessionEnd` wird nicht unterstützt |

Nach aktueller offizieller Beschreibung können die Handler `prompt` und `agent` zwar geparst werden, werden aber übersprungen und gehören nicht in eine ausführbare Konfiguration.

## Laufzeitverhalten

- Mehrere passende command-Hooks starten parallel. Ein Hook kann einen anderen bereits passenden Hook nicht am Start hindern.
- Der Standardwert für `timeout` beträgt bei den meisten Hooks 600 Sekunden. `SessionEnd` verwendet standardmäßig 1 Sekunde und höchstens 3 Sekunden. Produktionsschutzskripte sollten weiterhin ausdrücklich kurze Timeouts setzen.
- Das Arbeitsverzeichnis eines command-Hooks ist das `cwd` der Sitzung. Repository-Skripte sollten den Git-Stamm bestimmen, damit relative Pfade auch bei einem Start aus Unterverzeichnissen funktionieren.
- Asynchrone Hooks eignen sich für Protokollierung und Analyse, können die auslösende Aktion jedoch nicht blockieren, genehmigen, umschreiben oder steuern.

## Beziehung zu anderen Sicherheitsebenen

| Ebene | Zuständigkeit |
|---|---|
| Sandbox | Grenzen für Dateien, Netzwerk und Systemfunktionen |
| Genehmigung | Menschliche Entscheidung vor einer Aktion mit hohem Risiko |
| Befehlsregeln | Deklaratives allow/deny für bekannte Befehlsmuster |
| Hook | Eigene testbare Logik an einem Lebenszykluspunkt |
| Serverseitige Berechtigung | Endgültig erlaubte Lese- und Schreibzugriffe in einem externen System |

Die Werkzeugabdeckung eines Hooks ist keine vollständige Sicherheitsgrenze. Die offizielle Dokumentation weist ausdrücklich darauf hin, dass spezielle Werkzeugpfade den standardmäßigen Hook-Pfad umgehen können. Hosted tools wie WebSearch durchlaufen lokale `PreToolUse`- und `PostToolUse`-Hooks ebenfalls nicht.

## Einführungsreihenfolge

1. Verwende `PostToolUse` oder `SessionEnd` zunächst für bereinigte Protokolle und beobachte das tatsächliche Verhalten.
2. Warne bei Problemen mit hoher Konfidenz über `systemMessage` oder zusätzlichen Kontext.
3. Blockiere erst mit `PreToolUse`, wenn die Regel eindeutig, das Skript durch Fixtures getestet und die Fehlalarmrate akzeptabel ist.
4. Gleiche Hook, CI, Pre-Commit-Prüfung und serverseitige Berechtigungen ab, damit keine widersprüchlichen Richtlinien entstehen.

## Abnahmecheckliste

- [ ] Ereignisname stammt aus der aktuellen offiziellen Liste
- [ ] matcher deckt nur erforderliche Werkzeuge oder Quellen ab
- [ ] Skript besitzt feste Eingabetests und verständliche Fehlermeldungen
- [ ] Protokolle speichern keine Tokens, vollständigen Prompts oder vertraulichen Werkzeugparameter
- [ ] Fehler-, Timeout- und Deaktivierungspfade wurden erprobt
- [ ] Das Team versteht die Bedeutung von Vertrauensänderungen unter `/hooks`

## Offizielle Quelle

- [OpenAI: Hooks](https://learn.chatgpt.com/docs/hooks)

---

**Status:** verified

**Unterstützte Produkte:** Umgebungen mit lokalem Codex-Host; `/hooks`-Vertrauensverwaltung in der CLI

**Zuletzt geprüft:** 2026-08-25
