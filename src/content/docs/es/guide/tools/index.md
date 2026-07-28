---
title: Herramientas
description: Selección de herramientas del Codex Agent y temas — terminal, búsqueda, navegador, Computer Use, etc.
sidebar:
  order: 20
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


El Agent usa **herramientas** para leer archivos, ejecutar comandos, buscar en la red, abrir el navegador, etc. Elegir bien la herramienta y escribir claros los límites reduce salidas no autorizadas a la red o cambios excesivos.

Aquí «herramienta» son las capacidades que Codex invoca al ejecutar de verdad una tarea. No todas las tareas se completan solo con diálogo.  
Algunas leen archivos, otras ejecutan comandos, otras consultan páginas web, otras miran la página real.

## Por qué conviene conocer primero las herramientas

Al empezar, es fácil tratar a Codex como un asistente de solo conversación.  
Pero en cuanto lo permites, puede:

- Leer archivos del proyecto
- Modificar documentación o código
- Ejecutar comandos de terminal
- Buscar páginas públicas
- Abrir páginas locales para comprobar el resultado

Las herramientas no son conocimiento adicional: son la base de seguridad y eficiencia.

## Navegación del capítulo

| Herramienta | Página |
|---|---|
| Resumen de selección | [Selección de herramientas](/guide/tools/tool-selection/) |
| Terminal | [Shell y terminal](/guide/tools/shell-and-terminal/) |
| Recuperación | [Búsqueda web](/guide/tools/web-search/) |
| Páginas web | [Herramienta de navegador](/guide/tools/browser/) |
| GUI | [Computer Use](/guide/tools/computer-use/) |
| Imágenes | [Generación de imágenes](/guide/tools/image-generation/) |
| Voz | [Entrada y salida de voz](/guide/tools/voice/) |

Lectura/escritura de archivos y aceptación de artefactos: [Archivos y artefactos](/guide/files-and-artifacts/). Las herramientas de extensión se conectan vía [MCP](/skills/mcp/mcp-overview/).

## Orden de lectura sugerido

La primera vez que mires este capítulo, puedes leer en este orden:

1. [Selección de herramientas](/guide/tools/tool-selection/): qué priorizar según la tarea
2. [Shell y terminal](/guide/tools/shell-and-terminal/): riesgos de ejecutar comandos
3. Páginas de búsqueda, navegador u otras herramientas, según la tarea que tengas entre manos

Las herramientas deciden cómo puede actuar Codex; tú tienes que explicar cuáles se pueden usar y cuáles no.

---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Esta página es navegación del tema de herramientas; las entradas de terminal, búsqueda, navegador, Computer Use, imágenes y voz se contrastaron con el índice del sitio; el cuerpo solo indica que «las herramientas afectan el alcance de ejecución y el riesgo» y no declara una matriz fija de soporte.  
**Última verificación:** 2026-07-26
