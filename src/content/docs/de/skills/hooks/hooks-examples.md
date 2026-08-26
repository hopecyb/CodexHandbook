---
title: Beispiele für Hook-Konfigurationen
description: Implementiere mit einer echten hooks.json und einem Python-Skript aus der Standardbibliothek einen testbaren PreToolUse-Schutz.
locale: de
source_locale: zh-CN
source_revision: 5a86fd4
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Dieses Kapitel enthält keine veralteten Beispielereignisse und Konfigurationsfelder mehr. Das Beispiel entspricht der aktuellen offiziellen Struktur von `hooks.json` und enthält ausführbare Tests.

Alle Dateien befinden sich unter [`examples/hooks/secret-guard/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/hooks/secret-guard).

## Ziel und Grenzen

Ziel: Vor der Werkzeugausführung ablehnen, wenn die Befehlseingabe für `Bash` oder `apply_patch` eine Testzeichenfolge enthält, die wie eine AWS Access Key ID aussieht.

Das Beispiel demonstriert ausschließlich Eingabe, Ausgabe und Teststruktur eines Hooks:

- Es ersetzt keinen professionellen Secret-Scanner
- Der reguläre Ausdruck erzeugt Fehlalarme und übersieht Werte
- Hosted tools werden nicht geprüft
- Vollständige Werkzeugeingaben dürfen nicht protokolliert werden

## 1. hooks.json konfigurieren

```json
{
  "description": "Block obvious secret-shaped strings before local writes.",
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash|apply_patch",
        "hooks": [
          {
            "type": "command",
            "command": "python3 \"$(git rev-parse --show-toplevel)/examples/hooks/secret-guard/pre_tool_use_guard.py\"",
            "timeout": 3,
            "statusMessage": "Checking tool input for secret-shaped strings"
          }
        ]
      }
    ]
  }
}
```

Bei einer echten Verwendung im Repository liegt die Konfiguration normalerweise unter `.codex/hooks.json`, das Skript unter `.codex/hooks/`. Hier bleibt der Pfad unter examples erhalten, damit die vollständigen Materialien des Handbuch-Repositorys direkt verifiziert werden können.

## 2. Ausgabe bei Ablehnung

Das Skript liest das Ereignis-JSON von stdin und prüft ausschließlich `tool_input.command`. Bei einem Treffer gibt es Folgendes aus:

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Secret-shaped string blocked by example hook."
  }
}
```

Ohne Treffer endet es mit `0` und ohne Ausgabe. Normaler Text auf stdout erzeugt keine gültige `PreToolUse`-Entscheidung.

## 3. Tests ausführen

```bash
python3 -m unittest discover examples/hooks/secret-guard -p 'test_*.py'
```

Erwartung: Drei Tests bestehen und decken einen normalen Befehl, einen vermuteten Schlüssel und ein `tool_input` ab, das kein Objekt ist.

Du kannst ein Fixture auch manuell einspeisen:

```bash
printf '%s\n' '{"hook_event_name":"PreToolUse","tool_name":"Bash","tool_input":{"command":"git status"}}' \
  | python3 examples/hooks/secret-guard/pre_tool_use_guard.py
```

Eine normale Eingabe erzeugt keine Ausgabe auf stdout.

## 4. Im Projekt aktivieren

1. Lege Konfiguration und Skript im Ziel-Repository unter einem stabilen Pfad ab.
2. Führe im isolierten Repository die Unit-Tests und einen echten normalen Befehl aus.
3. Starte Codex und öffne `/hooks`, um Quelle und genaue Definition zu prüfen.
4. Verifiziere nach dem Vertrauen separat „normaler Aufruf erlaubt“ und „Testzeichenfolge abgelehnt“.
5. Prüfe nach jeder Skriptänderung erneut. Ein veränderter Hash setzt einen nicht verwalteten Hook wieder auf ausstehendes Vertrauen.

## Von Hinweis zu Blockade wechseln

Produktionsteams beginnen normalerweise mit nicht blockierendem Audit oder zusätzlichem Kontext und wechseln erst später zu deny. Beantworte vorher mindestens:

- Decken Fixtures bekannte Fehlalarme ab?
- Verstehen Benutzer einen Timeout oder Skriptabsturz?
- Sichern CI oder serverseitige Richtlinien dieselbe Regel zusätzlich ab?
- Sind Umgehung und Notfallwiederherstellung auditierbar?

## Offizielle Quelle

- [OpenAI: Hooks configuration and PreToolUse output](https://learn.chatgpt.com/docs/hooks)

---

**Status:** verified

**Unterstützte Produkte:** Umgebungen mit lokalem Codex-Host; Vertrauensverwaltung über `/hooks` in der Codex CLI

**Zuletzt geprüft:** 2026-08-25
