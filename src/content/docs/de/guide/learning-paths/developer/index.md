---
title: "Entwicklerpfad: Code lesen, Fehler beheben, prüfen und übergeben"
description: "Ein vorhandener Warenkorbfehler verbindet Codelektüre, Rot-Grün-Tests, Diff-Prüfung und Übergabe; drei ausfüllbare Vorlagen sind enthalten."
contentType: path
audiences: [developer]
level: beginner
outputs: [javascript, markdown, test-log]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: "Die Referenzübung wurde erneut ausgeführt: Zu Beginn schlug einer von drei Tests fehl, nach der Referenzkorrektur bestanden alle drei; die beiden Testdateien waren identisch. Die Pfadvorlagen wurden vom Autor selbst geprüft, aber noch nicht von unabhängigen Lernenden durchgespielt."
  environment: "Node.js v22.16.0 / Darwin arm64; integriertes node:test, keine Drittanbieter-Abhängigkeiten."
  evidence:
    - label: "Protokoll der tatsächlichen Ausführung"
      href: /downloads/developer-path/run-record.json
    - label: "Prüfreferenz des Autors und Grenzen des Umfangs"
      href: /downloads/developer-path/review-reference.md
sidebar:
  order: 20
prev:
  link: /de/guide/learning-paths/
  label: "Lernpfad wählen"
next:
  link: /de/cases/use-cases/software-development/fix-a-bug-with-verification/
  label: "Fehlerbehebung mit Überprüfung beginnen"
locale: de
source_locale: zh-CN
source_revision: 22d8bd3
translation_status: draft
translated_at: 2026-09-20
---
Mit einer kleinen Warenkorbübung erledigst du vier Dinge: Code erklären, Fehler beheben, Unterschiede prüfen und Belege übergeben. Dafür musst du nicht vorher alle Clients, Konfigurationen oder Multi-Agent-Funktionen lernen.

Voraussetzung: einfaches JavaScript lesen und Node.js-Tests im lokalen Terminal ausführen können. Die Referenzumgebung ist Node.js 22.16.0; Drittanbieter-Abhängigkeiten sind nicht nötig. CLI, IDE oder ein anderer Client mit Zugriff auf lokale Dateien und Terminal sind möglich. Das Testverhalten bestimmt Node.js.

## Code und Belegverzeichnis vorbereiten

Verwende `examples/complete-workflows/developer/verified-bug-fix/` im [Quellrepository des Handbuchs](https://github.com/hopecyb/CodexHandbook). Lies zuerst `brief.md` und `README.md`, ohne `solution/` anzusehen. Die vollständigen Schritte stehen in [Fehler mit Überprüfung beheben](/de/cases/use-cases/software-development/fix-a-bug-with-verification/).

Im Übungsverzeichnis:

```sh
# work/ darf noch nicht existieren. Falls du schon eine Übung hast, wähle einen neuen Namen und überschreibe sie nicht.
cp -R starter work
mkdir -p evidence
```

Behebe den Fehler in `work/`. Bewahre `starter/` als fehlgeschlagenen Ausgangszustand und `solution/` als Referenzlösung auf. Speichere die folgenden Vorlagen separat in `evidence/`. Die herunterladbaren Vorlagen enthalten nicht den vollständigen Code und müssen mit der Repository-Übung genutzt werden.

| Meilenstein | Voraussetzung | Ergebnis | Abschlusskriterium |
|---|---|---|---|
| 1. Code lesen | `brief.md` und `starter/` | `code-map.md` | Eingabe, Datenweg, Fehler und Ursache sind anhand von Dateien belegt |
| 2. Beheben und prüfen | Ursache und unveränderte Tests | `work/cart.js`, `red.txt`, `green.txt` | Erst Fehler reproduzieren, dann dieselben Tests bestehen |
| 3. Diff prüfen | Änderung und beide Testausgaben | `review.md`, Implementierungs-Diff | Erwartungen und API unverändert, keine fremden Änderungen |
| 4. Übergeben | Belege der ersten drei Schritte | `handoff.md` | Nachfolgende Person findet aktuelle Dateien und kann den nächsten Schritt erneut ausführen |

## 1. Code lesen und eine überprüfbare Übersicht erstellen

[Lade die Vorlage zur Codelektüre herunter](/downloads/developer-path/code-map-template.md). Lass Codex `brief.md`, `starter/cart.js` und `starter/cart.test.js` lesen und zunächst nur lesend Einstiegspunkt, Datenweg, auslösende Eingabe, tatsächlichen und erwarteten Wert, Ursache in einer Codezeile und Umfangsgrenzen erklären.

Speichere das Ergebnis in `evidence/code-map.md`. Die Übung hat nur zwei Kerndateien; ein komplexes Architekturdiagramm ist unnötig. Erkläre zum Abschluss, dass `10` zehn Prozent bedeutet, warum der fehlerhafte Code aus Zwischensumme 40 den Gesamtwert -360 macht und warum 36 richtig ist.

Vergleiche bei Bedarf mit der [Lesereferenz des Autors](/downloads/developer-path/code-map-reference.md), prüfe eigene Schlüsse aber am tatsächlichen Code. Erst danach darf die Implementierung geändert werden.

## 2. Roten Test sichern, dann minimal korrigieren

Alle folgenden Befehle werden in `verified-bug-fix/` ausgeführt:

```sh
node --test work/cart.test.js > evidence/red.txt 2>&1
```

Erwartet wird Exit-Code 1: Einer von drei Tests schlägt fehl. Öffne `evidence/red.txt` und bestätige, dass der Rabatttest tatsächlich -360 und erwartet 36 meldet. Bestehen alle Tests, prüfe, ob du die Referenzlösung oder eine vorzeitig geänderte Datei verwendest; behaupte keine reproduzierte rote Phase.

Der vollständige Ausführungsrahmen kann direkt vorgegeben werden:

```text
Behebe anhand von brief.md und evidence/code-map.md ausschließlich die Prozentumrechnung in work/cart.js.
Lass Funktionssignatur und Assertions in work/cart.test.js unverändert. Füge keine Abhängigkeiten hinzu und refaktorisiere nicht.
Führe danach node --test work/cart.test.js aus und speichere die tatsächliche Ausgabe in evidence/green.txt.
Bei unerwartetem Ergebnis behalte den Fehlerbeleg und suche die Ursache; ändere keine Assertions passend zur Implementierung.
Liefere eine Änderungsbeschreibung und Testergebnisse. Erstelle keinen Commit und pushe nicht.
```

Zum Abschluss müssen alle ursprünglichen drei Tests mit Exit-Code 0 bestehen und nur die Ursache geändert sein. Auch ein fehlgeschlagener Testbefehl kann ein Log erzeugen; `green.txt` allein beweist keinen Erfolg.

## 3. Diff und Auslassungen prüfen

[Lade die Prüfvorlage herunter](/downloads/developer-path/review-template.md) und trage den tatsächlichen Vergleich ein: erhaltenes `starter/` gegen eigenes `work/`, nicht automatisch gegen `main`; uncommittete Änderungen im Repository sind dafür unerheblich.

```sh
diff -u starter/cart.js work/cart.js
diff -u starter/cart.test.js work/cart.test.js
```

Der erste Befehl soll die Prozentumrechnung zeigen; Exit-Code 1 bedeutet eine Differenz, keinen Befehlsfehler. Der zweite soll ohne Ausgabe mit Code 0 enden. Lass Codex den echten Diff und die Rot-Grün-Logs nur lesend prüfen und notiere Befunde, Belege, ungedeckte Punkte und Entscheidungen in `evidence/review.md`.

Prüfe zum Abschluss, dass Tests nicht abgeschwächt, API nicht geändert und keine zusätzlichen Abhängigkeiten oder irrelevanten Änderungen eingeführt wurden. Geldgenauigkeit, Steuern und ungültige Eingaben sind nicht abgedeckt; drei bestandene Tests beweisen keine Produktionssicherheit. Vergleiche mit der [Prüfreferenz des Autors](/downloads/developer-path/review-reference.md).

## 4. Übergabe schreiben und aus Dateien wiederaufnehmen

[Lade die Übergabevorlage herunter](/downloads/developer-path/handoff-template.md). Notiere in `evidence/handoff.md` aktuelles Verzeichnis, geänderte Dateien, weiterhin gültige Grenzen, Belegpfade, nächsten Befehl und erwartetes Ergebnis. In einem echten Git-Projekt gehören auch Branch, Commit und Arbeitsbaumzustand hinein.

Eine anschließende Leseaufgabe kann so lauten:

```text
Lies evidence/handoff.md und prüfe zuerst, ob die aktuellen Dateien in work/ zur Übergabebeschreibung passen.
Führe im Übungswurzelverzeichnis node --test work/cart.test.js aus und notiere den tatsächlichen Exit-Code und die Zusammenfassung.
Vergleiche Implementierung und Tests in work mit starter. Beschreibe Abweichungen und übernimm kein historisches grünes Ergebnis.
Ändere keinen Code, erstelle keinen Commit und pushe nicht.
```

Führe sie in einer neuen Aufgabe aus oder bitte eine andere Person um Prüfung. Selbst neu zu starten ist nur eine Wiederaufnahmeübung, keine unabhängige menschliche Begutachtung. Die Form zeigt das [Übergabeprotokoll des Autors](/downloads/developer-path/handoff-reference.md).

Abgeschlossen ist die Übergabe, wenn allein die Datei zum Code, den Tests und Grenzen führt und das aktuelle Ergebnis tatsächlich ausgeführt wurde. Wenn dieser Lauf noch fehlt, vermerke „Übergabeprüfung ausstehend“.

## Bei Problemen zurück zu welchem Schritt?

- Datei fehlt: Terminalverzeichnis und `work/` prüfen; zurück zur Vorbereitung.
- Kein roter Test: ursprünglichen Ausgangspunkt und Tests prüfen; grünes Referenzergebnis ist keine Reproduktion.
- Tests bestehen erst nach Änderungen an Tests: ursprüngliche Assertions wiederherstellen und Ursache erneut analysieren.
- Fremde Änderungen: Diff behalten, Korrektur eingrenzen und Tests erneut ausführen.
- Übergabe passt nicht zu Dateien: aktuelle Dateien gelten, Protokoll aktualisieren, dann weiterarbeiten.

Im echten Projekt ergänze die vom Repository geforderten Lint-, Typ- und vollständigen Testläufe. Ob sie nötig sind und welche Befehle gelten, steht in den Projektanweisungen. Diese Übung enthält solche zusätzlichen Prüfungen nicht; erfinde keine erfolgreichen Ergebnisse.
