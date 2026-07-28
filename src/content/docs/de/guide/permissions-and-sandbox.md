---
title: Berechtigungen und Sandbox
description: "Freigabe, Ausführungsisolation und Netzwerkgrenzen verstehen — Codex sicher nutzen."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 14
---

# Berechtigungen und Sandbox

Codex sollte riskante Operationen nicht ohne Zustimmung ausführen. **Freigabe** ist das zentrale Tor der Mensch-Maschine-Zusammenarbeit; die **Sandbox** begrenzt Dateisystem und Teile der Systemfähigkeiten, die der Agent erreichen kann.

## Inhalt dieser Seite

Viele, die „Berechtigung“, „Freigabe“, „Sandbox“ und „Netzwerkzugriff“ zum ersten Mal sehen, halten sie für ungefähr dasselbe — alles Sicherheitseinstellungen.

Genau diese Vermischung ist riskant: Du denkst, du erlaubst nur „weiter“ — und öffnest dabei gleichzeitig Grenzen für Dateischreiben, Befehle oder externes Netz.

Diese Seite trennt die Begriffe, damit du bei jeder Bestätigung weißt, was wirklich freigegeben wird.

## Diese Begriffe zuerst trennen

So kannst du sie aufteilen:

- **Freigabe**: Soll es dich zuerst fragen?
- **Sandbox**: Selbst wenn es will — wohin darf es höchstens greifen?
- **Netzwerkzugriff**: Darf Information nach draußen — oder von draußen geholt werden?

Sie wirken gemeinsam aufs Ergebnis — sind aber nicht dasselbe.

## Worauf du meist achten solltest

- Darf es Pfade außerhalb des aktuellen Projekts lesen/schreiben?
- Darf es online gehen?
- Darf es bestimmte Shell-Befehle ausführen?
- Hat das Team verpflichtende Politiken ausgegeben (Managed Config)?

## Sandbox und Netzwerk

Die **Sandbox** verkleinert die Fläche für Fehlbedienung. **Netzwerkzugriff** ist eine weitere Risikoebene: Sensible Prompt-Inhalte können abfließen, oder unzuverlässige Daten können hereinkommen.

Am Anfang oft so:

1. Erste Übung: unnötiges Netz aus oder nur klar benötigten Zugriff erlauben
2. Keine Produktions-Secrets in Übungsprojekte
3. Bei „ins Netz / sensible Pfade schreiben“ erst verstehen, dann freigeben

## Häufige Missverständnisse

### Ein Dialog heißt nicht automatisch Gefahr

Viele normale Operationen lösen Freigabe aus, z. B.:

- Abhängigkeiten installieren
- Außerhalb des Projekts schreiben
- Browser oder System-Apps öffnen
- Externe Websites oder APIs anfassen

Entscheidend ist: **Braucht der aktuelle Schritt diese Aktion wirklich?** Nicht nur, ob ein Dialog erscheint.

### Kein Dialog = kein Risiko

Erlaubt die aktuelle Sandbox eine Operationsklasse schon, oder hast du Regeln früher gelockert, fragt Codex vielleicht nicht erneut.

Risiko nur am Dialog festzumachen reicht nicht — auch die Umgebungskonfiguration zählen.

## Bei Berechtigungsanfragen so urteilen

Bei jeder berechtigungsbezogenen Anfrage drei Fragen:

1. Ist dieser Schritt für die aktuelle Aufgabe nötig?
2. Gehen Daten oder Pfade über das hinaus, was ich erwartet habe?
3. Weiß ich bei Fehlern, wie ich rückgängig mache oder nachbessere?

Fehlen zwei von drei Antworten: Nicht freigeben — zuerst erklären lassen, warum dieser Schritt nötig ist.

## Schichten

| Schicht | Inhalt | Wo lesen |
|---|---|---|
| Konzept (diese Seite) | Warum Freigabe und Isolation nötig sind | — |
| Produktunterschiede | Wie Einstiege Bestätigungen zeigen | [CLI Freigaben und Sandbox](/guide/cli/approvals-and-sandbox/) · [Desktop-App-Einstellungen](/guide/desktop-app/settings/) |
| Prompt-Strategie | Wie du Berechtigungsgrenzen in der Aufgabe angibst | [Einschränkungen und Grenzen](/prompts/constraints-and-boundaries/) |

Offizielle Politiken und Defaults können sich ändern — prüfe [OpenAI Codex](https://developers.openai.com/codex).

Freigabe fragt „soll es weiter?“; Sandbox begrenzt „auch wenn weiter — wie weit höchstens?“. Beide Schichten zusammen machen die Grenze klarer.

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Überprüfungsgrundlage:** OpenAI Developers stellt weiterhin den offiziellen Codex-Einstieg bereit; diese Seite erklärt nur, dass Freigabe, Sandbox und Netzwerkzugriff unterschiedliche Sicherheitsgrenzen sind, und verweist auf Produktkapitel für konkretes Verhalten — ohne aktuelle Defaults oder eine präzise Berechtigungsmatrix zu behaupten.  
**Zuletzt überprüft:** 2026-07-26
