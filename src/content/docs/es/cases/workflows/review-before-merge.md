---
title: Revisión antes de fusionar
description: Antes del merge, usa Codex para una revisión estructurada del diff y de riesgos — con división clara humano/máquina.
locale: es
source_locale: zh-CN
source_revision: ce05ae9
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

**Revisión antes de fusionar** lleva [Calidad y verificación](/es/guide/quality/) al flujo de Git: antes de fusionar el PR, Codex comprueba que diff, tests, seguridad y especificación coincidan. Un comentario automático no sustituye la fusión automática.

## Enfoque de esta página

- División de trabajo entre revisión local y revisión Cloud/CI
- Qué dimensiones debe cubrir el prompt de revisión
- Cuándo hace falta la firma final humana

## Práctica mínima viable

**Local (autoinspección del autor)**

```text
Compara el diff de la rama actual con main (no cambies código todavía):
1. ¿Se sale del alcance del issue?
2. ¿Hay riesgos evidentes de seguridad (secretos, inyección, permisos)?
3. ¿Faltan tests o documentación?
Devuelve un checklist con P0/P1.
```

**CI (puerta del equipo)**

- Versión fija del prompt + token de solo lectura
- Resultado en comentario de PR o check run
- Ver [Automatización de code review](/es/guide/developer-platform/ci-cd/code-review-automation/)

## Dimensiones de revisión recomendadas

| Dimensión | Qué mirar |
|---|---|
| Corrección | Lógica, bordes, manejo de errores |
| Tests | Si el comportamiento nuevo tiene cobertura |
| Seguridad | Secretos, inyección, pistas de vulnerabilidades en dependencias |
| Mantenibilidad | Nombres, duplicación, API pública |
| Especificación | Coherencia con issue / documento de especificación |

Puede combinarse con [Revisar diffs](/es/guide/quality/review-diffs/); los ítems de alto riesgo pasan por [Patrones de aprobación humana](/es/cases/workflows/human-approval-patterns/).

## Errores frecuentes

- Dejar que el modelo diga solo «LGTM» sin base concreta
- Pegar la descripción completa del PR sin sanitizar en el prompt de CI (riesgo de inyección)
- Revisión aprobada pero sin ejecutar los tests de CI
- Bot de fusión automática activo sin protección de ramas

## Límites de seguridad

- Revisión con permisos de solo lectura; las correcciones deben ir en un **commit nuevo** disparado por una persona
- No registrar PII de usuarios ni secretos en logs de revisión

## Checklist de aceptación

- [ ] La salida de la revisión se puede rastrear hasta archivos/líneas concretas
- [ ] Los P0 bloquean la fusión o ya están corregidos
- [ ] Alineado con el checklist de review del equipo
- [ ] Un maintainer humano decide los puntos en disputa

## Capítulos relacionados

- [Code review en Cloud](/es/guide/web-and-cloud/code-review/)
- [Crear Pull Request](/es/guide/web-and-cloud/create-pull-requests/)

---

**Estado:** verified  
**Productos aplicables:** CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Contrastado con los use cases públicos actuales de code review / pull request de OpenAI Developers, y con los capítulos ya verificados de calidad, revisión de diffs y Cloud. Esta página solo confirma el principio estable «revisión estructurada antes de fusionar, revisión en solo lectura y firma final humana».
