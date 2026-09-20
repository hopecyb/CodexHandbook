---
legacyVerification:
  status: "verified"
  products: "CLI"
  basis: "Se contrastó con la documentación oficial actual de Non-interactive mode y Developer commands; se verificó que codex exec es Stable, así como --cd / -C, el sandbox predeterminado de solo lectura, workspace-write y las salidas JSONL y schema."
  checkedAt: "2026-08-26"
title: codex exec
description: Punto de entrada no interactivo para entregar una tarea completa de una sola vez en scripts y CI.
locale: es
source_locale: zh-CN
source_revision: 6d7c481
translation_status: draft
translated_at: "2026-09-20"
sidebar:
  order: 10
---

Si con `codex` interactivo conversas mientras trabajas, **`codex exec`** se parece más a entregar una tarea de una vez y recibir el resultado al terminar.

Es el núcleo del [modo no interactivo](/es/guide/cli/non-interactive-mode/): no hay conversación de ida y vuelta ni aclaraciones durante la ejecución; cuando termina el proceso, recibes un resultado o un estado de error. Este capítulo está dirigido a quienes integran la [plataforma para desarrolladores](/es/guide/developer-platform/) y a quienes quieren incorporar Codex por primera vez a un script o a CI.

## Contenido de esta página

- Diferencias entre `exec` y `codex` interactivo.
- Forma mínima del comando y directorio de trabajo.
- Requisitos de las aprobaciones y el sandbox cuando no hay supervisión.

## Qué hace `exec`

Puedes entender `codex exec` como:

- Entregar una orden de trabajo única.
- Recibir el resultado cuando termina.

Una vez redactada claramente esa orden, el comando ejecuta la tarea conforme a ella, devuelve el resultado y finaliza.

Por eso es apropiado para situaciones en las que:

- Los límites de la tarea ya están definidos.
- No se necesitan aclaraciones durante la ejecución.
- Se quiere repetir la tarea de forma estable más adelante.

## Por qué existe

En CI no vas a conversar con Codex ni a esperar que se detenga diez veces para preguntarte.

Por eso, `codex exec` suele utilizarse en:

- Automatización de revisiones de código.
- Tareas programadas.
- Scripts de procesamiento por lotes.
- Pasos individuales de análisis o generación en un pipeline.

Sirve para tareas **cuyos límites ya están claros**. Si todavía estás explorando lo que necesitas, suele convenir el modo interactivo.

:::note
**Comprueba los nombres y parámetros de los comandos en la CLI oficial.** Después de actualizar, vuelve a ejecutar `codex --help` y `codex exec --help`.
:::

## Ejemplo mínimo funcional

```bash
cd /path/to/repo
codex exec --cd . "Solo lectura: compara el diff de la rama actual con main, enumera los 3 riesgos de seguridad más importantes y no modifiques archivos"
```

De forma predeterminada, se ejecuta en un sandbox de solo lectura. Para permitir explícitamente la escritura en el espacio de trabajo, usa:

```bash
codex exec --cd . --sandbox workspace-write "Corrige las pruebas que fallan; modifica solo src/auth y tests/auth"
```

El progreso se escribe en `stderr` y la respuesta final en `stdout`. Usa `--json` si una máquina va a consumir el flujo completo de eventos; usa `-o` / `--output-last-message` si solo necesitas guardar el mensaje final en un archivo. Añade `--output-schema` cuando necesites campos estables.

Principios:

- En un script de shell, entra primero con `cd` en un worktree limpio.
- Guarda el prompt en `prompts/` bajo control de versiones o en un heredoc para evitar errores de escape del shell.
- En CI, determina el éxito o fracaso por el **código de salida**.

## La realidad que más fácilmente se pasa por alto

En el modo interactivo todavía puedes añadir: «No quería decir eso».

En el modo `exec`, **si te equivocas en la primera instrucción, puede desviarse toda la ejecución**.

Por eso, al escribir el prompt de `exec`, indica con más claridad de lo habitual:

- Qué debe hacerse.
- Qué no debe hacerse.
- Qué formato debe tener la salida.
- Qué significa que la tarea esté completa.
- Cómo debe terminar si falla.

## Malentendidos frecuentes

### `exec` es más adecuado para tareas definidas

Al principio, muchas personas lo interpretan como una «versión avanzada» de la CLI.

Una descripción más precisa: sirve para **repetir tareas de forma estable**.

### Un prompt breve no siempre es claro

En modo interactivo puedes dar una instrucción imprecisa y completarla después.

En `exec`, un prompt corto que omite límites, restricciones y criterios de éxito no resulta más elegante: aumenta la posibilidad de que la tarea se desvíe.

## Flujo de trabajo recomendado

```text
Preparar el repositorio (checkout, instalación, token de solo lectura)
    → Fijar la versión del prompt (git sha)
    → codex exec
    → Recopilar stdout / artefactos
    → Si el código de salida no es 0, marcar CI como fallida; no reintentar indefinidamente
```

Continúa en [Scripts y pipelines](/es/guide/developer-platform/non-interactive/scripts-and-pipelines/).

## Cómo puedes usarlo

- Como un comando de tarea única que puedes ejecutar desde scripts.
- Como parte de un script, CI o una tarea programada.

Por eso muchos equipos lo conectan a `make review`, GitHub Actions, cron o un botón de una plataforma interna.

## Comparación con el modo interactivo

| | `codex` interactivo | `codex exec` |
|---|---|---|
| Aclaraciones | Permite varias rondas | Hay que precisar todo de una vez |
| Aprobaciones | Hay una persona presente | Hay que restringir la política de antemano |
| Uso adecuado | Aprendizaje, exploración | CI, cron |

## Cómo elegir si tienes dudas

- Si todavía estás definiendo los requisitos y quizá cambies las instrucciones varias veces, empieza por el modo interactivo.
- Si la tarea ya tiene una plantilla fija y solo quieres repetirla de forma estable, usa `codex exec`.

`codex exec` funciona mejor para tareas que ya están claras y que quieres repetir. Si aún estás pensando y ajustando las instrucciones, no te apresures a integrarlas en un proceso no interactivo.

## Errores frecuentes

- Incluir un largo historial de conversación en una sola ejecución de `exec`.
- Usar en CI un token con permisos de escritura mientras el prompt contiene el texto de un PR sin sanear.
- No fijar la versión de la CLI y provocar fallos repentinos en el pipeline.
- Ignorar un código de salida distinto de cero y marcar CI como correcta.
- Forzar tareas complejas que exigen juicio humano en un proceso sin supervisión.

## Límites de seguridad

- Sin supervisión, la [aprobación humana](/es/cases/workflows/human-approval-patterns/) se debilita; usa solo lectura de forma predeterminada.
- Consulta [Credenciales de seguridad](/es/guide/developer-platform/ci-cd/code-review-automation/#permisos-y-seguridad/) en el capítulo relacionado.

## Lista de validación

- [ ] Se usa el mismo archivo de prompt en local y en CI.
- [ ] CI procesa correctamente el código de salida.
- [ ] Los registros no contienen claves ni información de identificación personal (PII).
- [ ] El sandbox y las reglas son iguales o más estrictos que en el desarrollo interactivo.

## Capítulos relacionados

- [Modo no interactivo de CLI](/es/guide/cli/non-interactive-mode/)
- [Salida estructurada](/es/guide/developer-platform/non-interactive/structured-output/)
- [Códigos de salida y reintentos](/es/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## Fuentes de referencia

- Documentación de OpenAI Codex CLI.
