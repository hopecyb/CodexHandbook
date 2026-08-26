---
title: Übergabe und Fortsetzen
description: Unvollendete Arbeit über Sessions hinweg fortsetzen.
locale: de
source_locale: zh-CN
source_revision: b92008e
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 40
---

Ein häufiges Problem:

> **Diesmal nicht fertig — wie weiter beim nächsten Mal?**

Ohne Übergabe passiert beim Wiederöffnen leicht:

- Sie selbst vergessen, wo Sie standen
- Codex weiß nicht, welche Constraints noch gelten
- Neuer Dialog zerstreut alten Kontext und kreist wieder von vorn

## Was Übergabe hinterlässt

Übergabe und Fortsetzen = eine Notizkarte für „wer beim nächsten Mal weiterarbeitet“.

Dieser „Wer“ kann sein:

- Sie selbst in ein paar Stunden
- Eine neu eröffnete Aufgabe
- Eine andere Person
- Weiterarbeitendes Codex

Also keine lange Geschichte — **Informationen, die zum Weitermachen wirklich nötig sind**.

## Mindestens hinterlassen

Übergabe-Zusammenfassung möglichst mit:

- Ziel und aktueller Status
- Geänderte Dateien
- Noch geltende Constraints
- Nächster einziger Schritt
- Wie überprüfen

Noch besser:

- Warum hier gestoppt

Dann sieht die nächste Runde nicht nur „halb fertig“, sondern ob Zeit, Freigabe oder echter Blocker.

## Häufige Missverständnisse

### 1. Alten Chat weiterleiten = Übergabe

Meist nicht.

Im alten Chat: viel veraltete Exploration, Irrwege, Zweige. Wertvoll sind **jetzt noch geltende Schlussfolgerungen**.

### 2. Mehr Text = besser

Zwei Extreme:

- Zu kurz: kritische Info fehlt
- Zu lang: nächster Schritt unsichtbar

Zum Weitermachen: **kurz, präzise, anschließbar**.

### 3. Nur „noch etwas, mach fertig“

Fast nutzlos.

„Fertig machen“ in eine klare Aktion übersetzen, z. B.:

- einmal `pnpm build` laufen lassen
- `guide/verification.md` weiter schreiben
- Hero-Look von `/guide/foundations/local-vs-cloud/` prüfen

## Stabiler fortsetzen

Nach Einfügen der Zusammenfassung in neuen Thread nicht sofort groß ändern:

1. Ziel unverändert?
2. Dateistand = Übergabebeschreibung?
3. Beim „nächsten einzigen Schritt“ starten — nicht neu divergieren

So vermeiden Sie Abhängigkeit von komprimiertem, lückenhaftem oder verzerrtem altem Kontext.

Gute Übergabe erzählt keine Historie — sie sagt der nächsten Öffnung sofort: wo, was als Nächstes, wie prüfen.

---

**Status:** verified  
**Gilt für:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen aktuelle OpenAI-Developers-Hinweise zu Langzeitaufgaben, dauerhaften Zielen und Codex-Kollaboration; nur stabile Methode „Übergabe hilft der nächsten Weiterarbeit“ — keine festen Regeln zu Client-Übergabe-Buttons oder -Flows.  
**Zuletzt geprüft:** 2026-07-26
