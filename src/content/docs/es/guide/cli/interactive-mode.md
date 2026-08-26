---
title: Modo interactivo
description: Conversar con Codex en la terminal y ejecutar Tareas.
locale: es
source_locale: zh-CN
source_revision: 794dd7c
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 20
---

El «modo interactivo» es conversar ida y vuelta con Codex en la terminal: explica, ejecuta y, cuando hace falta, espera tu confirmación.

También es uno de los usos habituales de la CLI.

Tras iniciar la sesión interactiva:

1. Arranca en el directorio del proyecto (o indica el directorio de trabajo según la documentación)
2. Escribe Prompts de la misma calidad que en la App
3. Cuando te lo pida, aprueba / rechaza llamadas a herramientas
4. Usa comandos rápidos tipo `/` (si existen) para gestionar la sesión — según la ayuda actual de la CLI

Siguen valiendo los métodos de Prompt: [Prompts](/es/prompts/)

## Malentendidos frecuentes

### 1. Como es en la terminal, ¿puedo ser más informal con el Prompt?

No.

Aunque la entrada sea la terminal, la calidad de la descripción de la Tarea sigue siendo igual de importante.
Objetivo, alcance limitado y criterios de hecho: cuanto más claros, más estable.

### 2. ¿Por qué se insiste en «arrancar en el directorio del proyecto»?

Porque la CLI necesita saber en qué proyecto trabaja.
Si el directorio es incorrecto, es fácil que:

- No vea los archivos que debería
- Cambie en el directorio equivocado
- No lea las reglas del proyecto

### 3. Si en la terminal me pide Aprobación, ¿es un error?

A menudo significa que está trabajando dentro de los límites de Permisos, no que esté ejecutando de forma anómala.

## Escenario sencillo para el primer uso

La primera vez puedes hacer una Tarea pequeña así:

- Arranca en la raíz del proyecto
- Solo cambia un archivo
- Al terminar, pídele que explique qué cambió

El modo interactivo de la CLI es una Tarea conversacional en la terminal. El directorio debe ser el correcto y el Prompt, claro.

---

**Estado:** verified  
**Productos aplicables:** CLI  
**Base de verificación:** La documentación de introducción a la CLI de OpenAI Help Center sigue tomando como flujo básico arrancar Codex en la terminal, conversar y ejecutar Tareas, y aprobar operaciones cuando haga falta; esta página solo describe la forma básica del modo interactivo y sugerencias de primer uso, sin depender de una lista concreta de atajos.  
**Última verificación:** 2026-07-26
