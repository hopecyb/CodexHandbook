---
title: Änderungen in der IDE prüfen
description: Diff im Editor lesen, kommentieren und Codex-Vorschläge annehmen oder ablehnen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 70
---

Die Überprüfung in der IDE-Erweiterung liegt zwischen „Inline-Completion“ und „vollständigem PR-Review“: Änderungen erscheinen oft direkt im Editor oder in der seitlichen Diff-Ansicht. Diese Seite erklärt, wie du Ergebnisse sicher annimmst.

Auch bei „direkt annehmbaren“ Änderungen in der IDE: „Alles annehmen“ nicht zur Default-Aktion machen.

## Inhalt dieser Seite

- Häufige Überprüfungs-UI in der IDE
- Strategien für Annehmen, Ablehnen, teilweise Annehmen
- Anschluss an Git, Tests und PR-Ablauf

## Überprüfungsablauf

1. **Rahmen sehen:** Welche Dateien? Unerbetene Löschungen oder Formatierungsstürme?
2. **Logik lesen:** Verzweigungen, Fehlerbehandlung, Randfälle
3. **Sicherheit prüfen:** Geheimnisse, Injection, Rechteausweitung, Dependency-Poisoning
4. **Verifizieren:** vereinbarte Tests / Lint (IDE-Terminal oder Task-Skript)
5. **Entscheiden:** annehmen, Nachbesserung verlangen oder rückgängig und Aufgabe neu stellen

Methodik: [Diffs prüfen](/guide/quality/review-diffs/)

## IDE-spezifische Operationen (Konzept)

| Operation | Empfehlung |
|---|---|
| Inline-Diff / Ghost-Text | Blockweise lesen, dann annehmen — kein Ein-Klick-Alles |
| Einzeldatei annehmen | zuerst risikoärmste Dateien (z. B. Tests) |
| Ablehnen und erneut | Im Follow-up: «Nur X ändern, Y nicht anfassen» |
| Git-Integration | Nach Annahme mit `git diff` nachprüfen, dann committen |

[Diff, Kommentare und Überprüfung](/guide/desktop-app/diffs-comments-and-review/) der Desktop-App ist vollständiger; IDE-Seite bleibt **leicht und hochfrequent**.

## Empfohlene Prompt-Gewohnheiten

Vor Aufgabenstart festschreiben:

- erlaubte Pfad-Globs
- verboten: `git push`, Lockfile ändern (außer explizit verlangt)
- am Ende: Änderungszusammenfassung listen, **nicht automatisch committen**

Siehe [Muster für menschliche Freigabe](/cases/workflows/human-approval-patterns/)

## Häufige Fehler

- Grünes Test-Icon vertrauen, ohne selbst gelaufen zu haben
- Logikänderungen in großen Auto-Format-Diffs verstecken
- Nach Annahme direkt pushen, ohne PR / Branch-Schutz

## Abnahmeliste

- [ ] `git status` entspricht erwarteten Dateien
- [ ] Tests bestanden (lokal oder CI)
- [ ] Kein `.env`, Token oder Debug-`console.log` übrig
- [ ] Commit-Message von dir geschrieben oder bestätigt

## Häufige Fragen

### 1. Inline-Vorschlag wirkt klein — einfach annehmen?

Besser keine solche Gewohnheit.

Viele Probleme liegen nicht an „großer Änderung“, sondern an „wirkt klein, also nicht ernst gelesen“.

### 2. Logik-Review fällt mir schwer — was zuerst?

Diese drei Punkte sind schon wertvoll:

- Sind es die gewünschten Dateien?
- Wurde Unerwünschtes gelöscht?
- Offensichtliche Debug-Reste oder Stil-Drift?

### 3. Angenommen = fertig?

Noch nicht.

Annehmen legt Änderungen nur in deinen Arbeitsbereich — danach verifizieren und erst dann committen.

„Änderung annehmen“ in der IDE ist ein Zwischenschritt, keine finale Abnahme.

## Quellen
- [Verifikation und menschliche Überprüfung](/guide/foundations/verification-and-human-review/)
---

**Status:** outdated  
**Anwendbare Produkte:** IDE  
**Prüfhinweis:** Diese Seite hängt an konkreten Überprüfungs-UIs (Inline-Diff, seitliches Diff, Annehmen/Ablehnen von Blöcken); aktuelle öffentliche Official-Quellen reichen nicht für Punkt-für-Punkt-Bestätigung — bis zur neuen Erweiterungsdokumentation nicht `verified`.  
**Zuletzt geprüft:** 2026-07-26
