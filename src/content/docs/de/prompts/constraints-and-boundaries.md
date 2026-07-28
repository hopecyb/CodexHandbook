---
title: Constraints definieren
description: Änderbaren Scope, Stil und Verbote eingrenzen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Viele Aufgaben scheitern nicht, weil das Ziel fehlt — sondern weil **Grenzen unklar** sind.

Sagst du „hilf mir, diese Seite zu ändern“, kann Codex das so verstehen:

- nur Text ändern
- Styles nebenbei anfassen
- Komponenten anfassen
- Dependencies hinzufügen

Du wolltest vielleicht nur: „nur diesen Textabschnitt, Struktur nicht anfassen“.

Constraints beantworten: Bis wohin geht die Aufgabe — und was darf absolut nicht berührt werden.

## Inhalt

Sie helfen vor allem gegen:

- nebenbei zu viel ändern
- Überschreiten von Berechtigungen
- Eingriffe in Schichten, die du nicht anfassen wolltest
- scheinbar fertig, aber zu hohem Preis

## Häufige Constraints

Constraints beantworten: „Was darf absolut nicht passieren?“

- Nur gelistete Dateien/Verzeichnisse ändern
- Keine API-Verträge / keine Datenbank ändern
- Keine neuen Dependencies
- Keine Netzwerkanfragen
- Bestehende Formatter-Konfiguration behalten

## Ziel vs. Constraint

- **Ziel**: was es erreichen soll
- **Constraint**: welche Linien es dabei nicht überschreiten darf

Zum Beispiel:

```text
Ziel: Homepage-Hero-Text klarer machen
Constraints: kein Layout, keine neuen Dependencies, kein CTA-Verhalten ändern
```

Ohne Constraints versteht Codex „klarer machen“ leicht als größeren Redesign-Auftrag.

## Häufige Irrtümer

### 1. Constraints engen zu stark ein und verschlechtern das Ergebnis

Oft bringen klare Constraints das Ergebnis näher an den echten Bedarf — weniger Umwege.

### 2. „Nicht zu viel ändern“ reicht als Constraint

Zu vage.

Nützlicher:

- nur `src/content/docs/...`
- keine Komponenten
- keine Interfaces
- keine Dependencies installieren

### 3. Constraints nur bei Hochrisiko-Aufgaben

Auch kleine Aufgaben brauchen sie — gerade dann rutscht leicht eine vage Anforderung durch und der Scope wächst.

## Eine brauchbare Formulierung

Wenn unklar, starte mit diesem Gerüst:

```text
Constraints:
- Nur 【Verzeichnis/Datei】 ändern
- Nicht ändern: 【Komponenten / API / DB / Config】
- Keine neuen Dependencies
- Bei fehlenden Infos zuerst fragen, nicht raten
```

## Wann Constraints detaillierter sein sollten

Besonders dann klar schreiben:

- Altprojekte mit viel Altlast
- Nur lokale Patches gewünscht
- Harte Team-Vorgaben zu Stil/Architektur
- Berechtigungen, Netz, Dependency-Installation

Das Ziel sagt Codex, was zu tun ist; Constraints sagen, wo Schluss ist.

Berechtigungsgrenzen am besten zusammen mit Constraints schreiben, damit „nebenbei“ weniger übergreift. Siehe [Fertigstellungsstandard definieren](/prompts/define-done/) und [Berechtigungen und Sandbox](/guide/permissions-and-sandbox/).


---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite erklärt nur Constraint- und Grenzformulierung; interne Links wurden geprüft, der Text hängt nicht von volatilen Fakten wie Produktversion, Preis oder UI ab.  
**Zuletzt geprüft:** 2026-07-26
