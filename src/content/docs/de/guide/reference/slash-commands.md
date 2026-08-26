---
title: Slash-Befehle und Schnelleinstiege
description: Kurzübersicht zu /-Befehlen und $-Skill-Aufrufen zum Lernen, nicht als vollständiges Parameterhandbuch.
sidebar:
  order: 40
locale: de
source_locale: zh-CN
source_revision: 9debf5c
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Beim ersten Kontakt wirken Slash-Befehle leicht wie eine Liste auswendig zu lernender Fachbegriffe. Einfacher ist es, sie als ausdrücklich aufrufbare Schnelleinstiege zu betrachten.

Sie öffnen normalerweise schnell einen bestimmten Modus oder integrierten Ablauf. Slash-Befehle (`/command`) und der Aufruf eines [Skills](/de/skills/overview/) mit `$name` hängen zusammen, sind aber nicht identisch. Die konkrete Liste **ändert sich je nach Produkt und Zugriffsrechten**, und Desktop-App, CLI, IDE sowie ChatGPT Web bieten unterschiedliche Mengen. Maßgeblich sind die aktuelle Autovervollständigung nach `/` im Composer und die offizielle Dokumentation.

## Begriffe unterscheiden

| Einstieg | Auslöser | Typischer Zweck |
|---|---|---|
| Slash-Befehl wie `/review` | Du gibst `/` ein | Integrierter oder konfigurierter fester Ablauf |
| `$skill-name` | Du oder das Modell | Skill des Projekts oder Benutzers |
| Natürliche Sprache | Du | Allgemeine Aufgabe |

## Direkte Unterscheidung

- `/Befehl`: Du wählst im Chat ausdrücklich einen Schnelleinstieg
- `$skill`: Du oder das Modell ruft einen bestimmten Skill auf
- Natürliche Sprache: Du beschreibst die Anforderung und lässt das Modell die Vorgehensweise wählen

Wenn du einen bekannten Ablauf schneller öffnen möchtest, ist ein `/Befehl` der direktere Weg.

## Was ein Slash-Befehl ist

- Kein Terminalbefehl
- Kein geheimnisvoller Fachbegriff
- Vergleichbar mit dem Einstieg über eine „Schnellaktionsschaltfläche“ im Chat

Er eignet sich besonders, wenn:

- du den gewünschten Ablauf bereits kennst
- du dieselbe Absicht nicht jedes Mal neu formulieren möchtest

## Häufige Missverständnisse

### 1. Slash-Befehle sind Terminalbefehle

Sie sind Schnelleinstiege in der Chat-Oberfläche und keine `codex ...`-Befehle für die Shell.

### 2. Die Liste der Slash-Befehle bleibt unverändert

Verfügbare Befehle können sich nach Produkt, Version und Umgebung unterscheiden. Die **Autovervollständigung** der aktuellen Umgebung ist zuverlässiger als eine auswendig gelernte Liste.

### 3. Slash-Befehle umgehen Genehmigungen und Sandbox

Wenn der ausgelöste Ablauf Dateien schreibt, Befehle ausführt oder das Netzwerk verwendet, gilt weiterhin die aktuelle Richtlinie.

### 4. Ohne Slash-Befehle lässt sich Codex nicht gut verwenden

Die meisten Aufgaben können in natürlicher Sprache beschrieben werden. Slash-Befehle beschleunigen bekannte Abläufe, nachdem du mit Codex vertrauter bist.

## Derzeit häufige Einstiege

### Desktop-App / IDE

- `/plan`: In einen Planungsmodus für mehrere Schritte wechseln
- `/review`: Nicht committete Änderungen oder Vergleich mit einem Basis-Branch prüfen
- `/status`: Chat-ID, Kontextverbrauch und Rate Limits anzeigen
- `/mcp`: Verbindungsstatus von MCP anzeigen
- `/init`: Gerüst für `AGENTS.md` im aktuellen Projekt erstellen

### Sitzungssteuerung nur in der CLI

- `/permissions`: Berechtigungsmodus der aktuellen Sitzung anpassen
- `/agent`: Agent-Threads prüfen oder wechseln
- `/model`: Aktuelles Modell auswählen
- `/status`: Einstellungen der aktuellen Sitzung prüfen

ChatGPT Web besitzt ein eigenes Befehlsmenü im Composer. Gehe nicht davon aus, dass Befehle aus Desktop-App oder CLI dort unter demselben Namen verfügbar sind.

## Hinweise zur Verwendung

1. Gib zuerst `/` ein und prüfe die aktuelle Umgebung, statt eine veraltete Liste auswendig zu lernen.
2. Setze wiederkehrende Teamabläufe vorzugsweise als **Skill mit Dokumentation** um, damit nicht nur erfahrene Personen den Befehlsnamen kennen.
3. Von Slash-Befehlen ausgelöste Schreibzugriffe unterliegen weiterhin Sandbox und Genehmigungen.

## Direkt ausprobieren

Gehe so vor:

1. Gib `/` ein.
2. Sieh dir die in der aktuellen Umgebung verfügbaren Einträge an.
3. Wähle zunächst einen Eintrag, dessen Name und Zweck du verstehst.

## Erster Lernversuch

Eine geeignete Reihenfolge ist:

1. Gib `/` ein und sieh dir das aktuelle Angebot an.
2. Probiere einen Befehl mit verständlichem Zweck aus.
3. Beobachte, ob er eher einen Modus wechselt oder einen Ablauf ausführt.
4. Wenn das Team diesen Ablauf langfristig wiederverwenden soll, erwäge anschließend einen Skill.

So wird die Aufgabenteilung deutlich: Slash-Befehle sind Schnelleinstiege, Skills wiederverwendbare Langzeitabläufe.

## Unterschied zu CLI-Befehlen

| | `/` im Chat | `codex …` im Terminal |
|---|---|---|
| Kontext | Aktuelle Sitzung und beigefügte Dateien | Mit `--cd` / `-C` festgelegtes Verzeichnis |
| Geeignet für | Interaktive Untersuchung | Skripte und CI |

Slash-Befehle sind Schnelleinstiege im Chat. Es ist hilfreicher, die tatsächlich verfügbaren Einträge der aktuellen Umgebung zu prüfen, als Namen auswendig zu lernen.

CLI-Unterbefehle behandeln [Interaktiver CLI-Modus](/de/guide/cli/interactive-mode/) und [Nicht interaktiver Modus](/de/guide/cli/non-interactive-mode/). Eine vollständige Parameterübersicht bietet die [Referenz der CLI-Befehle](/de/guide/reference/commands/).

---

**Status:** verified

**Unterstützte Produkte:** App / CLI / IDE

**Prüfgrundlage:** Mit den aktuellen offiziellen Tabellen für Slash commands in der Desktop-App und Developer commands abgeglichen. Die Seite stellt ausdrücklich klar, dass sich die Befehlssätze der Arbeitsoberflächen unterscheiden. Alle aufgeführten Befehle stammen aus der aktuellen offiziellen Tabelle; die endgültige Verfügbarkeit richtet sich weiterhin nach der Autovervollständigung im Composer.

**Zuletzt geprüft:** 2026-08-26
