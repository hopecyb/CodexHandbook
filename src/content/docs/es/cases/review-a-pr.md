---
title: Revisar un PR
description: Usa Codex para una revisión estructurada del diff antes de fusionar.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Revisar un PR

## Metadatos

| Campo | Contenido |
|---|---|
| Público | Desarrolladores / equipos |
| Cliente | CLI / IDE / Cloud |
| Tiempo estimado | 20–40 minutos |

## 1. Objetivo y contexto

**Objetivo:** Antes de fusionar, detectar ampliación de alcance, riesgos de seguridad y lagunas de tests.

**Criterios de éxito:** La salida de la revisión se puede rastrear hasta archivos/líneas concretas; los P0 están resueltos o bloquean la fusión.

## 2. Prompt recomendado

```text
Compara el diff de la rama actual con main (no cambies código todavía):
1. ¿Se sale del alcance del issue?
2. ¿Hay riesgos evidentes de seguridad (secretos, inyección, permisos)?
3. ¿Faltan tests o documentación?
Devuelve un checklist con P0/P1 y rutas de archivo.
```

## 3. Captura de equipo

- Usa el Skill [`$pr-review`](/skills/examples/review-skill/)
- Integración CI: [Automatización de code review](/guide/developer-platform/ci-cd/code-review-automation/)

## 4. Relacionado

- [Plantilla de revisión](/prompts/templates/review/)
- [Revisión antes de fusionar](/cases/workflows/review-before-merge/)

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Los use cases actuales de Codex en OpenAI Developers siguen incluyendo «Review GitHub pull requests», centrados en detectar regresiones y problemas potenciales antes de la revisión humana. Este ejemplo solo exige una revisión estructurada del diff con P0/P1 y rutas, sin depender de una UI o comando fijos.
