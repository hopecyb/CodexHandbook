---
title: Berechtigungen und Freigaben
description: "Erklärt, wann Codex deine Zustimmung für Operationen braucht."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 70
---

Codex sollte riskante Operationen nicht ohne Zustimmung ausführen. **Freigabe** ist das Tor in der Mensch-Maschine-Zusammenarbeit.

Könnte Codex beliebige Dateien lesen, ungehindert online gehen und beliebig Befehle ausführen, wäre der Preis bei falschem Aufgabenverständnis hoch.

## Worauf du achten solltest

- Darf es Pfade außerhalb des aktuellen Projekts lesen/schreiben?
- Darf es online gehen?
- Darf es bestimmte Shell-Befehle ausführen?
- Hat das Team verpflichtende Politiken ausgegeben (Managed Config)?

## Was sie steuert

Freigabe kannst du als „Bestätigungsdialog vor riskanten Schritten“ sehen.

In diesen Fällen sollte es anhalten und dich fragen:

- Dateien schreiben
- Befehle ausführen, die das System ändern könnten
- Pfade außerhalb des Projekts anfassen
- Online Inhalte lesen oder senden

Ein Dialog oder eine Bestätigungsanfrage heißt nicht, dass Codex fehlerhaft ist — oft hält es sich gerade an Sicherheitsgrenzen.

## Häufige Missverständnisse

### 1. Warum macht es manchmal direkt weiter und fragt manchmal?

Weil Operationen unterschiedlich riskant sind.

- Eine gewöhnliche Datei lesen: eher geringes Risiko
- Viele Dateien ändern, online gehen, Befehle ausführen: höheres Risiko

### 2. Sollte ich immer auf Erlauben klicken?

Prüfe mindestens diese drei Punkte:

1. Was will es tun?
2. Was wird beeinflusst?
3. Wolltest du das überhaupt?

### 3. Wenn ich ablehne — ist die ganze Aufgabe hin?

In der Regel nicht. Du kannst ablehnen und es einen sichereren Weg weitermachen lassen.

## Einfache Prinzipien beim Nutzen

- Nicht verstehen → nicht freigeben
- Außerhalb des aktuellen Projekts → besonders vorsichtig
- Online, Befehle, Massenänderungen an Dateien → genauer hinschauen
- Unsicher → zuerst erklären lassen, „warum diese Berechtigung nötig ist“

## Schichten

| Schicht | Inhalt | Wo lesen |
|---|---|---|
| Konzept (diese Seite) | Warum Freigabe nötig ist | — |
| Produktunterschiede | Wie Einstiege Bestätigungen zeigen | [Produkthandbuch](/guide/) |
| Prompt-Strategie | Wie du Berechtigungsgrenzen in der Aufgabe angibst | [Einschränkungen definieren](/prompts/constraints-and-boundaries/) |

Offizielle Politiken und Defaults können sich ändern — prüfe [https://developers.openai.com/codex](https://developers.openai.com/codex).

Freigabe stellt sicher, dass „darf es das?“ am Ende immer bei dir bleibt.

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Überprüfungsgrundlage:** Die aktuelle Codex-CLI-Einstiegsdokumentation im OpenAI Help Center unterscheidet weiterhin approval modes und schichtet Aktionen wie Dateien lesen/schreiben und Befehle ausführen nach Risiko; diese Seite erklärt nur, warum Freigabe existiert, wann vorsichtig freigegeben werden sollte und wie Nutzer den Wirkungsbereich einschätzen — ohne feste Produktdefaults zu behaupten.  
**Zuletzt überprüft:** 2026-07-26
