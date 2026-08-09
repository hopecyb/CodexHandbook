---
title: Hoja de ruta de aplicaciones de IA
description: Entiende Prompt Engineering, RAG, MCP, Multi-agent, Context Engineering, Skills y otros hitos de la ingeniería de aplicaciones de IA.
locale: es
source_locale: zh-CN
translation_status: draft
translated_at: 2026-08-08
---

# Hoja de ruta de aplicaciones de IA

Este es un mapa de conocimiento para la ingeniería de aplicaciones de IA. No sigue parámetros de modelos, rankings ni lanzamientos puntuales, sino que conecta los métodos clave en orden cronológico inverso: desde sistemas de agentes reutilizables y verificables hacia las prácticas que los hicieron posibles.

<div class="roadmap-timeline">
  <article>
    <time>2026-04</time>
    <h3><a href="/ai-roadmap/timeline/2026-04-skills/">Skills (habilidades)</a></h3>
    <p>Skills empaqueta prompts, pasos, ejemplos, scripts y recursos en unidades de workflow reutilizables. Ayuda a que los equipos conserven experiencia en vez de volver a explicar cada vez “cómo se hace”.</p>
    <p><strong>Enfoque:</strong> SKILL.md, divulgación progresiva, recursos dependientes, límites de reutilización, normas de equipo.</p>
  </article>
  <article>
    <time>2026-02</time>
    <h3><a href="/ai-roadmap/timeline/2026-02-harness-engineering/">Harness Engineering (ingeniería del arnés de ejecución)</a></h3>
    <p>Harness Engineering diseña el entorno que permite al modelo completar tareas con fiabilidad: herramientas, contexto, feedback de verificación, recuperación, puertas de calidad y pruebas de regresión.</p>
    <p><strong>Enfoque:</strong> arneses de tarea, feedback de verificación, recuperación de fallos, puertas de calidad.</p>
  </article>
  <article>
    <time>2026-01</time>
    <h3><a href="/ai-roadmap/timeline/2026-01-openspec/">OpenSpec (desarrollo guiado por especificaciones)</a> / <a href="/ai-roadmap/timeline/2026-01-openclaw/">OpenClaw (pasarela de asistente personal de IA)</a></h3>
    <p>Estos dos nodos apuntan a direcciones distintas: OpenSpec convierte requisitos y diseño en artefactos trazables; OpenClaw unifica asistentes personales, canales y pasarelas de herramientas.</p>
    <p><strong>Enfoque:</strong> spec-driven development, pasarelas, sesiones, canales y artefactos trazables.</p>
  </article>
  <article>
    <time>2025-09</time>
    <h3><a href="/ai-roadmap/timeline/2025-09-context-engineering/">Context Engineering (ingeniería del contexto)</a></h3>
    <p>Context Engineering desplaza el foco de “cómo escribir el prompt” a “qué debe ver el modelo, en qué orden y qué debe comprimirse o excluirse”.</p>
    <p><strong>Enfoque:</strong> prioridad del contexto, estrategia de recuperación, compresión, memoria y selección de archivos.</p>
  </article>
  <article>
    <time>2025-06</time>
    <h3><a href="/ai-roadmap/timeline/2025-06-multi-agent/">Multi-agent (colaboración entre agentes)</a></h3>
    <p>Multi-agent divide trabajo complejo entre roles como investigación, implementación, revisión, verificación y resumen. El objetivo es estructura, paralelismo y control mutuo.</p>
    <p><strong>Enfoque:</strong> límites de rol, formatos de traspaso, resolución de conflictos, revisión y verificación.</p>
  </article>
  <article>
    <time>2025-03</time>
    <h3><a href="/ai-roadmap/timeline/2025-03-tool-use/">Tool Use (uso de herramientas)</a></h3>
    <p>Tool Use trata cómo un modelo elige herramientas, las llama, lee resultados y continúa la tarea. Es el puente entre respuestas de una sola vez y ejecución de varios pasos.</p>
    <p><strong>Enfoque:</strong> selección de herramientas, cadenas de llamadas, estado y recuperación tras fallos.</p>
  </article>
  <article>
    <time>2024-11</time>
    <h3><a href="/ai-roadmap/timeline/2024-11-mcp/">MCP (protocolo de contexto de modelo)</a></h3>
    <p>MCP convierte herramientas, recursos y prompts en superficies de protocolo. Su valor no es solo tener más integraciones, sino hacerlas reutilizables, descubribles y gobernables.</p>
    <p><strong>Enfoque:</strong> servers, clients, tools, resources, prompts, permisos y depuración.</p>
  </article>
  <article>
    <time>2023-11</time>
    <h3><a href="/ai-roadmap/timeline/2023-11-rag/">RAG (generación aumentada por recuperación)</a></h3>
    <p>RAG fundamenta las respuestas en material recuperado. Lleva la IA de “puede hablar” a “puede responder con evidencia trazable”.</p>
    <p><strong>Enfoque:</strong> particionado, búsqueda vectorial, reranking, citas y compresión de contexto.</p>
  </article>
  <article>
    <time>2023-06</time>
    <h3><a href="/ai-roadmap/timeline/2023-06-function-calling/">Function Calling (llamadas a funciones)</a></h3>
    <p>Function Calling movió los modelos de responder en texto a invocar capacidades externas con parámetros estructurados. Así la IA entra en sistemas reales.</p>
    <p><strong>Enfoque:</strong> diseño de schemas, validación de parámetros, límites de herramientas, feedback de error.</p>
  </article>
  <article>
    <time>2022-11</time>
    <h3><a href="/ai-roadmap/timeline/2022-11-prompt-engineering/">Prompt Engineering (ingeniería de prompts)</a></h3>
    <p>El punto de partida es el control de entrada: hacer explícitos objetivos, contexto, restricciones, ejemplos y formato de salida para estabilizar el comportamiento del modelo.</p>
    <p><strong>Enfoque:</strong> descomposición de tareas, roles, ejemplos few-shot, formato de salida y reintentos.</p>
  </article>
</div>
