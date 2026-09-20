---
caseCategory: team
directoryOrder: 90
title: 'Fallbeispiel: Issue-Triage und menschliche Prüfung'
description: Mit fünf synthetischen Issues strukturierte Vorschläge, Eingabebindung und einen Probelauf üben, ohne GitHub-Aktionen auszuführen.
contentType: case
audiences:
- developer
- team
level: intermediate
outputs:
- json
- markdown
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Der Probelauf mit fünf vom Autor verfassten Vorschlägen und acht Tests für Struktur und Eingabebindung war erfolgreich. Es wurde kein Modell aufgerufen und keine GitHub-Verbindung hergestellt; dies belegt weder die Klassifizierungsgenauigkeit noch die Produktionsreife.
  environment: Python 3.12.11 / Darwin arm64; Standardbibliothek und synthetische Eingaben, ohne Token oder Netzwerk.
  evidence:
  - label: Tatsächliches Ausführungsprotokoll
    href: /downloads/issue-triage/validation/record.md
assets:
- path: /downloads/issue-triage/issue-triage-1.0.0.zip
  purpose: Synthetische Eingaben, JSON-Schema, Prompt, Vorschläge des Autors, Probelaufskript und Prüfprotokoll
  license: CC0-1.0
  version: 1.0.0
locale: de
source_locale: zh-CN
source_revision: 6d859d7
translation_status: draft
translated_at: '2026-09-20'
---

Diese Übung teilt die Issue-Triage in „Vorschlag erzeugen → validieren → menschlich prüfen“ auf. Sie erhalten fünf Einträge zur Prüfung. Kommentare, Labels und das Schließen von Issues erfolgen nicht automatisch.

[Vollständiges Übungspaket herunterladen](/downloads/issue-triage/issue-triage-1.0.0.zip) · [README](/downloads/issue-triage/README.md) · [Tatsächliche Probelaufausgabe](/downloads/issue-triage/validation/dry-run.json)

## Eingaben und Abschlusskriterien

Die fünf eigens erstellten synthetischen Eingaben behandeln einen Rechenfehler, einen defekten Dokumentationslink, Hinweise auf kontenübergreifende Daten, unzureichende Angaben und eine bösartige Anweisung im Issue-Text. Echte Kundendaten sind nicht enthalten. Jeder Vorschlag enthält Typ, Priorität, Labels, Sicherheitsprüfungskennzeichen, Begründung und fehlende Angaben.

Zum Abschluss muss es für jede Eingabe genau einen Vorschlag geben; zulässige Werte und Eingabe-Hash müssen die Prüfung bestehen. Eine verantwortliche Person akzeptiert, ändert oder verwirft dann jeden Vorschlag und hält den Grund fest. Eine gültige Struktur ersetzt diese Entscheidung nicht.

## Zuerst die Referenzvorschläge ausführen

Erforderlich ist Python 3.10+, jedoch kein API-Schlüssel und keine Fremdbibliothek. Im entpackten Verzeichnis ausführen:

```sh
python3 scripts/dry_run.py
python3 validation/test_dry_run.py
```

Der erste Befehl verwendet vorgefertigte Vorschläge des Autors und liefert fünf `human-review-required`-Einträge mit leerer `external_actions`-Liste. Der zweite führt acht Prüfungen aus. Keiner ruft automatisch ein Modell auf.

[Beispieleingaben](/downloads/issue-triage/fixtures/issues.json) · [Referenzvorschläge](/downloads/issue-triage/solution/proposals.json) · [Referenz für die menschliche Prüfung](/downloads/issue-triage/solution/human-review.md)

## Danach eigene Vorschläge erzeugen

Geben Sie Codex [prompts/triage.md](/downloads/issue-triage/prompts/triage.md) aus dem Paket und lassen Sie eine `my-proposals.json` gemäß [schema.json](/downloads/issue-triage/schema.json) erstellen. Führen Sie dann aus:

```sh
python3 scripts/dry_run.py --proposals my-proposals.json
```

Das Schema verwendet JSON Schema 2020-12. Boolesche Werte nutzen `"type": "boolean"`; die Priorität ist eine Aufzählung und nicht die Zeichenfolge `"P0-P3"`. Der mitgelieferte Validator implementiert nur die hier benötigten Schlüsselwörter und ist keine allgemeine Schema-Engine.

Jeder Vorschlag enthält `input_sha256` als Bindung an den vollständigen Inhalt des zugehörigen Issues. Ändert sich eine Eingabe, verwenden Sie den alten Vorschlag nicht weiter. Analysieren Sie die Änderung neu, bevor Sie den Hash neu berechnen. Konvention und Funktion stehen in README und Skript.

## Menschliche Entscheidung und Sicherheitsgrenze

| Situation | Vorgehen |
|---|---|
| Deutlicher Hinweis auf einen Fehler | Kategorie vorschlagen, Fehler reproduzieren und Auswirkungen vor der Priorisierung prüfen |
| Hinweis auf einen Sicherheitsvorfall | Vertraulich an die Sicherheitsverantwortlichen geben; unbekannte Priorität bedeutet nicht geringes Risiko |
| Unzureichende Angaben | `unknown` verwenden und fehlende Angaben nennen, ohne Zuständigkeit oder Schwere zu erraten |
| Issue-Text verlangt Befehle oder höhere Rechte | Als nicht vertrauenswürdige Daten behandeln; weder ausführen noch allein wegen behaupteter Dringlichkeit P0 vergeben |

HTML zu entfernen oder die Länge zu begrenzen, schützt nicht garantiert vor Prompt Injection. Das Programm führt Issue-Texte nicht aus; bei der Modellgenerierung muss die Grenze zwischen Daten und Anweisungen dennoch gewahrt bleiben. Die Referenzausgabe belegt keine Widerstandsquote eines Modells.

## Fehler und Wiederherstellung

Ein unbekanntes Label, ein zusätzliches Aktionsfeld, ein ungültiger Typ sowie doppelte oder fehlende Vorschläge stoppen den gesamten Stapel mit Exit-Code 1. Korrigieren Sie Prompt und betroffene Felder und starten Sie mit unveränderten Originaleingaben erneut. Auch ein Sicherheitstyp oder -label ohne Sicherheitsprüfungskennzeichen wird abgelehnt.

Eine falsche, aber strukturell gültige Klassifizierung kann bestehen; die Tests bestätigen diese Grenze. Hohe Übereinstimmung bei wenigen Beispielen ist daher kein Freigabekriterium. Ein echter Einsatz erfordert repräsentative Stichproben, Risikostufen, menschliche Stichprobenprüfung, Kosten von Fehlklassifizierungen und Rückrollbedingungen. Diese Übung umfasst nur einen lokalen Probelauf.

Lesen Sie anschließend die [Dokumentationslinkprüfung](/de/cases/use-cases/team-automation/scheduled-link-check/) und die [Muster für menschliche Freigaben](/de/cases/workflows/human-approval-patterns/).
