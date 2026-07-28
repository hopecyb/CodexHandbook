---
title: Sandbox und Netzwerk
description: "Verstehe Ausführungsisolation, Netzwerkzugriff und Risikogrenzen."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


„Sandbox“ und „Netzwerk“ sind zwei verschiedene Dinge: Die Sandbox begrenzt, wohin es greifen darf; das Netzwerk begrenzt, wohin es verbinden darf.

Die **Sandbox** begrenzt Dateisystem und Teile der Systemfähigkeiten, die der Agent erreichen kann, und verkleinert die Fläche für Fehlbedienung. **Netzwerkzugriff** ist eine weitere Risikoebene: Sensible Informationen aus dem Prompt können abfließen, oder unzuverlässige Daten können hereinkommen.

## Warum diese beiden Limits wichtig sind

Ohne diese Grenzen kann ein falsches Aufgabenverständnis größere Schäden bedeuten, zum Beispiel:

- Verzeichnisse ändern, die du nicht anfassen wolltest
- Sensible Dateien lesen, die nicht gelesen werden sollten
- Aufgabeninhalte an externe Websites senden
- Daten oder Skripte unklarer Herkunft herunterladen

Sie sind eher Standard-Schutzgeländer — kein absichtliches Erschweren.

## Tipps zum Start

1. Beim Üben unnötiges Netzwerk aus oder nur klar benötigten Zugriff erlauben
2. Keine Produktions-Secrets in Übungsprojekte legen
3. Bei Anfragen „ins Netz / sensible Pfade schreiben“ erst verstehen, dann freigeben

## Häufige Missverständnisse

### 1. Heißt Sandbox, dass die Fähigkeit zu schwach ist?

Sandbox steuert vor allem Risiko — sie schwächt die Fähigkeit nicht absichtlich.

### 2. Mehr Netz ist besser?

Mehr Netz heißt:

- Komplexere Informationsquellen
- Kontakt zu unzuverlässigen Inhalten möglich
- Manche Aufgabeninhalte können zu externen Diensten gelangen

Beim Üben: Wenn es ohne Netz geht, zuerst ohne Netz.

### 3. Wie beurteile ich eine Berechtigungsanfrage?

Prüfe diese drei Punkte:

1. Braucht diese Aufgabe wirklich Netz?
2. Sind Pfad oder Website wie erwartet?
3. Kann ich bei Ablehnung einen sichereren Weg weitergehen?

## Anschaulicher Blick

Stell dir zwei Türen vor:

- **Sandbox-Tür**: Welche Dateien und Systembereiche darf es betreten?
- **Netzwerk-Tür**: Darf es nach draußen schauen und verbinden?

Beide Türen sind nicht nur technische Einstellungen — sie sind deine Risikosteuerung.

Produktseitige Einstiege: Desktop-App [Einstellungen](/guide/desktop-app/settings/); offizielle Details: [https://developers.openai.com/codex](https://developers.openai.com/codex).

Am Anfang lieber etwas enger begrenzen, als alle Türen zu öffnen, bevor du die Risiken verstehst.


---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Überprüfungsgrundlage:** Die aktuelle Codex-CLI-Dokumentation im OpenAI Help Center beschreibt Full Auto weiterhin als „sandboxed, network-disabled environment scoped to the current directory“ und unterscheidet das von Freigabemodi; diese Seite erklärt nur, dass Sandbox und Netzwerk zwei unterschiedliche Risikogrenzen sind und wie Anfänger den Zugriff enger halten sollten.  
**Zuletzt überprüft:** 2026-07-26
