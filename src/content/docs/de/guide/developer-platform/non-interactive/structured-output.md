---
title: Strukturierte Ausgabe
description: Lass exec maschinenlesbare Ergebnisse für nachgelagerte Schritte, Dashboards und Gates erzeugen.
sidebar:
  order: 30
locale: de
source_locale: zh-CN
source_revision: aa19d49
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Bei einer ersten Automatisierung lassen viele Personen Codex einen plausibel klingenden Text ausgeben. Menschen können ihn lesen, Skripte jedoch nur schwer zuverlässig verarbeiten.

Strukturierte Ausgabe löst ein direktes Problem: Codex gibt das Ergebnis in einem von dir festgelegten Format zurück.

Wenn eine nicht interaktive Aufgabe nur Freitext ausgibt, kann ein nachgelagerter Schritt kaum automatisch erkennen, ob die Prüfung bestanden wurde, wie viele Probleme gefunden wurden und welchen Schweregrad sie haben. Strukturierte Ausgabe macht das Ergebnis für Maschinen anschlussfähig.

## Inhalt dieser Seite

- Wann JSON, Markdown-Tabelle oder feste Felder erforderlich sind
- Wie ein Schema im Prompt definiert wird
- Welche Fallback-Strategie bei einem Parsingfehler greift

## Häufige Missverständnisse

### Strukturierte Ausgabe schafft eine stabile Schnittstelle

JSON und Schema sind keine bloße technische Pedanterie.

Wenn ein Skript Erfolg und Fehlschlag bestimmt, ein Bot Kommentare sendet oder ein Dashboard Ergebnisse darstellt, braucht der nächste Schritt ein stabiles Format, statt bei jedem Lauf die Bedeutung eines anders formulierten Texts zu erraten.

### Ein stabiles Format garantiert keine richtige Schlussfolgerung

Strukturierte Ausgabe stellt nur sicher, dass das Ergebnis die verlangte Form besitzt. Sie garantiert nicht automatisch, dass Codex die Aufgabe korrekt verstanden hat.

Sie löst deshalb das Problem der Ausgabeschnittstelle, ersetzt aber weder eine eindeutige Aufgabe noch die Ergebnisverifikation.

## Direkte Unterscheidung

- Freitext eignet sich für Menschen
- Strukturierte Ausgabe eignet sich für Programme

Wenn das Ergebnis als Nächstes von `jq`, einem Skript, Dashboard, Gate oder Kommentar-Bot verarbeitet wird, solltest du dich nicht ausschließlich auf frei formulierte natürliche Sprache verlassen.

## Kleinste brauchbare Vorgehensweise

Lege am Ende des Prompts ein festes Ausgabeformat fest:

```text
… [Aufgabenbeschreibung] …

Ausgabeanforderungen:
- Gib ausschließlich ein JSON-Objekt ohne Markdown-Code-Fence aus
- Felder: {"pass": boolean, "findings": [{"severity":"P0|P1|P2", "file":"", "message":""}]}
- Wenn keine Probleme gefunden wurden, ist findings ein leeres Array
```

Parsing in der Shell:

```bash
result=$(codex exec --cd . "$(cat prompts/structured-review.md)")
echo "$result" | jq -e '.pass == true'
```

## Häufige Fallstricke

### 1. Nur „JSON ausgeben“ statt „ausschließlich JSON ausgeben“

Wenn das Modell zuerst eine Erklärung und danach JSON ausgibt, schlägt das Parsing fehl.

### 2. Feldnamen unkontrolliert ändern

Sobald ein Skript von einem Feld abhängt, muss das Schema wie eine Schnittstelle gepflegt werden und darf nicht beiläufig geändert werden.

### 3. Strukturierte Ausgabe soll jede unklare Anforderung lösen

Sie stabilisiert das Format. Ist die Aufgabe selbst unklar, wird auch JSON nur ein gleichförmig unklares Ergebnis liefern.

## Empfohlener Workflow

```text
Schema definieren (Version v1)
    → Prompt verweist auf Schemadatei @schemas/review-output.json
    → exec ausführen
    → mit jq / eigenem Validator prüfen
    → bei Fehlschlag exit 1
```

Bei umfangreichen Ausgaben kannst du ein Feld für einen Dateipfad verlangen, den Agent nach `artifacts/` schreiben lassen und das Artefakt in CI hochladen.

## Entscheidungshilfe

Wenn ein nachgelagertes Programm das Ergebnis weiterverarbeitet, sollte es nach Möglichkeit strukturiert sein.  
Wenn Menschen das Ergebnis hauptsächlich lesen und diskutieren, ist Freitext häufig natürlicher.

Sobald das Ergebnis an ein weiteres Programm übergeben wird, sollte Codex stabil die vereinbarten Felder liefern.

## Vergleich mit dem SDK

| | CLI + JSON-Prompt | SDK |
|---|---|---|
| Integrationsaufwand | Niedrig | Mittel |
| Typsicherheit | Konvention und Validierung | SDK-Typen verfügbar |
| Geeignet für | CI-Skripte | Mehrmandantenfähige Dienste |

Siehe [SDK-Überblick](/de/guide/developer-platform/sdk-overview/).

## Häufige Fehler

- JSON-Parsing schlägt wegen zusätzlicher Erklärungstexte fehl; im Prompt „ausschließlich JSON“ verlangen
- Schemaversion bei einer Änderung nicht erhöhen und dadurch eine Fehlinterpretation in alter CI verursachen
- Zugangsdaten als JSON-Felder in Protokolle zurückgeben
- Kein eindeutiges Exitverhalten für Parsingfehler festlegen

## Abnahmecheckliste

- [ ] Eine Schemadatei oder dokumentierte Felder sind vorhanden
- [ ] CI schlägt bei einem Parsingfehler ausdrücklich fehl
- [ ] Beispielausgaben liegen für Regressionstests unter `fixtures/`
- [ ] Die Strategie entspricht den [Exitcodes](/de/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## Quellen
- Allgemeine Praxis für OpenAI Structured Outputs
---

**Status:** verified  
**Unterstützte Produkte:** CLI / API  
**Prüfgrundlage:** In der aktuellen Modell- und Vergleichsdokumentation der OpenAI API ist die Funktion `Structured outputs` weiterhin aufgeführt. Diese Seite beschränkt sich auf die allgemeine Praxis, eine stabile Ausgabeschnittstelle für nicht interaktive Aufgaben zu gestalten. JSON-Schema, Validierung und Fallback-Strategie der Beispiele sind Engineering-Muster.  
**Zuletzt geprüft:** 2026-07-26
