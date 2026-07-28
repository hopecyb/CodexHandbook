---
title: Editores compatibles
description: Qué editores admite la extensión IDE de Codex, cómo elegir y limitaciones habituales.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

La extensión IDE integra Codex en el **editor que ya usas**, para iniciar Tareas, ver diffs y aceptar cambios en la misma interfaz donde escribes código. Esta página cubre el alcance de soporte y la elección; los pasos de instalación están en [Instalar la extensión IDE](/guide/ide/installation/).

## Contenido de esta página

- Qué editores tienen extensión oficial
- Cómo elegir entre extensión IDE, App de escritorio y CLI
- Cómo unificar el flujo en equipos con varios editores

## Qué mirar al elegir

Aquí importan dos cosas: qué editores están en el soporte oficial y, si ya tienes un editor habitual, si conviene seguir usando Codex dentro del IDE.

## Alcance del soporte oficial

**La lista concreta y los requisitos de versión los marca la [documentación de OpenAI Codex](https://developers.openai.com/codex)**; lo habitual incluye:

| Editor | Usuario típico | Notas |
|---|---|---|
| Visual Studio Code | La mayoría de desarrolladores | Instalación desde el marketplace; el ecosistema más maduro |
| Forks de la familia VS Code (p. ej. Cursor) | Quien ya usa un editor con IA | Suele ser compatible con el mecanismo de extensiones de VS Code; valida en la práctica |
| Serie JetBrains (si hay oferta oficial) | Usuarios de Java/Kotlin/IDEA | Funciones y UI pueden diferir un poco de la versión de VS Code |

Editores fuera de la lista oficial: usa [CLI](/guide/cli/) o la [App de escritorio](/guide/desktop-app/) como alternativa; no dependas de extensiones no oficiales.

## Malentendidos frecuentes

### Que un editor esté soportado no implica que las funciones sean iguales a las de otras entradas

Algunos interpretan «hay extensión» como «en el IDE puedo hacer de todo».

Cada entrada enfatiza cosas distintas:

- El IDE se centra más en cambios pegados al código
- La App se centra más en Tareas a nivel de proyecto y coordinación multitarea
- La CLI se centra más en terminal, scripts y entornos remotos

### Elegir editor no es solo cuestión de costumbre

Si lo que haces sobre todo es:

- Cambios locales en el código
- Mirar la selección
- Cambiar y probar a la vez

el IDE suele encajar mejor.

Si en el día a día haces más:

- Tareas largas
- Coordinación de documentación
- Varias Tareas en paralelo

la App o la CLI suelen ser más útiles.

## Cuándo elegir la extensión IDE

| Conviene | Menos conveniente |
|---|---|
| Al cambiar código quieres que «archivo/selección actuales» entren solos al Contexto | Necesitas Agents en paralelo, árboles de trabajo u otras capacidades propias de la App |
| Estás acostumbrado a ver inline diff en el editor | Haces sobre todo Tareas largas no de código (documentación, investigación) |
| Ya ejecutas tests y depuración en el IDE | Necesitas un entorno Cloud estandarizado para montar el repo desde cero |

Entrada de decisión: [Elegir cliente de Codex](/guide/getting-started/choose-your-codex-client/)

## Reparto con la App de escritorio

```text
Extensión IDE: editando → cambios pequeños → revisión en línea → tests locales
App de escritorio: Tareas a nivel de proyecto → Agents en paralelo → árboles de trabajo → notificaciones y delegación Cloud
```

Ambas pueden compartir la misma cuenta y configuración de proyecto; ver [Contexto del editor](/guide/ide/editor-context/) y [Alcance de AGENTS.md](/guide/customization/agents-md/scope-and-precedence/).

## Alineación de equipo

1. En el README indica el **editor recomendado + versión mínima de la extensión**
2. Las normas centrales van en `AGENTS.md`, sin atarse a funciones privadas de un IDE
3. El code review sigue basándose en el Git diff, sin depender de vistas «solo visibles en cierto IDE»

## Cómo decidir qué entrada usar

Si dudas, puedes guiarte por estas preguntas:

1. ¿Pasas la mayor parte del tiempo cambiando código en el editor?
2. ¿Dependes mucho del archivo actual, la selección y el inline diff?
3. ¿De momento no necesitas multi-Agent, árboles de trabajo ni una gestión de Tareas más fuerte?

Si la mayoría de respuestas es «sí», empieza por la extensión IDE.

## Errores frecuentes

- Asumir que la extensión IDE y la App son equivalentes 1:1
- Iniciar Tareas sin abrir la raíz del workspace, con rutas y resolución de `AGENTS.md` incorrectas
- Mezclar varias extensiones de IA y chocar en Contexto y atajos

A menudo eliges la extensión IDE simplemente porque el trabajo principal ya está en el editor.

## Fuentes de referencia
- Documentación IDE de OpenAI Codex
---

**Estado:** outdated  
**Productos aplicables:** IDE  
**Nota de revisión:** El centro de ayuda oficial actual confirma con fuerza que «Codex VS Code extension is compatible with most VS Code forks», pero esta página se extiende a formas concretas de soporte y comparación con Cursor, Windsurf, JetBrains, etc.; conviene marcarla como `outdated` hasta completar la matriz de soporte vigente.  
**Última verificación:** 2026-07-26
