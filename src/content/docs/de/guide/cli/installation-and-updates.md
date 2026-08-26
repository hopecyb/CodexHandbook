---
title: CLI installieren und aktualisieren
description: Installation, Aktualisierung und Versionsprüfung.
sidebar:
  order: 10
locale: de
source_locale: zh-CN
source_revision: 6b8ceaf
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Bei der ersten Installation der CLI bleiben häufig diese Fragen offen:

- Wurde die Installation tatsächlich abgeschlossen?
- Weshalb kennt das Terminal den Befehl `codex` nach der Installation noch nicht?
- Wie lässt sich nach einer Aktualisierung feststellen, welche Version gerade ausgeführt wird?

Die CLI ist nicht schon deshalb einsatzbereit, weil der Installationsbefehl einmal durchgelaufen ist. Dein aktuelles Terminal muss sie zuverlässig finden können.

## Prüfe nach der Installation mindestens diese drei Punkte

1. Der Befehl lässt sich direkt ausführen.
2. Das aktuelle Terminal findet ihn über `PATH`.
3. Die Authentifizierung wurde abgeschlossen; nicht nur die ausführbare Datei ist installiert.

## Häufige Missverständnisse

### 1. Ein abgeschlossenes Installationsskript bedeutet eine fertige Installation

Ein abgeschlossenes Skript zeigt nur, dass die Installationsschritte ausgeführt wurden.  
Prüfe als Nächstes, ob das aktuell geöffnete Terminal den Befehl erkennt.

### 2. Ein neues Terminalfenster behebt das Problem automatisch

Manchmal trifft das zu, manchmal nicht.  
Wenn `PATH` nicht aktualisiert wurde, kann der Befehl auch in einem neuen Fenster unauffindbar bleiben.

### 3. Aktualisieren bedeutet einfach erneut installieren

Häufig musst du zuerst zwei andere Fragen beantworten:

- Ist die aktuell ausgeführte Version tatsächlich veraltet?
- Welche der möglicherweise mehreren Installationen aktualisierst du gerade?

## Empfohlene Prüfreihenfolge

Gehe direkt nach der Installation folgendermaßen vor:

1. Prüfe, ob sich `codex` direkt ausführen lässt.
2. Prüfe, ob `PATH` der aktuellen Shell den Installationsort enthält.
3. Schließe Anmeldung oder Authentifizierung ab.
4. Prüfe abschließend die Versionsinformationen.

Das praktische Erfolgskriterium lautet: Das aktuelle Terminal findet den Befehl, und du kannst die Authentifizierung abschließen.

Weitere Hinweise bietet [CLI installieren](/de/guide/getting-started/install-cli/). Die offiziellen Installations- und Aktualisierungsanweisungen findest du unter [Codex CLI](https://learn.chatgpt.com/docs/codex/cli). Das offizielle eigenständige Installationsprogramm für macOS und Linux verwendet denselben Befehl für Installation und Aktualisierung. Für Windows, npm und Homebrew gelten die jeweiligen Registerkarten der offiziellen Seite.

---

**Status:** verified

**Unterstützte Produkte:** CLI

**Prüfgrundlage:** Mit dem aktuellen offiziellen Schnellstart der CLI abgeglichen. Verifiziert wurden die Installationswege für macOS/Linux, Windows, npm und Homebrew, die Aktualisierungswege und die Anmeldung mit `codex`. Konkrete Befehle werden zentral auf der Einsteigerseite zur Installation gepflegt.

**Zuletzt geprüft:** 2026-08-26
