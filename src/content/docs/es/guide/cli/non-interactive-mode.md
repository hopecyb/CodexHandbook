---
title: Modo no interactivo
description: Integrar con codex exec y tuberías de scripts — para CI, tareas programadas y pipelines de automatización.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


El modo no interactivo permite que Codex complete Tareas **sin diálogo TTY**: es la entrada para que los desarrolladores enganchen el Agent a scripts y CI.

En resumen: el modo no interactivo no es chat de ida y vuelta, sino entregar la Tarea de una vez para que la ejecute.

Se parece más a una invocación de tipo comando.

## Contenido de esta página

- Cuándo usar no interactivo en lugar de una sesión interactiva `codex`
- Requisitos extra de seguridad y Aprobación sin supervisión
- Relación con la [configuración](/guide/cli/configuration/)

## Escenarios adecuados

| Conviene | No conviene |
|---|---|
| Ejecutar en CI un Prompt de revisión fijo | Necesitas aclarar requisitos en varias rondas |
| Comprobar enlaces de documentación nightly | Refactorización exploratoria |
| Generación de código con plantillas predefinidas | Decisiones de producto muy ambiguas |

## Conceptos centrales

La ejecución no interactiva suele:

1. Recibir la **descripción completa de la Tarea** por parámetros o stdin
2. Correr en el directorio de trabajo indicado
3. Indicar éxito/fallo con el código de salida
4. Emitir logs o resultados estructurados para el consumidor aguas abajo

**Los nombres de comando y parámetros los marca la documentación oficial de la CLI** (a menudo `codex exec` o un subcomando equivalente); tras actualizar la CLI, vuelve a comprobar `--help`.

## Ejemplo mínimo usable (ilustrativo)

```bash
# En la raíz del repo, revisión de solo lectura (ilustrativo; parámetros según lo oficial)
codex exec --cwd . "Lista riesgos de seguridad en el diff respecto a main; no modifiques archivos"
```

Consejos prácticos:

- En el script de shell, haz primero `cd` a una copia de trabajo limpia
- Pon la cadena de la Tarea en un heredoc o en un archivo versionado en `prompts/`
- Captura el código de salida; si falla, el CI marca en rojo

## Diseño de seguridad

Sin supervisión = **no hay nadie que pulse rechazar**:

| Principio | Práctica |
|---|---|
| Mínimo Permiso | Token de solo lectura, Sandbox restringido |
| Sin push | El CI solo abre PR o sube artifact |
| Prompt fijo | Prohibido concatenar texto no sanitizado desde la descripción del PR (riesgo de inyección) |
| Auditoría | Conserva logs y artifact del diff |

Ver [Patrones de Aprobación humana](/cases/workflows/human-approval-patterns/) y la ruta `08-developer-platform/non-interactive/`.

## Comparación con el modo interactivo

| | Modo interactivo | Modo no interactivo |
|---|---|---|
| Entrada | TUI `codex` | `exec` / tubería |
| Humano en el bucle | Fuerte | Débil; hay que diseñarlo de antemano |
| Apto para aprender | Sí | No |
| Apto para CI | No | Sí |

Uso interactivo: [Modo interactivo de la CLI](/guide/cli/interactive-mode/)

## Malentendidos frecuentes

### 1. Si el modo no interactivo es más eficiente, ¿hay que aprenderlo primero?

No se recomienda.

Para quien lo usa por primera vez, el modo no interactivo suele ser demasiado rápido y rígido, con poco espacio para aclaraciones de ida y vuelta.

### 2. ¿Cuál es la mayor diferencia con el modo interactivo?

La diferencia central se puede ver así:

- **Modo interactivo**: a mitad de camino aún puedes preguntar, cambiar y aprobar
- **Modo no interactivo**: se parece más a una ejecución de una sola vez, para flujos definidos de antemano

### 3. ¿Cuándo no debería tocarlo todavía?

Si aún estás en estas fases, mejor no:

- Aún no dominas cómo escribir Prompts
- Aún no sabes cómo aceptar resultados
- Aún no tienes un juicio básico sobre Aprobación, Sandbox y Permisos

El modo no interactivo encaja con automatización, no tanto con el primer tanteo. Primero domina el modo interactivo; luego habla de engancharlo a scripts.

## Errores frecuentes

- Meter tal cual el historial largo de una sesión interactiva en un solo `exec`
- Usar en CI credenciales de producción y Permisos de escritura
- No fijar la versión de la CLI y que el pipeline cambie de comportamiento de golpe

## Fuentes de referencia

- Documentación de OpenAI Codex CLI
- stormzhang `28-noninteractive.md`
- KimYx0207 CX-12

---

**Estado:** outdated  
**Productos aplicables:** CLI  
**Nota de revisión:** Esta página sigue centrándose en `codex exec` y sus formas de integración no interactiva, pero no hay base oficial vigente lo bastante sólida para confirmar uno a uno entrada de comando, parámetros y comportamiento; conviene marcarla como `outdated` hasta completar la documentación no interactiva más reciente de la CLI.  
**Última verificación:** 2026-07-26
