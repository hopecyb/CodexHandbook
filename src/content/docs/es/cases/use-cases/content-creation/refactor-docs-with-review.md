---
title: Refactorizar un sitio de docs con revisión
description: "Caso: actualizar en lote enlaces y capítulos en un proyecto Astro/Starlight — diffs pequeños y verificación por build."
locale: es
source_locale: zh-CN
source_revision: 3acaf23
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Este caso ilustra tareas de **ingeniería de contenido**: Markdown multiarchivo, configuración de sidebar y verificación por build. El stack se parece al de este manual, pero el escenario se puede migrar a cualquier sitio estático.

## Metadatos

| Ítem | Valor |
|---|---|
| Dominio | Creación de contenido / ingeniería de docs |
| Entrada | CLI o IDE |
| Riesgo | Medio (muchos enlaces y navegación) |
| Duración | 1–3 horas (según escala) |

Sobre la plantilla: [Plantilla de caso](/es/cases/use-cases/case-study-template/)

## Contexto

Tras añadir un capítulo al sitio de docs, hace falta:

1. Actualizar el slug del sidebar en `astro.config`
2. Corregir enlaces relativos en el texto
3. `npm run build` sin errores

Es fácil olvidar un slug a mano; conviene que el Agent **ejecute según checklist + acepte por build**.

## Preparación

- [ ] Rama git limpia
- [ ] `npm run build` funciona en local
- [ ] Lista de rutas de páginas nuevas y posición objetivo en el sidebar

## Prompt de tarea (ejemplo)

```text
Objetivo: Añadir environment-variables.md a 12-reference e integrarlo en el sidebar y los enlaces del index.
Restricciones: Solo modificar src/content/docs y astro.config.mjs; no actualizar dependencias.
Aceptación: npm run build correcto; sin enlaces rotos.
Pasos: primero config, luego el md, por último actualizar 12-reference/index.md.
```

## Puntos clave de ejecución

- **Config primero, contenido después:** evita errores de build por missing slug
- Commit cada 3–5 archivos para facilitar el review
- Usa [Explorar—planificar—ejecutar—verificar](/es/cases/workflows/explore-plan-execute-verify/)

## Comprobación

- [ ] Cada ítem del sidebar tiene un archivo correspondiente al slug
- [ ] Los enlaces internos siguen la convención de rutas relativas
- [ ] El log de build no tiene avisos de Starlight (si el equipo exige cero avisos)

## Recuperación ante fallos

| Problema | Tratamiento |
|---|---|
| Error de slug del sidebar | Ajusta el slug según docs de Astro o añade el md |
| Enlace roto | `grep` la ruta objetivo; corrige el enlace o añade la página |
| OOM en el build | Cambia por lotes; aumenta memoria de Node en local |

## Retrospectiva

- La tercera vez que hagas «capítulo nuevo + sidebar» debería capturarse como Skill
- Marca ítems del ROADMAP al completarlos para que docs y plan no se desalineen

## Fuentes de referencia
- Flujo real de iteración M2 de docs de este repo
---

**Estado:** verified  
**Productos aplicables:** CLI / IDE  
**Última verificación:** 2026-07-26  
**Base de verificación:** Contrastado con los capítulos ya verificados de artefactos de contenido, EPXV, aceptación por build y plantilla de caso. El contenido se limita al caso estable de ingeniería de contenido «cambios pequeños multiarchivo en el sitio de docs, verificación por build y recuperación ante fallos».
