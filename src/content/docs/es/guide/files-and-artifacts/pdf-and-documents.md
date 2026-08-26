---
title: PDF y documentos
description: Alcance, herramientas y puntos de aceptación al hacer que Codex lea, resuma o genere documentos tipo PDF.
locale: es
source_locale: zh-CN
source_revision: a086570
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 30
---

Los PDF se usan a menudo para especificaciones, papers, escaneos e informes exportados. A diferencia del texto plano, un PDF tiene **estructura compleja, mucho tamaño y un diff difícil**; conviene acordar por separado cómo encarar la tarea.

Al entregar un PDF a Codex, lo más habitual es una comprensión incompleta de la estructura o un alcance demasiado grande.

## Contenido de esta página

- Cómo hacer que el Agent «lea» bien el contenido del PDF
- Acuerdos de formato y ruta al generar o modificar PDF
- Cómo evitar en la aceptación «parece que hay archivo pero no se abre»

## Por qué el PDF falla con especial facilidad

Un PDF es más molesto que un archivo de texto porque puede mezclar:

- Imágenes escaneadas
- Maquetación a varias columnas
- Encabezados y pies
- Tablas
- Texto e imágenes mezclados

Cuanto más claro digas «qué tramo mirar y qué resultado quieres», más estable suele ser el efecto.

## Leer PDF

### Enfoque recomendado

1. **Indica la ruta del archivo**: `docs/spec.pdf` o referencia `@` (según soporte del cliente)
2. **Di qué quieres**: resumen, contraste de un capítulo, extracción de datos de tablas
3. **Páginas o capítulos**: en documentos largos limita el alcance y ahorra contexto
4. **Contenido sensible**: contratos, escaneos de identidad, etc. siguen el flujo de [contexto sensible](/es/guide/context/sensitive-context/)

### Límites

- Un PDF escaneado puede necesitar OCR; el resultado tiene errores y requiere muestreo humano
- Maquetaciones complejas, varias columnas y notas a pie pierden estructura con facilidad
- No metas un PDF enorme entero en una sola tarea; procesa por tramos o conviértelo antes en un esquema Markdown

## Malentendidos habituales

### 1. Tirar el PDF entero no garantiza un extracto estable de lo importante

Si el PDF es largo, complejo y además mezcla páginas escaneadas, lo más sólido sigue siendo:

- Acotar el alcance
- Acotar la tarea
- Procesar por tramos

### 2. Un PDF escaneado y uno de texto normal difieren mucho

El escaneado suele depender primero de OCR; si el OCR falla, el resumen, la extracción y el juicio posteriores también se desvían.

### 3. Generar un archivo PDF no equivale a haber terminado

Aún debes confirmar:

- Si se abre
- Si el texto tiene basura de encoding
- Si páginas, índice y tablas son correctos
- Si las fuentes chinas (u otras) están realmente incrustadas

## Generar o actualizar PDF

| Forma | Sirve para |
|---|---|
| Compilar desde Markdown/LaTeX | Documentación técnica, informes (reproducible) |
| Imprimir desde HTML | Maquetación simple |
| Generar con librería (p. ej. reportlab) | Tickets y etiquetas programáticos |

En el prompt deja claro:

- Ruta de salida y nombre de archivo
- Tamaño de página, idioma, requisitos de fuentes (en PDF con CJK, presta especial atención a la incrustación)
- Si se hace commit en Git (binarios grandes suelen ir como artifact o release)

## Forma de escritura aplicable directamente

Puedes pedir:

```text
Lee solo las páginas 12-18 de `docs/spec.pdf` y extrae los criterios de aceptación.
No resumas el documento entero.
Si el OCR o el reconocimiento de maquetación son dudosos, márcalo con claridad.
```

## Relación con la política del repositorio

- PDF binarios grandes: considera **Git LFS** o no meterlos en el repo
- Cuando el diff no es legible, la aceptación es **abrir el archivo** + contrastar con [Verificar artefactos](/es/guide/quality/verify-artifacts/)
- Lista de generados: [Aceptación de artefactos generados](/es/guide/files-and-artifacts/generated-artifacts/)

## Errores habituales

- Pedir «cambia una palabra del PDF» sin aportar el fuente editable (`.md` / `.tex`)
- Meter un PDF confidencial en un repo público y luego procesarlo en Cloud
- No abrir para aceptar; solo mirar «el archivo existe»

## Lista de verificación

- [ ] El PDF se abre en el lector/entorno de impresión objetivo
- [ ] Páginas, índice y tablas clave coinciden con lo esperado
- [ ] Tamaño del repo y política LFS cumplen la norma del equipo

Con PDF, cuanto más claro el alcance, más estable. Tras generar, no mires solo si el archivo está: confirma que se abre bien y que el contenido es correcto de verdad.

---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Contrastado con los capítulos ya verificados de este manual sobre contexto de archivos/directorios, verificación de artefactos, contexto sensible y tratamiento de imágenes/archivos; esta página solo confirma el principio estable «limitar el alcance del PDF, desconfiar de errores de OCR/maquetación y, tras generar, abrir de verdad para aceptar».  
**Última verificación:** 2026-07-26
