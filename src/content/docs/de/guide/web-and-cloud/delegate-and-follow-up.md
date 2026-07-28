---
title: Delegieren und nachverfolgen
description: 'Aufgaben aus App, IDE oder Handy an Cloud übergeben und nach dem Verlassen des Rechners Status, Freigabe und Iteration fortsetzen.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Delegieren** heißt: Aufgabe an Cloud in der Remote-Umgebung. **Nachverfolgen** heißt: während oder nach dem Lauf Fortschritt sehen, Kontext nachreichen, riskante Aktionen freigeben, Änderungen verlangen. Kernworkflow für „außerhalb des Arbeitsplatzes weiterkommen“.

## Inhalt

- Wann Cloud statt lokal
- Unterschiede der Delegations-Einstiege
- Effektives Follow-up statt „rauswerfen und vergessen“

## So läuft der Flow

Cloud-Aufgaben ähneln:

- Aufgabe klar erklären
- Remote-Lauf starten
- Unterwegs ggf. Einschränkung oder Freigabe
- Am Ende Diff/PR prüfen und entscheiden

Cloud wechselt nur den Ausführungsort — Follow-up und Urteil bleiben bei Ihnen.

## Für wen

| Szenario | Empfehlung |
|---|---|
| Langer Build/Test | An Cloud; lokal anderes |
| Pendeln / Meeting-Pause | Handy: Status, kritische Schritte freigeben |
| Standardisierte Umgebung | Cloud + [Umgebungskonfiguration](/guide/web-and-cloud/cloud-environments/) |
| Schnelles lokales Ausprobieren | [Desktop-App](/guide/desktop-app/) oder [IDE](/guide/ide/local-task-workflow/) |

## Wann delegieren

- Noch viel Ausprobieren, live steuern: zuerst lokal
- Lange Läufe, Laptop verlassen, einheitliche Umgebung: Cloud

## Vor dem Delegieren

- [ ] [GitHub verbunden](/guide/web-and-cloud/connect-github/), Branch-Strategie klar
- [ ] Beschreibung mit Ziel, Scope, Verboten, Abnahme ([Anatomie einer guten Aufgabe](/prompts/task-anatomy/))
- [ ] Nötige ungepushte lokale Commits zuerst pushen oder lokal belassen
- [ ] Secrets / [Outbound](/guide/web-and-cloud/internet-access/) bereit

## Häufige Missverständnisse

### 1. Delegiert = nicht mehr hinschauen

Teuer: je später schiefe Richtung entdeckt, desto mehr Rework.

### 2. Follow-up = „nur mal nach dem Status fragen“

Wertvoller:

- Fehlenden Kontext nachreichen
- Scope einengen
- Riskante Aktionen ablehnen
- Nach Abschluss Nacharbeit verlangen

### 3. Delegieren und lokal sind Gegensätze

Häufig:  
**Lokal explorieren → lange Läufe delegieren → lokal abschließen.**

## Einstiege (Konzept)

| Einstieg | Merkmale |
|---|---|
| [Desktop-App · Lokal und Cloud](/guide/desktop-app/local-and-cloud-tasks/) | Im selben Projekt lokal/Cloud wechseln |
| [IDE · Cloud-Aufgaben](/guide/ide/cloud-task-workflow/) | Mit Selektion und offenen Dateien als Kontext |
| Web / Mobile | Leichtes Ansehen, Freigabe, kurze Follow-ups |

Buttons und Namen produktspezifisch.

## Empfohlener Follow-up-Rhythmus

```text
Delegieren → Umgebung gestartet bestätigen → (optional) Logs mittendrin
    → Riskante Aktionen freigeben → Fertig Diff/PR prüfen
    → Unzufrieden: Nachricht anhängen oder neue Follow-up-Aufgabe
```

Mindestens: **einmal mittendrin + einmal am Ende**.

### Währenddessen

- **Kontext nachreichen**: fehlende Dateien/Grenzen — Follow-up statt Neustart mit Historienverlust
- **Scope einengen**: „Stoppe X, nur Y“
- **Freigabe**: [Muster für menschliche Freigabe](/cases/workflows/human-approval-patterns/) — lieber einen Schritt langsamer als unbekannte Shells batch-approven

### Danach

- Diff im [PR-Flow](/guide/web-and-cloud/create-pull-requests/) prüfen
- [Cloud-Code-Review](/guide/web-and-cloud/code-review/) oder lokalen Branch-Checkout
- Weiter: gleiche PR neu delegieren oder lokal übernehmen

## Mit Benachrichtigungen

[Desktop-Notifications](/guide/desktop-app/notifications/) oder Mobile-Push — sonst hängen Aufgaben an fehlender Freigabe. Team-Regel: wann jemand Prod-Repos freigeben kann.

## Häufige Fehler

- Vage Delegation → Cloud „versteht“ großes Refactoring
- Lokal halb geändert ungepusht, Cloud startet von remote main
- Nie mittendrin schauen — am Ende falsche Richtung, ganze Umgebungswaste
- PR nur „LGTM“ ohne Tests
- „Remote ausgeführt“ = „Remote verantwortlich“

## Abnahme-Checkliste

- [ ] Mindestens ein Einstieg: Cloud-Aufgabe gestartet und abgeschlossen
- [ ] Währenddessen eine wirksame Einschränkung nachgereicht
- [ ] PR oder Branch mit Menschen-Diff-Review

## Quellen

- OpenAI Codex Cloud Task-Dokumentation
- stormzhang `10-cloud.md`, `27-mobile.md`
- KimYx0207 CX-10
- App/Cloud-Kollaborationskapitel auf codex.bozhouai.com

---

**Status:** outdated  
**Anwendbare Produkte:** Cloud / App / IDE / Mobile  
**Prüfhinweis:** Abhängig von aktuellen App-/IDE-/Web-/Mobile-Delegationen; Cross-Device-Follow-up ändert sich schnell — vor `verified` an offizielle Docs angleichen.  
**Zuletzt geprüft:** 2026-07-26
