---
title: Web und Cloud im Überblick
description: Hauptablauf einer Remote-Aufgabe von Repository-Verbindung und reproduzierbarer Umgebung bis zu Review und Pull Request.
sidebar:
  order: 13
locale: de
source_locale: zh-CN
source_revision: 5861c62
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Codex Cloud führt Codierungsaufgaben in isolierten Cloud-Umgebungen aus. Es eignet sich für Langzeitaufgaben im Hintergrund, parallele Versuche und Arbeit, die über GitHub, GitLab (Beta), Linear oder Slack gestartet wird. Cloud steuert nicht einfach deinen Rechner aus der Ferne und sieht lokale noch nicht gepushte Dateien nicht automatisch.

## Ablauf einer Cloud-Aufgabe

```text
Mit ChatGPT anmelden
  → GitHub / GitLab verbinden
  → Repository-Umgebung erstellen
  → angegebenen Branch oder Commit auschecken
  → Abhängigkeiten mit Setup-Skript installieren
  → Agent ändert und verifiziert innerhalb der Netzwerkrichtlinie
  → Zusammenfassung, Protokolle und Diff prüfen
  → Änderungen nachfassen oder PR erstellen
  → nach menschlichem Review und CI zusammenführen
```

Der Nutzen von Cloud liegt in Isolierung, Reproduzierbarkeit und Parallelität, nicht im Wegfall des Reviews.

## Lokal oder Cloud

| Lokal wählen | Cloud wählen |
|---|---|
| Aufgabe hängt von ungepushten Dateien oder lokalen Diensten ab | Eingaben liegen im Remote-Repository |
| Prozess erfordert Interaktion in Echtzeit | Aufgabe kann unabhängig im Hintergrund laufen |
| Schnelle Änderung mit kleinem Umfang | Mehrstufige Builds, Tests oder parallele Versuche |
| Werkzeug existiert nur auf diesem Rechner | Umgebung lässt sich per Skript reproduzieren |

Lies zuerst [Lokal und Cloud](/de/guide/foundations/local-vs-cloud/), um die Ausführungsgrenzen zu verstehen.

## Empfohlene Lernreihenfolge

1. [GitHub verbinden](/de/guide/web-and-cloud/connect-github/): Nur erforderliche Repositorys autorisieren.
2. [Cloud-Umgebungen](/de/guide/web-and-cloud/cloud-environments/): Werkzeuge, Versionen und Setup fixieren.
3. [Secrets und Umgebungsvariablen](/de/guide/web-and-cloud/secrets-and-variables/): Setup-Secret von einer Variable für Setup und Agent unterscheiden.
4. [Internetzugriff](/de/guide/web-and-cloud/internet-access/): Netzwerk der Agent-Phase ist standardmäßig deaktiviert und wird minimal nach Domain und Methode geöffnet.
5. [Delegieren und nachfassen](/de/guide/web-and-cloud/delegate-and-follow-up/): Aufgabe mit Ziel, Einschränkungen und Abnahmekriterien übergeben.
6. [Pull Requests erstellen](/de/guide/web-and-cloud/create-pull-requests/) und [Code-Review](/de/guide/web-and-cloud/code-review/): Ergebnis in eine zusammenführbare Lieferung umwandeln.
7. [Cloud-Fehlersuche](/de/guide/web-and-cloud/troubleshooting/): Fehler nach Repository, Setup, Netzwerk und Aufgabe eingrenzen.

Für Starts aus Desktop-App oder IDE lies [Lokale und Cloud-Aufgaben](/de/guide/desktop-app/local-and-cloud-tasks/) beziehungsweise [Cloud-Aufgaben in der IDE](/de/guide/ide/cloud-task-workflow/).

## Erste Übung

Wähle ein Test-Repository ohne Produktionszugangsdaten. Lass Codex nur Dokumentationslinks korrigieren und eine Linkprüfung ausführen. Erfolg bedeutet: Die Umgebung startet, der Diff enthält nur erwartete Dateien, die Befehlsausgabe ist sichtbar und aus dem Ergebnis kann ein PR erstellt werden. Behandle die Anzeige „abgeschlossen“ nicht als einziges Abnahmekriterium.

## Offizielle Grundlage

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)

---

**Status:** verified

**Unterstützte Produkte:** Cloud

**Zuletzt geprüft:** 2026-08-26
