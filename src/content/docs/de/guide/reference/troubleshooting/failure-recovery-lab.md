---
title: Fünf Übungen zur Fehlerbehebung mit Laufprotokollen
description: Mit echten CLI-Logs Probleme bei Quellen, Zitaten, Eingabebindung, Verzeichnisumfang und Zustandsdateien untersuchen und jeweils nur eine Variable ändern.
contentType: case
audiences: [creator, developer, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: Fünf absichtlich entworfene Fehler wurden tatsächlich ausgeführt, jeweils durch Änderung einer einzigen Variable behoben und erfolgreich erneut ausgeführt. Die Hashes der ursprünglichen Eingaben blieben gleich. Es handelt sich weder um Produktionsvorfälle noch um ein Experiment zur Erfolgsquote eines Modells.
  environment: Python 3.12.11 / Darwin arm64; temporäre Kopien und synthetische Eingaben, ohne Netzwerk oder Modellaufrufe.
  evidence:
    - label: Zusammenfassung der fünf tatsächlichen Läufe
      href: /downloads/failure-recovery/validation/summary.json
    - label: Umfang der Verifikation
      href: /downloads/failure-recovery/validation/record.md
assets:
  - path: /downloads/failure-recovery/failure-recovery-1.0.0.zip
    purpose: Fünf reproduzierbare Fehler, Skripte und Eingaben, Vorher-nachher-Logs und Anleitung
    license: CC0-1.0
    version: 1.0.0
locale: de
source_locale: zh-CN
source_revision: "fc91872"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
---

Sichern Sie zuerst die Fehlermeldung. Bestimmen Sie dann die betroffene Schicht, ändern Sie nur eine Variable und führen Sie den Test erneut aus. Diese Seite zeigt den Ablauf mit fünf festen Eingaben. Der Autor hat die Fehler absichtlich erzeugt; die Logs stammen aus echten Kommandozeilenläufen, nicht aus Kundenfällen.

[Vollständiges Übungspaket herunterladen](/downloads/failure-recovery/failure-recovery-1.0.0.zip) · [README](/downloads/failure-recovery/README.md)

## Fehler zunächst reproduzieren

Erforderlich ist nur die Standardbibliothek von Python 3.10+, ohne Konto oder Netzwerk. Führen Sie im entpackten Verzeichnis aus:

```sh
python3 scripts/reproduce.py --output my-recovery-logs
```

Das Ausgabeverzeichnis darf noch nicht existieren, damit alte Belege nicht überschrieben werden. Das Skript arbeitet mit temporären Kopien. Die fünf fehlerhaften Läufe sollten jeweils einen Exitcode ungleich null haben, nach der Korrektur alle den Code 0; die ursprünglichen Eingaben bleiben unverändert. Jedes Log enthält Befehl, Exitcode, Standardausgabe und Fehlerausgabe. Temporäre Pfade werden als `<WORK>` normalisiert.

## 1. Quellen-Hash stimmt nicht

**Symptom:** `FAIL: Source changed: P`, Exitcode 1.

**Diagnose:** Eine festgelegte Quelldatei enthält einen versehentlich hinzugefügten Abschnitt; der Quellenindex ist unverändert. Vergleichen Sie zuerst mit dem Originalmaterial. Aktualisieren Sie nicht bloß den Hash, damit die Prüfung grün wird.

**Einzige Änderung:** Stellen Sie die bekannten Originalbytes dieser einen Quelldatei wieder her. Andere Materialien, Artikel und Index bleiben unverändert. Der erneute Lauf endet mit Code 0.

[Fehlerlog](/downloads/failure-recovery/validation/01-source-changed-before.json) · [Wiederherstellungslog](/downloads/failure-recovery/validation/01-source-changed-after.json)

Wenn sich eine echte Quelle tatsächlich geändert hat, prüfen Sie Version, Inhalt und Schlussfolgerungen erneut und bewahren einen neuen Quellennachweis auf. Das alte Dokument wiederherzustellen passt hier nur, weil die Änderung eindeutig versehentlich war.

## 2. Zitat im Artikel fehlt in der Faktentabelle

**Symptom:** `FAIL: Unmapped or unused claim ID`, Exitcode 1.

**Diagnose:** Im Artikel steht F99 statt F1; die Faktentabelle enthält kein F99. Der Abgleich mit P1 bestätigt, dass der Satz weiterhin zu F1 gehört.

**Einzige Änderung:** Korrigieren Sie nur die vertippte Kennung zu F1 und starten Sie erneut; Exitcode 0. Erfinden Sie keinen neuen Faktentabelleneintrag, um ein unbekanntes Zitat zu verdecken.

[Fehlerlog](/downloads/failure-recovery/validation/02-unmapped-citation-before.json) · [Wiederherstellungslog](/downloads/failure-recovery/validation/02-unmapped-citation-after.json)

Eine richtige Kennung beweist noch nicht, dass die Quelle den Wortlaut stützt. Prüfen Sie jeden Satz gegen die Quelle; siehe [Schreib-Skill](/de/skills/examples/writing-skill/).

## 3. Triage-Vorschlag passt nicht zur Eingabe

**Symptom:** `FAIL: Stale input hash`, Exitcode 1.

**Diagnose:** Der Eingabehash im Vorschlag passt nicht zum aktuellen festgelegten Issue. In dieser Übung wurde der Hash absichtlich beschädigt, um die Prüfung der Eingabebindung auszulösen.

**Einzige Änderung:** Ersetzen Sie den Vorschlag durch den vollständigen Referenzvorschlag, der bereits mit der aktuellen Eingabe abgeglichen wurde. Eingabe und Schema bleiben unverändert. Der erneute Lauf endet mit Code 0. Das Modell wurde nicht für eine neue Triage ausgeführt, und eine alte Schlussfolgerung wurde nicht nur durch Neuberechnung des Hashes übernommen.

[Fehlerlog](/downloads/failure-recovery/validation/03-stale-proposal-before.json) · [Wiederherstellungslog](/downloads/failure-recovery/validation/03-stale-proposal-after.json)

Wenn sich ein echtes Issue ändert, muss die Wirkung der Änderung auf die Schlussfolgerung neu bewertet werden. Siehe [Beispiel zur Issue-Triage](/de/cases/use-cases/team-automation/issue-triage-suggestions/).

## 4. Zustandsdatei für ein anderes Verzeichnis verwendet

**Symptom:** `State version/site mismatch`, Exitcode 3.

**Diagnose:** Der Zustand ist an die fixed-Site gebunden, der Befehl zeigt mit `--site` jedoch auf broken. Der Fehler entsteht bei der Umfangsprüfung; die Links sind nicht plötzlich ungültig geworden.

**Einzige Änderung:** Stellen Sie nur `--site` auf das ursprüngliche Verzeichnis zurück. Zustandsdatei und andere Parameter bleiben. Der erneute Lauf endet mit Code 0. Der fehlerhafte Aufruf hat den bestehenden Zustand nicht überschrieben.

[Fehlerlog](/downloads/failure-recovery/validation/04-wrong-site-scope-before.json) · [Wiederherstellungslog](/downloads/failure-recovery/validation/04-wrong-site-scope-after.json)

Wenn eine andere Site wirklich überwacht werden soll, richten Sie dafür einen getrennten Zustand ein. Löschen Sie nicht den alten Zustand, um die Umfangssicherung zu umgehen.

## 5. Zustands-JSON beschädigt

**Symptom:** JSON-Parsing schlägt fehl, der Runner meldet `stopped` und beendet sich mit Code 3.

**Diagnose:** Die Zustandsdatei wurde abgeschnitten. Verlauf und Basis für die Duplikatvermeidung können nicht sicher gelesen werden. Das Programm verweigert die Fortsetzung und bewahrt den beschädigten Inhalt auf, statt stillschweigend einen leeren Zustand herzustellen.

**Einzige Änderung:** Stellen Sie die vor der Übung gesicherte, bekannte funktionierende Kopie wieder her. Befehl und Site bleiben unverändert. Der erneute Lauf endet mit Code 0.

[Fehlerlog](/downloads/failure-recovery/validation/05-corrupt-state-before.json) · [Wiederherstellungslog](/downloads/failure-recovery/validation/05-corrupt-state-after.json)

Ohne Sicherung bewahren Sie zuerst die beschädigte Datei auf, prüfen Laufprotokolle und bauen den Zustand dann von Hand neu auf. Ein einfaches Löschen kann ausstehende Ereignisse verlieren und doppelte Kandidaten erzeugen. Siehe [Automatisierungs-Skill](/de/skills/examples/automation-skill/).

## Auf eigene Aufgaben übertragen

Bewahren Sie Eingabeversion, tatsächlich ausgeführten Befehl und vollständigen Fehler auf. Bestimmen Sie, ob Eingabe, Struktur, Umfang oder Zustand betroffen sind. Notieren Sie eine zu prüfende Ursache, ändern Sie nur die entsprechende Variable, führen Sie dieselbe Prüfung erneut aus und behalten Sie das Ergebnis. Nach der Behebung muss auch das ursprüngliche Ziel geprüft werden; der Exitcode allein reicht nicht.

Diese Übungen decken echte Anmeldefehler, nicht auslösende Skills im Client, Netzwerksperren und Freigabeprobleme nicht ab. Kehren Sie dafür zum [symptombasierten Fehlerindex](/de/guide/reference/troubleshooting/) zurück und bewahren Sie Angaben zur tatsächlichen Umgebung auf. Das Verhalten dieser Skripte ist keine Zusicherung für das Client-Verhalten.
