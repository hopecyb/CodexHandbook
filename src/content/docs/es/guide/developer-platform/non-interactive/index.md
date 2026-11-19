---
legacyVerification:
  status: verified
  products: CLI / API / Cloud
  basis: Contrastado con la estructura actual del subcapítulo non-interactive y sus enlaces de entrada; esta página solo aclara que el modo no interactivo encaja en scripts, lotes y pipelines, sin comprometer parámetros concretos de comandos.
  checkedAt: '2026-07-26'
title: Modo no interactivo
description: 'Página sobre lotes, scripts y pipelines: primero qué tareas encajan, después comandos y diseño de salida.'
locale: es
source_locale: zh-CN
source_revision: "2d542c9"
translation_status: stale
translated_at: 2026-07-28
reviewed_at: 2026-10-25
---

La primera vez que se ve «modo no interactivo», mucha gente lo entiende como «Codex normal sin chat».

El modo no interactivo encaja mejor cuando metes Codex en un script, CI o lote para que complete una cosa de forma estable con un solo comando.

## Orden recomendado

1. [codex exec](/es/guide/developer-platform/non-interactive/codex-exec/)
2. [Scripts y pipelines](/es/guide/developer-platform/non-interactive/scripts-and-pipelines/)
3. [Salida estructurada](/es/guide/developer-platform/non-interactive/structured-output/)
4. [Códigos de salida y reintentos](/es/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## Qué problemas resuelve mejor este grupo

- Cómo convertir una tarea en un paso de línea de comandos
- Cómo hace CI para distinguir éxito, fallo y reintento
- Cómo hacer la salida más fácil de seguir consumiendo por scripts

Sirve para que scripts y pipelines reciban resultados de forma estable; no para charlar ida y vuelta.
