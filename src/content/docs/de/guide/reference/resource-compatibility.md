---
title: "Pets und Themes: Kompatibilitäts- und Wiederherstellungsprotokoll"
description: Herkunft, Laden, Interaktion, Deaktivierung und Wiederherstellung visueller Ressourcen nach Version dokumentieren, ohne eine Dokumentationsprüfung als Installationstest auszugeben.
contentType: reference
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Vorlage für ein noch auszufüllendes Testverfahren. Für Pets und Themes liegen auf dieser Website derzeit keine abgeschlossenen Tests der Installation und Deinstallation im Client vor.
locale: de
source_locale: zh-CN
source_revision: "96ff34f"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
---

Kompatibilität gilt immer für eine bestimmte Kombination von Versionen. Ein gültiger Paketaufbau, richtig dimensionierte Bilder oder eine Oberfläche, die sich öffnen lässt, beweisen für sich genommen weder funktionierende Animationszustände noch eine erfolgreiche Deaktivierung und Wiederherstellung.

## Derzeitige Belege

Am 2026-09-18 wurde die `Info.plist` der lokalen App nur lesend geprüft. Die Client-Kennung lautete `com.openai.codex`, die Version `26.911.61220` und die Build-Nummer `9647`. Bei dieser Prüfung wurde weder ein Pet noch ein Theme geladen oder die Client-Konfiguration verändert. **Versionskombinationen mit abgeschlossenen Tests für Installation, Wiedergabe, Wechsel und Wiederherstellung: bisher keine.**

Nutzen Sie die Anleitungen zu [Pet-Installation](/de/pets/install/), [Pet-Erstellung](/de/pets/create/) und [Themes](/de/theme/) zusammen mit den jeweiligen Ressourcen- und Client-Versionen. Aussagen von Drittprojekten müssen ihrer Quelle zugeordnet bleiben; stellen Sie sie nicht als Tests dieser Website dar.

## Kopierbare Protokollvorlage

```text
Protokolltyp: Pet / Theme
Status: nicht ausgeführt / läuft / bestanden / fehlgeschlagen / Ergebnis unklar
Testdatum:
Testende Person:
Betriebssystem und Architektur:
Client-Version und Build:
Name und Version der Ressource oder des Werkzeugs:
Ursprüngliche Quell-URL und zugehöriger Tag/Commit:
Name der heruntergeladenen Datei und SHA-256:
Urheber der Ressourcen und Lizenz:
Zustand vor Installation und Ort der Sicherung (vor Veröffentlichung anonymisieren):
Tatsächlich ausgeführte Installationsschritte:
Nachweise für Laden und Oberfläche:
Prüfung von Animation oder Interaktion:
Schritte und Ergebnis der Deaktivierung:
Schritte und Ergebnis der Wiederherstellung:
Erneute Prüfung nach Neustart:
Fehlerprotokolle und offene Fragen:
Nicht getestete Plattformen, Zustände oder Funktionen:
```

Lassen Sie nicht ausgeführte Punkte leer oder kennzeichnen Sie sie als nicht ausgeführt. Tragen Sie nicht null Zeit, „bestanden“ oder eine vermutete Version ein. Öffentliche Protokolle sollten anonymisierte Pfade und Testbilder ohne echte Aufgabeninhalte verwenden.

## Pets prüfen

Validieren Sie zuerst JSON und Ressourcenpfade. Prüfen Sie anschließend im Client Auswahl, Laden, transparenten Hintergrund, Aktionswechsel und Größenänderung des Fensters. Falls ein Atlas ein Versionsfeld hat, muss es zum vorgesehenen Zeilen- und Spaltenformat passen. Dass sich ein Bild öffnen lässt, beweist nicht, dass der Client es gemäß der richtigen Formatversion interpretiert.

Wechseln Sie zum Deaktivieren zunächst auf eine eingebaute Ressource oder schalten Sie Pets ab. Verschieben Sie das benutzerdefinierte Paket in eine Sicherung außerhalb des durchsuchten Verzeichnisses. Aktualisieren oder starten Sie neu und prüfen Sie, dass es nicht mehr erscheint. Zur Wiederherstellung legen Sie dasselbe Paket zurück und prüfen das Laden erneut. Ein Umbenennen innerhalb des durchsuchten Verzeichnisses reicht nicht aus. Löschen Sie nicht das gesamte Konfigurationsverzeichnis.

## Themes prüfen

Dokumentieren Sie Erscheinungsbild und Interaktion derselben Seiten vor und nach der Aktivierung. Prüfen Sie mindestens Startseite, Aufgabe, Eingabefeld, Suche, Fehlermeldungen und erreichbare Freigabeansichten. Kennzeichnen Sie nicht erreichbare Ansichten als ungetestet. Führen Sie keine tatsächlich riskante Aktion nur zum Testen einer Schaltfläche aus.

Öffnen Sie nach der Wiederherstellung den normalen Client erneut. Prüfen Sie Darstellung und Bedienung sowie, dass das Theme nicht selbstständig neu startet oder erneut eingeschleust wird. Prüfen Sie die Wiederherstellung der Oberfläche und das Schließen der Debug-Verbindung getrennt. Halten Sie ein Ergebnis als offen fest, wenn es nicht bestätigt werden kann.

## Wann erneut geprüft werden muss

Wiederholen Sie die Schritte, wenn sich Client, System, Theme-Engine, Pet-Format oder Ressourcenpaket ändern. Bewahren Sie das alte Protokoll auf und ergänzen Sie die neue Versionskombination, statt nur das Prüfdatum zu aktualisieren. Stellen Sie bei einem Fehler zuerst eine bekannte funktionierende Konfiguration wieder her und untersuchen Sie danach die neue Änderung gesondert.
