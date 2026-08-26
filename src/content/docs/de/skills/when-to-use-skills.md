---
title: Wann Skills einsetzen
description: Entscheiden, ob eine Aufgabe als Skill lohnt — und wie Skills, Slash-Befehle und MCP sich teilen.
locale: de
source_locale: zh-CN
source_revision: 6cdbeae
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Beim Einstieg in Skills lautet die typische Frage: Lohnt es sich, genau das als eigenen Skill zu bauen?

Alles zum Skill zu machen wird schwer; was man absichern sollte und nicht absichert, wiederholt man endlos manuell. Hier geht es vor allem darum, wann Abläufe festgeschrieben werden sollten.

# Wann Skills einsetzen

## Gut als Skill geeignet

- Derselbe Ablauf wird zum dritten Mal manuell wiederholt
- Braucht eine detaillierte Checkliste, soll aber nicht jedes Mal den Kontext füllen
- Das Modell soll anhand der `description` selbst entscheiden, wann der Skill greift
- Das Team braucht geteilte, versionierte Workflows

## Wann sich ein Skill lohnt

Wenn eine Aufgabe beides erfüllt, lohnt sich ein Skill oft:

- Du wirst sie wieder tun
- Du willst beim nächsten Mal möglichst gleich vorgehen

Viele Skills landen in diesen Szenarien:

- Diff prüfen
- Changelog erzeugen
- Checks vor dem Release
- Dokumentations-Release-Abläufe

Diese Aufgaben sind nicht komplex, aber gut wiederverwendbar.

## Weniger geeignet

- Einmalige, nie wiederholte Aufgaben
- Sehr kurze, merkbare Festbefehle (eher Slash-Befehl)
- Braucht Echtzeit-Status externer Systeme mit hoher Änderungsrate (eher MCP)

## Häufige Irrtümer

### 1. Wichtige Aufgaben müssen Skills werden

Wichtig ≠ wiederverwendbar.  
Bei einer einmaligen Sonderaufgabe erhöht ein Skill oft nur den Wartungsaufwand.

### 2. Mehr Skills sind besser

Zu viele Skills mit unklaren Grenzen führen zu Fehlauswahl und erschweren die Teamwartung.

### 3. Sobald ein externes System angebunden werden kann, zuerst Skill

Externe Anbindung ist oft ein MCP-Thema. Skills tragen den „Ablauf“; die Verbindung zum externen System bleibt MCP.

## So kannst du testen

Wenn unklar ist, ob ein Ablauf sich lohnt:

1. Zwei- bis dreimal manuell durchziehen
2. Prüfen, ob jedes Mal dieselbe Prüf-Reihenfolge kommt
3. Bei „ja“ zum Skill verdichten

Solche Skills sind robuster, weil sie aus echter Wiederholung kommen, nicht aus Spekulation.

## Vergleich mit anderen Erweiterungen

| Methode | Geeignet für |
|---|---|
| Skill | Wiederverwendbare Abläufe, Progressive Disclosure |
| MCP | Externe APIs und Datenquellen |
| Hooks | Automatische Ausführung an Ereignispunkten |
| `AGENTS.md` | Projektweite Dauerregeln |

Skills eignen sich für Abläufe, die „sich wiederholen, konsistent sein sollen und nicht jedes Mal neu erklärt werden müssen“.

Auswahl der Erweiterungsmethode: [Erweiterungsmethode wählen](/de/skills/choosing-an-extension-method/). Workflow absichern: [Ablauf zum Skill machen](/de/cases/workflows/turn-a-workflow-into-a-skill/).
---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** OpenAI Help „Skills in ChatGPT“ bestätigt Skills als wiederverwendbare, teilbare Workflows; die aktuelle Codex-Laufzeit matched Skills nach Name und Beschreibung. Diese Seite ist vor allem Auswahlprinzip und hängt nicht an volatiler UI.  
**Zuletzt geprüft:** 2026-07-26
