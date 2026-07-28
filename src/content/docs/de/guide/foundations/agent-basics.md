---
title: Agent-Grundlagen
description: "Erklärt, wie ein Agent um ein Ziel herum Werkzeuge aufruft und iterativ vorgeht."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Ein **Agent** arbeitet fortlaufend um ein Ziel herum: Ziel verstehen → Werkzeug wählen → Ergebnis beobachten → nächsten Schritt anpassen — bis fertig oder bis du eingreifen musst.

Gewöhnliche KI wirkt eher wie jemand, der Fragen beantwortet; ein Agent eher wie jemand, der nach Auftrag Schritt für Schritt weitermacht.

## Unterschied zwischen Agent und gewöhnlichem Chat

| | Gewöhnlicher Chat | Agent |
|---|---|---|
| Ausgabe | Vor allem Textvorschläge | Kann Dateien lesen/schreiben, Befehle ausführen, Repos ändern |
| Prozess | Eine Antwort | Mehrere Werkzeugaufrufe |
| Risiko | Irreführende Vorschläge | Kann zusätzlich Dateien verderben oder gefährliche Befehle ausführen |
| Deine Rolle | Lesen | Grenzen setzen, freigeben, abnehmen |

## Ein anschaulicher Vergleich

So kannst du beide gegenüberstellen:

- **Gewöhnlicher Chat**: Wie einen Freund fragen „Wie macht man diese Aufgabe?“
- **Agent**: Wie einen Kollegen bitten, eine Version zu machen — und danach gemeinsam zu prüfen

Im Agent-Modus solltest du also stärker achten auf:

- Worauf es zugreifen darf
- Ob es zuerst einen Plan liefern soll
- Wie du nach Abschluss abnimmst

## Warum der Unterschied zählt

Viele Fehlnutzungen kommen aus demselben Missverständnis:

> Es würde „nur reden“

Sobald es Dateien liest und ändert und Befehle ausführt, ist es nicht mehr nur ein Vorschlag im Chatfenster — es greift in echte Arbeit ein.

Am Anfang lohnt sich parallel:

1. [Berechtigungen und Freigaben](/guide/foundations/permissions-and-approvals/)
2. [Erste Aufgabe ausführen](/guide/getting-started/run-your-first-task/)
3. [Ergebnis prüfen](/guide/getting-started/review-the-result/)

## Verwandte Begriffe

- Skill / Plugin / MCP: erweitern „was es kann“ und „wohin es angebunden ist“ — siehe [Erweiterungen und Automatisierung](/skills/) sowie [Fähigkeitskarte](/guide/start-here/codex-capability-map/)
- Menschliche Freigabe: siehe [Berechtigungen und Freigaben](/guide/foundations/permissions-and-approvals/)

Das Besondere am Agent: Er kann um ein Ziel herum mehrere Schritte am Stück machen — nicht nur einen Textabschnitt zurückgeben.


---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Überprüfungsgrundlage:** Diese Seite erklärt nur die Kollaborationsunterschiede zwischen Agent und gewöhnlichem Chat; interne Links sowie Konzept- und Analogieformulierungen wurden geprüft, und der Text hängt nicht von schnell veränderlichen Produktdetails ab.  
**Zuletzt überprüft:** 2026-07-26
