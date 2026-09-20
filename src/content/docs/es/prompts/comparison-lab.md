---
title: "Tres comparaciones de prompts: 12 ejecuciones y revisión criterio por criterio"
description: Practica comparaciones A/B con un informe semanal, un artículo y la corrección de un bug. Descarga entradas, prompts y plantillas fijos sin dar por hecho que un prompt más largo es mejor.
contentType: prompt
audiences: [creator, developer]
level: intermediate
outputs: [markdown, json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  environment: Darwin arm64; Codex 26.911.61220 / build 9647; 12 contextos de Agent independientes; se desconocen el modelo y la configuración de razonamiento reales.
  summary: Cada una de las tres parejas A/B se repitió dos veces. Se conservaron entregables, tiempos y errores de herramientas. El Agent principal revisó los resultados sin cegamiento; faltan partes de algunos registros. Estas ejecuciones no demuestran efectos generales ni son pruebas con lectores reales.
  evidence:
    - label: Puntuaciones por criterio y limitaciones de las 12 ejecuciones
      href: /downloads/prompt-comparison-results/review.md
    - label: Ejecuciones reales y tiempos
      href: /downloads/prompt-comparison-results/runs.json
    - label: Comprobaciones posteriores de los entregables
      href: /downloads/prompt-comparison-results/reviewer-checks.json
assets:
  - path: /downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip
    purpose: Doce tareas, entradas, copias públicas de los entregables originales, registros, tiempos, puntuaciones por criterio y scripts de revisión
    license: CC0-1.0
    version: 1.0.0
  - path: /downloads/prompt-comparisons/prompt-comparisons-1.0.0.zip
    purpose: Nueve archivos de entrada fijos, seis prompts, criterios de puntuación comunes, pautas de revisión humana y una plantilla de ejecución vacía
    license: CC0-1.0
    version: 1.0.0
locale: es
source_locale: zh-CN
source_revision: e6a23bb
translation_status: draft
translated_at: 2026-09-20
---

Comparar sirve para descubrir qué requisitos influyen en la entrega, no para demostrar que un prompt más largo es mejor. Aquí se ofrecen tres conjuntos de entradas fijas y los registros de 12 ejecuciones reales realizadas el 18 de septiembre de 2026. Esta muestra muestra sobre todo diferencias en las pruebas aportadas con cada entrega; no permite establecer efectos generales.

[Descargar todos los materiales](/downloads/prompt-comparisons/prompt-comparisons-1.0.0.zip) · [Protocolo de ejecución](/downloads/prompt-comparisons/README.md) · [Registro vacío](/downloads/prompt-comparisons/blank-run.json)

## Tres tareas, un mismo método de comparación

En cada pareja, A y B usan las mismas entradas y herramientas. B conserva toda la tarea de A y añade un conjunto de requisitos de aceptación explícitos. Por tanto, no se puede atribuir una diferencia a una frase concreta de ese conjunto.

| Tarea | Entrada fija | Qué añade B | Qué observar |
|---|---|---|---|
| Informe semanal de ventas | CSV sintético de 46 filas y diccionario de datos | Decisiones por fila, explicaciones de anomalías y registro de una comprobación independiente | Además de cifras correctas, ¿se pueden rastrear reembolsos, duplicados y bases cero? |
| Artículo con fuentes | Tres fuentes sintéticas con conflictos deliberados | Tabla de hechos, lista de cuestiones abiertas y ninguna elección infundada entre fuentes contradictorias | ¿Se conserva lo desconocido? ¿Respalda una fuente cada afirmación concreta? |
| Corrección de un bug | Implementación de un carrito de compra y pruebas originales | Pruebas fallidas antes de la corrección y superadas después, registros y diff | ¿Se verificó la corrección sin modificar las pruebas para eludir el error? |

[Informe A](/downloads/prompt-comparisons/cases/sales/A.md) / [B](/downloads/prompt-comparisons/cases/sales/B.md) · [Artículo A](/downloads/prompt-comparisons/cases/article/A.md) / [B](/downloads/prompt-comparisons/cases/article/B.md) · [Bug A](/downloads/prompt-comparisons/cases/bug/A.md) / [B](/downloads/prompt-comparisons/cases/bug/B.md)

A también puede comprobar fuentes y ejecutar pruebas por iniciativa propia; B también puede fallar. No confundas una expectativa con un resultado.

## Cinco criterios de puntuación comunes

A y B usan el mismo [rubric.json](/downloads/prompt-comparisons/rubric.json): corrección de la tarea, trazabilidad de las pruebas, control del alcance, tratamiento de la incertidumbre y reproducibilidad. En cada criterio, 0 significa no cumplido, 1 parcialmente cumplido y 2 cumplido con pruebas verificables. Usa null si no se ejecutó o no puede juzgarse.

Cada puntuación debe remitir a pruebas concretas. Un informe bien escrito no merece una puntuación alta si sus cifras son erróneas; los enlaces de un artículo no bastan para validar sus hechos; afirmar «las pruebas pasan» no verifica el código. No dejes que una media oculte un error factual decisivo.

## Las 12 ejecuciones reales

[Descargar resultados y registros](/downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip) · [Puntuaciones por criterio y tiempos](/downloads/prompt-comparison-results/review.md) · [Condiciones de muestreo](/downloads/prompt-comparison-results/README.md)

Cada grupo siguió el orden A1 → B1 → B2 → A2, con tres tareas distintas en paralelo por ronda. Cada ejecución usó un contexto de Agent y un directorio de trabajo nuevos, sin proporcionar respuestas de puntuación. El modelo y la configuración de razonamiento no se fijaron explícitamente, de modo que se desconocen sus valores reales. La separación de directorios dependía de instrucciones, no de aislamiento del sistema operativo. El Agent principal revisó los resultados sin cegamiento; no hubo puntuaciones humanas independientes.

| Tarea | Dos observaciones de A | Dos observaciones de B | Qué muestran estas ejecuciones |
|---|---|---|---|
| Informe semanal de ventas | Cifras, libro de registro y tratamiento de anomalías correctos; también hubo comprobaciones espontáneas | Cifras correctas y explicación de la comprobación; una ejecución no guardó el comando de cálculo completo | Los requisitos añadidos no garantizaron registros completos |
| Artículo con fuentes | Hechos, fuentes y conflictos tratados correctamente; se entregó el artículo | Se mantuvieron los mismos límites factuales y se añadieron una tabla de hechos y cuestiones abiertas | Hubo más material disponible para revisión |
| Corrección de un bug | Pruebas originales intactas y tres pruebas superadas después; no se guardó el registro de fallos previo | Se conservaron fallos anteriores, éxitos posteriores, códigos de salida y diffs | La cadena de verificación fue más completa, pero las cuatro ejecuciones omitieron la versión de Node utilizada |

Las tablas completas presentan puntuaciones de 0 a 2 para los cinco criterios, sin clasificación general. La ausencia de una tabla de hechos en el artículo A afecta al criterio acordado de reproducibilidad; no significa que el artículo sea incorrecto. Bug A y B obtuvieron ambos una puntuación parcial en reproducibilidad, pero por motivos distintos. La cifra por sí sola no cuenta toda la historia.

Los hashes de entradas y textos de las tareas fueron iguales entre ejecuciones. Una revisión posterior recalculó el CSV de ventas y comprobó las cuatro correcciones del bug con las pruebas originales sin modificar. Las [comprobaciones de revisión](/downloads/prompt-comparison-results/reviewer-checks.json) se guardan aparte de los registros de los comandos ejecutados por los Agents del experimento.

## Conserva también fallos y limitaciones

- El prompt común de ventas mencionaba `data-dictionary.md`, pero el archivo estaba en `input/data-dictionary.md`. Las cuatro ejecuciones encontraron primero este error de ruta y después se recuperaron. Es un defecto del material, no un efecto de los requisitos de A o B. Para mantener las entradas fijas, no se cambió el prompt a mitad de la serie.
- En `run-07` solo se resumió el comando de Python; no se conservó el código completo. El paquete de resultados mantiene esa laguna y no afirma que el comando se registrara íntegro en su momento.
- Los Agents prepararon sus propios registros; no son exportaciones completas de auditoría de la plataforma. En las copias públicas solo se sustituyeron las rutas locales absolutas. Se conservaron por separado los hashes de los archivos originales y públicos.
- El tiempo incluye esperas de herramientas y escritura de registros, y las tareas se ejecutaron en paralelo. No hay referencia humana ni medición de costes. Se desconocen el modelo y los ajustes de razonamiento, por lo que los datos no permiten ordenar modelos por velocidad o tiempo ahorrado.

Solo hubo dos ejecuciones por variante y tarea. La puntuación no fue ciega, y algunos criterios coinciden con los recordatorios de B. El ejercicio muestra diferencias en entregables y pruebas de verificación. No publica una tasa general de éxito ni afirma que «B gana» o que «más largo es mejor».

## Ejecuta y registra tu propia comparación

1. Crea directorios de trabajo separados para A y B. Copia entradas idénticas y comprueba sus hashes. No entregues al modelo las respuestas de la rúbrica.
2. Empieza una tarea nueva cada vez. Fija modelo, ajuste de razonamiento, cliente, herramientas y límite de tiempo; registra con honestidad cualquier ajuste desconocido. No compartas el resultado de una ejecución con la siguiente.
3. Acuerda previamente el número de repeticiones y las condiciones de parada. Alterna el orden A→B y B→A. Conserva fallos, interrupciones y reintentos, no solo la mejor salida.
4. Registra rutas reales de salida, modelo, entorno, tiempo, errores de herramientas y hash de entrada. Anota por separado el tiempo de corrección humana. No pongas cero en una ejecución no realizada.
5. Puntúa cada criterio con la misma pauta y, si es posible, oculta al revisor las etiquetas de variante. Compara criterios y tipos de fallo antes de decidir si conviene añadir los requisitos.

Unas pocas observaciones solo describen estas entradas y este entorno. No establecen una tasa general de éxito ni demuestran que una frase concreta causara una mejora.

## Qué se ha verificado y qué falta

Puedes ejecutar la comprobación de materiales:

```sh
python3 scripts/check_materials.py
```

Se comprobaron los nueve archivos de entrada fijos, las tres parejas de prompts A/B con requisitos añadidos y que los registros vacíos no incluyeran puntuaciones inventadas. Este script no llama a ningún modelo ni prueba la eficacia de los prompts.

Se registraron las 12 ejecuciones, las puntuaciones por criterio y los tiempos. Siguen faltando las etiquetas reales del modelo, los registros completos de la plataforma y una revisión humana independiente. El paquete de resultados también incluye `python3 scripts/check_results.py` para volver a comprobar los entregables guardados sin ejecutar de nuevo el modelo. Para los ejercicios originales completos, consulta el [informe semanal](/es/cases/analyze-a-spreadsheet/), el [artículo](/es/cases/write-an-article/) y la [ruta para desarrolladores](/es/guide/learning-paths/developer/).
