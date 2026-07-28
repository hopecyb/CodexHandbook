---
title: Modo no interactivo
description: 'Página sobre lotes, scripts y pipelines: primero qué Tareas encajan, después comandos y diseño de salida.'
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

La primera vez que se ve «modo no interactivo», mucha gente lo entiende como «Codex normal sin chat».

El modo no interactivo encaja mejor cuando metes Codex en un script, CI o lote para que complete una cosa de forma estable con un solo comando.

## Orden recomendado

1. [codex exec](/guide/developer-platform/non-interactive/codex-exec/)
2. [Scripts y pipelines](/guide/developer-platform/non-interactive/scripts-and-pipelines/)
3. [Salida estructurada](/guide/developer-platform/non-interactive/structured-output/)
4. [Códigos de salida y reintentos](/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## Qué problemas resuelve mejor este grupo

- Cómo convertir una Tarea en un paso de línea de comandos
- Cómo hace CI para distinguir éxito, fallo y reintento
- Cómo hacer la salida más fácil de seguir consumiendo por scripts

Sirve para que scripts y pipelines reciban resultados de forma estable; no para charlar ida y vuelta.

---

**Estado:** verified  
**Productos aplicables:** CLI / API / Cloud  
**Base de verificación:** Contrastado con la estructura actual del subcapítulo non-interactive y sus enlaces de entrada; esta página solo aclara que el modo no interactivo encaja en scripts, lotes y pipelines, sin comprometer parámetros concretos de comandos.  
**Última verificación:** 2026-07-26
