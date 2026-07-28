---
title: Qué es Codex
description: Explica en lenguaje sencillo qué puede y qué no puede hacer Codex, y cuáles son sus entradas principales.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 2
---

Codex es un **Agent de programación y trabajo con IA** de OpenAI. Le das un objetivo; combina archivos del proyecto, herramientas y tu aprobación para leer, editar, ejecutar comandos y generar resultados, y luego te entrega el proceso y los cambios para que los revises.

Se parece más a un colega digital que usa herramientas. Tú defines el objetivo, los límites y los criterios de aceptación; él investiga, edita archivos y ejecuta pasos, pero la decisión final es tuya.

La documentación oficial del producto es [OpenAI Codex](https://developers.openai.com/codex). Este handbook es una guía comunitaria de código abierto para aprender de forma sistemática y poner manos a la obra; no sustituye la documentación oficial.

## En qué se diferencia de un chat de IA normal

Al ver Codex por primera vez, mucha gente lo entiende como «un chat de IA un poco más potente». La diferencia principal está en la capacidad de ejecutar.

| Lo que usas a diario | Cómo pensarlo |
|---|---|
| Chatbot normal | Da consejos, explica conceptos, escribe un texto |
| Codex | Además de responder, puede **leer archivos, editarlos, ejecutar comandos y generar artefactos** |

Las herramientas de chat se quedan sobre todo en la respuesta; Codex, dentro de lo que autorices, actúa de verdad.

## Qué Tareas conviene delegarle

Si una Tarea, además de «hablar», necesita leer material, cambiar cosas, ejecutar pasos y producir un resultado, encaja bien con Codex.

Si solo preguntas un concepto, pides una idea suelta o un consejo genérico, un chat de IA normal también sirve.

## En qué cosas puedes usarlo

Aunque no seas programador, puedes pensarlo así:

- **Leer y organizar material**: resumir documentos, actas, capturas, tablas
- **Escribir y editar contenido**: pulir artículos, completar índices, mejorar documentación
- **Hacer proyectos pequeños**: montar una página, cambiar una configuración, completar una plantilla
- **Investigar y corregir problemas**: localizar dónde falla y qué mirar después
- **Automatizar trabajo repetitivo**: dejar que ejecute primero un flujo fijo

Si sabes programar, puedes integrarlo en tu flujo de desarrollo; si no, puedes usarlo como un asistente que ejecuta pasos.

## Qué puede hacer

- **Comprender**: resumir información de repositorios, documentos, tablas y capturas
- **Crear y modificar**: escribir textos, editar código, generar páginas y configuraciones
- **Ejecutar**: con tu autorización, correr comandos de terminal, buscar y navegar
- **Colaborar**: continuar Tareas entre App, CLI, IDE, Cloud y otras entradas
- **Ampliar**: conectar flujos repetibles y sistemas externos con Skills, Plugins, MCP, Hooks, etc. (capítulos avanzados más adelante)

## Qué no puede hacer (importante)

- No sustituye tu responsabilidad final sobre hechos, seguridad y decisiones de negocio
- No garantiza que la primera generación sea correcta; el resultado debe ser verificable
- No puede saltarse Sandbox, red ni políticas de la organización sin autorización
- No debe usarse como «pipeline de publicación automática sin aceptación»

## Criterio básico al usarlo

Trátalo como asistente; no le pases también la responsabilidad.

Puede hacer, investigar y editar primero, pero al final confirma tú:

- si cambió lo correcto
- si entendió mal tu objetivo
- si los hechos que da son fiables
- si los cambios pueden traer efectos secundarios

## Flujo habitual

El flujo suele ser así:

1. Tú planteas un objetivo
2. Él responde o propone un plan
3. Si hay que editar archivos o ejecutar comandos, puede pedirte Aprobación
4. Al terminar, te dice qué cambió
5. Tú compruebas si el resultado cumple lo esperado

Un ejemplo completo de este flujo está en [Ejecuta tu primera Tarea](/guide/getting-started/run-your-first-task/).

## Entradas principales

| Entrada | Encaja bien cuando |
|---|---|
| App de escritorio | Por defecto para principiantes; proyectos, Tareas y revisión de diffs visuales |
| CLI | Usuarios de terminal, scripts y automatización |
| Extensión IDE | Trabajar en el editor con archivos abiertos y selección |
| Web / Cloud | Conectar repositorios, entornos cloud y Tareas largas |
| Móvil y remoto | Supervisar, aprobar y hacer seguimiento ligero |

Tabla comparativa: [Comparación de funciones](/guide/reference/feature-comparison/). Relaciones de conceptos: [Mapa de capacidades](/guide/start-here/).

## Siguiente paso

Si solo quieres retener tres ideas:

1. Codex no es solo chat: tras autorización, también ejecuta acciones
2. En cada Tarea deja claros el objetivo, los límites y «cómo se sabe que está hecho»
3. Revisa cualquier resultado; no confíes a ciegas

Páginas relacionadas:

1. [Elige un cliente de Codex](/guide/choose-your-client/)
2. [Terminología para principiantes](/guide/start-here/terminology-for-beginners/)
3. [Ejecuta tu primera Tarea](/guide/getting-started/run-your-first-task/)

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Esta página solo explica el posicionamiento básico de Codex, las Tareas adecuadas y la forma de colaborar; se revisaron enlaces internos y formulaciones conceptuales, y el cuerpo no conserva valores por defecto de producto finos o volátiles.  
**Última verificación:** 2026-07-26
