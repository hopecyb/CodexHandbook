---
title: Crear una presentación
description: Caso de generación de artefactos — del esquema a una presentación lista para proyectar.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Crear una presentación

## Metadatos

| Campo | Contenido |
|---|---|
| Público | Creadores |
| Cliente | App |
| Tiempo estimado | 1–2 horas |

## 1. Objetivo y contexto

**Objetivo:** Generar una presentación con estructura clara a partir del tema (Markdown/HTML/PPT, según las capacidades del entorno).

**Criterios de éxito:** El número de diapositivas coincide con el esquema, cada página se puede explicar en puntos clave y no hay datos inventados.

## 2. Prompt recomendado

```text
Tema: 【tema de la presentación】
Audiencia: 【perfil del público】
Duración: 【minutos】
Primero dame capítulos y, por diapositiva, título + 3 puntos clave; no generes el archivo final todavía.
Tras confirmar, escribe en slides/ en formato: 【mdx/html/pptx】.
Restricciones: Los datos deben citar fuente o marcarse como «ejemplo»; no hagas peticiones de red externas sin aprobación.
```

## 3. Verificación

- Revisa si cada diapositiva se puede presentar en un minuto
- Contrasta el origen de gráficos y cifras

## 4. Relacionado

- [Capacidad de presentaciones](/guide/files-and-artifacts/presentations/)

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Los use cases actuales de Codex en OpenAI Developers siguen incluyendo «Generate slide decks», descrito como manipular archivos pptx y generar imágenes para crear presentaciones. Esta página se mantiene en el flujo estable «esquema primero, salida según el entorno, cifras con fuente o marcadas como ejemplo».
