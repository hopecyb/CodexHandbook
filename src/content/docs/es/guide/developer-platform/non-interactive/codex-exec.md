---
title: codex exec
description: Entrada de ejecución no interactiva — entregar una Tarea completa de una vez en scripts y CI.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Si el `codex` interactivo es charlar y actuar a la vez, **`codex exec`** se parece más a entregar la Tarea de una vez y devolver el resultado al terminar.

Es el núcleo del [modo no interactivo](/guide/cli/non-interactive-mode/): sin ida y vuelta de chat, sin aclaraciones a mitad de camino; al acabar el proceso tienes resultado o estado de fallo. Este capítulo va dirigido a integradores de la [plataforma para desarrolladores](/guide/developer-platform/), y también a quien quiera meter Codex en un script o CI por primera vez.

## Contenido de esta página

- Diferencias entre `exec` y el `codex` interactivo
- Forma mínima del comando y directorio de trabajo
- Requisitos de Aprobación y Sandbox sin supervisión humana

## Qué hace `exec`

Puedes entender `codex exec` como:

- Emitir una orden de trabajo de una sola vez
- Devolver el resultado al terminar

Cuando esa orden está clara, corre según esa descripción; al acabar, te da el resultado y termina.

Por eso encaja en escenarios donde:

- El límite de la Tarea ya está fijo
- No hace falta aclarar a mitad de camino
- Quieres poder repetirlo de forma estable

## Por qué existe

No vas a chatear con Codex en CI, ni a esperar que se detenga diez veces a preguntarte.

Así que `codex exec` suele servir para:

- Automatización de revisión de código
- Tareas programadas
- Scripts por lotes
- Un paso único de análisis o generación en un pipeline

Encaja cuando **el límite de la Tarea ya está claro**; si aún exploras con vaguedad, el modo interactivo suele ser mejor.

:::note
**El nombre del comando y los parámetros los marca el CLI oficial.** Tras actualizar, revisa con `codex --help` y `codex exec --help`.
:::

## Práctica mínima usable

```bash
cd /path/to/repo
codex exec --cwd . "Solo lectura: compara el diff de la rama actual con main, enumera los 3 riesgos de seguridad más altos, no modifiques archivos"
```

Principios:

- En el script Shell, haz primero `cd` a un worktree limpio
- Pon el Prompt en `prompts/` del repo o en un heredoc, para evitar errores de escape del shell
- En CI, juzga el éxito o el fallo por el **código de salida**

## La realidad más fácil de pasar por alto

En modo interactivo aún puedes añadir «no era eso».  
En modo `exec`, **si la primera formulación va mal, toda la ronda puede desviarse**.

Así que al escribir el Prompt de `exec` sé más explícito que de costumbre sobre:

- Qué hacer
- Qué no hacer
- Formato de salida
- Qué cuenta como terminado
- Cómo quieres que salga si falla

## Malentendidos frecuentes

### `exec` encaja mejor en Tareas fijas

La primera vez mucha gente lo ve como «el modo avanzado del CLI».

Más preciso: sirve para **ejecutar de forma estable y repetible**.

### Corto no es lo mismo que claro

En modo interactivo, si eres vago, aún puedes completar después.

En `exec`, un Prompt corto que omite límites, restricciones y criterios de éxito no es más elegante: suele ser más fácil de descontrolar.

## Flujo de trabajo recomendado

```text
Preparar el repo (checkout, install, token de solo lectura)
    → Fijar versión del Prompt (git sha)
    → codex exec
    → Recoger stdout / artifact
    → Si no es 0, fallar CI; no reintentar sin límite
```

Encaja con [Scripts y pipelines](/guide/developer-platform/non-interactive/scripts-and-pipelines/).

## Cómo puedes pensarlo

- Un comando de Tarea única que se puede scriptar
- Adecuado para scripts, CI o cron

Por eso muchos equipos lo enganchan detrás de `make review`, GitHub Actions, cron o un botón de plataforma interna.

## Comparación con el modo interactivo

| | `codex` interactivo | `codex exec` |
|---|---|---|
| Aclarar | Varias rondas | Hay que decirlo todo de una vez |
| Aprobación | Persona presente | Hay que endurecer la política de antemano |
| Adecuado | Aprender, explorar | CI, cron |

## Cómo elegir si no tienes claro

- Aún exploras el requisito y puedes cambiar de opinión a menudo: prioriza el modo interactivo
- La Tarea ya es una plantilla fija y solo quieres repetirla con estabilidad: entonces `codex exec`

`codex exec` encaja en Tareas «ya claras y que querrás volver a ejecutar»; si aún piensas y cambias de idea, no lo metas aún en un flujo no interactivo.

## Errores frecuentes

- Meter un historial largo de chat en un solo exec
- CI con token de escritura y Prompt que incluye el body del PR sin sanitizar
- No fijar la versión del CLI y que el pipeline falle de golpe
- Ignorar códigos de salida distintos de cero y marcar green igual
- Forzar en flujos desatendidos Tareas complejas que necesitan juicio humano

## Límites de seguridad

- Sin supervisión = [Aprobación humana](/cases/workflows/human-approval-patterns/) debilitada → solo lectura por defecto
- Véase [Permisos y seguridad](/guide/developer-platform/ci-cd/code-review-automation/#permisos-y-seguridad) (referencia cruzada del mismo capítulo)

## Lista de aceptación

- [ ] Local y CI usan el mismo archivo de Prompt
- [ ] El código de salida lo trata bien CI
- [ ] Los logs no contienen secretos ni PII
- [ ] Sandbox y reglas iguales o más estrictas que en desarrollo interactivo

## Capítulos relacionados

- [Modo no interactivo del CLI](/guide/cli/non-interactive-mode/)
- [Salida estructurada](/guide/developer-platform/non-interactive/structured-output/)
- [Códigos de salida y reintentos](/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## Fuentes de referencia

- Documentación del CLI de OpenAI Codex
- Capítulos no interactivos de KimYx0207
- Tutoriales de CI de stormzhang

---

**Estado:** outdated  
**Productos aplicables:** CLI  
**Nota de revisión:** Esta página ofrece ideas útiles sobre `codex exec`, `--cwd` e integración no interactiva, pero falta documentación oficial vigente lo bastante sólida para confirmar uno a uno la entrada del comando, los parámetros y el comportamiento; hasta completar esa base, no conviene marcarla como `verified`.  
**Última verificación:** 2026-07-26
