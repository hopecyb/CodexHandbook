---
title: Primera tarea
description: Completa un cambio pequeño con un prompt claro y aprende a revisar el resultado.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Primera tarea

El ejemplo siguiente asume la **App de escritorio** por defecto; CLI e IDE pueden usar el mismo prompt.

## Metadatos

| Campo | Contenido |
|---|---|
| Público | Principiantes |
| Cliente | App de escritorio (recomendado) |
| Tiempo estimado | 15–20 minutos |

## 1. Objetivo y contexto

**Objetivo:** Completar una edición segura de un archivo en un proyecto de práctica.

**Criterios de éxito:** Solo se modifica el archivo indicado, el resultado coincide con la descripción de aceptación y puedes leer el diff.

## 2. Preparación

- Cliente instalado e iniciado sesión
- Proyecto de práctica creado (con `hello.md` o un archivo similar)

## 3. Prompt recomendado

```text
Objetivo: Al final de hello.md, añade una sección «Práctica de hoy» con una lista de tres puntos clave.
Restricciones: Solo modificar hello.md; no borrar el contenido existente; no ejecutar peticiones de red.
Aceptación: Al final del archivo aparecen el título y exactamente tres elementos de lista.
Si falta información, pregúntame primero; no inventes.
```

## 4. Ejecución y revisión

1. Pide primero un plan breve (o solicítalo tú)
2. Al aprobar la escritura de archivos, confirma que la ruta es correcta
3. Al terminar, contrasta el diff con cada criterio de aceptación

## 5. Siguientes pasos

- [Fundamentos de prompts](/prompts/basics/)
- [Verificación](/guide/verification/)
- [Empieza aquí](/guide/start-here/)

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Esta página es un ejercicio introductorio de bajo riesgo del manual: limitada a editar un solo archivo, sin red, exige leer el diff y comprobar cada criterio de aceptación. Los capítulos previos (instalación, proyecto de práctica, verificación) se han contrastado; el contenido no depende de detalles de versión del producto.
