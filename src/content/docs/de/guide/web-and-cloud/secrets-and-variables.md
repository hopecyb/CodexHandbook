---
title: Secrets und Umgebungsvariablen
description: Wähle korrekt zwischen Cloud-Secrets für das Setup und normalen Umgebungsvariablen für den gesamten Chat.
sidebar:
  order: 30
locale: de
source_locale: zh-CN
source_revision: 08f8d64
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Umgebungsvariablen und Secrets in Cloud besitzen unterschiedliche Lebenszyklen. Dieser Unterschied bestimmt, wofür sie sicher eingesetzt werden können, nicht nur, ob die Oberfläche einen Wert maskiert.

| Typ | Sichtbare Phasen | Geeignete Inhalte |
|---|---|---|
| Umgebungsvariable | Setup und gesamte Agent-Phase | Nicht vertrauliche Konfiguration wie Laufzeitmodus oder öffentliche API-Basisadresse |
| Secret | Nur Setup-Skript | Token für private Pakete und Zugangsdaten zur Installation von Abhängigkeiten |

Secrets werden zusätzlich verschlüsselt gespeichert, erst bei der Aufgabenausführung entschlüsselt und vor Beginn der Agent-Phase entfernt. Sie sind kein allgemeiner Zugangsdatenkanal, über den Agent zur Laufzeit Produktions-APIs aufrufen soll.

## Richtiges Beispiel: Privates Paket installieren

Erstelle in den Umgebungseinstellungen ein Secret namens `NPM_TOKEN`. Das Setup-Skript erzeugt damit eine temporäre Authentifizierungskonfiguration und installiert die Abhängigkeiten:

```bash
set -euo pipefail
printf '//registry.npmjs.org/:_authToken=%s\n' "$NPM_TOKEN" > ~/.npmrc
pnpm install --frozen-lockfile
rm -f ~/.npmrc
```

In der Agent-Phase wird das Token nicht mehr benötigt. Sie verwendet nur die bereits installierten Abhängigkeiten. Das Setup-Protokoll darf das Secret nicht mit `echo` ausgeben.

## Falsches Beispiel

```text
Den Produktionswert API_KEY als normale Umgebungsvariable konfigurieren
und Agent mit curl echte Bestellungen über eine externe Schnittstelle verifizieren lassen.
```

Damit bleibt der vertrauliche Wert während der gesamten Agent-Phase verfügbar. Bei geöffnetem Netzwerk entsteht ein Risiko für Exfiltration oder Fehlbedienung. Verwende stattdessen Test-Fixtures, Mocks, kurzlebige Testzugangsdaten mit minimalen Berechtigungen oder beschränke authentifizierte Vorbereitungen auf das Setup.

## Konfiguration prüfen

1. Liste getrennt auf, welche Werte Setup und Agent-Phase tatsächlich benötigen.
2. Verwende Secrets für vertrauliche Werte, die nur bei der Installation nötig sind.
3. Verwende Umgebungsvariablen für nicht vertrauliche Einstellungen, die Agent benötigt.
4. Schreibe Werte nicht in Prompt, Issue, PR, Repository oder `AGENTS.md`.
5. Führe einen Secret-Scanner aus und prüfe die Setup-Protokolle.
6. Rotiere Zugangsdaten regelmäßig und entferne nicht mehr benötigte Werte.

Das Setup läuft in einer eigenen Bash-Sitzung. Ein normales `export` gilt nicht automatisch in der Agent-Phase weiter. Nicht vertrauliche Werte, die während des gesamten Chats verfügbar sein müssen, werden direkt als Umgebungsvariablen konfiguriert und nicht über einen temporären Shell-Zustand bereitgestellt.

## Beziehung zu CI

GitHub Actions Secrets und Codex Cloud Secrets sind getrennte Speichersysteme und werden nicht automatisch synchronisiert. Gleiche Variablen**namen** können die Dokumentation vereinfachen. Kopiere aber nicht dasselbe Produktionstoken mit weitergehenden Berechtigungen als für die Aufgabe erforderlich.

## Vorgehen nach einer Offenlegung

Widerrufe oder rotiere die Zugangsdaten sofort und entferne offengelegte Inhalte anschließend aus Protokollen, Chats, Issues und Git-Historie. Das Löschen der aktuellen Datei widerruft ein bereits verbreitetes Secret nicht.

## Offizielle Grundlage

- [Cloud environments: variables and secrets](https://learn.chatgpt.com/docs/environments/cloud-environment)

---

**Status:** verified

**Unterstützte Produkte:** Cloud

**Zuletzt geprüft:** 2026-08-26
