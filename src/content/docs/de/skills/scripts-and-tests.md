---
title: scripts/ und Tests
description: Deterministische Skripte im Skill ergänzen und ihr Verhalten prüfen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Am Anfang landet oft alles in `SKILL.md`. Bei einfachen Abläufen okay — sobald ein Schritt **stabil, wiederholt und prüfbar** laufen muss, sind Skripte zuverlässiger als reine Prosa.

Feste Aktionen → Skript; Urteil und Koordination → Skill.

# scripts/ und Tests

Muss ein Schritt deterministisch laufen (Tests, Diff erzeugen, Format prüfen), gehört das Skript nach `scripts/`, und `SKILL.md` sagt, wann es aufgerufen wird.

## Beispiel

```text
my-skill/
├── SKILL.md
└── scripts/
    └── run-checks.sh
```

## Wann `scripts/` prüfen

Wenn ein Schritt eines davon erfüllt:

- Jedes Mal identisch ausführen
- Exit-Code ist bedeutsam
- Natürliche Sprache würde sehr weitschweifig
- Wiederverwendung in CI oder anderen Tools gewünscht

„Checks laufen“, „Diff erzeugen“, „Format prüfen“, „Report fest exportieren“ — typische Skript-Kandidaten.

## Test-Empfehlungen

- Skript im Übungs-Repo manuell laufen lassen: Exit-Code und Ausgabe prüfen
- Skill end-to-end auslösen: erwarteter Skript-Aufruf?
- Team: Skript in CI oder pre-commit weiter nutzbar halten

## Häufige Missverständnisse

### 1. Skripte machen den Skill nur komplexer

Wenn ein Skript einen instabilen Schritt fixiert, wird das Ganze oft einfacher.

### 2. Lokal laufendes Skript = Skill okay

Noch prüfen:

- Löst der Skill es korrekt aus?
- Blockiert die Freigabe-Politik?
- Läuft es im Team oder in CI?

### 3. „Skill testen“ = Skript testen

Zu wenig.

Skript testet eine Aktion;  
der Skill muss „wann / wie aufrufen / erwartete Ausgabe“ prüfen.

## Typische Prüf-Reihenfolge

1. Skript allein
2. Exit-Code und Ausgabe klar?
3. Skill einmal den vollen Ablauf
4. Noch einmal in realistischerer Umgebung

So trennst du „Skript kaputt“ von „Skill-Integration falsch“.

Stabile, wiederholbare Aktionen nicht nur in Prosa belassen. Zuerst Skript durchziehen, dann Skill-Aufruf prüfen.

Skripte erben die aktuelle Freigabe-Politik; siehe [Befehlsregeln](/guide/customization/rules/command-rules/) und [Skill-Sicherheit](/skills/security/).
---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Die aktuelle Codex-Laufzeit erlaubt Skills mit Skripten und deterministischen Befehlen; das Prinzip „stabile Aktionen skripten, Ablauf bleibt Skill-gesteuert“ passt zur aktuellen Fähigkeit.  
**Zuletzt geprüft:** 2026-07-26
