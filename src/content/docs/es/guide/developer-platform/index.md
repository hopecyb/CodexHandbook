---
title: Plataforma para desarrolladores
description: Integra Codex en tu stack de ingeniería con SDK, CLI no interactivo y CI/CD — para desarrolladores de integración.
sidebar:
  order: 50
locale: es
source_locale: zh-CN
source_revision: 2e1e79b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

La **plataforma para desarrolladores** es para quienes quieren **productivizar** Codex en pipelines: apps a medida, revisión por lotes, puertas de release, portales internos. El uso cotidiano de «escribir un Prompt para corregir un bug» sigue empezando en [Primeros pasos](/es/guide/getting-started/).

Este capítulo no trata el uso diario de Codex, sino cómo enchufarlo en tus propios sistemas.

Se orienta a escenarios como:

- Ejecutar Tareas automáticamente en CI
- Integrar Codex en tu backend o herramientas internas
- Hacer de Codex parte del flujo de trabajo del equipo

## Qué cubre esta página

- El límite entre la plataforma para desarrolladores y el manual de producto para usuarios finales
- Arquitectura típica de integración
- Navegación del capítulo y hoja de ruta

## División con el manual de producto

| Pregunta del lector | Dónde ir |
|---|---|
| Cómo ejecutar `codex` en la terminal | [Manual de producto CLI](/es/guide/cli/) |
| Cómo hacer revisión con exec en CI | [Modo no interactivo](/es/guide/cli/non-interactive-mode/) + CI de este capítulo |
| Cómo incrustar un Agent en tu App | [Resumen del SDK](/es/guide/developer-platform/sdk-overview/) |
| Modelo de Permisos y seguridad | [Patrones de Aprobación humana](/es/cases/workflows/human-approval-patterns/) |

## Arquitectura típica (concepto)

```text
Tu sistema (CI / plataforma interna / SaaS)
        ↓ API o CLI
Codex (modelo + Herramientas + política)
        ↓
Proveedor Git / tickets / almacén de artefactos
```

## Principios de diseño

1. **Idempotente y reintentable**: revisiones repetidas del mismo PR deben ser comparables
2. **Privilegio mínimo**: token de CI de solo lectura o limitado a repositorios
3. **Observable**: conservar versión del Prompt, modelo y artefacto del diff
4. **División humano-máquina**: comentario automático ≠ merge automático

## Navegación del capítulo

| Tema | Páginas |
|---|---|
| SDK | [Resumen del SDK](/es/guide/developer-platform/sdk-overview/) |
| No interactivo | [codex exec](/es/guide/developer-platform/non-interactive/codex-exec/) · [Scripts y pipelines](/es/guide/developer-platform/non-interactive/scripts-and-pipelines/) · [Salida estructurada](/es/guide/developer-platform/non-interactive/structured-output/) · [Códigos de salida y reintentos](/es/guide/developer-platform/non-interactive/exit-codes-and-retries/) |
| Webhooks | [Resumen](/es/guide/developer-platform/webhooks/overview/) |
| CI/CD | [Automatización de revisión de código](/es/guide/developer-platform/ci-cd/code-review-automation/) |

Más sobre `codex-sdk/`, `app-server/` y `architecture-patterns/` en el [esquema del capítulo](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/chapter-outline.md).

## Malentendidos frecuentes

### 1. ¿Debo aprender este capítulo para «saber de verdad» usar Codex?

Si ahora solo quieres empezar a usar Codex, puedes leerlo más tarde.

### 2. ¿Cómo se relaciona con CLI / App / IDE?

Así:

- **App / CLI / IDE**: entradas donde tú o tu equipo usáis Codex directamente
- **Plataforma para desarrolladores**: enchufar Codex en otros sistemas y flujos

### 3. ¿Qué página vale más la pena leer primero en este capítulo?

Para formarte el concepto, prioriza [Resumen del SDK](/es/guide/developer-platform/sdk-overview/) y su relación con el [modo no interactivo](/es/guide/cli/non-interactive-mode/).

Este capítulo habla de «cómo enchufar Codex en el sistema». Para el primer uso práctico, empieza por el contenido de primeros pasos.

## Fuentes de referencia
- Documentación oficial de la API / SDK de OpenAI Codex
---

**Estado:** verified  
**Productos aplicables:** API / CLI / Cloud  
**Base de verificación:** Contrastado con la estructura actual del capítulo developer-platform, las entradas de navegación y las páginas relacionadas de CLI/CI/SDK; esta página solo aclara la división estable de que la plataforma para desarrolladores apunta a la integración de ingeniería, sin declarar parámetros o comportamientos de runtime concretos.  
**Última verificación:** 2026-07-26
