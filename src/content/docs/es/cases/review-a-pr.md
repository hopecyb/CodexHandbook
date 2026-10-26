---
caseCategory: development
directoryOrder: 70
contentType: case
outputs: [markdown]
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Los use cases actuales de Codex en OpenAI Developers siguen incluyendo «Review GitHub pull requests», centrados en detectar regresiones y problemas potenciales antes de la revisión humana. Este ejemplo solo exige una revisión estructurada del diff con P0/P1 y rutas, sin depender de una UI o comando fijos."
  checkedAt: "2026-07-26"
title: Revisar un PR
description: Usa Codex para una revisión estructurada del diff antes de fusionar.
locale: es
source_locale: zh-CN
source_revision: '84638f0'
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-25
---


## Metadatos

| Campo | Contenido |
|---|---|
| Público | Desarrolladores / equipos |
| Cliente | CLI / IDE / Cloud |
| Tiempo estimado | 20–40 minutos |

## 1. Objetivo y contexto

**Objetivo:** Antes de fusionar, detectar ampliación de alcance, riesgos de seguridad y carencias en las pruebas.

**Criterios de éxito:** La salida de la revisión se puede rastrear hasta archivos/líneas concretas; los P0 están resueltos o bloquean la fusión.

## 2. Prompt recomendado

```text
Compara el diff de la rama actual con main (no cambies código todavía):
1. ¿Se sale del alcance del issue?
2. ¿Hay riesgos evidentes de seguridad (secretos, inyección, permisos)?
3. ¿Faltan tests o documentación?
Devuelve un checklist con P0/P1 y rutas de archivo.
```

## 3. Reutilización en equipo

- Usa el Skill [`$pr-review`](/es/skills/examples/review-skill/)
- Integración CI: [Automatización de code review](/es/guide/developer-platform/ci-cd/code-review-automation/)

## 4. Relacionado

- [Plantilla de revisión](/es/prompts/templates/review/)
- [Revisión antes de fusionar](/es/cases/workflows/review-before-merge/)
