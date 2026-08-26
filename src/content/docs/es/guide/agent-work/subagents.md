---
title: Subagents
description: Delega trabajo bien delimitado en contextos independientes y deja que el Agent principal consolide las evidencias, resuelva conflictos y acepte el resultado.
locale: es
source_locale: zh-cn
source_revision: d65f0ec
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 30
---

Un **subagent** es una unidad de trabajo independiente que el Agent principal inicia para resolver un subproblema definido. Tiene su propio contexto y devuelve conclusiones y evidencias al hilo principal. El Agent principal conserva las decisiones globales y la aceptación final.

![Orquestación de subagents en Codex: el Agent principal delega tareas delimitadas, los subagents devuelven evidencias y el Agent principal consolida y verifica](/diagrams/subagent-orchestration-es.svg)

## Tres capas de aislamiento

| Capa | ¿Está aislada? | Significado |
|---|---|---|
| Contexto de conversación | Sí | Cada subagent se concentra en su tarea sin cargar todos los detalles del hilo principal |
| Sandbox y modo de permisos | Se heredan | La ejecución independiente no concede un acceso mayor |
| Archivos del workspace | No necesariamente | Varios Agents pueden ver el mismo workspace; las escrituras simultáneas pueden entrar en conflicto |

La regla clave es: **aislar el contexto no significa aislar los archivos.** Antes de editar en paralelo, divide la propiedad por directorio, componente o worktree.

## Disponibilidad actual

Las versiones actuales de Codex ofrecen subagents de forma predeterminada y muestran su actividad en las superficies correspondientes de la App de escritorio, CLI e IDE. Los detalles de la interfaz cambian; el patrón estable consiste en pedir a Codex que delegue trabajo independiente mientras el hilo principal se encarga de consolidarlo.

En la CLI, usa `/agent` para inspeccionar o cambiar de hilo. Las superficies compatibles del IDE muestran Agents en segundo plano, y la App de escritorio presenta la actividad de los hilos de una tarea. Los controles exactos dependen del cliente y de la cuenta.

## Cuándo dividir el trabajo

Considera un subagent cuando se cumplan al menos dos condiciones:

1. La tarea puede describirse de forma independiente sin sincronizar continuamente los detalles del hilo principal.
2. Tiene un entregable explícito, como una lista de archivos, un resultado de pruebas o una conclusión de una página.
3. Puede ejecutarse en paralelo, o un análisis profundo y aislado reduce mucho el ruido del hilo principal.

### Trabajo adecuado para paralelizar

- Trazar por separado y en modo de solo lectura el frontend, el backend y las pruebas.
- Investigar de forma independiente pruebas fallidas que no están relacionadas.
- Recopilar evidencias por separado para dos opciones técnicas.
- Asignar revisiones especializadas de seguridad, rendimiento o documentación.

### Trabajo que conviene mantener en el hilo principal

- Los requisitos no están claros y necesitan conversación continua con el usuario.
- Los pasos deben ejecutarse en una secuencia estricta.
- Los cambios se concentran en un mismo archivo o fragmento de código.
- «Echar un vistazo» no tiene un criterio de finalización.

Los subagents aumentan el consumo de tokens y el coste de consolidación. No paralelices una tarea pequeña que un único hilo claro pueda resolver bien.

## Las responsabilidades del Agent principal permanecen

El Agent principal conserva:

- el objetivo global, las restricciones del usuario y las decisiones finales;
- los límites de las subtareas y la propiedad de los archivos;
- la resolución de conclusiones contradictorias;
- las pruebas y el build después de fusionar, junto con el informe de riesgos.

Que un subagent indique «terminado» es una señal sobre la subtarea, no una prueba de que toda la tarea haya concluido.

## Redactar un contrato de delegación aceptable

Este ejemplo plantea una investigación de solo lectura:

```text
Inicia un subagent para analizar, en modo de solo lectura, la renovación de sesiones en packages/auth.

Alcance: packages/auth y sus pruebas; no edites.
Pregunta: ¿puede reutilizarse un token antiguo después de que falle la renovación?
Entrega: conclusión, archivos y líneas clave, ruta de reproducción y prueba recomendada.
Verificación: cada afirmación debe poder comprobarse en el código o en las pruebas existentes.
Respuesta: menos de 500 palabras; el hilo principal decide si se edita.
```

Define la responsabilidad, el alcance, la pregunta, la prohibición, la verificación y quién toma la decisión.

## Ejemplo en tres vías

Para una regresión intermitente del inicio de sesión:

| Subtarea | Permisos y alcance | Entregable |
|---|---|---|
| A: ruta del código | Solo lectura en `src/auth/` | Cadena de llamadas desde la entrada hasta la rama de fallo |
| B: evidencia de pruebas | Solo lectura en pruebas y registros | Reproducción estable más pequeña |
| C: cambios recientes | Solo lectura en el historial Git relacionado | Cambio con mayor probabilidad de introducir la regresión y sus evidencias |

Cuando vuelvan los tres resultados, compara las evidencias antes de elegir una reparación. No permitas que A, B y C editen a la vez `src/auth/session.ts`.

## Aislar escrituras paralelas

1. Divide las escrituras en directorios o componentes que no se solapen.
2. Asigna worktrees o ramas independientes.
3. Indica los archivos exactos que posee cada Agent.
4. Deja que el Agent principal fusione y vuelva a ejecutar la verificación.

Que las pruebas aisladas pasen no demuestra que funcione la combinación después de fusionar.

## Lista de aceptación

- ¿El resultado responde a la pregunta original sin ampliar el alcance?
- ¿Incluye ubicaciones de archivos, registros o pruebas verificables?
- ¿Respetó las restricciones de solo lectura, directorios y comandos?
- ¿Se resolvieron de forma explícita los resultados contradictorios?
- ¿Se volvieron a ejecutar todas las pruebas y el build después de fusionar?
- ¿Se indican los problemas pendientes y los riesgos residuales?

## Combinación con otras capacidades

- Un **Skill** conserva el método y el formato de salida de una subtarea.
- **MCP** proporciona herramientas o datos externos bajo control.
- Un **Hook** añade protecciones al iniciar o detener un subagent, o al llamar a herramientas.
- Un **worktree** aísla las ediciones de archivos; resuelve conflictos del workspace, no del contexto.

Continúa con [Coordinación entre varios Agents](/es/cases/workflows/multi-agent-coordination/) y [Entrega y reanudación](/es/guide/agent-work/handoff-and-resume/).

---

**Estado:** verified

**Productos aplicables:** App / CLI / IDE

**Base de verificación:** Comparado con la documentación actual sobre subagents de Codex; explica el aislamiento del contexto, la herencia de permisos, los puntos de entrada de actividad, el coste de tokens, los conflictos de escritura y la responsabilidad final del Agent principal.

**Última verificación:** 2026-08-26
