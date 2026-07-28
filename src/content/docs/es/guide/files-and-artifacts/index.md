---
title: Archivos y artefactos
description: Cómo Codex lee y escribe distintos tipos de archivo, gestiona generados y puntos clave de aceptación.
sidebar:
  order: 30
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


La producción central de Codex suele ser **cambios de archivos en el repositorio** o **artefactos recién generados** (documentos, imágenes, configuración). Este tema explica las mejores prácticas por tipo de archivo, para evitar «se generó pero no sirve».

Aunque todos sean «archivos», cada tipo pide una forma distinta de encargar la tarea y de aceptarla.

«Cambiar código», «tratar una tabla», «generar capturas» o «exportar un PPT» parecen tareas de archivo, pero los puntos donde más se falla no son los mismos.

## Navegación del capítulo

| Tema | Página |
|---|---|
| Código y texto | [Archivos de texto y código](/guide/files-and-artifacts/text-and-code-files/) |
| Capturas y entrada de diseño | [Imágenes y capturas](/guide/files-and-artifacts/images-and-screenshots/) |
| PDF y documentos largos | [PDF y documentos](/guide/files-and-artifacts/pdf-and-documents/) |
| Datos tabulares | [Tablas y hojas de cálculo](/guide/files-and-artifacts/tables-and-spreadsheets/) |
| Diapositivas | [Presentaciones](/guide/files-and-artifacts/presentations/) |
| Salidas del Agent | [Aceptación de artefactos generados](/guide/files-and-artifacts/generated-artifacts/) |

Método general: [Verificar artefactos](/guide/quality/verify-artifacts/).

## De qué habla este capítulo

Principalmente tres cosas:

- Cómo encargar la tarea con claridad
- Dónde es más fácil que se equivoque en silencio
- Cómo aceptar al final

Se parece más a un manual operativo desglosado por tipo de archivo que a una mera lista de funciones.

## Principios comunes

1. **Ruta clara**: en el prompt, escribe la ruta de salida y el nombre
2. **Formato acordado**: extensión, codificación (UTF-8), finales de línea alineados con el proyecto
3. **Conciencia de tamaño**: los binarios grandes no van a Git, o usa LFS/CDN
4. **Aceptación humana**: generar ≠ terminar; contrasta con [Definición de hecho](/guide/quality/definition-of-done/)
5. **Datos sensibles**: ver [Contexto sensible](/guide/context/sensitive-context/)

## Malentendidos habituales

### 1. Que el archivo se haya generado no significa que la tarea esté terminada

En muchas tareas de archivo el problema no es «si se generó», sino:

- Si el formato es correcto
- Si el contenido es preciso
- Si la ruta es correcta
- Si el flujo posterior puede seguir usándolo

### 2. ¿La forma de encargar es parecida en todos los tipos?

Tampoco.  
Por ejemplo:

- En código importan alcance, lógica y tests
- En tablas importan columnas, tipos y reglas de agregación
- En imágenes importan contenido visual y tamaño
- En documentos importan estructura, tono y hechos

### 3. ¿Si al final se abre, ya no hay problema?

Tampoco.  
«Se abre» es solo el paso más básico; no significa que ya sirva para commit, publicación o entrega.

## Orden de lectura sugerido

La primera vez que uses Codex con archivos, puedes mirarlo así:

1. Encuentra el tipo de archivo más parecido a tu tarea actual
2. Mira dónde suele fallar ese tipo
3. Luego mira la forma de aceptación correspondiente

Así es menos fácil que te abrume todo el capítulo de golpe.

## Relación con las herramientas

- Leer/escribir archivos: herramientas de archivo + terminal
- Ver imágenes: [Prompt con imágenes](/prompts/prompting-with-images/)
- Ver páginas: [Herramienta de navegador](/guide/tools/browser/)
- Generar imágenes: [Generación de imágenes](/guide/tools/image-generation/)

En tareas de archivos es habitual que el resultado ya esté generado, pero el formato, las reglas o el contenido ya se hayan desviado en silencio.

---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Contrastado con la estructura actual del subcapítulo files-and-artifacts de este repositorio y con los capítulos ya verificados de verificación de artefactos, definición de hecho, contexto sensible e imágenes; esta página solo explica el principio estable de elegir forma de encargar y de aceptar según el tipo de archivo.  
**Última verificación:** 2026-07-26
