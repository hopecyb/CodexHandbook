---
caseCategory: creation
directoryOrder: 20
title: Aus drei Quellen einen belegten Artikel schreiben
description: Produktbeschreibung, synthetisches Interview und Versionsnotizen dienen zum Üben von Faktenzuordnung, Widersprüchen und Überarbeitung; vollständiges Artikelpaket zum Herunterladen.
contentType: case
audiences: [creator, beginner]
task: source-backed-writing
level: beginner
estimatedMinutes: 50
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: Drei eigens erstellte synthetische Quellen und sieben wichtige Fakten wurden einzeln abgeglichen; die Strukturprüfung besteht. Dies ist eine Selbstprüfung des Autors ohne echten Modellvergleich und ohne zweite menschliche Prüfung.
  evidence:
    - label: Synthetische Produktbeschreibung
      href: /downloads/source-backed-article/sources/01-product.md
    - label: Synthetisches Interview
      href: /downloads/source-backed-article/sources/02-interview.md
    - label: Versionsnotizen mit ungelöstem Widerspruch
      href: /downloads/source-backed-article/sources/03-changelog.md
    - label: Prüfprotokoll und Grenzen der Autorenprüfung
      href: /downloads/source-backed-article/validation/record.md
assets:
  - path: /downloads/source-backed-article/source-backed-article-1.0.0.zip
    purpose: Drei Quellen, Prompts, Entwürfe, Faktentabelle, Revisions-Diff und Prüfskript
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /de/cases/
  label: Praxisaufgabe auswählen
next:
  link: /de/cases/create-a-slide-deck/
  label: Aus dem Artikel eine Präsentation machen
locale: de
source_locale: zh-CN
source_revision: e2bb5ea
translation_status: draft
translated_at: '2026-09-20'
---

Das Ziel ist ein kurzer chinesischer Artikel, in dem jede wesentliche Tatsache auf eine Quelle zurückgeführt werden kann. Du behandelst widersprüchliche Angaben, unterscheidest Quellenaussagen, Autorenfolgerungen und offene Fragen und überarbeitest einen bewusst fehlerhaften Erstentwurf.

Schwierigkeit: Einstieg. Geschätzte Dauer: 45–60 Minuten, redaktionell geschätzt und nicht mit Lesern gemessen. Voraussetzung: lokale Dateien an Codex übergeben und Markdown lesen. Die optionale Strukturprüfung benötigt Python 3.10+.

[Vollständiges Übungspaket v1.0.0 (ZIP) herunterladen](/downloads/source-backed-article/source-backed-article-1.0.0.zip)

Alle Quellen sind Originalmaterial dieser Website. Produkt „Shiye“ und Interviewperson „Xiaolin“ sind fiktiv und beschreiben weder ein echtes Produkt noch echte Nutzerstimmen.

## Ergebnis der Übung

Der Referenzartikel folgt dem Gedanken „erst eine Zusammenfassung prüfen, dann über breitere Nutzung entscheiden“ und behandelt Eingabegrenzen, einen begrenzten Test, die Prüfung der Zusammenfassung und offene Fragen.

| Datei | Zweck |
|---|---|
| `outline.md` | Leserfrage und Reihenfolge des Artikels beschreiben |
| `article.md` | Chinesischer Artikel mit Fakten-IDs |
| `claim-map.csv` | Sieben wichtige Fakten/Empfehlungen, Quellen-IDs, Abschnitte und Belegarten |
| `unresolved.md` | Fragen bewahren, die die Quellen nicht beantworten |
| `revision.diff` | Tatsächliches Text-Diff vom gestalteten Entwurf zur Endfassung |

[Referenzartikel ansehen](/downloads/source-backed-article/solution/article.md) · [Faktentabelle ansehen](/downloads/source-backed-article/solution/claim-map.csv)

## Herunterladen und vorbereiten

Entpacke und öffne `source-backed-article`. Lies `brief.md` und `sources/index.csv`. Die Lizenz CC0 1.0 erlaubt Änderung und Weitergabe. Du kannst solution zunächst ungelesen lassen und selbst eine Fassung erstellen.

Die drei Quellen sind P (Produktbeschreibung), I (synthetisches Interview) und C (Versionsnotizen). Abschnitte haben feste IDs wie P1, I2, C3. Zitate müssen den konkreten Abschnitt nennen, nicht nur „aus den Quellen“.

## 1. Zuerst Fakten und Widersprüche ordnen

```text
Lies brief.md, sources/index.csv und die drei darin genannten Quellen.
Liste zuerst direkt gestützte Fakten, fehlende Angaben und widersprüchliche Aussagen auf; gib jeweils Quellen-ID und Abschnitt an.
Ergänze keine Informationen über das fiktive Produkt aus dem Internet und gib das synthetische Interview nicht als echte Kundenstimme aus.
Löse Widersprüche nicht automatisch anhand des Dokumentdatums. Liefere erst die Faktentabelle, dann den Artikel.
```

Ein Widerspruch ist Absicht: P3 sagt, Diagnosedaten-Uploads seien standardmäßig aus; C2 sagt, sie seien bei Neuinstallationen standardmäßig an. C3 hält fest, dass keine Korrektur des Maintainers vorliegt. Markiere das als ungeklärt, statt die neuere Quelle zur endgültigen Antwort zu erklären.

## 2. Im geklärten Rahmen zusammenhängend schreiben

`prompts/02-outline-and-write.md` legt Zielgruppe und vier Teile fest: Möglichkeiten, Testvorgehen, nötige Prüfungen und offene Fragen. Nach Bestätigung dieser Struktur kannst du ohne Pause nach jedem Absatz schreiben.

Speichere alles in `my-output/` und bewahre die Eingabequellen. Markiere wesentliche Fakten mit `[F1]` usw. Die Zuordnungstabelle enthält:

```text
claim_id,article_section,claim,source_id,locator,evidence_type,confidence_note
```

Belegarten sind „Originaltext stützt“, „Autorenfolgerung“ und „ungeklärt“. Der Vorschlag, mit einigen Dateikopien zu testen, ist eine Autorenempfehlung, kein Produktversprechen und keine Pflicht.

## 3. Erst Fakten, dann Ton korrigieren

`solution/draft.md` ist ein vom Autor gestaltetes Gegenbeispiel, keine tatsächliche Modellausgabe. Es behauptet unbelegte PDF-/Bildunterstützung, vollständige Offline-Nutzung, Wirksamkeitsgarantie und echte Nutzerstimme.

| Fehler im Entwurf | Korrektur | Grund |
|---|---|---|
| „PDF und viele Bildformate“ | Auf Markdown und Klartext beschränken | P1 nennt die Eingabegrenzen |
| „Vollständig offline, Diagnose standardmäßig aus“ | Widerspruch nebeneinanderstellen und als offen markieren | P3/C2 widersprechen sich, übertragene Felder fehlen |
| „Xiaolin beweist Genauigkeit und Zeitersparnis“ | Synthetischen Status beibehalten, keine Effektzahlen nennen | I3 hat weder Zeitmessung noch feste Bewertungsstichprobe |
| „Alleskönner steigert mühelos die Produktivität“ | Konkrete Eingaben, Schritte und Kontrollen beschreiben | Übertreibung ohne neue Fakten verringern |

Siehe [Revisions-Diff](/downloads/source-backed-article/solution/revision.diff) und [Revisionshinweise](/downloads/source-backed-article/solution/revision-notes.md). Nur den Ton zu glätten und falsche Fähigkeiten zu belassen, reicht nicht.

## 4. Struktur prüfen und jede Quelle einzeln lesen

Mit Python 3.10+ im Übungsverzeichnis:

```sh
python3 validation/check.py --output my-output
```

Das Skript prüft Hashes der drei Quellen, Fakten-IDs im Artikel, Quellenabschnitte und die Datei der offenen Fragen. Die Referenzfassung besteht; eine temporäre Kopie mit der erfundenen ID F99 wird abgewiesen.

**Eine bestandene Strukturprüfung bedeutet keine Faktenrichtigkeit.** Öffne zu jeder Aussage das Original und prüfe, ob es den Satz stützt und Bedingungen wie „nur“ oder „noch nicht bestätigt“ erhalten sind. Ein synthetischer Abschnitt als echtes Zeugnis ist auch mit gültiger Zitat-ID falsch.

Ohne Skript öffne anhand der Tabelle alle drei Originaldateien und prüfe IDs und Wortlaut manuell. Behaupte nicht, eine nicht ausgeführte Prüfung sei bestanden.

## Wiederherstellung bei Fehlern

- Datei fehlt: Entpackverzeichnis und Quellenindex prüfen, keine Inhalte erfinden.
- Zitat-ID fehlt: korrekte Zuordnung ergänzen oder unbelegte Aussage löschen; berechtigte Unsicherheit nicht entfernen.
- Quellen widersprechen sich: beide Aussagen und fehlenden Nachweis nennen; nicht nach Datum, Mehrheit oder Tonfall entscheiden.
- Artikel klingt wie Werbung: unbelegte Wirkversprechen streichen und konkrete Handlungen und Grenzen beschreiben.

## Abschlusskriterien

Wichtige Fakten sind lokalisierbar, Autorenempfehlungen getrennt gekennzeichnet, Widersprüche und Lücken sichtbar und der synthetische Status bleibt erhalten. Die Abgabe bleibt lokal und wird nicht automatisch veröffentlicht.

Mit dem Endtext kannst du [acht bearbeitbare Folien erstellen](/de/cases/create-a-slide-deck/). Das Folienpaket enthält unabhängige Eingaben, PPTX, PDF, acht Vorschauen und Prüfprotokoll. Für den durchgehenden Pfad verwende möglichst deinen eigenen geprüften Artikel.
