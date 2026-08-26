---
title: Cloud-Aufgaben in der IDE
description: Delegiere Langzeitaufgaben aus der IDE an Codex Cloud und kehre zu einem prüfbaren Ergebnis zurück.
sidebar:
  order: 60
locale: de
source_locale: zh-CN
source_revision: ea8a618
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Die IDE kann schnelle Iterationen lokal ausführen und zugleich eine Verbindung zu Codex im Web herstellen, um längere Aufgaben an Cloud zu delegieren. Der Einstieg bleibt im Editor, Ausführungsumgebung, Repository-Zustand und Netzwerkgrenzen liegen danach jedoch in der Cloud.

## Wann delegieren?

| Lokal bleiben | An Cloud delegieren |
|---|---|
| Die aktuelle Auswahl muss schnell und wiederholt angepasst werden | Die Aufgabe umfasst viele Schritte und läuft lange |
| Die Aufgabe hängt von noch nicht committetem lokalem Zustand ab | Die Eingaben liegen im Remote-Repository oder können hochgeladen werden |
| Lokale Spezialwerkzeuge sind erforderlich | Abhängigkeiten und Verifikation lassen sich in der Cloud-Umgebung reproduzieren |
| Du musst den Prozess in Echtzeit bedienen | Du möchtest lokal währenddessen an etwas anderem arbeiten |

Cloud besitzt nicht automatisch noch nicht committete lokale Dateien, lokale Zugangsdaten oder laufende Prozesse. Lege vor der Delegation eindeutig fest, von welchem Repository, Branch und Commit die Aufgabe ausgeht.

## Checkliste vor der Delegation

- [ ] Du bist mit einem ChatGPT-Konto angemeldet; Codex Cloud akzeptiert keine API-Key-Anmeldung
- [ ] GitHub ist verbunden oder du verwendest die derzeit unterstützte GitLab-Beta-Integration
- [ ] Die Cloud-Umgebung kann Installations- und Verifikationsskripte ausführen
- [ ] Erforderliche Variablen und Secrets sind in der Umgebung konfiguriert und stehen nicht im Prompt
- [ ] Lokale nicht committete Änderungen wurden behandelt oder ausdrücklich aus der Aufgabe ausgeschlossen
- [ ] Ziel, erlaubte Pfade, Verbote und Abnahmebefehle sind eindeutig beschrieben

## End-to-End-Beispiel

```text
Ziel: Behebe im Wiederholungsmodul den Fehler, durch den nach Erreichen des Limits noch einmal gewartet wird.
Ausgangspunkt: Repository acme/retry-service, Branch fix/retry-limit.
Umfang: Ändere nur src/retry.ts und die zugehörigen Tests.
Einschränkungen: Keine Abhängigkeiten aktualisieren, öffentliche API nicht ändern und nicht nach main pushen.
Abnahme: Führe pnpm test -- retry und pnpm typecheck aus; zeige Diff und Befehlsergebnisse.
```

Empfohlener Ablauf:

1. Füge in der IDE relevante Dateien oder eine Auswahl hinzu und bestätige zunächst die Problemgrenzen.
2. Wähle Cloud, um die längere Aufgabe fortzusetzen.
3. Prüfe Plan, Fortschritt und Verifikationsergebnisse in Cloud.
4. Kehre zur IDE oder ins Web zurück und prüfe das reviewfähige Ergebnis.
5. Rufe den Branch ab oder übernimm die Änderungen über einen PR.
6. Teste erneut in einer vertrauenswürdigen lokalen Umgebung und führe vor dem Zusammenführen ein manuelles Review durch.

„Abgeschlossen“ in Cloud bedeutet nur, dass die Remote-Ausführung beendet ist. Es bedeutet nicht, dass der Code zusammengeführt werden kann. Unterschiede bei Abhängigkeiten, Betriebssystem oder Zugangsdaten zwischen Remote, lokal und CI können weiterhin Probleme aufdecken.

## Konflikte und Sicherheit

- Lass lokale und Cloud-Ausführung nach der Delegation nicht dieselbe Datei gleichzeitig ändern.
- Füge keine Produktionszugangsdaten in Prompts ein; verwende Secrets der Umgebung.
- Behandle Netzwerkzugriff in Cloud nicht als Standardfunktion; konfiguriere die Allowlist der Umgebung.
- Push, PR-Erstellung und Zusammenführung sind getrennte Aktionen. Die Zusammenführung benötigt weiterhin ein menschliches oder CI-Gate.

Lies als Nächstes [Cloud-Umgebungen](/de/guide/web-and-cloud/cloud-environments/) und [Pull Requests erstellen](/de/guide/web-and-cloud/create-pull-requests/).

## Offizielle Grundlage

- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)
- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)

---

**Status:** verified

**Unterstützte Produkte:** IDE, Cloud

**Zuletzt geprüft:** 2026-08-26
