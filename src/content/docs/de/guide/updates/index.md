---
title: Änderungen und Korrekturen im Handbuch
description: Änderungen am Handbuch, betroffene Übungen und Grenzen der Verifikation nachlesen und Probleme zu einer konkreten Seite melden.
contentType: reference
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Aus aktuellem Repository-Inhalt und Laufprotokollen zusammengestellt. Dies ist ein Änderungsprotokoll des Handbuchs, keine OpenAI-Produktankündigung und kein Nachweis einer Veröffentlichung der Website.
locale: de
source_locale: zh-CN
source_revision: '1686a65'
translation_status: reviewed
reviewed_at: 2026-11-19
translated_at: 2026-09-20
---

Hier steht, was sich am Handbuch geändert hat, welche Tätigkeiten betroffen sind und was geprüft wurde. Die Daten bezeichnen die redaktionelle Bearbeitung. Ob Änderungen tatsächlich veröffentlicht sind, erkennen Sie an der Version der Website, die Sie besuchen. Änderungen an Produktfunktionen werden durch die offiziellen Quellen in den jeweiligen Anleitungen belegt.

## 2026-09-18: Nachvollziehbare Übungen und Prüfgrenzen

| Änderung | Bedeutung für Leser | Prüfprotokoll |
|---|---|---|
| Der [wöchentliche Verkaufsbericht](/de/cases/analyze-a-spreadsheet/) enthält vollständige Ein- und Ausgaben | 46 Zeilen synthetischer Daten für Übungen zu Rückerstattungen, Duplikaten und Periodenvergleich herunterladen | [Unabhängige Berechnungsprüfung](/downloads/sales-weekly-report/record.md) |
| Der [quellenbasierte Artikel](/de/cases/write-an-article/) enthält eine Faktentabelle und widersprüchliches Material | Unbekanntes offenlassen und ein synthetisches Interview nicht als echte Aussage behandeln | [Quellen- und Strukturprüfung](/downloads/source-backed-article/validation/record.md) |
| Die [Präsentation](/de/cases/create-a-slide-deck/) bietet PPTX, PDF und Vorschau von acht Folien | Bearbeitbaren Text und Folienbild prüfen; Kompatibilität mit allen Programmen ist nicht zugesichert | [Software- und Rendering-Protokoll](/downloads/article-to-slides/validation/record.md) |
| [Pfad für Kreative](/de/guide/learning-paths/creator/) und [Entwicklerpfad](/de/guide/learning-paths/developer/) folgen jetzt Arbeitsergebnissen | Jeder Schritt hat Material, Abnahmekriterien und einen nächsten Schritt; Entwickler können rote und grüne Tests dokumentieren | [Entwickler-Wiederholungslauf](/downloads/developer-path/run-record.json) |
| [Vier Skill-Arten](/de/skills/examples/) besitzen vollständige Download-Pakete | Review, Schreiben, Recherche und Automatisierung haben Vorlagen und Prüfungen; Auslösebeispiele sind keine Routing-Messung | „Prüfumgebung und Belege“ auf den Detailseiten |
| Die [Issue-Triage](/de/cases/use-cases/team-automation/issue-triage-suggestions/) korrigiert Schema und Startschwelle | „Drei Beispiele und 80 % Übereinstimmung“ gelten nicht mehr als Grundlage für den Betrieb; menschliche Prüfung bleibt empfohlen | [Trockenlauf-Protokoll](/downloads/issue-triage/validation/record.md) |
| [Linkprüfung](/de/cases/use-cases/team-automation/scheduled-link-check/) und [Fehlerbehebung](/de/guide/reference/troubleshooting/failure-recovery-lab/) enthalten Laufmaterial | Lokale Fehler und ihre Behebung sind reproduzierbar; externe Links, tatsächliche zeitgesteuerte Ausführung und Anmeldefehler wurden nicht geprüft | [Wiederherstellungsprotokoll](/downloads/failure-recovery/validation/record.md) |

## 2026-09-18: Fallfilter und Navigation der Lernpfade

Im [Fallverzeichnis](/de/cases/) können Sie nach Aufgabentyp oder Suchbegriff filtern und gefilterte URLs teilen. Die Karten beziehen Ergebnisse und Prüfstatus aus den Fall-Metadaten. In den vereinfachten und traditionellen chinesischen Fassungen zeigen die Seitenleisten nur den aktuellen Lernpfad, seine Schritte und passende Hilfe; die Einsteigerübersicht steht oben, fünf Schritte sind nummeriert. Bei leerem Filterergebnis lässt sich die Suche zurücksetzen. Ohne Skripte bleiben alle Fälle lesbar.

## 2026-09-18: Zwölf durchgeführte Prompt-Vergleichsläufe

Die [drei Prompt-Vergleiche](/de/prompts/comparison-lab/) enthalten nun je zwei echte A- und B-Läufe für Verkaufsbericht, quellenbasierten Artikel und Bugfix, mit Ergebnissen, Dauer und Einzelbewertungen. Das [Ergebnispaket](/downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip) bewahrt Werkzeugfehler, Lücken in den Logs und anonymisierte Pfad-Hashes auf. Der Haupt-Agent prüfte ohne Verblindung; die tatsächlich verwendeten Modellkennungen sind unbekannt. Die Daten belegen weder allgemeine Erfolgsquoten noch Zeitersparnis.

## 2026-09-18: Vollständige Website-Übung

Der Fall [Website erstellen](/de/cases/build-a-website/) umfasst feste Anforderungen, HTML-Startseite, Referenzergebnis, Abnahmevorlage und einen defekten Button-Anker. Die Referenzseite wurde auf dem Desktop und bei 375 px Breite geprüft; tatsächlich vorgenommene Korrekturen und Link-Logs sind aufbewahrt. Es gibt keine Behauptung über Deployment, Anmeldungen oder Modellwirkung.

## 2026-09-18: Fokussierter chinesischer Einstieg

Die Startseite ordnet Aufgaben, rollenbezogene Lernpfade, Fehlersuche und wiederverwendbares Material und entfernt wiederholte Positionierung und Funktionsbeschreibungen. Die Hauptnavigation in vereinfachtem und traditionellem Chinesisch betont Aufgaben, Lernpfade und Nachschlagewerk. Die Roadmap liegt nun im Ressourcenmenü; mobil stehen dieselben Einstiege bereit.

## 2026-09-18: Festes Einsteigermaterial und Wiederherstellungsübung

Der [fünfstufige Einsteigerpfad](/de/guide/learning-paths/beginner/) nutzt einheitliches synthetisches Veranstaltungsmaterial, eine Referenzmitteilung, vier Fehlersamples sowie Vorlagen für Prüfung und Übergabe. Die Übung führt von lesendem Zugriff über eine Änderung in einer Datei bis zur tatsächlichen Wiederherstellung einer Kopie. Das Skriptprotokoll des Autors belegt nur die Dateioperationen; es gibt keine unabhängige Modellbewertung und keinen Nachweis, dass Leser den Pfad abgeschlossen haben.

## 2026-09-18: Roadmap-Daten und praktische Einstiege

Die [Roadmap für KI-Anwendungen](/de/ai-roadmap/) unterscheidet jetzt Forschungsarbeiten, Produktveröffentlichungen, Engineering-Artikel und Projektthemen, die nicht nach Erstveröffentlichung geordnet sind. Jedes Thema hat konkrete Quellen und einen Übungseinstieg. Das Datum eines einzelnen Artikels steht nicht mehr für eine branchenweite Verbreitung; ein Strukturcheck eines Skill-Pakets gilt nicht als Client-Auslösetest. Bestehende URLs bleiben erhalten, frühere Monats- und Jahresangaben sind keine aktuellen Ereignisdaten. Jede Themenseite nennt im Text Quellenlinks und Geltungsgrenzen.

## 2026-09-18: Erläuterungen gegen häufige Missverständnisse

- Der Preiseinstieg heißt jetzt „Preisreferenz“. Belegte Snapshots in Originalwährungen werden von unbekannten Werten getrennt; Schätzungen dienen nicht mehr als weltweite Preisrangliste. Prüfen Sie vor dem Kauf den tatsächlich angezeigten Anbieterpreis.
- Die betroffenen Seiten erläutern Quellen, Geltungsgrenzen und den Umfang tatsächlicher Testläufe jetzt direkt im Text. „Getestet“ bezieht sich nur auf genannte Skripte und Umgebungen, nicht auf eine Zuverlässigkeitsquote von Modellausgaben.
- Die [Priorität von Anweisungen](/de/guide/context/context-priority/) unterscheidet Nachrichtenrollen, Auffinden von Projektanweisungen und Ausführungsrechte. Sie behauptet nicht pauschal, dass neuere oder strengere Anweisungen immer gewinnen.
- [SDK](/de/guide/developer-platform/sdk-overview/) und [Webhook](/de/guide/developer-platform/webhooks/overview/) unterscheiden lokale Ausführung, selbst betriebene Dienste und Callback-Entwurf. Vorgeschlagene Schnittstellen werden nicht als offizielle Verträge beschrieben.
- Die [Aufgabeneinstufung](/de/prompts/ask-for-a-plan/) unterscheidet direkte Ausführung, vorherige Planung und Freigabe von Aktionen, statt jeden Schritt pauschal zu unterbrechen.

Die betroffenen Seiten beschreiben ihre Quellen und Grenzen im Text. Diese Zusammenfassung ist keine vollständige API-Referenz.

## Wenn Sie einen Seitenfehler finden

Jede Handbuchseite bietet im Seitenfuß einen lokalisierten Link „Problem auf dieser Seite melden (GitHub-Entwurf)“. Er übernimmt nur Seitentitel und Website-Pfad und öffnet einen öffentlichen, noch nicht eingereichten Issue-Entwurf. Prüfen Sie ihn vor dem Absenden; ein GitHub-Konto ist erforderlich.

Nennen Sie Abschnitt, Soll- und Ist-Inhalt, die nötige Umgebung und öffentliche Belege. Entfernen Sie API-Schlüssel, Kontodaten, private Pfade, Kundendaten und nicht anonymisierte Protokolle. Der Entwurf erfasst keine Aufgabendaten und enthält keine Abfrageparameter der Seite.

Ohne GitHub-Konto können Sie Pfad und Problembeschreibung lokal notieren und eine Person mit Zugriff um das Einreichen bitten. Es wird keine Reaktionszeit zugesagt und keine Nachricht automatisch gesendet.

## Vorgehen der Handbuchverantwortlichen

Nach Reproduktion oder Quellenprüfung wird festgehalten, warum eine Meldung angenommen, korrigiert oder vorerst nicht bestätigt wurde. Bei Änderungen an Produktfakten werden Text und Belege aktualisiert, ohne unbeteiligte Seiten als aktualisiert zu kennzeichnen. Bei Übungsänderungen werden Ausgangsmaterial, Download-Paket und Artikel synchron gehalten. Wird eine frühere Schlussfolgerung ungültig, erklären Sie die Folgen der alten Vorgehensweise und die Migrationsschritte, statt nur „Inhalt optimiert“ zu schreiben.

Verlinken Sie bei der Aktualisierung die betroffenen Seiten und öffentlichen Quellen und benennen Sie den noch ungetesteten Umfang. Dies ist das Änderungsprotokoll eines Community-Handbuchs, kein offizielles OpenAI-Release-Log.
