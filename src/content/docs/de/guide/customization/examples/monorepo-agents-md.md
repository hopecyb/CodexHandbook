---
title: AGENTS.md in einem Monorepo
description: "Beispielmuster für Projektanweisungen, Geltungsbereich und Testbefehle in Single-Repo-Multi-Package-Strukturen."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

In Monorepos koexistieren mehrere Apps, Shared Packages und Stacks — eine riesige `AGENTS.md` lässt den Agent leicht **das falsche Paket ändern** oder den falschen Test laufen. Diese Seite zeigt ein wiederverwendbares **geschichtetes Hinweis**-Muster (Beispiel, auf Ihr Repo zuschneiden).

## Was diese Seite behandelt

- Wie Root und Subpakete Anweisungen aufteilen
- Wie @-Dateien und Pfadconstraints zu Paketgrenzen passen
- Konsistenz mit CI-/Cloud-Umgebungsbefehlen

## Warum solche Repos geschichtete Hinweise brauchen

Ist ein normales Repo wie ein Haus, ist ein Monorepo eher ein Gebäude.

Verschiedene Räume, Bewohner, Regeln.  
Nur am Eingang einen überlangen Gesamtzettel zu kleben, führt bei Codex oft zu:

- Alles sichtbar, aber unklar, welche Schicht jetzt gilt
- Nur ein Paket ändern wollen — und versehentlich anderswo mitändern

Regeln sollen mit Verzeichnisgrenzen klarer werden — nicht mechanisch mehr `AGENTS.md`-Kopien.

## Empfohlene Struktur (Beispiel)

```text
repo-root/
  AGENTS.md              # Global: Branch-Strategie, Commit-Normen, Verbote
  apps/web/AGENTS.md     # Frontend: Framework, Testbefehle, Routing-Konventionen
  apps/api/AGENTS.md     # Backend: API-Stil, Migrationsdisziplin
  packages/shared/       # Nur Root-Link oder kurze Sub-Hinweise
```

Root-`AGENTS.md` sollte enthalten:

- Welche Verzeichnisse der Agent **nicht** ändern darf (z. B. `infra/prod/`)
- Owner oder Doku-Links der Subpakete
- Globale Installation: `pnpm install` im Root

## Häufige Missverständnisse

### 1. Bei mehr Verzeichnissen nicht alles in die Root stopfen

Viele packen beim ersten Monorepo-Versuch alle Constraints in die Root-`AGENTS.md`.

Folge:

- Datei wird lang
- Für die aktuelle Aufgabe relevante Regeln treten nicht hervor
- Spezielle Subpaket-Konventionen gehen unter

Stabiler: Root = globaler Konsens, Subpakete = lokale Sonderregeln.

### Subpaket-Hinweise verkleinern Fehländerungsradius — sie wiederholen keine Root-Regeln

Unterscheiden sich Dev-/Testbefehle und Constraints von `apps/web` und `apps/api`, helfen die Differenzen in den jeweiligen Verzeichnissen Codex, Umwege zu vermeiden.

## Subpaket-AGENTS.md-Vorlagenausschnitt

```markdown
## Geltungsbereich
Nur `apps/web/**` ändern, außer die Aufgabe verlangt ausdrücklich paketübergreifend.

## Entwicklung
- Installation: im Repo-Root `pnpm install`
- Dev: `pnpm --filter web dev`
- Tests: `pnpm --filter web test`
- Typcheck: `pnpm --filter web typecheck`

## Abhängigkeiten
Shared Types aus `@acme/shared` importieren, nicht kopieren.
```

## Aufgaben-Prompt abstimmen

Bei paketübergreifenden Refactors **Pfade explizit listen**:

```text
Ziel: in apps/web den neuen API-Client nutzen
Erlaubt: apps/web/**, packages/api-client/**
Verboten: apps/api-Server direkt ändern
Abnahme: pnpm --filter web test && pnpm --filter api-client test
```

Siehe [Datei- und Ordnerkontext](/guide/context/file-and-folder-context/)

## Cloud und CI

Monorepos scheitern in der Cloud oft an **fehlender Root-Installation** oder falschen Filtern. In der Root-`AGENTS.md` festhalten:

- Standard-Arbeitsverzeichnis = Repo-Root
- Filter-Befehle für Ein-Paket-Aufgaben
- Caching-Strategie (bei turborepo/nx Task-Graph nennen)

[Cloud-Umgebungen](/guide/web-and-cloud/cloud-environments/)

## Häufige Fehler

- Nur `apps/web` dokumentiert — Agent ändert trotzdem Root-Lockfile
- Testbefehle der Subpakete inkonsistent und undokumentiert
- Subpaket-AGENTS.md widerspricht Root-Doku

## Root oder Subpaket

Unsicher? Fragen:

1. Müssen alle Pakete das einhalten?
2. Gilt das nur für ein Verzeichnis?
3. Würde die falsche Schicht den Agent den Geltungsbereich falsch wählen lassen?

Eher 1 → Root; eher 2/3 → Subpaket.

## Abnahmeliste

- [ ] Root und Subpakete haben je mindestens eine lesbare Scope-Erklärung
- [ ] Jedes Paket kann Testbefehle allein zum Laufen bringen
- [ ] Paketübergreifende Aufgaben listen erlaubte Pfade im Prompt

AGENTS.md im Monorepo muss nicht maximal zentral sein; besser „globaler Konsens“ und „lokale Verzeichnisregeln“ am richtigen Ort.

## Quellen

- freestylefly/CodexGuide Monorepo-Playbook
- codex.bozhouai.com Kapitel große Repos
- stormzhang Monorepo- und Git-Praxis

---

**Status:** verified  
**Gilt für:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen aktuelle Kapitel zu `AGENTS.md`, Datei-/Ordnerkontext und Cloud-Umgebungen; Inhalt beschränkt auf Beispielmuster geschichteter Monorepo-Hinweise und Befehlsorganisation — keine festen Verträge zu Produkteinstiegen oder Managed-Implementierungen.  
**Zuletzt geprüft:** 2026-07-26
