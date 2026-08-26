---
title: Definition of Done
description: Gemeinsame Fertigstellungs-Checkliste für Teams und Einzelpersonen.
locale: de
source_locale: zh-CN
source_revision: e6b6511
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 60
---

„Definition of Done“ heißt schlicht: Vorab sagen, bis zu welchem Grad etwas als wirklich fertig gilt.

Ohne diesen Schritt passiert oft:

- Sie finden, es fehlt noch etwas
- Codex findet, es sei erledigt
- Beide haben nicht Unrecht — die Standards waren nicht ausgerichtet

## Warum dieser Schritt zählt

Viele Nacharbeiten entstehen, weil „fertig“ am Anfang nicht klar war.

Zum Beispiel:

- Reicht geänderter Text, oder muss die Seitenvorschau auch stimmen?
- Reicht ein erfolgreicher Build, oder muss der Button manuell klickbar geprüft werden?
- Reicht die Funktion, oder braucht es noch Erklärdokumentation?

Ohne Vorabklärung reden alle aneinander vorbei.

Persönliche Minimal-Done-Liste:

- [ ] Diff geprüft
- [ ] Abnahmekriterien einzeln abgehakt
- [ ] Tests oder manuelle Überprüfung erledigt
- [ ] Keine Secrets im Repo
- [ ] Offene Follow-ups notiert

Die Teamvariante folgt in späteren Governance-Meilensteinen.

## Häufige Missverständnisse

### 1. Definition of Done muss nicht formal oder komplex sein

In Phase eins reichen schon drei Punkte:

- Was ändern
- Wie abnehmen
- Wann es als unfertig gilt

### 2. Es ist nicht dasselbe wie „Ziel“

Unterscheidung:

- **Ziel**: welches Ergebnis Sie wollen
- **Definition of Done**: wie Sie beweisen, dass das Ergebnis erreicht ist

Beispiel:

- Ziel: Button-Text der Startseite reparieren
- Done: nur Startseite; neuer Button-Text; Seitenvorschau ok

### 3. Muss nicht jedes Mal lang sein

Nein.

Klarheit zählt mehr als Länge.

## Kurzes Template

Auch diese Fassung reicht:

```text
Fertigstellungsstandards:
1. Nur den vereinbarten Umfang ändern
2. Ergebnis entspricht meinen Anforderungen
3. Überprüfungsschritte erledigt; mir sagen, wie ich prüfe
```

„Definition of Done“ macht vor allem klar, bis wohin „fertig“ reicht — damit Ihre und Codex’ Einschätzung nicht auseinanderlaufen.

---

**Status:** verified  
**Gilt für:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite erklärt nur Rolle und Schreibweise der Definition of Done; Konzepte, Beispiele und Listen wurden geprüft, der Text hängt nicht von volatilen Produktfakten ab.  
**Zuletzt geprüft:** 2026-07-26
