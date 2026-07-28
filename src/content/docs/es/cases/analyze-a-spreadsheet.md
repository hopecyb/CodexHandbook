---
title: Analizar una hoja de cálculo
description: Sube o referencia datos tabulares para obtener resúmenes e insights.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Analizar una hoja de cálculo

## Metadatos

| Campo | Contenido |
|---|---|
| Público | Creadores / negocio |
| Cliente | App |
| Tiempo estimado | 30–60 minutos |

## 1. Objetivo y contexto

**Objetivo:** Limpiar, agregar y proponer visualizaciones sobre CSV/Excel.

**Criterios de éxito:** Las conclusiones son reproducibles y las cifras clave se pueden rastrear hasta filas/columnas de la tabla original.

## 2. Prompt recomendado

```text
Entrada: @data/sales-q1.csv
Objetivo: Agregar ventas por región, variación interperiodo y Top 3 de productos; señalar valores atípicos.
Restricciones: No modificar el archivo original; generar summary.md y, opcionalmente, notas de chart.
Aceptación: Cada cifra en summary indica el método de cálculo o el nombre de la columna citada.
```

## 3. Verificación

- Revisa por muestreo 2–3 cifras agregadas
- Confirma que no se escriben PII en logs ni se envían fuera

## 4. Relacionado

- [Tablas y hojas de cálculo](/guide/files-and-artifacts/tables-and-spreadsheets/)

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Los use cases actuales de Codex en OpenAI Developers siguen incluyendo «Query tabular data» y «Clean and prepare messy data». Este ejemplo se centra en limpieza, agregación y análisis de anomalías en solo lectura sobre CSV/Excel, exigiendo que las cifras clave se rastreen hasta campos de la tabla original.
