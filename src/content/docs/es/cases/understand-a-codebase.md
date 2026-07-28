---
title: Entender un código base
description: Explora en solo lectura un repositorio desconocido y construye un mapa mental accionable.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Entender un código base

## Metadatos

| Campo | Contenido |
|---|---|
| Público | Desarrolladores |
| Cliente | CLI / IDE |
| Tiempo estimado | 30–60 minutos |

## 1. Objetivo y contexto

**Objetivo:** Antes de cambiar nada, aclarar límites de módulos, entradas y zonas de riesgo.

**Criterios de éxito:** Puedes explicar a otra persona la ruta principal «de la petición a la respuesta» o «del comando a la salida».

## 2. Prompt recomendado

```text
No modifiques el código todavía. Lee @src/ y @README y explica en 8 puntos como máximo:
1. Propósito del proyecto y stack tecnológico
2. Responsabilidad de los directorios principales
3. Entradas de arranque / pruebas
4. Los 3 archivos más relacionados con 【mi objetivo】
5. 3 preguntas que debo confirmar
```

## 3. Verificación

- Contrasta con `package.json` / archivos de entrada reales
- Escribe las conclusiones en un issue o un resumen de `AGENTS.md`

## 4. Relacionado

- [Plantilla de comprensión](/prompts/templates/understand/)
- [Explorar—planificar—ejecutar—verificar](/cases/workflows/explore-plan-execute-verify/)

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Los use cases actuales de Codex en OpenAI Developers siguen incluyendo «Understand large codebases», centrados en trazar la ruta principal, identificar módulos clave y localizar archivos relevantes con rapidez. Este ejemplo es un escenario de exploración en solo lectura, alineado con ese posicionamiento.
