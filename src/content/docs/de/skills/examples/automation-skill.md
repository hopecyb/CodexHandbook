---
title: 'Beispiel: Ein Automatisierungs-Skill, der nur Änderungen protokolliert'
description: Lade quiet-link-monitor herunter und prüfe wiederholte Checks, Fehlerbehebung, dauerhafte Ereignisse und Stoppen manuell.
contentType: skill
audiences: [developer, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Acht Zustandstests und drei CLI-Durchläufe waren erfolgreich. Ein wiederholter Fehler erzeugt kein neues Ereignis; nach der Reparatur wird eine Wiederherstellung protokolliert. Echte Zeitplanung, Modell-Routing und Nachrichtenzustellung wurden nicht getestet.
  environment: Python 3.12.11 / Darwin arm64; temporäre synthetische statische Website, Standardbibliothek, kein Netzwerk.
  evidence:
    - label: Protokoll der tatsächlichen Ausführung
      href: /downloads/skills/quiet-link-monitor/validation/record.md
assets:
  - path: /downloads/skills/quiet-link-monitor/quiet-link-monitor-1.0.0.zip
    purpose: Automatisierungs-Skill, Linkprüfer, Skript für dauerhaften Zustand, fehlerhaftes Beispiel und Prüfprotokoll
    license: CC0-1.0
    version: 1.0.0
locale: de
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 6c758b9
---

Eine wiederholte Prüfung erfordert nicht jedes Mal eine Benachrichtigung. Dieser Skill nutzt die [Linkprüf-Übung](/de/cases/use-cases/team-automation/scheduled-link-check/) und hält Änderungen, Wiederherstellung und Ausführungsfehler fest. Bei unverändertem Ergebnis bleibt er still.

[quiet-link-monitor v1.0.0 herunterladen](/downloads/skills/quiet-link-monitor/quiet-link-monitor-1.0.0.zip) · [SKILL.md](/downloads/skills/quiet-link-monitor/SKILL.md) · [README](/downloads/skills/quiet-link-monitor/README.md)

## Installation und manueller Probelauf

Lege den gesamten Ordner im Übungsprojekt unter `.agents/skills/quiet-link-monitor/` ab, ohne einen gleichnamigen Skill zu überschreiben. Bestätige anhand der [Skill-Anleitung](/de/skills/use-a-skill/), dass er wählbar ist, und rufe ihn auf:

```text
$quiet-link-monitor Übe mit den mitgelieferten Beispielen einen Fehler,
wiederholte Prüfung und Wiederherstellung. Arbeite mit einer temporären
Kopie und einer separaten Zustandsdatei. Berichte am Ende die Änderungen
der Ereignisse. Sende keine Benachrichtigungen.
```

Das Skript kann ohne Modell oder Konto eigenständig laufen. Es braucht nur die Standardbibliothek von Python 3.10+:

```sh
python3 validation/test_monitor.py
```

Kopiere für den manuellen Lauf `fixtures/broken` in dein eigenes `work-site`. Führe im Skill-Ordner zweimal aus:

```sh
python3 scripts/run_once.py --site work-site --state run-state.json
python3 scripts/run_once.py --site work-site --state run-state.json
```

Der erste Lauf endet mit Code 1 und protokolliert ein Fehlerereignis. Der zweite endet erneut mit 1, aber `new_event` ist null. Repariere denselben Ordner anhand von `fixtures/fixed` und führe erneut aus: Code 0 und `recovered`. Verwende keinen anderen Website-Pfad, um eine Wiederherstellung vorzutäuschen; der Zustand lehnt einen geänderten Geltungsbereich ab.

[Zusammenfassung der drei tatsächlichen CLI-Läufe](/downloads/skills/quiet-link-monitor/validation/manual-run.json)

## Was protokolliert wird und wann Schluss ist

Die Zustandsdatei gehört außerhalb des geprüften Ordners. Sie speichert die Ergebnisse jedes Laufs, die Anzahl aufeinanderfolgender Ausführungsfehler und dauerhafte Ereignisse. Das Skript schreibt diese Datei und eine benachbarte Sperrdatei; es ist also nicht vollständig schreibgeschützt. Die Inhalte der Website werden nicht verändert.

| Situation | Verhalten |
|---|---|
| Beim ersten Lauf gesund | Ausgangszustand anlegen, kein neues Ereignis |
| Erster Defekt oder Änderung erkannter Probleme | Änderungsereignis speichern |
| Dasselbe Ergebnis erneut | Kein neues Ereignis |
| Fehler behoben | Wiederherstellungsereignis speichern |
| Drei aufeinanderfolgende Fehler bei der Ausführung der Prüfung | Stoppereignis speichern und pausieren |
| Beschädigter Zustand, Sperrkonflikt oder andere Website | Sofort stoppen, ursprünglichen Zustand nicht überschreiben |

Ein defekter Link ist ein gültiges Prüfergebnis, kein Ausführungsfehler. Nach dem Pausieren führt ein normaler Aufruf keine Prüfung mehr aus. Kläre und behebe die Ursache und setze ausdrücklich fort:

```sh
python3 scripts/run_once.py --site work-site --state run-state.json --resume
```

Lösche Sperr- oder Zustandsdateien nicht automatisch, um einen Fehler zu umgehen. Ein abgestürzter Prozess kann eine Sperre hinterlassen; prüfe zuerst, ob noch ein Prozess aktiv ist. Die [Anleitung zu Zustand und Wiederherstellung](/downloads/skills/quiet-link-monitor/references/operations.md) nennt Exit-Codes, Aufbewahrung und Grenzen bei parallelen Läufen.

## Benachrichtigungskandidat ist keine versandte Nachricht

Das Skript protokolliert nur lokale Ereignisse. Alle `delivery`-Werte sind `not-sent`; es erstellt keinen Zeitplan und sendet keine Nachrichten. Jedes Ereignis besitzt eine für diesen Eintrag stabile ID. Ein wiederholtes Ergebnis erzeugt nicht noch einmal dasselbe Zustandsereignis.

Wenn ein autorisierter Sender angeschlossen wird, lies dauerhafte, nicht zugestellte Ereignisse, entferne Duplikate anhand der ID und speichere Zustellbestätigungen. Wer nur das `new_event` dieses Terminal-Laufs liest, kann nach einer Prozessunterbrechung ein Ereignis übersehen. Das Paket enthält keinen Sender und verspricht keine genau einmalige Zustellung über Systemgrenzen hinweg.

## Vom Handlauf zur regelmäßigen Ausführung

Bestätige zuerst einen erfolgreichen Build und prüfe erst dann die neueste Ausgabe. Scheitert der Build, stoppe, statt einen alten Ordner zu prüfen. Verwende bei jedem geplanten Lauf dieselbe Website und Zustandsdatei und vermeide parallele Schreibzugriffe. Löse die Prüfung in der Zielumgebung erst manuell aus, kontrolliere Protokolle und Stoppverhalten und richte dann die Wiederholung ein. Kanal, Empfänger und Umfang echter Benachrichtigungen müssen durch eine vorhandene Autorisierung gedeckt sein.

Echte Zeitplanung und Nachrichtenzustellung wurden hier nicht getestet. Externe Links bleiben `unchecked`; ein lokaler gesunder Zustand bedeutet nicht, dass „alle Links der Website funktionieren“.

## Einsatzbereich und Abnahme

Wiederholte Prüfungen von Dokumentationslinks passen zu diesem Skill. Allgemeine Verkaufsberichte, kreatives Schreiben und automatische Produktionsinstallationen gehören nicht dazu. Die Auslösefälle sind Entwurfserwartungen, keine gemessenen Modell-Routing-Ergebnisse.

Zum Abschluss musst du Nachweise für den ersten Fehler, die stille Wiederholung und die Behebung sowie für Pause und ausdrückliche Fortsetzung vorlegen. Die acht mitgelieferten Tests prüfen diese lokalen Zustandsabläufe; sie belegen weder Modellurteil noch Netzwerkerreichbarkeit oder Produktionszuverlässigkeit.
