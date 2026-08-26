---
title: Ergebnis prüfen
description: "Änderungen lesen, Artefakte validieren und annehmen oder anpassen."
locale: de
source_locale: zh-CN
source_revision: cb5b5d9
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 90
---

Nach der Aufgabe überspringen viele Anfänger diesen Schritt.

Wer Codex stabiler nutzen will, muss **Ergebnisse prüfen** können.

Nicht nur „fertig“ glauben — ansehen, was wirklich geändert wurde und ob es dem entspricht, was du wolltest.

## Prüfliste

1. **Diff ansehen**: Nur erlaubte Dateien geändert?
2. **Artefakt öffnen**: Inhalt erfüllt Abnahmekriterien?
3. **Nachsteuern**: Fehlt nur wenig — präzises Feedback nachliefern
4. **Entscheiden**: Annehmen / manuell ändern / [rückgängig](/de/guide/getting-started/undo-and-recover/)

Mehr Methoden: [Diffs prüfen](/de/guide/quality/review-diffs/).

## Häufig übersehen

### 1. Nur die Zusammenfassung lesen, nicht die echten Änderungen

Codex kann Zusammenfassungen flüssig schreiben — entscheidend bleibt:

- Falsche Dateien?
- Unautorisierte Stellen mitgeändert?
- Ergebnis wirklich abnahmereif?

### 2. „Passt ungefähr“ → direkt annehmen

„Ungefähr“ hinterlässt oft kleine Fallen.  
Fehlt nur wenig: Lieber einen präzisen Nachsatz — nicht stillschweigend hinnehmen.

### 3. Merken, dass es nicht passt — aber nicht wissen, wie man es sagt

So kannst du weitermachen:

```text
Das Ergebnis ist nah dran, aber zwei Punkte fehlen noch: 1) … 2) … Bitte nur diese zwei Punkte korrigieren, sonst nichts anfassen.
```

## Prüfreihenfolge

Beim ersten Üben so:

1. **Umfang**: Welche Dateien geändert?
2. **Ergebnis**: Seite, Doku, Code-Ausgabe wie gefordert?
3. **Nebenwirkungen**: Überflüssige Änderungen oder neue Fehler?

Bei der Abnahme geht es vor allem darum, ob du das Ergebnis beruhigt annehmen kannst.

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE  
**Überprüfungsgrundlage:** Gegen die im Handbook bereits geprüften Kapitel Diffs prüfen, Fertig-Definition und Rückgängig/Wiederherstellen abgeglichen; Fokus dieser Seite ist die stabile Prüfmethode „Umfang, Ergebnis, Nebenwirkungen — dann entscheiden, ob annehmen“.  
**Zuletzt überprüft:** 2026-07-26
