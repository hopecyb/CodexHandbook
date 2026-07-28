---
title: Ejemplos de configuración de Hook
description: Esqueletos de configuración y scripts de Hook adaptables — escaneo de secretos, logs de auditoría y validación de formato.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Al mirar un ejemplo de Hook, confirma primero qué quiere impedir y luego adáptalo a tu entorno.

Este capítulo ofrece configuración y scripts **ilustrativos** para que el equipo los adapte. Nombres de campos y rutas se rigen por la [documentación oficial](https://developers.openai.com/codex) y el `codex --help` local; antes de copiar, pruébalos en un repositorio aislado.

Lectura previa: [Descripción general de Hooks](/skills/hooks/hooks-overview/) · [Tipos de eventos Hook](/skills/hooks/hook-event-types/)

## Confirma el alcance antes de usarlos

No tomes estos ejemplos como «la respuesta estándar» lista para pegar.  
Trátalos como tres plantillas:

- Solo registrar
- Bloquear primero
- Comprobación ligera de la entrada

Mira la idea; después decide si amplías.

## Ejemplo 1: log de auditoría tras la llamada a herramienta (solo lectura)

**Objetivo:** registrar quién escribió qué rutas y cuándo; si falla la desensibilización, no guardar secretos en disco.

`hooks.json` (ilustrativo):

```json
{
  "hooks": [
    {
      "event": "tool.call.after",
      "command": ".codex/hooks/audit-log.sh",
      "timeout_ms": 500
    }
  ]
}
```

`.codex/hooks/audit-log.sh`:

```bash
#!/usr/bin/env bash
# stdin: JSON payload (estructura según documentación oficial)
payload=$(cat)
tool=$(echo "$payload" | jq -r '.tool // "unknown"')
ts=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
echo "$ts tool=$tool" >> "${CODEX_AUDIT_LOG:-/tmp/codex-audit.log}"
exit 0
```

**Verificación:** tras una escritura de archivo, el log tiene una línea; el código de salida del script es siempre 0.

Este ejemplo solo registra, no cambia el comportamiento: es el de menor riesgo y suele ser un buen punto de partida.

## Ejemplo 2: bloquear posibles secretos antes de la llamada a herramienta

**Objetivo:** `block` cuando el diff o el contenido escrito coincida con el patrón de clave de acceso AWS.

```json
{
  "hooks": [
    {
      "event": "tool.call.before",
      "command": ".codex/hooks/secret-scan.sh",
      "on_failure": "block",
      "timeout_ms": 300
    }
  ]
}
```

Lógica central de `secret-scan.sh` (ilustrativa):

```bash
#!/usr/bin/env bash
payload=$(cat)
text=$(echo "$payload" | jq -r '.arguments // empty' 2>/dev/null)
if echo "$text" | grep -qE 'AKIA[0-9A-Z]{16}'; then
  echo "Blocked: possible AWS access key in tool arguments" >&2
  exit 1
fi
exit 0
```

**Verificación:** se bloquea con una cadena de prueba que contiene `AKIA`; un `git status` normal pasa.

:::caution
El escaneo por regex tiene falsos positivos y negativos; es solo una capa adicional. Los secretos reales deben pasar por un secret scanner y pre-commit; ver [contexto sensible](/guide/context/sensitive-context/).
:::

Este tipo de ejemplo suele usarse cuando ya tienes claro que quieres detener la acción real. Empezar directamente con un Hook de tipo block encarece bastante el diagnóstico.

## Ejemplo 3: política de longitud y palabras clave al enviar el Prompt

**Objetivo:** rechazar frases que intentan claramente anular las instrucciones del sistema (ejemplo simplificado).

```bash
#!/usr/bin/env bash
prompt=$(cat | jq -r '.prompt // empty')
if [ "${#prompt}" -gt 50000 ]; then
  echo "Prompt too long" >&2
  exit 1
fi
if echo "$prompt" | grep -qi 'ignore previous instructions'; then
  echo "Blocked: possible injection pattern" >&2
  exit 1
fi
exit 0
```

**Verificación:** falla con texto demasiado largo o que coincide con el patrón; las Tareas normales pasan.

Este tipo de ejemplo debe al menos:

- Poder inspeccionar la entrada
- Dar una causa de fallo clara
- No dañar demasiado las peticiones normales

## Misma fuente que las reglas del equipo

Extrae las «subcadenas de comando prohibidas» a `tools/codex-policy.json` para que el Hook y las [reglas de comandos](/guide/customization/rules/command-rules/) las lean juntos y no mantengas dos sitios.

## Errores frecuentes

### 1. Si el ejemplo corre, ya vale para producción

El valor del ejemplo está en la estructura y la idea, no en pegarlo tal cual en producción.

### 2. Un Hook de tipo block no es necesariamente más maduro que uno de log

Muchos equipos empiezan por log, confirman falsos positivos y rendimiento, y luego suben a warn o block.

### 3. Un ejemplo de Hook no es solo mirar el script

Además del script, mira:

- En qué evento se cuelga
- Qué estrategia de fallo usa
- Si el equipo puede explicar por qué se bloquea así

## Probar un Hook

```bash
# Probar el script con un fixture (ilustrativo)
echo '{"tool":"shell","arguments":"git status"}' | .codex/hooks/secret-scan.sh
echo $?
```

## Orden habitual

Muchos equipos avanzan así:

1. Primero un log de solo lectura
2. Luego tipo warn
3. Luego tipo block

Así se separa «escribir bien la lógica» de «el equipo de verdad quiere que bloquee».

Los ejemplos de Hook sirven para aprender idea y estructura; no conviene llevarlos tal cual al entorno formal.

## Errores habituales

- Script sin `chmod +x`, fallo silencioso
- `timeout_ms` demasiado corto y falsos bloqueos
- Ruta de log no escribible y falla toda la cadena de Hooks
- Hacer `curl` desde el Hook enviando el payload completo al exterior

## Lista de verificación

- [ ] Cada Hook tiene su fixture de prueba
- [ ] La estrategia de fallo (block/warn) coincide con la política del equipo
- [ ] Configuración y scripts en el mismo repo y la misma revisión de PR
- [ ] La documentación indica fecha de verificación y versión de CLI aplicable

## Fuentes de referencia

- Ejemplos de OpenAI Codex Hooks
- Configuración de auditoría de freestylefly/CodexGuide
- stormzhang `22-hooks.md`

---

**Estado:** desactualizado  
**Productos aplicables:** CLI / App (según versión)  
**Nota de revisión:** Esta página incluye estructura de configuración Hook, nombres de evento, campos de carga y ejemplos de script; dependen mucho de la implementación actual y falta una base pública oficial lo bastante estable.  
**Última verificación:** 2026-07-26
