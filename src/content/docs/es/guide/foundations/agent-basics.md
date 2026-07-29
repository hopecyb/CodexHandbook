---
title: Fundamentos de Agent
description: Explica cómo un Agent llama Herramientas e itera alrededor de un objetivo.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 20
---

Un **Agent** avanza de forma continua hacia un objetivo: entenderlo → elegir Herramientas → observar el resultado → ajustar el siguiente paso, hasta terminar o hasta que tú intervengas.

La IA normal se parece más a alguien que responde preguntas; un Agent, a alguien que, al recibir una Tarea, la lleva paso a paso.

## Diferencia entre Agent y un chat normal

| | Chat normal | Agent |
|---|---|---|
| Salida | Sobre todo consejos en texto | Puede leer/escribir archivos, ejecutar comandos, cambiar el repositorio |
| Proceso | Una respuesta | Varias llamadas a Herramientas |
| Riesgo | Consejos engañosos | También puede estropear archivos o ejecutar comandos peligrosos |
| Tu rol | Leer | Definir límites, aprobar, aceptar |

## Una analogía intuitiva

Puedes compararlos así:

- **Chat normal**: como preguntarle a un amigo «¿cómo se hace este problema?»
- **Agent**: como pedirle a un colega que prepare una versión y luego revisarla juntos

En modo Agent, conviene prestar más atención a:

- a qué puede acceder
- si debe darte un plan primero
- cómo vas a aceptar el resultado cuando termine

## Por qué importa esta diferencia

Muchos usos incorrectos vienen del mismo malentendido:

> Creer que «solo está hablando»

En cuanto empieza a leer archivos, editarlos o ejecutar comandos, ya no es solo un consejo en la ventana de chat: está participando en el trabajo real.

Al empezar, conviene leer a la vez:

1. [Permisos y Aprobaciones](/guide/foundations/permissions-and-approvals/)
2. [Ejecuta tu primera Tarea](/guide/getting-started/run-your-first-task/)
3. [Revisa el resultado](/guide/getting-started/review-the-result/)

## Conceptos relacionados

- Skill / Plugin / MCP: amplían «qué sabe hacer» y «a qué se conecta» — ver [Extensiones y automatización](/skills/) y [Mapa de capacidades](/guide/start-here/codex-capability-map/)
- Aprobación humana: ver [Permisos y Aprobaciones](/guide/foundations/permissions-and-approvals/)

Lo propio de un Agent es que puede dar varios pasos seguidos alrededor de un objetivo, no solo devolverte un párrafo.

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Esta página solo explica la diferencia de colaboración entre un Agent y un chat normal; se revisaron enlaces internos, conceptos y analogías, y el cuerpo no depende de hechos de producto volátiles.  
**Última verificación:** 2026-07-26
