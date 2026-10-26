---
contentType: case
directoryOrder: 85
caseCategory: creation
legacyVerification:
  status: verified
  products: App / CLI
  basis: Contrastado con los capítulos ya verificados de investigación con fuentes, búsqueda web, validar fuentes y política de versiones. El contenido se limita a la estructura estable del caso de investigación «producir una matriz de productos competidores con fuentes»; no fija precios ni versiones concretas de producto.
  checkedAt: '2026-07-26'
title: "Caso: matriz de funciones de productos competidores"
description: Investigación con citas y salida tabular — un flujo reutilizable también para lectores no técnicos.
locale: es
source_locale: zh-CN
source_revision: "b74008b"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-25
---

## Metadatos

| Campo | Contenido |
|---|---|
| Público | Producto, operaciones, investigadores |
| Cliente | App o CLI |
| Tiempo estimado | 45 minutos |
| Fecha de verificación | 2026-07-25 |

## 1. Objetivo y contexto

**Objetivo:** Producir una tabla comparativa de 3–5 competidores (funciones, pistas de precio, escenarios de uso), con fuente en cada conclusión.

**Criterios de éxito:**

- Tabla Markdown + marcas «pendiente de confirmar»
- No inventar precios ni números de versión
- No volcar secretos internos en documentos externos

## 2. Preparación

- Aclara las dimensiones de comparación (en el prompt o en `@brief.md`)
- Activa [búsqueda web](/es/guide/tools/web-search/) (si el producto lo admite)

## 3. Flujo de trabajo

Sigue [Investigación con fuentes](/es/cases/workflows/research-with-sources/):

```text
Compara la función de «colaboración en equipo» de A/B/C:
por cada dimensión, 1–2 frases + URL de fuente;
prioriza docs oficiales sobre blogs;
si el precio no se puede verificar, marca «pendiente de confirmar»;
salida en tabla markdown; no modifiques otros archivos del repo.
```

**Verificación:** Abre a mano 3 URLs; comprueba fechas y la [política de verificación](/es/guide/start-here/handbook-version-policy/).

## 4. Fallo y recuperación

- Fuentes en conflicto: pide ambas versiones en paralelo; no unifiques a la fuerza
- Contexto demasiado largo: parte en «primero A vs B, luego añade C»

## 5. Captura para reutilizar

- La plantilla de tabla comparativa va al directorio de plantillas o base de conocimiento del equipo
- Puede convertirse en Skill: `source-backed-research`

## 6. Capítulos relacionados

- [Trabajo orientado a artefactos](/es/cases/workflows/artifact-first-work/)
- [Validar fuentes](/es/guide/quality/validate-sources/)
