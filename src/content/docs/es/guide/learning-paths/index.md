---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE"
  basis: "Se cotejaron la estructura actual de learning paths, las páginas de entrada por rol y los pasos de la ruta para principiantes del repositorio. Esta página solo organiza el orden de lectura por rol; no describe comportamientos variables del producto."
  checkedAt: "2026-07-26"
prev: false
next:
  link: /es/guide/learning-paths/beginner/01-talk-to-codex/
  label: Empezar la ruta para principiantes
title: Rutas de aprendizaje
description: Orden de lectura organizado por rol, con enlaces al contenido de referencia.
sidebar:
  order: 5
locale: es
source_locale: zh-CN
source_revision: '2f7ff71'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-25
---

Las rutas de aprendizaje **solo organizan el orden de lectura**; no duplican los artículos extensos del manual de producto ni de las guías de capacidades.

Al ver este capítulo por primera vez, puede parecer otra capa de índice. En realidad responde a qué tipo de usuario te pareces ahora y en qué orden te conviene leer.

No añade conocimientos nuevos sobre el producto; te ayuda a evitar rodeos.

![Ilustración: cuatro caminos que parten del mismo libro —principiante, creador, desarrollador y equipo— se unen en la cima](/illustrations/learning-paths.webp)

## Qué hace este capítulo

- Ayudar a principiantes, creadores, desarrolladores y responsables de equipo a elegir una ruta
- Mostrar cómo cambia el orden de lectura según el rol
- Separar lo que merece la pena leer ahora de lo que puede esperar

## Ruta para principiantes con materiales fijos

[Descarga el mismo conjunto de materiales para practicar un anuncio de evento](/downloads/first-project/first-project-1.0.0.zip) y completa el anuncio, la revisión y el registro de recuperación en cinco pasos. No hace falta programar. Aún no se ha probado la ruta completa con lectores independientes.

- **Principiante (cinco pasos)**
  1. [Hablar con Codex](/es/guide/learning-paths/beginner/01-talk-to-codex/)
  2. [Trabajar con archivos](/es/guide/learning-paths/beginner/02-work-with-files/)
  3. [Dar tareas claras](/es/guide/learning-paths/beginner/03-give-clear-tasks/)
  4. [Revisar resultados](/es/guide/learning-paths/beginner/04-review-results/)
  5. [Completar el primer proyecto pequeño](/es/guide/learning-paths/beginner/05-complete-first-project/)

## Ruta práctica para creadores

La [ruta para creadores](/es/guide/learning-paths/creator/) tiene cuatro hitos consecutivos: materiales y tabla de hechos → artículo con fuentes → presentación editable de ocho diapositivas → instrucciones de tarea reutilizables. El artículo y la presentación tienen materiales descargables independientes, y cada paso tiene criterios de finalización. Aún no se ha probado la ruta completa con lectores independientes.

## Ruta práctica para desarrolladores

La [ruta para desarrolladores](/es/guide/learning-paths/developer/) reutiliza el ejercicio del bug del carrito de compras: leer el código → corregir y probar → revisar el diff → preparar el traspaso. Incluye tres plantillas rellenables y una referencia del autor. Las pruebas de referencia se han vuelto a ejecutar; falta verificar que lectores independientes completen la ruta.

## Ruta para equipos: piloto de dos semanas y decisión de despliegue

- [Equipo](/es/guide/learning-paths/team/): acta → validación manual → controles por muestreo → ensayo de reversión → decisión de desplegar, continuar o detenerse, con seis plantillas.

## Ruta de operador avanzado

Si ya puedes completar tareas pequeñas, el siguiente paso no es memorizar más comandos, sino aprender a combinar capacidades en flujos de trabajo estables.

| Paso | Tema | Lee primero |
|---|---|---|
| 1 | Entradas rápidas | [Comandos slash y accesos rápidos](/es/guide/reference/slash-commands/) |
| 2 | Contexto duradero | [AGENTS.md](/es/guide/customization/agents-md/) y [Memorias y contexto persistente](/es/guide/customization/memories-and-persistent-context/) |
| 3 | Flujos reutilizables | [Resumen de Skills](/es/skills/overview/) y [Anatomía de un Skill](/es/skills/skill-anatomy/) |
| 4 | Subtareas aisladas | [Subagents](/es/guide/agent-work/subagents/) y [Coordinación multi-agent](/es/cases/workflows/multi-agent-coordination/) |
| 5 | Sistemas externos | [Resumen de MCP](/es/skills/mcp/mcp-overview/) |
| 6 | Guardarraíles automáticos | [Resumen de Hooks](/es/skills/hooks/hooks-overview/) |
| 7 | Distribución de equipo | [Resumen de Plugins](/es/skills/plugins/plugins-overview/) |
| 8 | Recuperación y revisión | [Deshacer y recuperar](/es/guide/getting-started/undo-and-recover/) y [Revisar diffs](/es/guide/quality/review-diffs/) |

Esta ruta sirve para pasar de “a veces pido ayuda a Codex” a “el equipo tiene un sistema pequeño y repetible”: las instrucciones de proyecto fijan reglas, los Skills fijan métodos, MCP ofrece herramientas externas, los subagents dividen trabajo acotado, los Hooks protegen puntos clave y los Plugins empaquetan todo para otros.

## Malentendidos frecuentes

### 1. Las rutas de aprendizaje y el cuerpo del manual son dos conjuntos de contenido duplicado

El cuerpo explica con claridad; las rutas te dicen qué páginas leer ahora.

### 2. Debo encajar primero en una identidad fija

Basta con una pregunta:  
**¿Cuál es el problema principal que quieres resolver ahora?**

### 3. Una ruta hay que recorrerla de principio a fin, sin saltos

La ruta es un orden recomendado, no un flujo obligatorio. En la práctica puedes volver a otros capítulos con una pregunta concreta.

## Cómo elegir si no lo tienes claro

Si no sabes qué ruta tomar, elige así:

- Aún no has cerrado el primer ciclo completo de tarea: [Ruta para principiantes](/es/guide/learning-paths/beginner/)
- Quieres escribir contenido, piezas visuales o presentaciones: [Ruta para creadores](/es/guide/learning-paths/creator/)
- Quieres cambiar código, corregir bugs o integrar proyectos: [Ruta para desarrolladores](/es/guide/learning-paths/developer/)
- Te preocupa cómo desplegar en el equipo y controlar riesgos: [Ruta para equipos](/es/guide/learning-paths/team/)

Las rutas de aprendizaje deciden qué leer a continuación según el problema más importante ahora.
