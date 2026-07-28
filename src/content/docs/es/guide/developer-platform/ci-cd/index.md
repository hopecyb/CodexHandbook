---
title: CI/CD
description: Integra Codex en integración continua y release — empieza por automatización de bajo riesgo.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Al conectar Codex a CI/CD, el fallo más habitual suele ser este:

Querer de entrada que cambie, haga push y merge automáticamente.

Lo más habitual es empezar por solo lectura, solo sugerencias y solo informes.

## Entrada de este grupo

- [Automatización de revisión de código](/guide/developer-platform/ci-cd/code-review-automation/)

## Contenido del grupo

- Revisión estructurada en la fase de PR
- Dejar que la automatización primero «encuentre problemas» y «dé sugerencias»
- Dejar las acciones de alto riesgo a la Aprobación humana

En CI/CD, con Codex suele empezarse por ayuda de bajo riesgo y luego decidir qué acciones merecen más privilegios.

---

**Estado:** verified  
**Productos aplicables:** CLI / API / Cloud  
**Base de verificación:** Contrastado con la estructura actual del subcapítulo CI/CD y la entrada de automatización de revisión de código; el contenido se limita al principio estable de «primero ayuda de bajo riesgo en CI/CD, luego decidir si ampliar privilegios».  
**Última verificación:** 2026-07-26
