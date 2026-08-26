---
title: Benachrichtigungen und Aktivitätsansicht
description: Konfiguriere Hinweise auf abgeschlossene Aufgaben, Berechtigungsanfragen und ausstehende Antworten.
sidebar:
  order: 80
locale: de
source_locale: zh-CN
source_revision: 0869db2
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Benachrichtigungen zeigen, wann du zu einer Aufgabe zurückkehren musst. Sie ersetzen nicht die Prüfung des Ergebnisses. In der Desktop-App kannst du Hinweise auf abgeschlossene Runden konfigurieren und Benachrichtigungen für Berechtigungsanfragen und Fragen getrennt steuern.

## Empfohlene Konfiguration

Öffne **Settings → Notifications**:

| Ereignis | Empfehlung | Grund |
|---|---|---|
| Turn completion | Bei Ausführung im Hintergrund benachrichtigen | Lange Aufgaben müssen nicht dauerhaft beobachtet werden |
| Permission | Aktivieren | Eine unbeantwortete Genehmigungsanfrage hält die Aufgabe an |
| Question | Aktivieren | Codex benötigt eine Antwort, wenn entscheidender Kontext fehlt |

Auch das Betriebssystem muss der ChatGPT-Desktop-App Benachrichtigungen erlauben. Sind sie in der App aktiviert, aber im Betriebssystem gesperrt, werden weiterhin keine Hinweise angezeigt.

## Mehrere Chats in der Activity-Ansicht bearbeiten

Wenn Activity verfügbar ist, wähle die Glocke in der Seitenleiste, um ungelesene, laufende oder auf eine Antwort wartende Chats anzuzeigen. Tastenkombinationen:

- macOS: `Cmd + Option + U`
- Windows: `Ctrl + Alt + U`

Die Filter können sich mit der Oberfläche ändern und beispielsweise Work, Chat, Pinned und Scheduled enthalten. Empfohlene Bearbeitungsreihenfolge: Warten auf Berechtigung oder Eingabe → Fehlgeschlagen → Abgeschlossen und zu prüfen → Weiterhin aktiv.

## Vorgehen nach einer Benachrichtigung

- **Abgeschlossen:** Öffne Diff und Verifikationsausgabe. Behandle die Benachrichtigung nicht als Abnahmeergebnis.
- **Berechtigungsanfrage:** Prüfe Befehl, Zielressource, Auswirkungsbereich und Umkehrbarkeit.
- **Antwort ausstehend:** Ergänze nur den erforderlichen Kontext und erweitere die Aufgabe nicht nebenbei.
- **Fehlgeschlagen:** Ermittle den ersten aussagekräftigen Fehler und entscheide dann zwischen erneutem Versuch und geänderten Einschränkungen.

CLI und IDE verwenden andere Benachrichtigungsmechanismen: Die IDE besitzt keine eigenen Benachrichtigungseinstellungen. In der CLI kann eine erweiterte Konfiguration Abschlussmeldungen in der TUI oder über externe Programme steuern. Behandle Desktop-Einstellungen nicht als globalen Schalter.

## Offizielle Grundlage

- [Notifications](https://learn.chatgpt.com/docs/notifications)
- [Desktop app settings](https://learn.chatgpt.com/docs/app/settings)

---

**Status:** verified

**Unterstützte Produkte:** App

**Zuletzt geprüft:** 2026-08-26
