---
title: Sensibler Kontext
description: Geheimnisse, Privatsphäre und nicht teilbare Materialien.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 70
---

Alles, was du nicht willkürlich gesehen, kopiert, weitergegeben oder dauerhaft in Aufgabenprotokollen haben willst, zuerst als sensible Information behandeln.

## Warum zuerst urteilen

Viele Sicherheitsprobleme entstehen nicht aus Absicht, sondern aus „erst mal das Problem lösen“.

Zum Beispiel:

- zum Debuggen die ganze `.env` einfügen
- zum Verstehen Roh-Kundendaten einfügen
- aus Bequemlichkeit Fehlertexte mit echten Tokens 1:1 einfügen

Kurzfristig bequem, danach schwer zu heilen.

Nicht an Codex geben (Übung oder Produktion):

- API-Schlüssel, Passwörter, Session-Cookies
- ungeschwärzte Kundendaten, Ausweisnummern usw.
- internes, unveröffentlichtes Material, das Verträge nicht freigeben

Platzhalter: `YOUR_API_KEY`. Bei Leak: Secrets nach Organisationsprozess rotieren.

## Unsicher? Zwei Fragen

1. Wäre Risiko, wenn Unbeteiligte das sähen?
2. Unwohl, wenn das dauerhaft in Aufgabenprotokollen bliebe?

Ein „ja“ → als sensibel behandeln.

## Nicht auf „sollte schon gehen“ setzen

Beim ersten Tool-AI-Einsatz oft:

- „nur kurz eingefügt“
- „es schaut nur mal rein“
- „die Datei geht doch nicht wirklich raus“

Sobald Infos im Aufgabenfluss sind: als sensibel behandeln. Kontrolle besser vorher.

## Leicht übersehen

Neben Passwort und Schlüssel oft sensibel:

- Kundenlisten
- Telefon, E-Mail, Ausweisnummern
- interne Screenshots, unveröffentlichte Pläne
- Configs mit echten Produktionsadressen oder Tokens

Sensibel ist mehr als ein `sk-...`-Schlüssel.

## Wie weit anonymisieren?

Nicht alles löschen — **minimale Info, die zum Lösen nötig ist**, behalten.

Vorgehen:

- Struktur behalten
- echte Werte ersetzen
- Identifikatoren entfernen
- felder ohne Bezug zum aktuellen Problem streichen

Behalten z. B.:

- Feldnamen
- Fehlertyp
- Aufrufreihenfolge

Ersetzen:

- echte Schlüssel
- echte E-Mails
- echte Telefonnummern
- echte Kundennamen

## Wenn Bereitstellung nötig: sicherer

Stabiler:

- Schlüssel durch Fake/Platzhalter ersetzen
- echte Nutzerdaten anonymisieren
- nur Felder behalten, die zum Debuggen nötig sind
- Phänomen beschreiben statt ganze sensible Rohblöcke

Beispiel:

```text
Echten API Key durch YOUR_API_KEY ersetzen, echte E-Mail durch user@example.com.
```

## Schon versehentlich weitergegeben?

Nach Risiko:

1. Weitere Verbreitung stoppen
2. Schlüssel, Passwort oder Token sofort rotieren
3. Nach Organisationsprozess melden und nachbessern

Beim Problemlösen Default: nur **minimale nötige Debug-Info**; anonymisieren wo möglich, Platzhalter wo möglich.

---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite erklärt nur Minimierung und Anonymisierung sensibler Informationen; Konzepte, Risiko-Beispiele und Handlungsempfehlungen geprüft, ohne volatile Produktfakten.  
**Zuletzt geprüft:** 2026-07-26
