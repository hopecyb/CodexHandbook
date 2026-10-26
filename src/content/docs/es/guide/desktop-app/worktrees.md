---
title: Árboles de trabajo
description: Aísla conversaciones paralelas con Git worktree y vuelve de forma segura al espacio de trabajo local.
legacyVerification:
  status: "verified"
  products: "App"
  checkedAt: "2026-08-26"
locale: es
source_locale: zh-CN
source_revision: "3569716"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 40
reviewed_at: 2026-10-25
---
Un árbol de trabajo (worktree) permite que un mismo repositorio Git tenga varios directorios de checkout independientes. Cada directorio tiene sus propios archivos y estado de rama, aunque comparte los metadatos Git del repositorio. Así, varias conversaciones de programación pueden avanzar en paralelo sin sobrescribir sus respectivos archivos.

## Requisitos previos

- El proyecto debe estar en un repositorio Git.
- Cada tarea debe poder describirse y verificarse por separado.
- Las tareas paralelas no deben modificar el mismo conjunto de archivos principales.

Si estás aprendiendo a usar Codex, completa primero las tareas una tras otra en modo Local. Usa árboles de trabajo cuando el tiempo de espera o los conflictos entre archivos sean un problema real.

## Crear uno en la aplicación

1. En una conversación nueva, selecciona **Worktree** debajo del área de entrada.
2. Elige la rama inicial: la rama principal, una rama de función o la rama actual con cambios sin preparar.
3. Envía el prompt; la aplicación creará el Git worktree.
4. En su conversación independiente, inspecciona, prueba y revisa el trabajo.
5. Cuando quieras volver al checkout local, usa **Handoff**.

De forma predeterminada, el árbol de trabajo se crea en estado detached HEAD. Codex puede trabajar así, pero antes de conservar o compartir commits debes definir la rama de destino y la forma de integración.

## Ejemplo de dos tareas paralelas

| Conversación | tarea del árbol de trabajo | Archivos asignados | Criterio de aceptación |
|---|---|---|---|
| A | Corregir un error de inicio de sesión | `src/auth/**` | Pasan las pruebas de autenticación |
| B | Ampliar la documentación de autenticación | `docs/auth/**` | Pasa la comprobación de enlaces |

No permitas que A y B modifiquen a la vez un archivo de bloqueo compartido o el mismo archivo de configuración. Si es imprescindible, acuerda que una conversación haga el cambio y que la otra aporte solo análisis.

## Comprobaciones antes de la entrega

```bash
git status --short
git diff --check
git diff --stat
```

Después, ejecuta las pruebas correspondientes a la tarea. Usa Handoff, haz commit o integra los cambios solo cuando sepas qué conversación produjo cada modificación, cuál es la rama de destino y si la verificación pasó.

## Relación con las tareas programadas y Remote

- Una tarea programada en un repositorio Git puede usar un árbol de trabajo dedicado en segundo plano para evitar conflictos con el trabajo actual.
- Remote permite controlar desde un móvil una conversación en un árbol de trabajo del ordenador conectado. El repositorio y los comandos permanecen en ese ordenador o en su entorno de desarrollo remoto.
- Un proyecto sin Git no tiene aislamiento por árboles de trabajo; una tarea programada utiliza directamente el directorio del proyecto.

## Fuentes oficiales

- [Git worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees)
- [Tareas largas y conversaciones paralelas](https://learn.chatgpt.com/docs/long-running-work)
