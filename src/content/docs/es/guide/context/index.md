---
title: Contexto
description: Gestionar el Contexto de proyecto, archivos y conversación.
sidebar:
  order: 16
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

El Contexto es la información que el modelo «puede aprovechar de forma efectiva en este momento». Si no lo gestionas bien, hasta el mejor Prompt se ahoga en ruido.

En el uso real, es lo que Codex ve de verdad ahora, lo que puede tomar como referencia y sobre lo que juzga. Lo que tú sabes pero no le has proporcionado en esta Tarea no cuenta como Contexto.

## Por qué este capítulo importa especialmente

Muchos problemas de «¿cómo es que lo entendió mal otra vez?» no se deben a que el Prompt sea demasiado corto, sino a que el Contexto no está bien gestionado.

Situaciones habituales:

- Demasiado contenido irrelevante
- Archivos clave no entregados
- Una conversación antigua sesga la Tarea nueva
- Información en conflicto sin aclarar quién manda

## Cómo leer este capítulo

Si lo lees de forma sistemática por primera vez, este orden suele funcionar:

1. Qué incluye realmente el Contexto
2. Cómo se separan las capas de proyecto, archivos y conversación
3. Por último prioridad, Compactación, foco e información sensible

## Navegación del capítulo

- [Contexto del proyecto](/guide/context/project-context/)
- [Contexto de archivos y carpetas](/guide/context/file-and-folder-context/)
- [Contexto de la conversación](/guide/context/conversation-context/)
- [Prioridad del Contexto](/guide/context/context-priority/)
- [Compactación](/guide/context/compaction/)
- [Mantener el foco](/guide/context/keep-context-focused/)
- [Contexto sensible](/guide/context/sensitive-context/)

Este capítulo insiste una y otra vez: el Contexto depende de «qué ha visto realmente esta vez». Si crees que debería saberlo pero no se lo has proporcionado, no cuenta como Contexto.

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Esta página solo explica las capas de Contexto y la ruta de lectura; los enlaces internos y la redacción conceptual se han revisado, y el cuerpo no depende de hechos volátiles de producto (versión, precio o interfaz).  
**Última verificación:** 2026-07-26
