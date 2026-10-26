---
caseCategory: creation
directoryOrder: 30
title: Crear ocho diapositivas editables a partir de un artículo
description: Descarga el artículo, esquema de ocho diapositivas, PPTX con texto nativo y vistas previas para practicar síntesis narrativa, conservación de fuentes y revisión de tipografía china.
contentType: case
audiences: [creator, beginner]
task: editable-presentation
level: beginner
estimatedMinutes: 75
outputs: [pptx, pdf, png, markdown]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: El PPTX de referencia se importó en un programa, se renderizaron ocho diapositivas y se modificó texto nativo; solo en el entorno registrado y como revisión del autor.
  environment: Artifact Tool JS / Node.js 24.19.0; LibreOfficeDev 26.8.0.0.alpha0 / Darwin arm64; Arial Unicode MS, con directorio de fuentes del sistema configurado expresamente.
  evidence:
    - label: Proceso de validación, corrección de fuentes y alcance de comprobaciones
      href: /downloads/article-to-slides/validation/record.md
assets:
  - path: /downloads/article-to-slides/article-to-slides-1.0.0.zip
    purpose: Entradas, prompts, PPTX, PDF, ocho vistas previas y registro de validación para practicar independientemente
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /es/cases/write-an-article/
  label: Terminar primero el artículo con fuentes
next:
  link: /es/guide/learning-paths/creator/#4-guardar-instrucciones-reutilizables
  label: Guardar instrucciones reutilizables
locale: es
source_locale: zh-CN
source_revision: '7189374'
translation_status: reviewed
translated_at: '2026-09-20'
reviewed_at: 2026-10-25
---

Resume un artículo en ocho diapositivas y entrega un PPTX cuyo texto pueda modificarse, vistas previas y notas de exposición. Conserva límites y conflictos de las fuentes; no añadas cifras o gráficos inventados para llenar páginas.

Nivel inicial. Tiempo estimado de 60–90 minutos, cálculo editorial no medido con lectores. Se requiere leer archivos locales y disponer de herramienta para generar PPTX o un programa de presentaciones. El paquete contiene un artículo de entrada: puedes practicar por separado o continuar desde el [caso del artículo](/es/cases/write-an-article/).

[Descargar paquete completo v1.0.0 (ZIP)](/downloads/article-to-slides/article-to-slides-1.0.0.zip) · [Ver PPTX editable](/downloads/article-to-slides/solution/source-backed-writing.pptx) · [Ver PDF](/downloads/article-to-slides/solution/source-backed-writing.pdf)

## Resultado final

![Primera diapositiva de referencia: comprobar un resumen antes de ampliar el uso; producto ficticio y material sintético identificados](/downloads/article-to-slides/previews/slide-01.png)

La referencia utiliza cuadros de texto nativos, por lo que el texto clave puede modificarse. Fuentes, producto «Shiye» y persona «Xiaolin» son material didáctico ficticio con licencia CC0 1.0; los archivos de fuentes tipográficas no se distribuyen.

| Diapositiva | Una sola idea | Vista previa real |
|---|---|---|
| 1 | Revisar antes de ampliar el uso | [Portada](/downloads/article-to-slides/previews/slide-01.png) |
| 2 | Formatos y pruebas tienen límites | [Pregunta del público](/downloads/article-to-slides/previews/slide-02.png) |
| 3 | Las tres fuentes cumplen papeles distintos | [Pruebas](/downloads/article-to-slides/previews/slide-03.png) |
| 4 | Prueba pequeña en cuatro pasos | [Método](/downloads/article-to-slides/previews/slide-04.png) |
| 5 | Eliminar capacidades anunciadas sin base | [Revisión](/downloads/article-to-slides/previews/slide-05.png) |
| 6 | El diagnóstico mantiene un conflicto sin resolver | [Límites](/downloads/article-to-slides/previews/slide-06.png) |
| 7 | Registrar la revisión y completar incógnitas | [Siguiente paso](/downloads/article-to-slides/previews/slide-07.png) |
| 8 | Fuentes y uso sintético verificables | [Fuentes](/downloads/article-to-slides/previews/slide-08.png) |

## 1. Leer las entradas y definir el hilo conductor

Descomprime `article-to-slides/` y lee `brief.md`, `input/article.md`, `input/claim-map.csv` e `input/unresolved.md`. No copies todavía la referencia.

```text
Lee brief.md y el artículo, la tabla de hechos y los asuntos pendientes de input/.
Diseña ocho diapositivas para una persona que prueba por primera vez una herramienta para organizar notas, con una presentación de unos cinco minutos.
Escribe en my-output/outline.md una conclusión, puntos clave e IDs de fuente por página.
Conserva el carácter ficticio, los límites de formatos compatibles y el conflicto de diagnóstico.
No inventes cifras de precisión, precio o tiempo ahorrado; separa consejos del autor y hechos del producto.
```

El esquema está completo cuando las ocho funciones aparecen, cada página tiene un tema y cada hecho apunta a una sección de fuente. Los cinco minutos son un objetivo, no una prueba de que se ensayó. El prompt completo está en `prompts/01-outline.md`.

## 2. Comprobar el diseño con dos muestras

Crea primero la portada y la sexta diapositiva de límites: una comprueba el título grande y otra el texto más denso. El estilo de referencia usa azul oscuro, blanco cálido y texto nativo; no exige adornos.

```text
Con el esquema de ocho páginas confirmado, crea primero muestras de las páginas 1 y 6.
Usa 16:9 y cuadros de texto nativos para el cuerpo; elige una fuente china disponible en el entorno.
En la página 6 conserva P3 «desactivado por defecto» y C2 «activado por defecto en instalaciones nuevas» y marca la conclusión sin confirmar.
Renderiza y revisa chino, saltos de línea, márgenes y legibilidad de fuentes. Si el diseño pasa, completa las seis páginas restantes.
Guarda PPTX, ocho vistas previas, notas por página y registro de validación en my-output/.
```

La referencia usa Arial Unicode MS. Si no está en tu sistema, elige una fuente china disponible legalmente y vuelve a comprobar el diseño. Sin herramienta PPTX puedes entregar el esquema y anotar la capacidad que falta, pero eso no completa el ejercicio.

## 3. Comprobar edición, ocho páginas y fuentes

Abre el PPTX propio en un programa de presentaciones, guarda una copia de prueba, selecciona y cambia texto clave, guarda y vuelve a abrir. Exporta vistas previas de todas las páginas y comprueba chino, cortes, solapamientos, número de páginas y notas. Ocho imágenes de página completa no sustituyen una presentación editable.

La referencia se importó y exportó con LibreOffice headless. En una copia temporal del PPTX se cambió el texto nativo del título de «一份» (una) a «两份» (dos) y se leyó el nuevo texto tras exportar. Esto no equivale a una prueba de edición mediante clics en la interfaz ni demuestra que todos los programas se comporten igual.

![Sexta diapositiva: fuentes opuestas sobre la configuración predeterminada, conclusión sin confirmar](/downloads/article-to-slides/previews/slide-06.png)

La página 6 es clave para comprobar hechos: no elimines un lado del conflicto ni lo conviertas en «desactivado por defecto». La columna izquierda de la página 5 es el contraejemplo diseñado por el autor y debe distinguirse de la redacción correcta de la derecha. Las fuentes detalladas están en las notas del PPTX y `solution/slide-notes.md`.

## 4. Comprobar archivos de referencia y registrar tu validación

En el paquete completo ejecuta este comando para comprobar los archivos de referencia descargados (Python 3.10+, solo biblioteca estándar):

```sh
python3 validation/check.py
```

Comprueba hashes, ocho páginas, texto nativo, notas y vistas previas de la referencia. No valida el nuevo trabajo en `my-output/`. Revísalo en el programa como se indicó y registra versión, fuente tipográfica, resultados y límites pendientes.

Si no puedes ejecutar el script, aún puedes abrir PPTX/PDF página por página, pero no afirmes haber hecho comprobaciones de hash o estructura. El [registro de validación](/downloads/article-to-slides/validation/record.md) explica el alcance real de la referencia.

## Cómo recuperarse de fallos

| Problema | Qué hacer | Prueba de recuperación |
|---|---|---|
| El chino aparece como cuadros | Verificar que el renderizador lee una fuente china; cambiarla en una copia si hace falta | Renderizar de nuevo ocho páginas, chino legible |
| El texto se desborda tras cambiar fuente | Reducir texto, ajustar cuadros y espacios sin perder límites clave | Vistas previas sin cortes ni solapamientos |
| No se puede seleccionar texto por separado | Volver a objetos de texto nativos, no usar PNG de página entera | Seleccionar, modificar, guardar y reabrir en el programa |
| Se «suavizó» el conflicto | Revisar P3, C2, C3 y restaurar ambas versiones y «sin confirmar» | Página 6 coincide con la tabla de hechos |
| No abre o el número de páginas es incorrecto | Exportar e importar de nuevo, guardar el archivo fallido para diagnóstico | Ocho páginas completas que el programa abre |

El primer problema ocurrió realmente: LibreOffice no leía inicialmente las fuentes chinas del sistema. Tras configurar el directorio de fuentes para el renderizador, el chino volvió y se revisaron otra vez las ocho páginas. Las páginas con caracteres ausentes no se usaron como vistas previas finales.

## Criterios de finalización y siguiente paso

- El PPTX de ocho páginas abre en el programa registrado y permite editar el texto clave.
- Existen ocho vistas previas; chino, saltos y límites se revisaron página por página.
- Fuentes, identidad sintética, consejos del autor y conflicto abierto siguen visibles.
- El registro indica controles hechos y no hechos; los resultados quedan en local.

Continúa con la [ruta para creadores: guardar instrucciones reutilizables](/es/guide/learning-paths/creator/#4-guardar-instrucciones-reutilizables). Los pasos estables pueden convertirse en una plantilla propia y después puedes [convertir el flujo en Skill](/es/cases/workflows/turn-a-workflow-into-a-skill/).
