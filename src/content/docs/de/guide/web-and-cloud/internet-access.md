---
title: Internetzugriff
description: Unterscheide Netzwerkzugriff während der Installation von Agent-Netzwerkzugriff und begrenze Risiken nach Domain und HTTP-Methode.
sidebar:
  order: 70
locale: de
source_locale: zh-CN
source_revision: 1e2d815
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Cloud besitzt zwei unterschiedliche Phasen mit Netzwerkzugriff:

| Phase | Standardverhalten | Hauptzweck |
|---|---|---|
| Setup-Skript | Netzwerk verfügbar | Abhängigkeiten und Werkzeuge installieren |
| Agent-Phase | Standardmäßig deaktiviert | Externe Ressourcen während der Agent-Ausführung verwenden |

Ein erfolgreiches `pnpm install` im Setup bedeutet deshalb nicht, dass Agent anschließend mit `curl` auf beliebige Websites zugreifen kann.

## Weshalb der Zugriff standardmäßig deaktiviert ist

Agent-Netzwerkzugriff erhöht die Risiken durch Prompt Injection, Exfiltration von Code oder Daten, schädliche Abhängigkeiten und Repository-Inhalte mit inkompatiblen Lizenzen. Nicht vertrauenswürdige Issues, Websites oder README-Dateien von Abhängigkeiten können Anweisungen enthalten, die Agent zu Exfiltrationsbefehlen verleiten.

Grundregel: Erlaube ausschließlich die für die Aufgabe nötigen Ziele und Aktionen und prüfe die Arbeitsprotokolle.

## Konfigurationsoptionen

Internetzugriff der Agent-Phase wird pro Umgebung konfiguriert:

- **Off:** Agent-Netzwerk vollständig blockieren.
- **On:** Netzwerk erlauben und optional Domains sowie HTTP-Methoden einschränken.

Die Domainliste kann leer beginnen, die Voreinstellung Common dependencies verwenden oder All (unrestricted) auswählen. In einem Produktions-Repository darf unrestricted nicht als schnelle Lösung für einen Fehler dienen.

Wenn die Aufgabe nur Dokumentation lesen oder Inhalte herunterladen muss, beschränke die HTTP-Methoden auf `GET`, `HEAD` und `OPTIONS`. Dadurch werden `POST`, `PUT`, `PATCH` und `DELETE` blockiert, die Daten senden oder verändern können.

## Beispiel für minimale Freigabe

Die Aufgabe muss die Dokumentation einer öffentlichen API abfragen:

1. Behalte zuerst Off bei und bestätige, dass der Fehlschlag tatsächlich durch das Netzwerk verursacht wird.
2. Aktiviere Agent access.
3. Nimm ausschließlich die offizielle Domain in die Allowlist auf.
4. Erlaube nur `GET`, `HEAD` und `OPTIONS`.
5. Führe die Aufgabe erneut aus und prüfe alle ausgehenden Anfragen im Protokoll.
6. Entscheide nach Aufgabenende, ob die Einstellung wieder auf Off gesetzt wird.

## Entscheidende Beziehung zu Secrets

Cloud-Secrets werden vor der Agent-Phase entfernt. Das reduziert das Risiko, dass Agent ein Setup-Secret direkt nach außen überträgt. Normale Umgebungsvariablen, Repository-Inhalte und während der Aufgabe erzeugte Daten können aber weiterhin gesendet werden. Tarne vertrauliche Werte nicht als normale Variablen, um den Secret-Lebenszyklus zu umgehen.

## Abnahmecheckliste

- [ ] Der zwingende Grund für Netzwerkzugriff in der Agent-Phase ist beschrieben
- [ ] Die Allowlist enthält nur erforderliche Domains
- [ ] HTTP-Methoden sind auf die kleinste Menge beschränkt
- [ ] Eingabequellen sind vertrauenswürdig oder Prompt Injection wurde berücksichtigt
- [ ] Protokolle enthalten keinen Befehl zum Hochladen von Repository, Umgebung oder Zugangsdaten
- [ ] Neue Abhängigkeiten wurden auf Quelle, Version und Lizenz geprüft

## Offizielle Grundlage

- [Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)

---

**Status:** verified

**Unterstützte Produkte:** Cloud

**Zuletzt geprüft:** 2026-08-26
