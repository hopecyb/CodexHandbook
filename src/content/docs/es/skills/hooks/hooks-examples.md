---
title: Ejemplo de configuración de Hooks
description: Crea un guardián PreToolUse comprobable con un archivo hooks.json real y un script de la biblioteca estándar de Python.
locale: es
source_locale: zh-cn
source_revision: 5a86fd4
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Este capítulo elimina nombres de eventos y campos ilustrativos antiguos. El ejemplo sigue la estructura oficial actual de `hooks.json` e incluye pruebas ejecutables.

Los archivos completos están en [`examples/hooks/secret-guard/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/hooks/secret-guard).

## Objetivo y límite

Antes de ejecutar una llamada a `Bash` o `apply_patch`, rechaza cualquier entrada de comando que contenga una cadena de prueba con la forma de un AWS Access Key ID.

El ejemplo solo muestra la estructura de entrada, salida y pruebas de un Hook:

- No sustituye un detector profesional de secretos.
- La expresión regular produce falsos positivos y falsos negativos.
- No examina herramientas alojadas.
- No debe registrar la entrada completa de la herramienta.

## 1. Configurar hooks.json

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

En un repositorio real, coloca la configuración en `.codex/hooks.json` y el script en `.codex/hooks/`. El manual conserva las rutas de ejemplo para que el artefacto completo pueda probarse directamente.

## 2. Salida de rechazo

El script lee el JSON del evento desde stdin y comprueba únicamente `tool_input.command`. Si encuentra una coincidencia, imprime:

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Secret-shaped string blocked by example hook."
  }
}
```

Si no hay coincidencia, termina con `0` y no produce salida. El texto normal por stdout no constituye una decisión válida de `PreToolUse`.

## 3. Ejecutar las pruebas

```bash
python3 -m unittest discover examples/hooks/secret-guard -p 'test_*.py'
```

Resultado esperado: pasan tres pruebas, que cubren un comando normal, una posible credencial y un `tool_input` que no es un objeto.

También puedes enviar manualmente una fixture por una tubería:

```bash
printf '%s\n' '{"hook_event_name":"PreToolUse","tool_name":"Bash","tool_input":{"command":"git status"}}' \
  | python3 examples/hooks/secret-guard/pre_tool_use_guard.py
```

Una entrada normal no produce nada en stdout.

## 4. Activarlo en un proyecto

1. Coloca la configuración y el script en el repositorio de destino usando una ruta estable relativa al repositorio.
2. Ejecuta las pruebas unitarias y un comando normal real en un repositorio aislado.
3. Inicia Codex y abre `/hooks` para inspeccionar el origen y la definición exacta.
4. Después de confiar en el Hook, verifica tanto el paso de una entrada normal como el rechazo de la cadena de prueba.
5. Vuelve a revisarlo tras modificar el script; un cambio de hash devuelve un Hook no gestionado al estado pendiente de confianza.

## De advertir a bloquear

Los equipos de producción suelen empezar con auditoría o contexto sin bloqueo y pasan después al rechazo. Antes de hacerlo, responde:

- ¿Las fixtures cubren los falsos positivos conocidos?
- ¿La persona entenderá un timeout o un fallo del script?
- ¿CI o una política del servicio también aplican la regla?
- ¿Se pueden auditar la excepción y la recuperación de emergencia?

## Fuente oficial

- [OpenAI: configuración de Hooks y salida de PreToolUse](https://learn.chatgpt.com/docs/hooks)

---

**Estado:** verified

**Productos aplicables:** Entornos que usan un host de Codex local; usa `/hooks` de Codex CLI para gestionar la confianza

**Última verificación:** 2026-08-25
