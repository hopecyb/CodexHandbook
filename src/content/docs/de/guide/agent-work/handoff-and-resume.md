---
title: Übergabe und Fortsetzen
description: Unvollendete Arbeit über mehrere Sitzungen hinweg fortsetzen.
locale: de
source_locale: zh-CN
source_revision: "1ee17e9"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 40
legacyVerification:
  status: verified
  products: "App / CLI / IDE / Cloud"
  basis: Kreuzgeprüft gegen aktuelle OpenAI-Developers-Hinweise zu Langzeitaufgaben, dauerhaften Zielen und Codex-Kollaboration; nur stabile Methode „Übergabe hilft der nächsten Weiterarbeit“ — keine festen
    Regeln zu Client-Übergabe-Buttons oder -Flows.
  checkedAt: '2026-07-26'
---

Ein häufiges Problem:

> **Diesmal nicht fertig — wie weiter beim nächsten Mal?**

Ohne Übergabe passiert beim Wiederöffnen leicht:

- Sie selbst vergessen, wo Sie standen
- Codex weiß nicht, welche Constraints noch gelten
- Ein neuer Dialog verliert den bisherigen Kontext und beginnt wieder von vorn

![Illustration: Ein Agent übergibt Übergabenotizen und eine Fortschrittskarte an einen anderen, dahinter ein Kalender und ein Aufgabenboard mit Lesezeichen](/illustrations/handoff-and-resume.webp)

## Was Übergabe hinterlässt

Eine Übergabe hinterlässt eine kurze Anleitung für die nächste Person, die die Arbeit fortsetzt.

Das kann sein:

- Sie selbst in ein paar Stunden
- Eine neu eröffnete Aufgabe
- Eine andere Person
- Codex bei der Fortsetzung der Arbeit

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

So wird beim Fortsetzen deutlich, ob Zeit fehlte, eine Freigabe aussteht oder ein echtes Hindernis vorliegt.

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
- Darstellung des Titelbilds von `/guide/foundations/local-vs-cloud/` prüfen

## Stabiler fortsetzen

Nach Einfügen der Zusammenfassung in neuen Thread nicht sofort groß ändern:

1. Ziel unverändert?
2. Dateistand = Übergabebeschreibung?
3. Beim „nächsten einzigen Schritt“ starten — nicht neu divergieren

So vermeiden Sie Abhängigkeit von komprimiertem, lückenhaftem oder verzerrtem altem Kontext.

Eine gute Übergabe wiederholt nicht die gesamte Vorgeschichte. Sie zeigt sofort den aktuellen Stand, den nächsten Schritt und die nötige Prüfung.
