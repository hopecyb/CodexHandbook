---
legacyVerification:
  status: verified
  products: CLI
  basis: Se retiraron las interpretaciones de códigos concretos sin respaldo. Esta página se basa únicamente en el éxito o fallo del proceso y en el progreso y los errores de stderr confirmados por la documentación oficial; las conclusiones de la revisión se procesan mediante resultados estructurados.
  checkedAt: '2026-08-26'
title: Códigos de salida y reintentos
description: Interpretar bien el éxito o el fallo de codex exec en el pipeline — cuándo reintentar y cuándo fallar de inmediato.
locale: es
source_locale: zh-CN
source_revision: "35074cd"
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-10-25
sidebar:
  order: 40
---

CI depende del **código de salida del proceso** para juzgar si un paso tuvo éxito. Este capítulo explica la semántica habitual de [codex exec](/es/guide/developer-platform/non-interactive/codex-exec/), la estrategia de reintentos y el diseño idempotente.

## Contenido de esta página

- Diferencia entre código de salida y «la revisión no pasó» a nivel de negocio
- Si reintentar errores 429 / de red
- Cómo evitar efectos secundarios al repetir la ejecución

## Qué te dice realmente el código de salida

Si es la primera vez, piensa el «código de salida» como un resultado breve que el programa deja al script y a CI cuando termina la tarea.

Suele no explicar mucho; solo dice al pipeline:

- Esta vez cuenta como éxito
- O cuenta como fallo

El «reintento» responde a otra pregunta: ¿este fallo debe detenerse ya, o merece otra oportunidad?

:::note
La tabla concreta de códigos de salida la marca la documentación oficial del CLI; la tabla siguiente son **principios de diseño** para la integración.
:::

## Malentendidos frecuentes

### No hay un solo tipo de fallo

Muchos principiantes tratan todo lo distinto de `0` como el mismo fallo.

En la práctica hay que distinguir al menos:

- La tarea se rompió al correr
- La política o el sandbox la bloquearon
- Un servicio externo falló de forma temporal
- Corrió bien, pero la conclusión de la revisión es «no pasa»

El tratamiento no es el mismo; no todo se resuelve reintentando.

### «Reintento automático» ≠ más estabilidad

Si la causa del fallo no desaparece al reintentar —permisos insuficientes, regla que bloquea, prompt malo—, el reintento solo gasta tiempo y cuota.

## Semántica recomendada (concepto)

| Situación | Tratamiento sugerido |
|---|---|
| `0` | El proceso codex exec terminó correctamente; el resultado de negocio debe comprobarse en la salida estructurada |
| Distinto de `0` y el log muestra rechazo de policy/sandbox | **No** reintentar a ciegas; corrige configuración o prompt |
| Distinto de `0` y el ejecutor confirma un fallo temporal de red o del servicio | Reintentos limitados con espera progresiva |
| Se encontró un P0 pero la ejecución tuvo éxito | Usa `pass: false` de la [salida estructurada](/es/guide/developer-platform/non-interactive/structured-output/) + `exit 1` en el script |

«Se encontró un problema de seguridad» no debería depender de una excepción tipo crash: debe ser **explícito** con `pass: false` en JSON y que el script envolvente decida el código de salida.

## Plantilla para capturar el código de salida (bash)

```bash
#!/usr/bin/env bash
set -uo pipefail

log_file="${RUNNER_TEMP:-/tmp}/codex-exec.stderr.log"
codex exec --cd . "$(cat "$PROMPT")" 2>"$log_file"
code=$?

if [ "$code" -ne 0 ]; then
  cat "$log_file" >&2
  exit "$code"
fi
```

No atribuyas significados a números que no estén definidos oficialmente: por ejemplo, no supongas que `2` siempre indica un fallo de política. Si necesitas reintentos, el ejecutor externo debe decidir según los errores que pueda identificar de forma fiable y limitar su número, duración total y efectos secundarios.

## Idempotencia y efectos secundarios

| Riesgo | Mitigación |
|---|---|
| Comentarios duplicados en el PR | Usar check run id o «si ya hay comentario del bot, actualizar» |
| Escritura repetida de archivos | exec de revisión de solo lectura por defecto; escritura en job aparte + control de aprobación humana |
| Notificaciones duplicadas | Webhook de notificación con clave de dedupe |

## Cómo decidir si no tienes claro

Si no sabes si un fallo merece reintento, pregúntate:

1. ¿Parece una fluctuación externa temporal?
2. Aunque se vuelva a correr, ¿generará comentarios, escrituras o notificaciones duplicadas?
3. ¿La causa real es que alguien debe cambiar configuración, prompt o permisos?

Cuanto más cerca de (1), más sentido tiene un reintento limitado; cuanto más cerca de (2) o (3), más conviene parar y atacar la causa raíz.

## Errores frecuentes

- Ignorar el código de salida; CI siempre green
- Reintentar sin límite errores de política y quemar cuota
- Reintentar sin fijar prompt/git sha; resultados incomparables

Primero distingue «¿es un fallo temporal o no mejorará al reintentar?» y luego decide. No todo fallo merece otra pasada.

## Lista de aceptación

- [ ] CI falla ante códigos de salida distintos de 0
- [ ] Hay tope de reintentos y de backoff
- [ ] Se distinguen «revisión no pasó» y «la ejecución se rompió»
- [ ] Los logs conservan información suficiente para depurar

## Capítulos relacionados

- [Referencia de errores](/es/guide/reference/error-reference/)
- [Recuperación ante fallos](/es/cases/workflows/failure-recovery/)

## Fuentes de referencia
- Guía de reintentos de la API de OpenAI (concepto)
