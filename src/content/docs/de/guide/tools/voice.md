---
title: Spracheingabe und -ausgabe
description: "Szenarien, Grenzen und Privacy bei Sprachinteraktion mit Codex."
locale: de
source_locale: zh-CN
source_revision: f94ad9e
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 70
---

Manche Codex-Clients unterstützen **Sprache**: Aufgaben sprechen oder Antwortzusammenfassungen hören. Geeignet bei belegten Händen und schnellem Diktat — **nicht** zum Vorlesen von Secrets und kein Ersatz für schriftliche Abnahmeprotokolle.

Sprache: Richtung, Hintergrund, schnelles Follow-up; präzise, suchbare, nachprüfbare Details → zurück zum Text.

## Inhalt dieser Seite

- Welche Aufgabenformen Sprache passen
- Zusammenspiel mit Text-Prompt
- Privacy und Genauigkeit

## Geeignete Szenarien

| Geeignet | Nicht geeignet |
|---|---|
| High-Level-Ziele diktieren, Brainstorm | Code-Anweisungen bis zum Variablennamen |
| Kurzes Mobile-Follow-up | API-Keys, Passwörter vorlesen |
| Accessibility-Bedarf | Suchbare, diffbare Spez-Dokumente |

Nach dem Diktat Codex **Verständnis wiederholen** oder Textplan erzeugen lassen, dann bestätigen. Siehe [Plan verlangen](/de/prompts/ask-for-a-plan/).

## Wofür Sprache taugt

Vorteile:

- Schnell
- Hände frei
- Gedanken zuerst auskippen

Typische Probleme:

- Worte fehlen
- Fehlhören
- Schlecht für präzise Pfade, Variablennamen, CLI-Args

Üblich: Richtung diktieren, dann Textbestätigung.

## Nutzungsempfehlungen

1. Ruhige Umgebung, kurze Sätze; „Ziel / Constraints / Done“ abschnittsweise
2. Dateipfade, Branchnamen **tippen** oder Agent Schreibweise wiederholen lassen
3. Bei sensiblen Projekten Sprach-Cloud deaktivieren (falls lokal/Disable-Option)
4. Wichtige Entscheidungen als Text in Issue oder PR

## Häufige Missverständnisse

### 1. Sprache ersetzt Tippen komplett?

Nein. Tippen besser für:

- Dateipfade
- Branchnamen
- Befehle
- Argumente
- Abnahmekriterien

### 2. Mehr und detaillierter = weniger Fehler?

Lange unstrukturierte Diktion zerstreut den Fokus.

### 3. Sprachantwort ersetzt Ergebnis-Review?

Nein. Zusammenfassung für Überblick — Änderungen, Dateien, Diff, Tests weiter am Text und Artefakt.

## Übliche Reihenfolge beim Diktat

1. Was ich will
2. Was nicht
3. Wie prüfen

Dann als Textversion zum Bestätigen.

## Privacy

- Sprache oft Cloud-Transkription; kein Kunden-PII, keine Credentials vorlesen
- Öffentliche Orte: Mithörer
- Team-Policy kann Recording bei Geheimcode-Namen verbieten

## Bezug zu Multimodal

- **Bild-Input**: Designs, Screenshots → [Prompting mit Bildern](/de/prompts/prompting-with-images/)
- **Sprach-Input**: diese Seite
- **Output**: weiter Code, Dateien, Text-Diff; Sprachzusammenfassung ersetzt kein Review

## Häufige Fehler

- Lange Diktion ohne Struktur — Constraints fehlen
- Massen-Codeänderungen per Sprache annehmen ohne Diff
- Unmaskierte Produktionsvorfälle in Sprache beschreiben

Sprache für Start und Follow-up — nicht für präzise Befehle, Secrets und finale Abnahme.

---

**Status:** verified  
**Gilt für:** App / Desktop Voice (Plan- und Workspace-Einstellungen)  
**Prüfgrundlage:** OpenAI Help Center《ChatGPT Voice》und《ChatGPT Work and Codex》: Voice mit Work/Codex zum Starten, Follow-up, Koordinieren; Verfügbarkeit plan-/workspace-/versionsabhängig. Fokus: Szenarien, Privacy, „nach Diktion zurück zum Text“.  
**Zuletzt geprüft:** 2026-07-26
