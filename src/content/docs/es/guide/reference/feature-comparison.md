---
title: Comparación de funciones
description: Compara la aplicación de escritorio, la CLI, el IDE y Cloud por superficie de trabajo, lugar de ejecución y forma de revisión.
locale: es
source_locale: zh-CN
source_revision: 'b3d30b0'
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 30
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Contrastado con las páginas oficiales actuales de App, CLI, IDE, Cloud, Authentication y Pricing. La matriz conserva capacidades explícitas de ubicación del trabajo, contexto, revisión y autenticación; no clasifica funciones variables como fuertes, medias o débiles por suposición.
  checkedAt: '2026-08-26'
reviewed_at: '2026-10-25'
---

Esta tabla compara solo las **principales formas de trabajo que se mantienen estables**; las funciones pequeñas que cambian rápido no deben interpretarse como compromisos permanentes. Usa primero el [diagrama para elegir cliente](/es/guide/choose-your-client/) y después comprueba aquí las diferencias.

## Comparación principal

| Acceso | Dónde se trabaja | Contexto más útil | Forma principal de revisión | Tareas habituales |
|---|---|---|---|---|
| Aplicación de escritorio de ChatGPT | Proyectos, chats y archivos locales | Carpetas, proyectos y tareas abiertos | Resumen de tareas, archivos, diff e interfaz de aprobaciones | Coordinación entre proyectos, tareas largas y operaciones con archivos y el equipo |
| Codex CLI | Terminal actual y repositorio local | Directorio de trabajo, salida de comandos y estado de Git | Comandos, diff y resumen de resultados en el terminal | Exploración, cambios, pruebas, scripts y CI |
| Integración con IDE | Editor actual | Archivos abiertos, selección y conversación reciente | Resumen de cambios y diff junto al código | Explicaciones locales, cambios pequeños y revisión en el editor |
| Codex Cloud | Entorno remoto aislado | Repositorio conectado y configuración del entorno | Registros, resumen, diff y PR en Cloud | Tareas largas en segundo plano, intentos paralelos y colaboración remota |

## Instalación e identidad

| Aspecto | Aplicación de escritorio | CLI | IDE | Cloud |
|---|---|---|---|---|
| Acceso | Aplicación de escritorio para macOS / Windows / Linux | Línea de comandos local | Extensión compatible con VS Code; integraciones propias de Xcode y JetBrains | Web e integraciones remotas compatibles |
| Inicio de sesión con ChatGPT | Compatible | Compatible | Compatible | Obligatorio |
| Inicio de sesión local con API key | Compatible | Compatible | Compatible | No compatible |
| Facturación principal | Plan de ChatGPT o uso de la API | Plan de ChatGPT o uso de la API | Plan de ChatGPT o uso de la API | Plan de ChatGPT y permisos del espacio de trabajo |

El trabajo local iniciado con una API key y el iniciado con ChatGPT siguen políticas distintas de facturación, administración y tratamiento de datos. Una API key tampoco habilita funciones que requieren un espacio de trabajo de ChatGPT o Cloud. Consulta siempre las páginas oficiales actualizadas para conocer los planes y límites concretos.

## Combinaciones habituales

### Ciclo de desarrollo individual

```text
IDE para localizar un problema concreto → CLI para ejecutar pruebas precisas → aplicación de escritorio para revisar tareas largas y el diff
```

### Ciclo de trabajo remoto en equipo

```text
Inicio desde GitHub / GitLab / Linear / Slack → ejecución aislada en Cloud → revisión humana del resumen y del diff → creación de una PR
```

### Ciclo de aprendizaje inicial

```text
Abrir una carpeta de práctica en la aplicación de escritorio → proponer una tarea pequeña → revisar la solicitud de permisos → revisar el diff → ejecutar las comprobaciones
```

## Comprueba el entorno real además de la matriz

Los plugins, las tareas programadas, las notificaciones, los modelos y las políticas de la organización cambian con rapidez. Para estas cuestiones, consulta directamente la interfaz actual del cliente y la documentación oficial:

- Si una función aparece para tu cuenta.
- Si una capacidad depende del plan, la región o una política administrativa.
- Los nombres de comandos, atajos o elementos de interfaz de la versión actual.
- Si el inicio de sesión con API key permite usar una función de ChatGPT o Cloud.

El criterio de elección es sencillo: **IDE para código localizado, CLI para completar el ciclo en el terminal, aplicación de escritorio para coordinar tareas locales y Cloud para ejecutar trabajos aislados de forma remota.**
