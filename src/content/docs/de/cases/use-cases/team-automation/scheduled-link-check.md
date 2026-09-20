---
caseCategory: team
directoryOrder: 100
title: 'Fallbeispiel: Dokumentationslinks prüfen und Fehler beheben'
description: Eine Übung zur Prüfung statischer HTML-Links herunterladen, fehlende Seite und defekten Anker schrittweise reparieren und einen regelmäßigen Lauf vorbereiten.
contentType: case
audiences:
- developer
- team
level: intermediate
outputs:
- json
- html
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Sieben Skripttests bestanden. In einer temporären Kopie sanken die Fehler beim schrittweisen Beheben von zwei auf einen und dann auf null. Externe Links wurden nicht online geprüft; echte CI oder ein Scheduler wurden nicht ausgeführt.
  environment: Python 3.12.11 / Darwin arm64; Standardbibliothek und eigens erstelltes synthetisches statisches HTML, ohne Token.
  evidence:
  - label: Tatsächliches Ausführungs- und Wiederherstellungsprotokoll
    href: /downloads/docs-link-audit/validation/record.md
assets:
- path: /downloads/docs-link-audit/docs-link-audit-1.0.0.zip
  purpose: Linkprüfskript, fehlerhafte Eingaben, Referenzkorrektur, Tests und schrittweises Wiederherstellungsprotokoll
  license: CC0-1.0
  version: 1.0.0
locale: de
source_locale: zh-CN
source_revision: 0d21aa9
translation_status: draft
translated_at: '2026-09-20'
---

Bevor Sie eine regelmäßige Prüfung planen, stellen Sie sicher, dass das Skript Fehler wirklich findet und angibt, was geprüft wurde. Diese Übung beginnt mit zwei absichtlich defekten Links. Ändern Sie jeweils nur ein Ziel und beobachten Sie das Ergebnis.

[Vollständiges Übungspaket herunterladen](/downloads/docs-link-audit/docs-link-audit-1.0.0.zip) · [README](/downloads/docs-link-audit/README.md) · [Tatsächliches Wiederherstellungsprotokoll](/downloads/docs-link-audit/validation/recovery.json)

## Zuerst die fehlerhafte Vorlage ausführen

Erforderlich ist Python 3.10+, jedoch weder Fremdbibliotheken noch API-Schlüssel oder Netzwerkzugriff. Im entpackten Verzeichnis:

```sh
python3 scripts/check_links.py fixtures/site
```

Erwartet wird Exit-Code 1. Der Bericht nennt Datei, Zeile, URL und Grund: `/missing/` in Zeile 4 von `index.html` hat keine Zielseite, und `#old-anchor` in Zeile 5 fehlt auf der Zielseite. Ein weiterer externer Link erscheint unter `unchecked` und gilt nicht stillschweigend als bestanden.

## Einen Fehler nach dem anderen beheben

Kopieren Sie `fixtures/site` nach `work/` und bewahren Sie die Originaleingaben auf. Ersetzen Sie zunächst `/missing/` durch `/guide/` und führen Sie aus:

```sh
python3 scripts/check_links.py work
```

Der Exit-Code bleibt 1, aber nur der Ankerfehler ist übrig. Ersetzen Sie `#old-anchor` durch `#install` und starten Sie erneut; der Exit-Code ist nun 0. Vergleichen Sie mit `solution/site` und der [Referenz für die menschliche Prüfung](/downloads/docs-link-audit/solution/review.md), um unbeabsichtigte Änderungen auszuschließen.

Bei den tatsächlichen Selbstprüfungen des Autors ergaben sich 2, dann 1 und schließlich 0 Fehler; der Hash der Originalvorlage blieb unverändert. [JSON vor der Korrektur](/downloads/docs-link-audit/validation/stage-0.json) · [JSON nach der Korrektur](/downloads/docs-link-audit/validation/stage-2.json)

## Ergebnis und Grenzen verstehen

| Ergebnis | Bedeutung | Nächster Schritt |
|---|---|---|
| Exit 0 | Lokale Verweise bestehen | `unchecked` lesen; die Erreichbarkeit externer Links ist damit nicht belegt |
| Exit 1 | Fehlende Seite, Anker oder unzulässiger Pfad gefunden | Absicht jedes Links prüfen und ihn dann korrigieren |
| Exit 2 | Prüfung konnte nicht abgeschlossen werden | Verzeichnis, Build-Ausgabe, Lesefehler oder nicht unterstütztes `base`-Tag prüfen |

Das Skript liest erzeugtes HTML und unterstützt Verzeichnisdateien `index.html`, relative Pfade, Root-Pfade und HTML-Anker. Dynamische JavaScript-Routen, CSS-URLs, `srcset` und frameworkspezifische Umschreibungen werden nicht analysiert. Bei `base href` stoppt es, damit relative Pfade nicht falsch interpretiert werden. Externe URLs und andere Protokolle werden ausdrücklich als ungeprüft ausgewiesen.

Führen Sie die sieben mitgelieferten Tests aus:

```sh
python3 validation/test_links.py
```

Für ein echtes Projekt bauen Sie es zuerst nach dessen Anleitung und übergeben dann das Ausgabeverzeichnis. Diese Website hat bereits einen eigenen Prüfer für interne Verweise; das Lehrpaket ersetzt nicht alle für das Framework nötigen Prüfungen.

## Danach in einen regelmäßigen Ablauf einbinden

Geben Sie Ihrem vorhandenen Scheduler „Projekt bauen → Links prüfen → Exit-Code und JSON speichern“ vor, mit festem Arbeitsverzeichnis und fester Abhängigkeitsumgebung. Wenn der Build scheitert, stoppen Sie, statt alte Ausgaben zu lesen. Vermeiden Sie gleichzeitige Schreibzugriffe auf denselben Bericht.

Führen Sie den Ablauf einmal manuell aus, lösen Sie ihn dann manuell in der Zielumgebung aus und richten Sie erst danach den Zeitplan ein. Vergleichen Sie mit dem vorigen Ergebnis: Bleibt alles gleich, melden Sie nichts; bei neuen Fehlern, Prüffehlern oder Wiederherstellung bereiten Sie eine Änderungszusammenfassung vor. Tatsächliche Benachrichtigungen unterliegen weiterhin dem autorisierten Rahmen.

Das Paket hat keinen geplanten Task erstellt, keine Benachrichtigung verschickt, keine echte Website geändert und keine CI ausgeführt. Die Planungsschritte sind eine Integrationsanleitung, kein Nachweis eines Scheduler-Laufs. Lesen Sie als Nächstes den [Leitfaden für geplante Aufgaben](/de/skills/automations/scheduled-tasks/).

## Externe Links behandeln

Legen Sie einen gesondert genehmigten Umfang und eine Häufigkeit für externe Linkprüfungen fest. 404, Authentifizierungssperre, Timeout und vorübergehender Dienstfehler haben unterschiedliche Bedeutungen. Ein einzelner Zugriffsfehler rechtfertigt nicht das Entfernen eines Links. Das Paket hat keine echten externen Links geprüft und simulierte Antworten nicht als tatsächliche Netzwerkfehler ausgegeben.

Zusammen mit der [Issue-Triage-Übung](/de/cases/use-cases/team-automation/issue-triage-suggestions/) sollten Sie zuerst einen lokalen Bericht und menschliche Prüfnotizen erstellen, bevor Sie über ein Ticket entscheiden.
