---
title: Trabajo orientado a artefactos
description: Acuerda primero la forma y la ruta del entregable final, luego deduce los pasos — ideal para docs, configs e informes.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Trabajo orientado a artefactos** consiste en dejar claras la forma y la ubicación del entregable antes de que Codex deduzca los pasos. Encaja con Markdown, OpenAPI, scripts de migración, esquemas de diapositivas y otras tareas con salida definida; también puede combinarse con [trabajo impulsado por especificación](/cases/workflows/specification-driven-work/).

## Enfoque de esta página

- Cómo describir la estructura del artefacto, no el detalle del proceso
- Comprobaciones de coherencia en artefactos multiarchivo
- Alineación con [Archivos y artefactos](/guide/files-and-artifacts/)

## Práctica mínima viable

```text
Artefacto objetivo:
- docs/api/auth.md (con 3 secciones: resumen, endpoints, códigos de error)
- Estilo coherente con @docs/api/users.md

Primero un esquema de directorios y los puntos clave de cada sección; no escribas el texto completo.
Tras mi confirmación, genera y comprueba que los enlaces internos funcionan.
```

## Flujo recomendado

```text
Definir inventario de artefactos (ruta + formato + referencia de ejemplo)
    → Esquema o archivos esqueleto
    → Confirmación humana
    → Rellenar contenido + enlaces cruzados
    → Verificar (lint, comprobación de enlaces, previsualización)
```

Para artefactos visuales puedes pedir capturas o notas de previsualización; ver [Verificar artefactos](/guide/quality/verify-artifacts/).

## Errores frecuentes

- La ruta del artefacto no coincide con las convenciones del repo (directorio equivocado)
- Generar solo un archivo e ignorar navegación y actualización del index
- No contrastar con el ejemplo: estilos rotos
- Artefactos binarios (pptx/docx) sin indicar cómo abrirlos para aceptar

## Límites de seguridad

- Si el generador incluye contenido con copyright de terceros, hace falta revisión humana de cumplimiento
- No sobrescribas rutas de configuración de producción; genera primero en una rama o bajo `draft/`

## Checklist de aceptación

- [ ] Todos los archivos declarados existen y se pueden abrir
- [ ] Formato coherente con el ejemplo de referencia
- [ ] Enlaces / índice / frontmatter válidos
- [ ] Cumple [Definir terminado](/prompts/define-done/)

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Contrastado con los capítulos ya verificados de archivos y artefactos, definir terminado y verificar artefactos. El contenido se centra en el método estable «acordar el entregable primero, luego deducir los pasos».
