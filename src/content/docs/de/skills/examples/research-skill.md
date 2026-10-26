---
title: "Beispiel: Ein Recherche-Skill, der Widersprüche von fehlenden Belegen trennt"
description: "Laden Sie ein vollständiges Recherchepaket herunter und üben Sie mit festen synthetischen Quellen: Quellenstatus, widersprüchliche Belege, offene Fragen und nachvollziehbare Berichte."
contentType: skill
audiences: [creator, developer]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: "Lokale Quellenprüfungen und acht Regressionstests bestanden. Der Referenzbericht wurde vom Autor anhand der Quellen geprüft; Modell-Routing, Recherchequalität und Netzwerkfehler wurden nicht gemessen."
  environment: "Python 3.12.11 / Darwin arm64; Standardbibliothek, drei synthetische Quellen und eine absichtlich fehlende lokale Datei."
  evidence:
    - label: Tatsächlicher Prüfumfang und Grenzen
      href: /downloads/skills/evidence-research/validation/record.md
assets:
  - path: /downloads/skills/evidence-research/evidence-research-1.0.0.zip
    purpose: "Recherche-Skill, feste Quellen, Belegtabelle, Bericht und Quellenstatus-Prüfung"
    license: CC0-1.0
    version: 1.0.0
locale: de
source_locale: zh-CN
source_revision: "cf2b232"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
---

Eine Quelle, die sich nicht öffnen lässt, eine Quelle ohne Aussage zum Sachverhalt und zwei widersprüchliche Quellen erfordern unterschiedliche Behandlung. Dieser Skill hält die Unterschiede fest, damit nachvollziehbar bleibt, welche Schlüsse überprüfbar sind und wo Belege fehlen.

[Vollständiges evidence-research v1.0.0 herunterladen](/downloads/skills/evidence-research/evidence-research-1.0.0.zip) · [SKILL.md](/downloads/skills/evidence-research/SKILL.md) · [Installationsanleitung](/downloads/skills/evidence-research/README.md)

## Feste Fragestellung und Materialien

Das Paket verwendet das fiktive Werkzeug „Shiye (拾页)“ aus der [Artikelübung](/de/cases/write-an-article/). Untersuchen Sie Eingabeformate, die Standardeinstellung der Diagnose und Upload-Felder. Drei eigens erstellte synthetische Quellen liegen bei; eine vierte Erläuterung des Maintainers im Katalog fehlt absichtlich. Suchen Sie keine echten Webseiten zum fiktiven Produkt und erfinden Sie keine Antwort.

| Belegstatus | Beispiel im Paket | Darstellung im Ergebnis |
|---|---|---|
| `supported`: belegt | P1 nennt nur Markdown und Klartext | Belegten Umfang und Fundstelle nennen, keinen Produkttest behaupten |
| `conflict`: Widerspruch | P3 sagt standardmäßig aus, C2 sagt standardmäßig an | Beide Aussagen zeigen und Lücken bei Version und Bedingungen erhalten |
| `unknown`: unbekannt | Diagnose-Upload-Felder sind nicht genannt | Fehlende Angaben nennen, Upload-Inhalte nicht erraten |
| `unavailable`: nicht verfügbar | Lokale Datei für M fehlt | Fehlgeschlagene Quelle und ihre Auswirkung festhalten, nicht als gelesen ausgeben |

[Referenzbericht](/downloads/skills/evidence-research/solution/report.md) · [Belegtabelle](/downloads/skills/evidence-research/solution/evidence.csv) · [Ausgabeformat](/downloads/skills/evidence-research/references/evidence-format.md)

## Installation und Aufruf

Legen Sie das vollständige Verzeichnis im Übungsprojekt unter `.agents/skills/evidence-research/` ab; `SKILL.md` ist der Einstiegspunkt. Überschreiben Sie keinen gleichnamigen benutzerdefinierten Skill. Prüfen Sie anhand von [Skill verwenden](/de/skills/use-a-skill/), ob er im Client auswählbar ist, und rufen Sie ihn auf:

```text
$evidence-research Prüfe anhand der Quellen in sources/catalog.json dieses Pakets,
ob Eingabeformate, Diagnose-Standardeinstellung und Upload-Felder
von Shiye (拾页) 1.2 bestätigt werden können. Erstelle my-output/report.md
und evidence.csv; kennzeichne Widersprüche und nicht erreichbare Quellen.
Behalte die synthetische Identität bei und suche keine echten Webseiten
zum fiktiven Produkt.
```

`fixtures/trigger-cases.json` enthält positive und negative Beispiele: Quellenvergleich und Belegprüfung passen; kreative Gedichte und einfaches Dateizählen brauchen keinen Rechercheablauf. Das sind Entwurfserwartungen; automatisches Auslösen wurde nicht gemessen.

## Quellen und Bericht prüfen

Optionale Prüfungen benötigen Python 3.10+ ohne Drittanbieterabhängigkeiten. Im entpackten Verzeichnis ausführen:

```sh
# Tatsächlichen Status jeder Quelle ausgeben
python3 scripts/check_evidence.py --inspect-only
# Referenzbericht prüfen
python3 scripts/check_evidence.py
# Bericht im Paketformat prüfen
python3 scripts/check_evidence.py --output my-output
# Regressionstests in temporären Kopien ausführen
python3 validation/test_checks.py
```

Erwartet werden P/I/C als `available`, M als `missing` und vier strukturell gültige Belege. Exitcode 0 bedeutet, dass die Prüfung abgeschlossen und die Struktur gültig ist; er bedeutet nicht, dass alle Quellen verfügbar sind. Lesen Sie jeden Status, besonders bei `--inspect-only`.

Der Prüfer erkennt geänderte Inhaltshashes, fehlende oder unlesbare Dateien und Dateien ohne erwarteten Hash. Eine nicht verfügbare Quelle darf weder als gelesener Beleg dienen noch stillschweigend aus dem Bericht verschwinden. Das Skript verarbeitet nur lokale Dateien; HTTP-Status und Erreichbarkeit von Webseiten werden nicht geprüft.

## Wiederaufnahme nach Fehlern

- **Datei fehlt:** Pfad prüfen. Wenn die Quelle tatsächlich fehlt, den Status „nicht verfügbar“ beibehalten und übrige belegte Schlüsse liefern.
- **Inhalt geändert:** Versionen und Diffs vergleichen, Verweise erneut prüfen. Nicht nur den Hash aktualisieren, damit die Prüfung besteht.
- **Widersprüchliche Belege:** Versionen, Installationsbedingungen und Zielgruppen prüfen. Falls ungelöst, offenlassen statt nur nach Datum zu entscheiden.
- **Fakt fehlt:** Benötigte Felder oder Erläuterungen des Maintainers auflisten. Empfehlungen nicht als bestätigte Fakten ausgeben.

Dieses Beispiel verlangt keine Antwort auf Fragen, die die festen Eingaben nicht beantworten. Wenn eine reale Recherche Ersatzquellen erlaubt, dokumentieren Sie Auswahlgrund und tatsächlich aufgerufene Quellen.

## Abschlusskriterien und Grenzen

Der Bericht soll Fragestellung, gelesene und fehlgeschlagene Quellen, Einzelbelege und nächste Schritte zur Belegbeschaffung enthalten. Der Autor hat den Referenzbericht mit den festen Quellen abgeglichen; eine unabhängige Leserin oder ein zweiter Gutachter hat ihn nicht geprüft.

Acht Skripttests zeigen zudem eine Schwachstelle: Die falsche Behauptung „unterstützt alle Formate mit perfekter Genauigkeit“ kann bei gültigem Verweis die Strukturprüfung bestehen. Das Skript beweist keine semantische Stützung und entscheidet nicht, ob zwei Passagen wirklich widersprechen. Lesen Sie die Originalquellen vor der Abgabe einzeln.

Mit dem [Schreib-Skill](/de/skills/examples/writing-skill/) können Sie geprüfte Schlüsse anschließend als Artikel formulieren und Widersprüche sowie Unbekanntes erhalten.
