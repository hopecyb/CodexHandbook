---
title: Mapa de capacidades
description: Panorama de módulos como Prompt, herramientas, extensiones, multi-Agent y gobernanza.
locale: es
source_locale: zh-CN
source_revision: 0bfd4e0
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 7
---

El handbook tiene muchos módulos y, la primera vez, es fácil perderse. Esta página pone las capacidades principales en un solo mapa para encajar la estructura con rapidez.

Los bloqueos habituales son dos:

- Lees una página aquí y otra allá, y al final no sabes qué reforzar primero
- Te metes de golpe en MCP, automatización y extensiones, y dejas sin ordenar lo básico

Si primero aclaras el marco grande, luego consultar temas concretos cuesta menos.

Codex no es solo un cuadro de chat; detrás hay varias capas de capacidad:

```text
Objetivo y Prompt
  → Contexto (proyecto / archivos / conversación)
    → Herramientas (archivos, terminal, búsqueda, navegador…)
      → Trabajo del Agent (planificar, ejecutar, reorientar, traspasar)
        → Verificación de calidad y Aprobación humana
      → Extensión y automatización (Skills / MCP / Hooks…, avanzado)
            → Gobernanza de equipo (hitos posteriores)
```

## Estructura general

Puedes ver Codex en tres capas:

- Primera: cómo hablas para que sepa qué quieres
- Segunda: con qué Contexto y Herramientas hace el trabajo
- Tercera: cómo consolidas esa forma de colaborar para reutilizarla después

Al empezar, las dos primeras importan más. Deja clara la Tarea, haz fluir el resultado y luego mira las extensiones avanzadas.

## Malentendidos frecuentes

### Más avanzado no significa que debas aprenderlo primero

Skills, MCP, Hooks y automatización son potentes, pero amplifican eficiencia y reutilización a escala; no suelen ser lo que más te atasca al empezar.

Si aún no tienes claros Prompt, Contexto y elección de Herramientas, las extensiones también se usan mal con facilidad.

### Este mapa también puede servir de orden de lectura

No hace falta leer página a página el directorio del sitio. Puedes seguir este orden:

1. Entiende cómo trabaja Codex
2. Aprende a dar Tareas, dar Contexto y verificar resultados
3. Cuando eso fluya, piensa en configuración, extensiones y automatización

## Orden de arranque

1. Lee [Qué es Codex](/es/guide/start-here/what-is-codex/)
2. Luego [Elige tu ruta](/es/guide/start-here/choose-your-path/)
3. Entra en [Primeros pasos](/es/guide/getting-started/)
4. Si te atascas, vuelve a [Fundamentos](/es/guide/foundations/) y [Rutas de aprendizaje](/es/guide/learning-paths/)

## Módulos y capítulos canónicos

| Capacidad | Ubicación canónica |
|---|---|
| Modelos, Agent, permisos, Sandbox | [Fundamentos](/es/guide/foundations/) |
| Cómo operar en cada entrada | [Guías de producto](/es/guide/) |
| Prompt, Contexto, Herramientas, calidad | [Capacidades principales](/es/guide/) |
| AGENTS.md y configuración | [Personalización](/es/guide/customization/) |
| Skills, MCP, Plugin, automatización | [Extensiones y automatización](/es/skills/) |
| Métodos de colaboración repetibles | [Métodos de flujo de trabajo](/es/cases/workflows/) |
| Casos de extremo a extremo | [Casos de uso](/es/cases/use-cases/) |
| Orden de lectura | [Rutas de aprendizaje](/es/guide/learning-paths/) |

Mapa general de extensiones: [Mapa de capacidades de extensión](/es/skills/capability-map/). Comparación de productos: [Comparación de funciones](/es/guide/reference/feature-comparison/). Las diferencias entre entradas están en la página de comparación.

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Esta página solo resume módulos de capacidad y la pertenencia a capítulos canónicos; se revisaron enlaces internos, el diagrama de estructura y el mapeo de módulos, y el cuerpo no depende de hechos de producto volátiles.  
**Última verificación:** 2026-07-26
