---
title: "Workflows bewerten: Auslösung, Grenzen, Format und Qualität trennen"
description: Vier Skill-Arten anhand von 20 entworfenen Beispielen und getrennten Protokollfeldern bewerten, ohne Strukturprüfungen oder einzelne Erfolge als Gesamt-Erfolgsquote auszugeben.
contentType: guide
audiences: [developer, creator, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: Sieben Tests des Protokollprüfers bestanden. Alle 20 Beispiele sind ungetestete Entwürfe; es liegen keine Aussagen über Modellleistung, automatisches Routing oder Zeitaufwand vor.
  environment: Python 3.12.11 / Darwin arm64; Standardbibliothek und temporäre Prüfeingaben; keine Modellaufrufe.
  evidence:
    - label: Umfang der Protokollprüfer-Tests
      href: /downloads/workflow-evaluation/validation/record.md
assets:
  - path: /downloads/workflow-evaluation/workflow-evaluation-1.0.0.zip
    purpose: Zwanzig Bewertungsbeispiele, leeres Protokoll, Bewertungsmethode und Protokollprüfer
    license: CC0-1.0
    version: 1.0.0
locale: de
source_locale: zh-CN
source_revision: 9ea3ecc
translation_status: draft
translated_at: 2026-09-20
---

Ein Workflow kann den richtigen Skill wählen und trotzdem Fakten falsch wiedergeben. Er kann auch das richtige Ergebnis liefern, dabei aber eine nicht genehmigte Handlung ausführen. Diese Fälle zu einer einzigen „Erfolgsquote“ zusammenzufassen, verdeckt leicht das eigentliche Problem.

[Bewertungspaket herunterladen](/downloads/workflow-evaluation/workflow-evaluation-1.0.0.zip) · [20 Beispiele](/downloads/workflow-evaluation/samples.json) · [Leeres Protokoll](/downloads/workflow-evaluation/records-template.json)

## Fünf Beobachtungsarten getrennt erfassen

| Dimension | Zu prüfender Beleg | Was ihn nicht ersetzt |
|---|---|---|
| Auslösung | Tatsächliche Aufrufspur, einschließlich Beispielen, die auslösen sollten oder nicht | Ähnlicher Ton der Antwort oder erfolgreicher expliziter Aufruf |
| Grenzen und Ablehnung | Unzulässige Anfragen wurden nicht ausgeführt, zulässige Teile möglichst erledigt | Alle Aufgaben pauschal ablehnen |
| Format | Erforderliche Dateien, Felder und Typen | Text, der nur vollständig aussieht |
| Aufgabenqualität | Quellenbelege für jede Aussage, korrekte Rechnungen, wirksame Korrekturen und Abdeckung | Gültiges JSON oder ein Skript mit Exitcode 0 |
| Zeit und Nacharbeit | Tatsächliche verstrichene Zeit und getrennt erfasste menschliche Nacharbeit | Subjektiv „schnell“ oder null für nicht Gemessenes |

Für die ersten vier Dimensionen gelten `pass`, `partial`, `fail`, `not-applicable` und `unobserved`. Zeit wird getrennt als Zahl erfasst. Unbekannte und nicht ausgeführte Ergebnisse bleiben erhalten; dafür wird keine Note geraten. Wurde ein Beispiel ausgeführt, eine Dimension aber nicht beobachtet, verwenden Sie `unobserved` mit Begründung. `not-applicable` gilt nur für tatsächlich unpassende Dimensionen und darf fehlende Beobachtungen nicht verdecken.

## Was die Beispiele abdecken

Für Review, Schreiben, Recherche und Link-Monitoring gibt es jeweils fünf Beispiele: positive Auslösung, fachfremde Aufgabe, Berechtigungsgrenze, Ausgabeformat und eine kritische Qualitätssituation. Alle 20 sind vom Autor entworfen; sämtliche bisherigen Einträge stehen auf `not-run`.

Die Qualitätssituationen prüfen unter anderem einen Staging-Fehler, den eine Wiederherstellung im Working Tree verdeckt, einen Artikel ohne widersprüchliches Quellenmaterial, eine Recherche ohne Hinweis auf eine unbrauchbare Quelle sowie einen Monitor mit doppelten Benachrichtigungen oder fehlender Erholung. Als Eingaben dienen die [vier vollständigen Skill-Pakete](/de/skills/examples/); das Bewertungspaket enthält sie nicht erneut. Notieren Sie bei Ausführung Paketversion und Hash.

## Eine Bewertung durchführen

1. Halten Sie Modell, Client, Reasoning-Einstellung, Werkzeugrechte, Projektanweisungen und Version des Eingabepakets fest. Nicht sichtbare Einstellungen bleiben unbekannt; raten Sie keine Hintergrundwerte.
2. Führen Sie jedes Beispiel in einer isolierten Aufgabe aus und behalten Sie Anfrage und Werkzeugspur. Auslösungstests verwenden natürliche Sprache ohne vorherigen expliziten `$skill`-Aufruf. Ein expliziter Aufruf testet die Ausführbarkeit.
3. Bewahren Sie Erfolge, Fehlschläge, Unterbrechungen und Wiederholungen auf. Kennzeichnen Sie Unterbrechungen als `interrupted` und streichen Sie sie nicht aus der Stichprobe.
4. Geben Sie für jede Wertung einen Belegpfad und eine Begründung an. Für Sicherheitsbeispiele nutzen Sie synthetische Daten, ohne echte Daten zu senden. Ein Formatskript hilft nur bei Feldern; faktische Qualität muss weiterhin mit den Quellen verglichen werden.
5. Lassen Sie möglichst eine zweite Person ohne Kenntnis der Konfigurationskennungen bewerten. Wenn nur der Autor prüft, kennzeichnen Sie das ehrlich und geben Sie weder Blindprüfung noch Übereinstimmung mehrerer Personen vor.

In Verbindung mit den [drei Prompt-Vergleichen](/de/prompts/comparison-lab/) gelten für A und B dieselben Bewertungsregeln. Geben Sie B nicht vorab mehr Punkte, nur weil sein Prompt länger ist.

## Vollständigkeit der Protokolle prüfen

Führen Sie im Paket diese Befehle mit der Standardbibliothek von Python 3.10+ aus:

```sh
python3 scripts/check_records.py
python3 scripts/check_records.py --records my-records.json --evidence-root my-evidence
python3 validation/test_records.py
```

Die leere Vorlage meldet 20 nicht ausgeführte Beispiele und setzt `performance_claim` auf null. Sie zählt die Vorlage nicht als Erfolgsquote.

Der Protokollprüfer kontrolliert, dass keine Beispiele fehlen, nicht ausgeführte Beispiele keine erfundenen Ergebnisse haben, Zeitwerte gültige Typen besitzen, abgeschlossene Einträge Bewertungen und Belegdateien enthalten und Pfade den erlaubten Bereich nicht verlassen. Ob Logs echt, Bewertungen fair oder Ergebnisse inhaltlich richtig sind, kann er nicht erkennen. Temporäre Testeinträge sind Prüf-Fixtures und keine Modellbeobachtungen.

## Über die Einführung eines Workflows entscheiden

Berichten Sie Nenner, Fehlschläge, Unbekannte und typische Fehler getrennt nach Workflow, Beispielart und Umgebung. Ein Verstoß gegen Sicherheitsgrenzen wird nicht durch gute Werte anderer Dimensionen aufgewogen; ein vollständiges Format rechtfertigt keine zentrale Aussage ohne Beleg.

Vereinbaren Sie Akzeptanzbedingungen anhand des Aufgabenrisikos vor der Ausführung. Senken Sie die Schwelle nicht laufend, nachdem Ergebnisse sichtbar werden. Nach einer Überarbeitung führen Sie betroffene Beispiele erneut aus und bewahren die alten Einträge auf, um Korrektur und Stichprobenleck unterscheiden zu können.

Für dieses Paket liegen noch keine echten Modellbewertungen vor. Es stellt Methode, Beispiele und Protokollmechanismus bereit, sagt aber weder, welches Modell am besten ist, noch welche Erfolgsquote es erreicht.
