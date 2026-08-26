---
title: Elegir un cliente de Codex
description: Elige entre la App de escritorio, CLI, la integración IDE y Cloud según dónde y cómo se realiza el trabajo.
locale: es
source_locale: zh-cn
source_revision: 1e89f67
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 2
---

Al elegir por primera vez un punto de entrada de Codex, no empieces comparando decenas de funciones. Responde antes a una pregunta: **¿dónde se realiza principalmente este trabajo?**

![Diagrama de selección de clientes de Codex: elegir App de escritorio, CLI, integración IDE o Cloud a partir del lugar de trabajo](/diagrams/codex-client-selection-es.svg)

## Decide en 30 segundos

| Dónde se realiza principalmente el trabajo | Primera opción | Interacción más adecuada |
|---|---|---|
| Entre varios proyectos locales y tareas paralelas | **App de escritorio** | Seguir tareas, revisar diffs, gestionar aprobaciones y trabajos largos |
| En terminales, scripts o flujos de línea de comandos existentes | **CLI** | Asignar tareas, ejecutar comandos, combinar scripts y automatizar |
| En VS Code, editores compatibles, Xcode o JetBrains | **Integración IDE** | Preguntar con el contexto del editor, modificar y revisar en el mismo lugar |
| En repositorios remotos conectados y entornos aislados | **Cloud** | Delegar ejecuciones remotas, trabajar en paralelo y revisar los resultados después |

Si no tienes una preferencia clara, la **App de escritorio** suele ser el punto de partida más directo. Si ya trabajas habitualmente en una terminal o en VS Code, permanecer en esa superficie reduce los cambios de contexto.

## Qué resuelve cada punto de entrada

### App de escritorio: consola de control del trabajo local

La App de escritorio es útil cuando necesitas mantener visibles el estado de las tareas, los cambios en archivos y las aprobaciones. Resulta especialmente adecuada para:

- seguir varios proyectos o tareas;
- aislar cambios paralelos mediante worktrees;
- revisar un diff antes de pedir ajustes o correcciones;
- programar trabajo que debe seguir ejecutándose sobre un proyecto local.

Ejemplo: deja que una tarea corrija una regresión del inicio de sesión y que otra analice el rendimiento en modo de solo lectura; revisa después cada resultado por separado.

### CLI: integrar Codex en el flujo de terminal

La CLI es adecuada para quienes ya gestionan proyectos desde la línea de comandos. Está cerca de las pruebas, Git y los scripts, y facilita documentar pasos repetibles para el equipo.

```bash
codex
```

Ejemplo: inicia Codex en la raíz del repositorio y pídele que reproduzca una prueba fallida, identifique la causa raíz, aplique el cambio mínimo y vuelva a ejecutar la misma prueba.

### Integración IDE: trabajar alrededor del código actual

Usa la integración IDE cuando la pregunta dependa mucho del archivo, la selección o el diff actual. La compatibilidad actual tiene dos formas: VS Code, Cursor, Windsurf y los editores compatibles usan la extensión de Codex; Xcode y los IDE de JetBrains disponen de sus propios puntos de entrada de integración con Codex.

Ejemplo: selecciona una función difícil, pide a Codex que explique sus entradas, salidas y rutas de excepción y, después, solicita pruebas para sus casos límite.

### Cloud: delegar en un entorno remoto aislado

Cloud es adecuado para repositorios remotos conectados y tareas que deben ejecutarse independientemente de tu equipo. Las tareas de Cloud se ejecutan en entornos aislados y sirven para exploración paralela, trabajos largos y revisión centralizada cuando terminan.

Ejemplo: delega tres problemas independientes del repositorio en tareas de Cloud separadas, espera a que devuelvan sus cambios y evidencias de verificación y revisa cada resultado.

## Funcionan en conjunto

Un mismo flujo de trabajo puede pasar de un cliente a otro:

1. Aclara en el IDE un problema local relacionado con el archivo actual.
2. Delega una exploración larga en la App de escritorio o Cloud.
3. Ejecuta en la CLI las comprobaciones estándar del equipo.
4. Vuelve a la App de escritorio o a la superficie de revisión para inspeccionar el diff final.

La pregunta no es «¿cuál es más potente?», sino **¿cuál está más cerca del contexto actual y hace que el resultado sea más fácil de verificar?**

## Dos situaciones habituales

### Situación 1: primera corrección de un bug real

Empieza con la App de escritorio. Puedes ver al mismo tiempo la conversación, los cambios y las solicitudes de permisos. Después de completar un ciclo entero, prueba la CLI o el IDE.

### Situación 2: el equipo ya dispone de comandos y convenciones de CI

Empieza con la CLI y registra en `AGENTS.md` los comandos de instalación, pruebas y formato. Así, Codex podrá aplicar las mismas reglas del proyecto en cada tarea.

## Verifica inmediatamente después de elegir

No te limites a confirmar que el cliente se abre. Completa este ciclo en un repositorio de práctica:

1. Pide a Codex que lea y explique un archivo.
2. Solicita un cambio pequeño y reversible.
3. Inspecciona el diff, no solo la respuesta final.
4. Ejecuta un comando de verificación.
5. Confirma que sabes rechazar o limitar una solicitud de permisos.

Consulta la [comparación de funciones](/es/guide/reference/feature-comparison/) para ver la matriz completa y [Permisos y sandbox](/es/guide/permissions-and-sandbox/) para conocer los límites de ejecución.

---

**Estado:** verified

**Productos aplicables:** App / CLI / IDE / Cloud

**Base de verificación:** Comparado con la documentación oficial actual de la App de escritorio de ChatGPT, Codex CLI, IDE y Cloud. La recomendación se basa en el lugar y el modelo de interacción, y distingue la extensión compatible con VS Code de las integraciones de Xcode y JetBrains.

**Última verificación:** 2026-08-26
