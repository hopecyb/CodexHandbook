---
title: Projektkontext
description: Projektbeschreibung und verzeichnisweite Hintergründe.
locale: de
source_locale: zh-CN
source_revision: 4e1818a
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

„Projektkontext“ meint langfristig stabile Hintergrundinformationen im Projekt, die bei vielen Aufgaben wiederkehren.

Zum Beispiel:

- wie Verzeichnisse organisiert sind
- welche Befehle üblich sind
- welche Code-Stil-Vereinbarungen gelten
- welche Dateien nicht leichtfertig geändert werden
- wie nach Abschluss abgenommen wird

Das jedes Mal mündlich zu wiederholen ist anstrengend und fehleranfällig.

## Was genau gemeint ist

Projektkontext = „wie in diesem Projekt langfristig standardmäßig zusammengearbeitet wird“.

Er beschreibt nicht, was diesmal konkret zu tun ist, sondern sagt Codex vorab:

- wie das Repo üblicherweise organisiert ist
- welche Gewohnheiten langfristig gelten
- welche Grenzen besser unberührt bleiben
- wie typischerweise verifiziert wird

So muss es bei jedem Projekteinstieg nicht von null Teamgewohnheiten raten.

## Warum hier leicht Probleme entstehen

Viele stecken beim ersten Codex-Einsatz alle Anforderungen in die aktuelle Aufgabe.

Kurzfristig funktioniert das, bald aber:

- jedes Mal neu erklären
- inkonsistente Formulierungen über Aufgaben hinweg
- Schlüsselregeln vergessen
- in langen Gesprächen geht wichtiger Hintergrund unter

Zwei Schichten helfen:

- **langfristig gültige Regeln** in den Projektkontext
- **besondere Anforderungen dieser Aufgabe** in den aktuellen Prompt

## Abgrenzung zur aktuellen Aufgabe

Einfachste Zweiteilung:

- **Projektkontext:** so läuft dieses Projekt üblicherweise
- **Aufgaben-Prompt:** was ich diesmal konkret will

Beispiel:

- „Komponenten einheitlich unter `src/components/`“ → Projektkontext
- „Diesmal nur Banner-Text der Startseite ändern“ → aktuelle Aufgabe

## Häufige Missverständnisse

### 1. Mehr Projektkontext = besser?

Wertvoll ist, was:

- langfristig gilt
- bei vielen Aufgaben gebraucht wird
- ohne Erwähnung leicht schiefgeht

Einmalige Details reinzupacken macht die Projektbeschreibung selbst zu Rauschen.

### 2. Wenn ich jede Aufgabe klar formuliere, brauche ich keinen Projektkontext?

Kurzfristig ja, langfristig anstrengend.

Bald:

- dieselben Sätze wiederholen
- inkonsistente Schreibweisen
- Regeln diesmal gesagt, nächstes Mal vergessen

### 3. Macht Projektkontext zu starr?

Nein — solange du ihn als langfristigen Default siehst, nicht als unbewegliches Dekret.

Echte Sonderwünsche gehören in die aktuelle Aufgabe.

## Wo üblicherweise ablegen

Stabile Vereinbarungen in die Projektbeschreibung, z. B. `AGENTS.md` oder projektspezifische Produktanweisungen:

- Verzeichnisstruktur
- übliche Befehle
- Code-Stil
- Verbote

Aufgaben-Prompts nur **diesmalige Unterschiede**; wiederholte lange Hintergründe auf Projektebene. Konfiguration tiefer in Meilenstein `06-customization`.

## Wann in den Projektkontext?

Wenn eine Angabe beides erfüllt:

1. nächstes Mal wahrscheinlich wieder nötig
2. Vergessen kostet wiederholt Fehler oder Zeit

## Was zuerst ablegen

Priorität haben meist:

- übliche Befehle
- Verzeichnisvereinbarungen
- Code-Stil
- Tabuzonen
- Default-Verifikationsweg

Was nächstes Mal wahrscheinlich wieder gebraucht wird, gehört in den Projektkontext — nicht jedes Mal neu tippen.

---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite erklärt nur, wie langfristiger Projektkontext abgelegt wird; Konzepte, Beispiele und Grenzen wurden geprüft, ohne Abhängigkeit von volatilen Produktfakten.  
**Zuletzt geprüft:** 2026-07-26
