---
title: Biblioteca de escenarios y casos
description: Tareas reales de extremo a extremo — preparación, ejecución, verificación, recuperación ante fallos y retrospectiva.
locale: es
source_locale: zh-CN
source_revision: 6349392
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

La biblioteca de casos responde a: «**Con este tipo de objetivo real, ¿cómo se siente un recorrido completo con Codex?**» Complementa las páginas aisladas del producto.

## Caso vs tutorial

| | Tutorial introductorio | Biblioteca de casos |
|---|---|---|
| Objetivo | Aprender un botón/concepto | Entregar un tipo de resultado real |
| Estructura | Por función del producto | Por tipo de tarea |
| Manejo de fallos | A menudo omitido | Obligatorio |

## Cómo usarla

1. Elige el caso más cercano a tu objetivo (o solo su «lista de preparación»)
2. Contrasta con [Explorar—planificar—ejecutar—verificar](/es/cases/workflows/explore-plan-execute-verify/)
3. Al terminar, usa la [plantilla de caso](/es/cases/use-cases/case-study-template/) para la retrospectiva y decide si capturarlo como Skill

## Casos starter existentes

| Dominio | Caso | Descripción |
|---|---|---|
| Desarrollo de software | [Corregir un bug con verificación](/es/cases/use-cases/software-development/fix-a-bug-with-verification/) | El bucle más habitual para desarrolladores |
| Creación de contenido | [Refactorizar un sitio de docs con revisión](/es/cases/use-cases/content-creation/refactor-docs-with-review/) | Documentación multiarchivo y aceptación por build |
| Investigación y aprendizaje | [Matriz de funciones de competencia](/es/cases/use-cases/research-and-learning/competitive-feature-matrix/) | Investigación con fuentes |
| Automatización de equipo | [Comprobación programada de enlaces](/es/cases/use-cases/team-automation/scheduled-link-check/) · [Sugerencias de triage de issues](/es/cases/use-cases/team-automation/issue-triage-suggestions/) | Automatización ligera de CI y tickets |

Prompts reutilizables: [`examples/prompts/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/prompts) del repo. Se irán añadiendo más casos por dominio a esta biblioteca.

## Direcciones de contribución

- Pasos reproducibles (repo, rama, comandos)
- Marcar cliente aplicable y fecha de verificación
- No narrar «éxitos de una sola vez» que no se puedan verificar

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Contrastado con la estructura actual de la biblioteca de casos del repo, las páginas de entrada por dominio, la plantilla de caso y la entrada de prompts en examples. Esta página solo navega la organización de casos por tipo de tarea real.
