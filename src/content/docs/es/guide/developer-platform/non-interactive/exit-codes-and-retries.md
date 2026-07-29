---
title: Códigos de salida y reintentos
description: Interpretar bien el éxito o el fallo de codex exec en el pipeline — cuándo reintentar y cuándo fallar de inmediato.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

CI depende del **código de salida del proceso** para juzgar si un paso tuvo éxito. Este capítulo explica la semántica habitual de [codex exec](/guide/developer-platform/non-interactive/codex-exec/), la estrategia de reintentos y el diseño idempotente.

## Contenido de esta página

- Diferencia entre código de salida y «la revisión no pasó» a nivel de negocio
- Si reintentar errores 429 / de red
- Cómo evitar efectos secundarios al repetir la ejecución

## Qué te dice realmente el código de salida

Si es la primera vez, piensa el «código de salida» como un resultado breve que el programa deja al script y a CI cuando termina la Tarea.

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

- La Tarea se rompió al correr
- La política o el Sandbox la bloquearon
- Un servicio externo falló de forma temporal
- Corrió bien, pero la conclusión de la revisión es «no pasa»

El tratamiento no es el mismo; no todo se resuelve reintentando.

### «Reintento automático» ≠ más estabilidad

Si la causa del fallo no desaparece al reintentar —Permiso insuficiente, regla que bloquea, Prompt malo—, el reintento solo gasta tiempo y cuota.

## Semántica recomendada (concepto)

| Situación | Tratamiento sugerido |
|---|---|
| `0` | La Tarea terminó y cumple el criterio de éxito del Prompt |
| Distinto de `0` y el log muestra rechazo de policy/sandbox | **No** reintentar a ciegas; corrige configuración o Prompt |
| Distinto de `0` y API 429/5xx | Reintento limitado con backoff exponencial |
| Se encontró un P0 pero la ejecución tuvo éxito | Usa `pass: false` de la [salida estructurada](/guide/developer-platform/non-interactive/structured-output/) + `exit 1` en el script |

«Se encontró un problema de seguridad» no debería depender de una excepción tipo crash: debe ser **explícito** con `pass: false` en JSON y que el script envolvente decida el código de salida.

## Plantilla de reintento (bash)

```bash
max=3
delay=10
for i in $(seq 1 $max); do
  if codex exec --cwd . "$(cat "$PROMPT")"; then
    exit 0
  fi
  code=$?
  if [ "$code" -eq 2 ]; then
    echo "Policy error, not retrying" >&2
    exit "$code"
  fi
  sleep $((delay * i))
done
exit 1
```

Alinea los códigos «no reintentables» con la documentación oficial y mételos en ramas `case`.

## Idempotencia y efectos secundarios

| Riesgo | Mitigación |
|---|---|
| Comentarios duplicados en el PR | Usar check run id o «si ya hay comentario del bot, actualizar» |
| Escritura repetida de archivos | exec de revisión de solo lectura por defecto; escritura en job aparte + puerta humana |
| Notificaciones duplicadas | Webhook de notificación con clave de dedupe |

## Cómo decidir si no tienes claro

Si no sabes si un fallo merece reintento, pregúntate:

1. ¿Parece una fluctuación externa temporal?
2. Aunque se vuelva a correr, ¿generará comentarios, escrituras o notificaciones duplicadas?
3. ¿La causa real es que alguien debe cambiar configuración, Prompt o Permisos?

Cuanto más cerca de (1), más sentido tiene un reintento limitado; cuanto más cerca de (2) o (3), más conviene parar y atacar la causa raíz.

## Errores frecuentes

- Ignorar el código de salida; CI siempre green
- Reintentar sin límite errores de política y quemar cuota
- Reintentar sin fijar Prompt/git sha; resultados incomparables

Primero distingue «¿es un fallo temporal o no mejorará al reintentar?» y luego decide. No todo fallo merece otra pasada.

## Lista de aceptación

- [ ] CI falla ante códigos de salida distintos de 0
- [ ] Hay tope de reintentos y de backoff
- [ ] Se distinguen «revisión no pasó» y «la ejecución se rompió»
- [ ] Los logs conservan información suficiente para depurar

## Capítulos relacionados

- [Referencia de errores](/guide/reference/error-reference/)
- [Recuperación ante fallos](/cases/workflows/failure-recovery/)

## Fuentes de referencia
- Guía de reintentos de la API de OpenAI (concepto)
---

**Estado:** outdated  
**Productos aplicables:** CLI  
**Nota de revisión:** La página da consejos de ingeniería razonables sobre códigos de salida y reintentos, pero el ejemplo asume semántica concreta (p. ej. `code=2`) y comportamiento de `codex exec`; esos detalles aún carecen de base oficial vigente lo bastante sólida y deben verificarse con la documentación nueva del CLI antes de volver a `verified`.  
**Última verificación:** 2026-07-26
