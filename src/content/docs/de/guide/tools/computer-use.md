---
title: Computer Use
description: "Fortgeschrittene GUI-Bedienung über Bildschirm und Eingabegeräte — Szenarien, Risiken und Freigabe."
locale: de
source_locale: zh-CN
source_revision: c783afc
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 50
---

**Computer Use** lässt den Agent wie ein Mensch Bildschirm sehen, Zeiger bewegen, tippen — nicht nur Browser oder Terminal. Stärkste Fähigkeit, **höchstes Risiko und strengste Freigabe**.

Wirkt auf Bildschirm, Maus, Tastatur — andere Klasse als Browser und Terminal; vorsichtig aktivieren.

## Inhalt dieser Seite

- Arbeitsteilung mit Browser und Terminal
- Welche Aufgaben die Aktivierung lohnen
- Absicherung für Personen und Teams

## Fähigkeitsgrenzen

| Schicht | Typische Fähigkeit |
|---|---|
| Terminal | Shell, Skripte, CLI |
| Browser | Web-DOM, begrenzte Interaktion |
| Computer Use | Desktop-Apps, Systemdialoge, Multi-Fenster |

## Unterschied zu anderen Werkzeugen

Unterscheidung:

- Arbeit auf dem ganzen Desktop
- Wechsel zwischen Fenstern
- Echte Buttons und System-Popups

Reichweite von UI und Informationen meist größer.

Geeignet:

- Wiederholte Klicks in Software ohne API (unter Aufsicht)
- Daten zwischen Apps kopieren (unter Compliance)
- Verhalten der Desktop-App selbst prüfen

Nicht geeignet:

- Alltagscode (IDE + Terminal effizienter)
- Unbeaufsichtigte Produktionsoperationen
- Security-Software oder DRM umgehen

## Häufige Missverständnisse

### 1. Stärker = bevorzugt?

Wert klarer wenn:

- Aufgabe wirklich Desktop-GUI
- Kein leichteres, sichereres Werkzeug reicht

### 2. Ich schaue zu = kein Risiko?

Sicheres, aber möglich:

- Falscher Klick auf Bestätigen
- Falsches Fenster
- Sensible Screen-Infos in den Ablauf

### 3. Ersatz für alle GUI-Automation?

Besser temporäre Hilfe, Flow-Prüfung, GUI-Schritte ohne API — nicht stabile, langfristige, unbeaufsichtigte Produktionsautomation.

## Risikomodell

Fast wie **Tastatur und Maus dem Agent geben**:

- Mail, Chat, Dateimanager öffnen
- Bestätigungsdialoge falsch klicken
- Notifications mit Sensiblem auf dem Screen

Pflicht: [Berechtigungen und Freigabe](/de/guide/foundations/permissions-and-approvals/), [Sandbox und Netzwerk](/de/guide/foundations/sandbox-and-network/)

## Ob nutzen

Nur Code, Tests, Webseite, Recherche → meist leichteres Werkzeug zuerst.

Erwägen wenn:

- Desktop-App muss bedient werden
- Mehrere GUI-Fenster
- UI, die Browser und Terminal nicht erreichen

## Empfohlene Nutzung

1. **Dedizierte Umgebung**: VM oder Nebenkonto, keine Privacy-Fenster
2. **Aufgabe minimal**: „Formel im Calculator prüfen“ nicht „alle Mails“
3. **Human-in-the-loop**: sichtbar, jederzeit unterbrechbar
4. **Aufnahme/Log**: Team-Retros (Aufnahmen auch sensibel)
5. **Danach prüfen**: Dateisystem, Clipboard, offene Apps

Unternehmen können default deaktivieren — Managed Policy.

## Wahl vs. Browser

```text
Nur Webseite?           → Browser-Werkzeug
App außerhalb IDE?      → Computer Use (vorsichtiger)
Nur Code + Tests?       → Terminal + Dateiwerkzeug
```

Siehe [Werkzeugwahl](/de/guide/tools/tool-selection/)

## Direkt nutzbare Formulierung

```text
Nur Calculator und lokale Test-App; keine Mail, Chat, Dateimanager, Produktions-Backends.
Bei System-Bestätigung zuerst stoppen und erklären, dann weiter.
```

## Häufige Fehler

- Computer Use untrusted Projekts auf dem Hauptdesktop
- 2FA, Bank, Kundendaten auf dem Screen und weiter
- GUI-Automation als volle Teststrategie

## Abnahmeliste

- [ ] Nur in isolierter Umgebung
- [ ] Prompt: erlaubte Apps und Verbote
- [ ] Nach Aufgabe keine unerwarteten Dateien/Netzverbindungen
- [ ] Organisationspolicy erlaubt die Fähigkeit

---

**Status:** verified  
**Gilt für:** App / Codex (Version, Region, Berechtigung)  
**Prüfgrundlage:** OpenAI Help Center führt Computer Use weiterhin als Codex-bezogene Fähigkeit; Business-Release: ab 2026-05-29 Computer Use unter Windows. Hier nur Risikomodell, Szenarien und Freigabegrenzen — nicht „überall default verfügbar“.  
**Zuletzt geprüft:** 2026-07-26
