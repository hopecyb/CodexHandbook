---
title: IDE-Fehlerbehebung
description: Probleme beim Laden der Erweiterung, Kontext und Synchronisation.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 90
---

IDE-Fehlerbehebung unterscheidet sich von der CLI:  
Viele Symptome wirken wie „Plugin kaputt“, sind aber oft **Workspace, Login-Status oder Editor-Kontext** schief.

Bei IDE-Problemen zuerst trennen: „Erweiterung startet nicht“ vs. „Erweiterung läuft, aber der Kontext stimmt nicht“.

| Symptom | Zuerst versuchen |
|---|---|
| Erweiterung reagiert nicht | Erweiterung und Editor aktualisieren; Host-Logs der Erweiterung prüfen |
| Login-Status verloren | Neu authentifizieren |
| Kontext falsch | Workspace-Wurzel bestätigen |

## Zuerst drei Klassen

- **Gar keine Reaktion:** meist Ladeproblem der Erweiterung
- **Öffnet, aber unbrauchbar:** meist Login / Authentifizierung
- **Antwort falsch, falsche Stelle geändert:** meist Workspace oder Kontext

## Häufige Missverständnisse

### 1. Icon ist da = Erweiterung ok

Icon heißt nur installiert — nicht, dass die aktuelle Sitzung gesund ist.

### 2. Falscher Kontext = schwaches Modellverständnis

Oft liegt es am geöffneten Wurzelverzeichnis, am Dateirahmen oder am Workspace selbst — nicht am „Verstehen“.

### 3. Neuinstallation als erster Schritt?

Nicht sofort.

Zuerst prüfen:

- Editor-Version
- Erweiterungsversion
- Login-Status
- aktueller Workspace

Viele Probleme sind hier schon lokalisiert.

## Prüfpflichtreihenfolge

1. Reagiert die Erweiterung?
2. Login-Status bestätigen
3. Workspace-Wurzel und geöffnete Dateien bestätigen
4. Sonst Erweiterungs-Logs

Häufigste Ursachen der IDE-Fehlerbehebung: Workspace, Login oder Kontextquelle — nicht zwingend kaputte Erweiterung.

Official: [OpenAI-Codex-Dokumentation](https://developers.openai.com/codex).

---

**Status:** verified  
**Anwendbare Produkte:** IDE  
**Prüfgrundlage:** OpenAI bestätigt die IDE-Erweiterung weiterhin als formalen Einstieg; diese Seite teilt IDE-Probleme in „keine Reaktion / Login / Workspace und Kontext“ — stabiles Fehlerbehebungsgerüst, kein Handbuch für spezifische Fehlercodes.  
**Zuletzt geprüft:** 2026-07-26
