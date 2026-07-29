---
title: Rückgängig machen und wiederherstellen
description: "Bei unbefriedigendem Ergebnis sicher zurückrollen."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 100
---

Beim ersten Codex-Einsatz fürchten viele: Es ändert falsch — komme ich zurück?

Meist ja — aber mit sicheren Methoden zurückrollen.

Wenn Ergebnis Grenzen überschreitet oder Qualität nicht reicht:

1. Die Undo-/Änderungen-zurücksetzen-Funktion des Clients nutzen (aktuelle UI gilt)
2. Liegt das Projekt unter Git: Arbeitsbaum-Änderungen mit vertrauten Mitteln verwerfen (Anfänger können Git erst lassen und aufs Übungsverzeichnis setzen)
3. Neuen Thread öffnen, Einschränkungen enger setzen, erneut versuchen

Oft hilft vorher schon: Umfang klein halten — wenige Dateien, Verbote klar, zuerst Plan, dann ausführen.

## „Rückgängig“ und „Wiederherstellen“ unterscheiden

- **Rückgängig**: Die gerade unbefriedigende Änderung zurücknehmen
- **Wiederherstellen**: Das Projekt in einen von dir als sicher bestätigten Zustand bringen

Bei einer kleinen Übungsdatei ist Rückgängig meist einfach. Schwieriger wird es, wenn:

- Mehr als eine Datei geändert wurde
- Du selbst danach manuell nachgezogen hast
- Unklar ist, wer was geändert hat

Zuerst weitere Änderungen stoppen und den Wirkungsbereich eingrenzen.

## Reihenfolge beim ersten Fehler

1. Weitere Änderungen stoppen — nicht panisch noch mehr ändern lassen
2. Zuerst klären, welche Dateien geändert wurden
3. Produkt-Undo bevorzugen, wenn verfügbar
4. Liegt das Projekt ohnehin unter Git: vertraute Git-Methode nutzen
5. Im sicheren Zustand klarere Anweisung neu geben

## Ohne Git-Kenntnisse zuerst so

Viele schreckt „Wiederherstellen“ ab — als müsste man viele Git-Befehle können. Am Anfang nicht nötig.

Zuerst:

- Im Übungsverzeichnis üben
- Pro Durchlauf nur eine kleine Datei ändern lassen
- Unzufrieden → direkt rückgängig

Systematisches Git-Zurückrollen kommt später bei echten Projekten.

## Vorbeugen schlägt Nachbessern

Diese Praktiken senken die Chance, dass Fehler schwer aufräumbar werden:

- Klar schreiben „nur diese Datei“
- Zuerst Plan, dann ausführen
- Nach jedem Schritt prüfen — nicht viele Änderungen auf einmal ansehen
- Vor riskanten Operationen bestätigen

Fehler selbst sind nicht schlimm. Ohne klaren Änderungsumfang weiterzuändern — das wird unangenehm.

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE  
**Überprüfungsgrundlage:** Gegen die im Handbook bereits geprüften Einstiegsprinzipien zu Freigabe, Ergebnisprüfung, Fehlerwiederherstellung und Git/Arbeitsbaum abgeglichen; diese Seite bestätigt nur die stabile Rückrollmethode „zuerst stoppen, Umfang sehen, Undo bevorzugen, dann sicheren Zustand wiederherstellen“ und schreibt keinen festen Undo-Einstieg eines Clients als Vertrag fest.  
**Zuletzt überprüft:** 2026-07-26
