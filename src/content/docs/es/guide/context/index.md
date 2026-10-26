---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Esta página solo explica las capas de contexto y la ruta de lectura; los enlaces internos y la redacción conceptual se han revisado, y el cuerpo no depende de hechos volátiles de producto (versión, precio o interfaz).
  checkedAt: '2026-07-26'
title: Contexto
description: Gestionar el contexto de proyecto, archivos y conversación.
sidebar:
  order: 16
locale: es
source_locale: zh-CN
source_revision: "d2baf42"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-25
---

El contexto es la información que el modelo «puede aprovechar de forma efectiva en este momento». Si no lo gestionas bien, hasta el mejor prompt se ahoga en ruido.

En el uso real, es lo que Codex ve de verdad ahora, lo que puede tomar como referencia y sobre lo que juzga. Lo que tú sabes pero no le has proporcionado en esta tarea no cuenta como contexto.

![Ilustración: reglas del proyecto, archivos seleccionados y conversación llegan al agente en tres capas mientras un embudo filtra lo irrelevante](/illustrations/context-layers.webp)

## Por qué este capítulo importa especialmente

Muchos problemas de «¿cómo es que lo entendió mal otra vez?» no se deben a que el prompt sea demasiado corto, sino a que el contexto no está bien gestionado.

Situaciones habituales:

- Demasiado contenido irrelevante
- Archivos clave no entregados
- Una conversación antigua sesga la tarea nueva
- Información en conflicto sin aclarar quién manda

## Cómo leer este capítulo

Si lo lees de forma sistemática por primera vez, este orden suele funcionar:

1. Qué incluye realmente el contexto
2. Cómo se separan las capas de proyecto, archivos y conversación
3. Por último prioridad, compactación, foco e información sensible

## Navegación del capítulo

- [contexto del proyecto](/es/guide/context/project-context/)
- [contexto de archivos y carpetas](/es/guide/context/file-and-folder-context/)
- [contexto de la conversación](/es/guide/context/conversation-context/)
- [Prioridad del contexto](/es/guide/context/context-priority/)
- [compactación](/es/guide/context/compaction/)
- [Mantener el foco](/es/guide/context/keep-context-focused/)
- [contexto sensible](/es/guide/context/sensitive-context/)

Este capítulo insiste una y otra vez: el contexto depende de «qué ha visto realmente esta vez». Si crees que debería saberlo pero no se lo has proporcionado, no cuenta como contexto.
