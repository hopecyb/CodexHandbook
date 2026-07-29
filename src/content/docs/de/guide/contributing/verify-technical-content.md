---
title: Technische Inhalte prüfen
description: "Seiten als verified markieren — mit Reproduktionsschritten, offiziellen Belegen und Datum."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

Befehle, Berechtigungen, Preise und Produktfunktionen ändern sich mit Versionen. **Prüfung** sorgt dafür, dass Lesende erwartbare Ergebnisse bekommen.

## Inhalt dieser Seite

Viele halten „sehe keinen Fehler“ für „schon geprüft“.

Im Technikhandbuch sind das zwei Dinge:

- Ersteres: subjektiv „wirkt wahr“
- Letzteres: mit aktueller Version, Umgebung, Schritten wirklich nachvollzogen

Hier: von „wirkt richtig“ zu „mit Belegen jetzt noch richtig“.

## Was „Prüfung“ prüft

Nicht nur Lesbarkeit — ob Lesende es **heute noch nachmachen** können.

Wichtig, weil vieles nicht ewig stabil ist:

- Befehle ändern sich
- Menüorte wandern
- Berechtigungsdefaults ändern sich
- Fähigkeiten und Verfügbarkeit aktualisieren sich

Prüfung ist keine Editiermanie — sie verhindert, dass Lesende alten Docs folgen und stolpern.

## Statusbedeutung

| Status | Bedeutung |
|---|---|
| `planned` | Geplant, noch nicht geschrieben |
| `draft` | In Arbeit, noch nicht fertig |
| `review` | Inhalt fertig, Review ausstehend |
| `verified` | Nach angegebenen Belegen geprüft |
| `outdated` | Nach Produktänderung Update nötig |
| `archived` | Historisch, nicht in Haupnavigation |

## Häufige Missverständnisse

### `verified` = Belege, nicht nur Selbstsicherheit

Kein Tonfall — ein Evidenzstatus.

Nur nach Reproduktion, Abgleich mit offiziellen Belegen, passendem Umfang und Datum → `verified`.

### Community-Artikel helfen verstehen, ersetzen keine Faktenprüfung

Community-Artikel helfen, Themen zu finden.

Aber bei:

- Befehlsnamen
- Berechtigungsverhalten
- Produkteinstiegen
- Preis, Quota, Regionsunterschieden

zurück zur offiziellen Doku oder aktuellem Lauf.

### Prüfung ≠ einzelne Sätze scannen

Sätze können einzeln ok sein, die Kette nicht:

- Produkt und Seite passen nicht
- Schrittfolge falsch
- Default-Prämissen fehlen
- Titel verspricht mehr als verifizierter Umfang

Als **ganze Operationskette** prüfen, nicht nur Wortlaut.

## Prüfliste

1. **Umfang nennen**: Produkt (App/CLI/IDE/Cloud), OS, CLI-Version
2. **Schrittweise reproduzieren**: von Null oder sauberem Worktree
3. **Offizieller Beleg**: mindestens ein OpenAI-Docs- oder Help-Center-Link
4. **Community-Quellen**: Community-Artikel nur als Themenreferenz; Fakten offiziell
5. **Datum**: Footer `Zuletzt geprüft: YYYY-MM-DD`
6. **Unabhängiges Review**: `verified` idealerweise zweite Person ≠ Autor

## Prüfreihenfolge

1. Welches Produkt, Einstieg, Szenario
2. Schritte von vorn durchgehen
3. Flüchtige Infos gegen offizielle Doku
4. Unsicheres / Nicht-Reproduziertes herabstufen
5. Status und Datum aktualisieren

Lieber `review` behalten, als `verified` ohne genug Belege.

## Flüchtige Informationen

Quartalsweise oder bei Major-Release neu prüfen:

- Befehls- und Subbefehlsnamen, Flags
- Berechtigungsdefaults und Sandbox-Verhalten
- Tarife, Modellnamen, Regionsverfügbarkeit
- MCP-/Hook-Ereignisnamen

## Bei Fehlschlag

- Auf `review`, `draft` oder `outdated` herabstufen
- Im PR sagen, welcher Schritt von der offiziellen Doku abweicht
- Große Abweichung: Issue mit `outdated`

## Verwandt

- [Handbuch-Versionspolitik](/guide/start-here/handbook-version-policy/)
- [Offizielle Ressourcen](/guide/reference/official-resources/)

`verified` heißt: „nach aktuellen Belegen wirklich geprüft und nachvollziehbar“ — Autor-Selbstvertrauen reicht nicht.

---

**Status:** verified  
**Prüfgrundlage:** Gegen aktuelles Statussystem, abgeschlossene Review-Runden und „offiziell zuerst“ abgeglichen; interne Standards und Herabstufungsprinzipien für `verified`.  
**Zuletzt geprüft:** 2026-07-26
