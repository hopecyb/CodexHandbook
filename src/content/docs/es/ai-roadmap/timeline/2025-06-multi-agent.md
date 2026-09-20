---
title: Multi-agent (colaboración entre agentes)
description: Varios agentes pueden encargarse de búsquedas, análisis o revisiones independientes y reunir sus resultados mediante un formato de entrega acordado. La coordinación, el trabajo duplicado y el estado compartido añaden costes.
contentType: guide
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: Se comprobó el acontecimiento o la descripción del proyecto en la fuente primaria que figura abajo; los consejos de aprendizaje son una valoración del autor y esta comprobación de fuentes no se presenta como una prueba del producto.
  evidence:
  - label: Artículo de ingeniería sobre un sistema de investigación multi-agent
    href: https://www.anthropic.com/engineering/multi-agent-research-system
locale: es
source_locale: zh-CN
source_revision: f24f2f5
translation_status: draft
translated_at: '2026-09-20'
---

## Acontecimiento verificable y alcance

**Fecha: 2025-06-13 · Tipo: artículo de ingeniería.** Anthropic publicó su experiencia de ingeniería con un sistema de investigación multi-agent. La fecha confirma la publicación del artículo; no demuestra que todo el sector entrara ese día en una fase de adopción generalizada.

Fuente: [Artículo de ingeniería sobre un sistema de investigación multi-agent](https://www.anthropic.com/engineering/multi-agent-research-system). Comprobado el 2026-09-18; la fecha de publicación de la fuente y la fecha de comprobación de esta página tienen significados distintos.

## Qué problema aborda

Varios agentes pueden encargarse de búsquedas, análisis o revisiones independientes y reunir sus resultados mediante un formato de entrega acordado. La coordinación, el trabajo duplicado y el estado compartido añaden costes.

## Consejos de aprendizaje y límites de aplicación

Lo siguiente es un criterio didáctico de este sitio, no una medida de adopción en el sector ni de eficacia:

Considera trabajar en paralelo solo cuando las subtareas puedan realizarse de manera independiente. Si dependen estrechamente unas de otras, modifican el mismo archivo o no pueden validarse por separado, empieza con un solo agente. Los beneficios que un proveedor declara en sus propias evaluaciones no equivalen directamente a la tasa de éxito del ejercicio de este sitio.

## Ejercicio práctico

[Flujo de coordinación multi-agent](/es/cases/coordinate-multiple-agents/): prepara primero una tabla de división de tareas con las entradas, salidas y dependencias de cada función; después decide si merece la pena trabajar en paralelo. Es un ejemplo de proceso, no un experimento multi-agent cuyos beneficios haya medido este sitio.

[Volver a la hoja de ruta y sus criterios de fecha](/es/ai-roadmap/).
