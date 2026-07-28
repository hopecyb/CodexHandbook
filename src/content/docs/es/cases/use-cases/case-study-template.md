---
title: Plantilla de caso
description: Estructura unificada para redactar y hacer retrospectiva de casos de Codex — facilita la captura y la comparación en el equipo.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Copia esta plantilla para crear una página de caso nueva o un documento interno de retrospectiva.

Antes de copiarla, elimina las secciones que no necesites según el lector y el entregable reales.

---

## Metadatos

| Campo | Rellenar |
|---|---|
| Título del caso | |
| Público | Principiantes / desarrolladores / creadores / equipos |
| Cliente usado | App / CLI / IDE / Cloud |
| Tiempo estimado | |
| Fecha de verificación | YYYY-MM-DD |

## 1. Objetivo y contexto

- **Objetivo de negocio:** Una frase
- **Criterios de éxito:** Observables y verificables
- **Fuera de alcance:** Exclusiones explícitas

## 2. Preparación

- Estado de cuenta/permisos/repo
- Archivos de contexto necesarios (`AGENTS.md`, diseños, etc.)
- Riesgos: datos, producción, secretos

## 3. Flujo de trabajo (EPXV)

### Explorar

- Prompt de entrada (resumen)
- Hallazgos clave

### Planificar

- Lista de pasos
- Puntos de confirmación humana

### Ejecutar

- Alcance real de los cambios
- Desvíos respecto al plan y motivos

### Verificar

- Tests automáticos
- Revisión humana
- Evidencia (capturas, logs, enlaces)

## 4. Fallo y recuperación

- Qué problemas aparecieron
- Cómo se deshicieron o corrigieron
- Si se repitiera, qué cambiarías en el prompt/config

## 5. Captura para reutilizar

- ¿Se escribe en `AGENTS.md` / Skill / Automation?
- 3 recomendaciones para el equipo

## 6. Fuentes de referencia
- Enlaces a documentación oficial
- Si este caso se adapta de un tutorial externo (solo el tipo de tarea)
---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Contrastado con los capítulos ya verificados de EPXV, recuperación ante fallos, instrucciones de proyecto y la estructura de la biblioteca de casos. Esta página solo ofrece una plantilla unificada para redactar y hacer retrospectiva; no declara comportamiento concreto del producto.
