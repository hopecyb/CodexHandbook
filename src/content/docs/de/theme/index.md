---
title: "Codex-Themes"
description: "Bei Themes von Drittanbietern Quelle, Version, Bedienung und Wiederherstellung prüfen und Projektangaben von eigenen Tests dieses Handbuchs unterscheiden."
contentType: guide
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: "Projekt-Repository, Releases und Installationsanleitung wurden gelesen. Das Theme wurde nicht installiert; Oberfläche und Deinstallations-Wiederherstellung wurden nicht getestet. Eine Kompatibilitätsgarantie wird nicht gegeben."
  evidence:
    - label: "Projektbeschreibung von Dream Skin"
      href: https://github.com/Fei-Away/Codex-Dream-Skin
    - label: "macOS-Anleitung für Installation und Deinstallation"
      href: https://github.com/Fei-Away/Codex-Dream-Skin/blob/v1.5.18/docs/install-macos.md
    - label: "Release-Pakete und Versionsverlauf"
      href: https://github.com/Fei-Away/Codex-Dream-Skin/releases
locale: de
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: "4ecfa1c"
---

Codex Dream Skin ist ein Desktop-Theme eines Drittanbieters. Laut Projektbeschreibung verändert es das Erscheinungsbild über eine lokale CDP-Verbindung, ohne das offizielle Installationspaket zu ändern. Das ist die Darstellung des Projekts; dieses Handbuch hat Datei- und Netzwerkverhalten sowie Oberflächenkompatibilität nicht für alle Versionen geprüft.

![Illustration des Theme-Erscheinungsbilds](/theme/codex-dream-skin/article/codex-dream-skin-home.jpg)

Die hier vorhandene Abbildung ist kein Nachweis aus der aktuellen Versionsprüfung. Sie belegt auch nicht, dass Eingabefeld, Genehmigungsschaltflächen und alle Aufgabenansichten richtig funktionieren.

## Version und Prüfstatus

| Punkt | Ergebnis dieser Prüfung |
|---|---|
| Quelle | [Projekt-Repository](https://github.com/Fei-Away/Codex-Dream-Skin) und [Releases](https://github.com/Fei-Away/Codex-Dream-Skin/releases) |
| Beobachtete Version | [v1.5.18](https://github.com/Fei-Away/Codex-Dream-Skin/releases/tag/v1.5.18), geprüft am 18.09.2026, Commit `34335d27d54300eccb325cc652f6c93fef428b84`; nicht installiert |
| Lokaler Client | Info.plist nur lesend geprüft: 26.911.61220, Build 9647, Kennung com.openai.codex |
| Getestete Kombination von Theme und Client | Keine; Installation, Bedienung und Deinstallation nicht getestet |
| Windows-Kompatibilität | Von diesem Handbuch nicht getestet |
| Wiederherstellung | Nicht getestet; Schritte und Prüfkriterien folgen |

Laut Release-Notizen wurden einige Oberflächenkorrekturen mit dem vorgelagerten macOS Codex 26.901.41123 geprüft. Das unterscheidet sich von der hier erfassten 26.911.61220 und belegt daher keine Kompatibilität dieser Kombination. Der macOS-Installationslink ist auf v1.5.18 festgelegt; für andere Versionen gilt der jeweilige Tag.

Die Client-Version liefert Umgebungsdaten, aber keinen Beleg für Theme-Kompatibilität. Halten Sie eigene Versuche im [Kompatibilitäts- und Wiederherstellungsprotokoll](/de/guide/reference/resource-compatibility/) fest.

## Vor der Installation

1. Wählen Sie eine bestimmte Version auf der Release-Seite. Notieren Sie Paketname, Download-Adresse und SHA-256. Falls der Herausgeber eine Prüfsummendatei anbietet, vergleichen Sie diese mit dem Paket. Ein übereinstimmender Hash belegt gleiche Dateien, nicht die Sicherheit des Programms.
2. Sichern Sie Client- und Betriebssystemversion, Theme-Einstellungen sowie Kopien eigener Bilder, für die Sie Nutzungsrechte haben. Notieren Sie den Speicherort.
3. Prüfen Sie zuerst ohne Theme Startseite, Aufgabenansicht, Eingabe, Scrollen, Suche und Genehmigungsdialog als Vergleichsbasis.
4. Lesen Sie Installations-, Update- und Deinstallationsanleitung für genau diese Version. Die Dokumentation auf main kann neuer sein als das Installationspaket.

Für macOS lesen Sie die [Installationsanleitung des Projekts](https://github.com/Fei-Away/Codex-Dream-Skin/blob/v1.5.18/docs/install-macos.md), für Windows die [Windows-Anleitung](https://github.com/Fei-Away/Codex-Dream-Skin/blob/main/docs/install-windows.md). Führen Sie eine Meldung „beschädigt“ oder eine Systemsperre nicht pauschal auf fehlende Signierung zurück. Prüfen Sie Quelle, Paketintegrität und konkrete Fehlermeldung, bevor Sie fortfahren.

## Was nach einem Bildwechsel zu prüfen ist

Das Projekt bietet Hintergrundbild- und Theme-Verwaltung; Menünamen hängen von der Version ab. Verwenden Sie Bilder mit entsprechenden Rechten und prüfen Sie hellen und dunklen Modus, Fenstergrößen und echte Aufgabenansichten.

- Bleiben Eingabe, Schaltflächen und Genehmigungsinformationen lesbar, anklickbar und fokussierbar?
- Verdeckt der Hintergrund Suchergebnisse, lange Ausgaben, Code-Diffs oder Fehlermeldungen?
- Entspricht das angezeigte Theme nach Seitenwechsel und Neustart der Auswahl?
- Kehrt nach dem Ausschalten des Themes die Originaloberfläche zurück, und tritt das Problem weiter auf?

Wenn Inhalte verdeckt oder Bedienelemente unbrauchbar sind, verwenden Sie das Theme nicht weiter und stellen Sie die Oberfläche wieder her. Überdecken Sie das Problem nicht mit weiteren Stilebenen.

## Deinstallation und Wiederherstellung

Die macOS-Anleitung verlangt zunächst „Original wiederherstellen und deinstallieren“ in der Menüleiste, erst danach wird die Theme-App entfernt. Eigene Themes und Bilder können separat behalten oder gelöscht werden. Sichern Sie benutzerdefinierte Ressourcen vorher. Unter Windows folgen Sie der Anleitung der jeweiligen Version, nicht den macOS-Pfaden.

Die folgenden Schritte sind Empfehlungen dieses Handbuchs zur Prüfung der Wiederherstellung, kein Protokoll abgeschlossener Tests:

1. Speichern Sie die Arbeit im Client und notieren Sie das aktuelle Theme und zu bewahrende Dateien.
2. Verwenden Sie den Wiederherstellungsablauf des Theme-Tools und behalten Sie Meldungen über Erfolg, Fehlschlag oder ungeklärten Status.
3. Öffnen Sie Codex über den normalen Einstieg erneut und prüfen Sie Hintergrund, Text, Eingabe und Aufgabennavigation.
4. Stellen Sie sicher, dass das Theme-Tool nicht mehr automatisch startet oder erneut injiziert. Prüfen Sie nötigenfalls Prozesse und Debug-Verbindungen, ohne ähnlich benannte Prozesse wahllos zu beenden.
5. Entfernen Sie die App erst nach erfolgreicher Prüfung. Behalten Sie eigene Bilder, bis Sie getrennt über deren Entfernung entscheiden.

Eine Sicherung, das Ende des Deinstallationsprogramms oder ein geschlossenes Theme-Fenster beweisen für sich allein keine Wiederherstellung. Bei unklarem Ergebnis Protokolle sichern und Projekt-Issues prüfen; behaupten Sie keinen Erfolg. Löschen Sie nicht das gesamte Codex-Konfigurationsverzeichnis, um das Theme zu entfernen.

## Grenzen dieser Erkenntnisse

CDP kann Seiteninhalte verändern. „Verändert das offizielle Installationspaket nicht“ bedeutet daher nicht, dass die Bedienung unbeeinflusst bleibt. Nach Änderungen der Oberfläche erneut prüfen. Angaben des Projekts über lokale Verarbeitung, Netzwerkzugriff und Wiederherstellung sind für die konkrete Version zu beurteilen. Dieses Handbuch garantiert weder, dass Bilder nie hochgeladen werden, noch Ein-Klick-Wiederherstellung für alle Versionen oder verlustfreie Updates durch Überschreiben.
