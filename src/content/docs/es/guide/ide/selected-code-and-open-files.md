---
title: Selección y archivos abiertos
description: Acotar con precisión el alcance de la Tarea en el IDE mediante código seleccionado y archivos abiertos.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

La extensión IDE encaja especialmente con cambios de **alcance pequeño y alta precisión**: seleccionas un fragmento, explicas la intención y Codex modifica en el Contexto cercano. Aquí se trata sobre todo de cómo usar selección y archivos abiertos para apretar el alcance y no cambiar el sitio equivocado.

El papel de la selección es simple: decirle a Codex que mire aquí, y que no amplíe el alcance por su cuenta.

## Contenido de esta página

- Cómo elegir entre selección, archivo completo y ruta `@`
- Cómo organizar el Contexto en refactorizaciones multiarchivo
- Cómo reducir «ha tocado un montón de archivos irrelevantes»

## Tres formas de acotar

| Forma | Cuándo usarla | Ejemplo |
|---|---|---|
| **Selección** | Una función, un componente, cerca de un stack de error | Selecciona `parseUser()` y pide manejo de nulos |
| **Archivo abierto** | Hay que entender varias relaciones dentro del archivo | Abre `auth.ts` + `auth.test.ts` |
| **Ruta `@`** | Entre directorios, archivos no abiertos | `@src/api/client.ts` alineado con tipos del backend |

Profundidad conceptual: [Contexto de archivos y carpetas](/guide/context/file-and-folder-context/)

## Práctica mínima viable

1. Selecciona el **fragmento mínimo relevante** (suele ser 10–80 líneas) y en el Prompt deja claro el objetivo y la [definición de hecho](/prompts/define-done/)
2. Si implica a quien llama, abre o haz `@` a 1–2 archivos aguas arriba
3. Pide «solo cambia archivos relacionados con X; lista los que modificarás antes de tocar»
4. En el diff del IDE acepta bloque a bloque; no aceptes todo de golpe

## Tareas multiarchivo

```text
Abrir: archivo de implementación + tests + definición de tipos
Selección: opcional — empezar por la función de entrada
Prompt: aclarar límites del módulo y directorios que no se pueden tocar
```

Para refactorizaciones grandes conviene más un [árbol de trabajo de la App de escritorio](/guide/desktop-app/worktrees/) o el [modo de planificación](/guide/agent-work/planning/). El IDE encaja mejor con el cierre y commits pequeños.

## Preguntas frecuentes

### 1. ¿Hay que seleccionar siempre?

No necesariamente. Pero si ya sabes que el foco está en un tramo pequeño, seleccionar suele ser más seguro que solo decir «ayúdame a cambiar esta función».

### 2. Seleccionar más no siempre es más seguro

Si seleccionas demasiado, vuelves a aflojar el alcance; si seleccionas demasiado poco, puede faltar Contexto necesario. El criterio práctico es «lo justo».

### 3. ¿Qué diferencia hay entre archivo abierto y ruta `@`?

Puedes separarlo así:

- **Archivo abierto**: que vea lo que estás mirando ahora
- **Ruta `@`**: nombras explícitamente un archivo que también debe entrar

Usar selección y archivos abiertos, en el fondo, es intentar no arrastrar alcance irrelevante.

## Coordinación con la revisión

Antes de aceptar, contrasta con [Revisar diffs](/guide/quality/review-diffs/):

- Si solo cambian los archivos acordados
- Si fuera de la selección hay borrados inesperados
- Si los tests cubren las ramas nuevas

En el producto: [Revisar cambios en el IDE](/guide/ide/reviewing-changes/)

## Errores frecuentes

| Error | Consecuencia |
|---|---|
| Seleccionar un archivo entero de miles de líneas | Desperdicio de Contexto, superficie de cambio demasiado grande |
| Cero selección y solo «optimízalo un poco» | El modelo amplía el alcance por su cuenta |
| Aceptar todas las sugerencias sin leer el diff | Deriva de estilo o vulnerabilidades de seguridad |

## Fuentes de referencia
- [Definir restricciones](/prompts/constraints-and-boundaries/)
---

**Estado:** verified  
**Productos aplicables:** IDE  
**Base de verificación:** Esta página describe el método de control de alcance más estable en la extensión IDE: la combinación de selección, archivos abiertos y rutas `@` explícitas; es una forma genérica de organizar Contexto al convivir con el código en el editor, sin depender del nombre de un botón concreto.  
**Última verificación:** 2026-07-26
