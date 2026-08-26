---
title: Installation und erster Einsatz
description: Lerne Projekte, Chats, Codex und Review-Einstiege in der ChatGPT-Desktop-App kennen.
sidebar:
  order: 10
locale: de
source_locale: zh-CN
source_revision: d61c2fa
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Dieses Kapitel richtet sich an Personen, die die ChatGPT-Desktop-App zum ersten Mal öffnen. Ziel ist nicht, alle Schaltflächen auswendig zu lernen, sondern eine **kleine, prüfbare und verifizierbare Aufgabe** abzuschließen.

Die Schritte für Installation und Anmeldung findest du unter [Desktop-App installieren](/de/guide/getting-started/install-desktop-app/). Derzeit sind offizielle Versionen für macOS, Windows und Linux verfügbar. Nach der Anmeldung kannst du einen neuen Chat oder ein Projekt erstellen oder einen lokalen Ordner öffnen.

## Zuerst drei Objekte kennenlernen

| Objekt | Zweck | Erster Schritt für Einsteiger |
|---|---|---|
| Projekt oder Ordner | Stellt einem Chat Dateien und Arbeitsverzeichnis bereit | Öffne ein Übungs-Repository, nicht sofort ein Produktionsverzeichnis |
| Chat | Bewahrt Ziel, Kontext, Fortschritt und Ergebnis auf | Verwende für jedes eindeutige Ziel einen eigenen Chat |
| Codex | Liest, ändert und verifiziert Projektinhalte | Beginne mit einer risikoarmen, leicht prüfbaren Änderung |

Die App-Oberfläche wird laufend weiterentwickelt. Diese drei Objekte sind beständiger als die Position einer bestimmten Schaltfläche.

## Die erste echte Aufgabe abschließen

Bereite ein vorhandenes Git-Repository vor und vergewissere dich, dass es keine noch nicht festgehaltenen Änderungen enthält, die erhalten bleiben müssen. Öffne dann den Ordner in der App und erstelle einen Codex-Chat.

Gib Folgendes ein:

```text
Lies zuerst README.md und ändere nur den Abschnitt „Lokal ausführen“:
1. Korrigiere den nicht mehr gültigen Startbefehl.
2. Lass alle anderen Abschnitte unverändert.
3. Zeige nach der Änderung den Diff und führe die in der Dokumentation ausführbaren Prüfbefehle aus.
4. Wenn eine Verifikation nicht möglich ist, nenne den Grund ausdrücklich und behaupte nicht, die Aufgabe sei abgeschlossen.
```

Lies nach Abschluss nicht nur die Chat-Zusammenfassung, sondern prüfe auch:

1. Enthält der Review-Bereich ausschließlich die erwarteten Dateien?
2. Sind gelöschte Inhalte tatsächlich entbehrlich?
3. Stützt die Terminalausgabe die Aussage, dass die Verifikation bestanden wurde?
4. Entspricht `git diff` dem Aufgabenbereich?

## Wann Chat, Work oder Codex verwenden?

- Verwende Chat für Wissensfragen und Ideendiskussionen.
- Verwende Work für allgemeine Arbeit über mehrere Dateien und Werkzeuge hinweg.
- Verwende Codex, wenn ein Repository verstanden, geändert und getestet werden soll.

Für eine vorübergehende Frage ohne langfristig benötigten Kontext kannst du Quick chat verwenden. Fortlaufend verfolgte Arbeit gehört in einen regulären Chat oder ein Projekt.

## Was du bei einem Fehler zuerst prüfst

- **Dateien sind nicht sichtbar:** Prüfe, ob der richtige Ordner geöffnet ist und die Aufgabenberechtigung nicht abgelehnt wurde.
- **Ein Befehl lässt sich nicht ausführen:** Prüfe, ob die Abhängigkeiten installiert sind, und lies den ersten aussagekräftigen Fehler im Terminal.
- **Alte Änderungen sind mit den neuen vermischt:** Unterscheide mit `git status` zwischen bereits vor der Aufgabe vorhandenen und neu entstandenen Änderungen.
- **Die App sieht anders aus als beschrieben:** Orientiere dich an den logischen Objekten „Projekt/Ordner, Chat, Review und Terminal“ statt an festen Positionen in Screenshots.

Lerne als Nächstes [Diffs, Kommentare und Reviews](/de/guide/desktop-app/diffs-comments-and-review/) sowie das [integrierte Terminal](/de/guide/desktop-app/integrated-terminal/) kennen.

## Offizielle Grundlage

- [ChatGPT desktop app](https://learn.chatgpt.com/docs/app)
- [Code review](https://learn.chatgpt.com/docs/code-review)

---

**Status:** verified

**Unterstützte Produkte:** App

**Zuletzt geprüft:** 2026-08-26
