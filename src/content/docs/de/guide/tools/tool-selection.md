---
title: Werkzeugwahl
description: "Wann Terminal, Suche, Browser oder andere Werkzeuge."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

„Werkzeugwahl“ heißt: Welche Weise ist für diese Sache wirksam und sicher.

Nach Aufgabentyp urteilen ist meist klarer.

## Worauf die Wahl schaut

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

Im Prompt erlaubte und verbotene Werkzeuge nennen — weniger unerwünschtes Netz oder wilde Dependencies.

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

---

**Status:** verified  
**Gilt für:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Aufgabengesteuerte Werkzeugwahl: Projektinhalt → Datei, Befehle → Terminal, öffentliche Fakten → Suche, echte Seite → Browser; mit aktuellen Werkzeugkapiteln und Kategoriedefinitionen abgeglichen.  
**Zuletzt geprüft:** 2026-07-26
