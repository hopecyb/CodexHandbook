---
title: Subagents
description: Delegiere klar abgegrenzte Teilaufgaben an einen eigenen Kontext und lasse den Haupt-Agent Nachweise zusammenführen, Konflikte lösen und Ergebnisse abnehmen.
sidebar:
  order: 30
locale: de
source_locale: zh-CN
source_revision: d65f0ec
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Ein **Subagent** ist eine unabhängige Arbeitseinheit, die der Haupt-Agent für ein eindeutig umrissenes Teilproblem startet. Sie besitzt einen eigenen Kontext und gibt anschließend Ergebnisse und Nachweise an den Hauptthread zurück. Die Verantwortung für übergreifende Entscheidungen und die endgültige Abnahme verbleibt beim Haupt-Agent.

![Orchestrierung von Codex-Subagents: Der Haupt-Agent delegiert abgegrenzte Teilaufgaben, Subagents liefern Nachweise zurück und der Haupt-Agent führt sie zusammen und verifiziert sie](/diagrams/subagent-orchestration-de.svg)

## Zuerst die drei Ebenen unterscheiden

| Ebene | Isoliert? | Bedeutung |
|---|---|---|
| Gesprächskontext | Ja | Jeder Subagent konzentriert sich auf seine Aufgabe und muss nicht alle Details des Hauptthreads mitführen |
| Sandbox- und Berechtigungsmodus | Wird geerbt | Ein Subagent erhält durch seine unabhängige Ausführung keine weitergehenden Berechtigungen |
| Dateien im Arbeitsbereich | Nicht zwingend | Mehrere Agents können denselben Arbeitsbereich sehen; parallele Änderungen an derselben Datei verursachen Konflikte |

Der wichtigste Satz lautet: **Kontextisolierung ist keine Dateiisolierung.** Wenn Code parallel geändert werden soll, teile die Zuständigkeit zuerst nach Verzeichnis, Komponente oder Worktree auf.

## Wo Subagents derzeit verfügbar sind

Aktuelle Codex-Versionen stellen Subagents standardmäßig bereit; ihre Aktivität lässt sich in den entsprechenden Oberflächen der Desktop-App, CLI und IDE verfolgen. Einzelheiten der Oberfläche können sich ändern. Die stabile Vorgehensweise besteht darin, Codex ausdrücklich mit der Delegation unabhängiger Teilaufgaben zu beauftragen und den Hauptthread für die Zusammenführung verantwortlich zu machen.

In der CLI kannst du Threads mit `/agent` anzeigen oder wechseln. Eine unterstützte IDE-Oberfläche zeigt Agents im Hintergrund, und die Desktop-App stellt Thread-Aktivitäten innerhalb einer Aufgabe dar. Ob ein bestimmtes Bedienelement sichtbar ist, hängt vom aktuellen Client und den Funktionen des Kontos ab.

## Wann sich eine Aufteilung lohnt

Erfüllt eine Teilaufgabe zwei der folgenden drei Bedingungen, solltest du eine Aufteilung erwägen:

1. Sie lässt sich unabhängig beschreiben und benötigt keine häufige Synchronisierung mit den Details des Hauptthreads.
2. Sie hat ein eindeutiges Ergebnis, etwa eine Dateiliste, ein Testergebnis oder eine einseitige Schlussfolgerung.
3. Sie kann parallel zu anderen Aufgaben laufen oder durch eine separate Vertiefung den Hauptthread deutlich entlasten.

### Für parallele Bearbeitung geeignet

- Frontend, Backend und Testabdeckung jeweils nur lesend untersuchen
- Mehrere voneinander unabhängige Testfehler parallel analysieren
- Nachweise für zwei technische Lösungsansätze getrennt zusammentragen
- Spezialisierte Rollen mit Sicherheitsprüfung, Leistungsanalyse oder Dokumentationsabgleich beauftragen

### Besser im Hauptthread belassen

- Die Anforderungen sind noch unklar und erfordern fortlaufenden Austausch mit dem Benutzer
- Mehrere Schritte müssen strikt nacheinander erfolgen
- Die Änderungen konzentrieren sich auf dieselbe Datei oder denselben Codeabschnitt
- Die Teilaufgabe hat kein eindeutiges Fertigstellungskriterium und lautet nur „Schau dich einmal um“

Subagents erhöhen Tokenverbrauch und Zusammenführungsaufwand. Eine kleine Aufgabe, die sich in einem klaren Thread erledigen lässt, muss nicht allein für Parallelität aufgeteilt werden.

## Die Verantwortung des Haupt-Agents bleibt bestehen

Vier Aufgaben verbleiben immer beim Haupt-Agent:

- Das Gesamtziel, die Vorgaben des Benutzers und die endgültigen Entscheidungen
- Die Grenzen der Teilaufgaben und die Zuständigkeit für Dateien
- Die Entscheidung bei widersprüchlichen Ergebnissen
- Tests, Build und Risikobeschreibung nach der Zusammenführung

Die Rückmeldung „fertig“ eines Subagents ist nur ein Signal für seine Teilaufgabe, kein Nachweis dafür, dass die Gesamtaufgabe abgeschlossen ist.

## Einen überprüfbaren Delegationsvertrag schreiben

Das folgende Beispiel beauftragt eine schreibgeschützte Untersuchung:

```text
Starte einen Subagent und analysiere ausschließlich lesend die Session-Aktualisierung in packages/auth.

Umfang: packages/auth und zugehörige Tests; keine Dateien ändern.
Frage: Kann nach einer fehlgeschlagenen Aktualisierung weiterhin das alte Token verwendet werden?
Ergebnis: Schlussfolgerung, wichtige Dateien und Zeilen, reproduzierbarer Pfad, vorgeschlagener Test.
Verifikation: Jede Schlussfolgerung muss sich anhand des Quellcodes oder vorhandener Tests überprüfen lassen.
Rückgabe: Höchstens 500 Wörter; der Hauptthread entscheidet über mögliche Änderungen.
```

Der Vertrag klärt sechs Punkte: Aufgabe, Untersuchungsbereich, Frage, Verbote, Verifikation und Entscheidungsverantwortung.

## Beispiel mit drei parallelen Strängen

Angenommen, bei der Anmeldung tritt gelegentlich eine Regression auf. Der Haupt-Agent kann die Arbeit so aufteilen:

| Teilaufgabe | Berechtigung und Umfang | Ergebnis |
|---|---|---|
| A: Codepfad | Nur lesend in `src/auth/` | Aufrufkette vom Einstieg bis zum Fehlerzweig |
| B: Testnachweis | Nur lesend in Tests und Protokollen | Kleinster zuverlässig reproduzierbarer Test |
| C: Letzte Änderungen | Nur lesend in der relevanten Git-Historie | Änderung, die die Regression am wahrscheinlichsten verursacht hat, mit Begründung |

Nach der Rückgabe aller drei Ergebnisse vergleicht der Haupt-Agent zuerst die Nachweise und entscheidet sich dann für einen Lösungsweg. Lass A, B und C nicht gleichzeitig `src/auth/session.ts` bearbeiten.

## Parallele Schreibzugriffe isolieren

Reduziere Konflikte vorzugsweise in dieser Reihenfolge:

1. Teile Schreibaufgaben auf voneinander unabhängige Verzeichnisse oder Komponenten auf.
2. Weise parallelen Implementierungen eigene Worktrees oder Branches zu.
3. Lege für jeden Agent eine eindeutige Liste der Dateien fest, die er ändern darf.
4. Lass den Haupt-Agent alles zusammenführen und danach die Verifikation erneut ausführen.

Auch wenn die Tests jeder Teilaufgabe einzeln bestehen, kann ihre Kombination nach dem Zusammenführen fehlschlagen. Die abschließende Verifikation darf deshalb nicht entfallen.

## Abnahmecheckliste

- Beantwortet die Rückgabe die ursprüngliche Frage, ohne den Umfang auszuweiten?
- Enthält sie überprüfbare Nachweise wie Dateipositionen, Protokolle oder Tests?
- Hält sie Schreibschutz, Verzeichnisgrenzen und Befehlsbeschränkungen ein?
- Widersprechen sich Ergebnisse, und wurden solche Widersprüche ausdrücklich behandelt?
- Wurden nach der Zusammenführung vollständige Tests und Build erneut ausgeführt?
- Sind ungelöste Fragen und verbleibende Risiken genannt?

## Zusammenspiel mit anderen Funktionen

- Ein **Skill** standardisiert Methode und Ausgabeformat einer Teilaufgabe, zum Beispiel eine Checkliste für Code-Reviews.
- **MCP** stellt einem Subagent kontrollierte externe Werkzeuge oder Daten bereit.
- Ein **Hook** ergänzt Schutzregeln, wenn ein Subagent startet, endet oder ein Werkzeug aufruft.
- Ein **Worktree** isoliert parallele Dateiänderungen. Er löst Konflikte im Arbeitsbereich, nicht im Kontext.

Lies als Nächstes [Multi-Agent-Koordination](/de/cases/workflows/multi-agent-coordination/) und [Übergabe und Fortsetzung](/de/guide/agent-work/handoff-and-resume/).

---

**Status:** verified

**Unterstützte Produkte:** App / CLI / IDE

**Prüfgrundlage:** Mit der aktuellen offiziellen Codex-Dokumentation zu Subagents abgeglichen. Die Seite beschreibt Kontextisolierung, vererbte Berechtigungen, Zugriffsoberflächen, Tokenkosten und Konflikte bei parallelen Schreibzugriffen; Zusammenführung und endgültige Verifikation bleiben Aufgabe des Haupt-Agents.

**Zuletzt geprüft:** 2026-08-26
