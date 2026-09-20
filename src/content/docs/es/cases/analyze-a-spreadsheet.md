---
caseCategory: office
directoryOrder: 10
title: Del CSV de ventas a un informe semanal verificable
description: Practica limpieza, agrupación, comparación entre periodos y verificación independiente con 46 filas de ventas ficticias; descarga materiales y respuestas.
contentType: case
audiences: [creator, beginner]
task: data-analysis
level: beginner
estimatedMinutes: 40
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Se ejecutó el script de referencia y pasaron las comprobaciones independientes con céntimos enteros y SQL. Es una autocomprobación del autor; aún no se ha probado con lectores comunes ni revisado por una segunda persona.
  environment: Darwin 27.0.0 / arm64, Python 3.12.11; script de biblioteca estándar, independiente de un cliente Codex específico.
  evidence:
    - label: Ver registro de ejecución y revisión
      href: /downloads/sales-weekly-report/record.md
assets:
  - path: /downloads/sales-weekly-report/sales-weekly-report-1.0.0.zip
    purpose: Material completo del ejercicio, respuestas de referencia y scripts de comprobación
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /es/cases/
  label: Elegir una tarea práctica
next:
  link: /es/guide/verification/
  label: Aprender a verificar resultados
locale: es
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 2b4f164
---

En este ejercicio entregarás un informe semanal de ventas, un resumen por región, una clasificación de productos y un registro de limpieza por fila. La entrada son datos sintéticos preparados para este sitio; no necesitas datos reales de clientes.

Nivel: inicial. Los 30–45 minutos son una estimación editorial aún no cronometrada con lectores. Requisito: poder proporcionar archivos locales a Codex. Leer el resultado de referencia no requiere programación; ejecutar la validación exige Python 3.10 o posterior.

[Descargar el paquete completo v1.0.0 (ZIP)](/downloads/sales-weekly-report/sales-weekly-report-1.0.0.zip) · [Descargar solo el CSV de ventas](/downloads/sales-weekly-report/sales.csv)

## Primero, el resultado que entregarás

| Indicador | Valor de referencia | Punto de control |
|---|---:|---|
| Ventas netas del periodo actual | 4.644,75 yuanes | Incluir reembolsos |
| Importe neto del Este | 1.281,25 yuanes | 1.401,75 − 120,50 |
| Importe sin fecha | 199,99 yuanes | Aislar sin adivinar la semana |

El periodo actual es del 07/09/2026 al 13/09/2026 y el anterior del 31/08/2026 al 06/09/2026. La variación entre estas dos semanas naturales completas es del 87,04 %. Es solo el resultado de datos sintéticos, no una explicación de causas comerciales reales.

[Ver el informe de referencia](/downloads/sales-weekly-report/summary.md). Practica primero y compara después con la solución.

## Descargar materiales

El paquete completo contiene el encargo, diccionario de datos, tres prompts, CSV de 46 filas, informe de referencia, tres CSV de resumen y registro, implementación de referencia, script de comprobación independiente y registro de validación. Todo se publica bajo CC0 1.0 y puede modificarse y redistribuirse.

Tras descomprimir, abre la carpeta `sales-weekly-report`. Descargar solo el CSV no hace aparecer automáticamente los demás archivos citados.

## 1. Confirmar archivos y reglas

Encarga esta tarea a Codex. La forma de proporcionar archivos depende del cliente; asegúrate primero de que realmente los ha leído.

```text
Lee brief.md, starter/data-dictionary.md y starter/sales.csv.
Confirma que existen y enumera campos, intervalo de fechas, número de
registros y números de fila que requieren tratamiento especial.
No alteres la tabla original ni consultes solution. Distingue duplicados
exactos, fechas ausentes, importes negativos y ceros reales.
Explica las dos semanas según el diccionario; enumera los conflictos.
Si no los hay, continúa.
```

Las 46 filas originales incluyen dos reembolsos, un duplicado exacto y una fila sin fecha. De un duplicado exacto conserva solo la primera; si dos filas con la misma ID difieren, detén la comprobación. No inventes fechas; un importe cero es válido. Tras el tratamiento deben incluirse 44 filas.

## 2. Crear el informe y el registro de cálculos

Sigue con `prompts/02-report.md` del paquete y escribe en `my-output/`:

| Archivo | Contenido requerido |
|---|---|
| `summary.md` | Total, variación, regiones, tres productos principales actuales, calidad de datos y método de cálculo |
| `region-summary.csv` | Netos de cada región en las dos semanas, diferencia y variación; total conciliable con las regiones |
| `top-products.csv` | Productos ordenados por neto actual descendente, con reembolsos |
| `row-ledger.csv` | Número de fila original, decisión de inclusión, semana e importe de cada registro |

Mantén sin cambios las entradas, `solution` y `validation`. Sigue los nombres de campos y el orden de tablas del diccionario para que la comprobación independiente pueda cotejar cada elemento. El Suroeste tuvo base cero la semana anterior; su variación debe ser N/A, nunca 0 % ni crecimiento infinito.

## 3. Comprobar independientemente, no solo preguntar «¿está bien?»

En la carpeta del ejercicio descomprimida, ejecuta:

```sh
python3 validation/check.py --output my-output
```

Cuando están los cuatro productos y respetan las reglas, aparece `result: PASS`. Un hash de entrada cambiado, un reembolso omitido, una agrupación errónea o un registro incoherente producen errores. Si falla, corrige tus resultados; no cambies el validador para forzar su aprobación.

Si no puedes ejecutar Python, comprueba al menos a mano:

1. Las siete cantidades positivas del Este suman 1.401,75 yuanes. Con el reembolso de −120,50 en la fila 44 dan 1.281,25.
2. Las tres regiones actuales suman 1.281,25 + 2.101,75 + 1.261,75 = 4.644,75.
3. La fila 47 O046 no tiene fecha; sus 199,99 yuanes no entran en ninguna semana. La fila 46 O001 es duplicada.

La validación automática no puede revisar todas las conclusiones redactadas. Lee el informe y elimina causas de crecimiento o juicios empresariales sin fuente.

## 4. Practicar la corrección: reembolso omitido

**Contraejemplo diseñado**: si se filtran todos los negativos, el total actual sería 4.765,25 yuanes, 120,50 de más. La validación de referencia modificó realmente un resultado temporal y confirmó que el validador rechaza esa cifra. No es un diálogo inventado con el modelo.

```text
Examina los registros válidos cuyo net_sales sea menor que cero y explica
si deben incluirse. Conserva el signo negativo de los reembolsos; recalcula
los resúmenes por región y producto de ambos periodos e indica la diferencia
antes y después. No cambies el CSV original ni el validador para ocultar
el fallo.
```

## 5. Recuperarse de problemas

| Síntoma | Comprobar primero | Siguiente paso |
|---|---|---|
| No se encuentra el archivo | ¿Está `starter/sales.csv` en el directorio actual? | Abre la carpeta descomprimida y referencia el archivo; no dejes que el agente reconstruya datos ausentes |
| Chino ilegible o una sola columna | ¿Codificación UTF-8 y comas como separador? | Reimporta el CSV original sin alterar importes manualmente |
| Diferencia de 120,50 | ¿Se omitió el reembolso R043? | Conserva negativos según el diccionario y recalcula ambos periodos |
| División entre cero en la variación | ¿Fue realmente cero la base previa del Suroeste? | Escribe N/A y explica la base cero |
| El validador informa que falta un archivo | ¿Están los cuatro productos? | Complétalos según el diccionario y vuelve a ejecutar; un archivo ausente no implica un importe erróneo |

## Condiciones de finalización y siguientes pasos

- El hash de la tabla original no cambia y están los cuatro productos.
- Se verifican independientemente el total, el Este y el importe sin fecha.
- El informe conserva anomalías, base cero y reglas de cálculo sin inventar causas.
- Se distingue lo realmente comprobado de lo que necesita revisión humana.

Conserva tus prompts y el registro de corrección. Antes de sustituir los datos, vuelve a confirmar campos y reglas. El validador fijo de este ejercicio no sirve para cualquier dato empresarial.

Continúa con [verificar resultados](/es/guide/verification/) o vuelve a los [casos prácticos](/es/cases/).
