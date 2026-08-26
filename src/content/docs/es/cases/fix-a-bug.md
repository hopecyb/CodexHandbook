---
title: 'Corregir un bug: por dónde empezar'
description: Elige la ruta de corrección que corresponda a tu situación y continúa con el caso completo y ejecutable.
locale: es
source_locale: zh-cn
source_revision: 27c707b
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Esta es una página de entrada breve. Los pasos completos, el código ejecutable, las evidencias de pruebas en rojo y verde y los prompts de cada fase se mantienen en [Corrección de bugs con verificación](/es/cases/use-cases/software-development/fix-a-bug-with-verification/) para evitar que dos páginas se repitan y acaben contradiciéndose.

## Identifica qué paso te falta

| Situación actual | Empieza aquí |
|---|---|
| Solo sabes que el resultado es incorrecto; todavía no hay una reproducción estable | [Diagnosticar antes de corregir](/es/cases/workflows/diagnose-before-fixing/) |
| Ya existe una prueba que falla de forma fiable | [Corrección de bugs con verificación](/es/cases/use-cases/software-development/fix-a-bug-with-verification/) |
| No conoces el módulo relacionado | [Comprender una base de código](/es/cases/understand-a-codebase/) |
| La corrección está terminada y lista para fusionar | [Revisar un PR](/es/cases/review-a-pr/) |
| La propia prueba es inestable | Lee primero [Ejecutar pruebas](/es/guide/quality/run-tests/); una flaky test no demuestra una corrección |

## Ciclo mínimo de evidencias

Conserva esta cadena de evidencias en cualquier lenguaje o framework:

1. Reproduce de forma fiable el fallo original con un comando explícito.
2. Guarda la aserción que falla, la salida de error y las condiciones de entrada.
3. Explica la causa raíz antes de realizar la corrección mínima.
4. Haz que pasen la prueba que fallaba y las nuevas pruebas de límites.
5. Ejecuta comprobaciones de regresión más amplias.
6. Lee manualmente el diff y rechaza cambios que no estén relacionados.

El paso 4 sin el paso 1 no demuestra que la prueba cubra el problema original. Una suite completa en verde sin revisar el diff tampoco demuestra que el alcance del cambio sea correcto.

## Practicar directamente

El repositorio incluye un ejemplo JavaScript de descuentos en un carrito que no necesita paquetes de terceros:

```bash
# Código inicial: se espera que falle una prueba
node --test examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js

# Solución de referencia: se espera que pasen las tres pruebas
node --test examples/complete-workflows/developer/verified-bug-fix/solution/cart.test.js
```

Los materiales completos están en [`examples/complete-workflows/developer/verified-bug-fix/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/complete-workflows/developer/verified-bug-fix).

---

**Estado:** verified
**Productos aplicables:** CLI / IDE
**Base de verificación:** Esta página de entrada solo mantiene la elección de ruta y un ciclo de ingeniería estable. Los comandos con el fallo esperado y con la solución correcta se ejecutaron en el repositorio actual.
**Última verificación:** 2026-08-25
