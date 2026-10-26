---
legacyVerification:
  status: verified
  products: CLI
  basis: La documentación de introducción a la CLI de OpenAI Help Center sigue tomando como flujo básico arrancar Codex en la terminal, conversar y ejecutar tareas, y aprobar operaciones cuando haga falta; esta página solo describe la forma básica del modo interactivo y sugerencias de primer uso, sin depender de una lista concreta de atajos.
  checkedAt: '2026-07-26'
title: Modo interactivo
description: Conversar con Codex en la terminal y ejecutar tareas.
locale: es
source_locale: zh-CN
source_revision: "822e8f7"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-25
sidebar:
  order: 20
---

El «modo interactivo» es mantener una conversación con Codex en la terminal: explica, ejecuta y, cuando hace falta, espera tu confirmación.

También es uno de los usos habituales de la CLI.

Tras iniciar la sesión interactiva:

1. Arranca en el directorio del proyecto (o indica el directorio de trabajo según la documentación)
2. Escribe prompts de la misma calidad que en la App
3. Cuando te lo pida, aprueba / rechaza llamadas a herramientas
4. Usa comandos rápidos tipo `/` (si existen) para gestionar la sesión — según la ayuda actual de la CLI

Siguen valiendo los métodos de prompt: [prompts](/es/prompts/)

## Tareas adecuadas para el modo interactivo

Este modo encaja especialmente con trabajos en los que decides sobre la marcha:

| Estado de la tarea | Por qué ayuda la interacción |
|---|---|
| Los requisitos aún no están del todo claros | Puedes precisarlos durante el trabajo |
| Debes examinar un diff antes de decidir el siguiente paso | Puedes aprobar poco a poco o reducir el alcance |
| Pruebas un flujo por primera vez en un proyecto | Es más fácil observar qué lee y cambia Codex |
| Hay permisos, herramientas externas o posibles escrituras | Una persona puede controlar los puntos importantes |

Si la tarea ya es estable y no requiere decisiones de ida y vuelta, considera el [modo no interactivo](/es/guide/cli/non-interactive-mode/) o la automatización.

## Malentendidos frecuentes

### 1. Como es en la terminal, ¿puedo ser más informal con el prompt?

No.

Aunque la entrada sea la terminal, la calidad de la descripción de la tarea sigue siendo igual de importante.
Objetivo, alcance limitado y criterios de finalización: cuanto más claros, más estable.

### 2. ¿Por qué se insiste en «arrancar en el directorio del proyecto»?

Porque la CLI necesita saber en qué proyecto trabaja.
Si el directorio es incorrecto, es fácil que:

- No vea los archivos que debería
- Cambie en el directorio equivocado
- No lea las reglas del proyecto

### 3. Si en la terminal me pide aprobación, ¿es un error?

A menudo significa que está trabajando dentro de los límites de permisos, no que esté ejecutando de forma anómala.

## Escenario sencillo para el primer uso

La primera vez puedes hacer una tarea pequeña así:

- Arranca en la raíz del proyecto
- Solo cambia un archivo
- Al terminar, pídele que explique qué cambió

El modo interactivo de la CLI es una tarea conversacional en la terminal. El directorio debe ser el correcto y el prompt, claro.
