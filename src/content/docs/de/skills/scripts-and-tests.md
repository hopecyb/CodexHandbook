---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Die aktuelle Codex-Laufzeit erlaubt Skills mit Skripten und deterministischen Befehlen; das Prinzip „stabile Aktionen skripten, Ablauf bleibt Skill-gesteuert“ passt zur aktuellen Fähigkeit."
  checkedAt: "2026-07-26"
title: scripts/ und Tests
description: Deterministische Skripte im Skill ergänzen und ihr Verhalten prüfen.
locale: de
source_locale: zh-CN
source_revision: '05a2f68'
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
---

Am Anfang landet oft alles in `SKILL.md`. Bei einfachen Abläufen okay — sobald ein Schritt **stabil, wiederholt und prüfbar** laufen muss, sind Skripte zuverlässiger als reine Prosa.

Feste Aktionen → Skript; Urteil und Koordination → Skill.


Muss ein Schritt deterministisch laufen (Tests, Diff erzeugen, Format prüfen), gehört das Skript nach `scripts/`, und `SKILL.md` sagt, wann es aufgerufen wird.

![Illustration: ein Assistent übergibt einen wiederkehrenden Schritt an eine Maschine (ein deterministisches Skript), deren Ausgabe einen Testkontrollpunkt passiert – grüne Lampen bestanden, eine rote wird repariert](/illustrations/skills-scripts.webp)

## Beispiel

```text
my-skill/
├── SKILL.md
└── scripts/
    └── run-checks.sh
```

## Wann sich `scripts/` lohnt

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

Skripttests prüfen eine einzelne Aktion.

Beim Skill muss zusätzlich geprüft werden, wann und wie er das Skript aufruft und ob die Ausgabe den Erwartungen entspricht.

## Typische Prüf-Reihenfolge

1. Skript allein
2. Exit-Code und Ausgabe klar?
3. Den Skill einmal den vollständigen Ablauf ausführen lassen
4. Noch einmal in realistischerer Umgebung

So trennst du „Skript kaputt“ von „Skill-Integration falsch“.

Stabile, wiederholbare Aktionen nicht nur in Prosa belassen. Zuerst Skript durchziehen, dann Skill-Aufruf prüfen.

Skripte erben die aktuelle Freigabe-Politik; siehe [Befehlsregeln](/de/guide/customization/rules/command-rules/) und [Skill-Sicherheit](/de/skills/security/).
