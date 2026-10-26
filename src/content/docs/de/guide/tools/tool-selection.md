---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Aufgabengesteuerte Werkzeugwahl: Projektinhalt → Datei, Befehle → Terminal, öffentliche Fakten → Suche, echte Seite → Browser; mit aktuellen Werkzeugkapiteln und Kategoriedefinitionen abgeglichen."
  checkedAt: "2026-07-26"
title: Werkzeugwahl
description: "Wann Terminal, Suche, Browser oder andere Werkzeuge."
locale: de
source_locale: zh-CN
source_revision: "9fdb366"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 10
---

„Werkzeugwahl“ heißt: Mit welchem Werkzeug lässt sich die Aufgabe wirksam und sicher erledigen?

Nach Aufgabentyp urteilen ist meist klarer.

## Worauf es bei der Wahl ankommt

Vor allem:

- Was passt am engsten zur Aufgabe
- Was liefert Ergebnis mit minimalem Aufwand
- Was hat geringstes Risiko und lässt sich am besten prüfen

Falsches Werkzeug muss nicht scheitern — oft langsamer, umständlicher, riskanter.

| Bedarf | Bevorzugen |
|---|---|
| Dateien im Repo ändern | Dateiwerkzeug |
| Tests/Build | Terminal |
| Öffentliche Fakten | Web-Suche |
| Echten Seitenstatus sehen | Browser (fortgeschritten) |

Im Prompt erlaubte und verbotene Werkzeuge nennen — um nicht autorisierte Netzwerkzugriffe oder ungeplante Installationen von Abhängigkeiten zu vermeiden.

## Unsicher? So wählen

1. Lokales Projekt oder externe Fakten
2. „Aktion ausführen“ oder nur „Ergebnis sehen“
3. Welches Werkzeug mit minimalem Umfang

Beispiele:

- Code-Änderung sehen → Datei
- Build bestätigt? → Terminal
- Wie sieht die Seite jetzt aus? → Browser
- Aktuelle öffentliche Info → Web-Suche

## Häufige Missverständnisse

### 1. Stärker ≠ besser

Stärkere Werkzeuge meist:

- größerer Wirkungsradius
- höheres Risiko
- mehr Verständnis nötig

### 2. Terminal kann alles — trotzdem nicht immer zuerst

Nur Seitenoptik → Browser oft direkter.  
Nur öffentliche Versionsnummer → Suche besser als überall Befehle.

### 3. Weiß nicht welches?

Regel:

- **Projekt lesen/ändern** → Datei
- **Befehl/Build prüfen** → Terminal
- **Öffentliche Fakten** → Suche
- **Echtes Rendering** → Browser

### 4. Eine Aufgabe = oft mehrere Werkzeuge

Echte Aufgaben kombinieren:

- Datei lesen, dann Build
- Öffentlich suchen, dann Doku umschreiben
- Browser sehen, dann Code fixen

Pro Schritt das passendere Werkzeug — nicht „nur eines“.

## Direkt nutzbare Formulierung

```text
Bevorzugt Datei und Terminal; keine Netzsuche. Browser nur nach Begründung, wenn Seitenprüfung nötig.
```

Zuerst das kleinste, aufgabennahe Werkzeug — nicht sofort das mit größtem Wirkungsradius.
