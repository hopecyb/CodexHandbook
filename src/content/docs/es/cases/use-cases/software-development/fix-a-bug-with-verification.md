---
title: "Caso: corrección de bugs con verificación"
description: Usa un bug ejecutable en el cálculo de descuentos para reproducir el rojo, localizar la causa raíz, aplicar la reparación mínima, verificar el verde, ejecutar la regresión y revisar el diff.
locale: es
source_locale: zh-cn
source_revision: 91d8575
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

No es una plantilla de prompt que se completa cambiando nombres de archivo. Ejecutarás código inicial real, observarás una prueba que falla y comprobarás cómo la reparación de referencia hace pasar la misma suite.

## Metadatos

| Campo | Valor |
|---|---|
| Público | Desarrolladores |
| Cliente | CLI o IDE con un repositorio local |
| Tiempo estimado | 25-45 minutos |
| Requisito previo | Saber ejecutar un comando de Node.js y leer JavaScript sencillo |
| Dependencia | `node:test` integrado; ningún paquete de terceros |
| Verificado | 2026-08-25 |

## 1. Objetivo y contexto

**Contexto de negocio:** `calculateTotal` recibe un porcentaje de descuento. Con un descuento de cero el resultado es correcto, pero `10`, que debe significar un 10 %, se multiplica como si fuera una proporción y produce un total negativo.

**Objetivo:** localizar el error de cálculo, aplicar la reparación mínima y demostrar que las mismas pruebas pasan de rojo a verde.

**Criterios de éxito:**

- La suite inicial tiene de forma fiable un fallo: se esperaba 36 y se obtuvo -360.
- Las tres pruebas pasan después de la reparación.
- Solo cambia la conversión del porcentaje; no se reescribe la API del carrito.
- Puedes explicar por qué el verde posterior debe conservarse junto con el rojo anterior a la corrección.

**Fuera del alcance:** bibliotecas de precisión monetaria, impuestos, conversión de divisas, actualizaciones y UI.

![Flujo de corrección de bugs con verificación](/diagrams/verified-bug-fix-workflow-es.svg)

Las dos rutas de retorno son importantes: si falla una prueba relacionada, se vuelve a la reparación mínima; si falla la regresión o la revisión del diff, se vuelve al análisis de la causa raíz. Nunca elimines aserciones ni amplíes los cambios solo para llegar al verde.

## 2. Preparar los materiales

```text
examples/complete-workflows/developer/verified-bug-fix/
├── brief.md
├── starter/
│   ├── cart.js
│   └── cart.test.js
├── prompts/
│   ├── 01-explore.md
│   ├── 02-fix-and-verify.md
│   └── 03-review.md
├── solution/
│   ├── cart.js
│   └── cart.test.js
└── validation.md
```

`starter/` contiene el bug de forma intencionada; `solution/` es una referencia que puede ejecutarse de manera independiente. No practiques sobre la solución.

## 3. Reproducir el rojo

Desde la raíz del repositorio, ejecuta:

```bash
node --test examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js
```

Resultado esperado: salida con estado distinto de cero y un fallo de tres pruebas. La evidencia principal se parece a:

```text
Expected values to be strictly equal:

-360 !== 36
```

Si no falla, detente. Comprueba la ruta `starter/`, la versión de Node.js y si los archivos ya se modificaron. Sin un rojo estable no existe una evidencia de referencia del problema original.

## 4. Exploración de solo lectura

### Explorar

```text
No edites todavía. Lee:
- examples/complete-workflows/developer/verified-bug-fix/starter/cart.js
- examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js

Explica en un máximo de seis puntos:
1. qué entrada activa el fallo;
2. cuáles son los valores esperado y real;
3. la diferencia entre porcentaje y proporción en la fórmula;
4. la ubicación exacta de la reparación mínima;
5. qué comportamiento público debe conservarse;
6. qué verificaciones deben ejecutarse después de corregir.
```

Una explicación correcta indica que el llamador pasa `10` para representar el 10 %, mientras que la implementación calcula `subtotal * 10` sin dividir entre `100`.

## 5. Planificar y aplicar la reparación mínima

```text
Modifica únicamente la conversión del porcentaje en starter/cart.js.
No cambies el nombre de la función, los parámetros, las aserciones, la estructura de archivos ni las dependencias.

Después:
1. ejecuta starter/cart.test.js;
2. muestra el resumen real de las pruebas;
3. explica la línea modificada;
4. no hagas commit ni push.
```

El núcleo de la reparación es:

```js
const discount = subtotal * (discountPercent / 100);
```

Cambiar el valor esperado `36` por `-360` solo reescribe la expectativa; no corrige la regla de negocio.

## 6. Verificar el verde

Si quieres conservar intacto el código inicial, ejecuta la referencia:

```bash
node --test examples/complete-workflows/developer/verified-bug-fix/solution/cart.test.js
```

Resultado esperado: pasan las tres pruebas y el proceso termina con estado 0.

Conserva al menos:

| Evidencia | Pregunta |
|---|---|
| Comando que falla antes de la corrección | ¿Se puede reproducir el problema original? |
| Aserción que falla | ¿La prueba cubre realmente el bug? |
| Diff del código | ¿La edición solo afecta a la causa? |
| Prueba relacionada posterior a la corrección | ¿El mismo comportamiento es ahora correcto? |
| Pruebas más amplias | ¿Se ha producido una regresión en comportamientos adyacentes? |

Este ejercicio solo tiene una suite. En un repositorio real también debes ejecutar el lint, la comprobación de tipos y todas las pruebas indicadas en `AGENTS.md`.

## 7. Revisión

```text
Revisa esta reparación sin editar. Enumera primero los hallazgos:
- ¿Convierte el porcentaje en vez de debilitar las pruebas?
- ¿Cambió la firma o lógica no relacionada?
- ¿Están cubiertos el carrito vacío, la ausencia de descuento y el 10 %?
- ¿Qué riesgos de precisión monetaria quedan fuera del alcance?
```

Confirma también que no aparecieron dependencias, registros de depuración, formato de todo el archivo ni operaciones Git.

## 8. Fallos y recuperación

| Problema | Respuesta |
|---|---|
| El código inicial no falla | Ejecuta `starter/cart.test.js` y restaura el punto de partida |
| Se obtiene verde tras cambiar la prueba | Restaura la aserción; modifica solo la conversión del porcentaje |
| La prueba relacionada sigue fallando | Compara los valores y la posición de `/ 100` |
| La suite completa añade fallos | Vuelve a la causa raíz, al comportamiento público y al alcance |
| La prueba es flaky | Estabiliza el entorno; una única ejecución en verde no es evidencia |

## 9. Trasladar el ejercicio a un repositorio real

```text
Objetivo: corregir [comportamiento incorrecto observable].
Reproducción: [comando exacto]; fallo estable: [aserción].
Alcance: solo [implementación] y las pruebas necesarias; sin refactor ni actualización.
Aceptación: pasan la prueba original y las de límites; pasa [comando completo]; diff limpio.
Permisos: sin push, publicación ni datos de producción; detenerse antes de pedir acceso adicional.
Localiza la causa raíz y los riesgos en modo de solo lectura; espera la aprobación del plan antes de editar.
```

## 10. Conservar el proceso

- Añade una regla a `AGENTS.md` si esta clase de bug se repite.
- Extrae un Skill `regression-guard` que exija evidencias de rojo, verde y regresión.
- Incluye en CI las pruebas de límites frecuentes en vez de conservarlas solo en los chats.

## 11. Capítulos relacionados

- [Diagnosticar antes de corregir](/es/cases/workflows/diagnose-before-fixing/)
- [Ruta de aprendizaje para desarrolladores](/es/guide/learning-paths/developer/)
- [Ejecutar pruebas](/es/guide/quality/run-tests/)
- [Revisar diffs](/es/guide/quality/review-diffs/)
- [Definir cuándo está terminado](/es/prompts/define-done/)

---

**Estado:** verified
**Productos aplicables:** CLI / IDE
**Base de verificación:** El ejemplo inicial se verificó con un fallo esperado de tres pruebas; la solución de referencia supera las tres. La cadena de evidencias se organiza en rojo, causa raíz, reparación mínima, verde, regresión y revisión humana.
**Última verificación:** 2026-08-25
