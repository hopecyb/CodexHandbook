---
title: Einen Skill nutzen
description: Skills explizit und implizit auslösen — und description gut schreiben.
locale: de
source_locale: zh-CN
source_revision: fa190cf
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Ein häufiger Irrtum am Anfang: „Sobald er installiert ist, wirkt er von allein.“ Einen Skill nutzen heißt, Codex nach einem vorformulierten Arbeitsmuster handeln zu lassen.

Skills können von dir **explizit benannt** oder in passenden Szenarien vom Modell **automatisch gewählt** werden. Die beiden Auslösearten zu trennen, spart Fehlersuche.

# Einen Skill nutzen

## Auslösearten

1. **Explizit**: In unterstützten Umgebungen mit `$skill-name` (Name = Frontmatter-`name`)
2. **Implizit**: Das Modell entscheidet anhand der `description`-Semantik, ob die Aufgabe passt

## Die beiden Arten unterscheiden

- **Explizit**: Du sagst klar „genau diesen Skill nutzen“
- **Implizit**: Du nennst ihn nicht, aber die Aufgabenbeschreibung trifft sein Szenario

Zum Einstieg besser **explizit** starten. So erkennst du leichter:

- Ob der Skill erkannt wurde
- Ob das Verhalten deinen Erwartungen entspricht
- Ob Name und Beschreibung stimmen

## Beispiel

```text
$pr-review Bitte prüfe meine aktuellen uncommitteten Änderungen
```

Oder natürlichsprachlich: „Prüfe den Diff nach Teamgewohnheit, Fokus auf Tests.“

## Häufige Missverständnisse

### 1. Ich habe einen Skill geschrieben, also wird er immer automatisch ausgelöst

Automatisches Auslösen hängt davon ab, wie klar die `description` ist und wie gut die aktuelle Aufgabe zum Szenario passt.

### 2. Natürlichsprachlich und `$name` wirken immer gleich

Nicht unbedingt.

`$name` ist klarer — gut zum Verifizieren und Erzwingen. Natürliche Sprache ist bequemer, aber das Modell kann den falschen Skill wählen oder keinen.

### 3. Wenn der Skill nicht auslöst, ist er kaputt

Oft liegt es an:

- Falschem Namen
- Zu vager `description`
- Aufgabenbeschreibung ohne Treffer auf Auslösewörter

Beim Debuggen nicht nur „liegt die Datei da?“, sondern auch „liest sie sich wie ein auswählbares Werkzeug?“ prüfen.

## Typische Testreihenfolge

Zum ersten Durchlauf:

1. Zuerst `$skill-name` explizit aufrufen
2. Prüfen, ob die Ausgabe passt
3. Dann die `description` nachziehen
4. Zuletzt testen, ob natürliche Sprache auslöst

So trennst du „Skill-Inhalt kaputt“ von „Auto-Auslösebedingungen unklar“.

## Gute description schreiben

- Klar: „wann nutzen“ und „wann nicht“
- Schlüsselwörter einbauen (review, Release, changelog)
- Leere Phrasen wie „hilft dem Nutzer beim Codieren“ vermeiden
- Zentrale Auslöseszenarien **ganz nach vorne** (Zeichenbudget der Skill-Liste)

## Ist die description klar genug?

Faustregel:  
Nach dem Lesen der `description` weiß man, „wann sie greifen soll und wann nicht“.

Liest sie sich wie „kann irgendwie alles“, ist sie meist zu vage.

Mehr Konzepte: [Skills-Überblick](/de/skills/overview/).
---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Die aktuelle Codex-Laufzeit unterstützt explizite Skill-Namen und Auto-Matching in passenden Szenarien; OpenAI Help „Skills in ChatGPT“ bestätigt, dass Skills bei Nutzen automatisch verwendet werden. Diese Seite fokussiert Auslösearten und Schreibprinzipien.  
**Zuletzt geprüft:** 2026-07-26
