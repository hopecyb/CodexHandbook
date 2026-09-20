---
title: "Ruta de desarrollo: leer código, corregir, revisar y entregar"
description: "Un ejercicio de carrito con un bug une lectura de código, pruebas rojo/verde, revisión del diff y entrega, con tres plantillas para rellenar."
contentType: path
audiences: [developer]
level: beginner
outputs: [javascript, markdown, test-log]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: "Se volvió a ejecutar el ejercicio de referencia: al inicio falló una de tres pruebas, tras la corrección pasaron las tres y los dos archivos de pruebas eran idénticos. El autor revisó las plantillas, pero ningún lector independiente ha completado aún la ruta."
  environment: "Node.js v22.16.0 / Darwin arm64; node:test integrado, sin dependencias de terceros."
  evidence:
    - label: "Resumen de ejecución real"
      href: /downloads/developer-path/run-record.json
    - label: "Referencia de revisión del autor y límites del alcance"
      href: /downloads/developer-path/review-reference.md
sidebar:
  order: 20
prev:
  link: /es/guide/learning-paths/
  label: "Elegir una ruta de aprendizaje"
next:
  link: /es/cases/use-cases/software-development/fix-a-bug-with-verification/
  label: "Iniciar una corrección de bug verificada"
locale: es
source_locale: zh-CN
source_revision: 22d8bd3
translation_status: draft
translated_at: 2026-09-20
---
Con un pequeño ejercicio de carrito completarás cuatro tareas: explicar el código, corregir un error, revisar las diferencias y entregar las pruebas. No necesitas aprender antes todos los clientes, ajustes ni funciones multiagente.

Requisitos: poder leer JavaScript sencillo y ejecutar pruebas Node.js en un terminal local. El entorno de referencia usa Node.js 22.16.0 y no requiere dependencias de terceros. Puedes usar la CLI, un IDE u otro cliente que acceda a archivos locales y al terminal; Node.js determina el comportamiento de las pruebas.

## Preparar el código y el directorio de pruebas

Usa `examples/complete-workflows/developer/verified-bug-fix/` del [repositorio fuente del manual](https://github.com/hopecyb/CodexHandbook). Lee primero `brief.md` y `README.md`, sin mirar `solution/`. Los pasos completos están en [Corregir un bug con verificación](/es/cases/use-cases/software-development/fix-a-bug-with-verification/).

Desde el directorio del ejercicio:

```sh
# work/ todavía no debe existir; si ya tienes un ejercicio, elige otro nombre y no lo sobrescribas.
cp -R starter work
mkdir -p evidence
```

Corrige el error en `work/`. Conserva `starter/` como estado inicial que falla y `solution/` como solución de referencia. Guarda las plantillas siguientes en `evidence/`. Las plantillas descargables no incluyen todo el código: utilízalas junto con el ejercicio del repositorio.

| Hito | Requisito previo | Resultado | Criterio de finalización |
|---|---|---|---|
| 1. Leer código | `brief.md` y `starter/` | `code-map.md` | Entrada, recorrido de datos, fallo y causa respaldados por archivos |
| 2. Corregir y verificar | Causa y pruebas sin modificar | `work/cart.js`, `red.txt`, `green.txt` | Reproducir el fallo antes de superar las mismas pruebas |
| 3. Revisar el diff | Cambios y dos salidas de pruebas | `review.md`, diff de implementación | Expectativas y API intactas, sin cambios ajenos |
| 4. Entregar | Pruebas de los tres hitos anteriores | `handoff.md` | La siguiente persona encuentra los archivos actuales y repite el paso siguiente |

## 1. Leer el código y crear un mapa verificable

[Descarga la plantilla de lectura de código](/downloads/developer-path/code-map-template.md). Pide a Codex que lea `brief.md`, `starter/cart.js` y `starter/cart.test.js` y explique sin modificar nada el punto de entrada, el recorrido de datos, la entrada que activa el fallo, los valores real y esperado, la línea causante y los límites del alcance.

Guarda el resultado en `evidence/code-map.md`. Solo hay dos archivos principales, así que no hace falta un diagrama de arquitectura complejo. Para completar el paso, explica que `10` significa diez por ciento, por qué la implementación errónea convierte un subtotal de 40 en -360 y por qué debería dar 36.

Puedes consultar la [referencia de lectura del autor](/downloads/developer-path/code-map-reference.md), pero comprueba tus conclusiones en el código real. Solo después modifica la implementación.

## 2. Guardar el rojo y hacer la corrección mínima

Ejecuta estos comandos desde `verified-bug-fix/`:

```sh
node --test work/cart.test.js > evidence/red.txt 2>&1
```

Se espera código de salida 1: falla una de las tres pruebas. Abre `evidence/red.txt` y confirma que la prueba del descuento muestra -360 como valor real y 36 como esperado. Si todas pasan, comprueba si usaste la solución de referencia o modificaste algún archivo antes; no supongas que reprodujiste el fallo.

Puedes delimitar directamente toda la ejecución:

```text
A partir de brief.md y evidence/code-map.md, corrige solo la conversión del porcentaje en work/cart.js.
Mantén la firma de la función y las aserciones de work/cart.test.js. No añadas dependencias ni refactorices.
Después ejecuta node --test work/cart.test.js y guarda la salida real en evidence/green.txt.
Si el resultado no es el esperado, conserva la prueba del fallo y localiza la causa; no cambies las aserciones para adaptarlas a la implementación.
Entrega un resumen de cambios y resultados de las pruebas. No hagas commit ni push.
```

Para terminar, las tres pruebas originales deben pasar con código de salida 0 y el cambio debe limitarse a la causa. Un comando de prueba fallido también puede generar un registro; que exista `green.txt` no demuestra que las pruebas hayan pasado.

## 3. Revisar diferencias y omisiones

[Descarga la plantilla de revisión](/downloads/developer-path/review-template.md) e indica la comparación real: el `starter/` conservado frente a tu `work/`, no `main` por defecto. Tampoco depende de si el repositorio tiene cambios sin confirmar.

```sh
diff -u starter/cart.js work/cart.js
diff -u starter/cart.test.js work/cart.test.js
```

El primer comando debería mostrar la conversión del porcentaje; código de salida 1 significa que hay diferencias, no un fallo del comando. El segundo no debería mostrar nada y debe devolver 0. Pide a Codex una revisión de solo lectura del diff real y de los registros rojo/verde; anota hallazgos, pruebas, aspectos no cubiertos y decisiones en `evidence/review.md`.

Comprueba que las pruebas no se hayan relajado, que la API siga igual y que no haya dependencias adicionales ni cambios ajenos. La precisión monetaria, los impuestos y las entradas inválidas quedan fuera del ejercicio; superar tres pruebas no demuestra seguridad en producción. Compara con la [referencia de revisión del autor](/downloads/developer-path/review-reference.md).

## 4. Escribir la entrega y recuperar desde los archivos

[Descarga la plantilla de entrega](/downloads/developer-path/handoff-template.md). En `evidence/handoff.md`, indica el directorio actual, archivos modificados, restricciones vigentes, rutas de pruebas, siguiente comando y resultado esperado. En un proyecto Git real, añade rama, commit y estado del árbol de trabajo.

Una tarea de solo lectura tras la entrega puede ser:

```text
Lee evidence/handoff.md y comprueba primero que los archivos actuales de work/ coincidan con la descripción de la entrega.
Desde la raíz del ejercicio, ejecuta node --test work/cart.test.js y registra el código de salida real y el resumen.
Compara implementación y pruebas de work con starter. Si el estado difiere, explica la diferencia; no reutilices un resultado verde anterior.
No modifiques código ni hagas commit o push.
```

Puedes hacerlo en una tarea nueva o pedir a otra persona que lo verifique. Reabrirlo tú mismo solo es un ensayo de recuperación, no una revisión humana independiente. Consulta el [registro de entrega del autor](/downloads/developer-path/handoff-reference.md).

La entrega se completa cuando el archivo por sí solo permite encontrar código, pruebas y límites, y ejecutar el resultado actual. Si aún no se ha ejecutado esta comprobación, deja «pendiente de verificación tras la entrega» en el registro.

## A qué paso volver si surge un problema

- No encuentras un archivo: comprueba el directorio del terminal y si existe `work/`; vuelve a la preparación.
- No hay rojo: revisa el estado inicial y las pruebas; el verde de la solución de referencia no reproduce el fallo.
- Las pruebas pasan solo después de modificarlas: restaura las aserciones originales y vuelve a analizar la causa.
- Hay cambios ajenos: conserva el diff, reduce la corrección y repite las pruebas.
- La entrega no coincide con los archivos: usa los archivos actuales como referencia, actualiza el registro y sigue.

En un proyecto real, añade a esta estructura las comprobaciones lint, de tipos y la batería completa exigidas por el repositorio. Determina su necesidad y comandos según las instrucciones reales del proyecto. Este ejercicio no incluye esas comprobaciones, así que no inventes resultados aprobados.
