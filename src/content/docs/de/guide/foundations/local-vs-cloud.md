---
title: Lokal und Cloud
description: "Vergleicht Einsatzszenarien für lokale Aufgaben und Cloud-Aufgaben."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 50
---

„Lokal“ und „Cloud“ klingen technisch — kurz gesagt: Lokal heißt auf deinem Rechner arbeiten, Cloud heißt auf einer entfernten Maschine.

Willst du Codex zuerst nur in Gang bringen, ist **lokal** meist einfacher.

| | Lokale Aufgabe | Cloud-Aufgabe |
|---|---|---|
| Laufort | Deine Maschine / lokale Umgebung | Cloud-Umgebung |
| Geeignet für | Schnelle Iteration, lokale Dateien, Debugging mit lokalen Secrets | Remote-Repos, lange Aufgaben, standardisierte Umgebung |
| Achtung | Lokale Berechtigungen und Fehländerungsrisiko | Umgebungskonfiguration, Secret-Injection, Netzwerkpolitik |

## Nutzungserlebnis

Ungefähr so:

- **Lokale Aufgabe**: Du sitzt vor deinem Rechner, Codex hilft am aktuellen Projekt
- **Cloud-Aufgabe**: Du gibst die Aufgabe an eine remote Arbeitsmaschine, die dort weiterläuft

Der Unterschied ist nicht nur der Ort:

- Auf welche Dateien zugegriffen werden kann
- Ob vorhandene lokale Software und Umgebung direkt nutzbar sind
- Wie lange Aufgaben laufen können
- Ob das Team eine einheitliche Umgebung braucht

## Warum viele Anfänger lokal starten

Lokal ist leichter zu verstehen und zu prüfen.

- Du weißt, die Dateien liegen auf deinem Rechner
- Du öffnest das Projekt leichter, siehst Ergebnisse, korrigierst manuell
- Bei Fehlern ist der Rückweg klarer

Beim ersten Einstieg zählt der geschlossene Aufgabenkreislauf mehr als sofort Cloud.

## Häufige Missverständnisse

### 1. Cloud ist nicht automatisch „fortgeschrittener“ oder besser für echte Arbeit

Geht es um lokales Projekt ändern, lokale Dateien ansehen, schnell ein paar Versuche — lokal ist direkter.

### 2. Ist lokal „unprofessionell“?

Viel echte Entwicklungsarbeit passiert lokal. Ob Cloud, hängt vom Aufgabentyp ab — nicht vom „Premium-Gefühl“.

### 3. Wie soll ich wählen?

So entscheiden:

- **Bestehendes Projekt auf deinem Rechner ändern**: lokal
- **Lange Aufgabe, im Hintergrund laufen lassen, remote Repo-Umgebung**: Cloud erwägen

## Wenn du unsicher bist

Regel: Was lokal geht, nicht sofort in die Cloud schieben.

Zu Cloud wechseln, wenn du wirklich brauchst:

- Sehr lange Laufzeit
- Einheitliche Umgebung
- Anbindung an remote Repos oder entfernte Ressourcen
- Deinen Rechner nicht belasten

Viele Anfänger starten mit **lokal + Desktop-App**. Cloud-Details: [Web- und Cloud-Überblick](/guide/web-and-cloud/). Wechsel in der App: [Lokale und Cloud-Aufgaben](/guide/desktop-app/local-and-cloud-tasks/).

Lokal eignet sich besser, um den Ablauf zu verstehen und Kleines zu ändern. Cloud eignet sich besser für längere, standardisierte, remote-kollaborative Aufgaben.

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Überprüfungsgrundlage:** Das OpenAI Help Center unterscheidet in „Using Codex with your ChatGPT plan“ weiterhin „local workflows run on your device“ und „cloud tasks run in OpenAI-managed environments“; „ChatGPT Work and Codex“ bestätigt, dass Work on web/mobile in der Cloud läuft. Diese Seite fasst nur Einsatzszenarien und Abwägungen lokaler vs. Cloud-Aufgaben zusammen und bindet keine konkreten Tarife oder Einstiegsdetails.  
**Zuletzt überprüft:** 2026-07-26
