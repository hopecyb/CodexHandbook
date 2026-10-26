---
title: 'Ruta para creadores: fuentes, artículo, presentación y reutilización'
description: Usa las mismas fuentes para crear una tabla de hechos, un artículo, una presentación editable de ocho diapositivas e instrucciones reutilizables, con materiales y criterios de aceptación en cada paso.
contentType: path
audiences: [creator, beginner]
level: beginner
outputs: [markdown, csv, pptx, png]
editorialStatus: review
verification:
  kind: editorial
  checkedAt: '2026-09-18'
  summary: Se organizaron cuatro hitos a partir de los materiales reales del artículo y la presentación, y se comprobó la relación entre entradas y salidas. Las validaciones individuales constan en los casos; aún no se ha medido el tiempo ni la finalización independiente de lectores para toda la ruta.
  evidence:
    - label: Materiales del artículo y registro de comprobación del autor
      href: /downloads/source-backed-article/validation/record.md
    - label: Registro del entorno y renderizado de la presentación
      href: /downloads/article-to-slides/validation/record.md
sidebar:
  order: 10
prev:
  link: /es/guide/learning-paths/
  label: Elegir una ruta de aprendizaje
next:
  link: /es/cases/write-an-article/#1-organizar-primero-hechos-y-conflictos
  label: Empezar a organizar las tres fuentes
locale: es
source_locale: zh-CN
source_revision: 'd1b46b1'
translation_status: reviewed
translated_at: '2026-09-20'
reviewed_at: 2026-10-25
---

Usa un conjunto de fuentes para escribir un artículo, convertirlo en una presentación editable y guardar instrucciones que puedas reutilizar. Cada paso produce archivos que te permiten comprobar si has terminado.

Debes poder abrir una carpeta local en Codex. Para crear la presentación necesitas además una herramienta capaz de generar PPTX y un programa que pueda abrirlo; consulta el entorno concreto en el caso. No se exige que todos los clientes tengan las mismas herramientas. Si aún no dominas las operaciones con archivos, completa primero [Trabajar con archivos](/es/guide/learning-paths/beginner/02-work-with-files/).

## Ruta y materiales

| Paso | Entrada previa | Resultado | Paso siguiente |
|---|---|---|---|
| 1. Organizar pruebas | Tres fuentes sintéticas y un índice | Tabla de hechos, lista de conflictos y lagunas | Escribir el artículo |
| 2. Escribir y revisar | Tabla de hechos, público y esquema | Artículo, mapa de afirmaciones, notas de revisión | Crear la presentación |
| 3. Crear la presentación | Artículo, mapa de afirmaciones y objetivo de la exposición | PPTX de ocho diapositivas, ocho vistas previas, notas y registro de comprobación | Guardar instrucciones reutilizables |
| 4. Guardar instrucciones reutilizables | Resultados y experiencia de los tres pasos anteriores | Plantilla de tarea, lista de aceptación y registro de una adaptación | Probar con fuentes nuevas |

[Descargar el paquete del artículo](/downloads/source-backed-article/source-backed-article-1.0.0.zip) · [Descargar el paquete de la presentación](/downloads/article-to-slides/article-to-slides-1.0.0.zip)

Ambos paquetes se pueden usar por separado. Si sigues la ruta completa, en el paso 3 utiliza preferentemente el artículo que escribiste. El directorio `input/` del paquete de presentación contiene entradas de referencia para quienes aún no han terminado el artículo o necesitan compararlo. Todos los productos, personas y entrevistas son material didáctico sintético.

## 1. Organizar pruebas y conservar los conflictos

Antes de empezar, descomprime el paquete del artículo y lee `brief.md`, `sources/index.csv` y las tres fuentes enumeradas. Sigue la [primera parte del caso del artículo](/es/cases/write-an-article/#1-organizar-primero-hechos-y-conflictos) para organizarlas; no te apresures a redactar.

Guarda los resultados en `my-output/` del paquete y conserva las fuentes originales. En la tabla de hechos registra el ID de la fuente, la sección, la afirmación respaldada y el tipo de prueba. Escribe también `unresolved.md` con las preguntas que las fuentes no resuelven.

Terminas cuando puedes localizar el conflicto entre P3 y C2 sobre la configuración de diagnóstico predeterminada sin elegir por tu cuenta una respuesta definitiva. La entrevista sintética debe seguir identificada como tal; no inventes cifras de precisión o ahorro de tiempo ausentes de las fuentes.

Si una fuente no se abre o su ID no coincide, restaura primero los archivos y el índice; no deduzcas su contenido por el nombre. Después pasa al paso siguiente.

## 2. Escribir el artículo y revisarlo con las fuentes

Parte de la tabla de hechos y la lista de asuntos pendientes. Continúa con el [caso del artículo](/es/cases/write-an-article/): define el público, prepara un esquema, escribe de forma seguida dentro del alcance acordado y después revisa los hechos y la expresión.

Entrega `article.md`, `claim-map.csv`, `unresolved.md` y una nota de revisión. Identifica al menos una corrección factual y una de redacción. El paquete de referencia contiene un borrador inicial diseñado y un diff textual real; no presentes el contraejemplo diseñado como si fuera un fallo real del modelo.

Terminas cuando los hechos clave se pueden localizar, las recomendaciones del autor se distinguen de los hechos respaldados y el conflicto de diagnóstico sigue visible. Si puedes ejecutar Python, usa la validación estructural del caso; aunque pase, debes juzgar frase por frase si las fuentes sostienen cada conclusión.

Conserva estos archivos para el paso siguiente. Tu artículo puede diferir del borrador de referencia, pero debe mantener las limitaciones clave.

## 3. Convertir el artículo en ocho diapositivas

Parte del artículo terminado y la tabla de hechos. Sigue el [caso de la presentación](/es/cases/create-a-slide-deck/) para definir público, objetivo de unos cinco minutos y una secuencia de ocho diapositivas. Comprueba primero la composición con la portada y la diapositiva de límites, y luego completa las demás.

Copia el artículo y la tabla de hechos en el directorio de entrada de la tarea de presentación e indica que son tus versiones. No cites tu propio artículo suponiendo que siguen siendo válidas todas las conclusiones del borrador de referencia.

Entrega un PPTX de ocho diapositivas, ocho vistas previas, notas por diapositiva y un registro de validación. Para terminar, debe abrirse en el programa de presentaciones que hayas registrado, el texto clave debe ser editable y debes revisar el texto chino y los márgenes y desbordamientos en cada diapositiva. Los conflictos entre fuentes deben seguir claros tras la síntesis.

Si no tienes una herramienta PPTX, guarda el esquema y registra la capacidad que falta. El paso queda sin terminar hasta que continúes en un entorno con esa herramienta. Después pasa a la reutilización.

## 4. Guardar instrucciones reutilizables

Parte del artículo y la presentación terminados y revisados. Crea `workflow.md` con la plantilla siguiente para guardar el método que realmente utilizaste; no conserves solo un prompt final que diga «continúa».

```md
# De las fuentes a la presentación

## Esta tarea
- Público y propósito:
- Directorio de entrada, índice de fuentes y archivos originales inmutables:
- Directorio de salida y formatos requeridos:

## Secuencia
1. Enumerar hechos, inferencias, conflictos y lagunas antes de redactar.
2. Definir público y estructura, escribir de forma seguida y revisar con las fuentes.
3. Resumir el artículo en ocho diapositivas; revisar primero portada y límites.
4. Comprobar texto nativo, fuentes chinas, todas las vistas previas y notas.

## Aceptación
- Los hechos clave se remontan a la fuente; los asuntos pendientes siguen visibles.
- Separar recomendaciones del autor y hechos del producto; no presentar material sintético como testimonio real.
- El PPTX se abre y se puede editar; registrar programa y fuentes al revisar cada diapositiva.
- Indicar qué comprobaciones se hicieron y cuáles no; mantener la entrega en local.

## Experiencia de esta vez
- Problemas encontrados, cambios y cómo se confirmó la recuperación:
- Pasos que se pueden conservar la próxima vez:
- Hechos y entorno que habrá que reconfirmar:
```

Haz una adaptación pequeña: cambia el público de «autores individuales que lo prueban por primera vez» a «compañeros que preparan una revisión de materiales». Conserva las mismas fuentes y regenera solo el esquema. Guarda `reuse-check.md` con los cambios de título, énfasis y orden, y los límites factuales que permanecen. Se trata de comprobar si la plantilla se adapta, no de afirmar que se hizo una nueva investigación factual.

Terminas cuando otra persona puede encontrar entradas y salidas en `workflow.md` y saber cuándo está completo el trabajo. El registro de adaptación debe incluir diferencias concretas y no seguir escribiendo para el público original. Si la secuencia ya funciona de forma estable, lee [Convertir un flujo en Skill](/es/cases/workflows/turn-a-workflow-into-a-skill/). El [ejemplo de Skill de escritura](/es/skills/examples/writing-skill/) incluye un paquete completo con muestras de estilo, tabla de hechos y tratamiento de conflictos; la comprobación estructural no sustituye la revisión factual humana.

## Opcional: empezar con una tarea numérica

Si prefieres el análisis de oficina, puedes empezar por el [informe semanal de ventas](/es/cases/analyze-a-spreadsheet/). Contiene CSV, devoluciones y filas duplicadas, un resumen de referencia y un script de verificación independiente. Después puedes añadir «calcular las cifras clave de forma independiente y explicar los criterios de anomalía» a tu lista de aceptación; no hace falta incorporarlo a la fuerza al artículo sobre el producto ficticio.

Al terminar toda la ruta, deberías conservar fuentes, artículo y tabla de hechos, presentación editable, registros de validación e instrucciones reutilizables. Leer los enlaces o descargar las respuestas de referencia no basta para completar el ejercicio.
