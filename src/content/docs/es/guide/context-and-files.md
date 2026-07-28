---
title: Contexto y archivos
description: Gestiona proyectos, archivos, Contexto de conversación y tipos de entrada habituales.
sidebar:
  order: 15
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Contexto y archivos

El Contexto es la información que Codex puede ver, consultar y usar para actuar en este momento.

Puedes tenerlo muy claro en la cabeza, pero si la otra parte no ve el material clave, se desvía.  
Con Codex pasa lo mismo. Si no gestionas el Contexto, hasta el mejor Prompt se ahoga en ruido.

## Qué incluye el Contexto

Puedes verlo como la información de la que depende un colega recién llegado al chat del equipo:

- El requisito de la Tarea que le envías es el problema actual
- Los archivos que le abres son el material de fondo
- Los documentos de reglas del repositorio son los acuerdos del equipo
- El historial de conversación es su memoria de esta Tarea

Todo eso junto es el Contexto del que depende ahora.

## Orígenes frecuentes de problemas

Muchos «¿cómo es que lo entendió mal otra vez?» no vienen de un modelo torpe, sino de un Contexto fallido, por ejemplo:

- Le das tan poca información que solo puede adivinar
- Le das tanta que el punto clave se pierde
- Crees que conoce un archivo, pero no se lo indicaste con claridad
- Alargas demasiado una conversación antigua y la información temprana ya no está enfocada

El criterio sencillo de esta página es:

> **Haz que vea la información realmente relevante; no dejes que lo irrelevante ocupe el sitio.**

## Gestión del Contexto

- [Contexto del proyecto](/guide/context/project-context/) — `AGENTS.md`, acuerdos del repositorio
- [Contexto de archivos y directorios](/guide/context/file-and-folder-context/) — referencias con @ y alcance
- [Contexto de conversación](/guide/context/conversation-context/) — Hilo y compactación
- [Mantener el foco](/guide/context/keep-context-focused/) — evitar ruido irrelevante
- [Contexto sensible](/guide/context/sensitive-context/) — claves y privacidad

Cómo organizar el fondo en el Prompt: [objetivos y Contexto](/prompts/goals-and-context/).

## Archivos y artefactos

Además de «decirle qué hacer», a menudo necesitas «mostrarle algo».

Ese «algo» puede ser:

- Un fragmento de código o un documento
- Una captura de pantalla
- Un PDF
- Una tabla
- Una presentación

Según el tipo de archivo cambian un poco la forma de lectura de Codex, la forma adecuada de preguntar y la forma de aceptación.

## Archivos y artefactos

- [Archivos de texto y código](/guide/files-and-artifacts/text-and-code-files/)
- [Imágenes y capturas](/guide/files-and-artifacts/images-and-screenshots/)
- [PDF y documentos](/guide/files-and-artifacts/pdf-and-documents/)
- [Tablas y hojas de cálculo](/guide/files-and-artifacts/tables-and-spreadsheets/)
- [Presentaciones](/guide/files-and-artifacts/presentations/)

## Orden de lectura recomendado

No hace falta leerlo todo de una vez. Puedes seguir este orden:

1. Lee primero [Contexto de archivos y directorios](/guide/context/file-and-folder-context/) para entender «qué archivos debe ver»
2. Luego [Mantener el foco](/guide/context/keep-context-focused/) para no dispersar la Tarea
3. Según el tipo de material que tengas, lee el capítulo de archivos correspondiente

El Contexto es el montón de información que Codex tiene a mano al juzgar; si se lo das bien, el resultado también acierta más fácil.

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Esta página es un índice de navegación y método interno; el marco de que «requisito de Tarea, material de archivos, reglas del proyecto e historial de conversación forman juntos el Contexto» se cruzó punto a punto con los capítulos actuales de Contexto y de manejo de archivos, sin depender de detalles de interfaz volátiles.  
**Última verificación:** 2026-07-26
