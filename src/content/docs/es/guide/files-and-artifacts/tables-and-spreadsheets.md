---
title: Tablas y hojas de cálculo
description: Lectura, limpieza, análisis y exportación de CSV, Excel y datos tabulares — evita romper estructura y codificación.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Las tareas con tablas son el típico caso en que se puede fallar en silencio: separador, codificación, cabecera, fórmula o formato de fecha — si cualquiera falla, todo lo de abajo se cae.

## Contenido de esta página

- Cómo hacer que Codex lea y escriba CSV / Excel con seguridad
- Estructura del prompt en tareas de análisis de datos
- Cómo aceptar números y recuentos de filas

## Elección de formato

| Formato | Ventajas | Atención |
|---|---|---|
| CSV | Texto con diff, universal | Codificación (UTF-8 BOM), separador, escape de comillas |
| TSV | Menos choques con comas | Igual que CSV |
| XLSX | Varias hojas, fórmulas | Binario; el diff es difícil; leer/escribir con librerías |
| Google Sheets | Colaboración | A menudo vía MCP o exportar CSV |

Datos pequeños que van a Git: **prioriza CSV/TSV**. Informes complejos: **datos fuente en CSV + script que genera XLSX**.

Mira primero estos tres puntos:

- Quieres diff, trazabilidad y reproducibilidad: prioriza CSV / TSV
- Entregas a quien usa Excel: luego exporta XLSX
- No mezcles «formato final de visualización» con «formato fuente más apto para automatizar»

## Lectura y análisis

Estructura de prompt recomendada:

```text
Archivo: data/sales_2025.csv
Codificación: UTF-8
Tarea: agregar revenue por region; salida summary.csv
Restricciones: no modificar el archivo original; nulos como 0; dos decimales
Aceptación: imprimir las primeras 5 filas + total de filas
```

Contexto: [Contexto de archivos y carpetas](/guide/context/file-and-folder-context/)

## Por qué las tareas con tablas fallan con facilidad en silencio

Los puntos que de verdad suelen fallar suelen ser estos:

- Si la fecha se trata como texto o como fecha
- Si el nulo cuenta como 0, se salta o da error
- Qué columna es el identificador único
- Si hay que redondear decimales e importes
- Si se puede modificar el archivo original

Si eso no se dice claro, Codex también puede «parecer terminado», pero el resultado no es fiable.

## Escritura y limpieza

- Deja claros **nombres de columna, orden y tipos** (fechas en ISO 8601)
- Tablas grandes: procesa por lotes; evita cargar todo de golpe y explotar la memoria
- Deduplicación y claves de merge van en la descripción de la tarea; no dejes que el Agent adivine la «clave primaria»

## Malentendidos habituales

### 1. Si al final se puede abrir el archivo, el tratamiento fue correcto

No.

En tareas tabulares, «se puede abrir» y «los datos no se estropearon» son dos cosas distintas.

### 2. Si en Excel se ve bien, seguro que no hay problema

Algunos errores solo aparecen cuando un sistema posterior consume los datos, por ejemplo:

- Codificación incorrecta
- Orden de columnas cambiado
- Tipo numérico cambiado
- Fórmulas convertidas a resultado fijo

### 3. Dejar que el Agent decida solo nulos, fechas y clave primaria

Suele no recomendarse.

Cuanto más explícitas sean estas reglas, más estable el resultado.

## Al encargar una tarea tabular, deja claro esto

Intenta formular el requisito en estas 5 cosas:

1. Qué archivo de entrada es
2. Cómo debe llamarse el de salida
3. Qué columnas conservar, agregar o limpiar
4. Cómo tratar nulos, fechas y duplicados
5. Cómo verificar el resultado

Eso es mucho más estable que solo decir «ordéname este Excel».

Si usas Python: lectura/escritura con `pandas`; si Node: `csv-parse` / `xlsx`, etc. — conviene el estándar del proyecto en `AGENTS.md`.

## Con la verificación

- Si filas y totales se cruzan con los datos fuente
- Abrir Excel y ver si las fechas se interpretaron como números
- [Verificar artefactos](/guide/quality/verify-artifacts/): muestreo comparativo

En tareas tabulares, lo más importante es dejar claros columnas, tipos, reglas y aceptación.

## Errores frecuentes

- Excel abre CSV con chino/caracteres rotos (falta BOM o codificación incorrecta)
- Error de suma en punto flotante sin explicar el redondeo
- Cambiar fórmulas en Excel sin guardarlas como script reproducible

## Checklist de aceptación

- [ ] Nombres y tipos de columna cumplen el acuerdo del consumidor aguas abajo
- [ ] Totales / muestreo coinciden con revisión manual o SQL
- [ ] El archivo original no se sobrescribió por accidente (o el cambio es visible en el diff)

## Referencias

- Tutoriales de tratamiento de datos de stormzhang
- Plantillas de tareas tabulares de codex.bozhouai.com
- [Definir restricciones](/prompts/constraints-and-boundaries/)

---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Contrastado con los capítulos ya verificados de este manual sobre contexto de archivos y carpetas, verificar artefactos, restricciones y límites, etc.; esta página solo confirma el principio estable de tratamiento tabular «columnas, tipos, nulos, fechas y forma de aceptación deben declararse de forma explícita» y no trata una librería o plataforma como única implementación.  
**Última verificación:** 2026-07-26
