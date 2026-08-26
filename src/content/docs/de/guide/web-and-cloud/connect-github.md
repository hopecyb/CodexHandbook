---
title: GitHub verbinden
description: Konfiguriere den GitHub-Zugriff für Codex Cloud mit dem kleinstmöglichen Repository-Umfang.
sidebar:
  order: 10
locale: de
source_locale: zh-CN
source_revision: b811894
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Codex Cloud muss zuerst mit GitHub oder GitLab (Beta) verbunden werden, bevor eine Umgebung für ein Repository erstellt werden kann. Der GitHub-Verbindungsumfang bestimmt, welche Repositorys sichtbar sind. Lokale Klone und noch nicht gepushte Änderungen gehören nicht dazu.

## Verbindungsschritte

1. Öffne Codex Cloud und melde dich mit einem ChatGPT-Konto an.
2. Verbinde GitHub, wenn du dazu aufgefordert wirst.
3. Wähle in der GitHub-Autorisierung die Organisation und die **benötigten Repositorys** aus.
4. Kehre zu Codex zurück, wähle das Repository und erstelle eine Cloud-Umgebung.
5. Verifiziere Klonen, Branch und Diff mit einer schreibgeschützten oder kleinen Änderungsaufgabe.
6. Aktiviere für PR-Reviews Code review in den Codex Settings des Repositorys.

Erlaube nur die Repositorys, die für die aktuelle Arbeit erforderlich sind. Prüfe bei Team-Repositorys zusätzlich, ob die Organisation die Integration zulässt, das aktuelle Konto die nötigen Berechtigungen besitzt und der Branchschutz erhalten bleibt.

## Prüfung vor und nach der Verbindung

- [ ] Das Ziel-Repository ist nicht versehentlich ein gleichnamiger Fork
- [ ] Standard-Branch und Aufgabenausgangspunkt wurden bestätigt
- [ ] Erforderliche lokale Änderungen wurden gepusht oder ausdrücklich ausgeschlossen
- [ ] Direkte ungeprüfte Schreibzugriffe auf den Haupt-Branch sind gesperrt
- [ ] Die Umgebung enthält keine Produktionszugangsdaten mit Vollzugriff
- [ ] Die erste Aufgabe ändert nur risikoarme Dateien

## Zwei Verwendungsarten in GitHub

### Eine Aufgabe in Cloud implementieren lassen

Wähle in Codex Cloud Repository-Umgebung und Ausgangs-Branch und beschreibe das Ziel. Prüfe nach Aufgabenende den Diff und erstelle anschließend einen PR.

### Einen PR von Codex prüfen lassen

Schreibe nach Aktivierung von Code review in einen PR-Kommentar:

```text
@codex review
```

Codex veröffentlicht ein reguläres GitHub-Review. Automatische Reviews müssen separat in Codex Settings aktiviert werden. Ein Team kann repositoryspezifische Regeln unter `## Code Review Rules` in `AGENTS.md` dokumentieren.

## Berechtigungsfehler einordnen

- Repository fehlt in der Liste: Prüfe den Repository-Umfang der GitHub-Autorisierung.
- 403 bei einem Organisations-Repository: Prüfe Organisationsrichtlinie, SSO und Installationsgenehmigung.
- Automatisches Review lässt sich nicht aktivieren: Bestätige die dafür erforderliche GitHub-Push- oder Administratorberechtigung.
- Cloud sieht einen lokalen Commit nicht: Cloud checkt nur aus dem Remote-Repository aus; pushe den Commit zuerst auf einen eindeutigen Branch.

Erlaube nicht sämtliche privaten Repositorys, nur um einen 403-Fehler zu beheben. Bestimme zuerst das Ziel-Repository und die konkret fehlende Berechtigung.

## Offizielle Grundlage

- [Codex Cloud quickstart](https://learn.chatgpt.com/docs/cloud)
- [GitHub Pull Request review](https://learn.chatgpt.com/docs/third-party/github)

---

**Status:** verified

**Unterstützte Produkte:** Cloud, GitHub

**Zuletzt geprüft:** 2026-08-26
