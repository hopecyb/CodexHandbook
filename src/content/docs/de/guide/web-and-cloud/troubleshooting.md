---
title: Cloud-Fehlersuche
description: Grenze Cloud-Fehler auf den fünf Ebenen Repository, Setup, Netzwerk, Agent und Auslieferung ein.
sidebar:
  order: 80
locale: de
source_locale: zh-CN
source_revision: 4ba9a4d
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Ein neuer Cloud-Versuch verbraucht erneut Zeit, ergänzt aber fehlende Berechtigungen, Abhängigkeiten oder Netzwerkkonfiguration nicht automatisch. Bestimme zuerst, in welcher Phase der Fehler auftritt.

## Triage auf fünf Ebenen

| Phase | Typische Symptome | Erster Prüfpunkt |
|---|---|---|
| Repository-Verbindung | Repository fehlt in der Liste, 403, Branch existiert nicht | GitHub-Autorisierungsumfang, Organisationsrichtlinie, Ausgangs-Branch |
| Container/Setup | `command not found`, Installation von Abhängigkeiten schlägt fehl | Fixierte Laufzeit, Setup-Skript, Secret |
| Agent-Netzwerk | Setup kann herunterladen, `curl` des Agents schlägt fehl | Agent access standardmäßig Off, Allowlist, HTTP-Methoden |
| Agent-Ausführung | Änderungen verfehlen das Ziel, Testbefehl existiert nicht | Prompt-Umfang, `AGENTS.md`, Arbeitsprotokoll |
| Auslieferung | Diff unvollständig, PR kann nicht erstellt werden | Branchzustand, Schreibberechtigung, Schutzregeln |

## Zuerst Nachweise sichern

Notiere Repository, Ausgangs-Commit, Umgebungsname, Fehlerphase, ersten aussagekräftigen Fehler und vollständigen Befehl. Bewahre nicht nur die letzte Aussage „exit 1“ auf.

```text
Umgebung: api-node22
Ausgangspunkt: main@abc123
Phase: setup
Befehl: pnpm install --frozen-lockfile
Erster Fehler: ERR_PNPM_FETCH_401 ...
Lokale Abweichung: Lokal wurde ~/.npmrc verwendet, in Cloud ist NPM_TOKEN nicht konfiguriert
```

Eine solche Aufzeichnung weist direkt auf den Fix und verhindert, dass der nächste Lauf erneut raten muss.

## Häufige Probleme

### Secret im Setup verfügbar, in Agent aber leer

Das ist das vorgesehene Verhalten: Secrets werden vor der Agent-Phase entfernt. Führe Installationsschritte mit Zugangsdaten im Setup aus. Wandle ein Secret nicht in eine normale Umgebungsvariable um, um die Schutzmaßnahme zu umgehen.

### Netzwerk im Setup verfügbar, in Agent aber nicht

Auch dies ist das Standardverhalten. Wenn die Aufgabe tatsächlich Agent-Netzwerk benötigt, aktiviere es in der Umgebung, beschränke Domains und HTTP-Methoden und prüfe anschließend die Protokolle.

### Veraltete Abhängigkeiten durch den Cache

Änderungen an Setup, Maintenance, Variablen oder Secrets machen den Cache automatisch ungültig. Wenn Änderungen im Repository selbst den Cache inkompatibel machen, verwende Reset cache auf der Umgebungsseite. Prüfe bei gemeinsam genutzten Teamumgebungen zuerst die Auswirkungen auf andere Benutzer.

### Lokal grün, Cloud rot

Vergleiche Node-/Python-Version, Sperrdatei, Systemabhängigkeiten, versteckte lokale Konfiguration, VPN-/localhost-Dienste und Pfade mit Groß-/Kleinschreibung. Überführe Unterschiede in ein ausdrückliches Setup und Repositoryregeln.

### PR-Review wurde nicht ausgelöst

Bestätige, dass Cloud für das Repository konfiguriert und Code review aktiviert ist, der Kommentar genau `@codex review` lautet und die GitHub-Integration die nötigen Berechtigungen besitzt. Automatische Reviews müssen zusätzlich separat aktiviert werden.

## Wann zur lokalen Arbeit zurückkehren?

Wenn das Problem von einem lokalen Dienst abhängt oder zwei aufeinanderfolgende Läufe nur die Umgebung statt des fachlichen Codes reparieren, reproduziere es zunächst minimal lokal. Dokumentiere erfolgreiche Befehle, Versionen und Tests in `AGENTS.md` oder Setup und delegiere erst danach erneut an Cloud.

## Abnahme nach der Lösung

- [ ] Dieselbe Umgebung läuft reproduzierbar von einem sauberen Ausgangspunkt
- [ ] Das Problem wurde nicht durch größere Repository-Berechtigungen oder unrestricted Netzwerk verdeckt
- [ ] Protokolle enthalten kein Secret
- [ ] Ergebnis-Diff und Tests wurden weiterhin menschlich geprüft

## Offizielle Grundlage

- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- [Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)

---

**Status:** verified

**Unterstützte Produkte:** Cloud

**Zuletzt geprüft:** 2026-08-26
