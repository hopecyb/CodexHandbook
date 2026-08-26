---
title: Mapa de capacidades de extensión
description: 'Comprende el sistema de extensiones de Codex mediante ocho responsabilidades: tarea, reglas, proceso, herramientas, protección, distribución, activación y paralelismo.'
locale: es
source_locale: zh-cn
source_revision: fa5604a
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Los mecanismos de extensión se confunden con facilidad porque suelen aparecer en un mismo flujo de trabajo, aunque resuelven problemas distintos.

Esta página presenta primero una visión del sistema: los prompts y `AGENTS.md` aportan tareas y reglas; los Skills, procesos reutilizables; MCP, herramientas externas; los Hooks protegen puntos del ciclo de vida; los Plugins componen y distribuyen; y las Scheduled tasks activan ejecuciones por tiempo. Pueden combinarse y no siguen un orden fijo de «evolución».

## Arquitectura del sistema

![Arquitectura reutilizable del sistema de trabajo de Codex](/diagrams/codex-work-system-architecture-es.svg)

Lee el diagrama teniendo presentes tres ideas:

- **La entrada de la tarea** define qué se hará en esta ejecución; las reglas del proyecto definen qué debe respetarse siempre.
- **La capacidad de ejecución** amplía el alcance, pero no demuestra que el resultado sea correcto; MCP, los subagents y los scripts siguen sujetos a permisos y aceptación.
- **La distribución y la activación** no son el flujo de trabajo. Un Plugin agrupa capacidades; una Scheduled task inicia una ejecución en un momento determinado.

## Ocho responsabilidades

| Responsabilidad | Mecanismo | Problema que resuelve mejor | No se encarga de |
|---|---|---|---|
| Tarea actual | Prompt | Qué hacer ahora, alcance y aceptación | Reglas persistentes del proyecto |
| Reglas persistentes | `AGENTS.md` | Comandos, convenciones y límites de directorios | Pasos completos de una clase de tarea |
| Proceso reutilizable | Skill | Pasos estables, referencias, plantillas y scripts | Obtener autorización para sistemas externos |
| Herramientas externas | MCP / Connector | Datos y acciones fuera del repositorio | Determinar si el objetivo de negocio es correcto |
| Protección del ciclo de vida | Hook | Registrar, comprobar, aportar contexto o bloquear alrededor de eventos | Sustituir pruebas y revisión humana |
| Composición y distribución | Plugin | Agrupar Skills, conectores, MCP, Hooks y plantillas | Volver fiables automáticamente todos los componentes |
| Activación temporal | Scheduled task | Ejecutar periódicamente una tarea verificada | Sustituir prompts y condiciones de parada claros |
| División en paralelo | Subagent | Exploración, pruebas o revisión independientes | Eliminar conflictos de escritura y costes de coordinación |

## Cómo combinar capacidades en una tarea

Supongamos que un equipo revisa cada semana el riesgo de sus dependencias:

1. `AGENTS.md` define el gestor de paquetes permitido, los comandos de prueba y los directorios que no se deben modificar.
2. Un Skill `dependency-audit` fija los pasos para recopilar dependencias, consultar avisos, clasificarlos y verificar el resultado.
3. Un MCP de GitHub o de una fuente de paquetes proporciona información externa, preferiblemente con permisos de solo lectura.
4. Un Hook puede bloquear resultados que contengan credenciales reales o registrar las llamadas a herramientas externas.
5. Un Plugin distribuye conjuntamente el Skill, la configuración MCP y el Hook.
6. Una Scheduled task se activa cada semana y solo crea un informe o un borrador de issue, que una persona revisa antes de publicarlo.

Que falte una capa no hace que la solución sea inferior. Para una única comprobación local de dependencias pueden bastar un prompt claro y los comandos de terminal existentes.

## Correspondencias habituales

| Necesidad | Elección recomendada |
|---|---|
| Unificar el estilo de código y los comandos de prueba | AGENTS.md |
| Estandarizar el proceso de revisión de PR | Skill |
| Leer incidencias de Jira o Linear | MCP |
| Instalar en todo el equipo un paquete de integraciones | Plugin |
| Buscar credenciales antes de cada commit | Hooks |
| Generar cada lunes un borrador de informe | Automations y publicación humana |

## De un éxito puntual a un activo del equipo

Usa esta progresión para decidir si conviene consolidar el trabajo:

| Etapa | Forma | Cuándo encaja |
|---|---|---|
| Prompt puntual | Especificación de la tarea en la conversación actual | Se usará una sola vez o el problema aún se está explorando |
| Plantilla | Esqueleto fijo de objetivo, contexto, restricciones y aceptación | La clase de tarea se repite, pero los pasos todavía cambian |
| Skill | `SKILL.md` más plantillas, referencias o scripts | El proceso y los criterios de éxito son estables |
| Plugin | Paquete de Skills, conectores, MCP, Hooks y plantillas | Se necesita instalación, actualización y gobierno uniformes |
| Scheduled task | Tarea guardada, horario e historial de ejecuciones | Ya se verificó manualmente y merece ejecutarse de forma periódica |

MCP, los Hooks y los subagents no son etapas obligatorias de esta progresión. Añádelos solo cuando la tarea necesite herramientas externas, protección del ciclo de vida o trabajo en paralelo.

Consulta la lógica detallada en [Cómo elegir un método de extensión](/es/skills/choosing-an-extension-method/).

## Límites actuales del producto

- Un Skill de Codex es un directorio que contiene `SKILL.md` y puede incluir scripts, referencias y recursos; Codex carga las instrucciones completas cuando las necesita.
- La App de escritorio, Codex CLI y el IDE comparten la configuración MCP cuando usan el mismo host de Codex.
- Los Plugins funcionan en las superficies compatibles de ChatGPT, en Codex para escritorio y en Codex CLI; la integración IDE no permite explorar ni usar Plugins.
- Las Scheduled tasks se crean y gestionan desde ChatGPT Web o la App de escritorio; CLI e IDE pueden ayudar a probar prompts, Skills o scripts, pero no ofrecen una interfaz de gestión de Scheduled tasks.
- Los subagents son adecuados para exploración, pruebas y revisión independientes de solo lectura; escribir en paralelo sobre los mismos archivos aumenta el coste de los conflictos.

Los puntos de entrada del producto seguirán cambiando. Antes de configurar un mecanismo concreto, consulta la [comparación de funciones](/es/guide/reference/feature-comparison/) y las fuentes oficiales siguientes.

## Fuentes oficiales

- [Skills y Plugins](https://learn.chatgpt.com/docs/skills-and-plugins)
- [Crear Skills de Codex](https://learn.chatgpt.com/docs/build-skills)
- [MCP de Codex](https://learn.chatgpt.com/docs/extend/mcp)
- [Hooks de Codex](https://learn.chatgpt.com/docs/hooks)
- [Plugins de Codex](https://learn.chatgpt.com/docs/plugins)
- [Scheduled tasks](https://learn.chatgpt.com/docs/automations)
- [Subagents de Codex](https://learn.chatgpt.com/docs/agent-configuration/subagents)

---

**Estado:** verified
**Productos aplicables:** ChatGPT Web / App de escritorio / Codex CLI / IDE (consulta en el texto las superficies compatibles con cada mecanismo)
**Base de verificación:** Modelo de responsabilidades y límites de acceso reconstruidos a partir de la documentación oficial de OpenAI sobre Skills, Plugins, MCP, Hooks, Scheduled tasks y Subagents disponible el 2026-08-25.
**Última verificación:** 2026-08-25
