---
title: "Team-Pfad: zweiwöchiger Pilot, Stichproben und Einführungsentscheidung"
description: "Mit einer risikoarmen Aufgabe beginnen und in zehn Arbeitstagen Belege zu Rollen, Läufen, Prüfung, Rücknahme und begrenzter Einführung sammeln."
contentType: path
audiences: [team]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: "Der Zweiwochenpfad, sechs Vorlagen und drei Ausnahmeszenarien wurden vom Autor am Schreibtisch durchgespielt. Es gab keinen echten Teampilot, keine unabhängige Prüfung und keine Messung von Produktivitätsgewinnen."
assets:
  - path: /downloads/two-week-pilot/two-week-pilot-1.0.0.zip
    purpose: "Pilot-Charta, Aufgabenliste, Prüfbogen, Vorfall und Rücknahme, Entscheidungsformular sowie Zehntagesplan"
    license: CC0-1.0
    version: 1.0.0
sidebar:
  order: 30
locale: de
source_locale: zh-CN
source_revision: "3b46738"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Beginnen Sie mit einer begrenzten Aufgabe, deren Ergebnis sich prüfen lässt. Sammeln Sie zwei Wochen lang Belege, ob eine breitere Nutzung sinnvoll ist. Zwei Wochen bedeuten hier zehn Arbeitstage. Bei zu wenigen Aufgaben verlängern Sie den Pilot; erklären Sie ihn nicht nur deshalb für erfolgreich, weil die Zeit abgelaufen ist.

[Vorlagenpaket für den Zweiwochenpilot herunterladen](/downloads/two-week-pilot/two-week-pilot-1.0.0.zip) · [Anleitung](/downloads/two-week-pilot/README.md) · [Zehntagesplan](/downloads/two-week-pilot/templates/06-schedule.md)

## Vor dem Start: Aufgabe und Verantwortliche festlegen

Beginnen Sie etwa mit [Vorschlägen zur Issue-Triage](/de/cases/use-cases/team-automation/issue-triage-suggestions/) oder einer [lokalen Linkprüfung](/de/cases/use-cases/team-automation/scheduled-link-check/). Führen Sie die Aufgabe zunächst manuell mit synthetischen Eingaben aus und behalten Sie menschliche Prüfung und lokale Ausgaben bei.

Benennen Sie Verantwortliche für Leitung, Ausführung, Prüfung, Systemadministration und Sicherheit sowie Stellvertretungen. Rollen können zusammenfallen; Entscheidungen zu externen Schreibzugriffen oder Sicherheitsvorfällen sollten jedoch unabhängig geprüft werden. Gibt es noch keine prüfende Person, beschränken Sie den Pilot auf synthetische Eingaben und lokale Entwürfe und kennzeichnen die Prüfung als Selbstkontrolle des Autors.

Voraussetzungen: Sie können Protokolle speichern, Ergebnisse beurteilen, die Ausführung stoppen und erlaubte Daten und Aktionen benennen. Sind Berechtigungen unklar, beenden Sie zunächst die lokale Vorbereitung, statt eigenmächtig auf Produktionssysteme auszuweiten.

## D1–D2: Charta erstellen und manuell durchlaufen

Füllen Sie die [Pilot-Charta](/downloads/two-week-pilot/templates/01-charter.md) und die [Aufgabenliste](/downloads/two-week-pilot/templates/02-tasks.csv) aus: Geschäftsproblem, manueller Vergleichswert, Eingabeumfang, erlaubte Aktionen, Ausschlüsse, Prüfmethode, Stoppbedingungen und Aufbewahrung der Aufzeichnungen.

Vereinbaren Sie vor dem Lauf konkrete Kriterien für die Richtigkeit. Übernehmen Sie keine pauschale Schwelle wie „80 % bestanden reichen für den Start“. Ergebnisse mit hohem Risiko werden einzeln geprüft; die Stichprobenmethode und ihre Begründung für andere Aufgaben stehen in der Charta.

Abschlussbedingung: Ein manueller Lauf enthält Eingabe, Ausgabe, tatsächliche Prüfung und Verantwortliche. Das Team kann Erfolg, Fehlschlag und Pause unterscheiden. Erst danach folgt eine begrenzte Stichprobe.

## D3–D5: Läufe dokumentieren und erstmals auswerten

Halten Sie mit dem [Prüfbogen](/downloads/two-week-pilot/templates/03-review.csv) jeden Lauf, Fehler, Abbruch, jede Eingabeversion, Konfiguration, Evidenz und Begründung für Annahme, Änderung oder Ablehnung fest.

Prüfen Sie nach der [Methode zur Workflow-Bewertung](/de/guide/quality/workflow-evaluation/) Auslösung, Grenzen, Format und Qualität getrennt. Erfassen Sie Wartezeit des Modells und menschliche Nacharbeit separat. Beim Vergleich mit der manuellen Basis müssen Schwierigkeit und Eingaben vergleichbar sein; nicht Vergleichbares bleibt unbekannt.

Prüfen Sie an D5 Fehlerarten und Abdeckung der Stichprobe. Bei schwerwiegenden Grenzverletzungen pausieren, Reproduktions- und Regressionstests ergänzen und Fehleraufzeichnungen behalten. Verschleiern Sie Probleme nicht durch niedrigere Standards.

Abschlussbedingung: Für die ersten Ergebnisse liegen nachvollziehbare Prüfungen vor, und jedes Problem hat eine zuständige Person und einen Bearbeitungsstatus. Ein ungelöstes schwerwiegendes Problem hält den Pilot in dieser Phase.

## D6–D8: begrenzt ausweiten und Rücknahme üben

Ergänzen Sie Stichproben oder Aufgabentypen nur im genehmigten Umfang. Ändern Sie jeweils nur einen wesentlichen Faktor; erweitern Sie nicht gleichzeitig Berechtigungen, wechseln das Modell und ändern die Aufgabe. Dokumentieren Sie Konfigurationsversionen, um Wirkungen zuordnen zu können.

Üben Sie mit der [Vorlage für Vorfälle und Rücknahme](/downloads/two-week-pilot/templates/04-incident.md), Aufgaben zu pausieren, laufende Prozesse und Warteschlangen zu prüfen, Belege zu sichern, eine bekannte gute Version wiederherzustellen und erneut zu verifizieren. Neue Läufe zu stoppen macht bereits eingetretene externe Folgen nicht rückgängig.

Der [Übungsfall zur Fehlerbehebung](/de/guide/reference/troubleshooting/failure-recovery-lab/) kann zunächst in einem isolierten Verzeichnis verwendet werden. Wurden echte Zeitplanung, Rechteentzug oder Nachrichtenzustellung nicht getestet, vermerken Sie dies. Eine lokale Übung belegt keine Rücknahme in Produktion.

Abschlussbedingung: Das Team kann erklären, wer pausiert, wie der Stopp bestätigt wird, wie der Deduplizierungszustand erhalten bleibt und wann eine Fortsetzung erlaubt ist. Danach folgen unabhängige Prüfung und Entscheidung.

## D9–D10: ausweiten, fortsetzen oder stoppen

Eine prüfende Person kontrolliert wichtige Ergebnisse, Stichprobenverzerrungen und offene Probleme. Füllen Sie die [Pilotentscheidung](/downloads/two-week-pilot/templates/05-decision.md) aus.

| Entscheidung | Erforderliche Angaben |
|---|---|
| Begrenzte Einführung | Durch Belege gestützte Aufgaben, Personen und Berechtigungen; laufende Stichproben und Verantwortung für Rücknahme |
| Pilot fortsetzen | Fehlende Stichproben oder Belege für Wiederherstellung, zuständige Person und nächster Prüftermin |
| Stoppen | Abschalten der Zeitplanung, Umgang mit Berechtigungen, Aufbewahrung der Aufzeichnungen und Behandlung offener Ereignisse |

Gehen Sie jedes D1-Kriterium einzeln durch. Ein guter Gesamtdurchschnitt gleicht einen schweren Fehler nicht aus. Fehlen unabhängige Prüfung oder ausreichende Stichproben oder ist die Basis nicht vergleichbar, benennen Sie die Einschränkung und veröffentlichen keine Aussage über höhere Teamproduktivität.

Abschlussbedingung: Eine Entscheidung hält Verantwortliche, Belege, Umfang und nächsten Schritt fest. Auch eine Einführung gilt nur für geprüfte Aufgaben und Bedingungen; sie erlaubt nicht allen Mitgliedern, jede Arbeit automatisch auszuführen.

## Wie die Vorlagen geprüft wurden

Der Autor führte [drei Planspiele](/downloads/two-week-pilot/references/tabletop-review.md) durch: ein korrektes Ergebnis außerhalb der Berechtigung, eine zu kleine Stichprobe und nach Abschalten der Zeitplanung noch ausstehende Ereignisse. Damit wird geprüft, ob die Vorlagen Entscheidungspunkte abdecken; es sind weder echte Teamfälle noch Ergebnisse aus zwei Wochen Betrieb.

Für spätere Änderungen an Projektregeln lesen Sie [Projektkonfiguration](/de/guide/customization/) und [Definition of Done](/de/guide/quality/definition-of-done/) und übernehmen konkrete Erkenntnisse des Piloten in den gemeinsamen Ablauf.
