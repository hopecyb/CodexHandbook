---
title: "Context Engineering (ingeniería del contexto)"
description: "El contexto incluye la tarea, las instrucciones, los archivos, los resultados recuperados y las salidas de las herramientas. Hay que decidir qué entra en la tarea actual, qué consultar cuando haga falta y qué conservar tras compactar."
contentType: "guide"
editorialStatus: "review"
verification:
  kind: "source-checked"
  checkedAt: "2026-09-18"
  summary: "Los eventos y las descripciones de proyectos siguientes se comprobaron con fuentes primarias. Los consejos de aprendizaje son criterios del autor; verificar las fuentes no equivale a haber probado el producto."
  evidence:
    - label: "Artículo sobre ingeniería del contexto"
      href: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
locale: es
source_locale: zh-CN
source_revision: d668433
translation_status: draft
translated_at: 2026-09-20
---
## Evento verificable y alcance

**Fecha: 2025-09-29 · Tipo: artículo de ingeniería.** Anthropic publicó *Effective context engineering for AI agents*, sobre cómo organizar el contexto que necesita un agente. La fecha del artículo no es la fecha en que nació el concepto.

Fuente: [artículo sobre ingeniería del contexto](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents). Comprobado el 2026-09-18; la fecha de publicación de la fuente y la fecha de comprobación de esta página tienen significados distintos.

## Qué problema resuelve

El contexto incluye la tarea, las instrucciones, los archivos, los resultados recuperados y las salidas de las herramientas. Hay que decidir qué entra en la tarea actual, qué consultar cuando haga falta y qué conservar tras compactar.

## Consejos para aprender y límites de aplicación

Lo siguiente es un criterio didáctico de este sitio, no una medición de adopción en el sector ni de eficacia:

Prioriza los hechos y las rutas a pruebas relevantes para la decisión actual. Más contenido puede añadir ruido; un resumen compactado no sustituye los archivos clave. Si el objetivo se desvía, comprueba los resultados y las restricciones existentes antes de añadir otro prompt.

## Ejercicio práctico

[Mantener el contexto centrado](/es/guide/context/keep-context-focused/): enumera los archivos imprescindibles para la tarea actual, las referencias que consultarás cuando haga falta y el material irrelevante. Guarda el objetivo, lo ya hecho, las preguntas pendientes y las rutas a las pruebas como registro de traspaso.

[Volver a la hoja de ruta y sus criterios de fechas](/es/ai-roadmap/)
