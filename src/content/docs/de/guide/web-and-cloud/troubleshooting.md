---
title: Cloud-Troubleshooting
description: 'Häufige Fehlerindex zu GitHub-Verbindung, Umgebung, Secrets, Outbound und PR.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Bei Cloud-Problemen löst Wiederholen selten die Ursache.

Cloud-Probleme liegen oft in **Berechtigung, Umgebungsdifferenz, Credentials oder Netz**. Diese Seite mappt Symptome auf Themen — statt blind im Chat zu retryen.

## Inhalt

- Bei Task-Fehler zuerst welche Ursachenklasse
- Arbeitsteilung mit lokalem Troubleshooting
- Wann zurück zu lokalem Kleinschritt

## Zuerst prüfen

„Cloud rot, lokal grün“ → zuerst Laufbedingungen.

Häufig:

- Remote-Umgebung ≠ lokal
- Cloud sieht ungepushstes Lokal nicht
- Secrets fehlen
- Netz oder Rechte eingeschränkt

Zuerst Bedingungen, dann die Aufgabe selbst.

## Schnelle Triage

| Symptom | Zuerst |
|---|---|
| Repo-Verbindung / 403 | [GitHub verbinden](/guide/web-and-cloud/connect-github/) |
| Abhängigkeitsinstall fehlgeschlagen | [Internetzugriff](/guide/web-and-cloud/internet-access/) · [Cloud-Umgebungen](/guide/web-and-cloud/cloud-environments/) |
| Private Packages / API 401 | [Secrets und Variablen](/guide/web-and-cloud/secrets-and-variables/) |
| Task wartet ewig | [Delegieren und nachverfolgen](/guide/web-and-cloud/delegate-and-follow-up/) · Freigabe ausstehend? |
| Lokaler Commit, Cloud sieht nichts | Gepusht? Cloud liest ungepushstes nicht |
| PR öffnet/pusht nicht | Branch Protection · [PR erstellen](/guide/web-and-cloud/create-pull-requests/) |
| Tests Cloud rot, lokal grün | Versions-/Umgebungstabelle in [Cloud-Umgebungen](/guide/web-and-cloud/cloud-environments/) |

## Reihenfolge

1. Repo und Branch korrekt?
2. Rechte und Autorisierung genug?
3. Umgebung und Abhängigkeiten komplett?
4. Secrets und Netz ok?
5. Aufgabenbeschreibung ohne kritische Grenzen?

Das vor dem erneuten Lauf ist effektiver.

## Verbindung und Rechte

**Symptom:** OAuth ok, Clone scheitert.

**Prüfen:**

1. Scope enthält Ziel-Org/Repo?
2. Repo archived? GitHub-App-Limits?
3. Persönlicher Account an Org-SSO-Repo?

**Symptom:** Push abgelehnt.

**Prüfen:** Branch Protection, required review, direkter Push auf `main`?

## Häufige Missverständnisse

### 1. Fehler in der Install-Phase = immer Abhängigkeit?

Kann Netz, Auth, Secret, private Registry sein.

### 2. Lokal läuft = Code ok, Cloud „zickt“?

Oft:  
**Lokal hat Voraussetzungen, die Cloud nicht hat.**

### 3. Hängt = Modell denkt?

Auch:

- Wartet auf Freigabe
- Wartet auf Netz
- Wartet auf Umgebungsstart
- Aufgabe zu groß

## Umgebung und Abhängigkeiten

**Symptom:** `command not found` (node, python …).

**Prüfen:** Basisimage mit Runtime? Version und Install in `AGENTS.md`?

**Symptom:** Lockfile-Konflikt oder Install-Timeout.

**Prüfen:** Outbound; Registry-Mirror; VPN nötig (Cloud meist nicht im Intranet)

## Secrets und Variablen

**Symptom:** Env-Vars beim Build leer.

**Prüfen:**

- Secret-Name = Doku (Groß-/Kleinschreibung)
- Korrektes Repo-/Umgebungsscope
- Secret-Wert im Prompt → Redaktion?

Mehr: [Secrets und Variablen](/guide/web-and-cloud/secrets-and-variables/)

## Hängen und Timeouts

| Ursache | Behandlung |
|---|---|
| Menschliche Freigabe | App/Handy approve/reject |
| Aufgabe zu groß | In kleinere Delegationen splitten |
| Langsamer Start | Erster Cold Start normal; dauerhaft langsam → offizielle Statusseite |

Follow-up: [Delegieren und nachverfolgen](/guide/web-and-cloud/delegate-and-follow-up/)

## Output-Qualität

Cloud fertig, Ergebnis unbrauchbar:

1. Fehlen Abnahmekriterien in der Beschreibung?
2. Denselben Branch lokal checkouten und testen
3. Mit [Diagnose vor Fix](/cases/workflows/diagnose-before-fixing/) nachverfolgen statt Ganzaufgabe neu

## Wann zuerst zurück lokal

Zwei Runden nur Cloud-Bedingungen statt Aufgabenfortschritt:

- Lokal minimale Repro
- Abhängigkeiten, Befehle, Verifikation klar dokumentieren
- Dann neu an Cloud

Spart Rätselraten in der Remote-Umgebung.

## Verhältnis zum globalen Troubleshooting-Index

Lokale CLI/IDE/App-Probleme: [Referenz · Troubleshooting](/guide/reference/troubleshooting/). Diese Seite nur **Cloud-spezifische** Kette.

## Quellen
- OpenAI Codex Cloud Support-Dokumentation
---

**Status:** outdated  
**Anwendbare Produkte:** Cloud  
**Prüfhinweis:** Hilfreiches Triage-Framework auf Annahmen zu aktueller Cloud-Repo-Verbindung, Secrets, Freigabe, Netz und PR; Mapping Symptom→Thema bei Produktwechsel neu an offiziellen Support-Docs ausrichten.  
**Zuletzt geprüft:** 2026-07-26
