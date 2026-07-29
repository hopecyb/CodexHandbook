---
title: Codex-Theme-Skins
description: "Verstehen Sie, was Codex Dream Skin ist, wie Installation und Hintergrundwechsel funktionieren, warum CDP-Injektion genutzt wird und welche Sicherheitsgrenzen vor der Nutzung wichtig sind."
locale: de
source_locale: zh-CN
translation_status: draft
translated_at: 2026-07-29
---

# Codex-Theme-Skins

Codex eine neue Oberfläche zu geben klingt zunächst nach reiner Optik. Dahinter steckt jedoch ein vollständiger Desktop-Theme-Ansatz: native Codex-Interaktionen bleiben erhalten, das offizielle Paket wird nicht verändert, und Hintergrund, Farben sowie visuelle Atmosphäre werden von außen in die echte Oberfläche injiziert.

## Was ist Codex Dream Skin?

Codex Dream Skin ist ein Open-Source-Projekt für Themes der Codex-Desktop-App. Es legt ein 16:9-Hintergrundbild unter Codex und passt es an Hell-/Dunkelmodus, Fokusposition und Farbschema an. Seitenleiste, Vorschlagskarten, Projektauswahl und Eingabefeld bleiben native interaktive Steuerelemente.

![Codex Dream Skin legt ein 16:9-Hintergrundbild auf die Codex-Startseite](/theme/codex-dream-skin/article/codex-dream-skin-home.jpg)

_Startseite der echten Codex-Desktop-App nach Anwendung des Themes; Seitenleiste, Karten und Eingabefeld bleiben native Kontrollen._

Der Ansatz unterscheidet sich deutlich vom früheren Ändern von Binärdateien:

| Ansatz | Ändert offizielle Dateien | Bricht Signatur | Native Kontrollen nutzbar | Bildfreiheit |
| --- | --- | --- | --- | --- |
| CDP-Injektion (Dream Skin) | Nein | Nein | Ja | Hoch |
| `app.asar` ändern | Ja | Ja | Teilweise | Mittel |
| Offizieller Hell-/Dunkelmodus | Nein | Nein | Ja | Keine |

`app.asar` zu ändern bedeutete früher: Ressourcen entpacken, CSS und Bilder bearbeiten, wieder packen. Das ist fragil, weil die Signatur ungültig wird, Updates neue Arbeit auslösen und Sicherheitssoftware anschlagen kann.

CDP-Injektion verändert keine offiziellen Binärdateien. Styles und Skripte werden über einen Debug-Port von außen injiziert, ohne `.app`, `app.asar` oder die Codesignatur anzufassen.

Möglich sind: Skin wechseln, Hintergrund wechseln, mehrere Themes speichern und die offizielle Optik mit einem Schritt wiederherstellen.

Nicht vorgesehen ist:

- Der Installer schreibt keine fremde API Key oder Base URL im Hintergrund; Theme und Relay-Konfiguration bleiben getrennt.
- Das offizielle Installationsverzeichnis und die Signatur werden nicht verändert.
- CDP bindet nur an `127.0.0.1`; während das Theme läuft, sollten unbekannte lokale Programme trotzdem vermieden werden.

Das Projekt erklärt ausdrücklich, dass es kein offizielles OpenAI-Produkt ist. Beim Wiederherstellen und Deinstallieren kehrt Codex zur offiziellen Optik zurück, und die CDP-Verbindung wird beendet.

Projektlinks:

| Typ | URL | Zweck |
| --- | --- | --- |
| Projekt-GitHub | [github.com/Fei-Away/Codex-Dream-Skin](https://github.com/Fei-Away/Codex-Dream-Skin) | Quellcode, README, Issues und Installationsanleitungen lesen |
| Projektwebsite | [codex-dream-skin.org](https://codex-dream-skin.org/) | Projektbeschreibung, Technik, Sicherheitsgrenzen und Tutorials |
| Downloads | [GitHub Releases](https://github.com/Fei-Away/Codex-Dream-Skin/releases) | macOS-`.dmg` und Windows-`.exe` herunterladen |
| Theme-Bibliothek / Online Studio | [DreamSkin.cc](https://dreamskin.cc/) | Themes ansehen, online testen, erstellen und einreichen |

## Installation und Einstieg

Öffnen Sie vor der Installation Codex einmal und prüfen Sie, dass die Desktop-App startet, Anmeldung funktioniert und sie sauber beendet werden kann. So findet das Theme-Tool die richtige lokale Codex-Umgebung.

### macOS

Unter macOS lädt man meist die `.dmg`-Datei aus den Releases des Projekts. Danach `Codex Dream Skin.app` nach Applications ziehen und Themes, Hintergründe sowie Wiederherstellung über die Menüleiste verwalten.

Meldet macOS, die App sei „beschädigt“ oder könne nicht geöffnet werden, blockiert Gatekeeper wahrscheinlich eine nicht signierte App. Erlauben Sie das Öffnen in Systemeinstellungen > Datenschutz & Sicherheit nur, wenn die Quelle vertrauenswürdig ist.

### Windows

Unter Windows lädt man meist den Installer aus den Releases oder nutzt den dokumentierten PowerShell-Ablauf. Nach der Installation verwalten Sie Themes und Hintergründe über das Symbol im Infobereich.

Zeigt SmartScreen eine blaue Warnung, fehlt meist ein Codesignatur-Zertifikat. Fahren Sie nur fort, wenn die Quelle vertrauenswürdig ist.

### Häufige Probleme

| Symptom | Ursache | Lösung |
| --- | --- | --- |
| macOS meldet „beschädigt“ | Nicht signierte App durch Gatekeeper blockiert | Systemeinstellungen -> Datenschutz & Sicherheit -> Dennoch öffnen |
| Windows-SmartScreen-Warnung | Codesignatur-Zertifikat fehlt | Weitere Informationen -> Trotzdem ausführen |
| Nach Installation keine Wirkung | Codex wurde vorher nicht einmal gestartet | Codex öffnen, anmelden, beenden, dann Dream Skin installieren |
| Theme fällt nach Codex-Update aus | Interne Pfade könnten sich geändert haben | Neuesten Installer herunterladen und darüber installieren |

Eine Installation darüber löscht gespeicherte Themes und Bilder nicht.

## Hintergründe und Theme-Verwaltung

Nach der Installation wählen Sie in der macOS-Menüleiste oder im Windows-Infobereich „Hintergrund ändern“ und wählen ein Bild.

![Theme-Vorschau und Wechsel in Codex Dream Skin](/theme/codex-dream-skin/article/codex-dream-skin-gallery.jpg)

_Nach dem Bildwechsel sollten Startseite, Seitenleiste, Eingabefeld und Task-Seiten geprüft werden, damit echte Arbeit lesbar bleibt._

Das Tool analysiert Helligkeit, dominante Farbe, Fokusposition und die ruhigere Bildseite lokal und erzeugt passende Theme-Variablen. Themes können gespeichert, benannt und mit einem Schritt gewechselt werden.

Gothic Void Crusade ist das Standard-Theme im öffentlichen Installer und stammt aus der Community. Eigene reine 16:9-Hintergründe können ebenfalls importiert werden.

Bildregeln:

- Empfohlen: `2560 x 1440` in 16:9, ohne eingebrannte Fenster, Seitenleisten, Text oder Logos.
- Das Motiv sollte nicht unter Eingabefeld, Seitenleiste oder Vorschlagskarten liegen.
- Zu helle, unruhige oder stark kontrastreiche Bilder verschlechtern die Lesbarkeit.
- Vor Veröffentlichung oder kommerzieller Nutzung Rechte an Bild, Figuren, Marken, Schriften und IP prüfen.

Nicht passende Bilder funktionieren oft trotzdem, können aber Motiv oder Textlesbarkeit beeinträchtigen.

## Wie es funktioniert

### CDP-Injektion

CDP, das Chrome DevTools Protocol, ist das Remote-Debugging-Protokoll von Chromium. Chrome DevTools nutzt es etwa beim Debuggen mobiler Seiten: Der Browser öffnet einen lokalen Debug-Port, externe Tools können CSS und JavaScript injizieren.

Codex Desktop basiert auf Electron und damit ebenfalls auf Chromium. Der Ablauf lässt sich so vereinfachen:

![CDP-Injektionsablauf aus dem Artikel](/theme/codex-dream-skin/article/cdp-injection-flow.png)

```text
Theme-Tool starten
  -> Codex Desktop mit lokalem CDP-Endpunkt öffnen
  -> Mit Codex' Chromium-Rendererprozess verbinden
  -> Theme-CSS und dekoratives DOM injizieren
  -> Codex läuft weiter, während die Theme-Schicht die Optik übernimmt
```

Beim Stoppen prüft der Injector PID, ausführbaren Pfad und Startzeit gemeinsam, um nicht den falschen Prozess zu beenden.

Das injizierte CSS erhält die native Interaktion von Seitenleiste, Eingabefeld und Karten. Das Hintergrundbild liegt darunter, eine transluzente Verlaufsebene schützt die Lesbarkeit.

### Adaptive Farben: lokal berechnet, nicht hochgeladen

Nach einem Bildwechsel reduziert Dream Skin das Bild lokal in Canvas, extrahiert dominante Farbe, Helligkeit und Fokusposition und berechnet CSS-Variablen im HSL-Farbraum.

Im Dunkelmodus startet es mit einer dunkleren dominanten Farbe; im Hellmodus mit neutralen hellen Grautönen. Bei jedem Bildwechsel wird die Palette automatisch neu berechnet.

Auf der Startseite bleiben volles Bild und Verlauf erhalten. Auf Task-Seiten wird der Hintergrund zu einer ruhigeren Umgebungsebene, damit der Inhalt Vorrang hat.

## Zum Schluss

CDP-Injektion thematisiert eine App von außen, ohne offizielle Binärdateien zu ändern. Theoretisch gilt das nicht nur für Codex, sondern für jede Electron-App mit unterstütztem CDP-Debug-Port.

Der Wunsch nach persönlicheren Entwicklungsumgebungen ist real. Ein gutes Theme ist nicht nur „cooler“; es erhält native Interaktionen, ist wiederherstellbar, prüfbar und vermischt visuelle Anpassung nicht mit Modellkonfiguration.
