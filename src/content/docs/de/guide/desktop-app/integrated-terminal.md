---
title: Integriertes Terminal
description: Terminal in der App nutzen und mit Aufgaben kombinieren.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 60
---

Das integrierte Terminal macht Befehlsausgaben des Agenten sichtbar — oder du führst selbst Überprüfungsbefehle aus.

Ohne die Desktop-App zu verlassen siehst du hier Ablauf und Ergebnis von Befehlen.

Am Anfang lohnt der Blick auf:

- was genau ausgeführt wurde
- warum es „Überprüfung bestanden“ sagt
- warum ein Schritt fehlgeschlagen ist

## Hinweise bei der Nutzung

- „Überprüfungsbefehl“ in die Abnahmekriterien des Prompts schreiben
- Keine Produktionsgeheimnisse ins integrierte Terminal einfügen
- Unverstandene Befehle nicht blind in der Produktionsumgebung erneut ausführen

## Häufige Missverständnisse

### 1. Muss ich Terminal können, um die Desktop-App zu nutzen?

Viele Basisaufgaben brauchen keine eigenen Befehle von dir.  
Du solltest aber wissen, wofür der Terminalbereich da ist — sonst bist du beim Nachprüfen ratlos.

### 2. Bei großer Textausgabe: worauf achten?

Achte auf:

- offensichtliche Fehler
- welcher Befehl lief
- ob es am Ende Erfolg, Fehler oder Teilerfolg war

### 3. Darf ich seine Befehle kopieren und selbst nochmal laufen lassen?

Ja — vorausgesetzt, du verstehst, was sie tun, und führst sie nicht blind in Produktion erneut aus.

Das integrierte Terminal legt den Überprüfungsprozess offen und hilft dir, schrittweise zu verstehen, was die Kommandozeile tut.

---

**Status:** outdated  
**Anwendbare Produkte:** App  
**Prüfhinweis:** Diese Seite setzt eine stabile integrierte Terminal-Erfahrung in der Desktop-App voraus; aktuelle offizielle Quellen bestätigen vor allem, dass Codex mit lokalen Ordnern, Repositories, Terminals und Entwicklerwerkzeugen arbeitet, ohne die konkrete UI-Form hier ausreichend zu stützen.  
**Zuletzt geprüft:** 2026-07-26
