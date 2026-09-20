---
legacyVerification:
  status: "verified"
  basis: "Mit dem aktuellen Statussystem des Handbuchs, mehreren abgeschlossenen Prüfrunden und dem Vorrang offizieller Quellen abgeglichen. Diese Seite beschreibt interne Standards für die Einstufung als `verified` und für eine Herabstufung."
  checkedAt: "2026-07-26"
title: Technische Inhalte prüfen
description: Redaktionellen Status, Quellenabgleich und Probeläufe unterscheiden; Umfang, Umgebung und Prüfbelege dokumentieren.
locale: de
source_locale: zh-CN
source_revision: cfb077d
translation_status: draft
translated_at: 2026-09-20
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Beitragsregeln an die neuen Metadatenfelder der Website angepasst; das bedeutet nicht, dass sämtliche hier genannten Produktmechanismen erneut getestet wurden.
sidebar:
  order: 30
---

Befehle, Berechtigungen, Preise und Produktfunktionen ändern sich mit Versionen. **Prüfung** sorgt dafür, dass Lesende erwartbare Ergebnisse bekommen.

## Inhalt dieser Seite

Viele halten „sehe keinen Fehler“ für „schon geprüft“.

Im Technikhandbuch sind das zwei Dinge:

- Ersteres: subjektiv „wirkt wahr“
- Letzteres: mit aktueller Version, Umgebung, Schritten wirklich nachvollzogen

Hier: von „wirkt richtig“ zu „mit Belegen jetzt noch richtig“.

## Was „Prüfung“ prüft

Nicht nur Lesbarkeit — ob Lesende es **heute noch nachmachen** können.

Wichtig, weil vieles nicht ewig stabil ist:

- Befehle ändern sich
- Menüorte wandern
- Berechtigungsdefaults ändern sich
- Fähigkeiten und Verfügbarkeit aktualisieren sich

Prüfung ist keine Editiermanie — sie verhindert, dass Lesende alten Docs folgen und stolpern.

## Statusbedeutung

| Status | Bedeutung |
|---|---|
| `planned` | Geplant, noch nicht geschrieben |
| `draft` | In Arbeit, noch nicht fertig |
| `review` | Inhalt fertig, Review ausstehend |
| `verified` | Nach angegebenen Belegen geprüft |
| `outdated` | Nach Produktänderung Update nötig |
| `archived` | Historisch, nicht in Haupnavigation |

## Häufige Missverständnisse

### Redaktioneller Status und Prüfart sind zwei verschiedene Felder

`editorialStatus` hält den Fortschritt beim Schreiben und Prüfen fest. `verification.kind` beschreibt, welche Art von Prüfung tatsächlich erfolgt ist; aus `verified` lässt sich nicht ableiten, dass ein Beispiel ausgeführt wurde.

| Prüfart | Zulässige Schlussfolgerung | Erforderliche Belege |
|---|---|---|
| `editorial` | Struktur, Formulierung oder interne Verweise wurden geprüft | Prüfzusammenfassung und Datum |
| `source-checked` | Fakten im angegebenen Umfang stimmen mit den Quellen überein | Konkrete Quellenlinks, Zusammenfassung und Datum |
| `run-tested` | Das Beispiel wurde in der dokumentierten Umgebung ausgeführt | Umgebung, Ausführungs- und Prüfprotokolle, Zusammenfassung und Datum |

`run-tested` garantiert keine allgemeine Gültigkeit für alle Plattformen. Die Zusammenfassung muss erklären, was geprüft und was nicht geprüft wurde; eine eigenständige Nachrechnung ist keine Prüfung durch eine zweite Person. Alte Einträge ohne Belege bleiben in `legacyVerification` und werden keiner neuen Prüfart automatisch zugeordnet.

```yaml
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Struktur und interne Links geprüft; das Beispiel wurde nicht ausgeführt.
```

Quellenabgleiche und Probeläufe verwenden eine `evidence`-Liste, deren Einträge jeweils `label` und `href` enthalten. Probeläufe benötigen außerdem `environment` mit System, relevanter Clientversion und Versionen der Abhängigkeiten. Der Build weist Probelauf-Einträge ohne Umgebung oder Beleglinks zurück. Dass ein Link existiert, beweist noch nicht die Aussagekraft des Belegs; die Verantwortlichen müssen den Eintrag lesen.

### Community-Artikel helfen verstehen, ersetzen keine Faktenprüfung

Community-Artikel helfen, Themen zu finden.

Aber bei:

- Befehlsnamen
- Berechtigungsverhalten
- Produkteinstiegen
- Preis, Quota, Regionsunterschieden

zurück zur offiziellen Doku oder aktuellem Lauf.

### Prüfung ≠ einzelne Sätze scannen

Sätze können einzeln ok sein, die Kette nicht:

- Produkt und Seite passen nicht
- Schrittfolge falsch
- Default-Prämissen fehlen
- Titel verspricht mehr als verifizierter Umfang

Als **ganze Operationskette** prüfen, nicht nur Wortlaut.

## Prüfliste

1. **Umfang nennen**: Produkt (App/CLI/IDE/Cloud), OS, CLI-Version
2. **Schrittweise reproduzieren**: von Null oder sauberem Worktree
3. **Offizielle Grundlage**: Produktfakten mit konkreten offiziellen Quellen belegen; für stabile Methodenübungen echte Eingaben und Prüfprotokolle verwenden, ohne eine offizielle Bestätigung vorzutäuschen
4. **Community-Quellen**: Community-Artikel nur als Themenreferenz; Fakten offiziell
5. **Datum aktualisieren**: `verification.checkedAt` nur auf das tatsächliche Prüfdatum setzen; alte Daten nicht massenhaft auffrischen und als erneute Prüfung ausgeben
6. **Unabhängiges Review**: `verified` idealerweise zweite Person ≠ Autor

## Prüfreihenfolge

1. Welches Produkt, Einstieg, Szenario
2. Schritte von vorn durchgehen
3. Flüchtige Infos gegen offizielle Doku
4. Unsicheres / Nicht-Reproduziertes herabstufen
5. Status und Datum aktualisieren

Lieber `review` behalten, als `verified` ohne genug Belege.

## Flüchtige Informationen

Quartalsweise oder bei Major-Release neu prüfen:

- Befehls- und Subbefehlsnamen, Flags
- Berechtigungsdefaults und Sandbox-Verhalten
- Tarife, Modellnamen, Regionsverfügbarkeit
- MCP-/Hook-Ereignisnamen

## Bei Fehlschlag

- Auf `review`, `draft` oder `outdated` herabstufen
- Im PR sagen, welcher Schritt von der offiziellen Doku abweicht
- Große Abweichung: Issue mit `outdated`

## Verwandt

- [Handbuch-Versionspolitik](/de/guide/start-here/handbook-version-policy/)
- [Offizielle Ressourcen](/de/guide/reference/official-resources/)

`verified` heißt: „nach aktuellen Belegen wirklich geprüft und nachvollziehbar“ — Autor-Selbstvertrauen reicht nicht.
