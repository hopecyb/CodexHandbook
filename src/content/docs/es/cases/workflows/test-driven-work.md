---
title: Trabajo impulsado por tests
description: Define o completa primero tests que fallen y deja que impulsen la implementación — para que los cambios de Codex se puedan aceptar de forma objetiva.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Trabajo impulsado por tests** (TDD o «tests primero») consiste en hacer fallar el test y luego pasar a verde con la implementación mínima. Encaja en repos con infraestructura de tests y se relaciona directamente con escenarios como [Corregir un bug con verificación](/cases/use-cases/software-development/fix-a-bug-with-verification/).

## Enfoque de esta página

- Cuándo exigir «escribir/ejecutar tests primero»
- Cómo indicar a Codex que no se salte los pasos de test
- Estrategia de retroceso cuando los tests fallan

## Para quién

- Repos con tests unitarios/de integración
- Bugs de regresión, cambios de comportamiento de API, refactorizaciones

No adecuado: prototipos sin infraestructura de tests, cambios únicos en sitios solo de copy. Ahí es mejor [EPXV](/cases/workflows/explore-plan-execute-verify/) con verificación humana.

## Práctica mínima viable

```text
1. Escribe un test que falle para el comportamiento esperado (o señala uno que ya falle)
2. Implementa solo el código mínimo para que ese test pase
3. Ejecuta la suite relacionada y luego la completa
4. No borres aserciones ni hagas mock de la lógica real solo para «pasar»
```

Prompt:

```text
Sigue TDD: primero escribe un test que falle para «entrada vacía → []» en @src/foo.ts;
ejecuta el test, confirma el fallo y luego cambia la implementación; en cada paso solo el archivo de test relacionado.
```

## Flujo recomendado

| Fase | Salida |
|---|---|
| Rojo | Test fallido + explicación de la causa |
| Verde | Implementación mínima + test en verde |
| Refactor | Ordenar el código bajo la protección de los tests (paso opcional aparte) |

Combínalo con [Diagnosticar antes de corregir](/cases/workflows/diagnose-before-fixing/): lee primero la aserción fallida y el stack, luego toca la implementación.

## Errores frecuentes

- Declarar terminado sin haber ejecutado tests
- Cambiar el test para acomodar una implementación incorrecta
- Ejecutar un solo test y afirmar que «todo está verde»
- Correr una y otra vez una suite E2E lenta — usa `-t` o filtrado por archivo

## Límites de seguridad

- Los comandos de test deben estar en el alcance de [reglas de comandos](/guide/customization/rules/command-rules/)
- Si un test de integración toca APIs de producción, la especificación debe prohibirlo o exigir mock

## Checklist de aceptación

- [ ] Hay evidencia de fallo→pase (log o CI)
- [ ] Pasan la suite completa o el alcance acordado
- [ ] El diff no elimina tests ajenos
- [ ] Coherente con [Definir terminado](/prompts/define-done/)

## Capítulos relacionados

- [Ejecutar tests](/guide/quality/run-tests/)
- [Caso: corregir un bug con verificación](/cases/use-cases/software-development/fix-a-bug-with-verification/)

## Fuentes de referencia

- Capítulos de tests y calidad de stormzhang
- Flujo de desarrollador de CodexGuide

---

**Estado:** verified  
**Productos aplicables:** CLI / IDE  
**Última verificación:** 2026-07-26  
**Base de verificación:** Contrastado con los capítulos ya verificados de ejecutar tests, definir terminado, corregir bugs con verificación y reglas de comandos. El contenido se centra en el método estable «hacer fallar el test primero, luego pasar a verde con la implementación mínima».
