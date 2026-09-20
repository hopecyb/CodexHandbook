---
caseCategory: creation
directoryOrder: 40
title: 'Website erstellen: Von Veranstaltungsunterlagen zur aufrufbaren Seite'
description: Lade Anforderungen, Startseite und Referenz herunter und übe responsives Layout, Tastaturbedienung und eine reproduzierbare Reparatur eines Button-Links.
contentType: case
audiences: [creator, developer]
level: beginner
outputs: [html, markdown]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  environment: Python 3.12.11 / Darwin arm64; integrierter Codex-Browser (genaue Engine-Version unbekannt), Ansichten mit 1280×720 und 375×812.
  summary: Die Referenzseite wurde im Browser auf Desktop und schmalem Bildschirm sowie mit Button und Tastatur geprüft. Ein defekter Link wurde reproduziert und behoben. Daraus folgen weder Browserübergreifende Kompatibilität noch Aussagen zur Modellleistung oder zum Erfolg von Lesenden.
  evidence:
    - label: Browserprüfung und tatsächliche visuelle Korrektur
      href: /downloads/reading-event/validation/browser-review.md
    - label: Protokoll des Linkfehlers und der Behebung
      href: /downloads/reading-event/validation/recovery.json
assets:
  - path: /downloads/reading-event/reading-event-1.0.0.zip
    purpose: Feste Anforderungen, synthetische Fakten, Start-HTML, Referenzseite, fehlerhaftes Beispiel, Abnahmevorlage und Prüfsystem
    license: CC0-1.0
    version: 1.0.0
locale: de
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 55fd86a
---

Erstelle aus Veranstaltungsunterlagen eine einseitige Website, die sich im Browser öffnen lässt. Abzugeben sind eine lokale statische Seite und ein Abnahmeprotokoll. Veranstaltung und Ort sind erfunden; die Anmeldung ist noch ungeklärt.

[Gesamtes Übungspaket herunterladen](/downloads/reading-event/reading-event-1.0.0.zip) · [Referenzlösung öffnen](/downloads/reading-event/solution/index.html) · [Materialbeschreibung lesen](/downloads/reading-event/README.md)

## Ziel und Vorbereitung

Die Seite enthält Vorstellung, Zeit, Ort, Teilnehmerzahl, Kosten, Vorbereitung und offene Informationen. Der Hauptbutton führt nur zu den Teilnahmehinweisen auf derselben Seite und darf keine mögliche Anmeldung vortäuschen.

Kopiere nach dem Entpacken `starter` in einen neuen Ordner `work` und lasse das Modell nur `work/index.html` bearbeiten. Verwende `facts.md`, `brief.md` und `prompt.md` im Paketstamm ausschließlich lesend. Sieh dir `solution` erst nach Abschluss an. Das HTML lässt sich ohne Frontend-Abhängigkeiten direkt im Browser öffnen.

Für einen lokalen Server kannst du den optionalen Python-Befehl im README verwenden. Ist der Port belegt, wähle einen freien Port; beende keinen unbekannten Dienst.

## Aufgabe stellen

```text
Erstelle anhand von facts.md und brief.md in der aktuellen index.html eine
Einzelseite für ein Lesetreffen. Ändere nur index.html und verwende HTML mit
inline CSS. Keine neuen Abhängigkeiten, Netzwerkzugriffe, Veröffentlichung oder
Versendung. Die Anmeldung bleibt ungeklärt; der Hauptbutton springt nur zu den
Teilnahmehinweisen auf dieser Seite. Prüfe danach Desktop, eine schmale Ansicht
mit 375 px, den Tastaturfokus und interne Links. Nenne die tatsächlich
geprüften Ergebnisse und offene Punkte; gib ungetestete Punkte nicht als
bestanden aus.
```

Die [Layoutskizze](/downloads/reading-event/wireframe.md) erklärt die Lesereihenfolge mit zwei Spalten am Desktop und einer auf dem Handy. Farben und Dekoration dürfen abweichen; Fakten, offene Punkte und Abnahmekriterien bleiben verbindlich.

## Ergebnis prüfen

| Prüfung | Abnahmekriterium |
|---|---|
| Fakten | 17.10.2026, 14:00–15:30 Uhr, erfundener Leseraum, 18 Personen, kostenlos und freiwillig ein Buch mitbringen stimmen mit den Unterlagen überein |
| Offenes | Anmeldung bleibt ungeklärt; kein erfundener QR-Code, keine Telefonnummer und kein Link |
| Mobil | Bei 375 px lesbar, ohne horizontales Überlaufen |
| Bedienung | Tab erreicht den Hauptbutton mit sichtbarem Fokus; Eingabe oder Klick führt zu den Teilnahmehinweisen |
| Umfang | Nur `work/index.html` geändert; keine neue Abhängigkeit, kein Formular zur Datenerhebung und keine externe Veröffentlichung |

Kopiere die [Abnahmevorlage](/downloads/reading-event/review-template.md) außerhalb des Arbeitsordners und trage deine eigenen Ergebnisse ein. Die Referenzseite stammt vom Autor; dessen Protokoll ersetzt nicht die Abnahme des hier erzeugten Modellergebnisses.

## Defekten Button reproduzieren und reparieren

In `fixtures/broken.html` verweist der Button fälschlich auf `#signup`; der tatsächliche Abschnitt heißt `#participation`. Die Seite wirkt vollständig, aber der Button führt nicht zum Ziel.

Optional ausführen:

```sh
python3 validation/reproduce.py
```

Das Reproduktionsskript prüft die fehlerhafte Seite in einem temporären Ordner, endet mit Code 1 und meldet `missing-fragment`. Danach ersetzt es nur das `href`, prüft erneut und endet mit Code 0. Die ursprüngliche Fixture bleibt unverändert. Das [gespeicherte Protokoll](/downloads/reading-event/validation/recovery.json) enthält beide Ergebnisse.

Entferne nicht den Button und ignoriere die Prüfung nicht als „Reparatur“. Ändere nur den Ziellink und prüfe ihn anschließend durch Klicken. Das Linkskript bewertet weder Gestaltung noch Fakten oder Tastaturbedienung; prüfe diese separat.

## Tatsächliche visuelle Korrektur und Prüfgrenzen

Bei der ersten Mobilprüfung des Autors ragte dekorativer Buchtext aus der Karte. Er passte Schriftgröße und Innenabstand für schmale Ansichten an und prüfte erneut. Beobachtungen für Desktop und Mobilgerät, Tastaturfokus, Hauptbutton und Fakten F1–F7 stehen in der [Browserprüfung](/downloads/reading-event/validation/browser-review.md).

Nicht geprüft wurden alle Browser, ein echtes Smartphone, vollständige Screenreader-Bedienung oder die erfolgreiche Durchführung durch unabhängige Lesende. Die Website wurde nicht veröffentlicht und eine Erfolgsquote des Modells nicht gemessen. Vor einer Veröffentlichung sind Hosting-Ziel, öffentliche Inhalte und Berechtigung zur Bereitstellung gesondert zu klären.

Weiter: [Änderungen prüfen](/de/guide/quality/review-diffs/) · [Übung zur Fehlerbehebung](/de/guide/reference/troubleshooting/failure-recovery-lab/)
