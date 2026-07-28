---
title: Corregir un bug
description: Del test fallido a la corrección mínima y la regresión — el bucle más habitual para desarrolladores.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

## Metadatos

| Campo | Contenido |
|---|---|
| Público | Desarrolladores |
| Cliente | CLI o IDE (repositorio local) |
| Tiempo estimado | 30–60 minutos |
| Fecha de verificación | 2026-07-25 |

## 1. Objetivo y contexto

**Objetivo:** Corregir un bug de regresión capturado por un test unitario y añadir tests para que no se repita.

**Criterios de éxito:**

- El test que fallaba pasa
- La suite completa sigue en verde
- El diff solo toca los archivos necesarios

**Fuera de alcance:** Refactorizaciones grandes, upgrades major de dependencias.

## 2. Preparación

- Clonar el repo, `pnpm install` (o según `AGENTS.md`)
- Confirmar reproducción local: `pnpm test -- path/to/failing.test.ts`
- Rama: `fix/issue-123-short-desc`

## 3. Flujo de trabajo

### Explorar

```text
No cambies el código todavía. Lee el test fallido @tests/auth/login.test.ts y la implementación @src/auth/login.ts,
explica la causa del fallo en 5 puntos como máximo, citando aserciones y números de línea del stack.
```

### Planificar

```text
Propón un plan de corrección: qué archivos cambiar, si hacen falta tests nuevos, cómo verificar.
Espera mi respuesta «ejecutar» antes de tocar el código.
```

### Ejecutar

```text
Ejecuta los pasos 1–2 del plan. Tras cada paso, corre solo los tests relacionados.
```

### Verificar

```text
Ejecuta la suite completa; resume el diff para mi review; no hagas git push.
```

Humano: lee el diff, confirma que no hay cambios ajenos y revisa según [Revisar diffs](/guide/quality/review-diffs/).

## 4. Fallo y recuperación

| Problema | Tratamiento |
|---|---|
| La corrección introduce nuevos fallos | `git stash` o revertir el commit; reduce el alcance |
| Diagnóstico incorrecto | Vuelve a explorar y pide una nueva hipótesis |
| Test flaky | Estabiliza el test antes de corregir la lógica de negocio |

## 5. Captura para reutilizar

- Si este tipo de bug se repite, añade una convención en `AGENTS.md`
- Puedes extraer el Skill `$regression-guard`: ejecutar la lista de tests críticos antes de fusionar

## 6. Capítulos relacionados

- [Entender un código base](/cases/understand-a-codebase/)
- [Revisar diffs](/guide/quality/review-diffs/)
- [Ejecutar tests](/guide/quality/run-tests/)

---

**Estado:** verified  
**Productos aplicables:** CLI / IDE  
**Última verificación:** 2026-07-26  
**Base de verificación:** La home de OpenAI Developers sigue describiendo Codex como útil para corregir defectos, ejecutar tests y revisar cambios. Este ejemplo se centra en el bucle estable «reproducir el fallo → corrección mínima → tests complementarios → verificación de regresión», sin depender de un framework o UI concretos.
