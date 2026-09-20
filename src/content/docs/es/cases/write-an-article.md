---
caseCategory: creation
directoryOrder: 20
title: Escribir un artículo con fuentes a partir de tres documentos
description: Practica la correspondencia de hechos, el tratamiento de conflictos y la revisión con una ficha de producto, una entrevista sintética y notas de versión; descarga el paquete completo.
contentType: case
audiences: [creator, beginner]
task: source-backed-writing
level: beginner
estimatedMinutes: 50
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: Se cotejaron punto por punto tres fuentes sintéticas creadas para el ejercicio y siete hechos clave; la validación estructural pasó. Es una revisión del autor, sin experimento con un modelo real ni segunda revisión humana.
  evidence:
    - label: Ficha de producto sintética
      href: /downloads/source-backed-article/sources/01-product.md
    - label: Entrevista sintética
      href: /downloads/source-backed-article/sources/02-interview.md
    - label: Resumen de versiones con un conflicto sin resolver
      href: /downloads/source-backed-article/sources/03-changelog.md
    - label: Registro de comprobación del autor y límites de validación
      href: /downloads/source-backed-article/validation/record.md
assets:
  - path: /downloads/source-backed-article/source-backed-article-1.0.0.zip
    purpose: Tres fuentes, prompts, borradores inicial y final, tabla de hechos, diff de revisión y validador
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /es/cases/
  label: Elegir un ejercicio práctico
next:
  link: /es/cases/create-a-slide-deck/
  label: Convertir el artículo en una presentación
locale: es
source_locale: zh-CN
source_revision: e2bb5ea
translation_status: draft
translated_at: '2026-09-20'
---

El objetivo es un artículo breve en chino cuyos hechos clave puedan rastrearse hasta las fuentes. Tratarás descripciones contradictorias, distinguirás hechos respaldados, inferencias del autor y asuntos pendientes, y revisarás un borrador inicial diseñado con errores evidentes.

Nivel inicial. Tiempo estimado: 45–60 minutos, cálculo editorial aún no medido con lectores. Necesitas poder proporcionar archivos locales a Codex y leer Markdown. La validación estructural opcional requiere Python 3.10+.

[Descargar paquete completo v1.0.0 (ZIP)](/downloads/source-backed-article/source-backed-article-1.0.0.zip)

Todos los materiales son originales de este sitio. El producto «Shiye» y la persona entrevistada «Xiaolin» son ficticios; no representan un producto ni testimonios de usuarios reales.

## Resultado final

El artículo final de referencia sigue la idea «revisar primero un resumen y después decidir si ampliar el uso». Incluye límites de entrada, prueba limitada, comprobación del resumen y asuntos pendientes.

| Archivo | Uso |
|---|---|
| `outline.md` | Explicar la pregunta del lector y el orden del artículo |
| `article.md` | Artículo en chino con identificadores de hechos |
| `claim-map.csv` | Siete hechos o consejos clave, ID de fuente, ubicación y tipo de prueba |
| `unresolved.md` | Conservar preguntas que las fuentes no responden |
| `revision.diff` | Diferencia textual real entre el borrador diseñado y la versión final |

[Ver artículo de referencia](/downloads/source-backed-article/solution/article.md) · [Ver tabla de hechos](/downloads/source-backed-article/solution/claim-map.csv)

## Descarga y preparación

Descomprime y abre `source-backed-article`. Lee `brief.md` y `sources/index.csv`; la licencia CC0 1.0 permite modificar y redistribuir. Puedes evitar solution hasta completar tu primera versión.

Las tres fuentes son P (ficha del producto), I (entrevista sintética) y C (notas de versión). Tienen identificadores de sección estables, como P1, I2 y C3. Cada cita debe señalar la sección concreta, no solo decir «según las fuentes».

## 1. Organizar primero hechos y conflictos

```text
Lee brief.md, sources/index.csv y las tres fuentes enumeradas.
Enumera primero los hechos directamente respaldados, la información ausente y las afirmaciones contradictorias. Añade a cada una ID de fuente y sección.
No busques en Internet información del producto ficticio ni conviertas la entrevista sintética en testimonio real.
No resuelvas automáticamente los conflictos por la fecha del documento. Entrega la tabla de hechos antes de escribir el artículo.
```

Hay un conflicto deliberado: P3 dice que la carga de diagnósticos está desactivada por defecto; C2 dice que está activada por defecto en instalaciones nuevas; C3 declara que no existe una aclaración correctiva del mantenedor. La respuesta correcta es dejarlo sin confirmar, no elegir la fuente más reciente como definitiva.

## 2. Escribir seguido dentro del alcance definido

`prompts/02-outline-and-write.md` ya propone público y cuatro partes: qué puede hacer, cómo probarlo, qué comprobar y qué sigue sin resolverse. Tras confirmar esa estructura, puedes redactar de forma continua sin detenerte en cada apartado.

Guarda los resultados en `my-output/` y conserva las fuentes de entrada. Marca hechos clave como `[F1]`; en el mapa registra:

```text
claim_id,article_section,claim,source_id,locator,evidence_type,confidence_note
```

Solo hay tres tipos de prueba: «respaldado por el original», «inferencia del autor» y «sin confirmar». Proponer una prueba con unas pocas copias de archivos es una valoración del autor, no una promesa del producto ni un paso obligatorio.

## 3. Corregir hechos antes que tono

`solution/draft.md` es un contraejemplo diseñado por el autor, no una respuesta real de un modelo. Incluye deliberadamente capacidades de PDF e imágenes no respaldadas, funcionamiento totalmente sin conexión, garantía de resultados y testimonio de usuario real.

| Problema del borrador | Corrección | Motivo |
|---|---|---|
| «Compatible con PDF y todo tipo de imágenes» | Limitar a Markdown y texto sin formato | P1 define las entradas |
| «Totalmente sin conexión; diagnóstico desactivado por defecto» | Mostrar el conflicto y dejar la pregunta abierta | P3/C2 se contradicen y faltan detalles de los campos cargados |
| «Xiaolin demuestra precisión y ahorro de tiempo» | Mantener la identidad sintética, sin cifras de efecto | I3 no tiene medición de tiempo ni muestra fija de evaluación |
| «Herramienta total que mejora fácilmente la productividad» | Describir entradas, pasos y comprobaciones concretos | Eliminar exageración sin inventar hechos |

Consulta el [diff de revisión](/downloads/source-backed-article/solution/revision.diff) y las [notas de revisión](/downloads/source-backed-article/solution/revision-notes.md). Mejorar el tono y dejar capacidades falsas no completa la revisión.

## 4. Comprobar la estructura y leer cada fuente

Con Python 3.10+, en el directorio del ejercicio ejecuta:

```sh
python3 validation/check.py --output my-output
```

El script comprueba hashes de las tres fuentes, identificadores del texto, secciones citadas y archivo de asuntos pendientes. El artículo de referencia pasa; una copia temporal con un F99 inexistente es rechazada.

**Pasar la validación estructural no demuestra exactitud factual.** Abre la fuente de cada afirmación y comprueba que sostiene la frase, incluidas condiciones como «solo» o «sin confirmar». Presentar un fragmento sintético como testimonio real sigue siendo erróneo aunque exista un identificador de cita.

Si no puedes ejecutar el script, abre manualmente los tres originales siguiendo la tabla y comprueba identificadores y formulación. No afirmes haber pasado controles que no realizaste.

## Cómo recuperarte de un fallo

- Falta un archivo: comprueba el directorio descomprimido y el índice; no inventes contenido.
- No existe una cita: corrige la correspondencia o elimina el hecho sin fuente, sin borrar incertidumbre justificada.
- Las fuentes se contradicen: presenta ambas versiones e indica qué prueba falta y quién debe aportarla; no decidas por fecha, mayoría o tono.
- El artículo parece publicidad: elimina primero promesas sin fundamento y sustitúyelas por acciones y límites concretos.

## Criterios de finalización

Los hechos clave se pueden localizar, las recomendaciones del autor están separadas, los conflictos y lagunas siguen visibles y la identidad sintética se conserva. La entrega permanece local; no se publica automáticamente.

Después utiliza el artículo para [crear ocho diapositivas editables](/es/cases/create-a-slide-deck/). El paquete de presentación incluye entradas independientes, PPTX, PDF, ocho vistas previas y un registro de validación; para seguir la ruta completa, prefiere el artículo que completaste y comprobaste.
