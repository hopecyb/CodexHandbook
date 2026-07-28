---
title: AGENTS.md — Geltungsbereich und Priorität
description: "Mehrere Dateien, Monorepo und «Projektregel vs. Dialog-Prompt» — wer entscheidet."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Wenn mehrere `AGENTS.md`, Config-Dateien und der aktuelle Dialog gleichzeitig existieren, muss klar sein, **welche Regel gilt**.

Thema hier: Wenn zwei Regeln auseinanderlaufen — wem folgen?

## Prioritätsüberblick

```text
Managed Organisation Policy > nähere AGENTS.md > Repo-Root-AGENTS.md > Benutzerkonfiguration > aktueller Dialog
```

„Näher“ meint die Datei **näher am aktuellen Arbeitspfad**. Arbeiten Sie unter `packages/web/AGENTS.md`, werden diese Datei und die Root-Datei zusammengeführt; bei Konflikt **gewinnt das Unterverzeichnis**.

## „Näher gewinnt“ verstehen

Stellen Sie sich vor:

- Root-Regeln = „Repo-weite Defaults“
- Unterverzeichnis-Regeln = „besondere Hinweise für diesen Teilbereich“

Je näher am aktuellen Arbeitsort, desto konkreter — und desto eher priorisiert.

## Verhältnis zum Dialog-Prompt

| Quelle | Persistenz | Geeignet für |
|---|---|---|
| AGENTS.md | Sessionübergreifend, versionierbar | Teamkonsens, Build-Befehle, Tabuzonen |
| Aufgaben-Prompt | Nur diese Session | Ziel, Umfang, Deadline dieser Runde |
| @-Dateiverweis | Kontext dieser Session verstärken | Konkrete Implementierungsdateien, Designs |

**Nicht** die ganze `AGENTS.md` in den Dialog kopieren. Zum Betonen einer Regel reicht ein Satz: „Testanforderungen aus AGENTS.md einhalten; diesmal zusätzlich `legacy/` nicht ändern.“

## Monorepo-Muster

```text
repo/
├── AGENTS.md              # Repo-weit: Paketmanager, CI, Sicherheit
├── apps/
│   └── web/
│       └── AGENTS.md      # Frontend: Komponentenbibliothek, E2E-Befehle
└── packages/
    └── api/
        └── AGENTS.md      # Backend: DB-Migrationskonventionen
```

Prinzipien:

- **Root-Datei**: 10–20 harte, repo-weite Regeln
- **Paketdateien**: nur paket-spezifische Befehle und Verzeichnis hinweise
- Vermeiden Sie 80 % Duplikat in drei Dateien — Gemeinsames in die Root, Pakete nur Inkremente

## Grenze zu persönlichen Vorlieben

Persönliche Gewohnheiten (Theme, Standardmodell, lokale Pfade) gehören in die **Benutzerkonfiguration**, nicht in die Team-`AGENTS.md` — sonst treffen Sie Mitwirkende.

## Häufige Missverständnisse

### 1. Was im aktuellen Dialog steht, ist neu und hat deshalb höchste Priorität

Dialog ergänzt „zusätzliche Anforderungen dieser Runde“ — er überschreibt nicht beliebig Team- oder Organisations-Hard-Rules.

### 2. Unterverzeichnis-`AGENTS.md` heißt Root-Regeln kopieren

So sollte es nicht sein.

Besser:

- Root: Gemeinsamkeiten
- Unterverzeichnis: nur Inkremente und Ausnahmen

### 3. Die Reihenfolge allein reicht nicht

Noch nicht.

Wichtiger ist zu wissen:

- welche Art Information auf welche Schicht gehört
- warum bei Konflikt eine Schicht gewinnt

## Bei Konflikten urteilen

Wenn zwei Regeln kollidieren, in dieser Reihenfolge prüfen:

1. Welche ist näher am aktuellen Arbeitsverzeichnis
2. Welche ist langfristige Projektregel, welche nur temporäre Ergänzung
3. Gibt es darüber eine Organisations- oder Managed Policy

Bei Regelkonflikten gewinnen typischerweise die nähere, härtere, klarere Schicht — nicht automatisch „der neueste Satz“.

## Häufige Fehler

- Unterverzeichnis-`AGENTS.md` widerspricht der Root-Datei, ohne zu sagen, wer Vorrang hat
- Secrets in `AGENTS.md` und nach Git — Secret-Management und Umgebungsvariablen nutzen
- „Temporäre Lockerung“ im Dialog soll Team-Managed-Policy überschreiben (meist unmöglich)

## Abnahmeliste

- [ ] Klare Arbeitsteilung zwischen Root-`AGENTS.md` und Paketdateien
- [ ] Bewusstsein „Unterverzeichnis gewinnt“ bei Konflikten
- [ ] Aufgaben-Prompt nur Inkremente, kein Kopieren des ganzen Projekt-Handbuchs

---

**Status:** outdated  
**Gilt für:** App / CLI / IDE / Cloud  
**Nachprüfhinweis:** Diese Seite stellt Priorität von `AGENTS.md`, Benutzerkonfiguration und aktuellem Dialog als zu lineare Reihenfolge dar; tatsächliche Precedence kann je Client, organisationsgesteuerter Fähigkeit und Laufzeitumgebung abweichen und muss nach Ergänzung aktueller offizieller Belege neu geschrieben werden.  
**Zuletzt geprüft:** 2026-07-26
