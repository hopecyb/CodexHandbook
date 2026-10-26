---
title: 'Beispiel: Review-Skill mit eindeutigem Diff-Umfang'
description: Das vollständige scoped-review-Paket herunterladen, staged, unstaged und Branch-Reviews unterscheiden und einen leicht übersehenen Git-Fall nachstellen.
contentType: skill
audiences:
- developer
level: intermediate
outputs:
- markdown
- json
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Sieben Regressionstests des Diff-Sammlers und die Strukturprüfung des Skills bestanden. Auslösebeispiele und Review-Befunde wurden vom Autor entworfen; es gab weder automatisches Routing über mehrere Modelle noch einen Versuch zur Fehlererkennungsrate.
  environment: Python 3.12.11 / Git / Darwin arm64; temporäre synthetische Repositories, ohne Fremdbibliotheken.
  evidence:
  - label: Tatsächlicher Ausführungsumfang und Grenzen
    href: /downloads/skills/scoped-review/validation/record.md
assets:
- path: /downloads/skills/scoped-review/scoped-review-1.0.0.zip
  purpose: Skill, Sammler, Umfangsleitfaden, synthetische Eingaben, Referenzreview und Regressionstests
  license: CC0-1.0
  version: 1.0.0
locale: de
source_locale: zh-CN
source_revision: "e29d1b3"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: '2026-09-20'
---

Legen Sie vor einem Review fest, was verglichen wird. Dieser Skill verhindert, dass „aktuelle nicht committete Änderungen“ mit „Commits relativ zu main“ verwechselt werden oder ein sauber wirkender Arbeitsbaum einen Fehler im Index verdeckt.

[scoped-review v1.0.0 herunterladen](/downloads/skills/scoped-review/scoped-review-1.0.0.zip) · [SKILL.md ansehen](/downloads/skills/scoped-review/SKILL.md) · [Installations- und Nutzungsanleitung](/downloads/skills/scoped-review/README.md)

## Was der Skill kann

| Benutzeranfrage | Erfasster Umfang | Nicht enthalten |
|---|---|---|
| Nur staged Änderungen prüfen | HEAD → Index | Unstaged Inhalt |
| Nur unstaged Änderungen prüfen | Index → Arbeitsbaum | Staged Patch |
| Aktuelle nicht committete Änderungen prüfen | Beide Patches getrennt halten; neue Dateien auflisten | Inhalt neuer Dateien gesondert lesen |
| Commits relativ zu einem benannten Branch prüfen | Eindeutige Merge-Base → HEAD | Lokale nicht committete Inhalte |

`main` wird nicht als Standard angenommen. Fehlt die Basis, erscheint ein Fehler, statt den Umfang still zu ändern. Der Sammler liefert Belege; für die Beurteilung von Defekten müssen weiterhin relevanter Code und Tests gelesen werden.

## Installation und erster Aufruf

Sie benötigen Python 3.10+, Git und ein lokales Übungs-Repository mit mindestens einem Commit. Legen Sie das entpackte `scoped-review/` unter `.agents/skills/` des Zielprojekts ab und prüfen Sie den Einstiegspunkt `.agents/skills/scoped-review/SKILL.md`. Einen gleichnamigen vorhandenen Skill erst vergleichen, nicht überschreiben.

Für die Erkennung lokaler Skills und ihre Einstiegspunkte gilt die [offizielle Anleitung](https://learn.chatgpt.com/docs/build-skills). Prüfen Sie nach der Installation die Verfügbarkeit und rufen Sie ihn dann ausdrücklich auf:

```text
$scoped-review Prüfe die aktuell nicht committeten Codeänderungen in diesem Übungs-Repository.
Ändere keine Dateien. Nenne zuerst Befunde und erläutere danach die Abdeckung
von staged, unstaged und neuen Dateien.
```

Das Lehrpaket installiert sich nicht selbst in Ihrer persönlichen Konfiguration. Sie können stattdessen das enthaltene Skript direkt ausführen und den erfassten Umfang ansehen.

## Einen leicht übersehenen Fall nachstellen

Die synthetische Eingabe liegt in `fixtures/scenario.json`:

1. Die Ausgangsformel für den Rabatt ist korrekt.
2. Eine falsche Formel stagen: `amount * (1 - percent)`.
3. Im Arbeitsbaum die korrekte Formel `amount * (1 - percent / 100)` wiederherstellen, ohne diese Korrektur zu stagen.

Nun kann `git diff HEAD` keine Änderung zeigen, obwohl ein Commit des Index den Fehler einführen würde. Bei `amount=40, percent=10` ergibt die staged Version -360 statt 36.

Ein korrektes Review benennt den Fehler in der staged Version und die Korrektur im unstaged Patch. Die vollständige [Autorreferenz](/downloads/skills/scoped-review/fixtures/expected-review.md) erklärt auch, warum dieses lokale Problem nicht in ein Branch-Review gehört; sie ist keine tatsächliche Modellausgabe.

## Enthaltene Prüfungen ausführen

Im entpackten Skill-Verzeichnis:

```sh
python3 validation/test_scopes.py
```

Sieben Tests in temporären Git-Repositories prüfen den Umfang, den übersehenen Review-Fall, die Ablehnung einer ungültigen Basis, die Liste neuer Dateien und dass das geprüfte Repository unverändert bleibt. Ein erfolgreicher Lauf endet mit Code 0. Die Tests schreiben nicht in Ihr echtes Projekt.

Den Sammler für ein Repository verwenden:

```sh
python3 scripts/collect_diff.py --repo /path/to/your/repo --mode working-tree
```

Ersetzen Sie den Pfad durch ein Repository, dessen Prüfung genehmigt ist. Im Branch-Modus ist zusätzlich `--base` nötig. Die JSON-Ausgabe kann privaten Code enthalten und wird nicht automatisch hochgeladen. Vollständige Befehle stehen im [Umfangsleitfaden](/downloads/skills/scoped-review/references/scopes.md).

## Wann der Skill nicht auslösen sollte

Artikelüberarbeitung und neue Features gehören nicht zu diesem Skill. Bei einer unklaren Bitte wie „review das“ den Kontext für den Umfang nutzen und erst bei verbleibender Unklarheit nachfragen. Die [Auslösefälle](/downloads/skills/scoped-review/fixtures/trigger-cases.json) enthalten sieben erwartete Anfragen. Tatsächliches automatisches Routing wurde nicht gemessen.

## Abschlusskriterien und Grenzen

- Der Bericht nennt den geprüften Snapshot, die Basis und den Dateiumfang.
- Befunde enthalten Position, Auslösebedingung, Wirkung und Belege; Stilvorlieben gelten nicht als Blocker.
- Relevante ungetrackte Dateiinhalte wurden gelesen oder ausdrücklich als ungeprüft markiert. Binärdateien, ignorierte Dateien und Submodule werden nicht als abgedeckt ausgegeben.
- Nennen Sie durchgeführte und nicht durchgeführte Prüfungen. Keine Befunde garantieren keine Fehlerfreiheit.
- Das Review endet mit einem Bericht; es ändert, committet oder pusht nichts automatisch.

Mit den Review- und Übergabevorlagen des [Entwicklerpfads](/de/guide/learning-paths/developer/) können Sie das Ergebnis festhalten. Das ältere kurze `pr-review`-Gerüst hilft weiterhin beim Strukturverständnis; dieses Paket hat einen anderen Namen, um persönliche Versionen nicht zu überschreiben.
