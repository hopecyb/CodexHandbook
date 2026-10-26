---
title: "Beispiel: Schreib-Skill mit Quellen und Stilvorlage"
description: "Lade ein vollständiges Quellenpaket herunter und übe Belegzuordnung, Stilüberarbeitung, Umgang mit Widersprüchen und menschliche Prüfung."
contentType: skill
audiences: [creator]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: "Quellen- und Zitatstruktur sowie acht Regressionstests bestanden. Artikel und Stil wurden vom Autor selbst geprüft; Auslösefälle sind Entwurfserwartungen. Modellschreibqualität und automatisches Routing wurden nicht getestet."
  environment: "Python 3.12.11 / Darwin arm64; drei originale synthetische Quellen, temporäre Kopien, keine Drittanbieter-Abhängigkeiten."
  evidence:
    - label: "Prüfumfang und Selbstprüfungsprotokoll des Autors"
      href: /downloads/skills/source-backed-writer/validation/record.md
assets:
  - path: /downloads/skills/source-backed-writer/source-backed-writer-1.0.0.zip
    purpose: "Skill, Stilvorlage, synthetische Quellen, Referenzentwurf, Belegtabelle, Überarbeitungs-Diff und Strukturprüfungen"
    license: CC0-1.0
    version: 1.0.0
locale: de
source_locale: zh-CN
source_revision: "cbaec37"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
---
Dieser Skill erstellt aus bereitgestellten Quellen einen Artikel mit rückverfolgbaren Aussagen und bewahrt Stilvorgaben, Belege und ungeklärte Punkte. Er eignet sich für quellenbasiertes Schreiben und Faktenprüfung; für einen Tippfehler braucht man diesen ganzen Ablauf nicht.

[Vollständiges source-backed-writer v1.0.0 herunterladen](/downloads/skills/source-backed-writer/source-backed-writer-1.0.0.zip) · [SKILL.md ansehen](/downloads/skills/source-backed-writer/SKILL.md) · [Installationsanleitung](/downloads/skills/source-backed-writer/README.md)

## Inhalt des Pakets

| Material | Zweck |
|---|---|
| Drei synthetische Quellen mit Hash-Index | Mit festen Eingaben üben, ohne ein fiktives Produkt für eine reale Kaufoption zu halten |
| Stilvorlage und bewusstes Gegenbeispiel | Unbelegte Erfolgsversprechen durch konkrete Handlungen ersetzen |
| Gliederung, Erstfassung, Endfassung und Überarbeitungs-Diff | Fakten-, Struktur- und Formulierungsänderungen unterscheiden |
| Sieben Zuordnungen von Aussagen zu ihren Belegen und Liste offener Punkte | Quellenbelege, Autorenschlüsse und Unbestätigtes trennen |
| Positive und negative Auslösefälle, Skripte und Prüfprotokoll | Einsatzbereich und Prüfgrenzen verdeutlichen |

Das Material übernimmt das fiktive Werkzeug „Shiye (拾页)“ aus der [Übung zum quellenbasierten Artikel](/de/cases/write-an-article/). Du kannst erst diese Übung erledigen und dann die Schreibmethode als Skill speichern.

## Installieren und erstmals aufrufen

Lege das vollständige Verzeichnis im Übungsprojekt unter `.agents/skills/source-backed-writer/` ab. `SKILL.md` muss direkt darin liegen. Falls bereits ein gleichnamiger Skill existiert, vergleiche die Versionen und überschreibe ihn nicht. Zur Erkennung siehe [Skill verwenden](/de/skills/use-a-skill/); wenn dein Client ihn zur Auswahl anbietet, rufe ihn ausdrücklich auf:

```text
$source-backed-writer Lies die drei Quellen aus sources/ in diesem Übungspaket.
Schreibe anhand von references/style.md eine Vorstellung für Einzelautoren und speichere
article.md, claim-map.csv und unresolved.md unter my-output/.
Bewahre den synthetischen Charakter und veröffentliche nichts.
```

Lesen und Schreiben benötigen kein Python. Die optionale Strukturprüfung nutzt nur die Standardbibliothek ab Python 3.10. Im entpackten Skill-Verzeichnis:

```sh
# Beiliegende Referenzfassung prüfen
python3 scripts/check_article.py
# Eigenen Text im Paketformat prüfen
python3 scripts/check_article.py --output my-output
# Acht Prüfungen in temporären Kopien reproduzieren
python3 validation/test_checks.py
```

Für diese Seite wurden die Skripte ausgeführt, nicht jedoch die automatische Erkennung oder ein Modellaufruf in einem bestimmten Client geprüft. Verwende bei einer echten Aufgabe mit eigenem Ausgabeformat dessen eigene Anforderungen, statt das Lehrpaketformat zu erzwingen.

## Wie der Stil den Artikel verändert

Die [Stilvorlage](/downloads/skills/source-backed-writer/references/style.md) enthält einen gezielten Vergleich:

> Gegenbeispiel: Shiye (拾页) ist ein Alleskönner, verarbeitet mühelos jedes Format und verdoppelt deine Produktivität.

Überarbeite es zu: „Die Beschreibung nennt nur Markdown und Klartext. Probiere zuerst eine kleine Kopie deiner Notizen aus und gehe dann zu den im Überblick genannten Originalstellen zurück.“ Der erste Satz stammt aus der Quelle, der zweite ist ein Ratschlag des Autors; in der Belegtabelle müssen sie getrennt werden. Andere Ton- oder Strukturwünsche des Nutzers gehen vor.

[Referenz-Endfassung](/downloads/skills/source-backed-writer/solution/article.md) · [Belegtabelle](/downloads/skills/source-backed-writer/solution/claim-map.csv) · [Überarbeitungs-Diff](/downloads/skills/source-backed-writer/solution/revision.diff)

## Widersprüche und Lücken behandeln

Produktbeschreibung P3 sagt, dass der Diagnose-Upload standardmäßig aus ist. Versionshinweis C2 sagt dagegen, dass er bei neuen Installationen an ist. Die Endfassung nennt beide Angaben und erklärt nicht die später datierte automatisch für richtig. Welche Felder hochgeladen werden, ist unbekannt und bleibt auf der [Liste offener Punkte](/downloads/skills/source-backed-writer/solution/unresolved.md).

Das synthetische Interview enthält weder Zeitmessung noch feste Evaluierungsstichprobe. „Doppelte Effizienz“ oder eine Genauigkeitszahl sind daher unbelegt. Entferne solche Zahlen, ergänze Einschränkungen und aktualisiere die Belegtabelle. Nach einer scheinbar plausiblen Antwort über das fiktive Produkt zu suchen ist keine Lösung.

## Abnahme und Grenzen der Prüfung

Prüfe nach dem Schreiben:

- Wichtige Aussagen haben rückverfolgbare Stellen; Fakten, Empfehlungen und Unbekanntes sind getrennt.
- Die fiktive Identität, Eingabegrenzen und der ungelöste Widerspruch stehen weiterhin im Artikel.
- Stiländerungen entfernen keine nötigen Einschränkungen und verändern nicht die vom Nutzer gewünschte Struktur.
- Nach bestandener Zitatformatprüfung wird jeder Satz mit der Quelle verglichen; vorhandene IDs reichen nicht.

Das Skript erkennt geänderte Quellen-Hashes und Fehler in der Zitatstruktur, aber keine semantisch unbelegte Aussage. Im Paket wird absichtlich ein falsches Fähigkeitsversprechen getestet, das mit gültiger ID die Strukturprüfung besteht. Menschliche Faktenprüfung bleibt nötig.

## Wann der Skill nicht ausgelöst werden sollte

Ein Tippfehler, ein Git-Patch-Review oder eine neue Softwarefunktion ist nicht automatisch ein vollständiger Artikelauftrag. Ein fertiger Artikel verleiht keine Veröffentlichungsbefugnis. Die [Auslösefälle](/downloads/skills/source-backed-writer/fixtures/trigger-cases.json) sind Entwurfserwartungen, keine gemessene Routing-Erfolgsrate.

Kehre danach zum [Creator-Lernpfad](/de/guide/learning-paths/creator/) zurück und notiere Stil und Abnahmekriterien in einer eigenen wiederverwendbaren Anleitung.
