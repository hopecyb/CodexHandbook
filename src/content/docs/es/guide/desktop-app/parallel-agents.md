---
title: Conversaciones y Agents en paralelo
description: Usa conversaciones y worktrees separados para avanzar tareas independientes que puedan revisarse por separado.
locale: es
source_locale: zh-CN
source_revision: 'a028309'
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 30
legacyVerification:
  status: verified
  products: App / CLI / IDE
  checkedAt: '2026-08-26'
reviewed_at: 2026-10-25
---
La unidad básica del trabajo en paralelo es una conversación con contexto, mensajes, resultados y objetivo propios. Una tarea no es apta para el paralelismo solo porque tenga muchos pasos: **las tareas deben ser independientes, tener límites claros de archivos y poder evaluarse por separado**.

![Diagrama en el que la conversación principal distribuye tareas independientes entre subagentes y reúne las evidencias y los conflictos](/illustrations/flow-subagents.webp)

## Primero, decide si pueden avanzar en paralelo

| Pueden avanzar en paralelo | Deben mantenerse en secuencia |
|---|---|
| Dos investigaciones de solo lectura | La segunda depende de las conclusiones de la primera |
| Código y documentación en directorios distintos | Cambios simultáneos en un mismo archivo central |
| Prototipos separados para dos soluciones | Los requisitos siguen cambiando con frecuencia |
| Cada tarea tiene sus propias pruebas | Solo se puede saber si funcionan tras integrarlas |

La recomendación oficial es evitar que dos conversaciones escriban en la misma fuente de datos. Para programar en paralelo, usa distintos worktrees de Git.

## De lo sencillo a lo complejo

### 1. Empieza con tareas de solo lectura

```text
Tarea: analiza únicamente el último fallo del módulo de autenticación; no cambies archivos.
Alcance: src/auth/** y sus pruebas.
Entrega: hipótesis de la causa, rutas de las evidencias, dudas pendientes
         y comandos de verificación sugeridos.
```

Las tareas de solo lectura no generan conflictos de fusión y son una buena primera práctica.

### 2. Después, distribuye tareas de escritura

Define para cada conversación su objetivo, los archivos que le pertenecen, las zonas prohibidas y los criterios de aceptación:

```text
Objetivo: ampliar la documentación de los códigos de error de autenticación.
Propiedad: solo docs/auth/**.
Prohibido: modificar src/**, archivos de bloqueo y configuración compartida.
Aceptación: ejecuta pnpm check:links y comunica el resultado.
```

Cada conversación que programe debe usar un [worktree](/es/guide/desktop-app/worktrees/) independiente. La configuración compartida debe quedar a cargo de la conversación principal o de una única persona responsable.

### 3. Reúne y comprueba los resultados

No unas las entregas sin revisarlas. La conversación principal debe comprobar:

1. que cada tarea respetó sus límites;
2. que las evidencias y las pruebas se pueden reproducir;
3. que las conclusiones no se contradicen;
4. si hacen falta pruebas de integración después de combinar los cambios.

## Tareas largas y modo Goal

Escribe `/goal` en la aplicación de escritorio, la CLI o el IDE para iniciar el modo Goal. El objetivo debe incluir el resultado, las restricciones y los criterios de verificación. Cada conversación tiene su propio objetivo. Trabajar en paralelo no amplía el sandbox ni los permisos; las acciones que necesitan una decisión seguirán deteniéndose.

Para una coordinación más detallada entre herramientas, consulta [Subagentes](/es/guide/agent-work/subagents/).

## Fuentes oficiales

- [Tareas largas](https://learn.chatgpt.com/docs/long-running-work)
- [Git worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees)
- [Subagentes](https://learn.chatgpt.com/docs/agent-configuration/subagents)
