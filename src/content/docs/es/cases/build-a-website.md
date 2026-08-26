---
title: Crear un sitio web
description: Caso de prototipo — de los requisitos a una página previsualizable.
locale: es
source_locale: zh-CN
source_revision: b3ec6d8
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Crear un sitio web

## Metadatos

| Campo | Contenido |
|---|---|
| Público | Creadores / desarrolladores |
| Cliente | App / IDE |
| Tiempo estimado | 2–4 horas |

## 1. Objetivo y contexto

**Objetivo:** A partir de requisitos sencillos, montar una página estática o un sitio pequeño previsualizable en local.

**Criterios de éxito:** Se abre en el navegador, el estilo coincide con la descripción y no hay cambios ajenos a los archivos relevantes.

## 2. Prompt recomendado

```text
Objetivo: Una landing de una sola página para 【producto/evento】, con título, tres características y un botón CTA.
Técnica: HTML + CSS (o el framework ya presente en el proyecto), adaptable a móvil.
Restricciones: Solo modificar archivos de página bajo src/; no añadir dependencias nuevas sin mi aprobación.
Aceptación: pnpm dev permite previsualizar; incluye capturas que expliquen los bloques principales.
Primero un plan de wireframe; espera mi confirmación antes de escribir código.
```

## 3. Verificación

- Previsualiza en local en varios breakpoints
- Comprueba que no se hayan tocado configs o lockfiles por error

## 4. Relacionado

- [Plantilla de creación](/es/prompts/templates/create/)
- [Trabajo orientado a artefactos](/es/cases/workflows/artifact-first-work/)

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Los use cases actuales de Codex en OpenAI Developers siguen incluyendo escenarios de construcción front-end como «Get from idea to proof of concept», «Build responsive front-end designs» y «Deploy an app or website». Este ejemplo se limita a un sitio pequeño o landing, exige wireframe primero, acota el alcance de cambios y valida con previsualización en el navegador.
