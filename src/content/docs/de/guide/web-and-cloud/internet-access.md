---
title: Internetzugriff
description: 'Outbound-Policy der Cloud-Umgebung, Abhängigkeitsinstallation und Datenexfiltrationsrisiko — bedarfsgerecht öffnen und Grenzen halten.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Cloud-Aufgaben brauchen oft **Outbound**: npm/PyPI-Packages, APIs, Submodule. Gleichzeitig ist Internetzugriff eine **hohe Datenexfiltrationsfläche** — der Agent kann Repo- oder Secret-Inhalte an externe Dienste tragen.

## Inhalt

- Kann die Cloud-Umgebung default ins Internet?
- Wann öffnen, wie Exposition minimieren
- Zusammenspiel mit lokaler Sandbox und Secrets

## Grundgrenze

„Braucht Netz“ ≠ „unbeschränktes Netz“.

Viele sehen nur entweder/oder:

- komplett offline
- der Bequemlichkeit wegen alles offen

Üblicher: nur die Netzfähigkeiten, die die Aufgabe braucht.

## Zwei „Netz“-Schichten

| Schicht | Bedeutung |
|---|---|
| Cloud-Umgebung Outbound | Darf die Remote-Maschine Public/Private APIs erreichen? |
| Agent-Tool-Netz | Web Search, curl in der Session (clientabhängig) |

Fokus hier: **Cloud-Umgebung**; allgemein: [Sandbox und Netzwerk](/guide/foundations/sandbox-and-network/).

## Lokal online ≠ Cloud online

Lokal vielleicht weil:

- bereits eingeloggt
- lokales `.npmrc`, SSH-Key, Proxy
- Firmen-VPN

Cloud erbt das nicht. „Lokal `npm install`“ ⇒ nicht automatisch „Cloud auch“.

## Typische Outbound-Bedarfe

- Abhängigkeiten: `npm install`, `pip install`, `go mod download`
- Private Registry ([Secrets](/guide/web-and-cloud/secrets-and-variables/))
- Drittanbieter-APIs (Payment, Maps, LLM-Gateway …)
- Submodule oder Build-Assets

## Entscheidungsprinzip

Ist ein Netzschritt für **diese** Aufgabe nicht nötig — nicht öffnen.

- Package-Quellen für Install: meist nötig
- Unrelated Sites / Extra-Downloads: meist nicht

## Empfohlene Strategie

### Default eng, nach Bedarf öffnen

1. In [Cloud-Umgebungen](/guide/web-and-cloud/cloud-environments/) aktuelle Netzpolicy prüfen
2. **Erforderliche Domains** listen (Package-Manager, Firmen-API) — kein „ganzes Netz“
3. In `AGENTS.md`: erlaubte URLs; Keys nicht in Prompts
4. Testaufgabe: Abhängigkeiten installierbar, unrelevante Sites blockiert (falls granular möglich)

### Arbeitsteilung mit Secrets

| Inhalt | Wohin |
|---|---|
| API-Key, Token | Cloud Secrets, nicht Repo |
| Erlaubte API-Base-URLs | Doku oder Variablen**namen** (nicht Werte) |
| Proxy / Mirror-URLs | Team-Standardconfig |

## Häufige Missverständnisse

### 1. Netz nur „bequemer“, kein Security-Thema

Mit Netz wird es zugleich:

- Abhängigkeitsdownload
- Credential-Nutzung
- Datenexport

### 2. Kein Secret im Prompt = absolut sicher

Kann die Umgebung Secrets lesen und Ergebnisse nach außen senden, bleibt Risiko.

### 3. Web Search = Cloud-Outbound

Eines ist Remote-Umgebungs-Netz, eines Session-Tool-Netz — getrennt troubleshooten.

### Schutz vor Exfiltration

- Keine Prod-DB-Strings in Aufgabenbeschreibungen
- Prüfen, ob Agent `.env`/Key-Inhalte nach außen sendet
- Unvertrauenswürdige Repos: erste Cloud-Läufe **ohne Outbound oder Read-only-Sandbox**

## Mit lokaler Dev abstimmen

Lokales `curl` ≠ Cloud — häufige „Cloud rot“-Ursachen:

| Phänomen | Mögliche Ursache |
|---|---|
| Abhängigkeitsinstall fehlgeschlagen | Outbound gesperrt oder Registry braucht Auth |
| Submodule fehlen | SSH-Key nicht als Secret |
| Interne API Timeout | Cloud nicht im Firmen-VPN |

Richtung: HTTPS + Token, erreichbare Mirrors, oder Doku: Cloud unterstützt interne Ressourcen nicht.

## Häufige Fehler

- Global Outbound offen + unbeschränkte Tasks auf Prod-Repos mit Secrets
- Annehmen, Cloud teile lokales `.npmrc` (ungepusht / kein Secret)
- „Braucht Netz“ mit „braucht Web-Search-Tool“ vermischen
- Erst bei Install-Fehler merken, dass Cloud keine lokale Login-Session hat

## Abnahme-Checkliste

- [ ] Erforderliche Outbound-Domains/Services für Cloud-Aufgaben des Repos gelistet
- [ ] Secrets konfiguriert, nicht in Git
- [ ] Testbranch: Install + Test durch
- [ ] Team weiß, welche Daten nicht in vernetzte Prompts gehören

## Quellen
- OpenAI Codex Cloud Netz- und Security-Dokumentation
---

**Status:** outdated  
**Anwendbare Produkte:** Cloud  
**Prüfhinweis:** Default-Outbound, Domain-Policy und granulare Netzsteuerung hängen stark an Produkt und Org-Security; ohne starke aktuelle offizielle Netzpolicy-Doku nicht `verified`.  
**Zuletzt geprüft:** 2026-07-26
