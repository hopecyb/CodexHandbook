---
title: Einstellungen
description: Konfiguriere das alltägliche Verhalten, Tastenkombinationen, Benachrichtigungen und Erscheinungsbild der Desktop-App.
sidebar:
  order: 90
locale: de
source_locale: zh-CN
source_revision: c599d50
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Die Einstellungsseite passt das App-Verhalten an, umfasst aber nicht die gesamte Berechtigungskonfiguration von Codex. Behalte zunächst die Standardwerte bei und ändere sie erst, wenn du ihren Auswirkungsbereich kennst.

Öffne Settings unter macOS mit `Cmd + ,`, unter Windows mit `Ctrl + ,` oder über das App-Menü.

## Vier Bereiche für Einsteiger

### General

- Soll `Cmd + Enter` erforderlich sein, um einen mehrzeiligen Prompt abzusenden?
- Darf **Prevent sleep while running** lokale Langzeitaufgaben weiter ausführen, während du den Rechner nicht verwendest?
- Follow-up behavior legt fest, ob eine neue Nachricht die aktuelle Ausführung sofort steuert oder für die nächste Runde vorgemerkt wird.

Die letzte Einstellung verändert die Wirkung einer ergänzenden Nachricht. Steuere die aktuelle Ausführung nur bei einer dringenden Korrektur. Eine unabhängige neue Anforderung gehört in einen eigenen Chat.

### Keyboard shortcuts

Du kannst Befehle suchen, Tastenbelegungen ändern oder Standardwerte wiederherstellen. Wenn eine online beschriebene Tastenkombination nicht mit deiner Installation übereinstimmt, ist die hier angezeigte Belegung maßgeblich.

### Notifications

Lege fest, wann abgeschlossene Runden gemeldet werden, und steuere Hinweise auf Berechtigungsanfragen und Fragen. Vollständige Empfehlungen findest du unter [Benachrichtigungen und Aktivitätsansicht](/de/guide/desktop-app/notifications/).

### Appearance

Du kannst ein helles, dunkles oder systemabhängiges Design wählen sowie Akzent-, Hintergrund- und Vordergrundfarbe, UI-Schrift, Code-Schrift und Schriftgröße anpassen. Achte bei langen Code-Reviews zuerst auf Kontrast und Schriftgröße, nicht nur auf die Optik des Themes.

## Was diese Seite nicht steuert

- Repositoryregeln stehen in `AGENTS.md`.
- Dauerhafte Konfigurationen von CLI und Agent stehen hauptsächlich in `config.toml`.
- Ob Dateien, Netzwerk und Befehle verfügbar sind, hängt gemeinsam von Sandbox, Genehmigungen und Organisationsrichtlinien ab.
- Von der Organisation verwaltete Richtlinien können die persönlich auswählbaren Funktionen einschränken.

Eine sichtbare Einstellung bedeutet daher nicht, dass die aktuelle Aufgabe die entsprechende Berechtigung besitzt. Lies bei einer Ablehnung zuerst [Berechtigungen und Sandbox](/de/guide/permissions-and-sandbox/), statt die Berechtigungen direkt auszuweiten.

## Änderungen abnehmen

Ändere jeweils nur eine Kategorie und verifiziere sie in einem risikoarmen Chat. Notiere den Ausgangswert und ändere weitere Einstellungen erst, nachdem die Wirkung bestätigt wurde. Weicht das Verhalten von der Erwartung ab, stelle zunächst den Standardwert wieder her und prüfe dann App-Version, Betriebssystemberechtigungen und Organisationsrichtlinien.

## Offizielle Grundlage

- [ChatGPT desktop app settings](https://learn.chatgpt.com/docs/app/settings)
- [Codex configuration basics](https://learn.chatgpt.com/docs/config)
- [Permissions](https://learn.chatgpt.com/docs/permissions)

---

**Status:** verified

**Unterstützte Produkte:** App

**Zuletzt geprüft:** 2026-08-26
