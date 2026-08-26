---
title: Modo no interactivo
description: Integra codex exec con scripts y pipelines para CI, tareas programadas y automatización.
locale: es
source_locale: zh-cn
source_revision: a1cefbe
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 30
---

El modo no interactivo permite que Codex complete una tarea **sin una conversación mediante TTY**. Es el punto de entrada para que los desarrolladores lo integren en scripts y CI.

En vez de mantener una conversación, se envía la tarea completa para una única ejecución al estilo de un comando.

## Contenido de esta página

- Cuándo usar una ejecución no interactiva en lugar de una sesión interactiva con `codex`.
- Requisitos adicionales de seguridad y aprobación para trabajo sin supervisión.
- Su relación con la [configuración](/es/guide/cli/configuration/).

## Tareas adecuadas

| Adecuadas | No adecuadas |
|---|---|
| Prompt fijo de revisión en CI | Los requisitos necesitan varias rondas de aclaraciones |
| Comprobación nocturna de enlaces de documentación | Refactorización exploratoria |
| Generación de código desde una plantilla predefinida | Decisiones de producto ambiguas |

## Modelo básico

Una ejecución no interactiva suele:

1. recibir una **descripción completa de la tarea** mediante argumentos o stdin;
2. ejecutarse en un directorio de trabajo especificado;
3. indicar el éxito o fallo del proceso mediante un código de salida;
4. emitir registros o resultados estructurados para consumidores posteriores.

El punto de entrada actual es `codex exec`. Después de actualizar la CLI, vuelve a ejecutar `codex exec --help` para verificar todos los parámetros que usan tus scripts.

## Ejemplo mínimo funcional

```bash
# Ejecutar una revisión de solo lectura en la raíz del repositorio
codex exec --cd . "Enumera los riesgos de seguridad del diff respecto a main; no modifiques archivos"
```

`codex exec` usa de forma predeterminada un sandbox de solo lectura. El progreso se escribe en `stderr` y la respuesta final del Agent en `stdout`, de modo que puedes redirigir únicamente el resultado final:

```bash
codex exec --cd . "Escribe notas de publicación para los últimos 10 commits" > release-notes.md
```

Recomendaciones prácticas:

- En un script de shell, usa primero `cd` para entrar en un worktree limpio.
- Conserva la tarea en un heredoc o en un archivo versionado dentro de `prompts/`.
- Captura el código de salida y haz fallar CI si falla el proceso.

## Diseño de seguridad

Sin supervisión significa que **no estás presente para rechazar una acción**:

| Principio | Implementación |
|---|---|
| Privilegio mínimo | Token de solo lectura y sandbox restringido |
| Sin push | CI abre un PR o sube un artifact |
| Prompt fijo | No concatenar directamente en el prompt texto de un PR sin sanear |
| Auditoría | Conservar registros y artifacts del diff |

Consulta [Patrones de aprobación humana](/es/cases/workflows/human-approval-patterns/) y la sección de la hoja de ruta `08-developer-platform/non-interactive/`.

## Comparación con el modo interactivo

| | Interactivo | No interactivo |
|---|---|---|
| Entrada | TUI `codex` | `exec` / pipeline |
| Persona dentro del ciclo | Alta | Baja; debe diseñarse de antemano |
| Adecuado para aprender | Sí | No |
| Adecuado para CI | No | Sí |

Consulta el [modo interactivo de la CLI](/es/guide/cli/interactive-mode/).

## Convertir una tarea interactiva

No pegues un historial de chat entero en un script. Redúcelo a una especificación breve:

| Elemento | Qué debe indicar |
|---|---|
| Objetivo | El único resultado esperado |
| Entrada | Archivos, diff, registros o stdin que se deben leer |
| Prohibiciones | Sin ediciones, internet, push ni interrupción de CI |
| Salida | Resumen de texto, JSON, archivo de informe o resultado de salida |
| Aceptación | Comandos que deben pasar y cadenas que no deben aparecer |

Un prompt no interactivo debe parecerse a una orden de trabajo: límites claros, entradas completas y condiciones de fallo explícitas. Mantén en modo interactivo las tareas que todavía requieren criterio de producto, decisiones de diseño o confirmación de permisos.

## Errores de interpretación habituales

### 1. Si es más eficiente, ¿debe aprenderse primero?

No. Se ejecuta deprisa y deja poco espacio para aclaraciones.

### 2. ¿Cuál es la diferencia principal?

- **Interactivo:** permite preguntar, ajustar y aprobar durante la ejecución.
- **No interactivo:** ejecuta una vez a partir de una especificación predefinida.

### 3. ¿Cuándo debería evitarlo?

Espera si:

- todavía estás aprendiendo a redactar una tarea;
- no sabes cómo aceptar o rechazar el resultado;
- no tienes un modelo básico de aprobaciones, sandbox y permisos.

Usa el modo no interactivo para automatizar después de familiarizarte con los flujos interactivos.

## Errores habituales

- Pegar todo el historial de una sesión interactiva en una única llamada a `exec`.
- Conceder a CI credenciales de producción y acceso de escritura.
- No fijar la versión de la CLI, de modo que el comportamiento del pipeline cambie de forma inesperada.

## Fuente de referencia
- Documentación de OpenAI Codex CLI
---

**Estado:** verified

**Productos aplicables:** CLI

**Base de verificación:** Comparado con la documentación actual de Non-interactive mode para `codex exec`, `--cd`, el sandbox predeterminado de solo lectura, el progreso en `stderr` y la respuesta final en `stdout`.

**Última verificación:** 2026-08-26
