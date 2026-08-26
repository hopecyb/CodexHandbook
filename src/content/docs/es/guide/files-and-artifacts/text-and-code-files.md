---
title: Archivos de texto y código
description: Haz que Codex lea y escriba correctamente código fuente, configuración y documentos de texto.
locale: es
source_locale: zh-CN
source_revision: a6005dd
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

La mayoría de las tareas de desarrollo caen en **archivos de texto y código**: fuente, tests, configuración, Markdown. Esta página explica cómo limitar el alcance, mantener el estilo coherente y fusionar con seguridad.

Al hacer que Codex cambie texto o código, lo clave es cambiar el sitio correcto, de la forma correcta, y no tocar de más.

## Contenido de esta página

- Cómo hacer que el cambio caiga en la ruta y codificación correctas
- Cómo organizar ediciones de varios archivos
- Coordinación con formatter y linter

## Tipos de archivo y puntos de atención

| Tipo | Atención |
|---|---|
| Código fuente `.ts` `.py` etc. | Sigue `AGENTS.md` y los patrones existentes |
| Configuración `.json` `.yaml` `.toml` | Fácil romper la estructura; exige sintaxis válida |
| Documentos `.md` | Rutas relativas de enlaces, normas de mezcla de idiomas |
| Código generado | Indica si debe hacerse commit o ir a gitignore |

Contexto: [Contexto de archivos y carpetas](/es/guide/context/file-and-folder-context/)

## Por qué este tipo falla con más facilidad

Los problemas reales suelen ser:

- Escribir en un archivo que no debía
- Reescribir un bloque enorme para cambiar un detalle
- Estilo distinto al del proyecto
- Sintaxis de configuración rota en silencio

## Estructura de prompt recomendada

```text
Objetivo: <una frase>
Permitido modificar: <glob de rutas>
Prohibido: cambiar lockfile, tocar directorios ajenos
Estilo: coherente con <archivo de ejemplo>
Hecho: lista de archivos cambiados + ejecutar <comando de test>
```

Ver [Anatomía de una buena tarea](/es/prompts/task-anatomy/)

## Malentendidos habituales

### 1. Solo decir «ayúdame a cambiar este archivo»

Suele faltar información.

Conviene añadir:

- Qué archivos se pueden cambiar
- Qué archivos no tocar
- Quién es la referencia de estilo
- Cómo verificar al terminar

### 2. Configuración y texto normal son lo mismo

Tampoco.

En `.json`, `.yaml`, `.toml` el problema más habitual es romper estructura, sangría o sintaxis.

### 3. Cuanto más completo el cambio, más cómodo

Muchas veces un cambio «pequeño, explicable y fácil de revisar» es más sólido que una «optimización amplia de paso».

## Codificación y finales de línea

- Por defecto **UTF-8**; si el proyecto usa otra, decláralo en `AGENTS.md`
- Alinea con `.editorconfig` / `prettier` para evitar diffs de finales de línea en todo el archivo
- En archivos grandes, cambia por tramos: @ a una función concreta, no reescribas el archivo entero

## Si te preocupa que cambie de más, limítalo así

Si te preocupa que toque demasiado, exige estas tres cosas:

1. Primero diga qué archivos afectará
2. Solo el alcance mínimo que necesita la tarea
3. Liste las acciones de verificación tras el cambio

## Puntos de revisión

- [Revisar diffs](/es/guide/quality/review-diffs/): lógica, alcance, borrados
- [Ejecutar tests](/es/guide/quality/run-tests/)
- Introducción involuntaria de `TODO` sin implementar

## Errores habituales

- «Refactoriza todo el proyecto» y cambian cientos de archivos
- Edición de texto forzada sobre binarios o archivos minificados
- Enlaces de documentación con rutas absolutas que provocan 404 internos

En texto y código lo peor es cambiar mucho, disperso y difícil de revisar. Si dejas claros alcance, estilo y verificación, te ahorras muchos idas y vueltas.

---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Contrastado con los capítulos ya verificados de este manual sobre contexto de archivos/directorios, anatomía de buena tarea, revisión de diffs y ejecución de tests; esta página solo confirma el principio estable de «limitar rutas, mantener estilo y aclarar primero la verificación» para archivos de texto/código.  
**Última verificación:** 2026-07-26
