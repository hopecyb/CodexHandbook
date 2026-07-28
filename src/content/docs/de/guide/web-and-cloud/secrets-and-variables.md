---
title: Secrets und Umgebungsvariablen
description: 'API-Keys, Tokens und nicht-sensible Konfigurationsvariablen in Cloud sicher injizieren.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Cloud-Aufgaben brauchen oft private APIs, Package-Registries oder Datenbanken. Credentials über **Secrets und Umgebungsvariablen** injizieren — nicht in Code, Prompt, Issue, Chat oder Git-Historie.

## Inhalt

- Secrets vs. gewöhnliche Umgebungsvariablen
- Konfiguration in Cloud-Konsole / Repo-Settings
- Verhältnis zu GitHub Actions Secrets

## Secret vs. Umgebungsvariable

- **Secret**: Werte, die nicht beliebig sichtbar sein dürfen — API-Key, DB-Passwort, Private Key
- **Umgebungsvariable**: Konfiguration für Programme — teils sensibel, teils nicht

Nicht jede Variable ist ein Secret; Secrets gehören in sichere Injection, nicht hardcodiert.

## Konzeptuelle Unterscheidung

| Typ | Beispiele | Speicheranforderung |
|---|---|---|
| **Secret** | API-Key, Private Key, DB-Passwort | Verschlüsselt, UI maskiert, nicht in Logs |
| **Variable** | `NODE_ENV=production`, Feature-Flags | Kann unverschlüsselt sein; Business-Policy trotzdem schützen |
| **`.env` im Repo** | Lokale Entwicklung | **Nicht committen**; Cloud: Konsolen-Secrets |

Gesamtregel: [Sensibler Kontext](/guide/context/sensitive-context/)

## Häufige Missverständnisse

### 1. „Nur kurz den Key einfügen — kein Problem?“

Hohes Risiko. Einmal eingefügt in:

- Chat
- Issue
- PR-Beschreibung
- Shell-Historie
- Git-Commit

kann es über Logs, Notifications, Screenshots, Historie und Kollaborateure streuen.

### 2. „`.env` committen, dann liest Cloud?“

`.env` für lokal — nicht ins VCS. In Cloud: Plattform-Secret-Management.

### 3. „Name egal, Hauptsache Wert stimmt?“

Viele Fehler liegen an:

- Tippfehler im Namen
- Falschem Scope
- Code liest einen anderen Variablennamen

Namen in Doku, Code und Cloud-Settings vereinheitlichen.

## Konfigurationsprinzipien

1. **Least Privilege**: jedes Secret nur für eine Aufgabenklasse
2. **Isolation nach Repo/Umgebung**: Staging und Production getrennt
3. **Rotation**: Tokens regelmäßig; alte Jobs dürfen ausfallen
4. **Audit**: wer Secrets hinzufügt/ändert (Teamprozess)
5. **Nie echoen**: Task-Logs und PR-Kommentare ohne Secret-Werte

## Minimaler Ablauf

1. Welche Externservices braucht die Aufgabe wirklich?
2. Nur nötige Secrets — nicht sofort volle Prod-Rechte
3. In Doku „welcher Secret-Name“ — ohne Wert
4. Testaufgabe zum Lesen
5. Dann echte Aufgabe

## Empfohlener Workflow

```text
1. Secret in Cloud / GitHub Settings (SCREAMING_SNAKE, z. B. NPM_TOKEN)
2. In AGENTS.md: «NPM_TOKEN nötig für private Packages» — ohne Wert
3. Cloud-Aufgabe starten; bei Fehler Name und Scope prüfen
4. CI: GitHub Actions Secrets, Namen an Cloud anlehnen für Doku
```

Mit [GitHub-Integration](/guide/integrations/github/): Plattform-Secrets bevorzugen — Agent soll Keys nicht aus Issue-Bodies kopieren.

## Wann als Secret behandeln

Fragen:

- Bei Leak: Geld-, Daten-, Rechte- oder Business-Risiko?

Wenn ja: nicht in öffentliche Doku, Prompt, Chat oder Repo.

## Internetzugriff und Secrets

Manche Aufgaben brauchen Outbound für Packages/APIs:

- Outbound-Policy nach Organisationssicherheit
- Auch mit Netz: kein Bearer-Token im Prompt
- Unvertrauenswürdige Repos: keine Produktions-Secrets

## Häufige Fehler

| Fehler | Risiko |
|---|---|
| `.env` committen | Permanenter Leak |
| Key in Issue/Aufgabenbeschreibung | Logs und Notifications streuen |
| Prod-Secret für Experimente | Fehlbedienung Prod-Daten |
| Secret-Name ≠ Code | Stiller Fehlschlag |
| Admin-Token „der Einfachheit halber“ | Zu große Angriffsfläche |

## Abnahme-Checkliste

- [ ] Keine hardcodierten Keys im Repo (Secret Scanner möglich)
- [ ] Cloud-Secret-Liste = dokumentierte Namen
- [ ] Fehlerlogs ohne Secret-Klartext
- [ ] Austritt-/Rotationsprozess definiert

## Quellen
- OpenAI Codex Cloud secrets
---

**Status:** outdated  
**Anwendbare Produkte:** Cloud  
**Prüfhinweis:** Konkrete Aussagen zu Config-Ort, Repo-Scope und Actions-Secrets brauchen stärkere aktuelle offizielle Secrets-Doku; bis dahin `outdated`.  
**Zuletzt geprüft:** 2026-07-26
