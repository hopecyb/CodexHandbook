---
title: Integraciones (resumen)
description: Al conectar GitHub, sistemas de tickets, chat y plataformas internas a Codex, aclara límites, permisos y el diseño del circuito.
sidebar:
  order: 55
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


El valor de las integraciones de Codex no es solo conectar una herramienta más: es meter al Agent en las cadenas de colaboración que ya usas — hosting de código, flujo de tickets, notificaciones, plataformas internas, bases de conocimiento.

Antes de empezar, merece la pena aclarar:

- Quién puede disparar esa cadena automatizada
- Qué puede leer Codex y qué puede escribir de vuelta
- Si falla, quién se entera, quién responde y cómo hacer rollback

## Qué cambia realmente una integración

Puedes entender «integración» así: **hacer que Codex no solo te ayude en una ventana de chat, sino que entre en los sistemas que ya usas a trabajar juntos.**

Por ejemplo:

- Ir a GitHub a leer PRs y comentarios de commit
- Ir al sistema de tickets a leer el contexto y generar sugerencias de tratamiento
- Tras completar una tarea, enviar el resultado a la herramienta de chat

Lo que la integración cambia de verdad es si Codex puede entrar en el flujo de trabajo real, no quedarse solo respondiendo en la conversación.

## Malentendidos habituales

### Más integraciones no siempre es mejor

Muchos equipos, en la primera integración, quieren conectar de golpe GitHub, Jira, Slack, la base de conocimiento y APIs internas.

En el primer piloto suele encajar mejor: **conectar solo la cadena más corta y donde el valor se vea más fácil.**

La razón es realista:

- Cuanto más conectas, más difícil aclarar los límites de permiso
- Si falla, más difícil saber qué eslabón falló
- El equipo pierde confianza en el sistema con más facilidad

### «Puede ejecutarse solo» no significa «debe ejecutarse solo desde el principio»

Donde más se precipita una integración es querer de entrada que cambie estados solo, cambie código solo, envíe notificaciones solo y fusione solo.

Un arranque habitual es:

- Primero leer datos
- Luego generar sugerencias
- Luego añadir confirmación humana
- Solo al final plantear escritura automática de vuelta

Así es más fácil aclarar límites y responsabilidades.

## Tres preguntas antes de integrar

### 1. ¿Es leer datos o cambiar el estado del sistema?

| Tipo | Riesgo | Sugerencia |
|---|---|---|
| Consulta de solo lectura | Relativamente bajo | Empieza por aquí |
| Generar borrador / comentario | Medio | Añade revisión humana |
| Cambiar estado / abrir PR / enviar mensaje | Más alto | Limitar permisos + auditoría + plan de rollback |

Muchos equipos quieren «cambiar solo» de entrada, pero el primer paso suele bastar con **leer contexto y generar sugerencias**.

### 2. ¿Uso síncrono o automatización asíncrona?

| Escenario | Encaja mejor |
|---|---|
| En la sesión pides a Codex que consulte un issue | MCP / tarea interactiva |
| Tras abrir un PR, borrador de revisión automático | Cloud / CI / Automation |
| Resumen fijo diario del estado | Tarea programada / automatización en segundo plano |

El mismo sistema puede tener varias formas de conexión; no hace falta forzar una sola.

### 3. ¿La integración ayuda a la persona o decide por ella?

Por defecto, conviene dejar a Codex en la **capa de sugerencias**, no en la de decisión final.

Por ejemplo:

- Puede generar automáticamente borradores de comentario de PR review
- Puede organizar automáticamente resúmenes de issues
- No conviene que por defecto fusione solo, cambie configuración de producción solo o cierre tickets de alto riesgo solo

## Tipos habituales de integración

### GitHub y hosting de código

Es la más común y madura.

Adecuado para:

- Tareas Cloud que leen el repositorio, abren ramas y abren PRs
- Revisión no interactiva en CI
- Segunda corrección en torno a review comments

Entrada: [Integración con GitHub](/guide/integrations/github/) y [Web y Cloud](/guide/web-and-cloud/).

### Tickets y gestión de proyectos

Por ejemplo Linear, Jira, Trello o sistemas internos de requisitos.

Adecuado para:

- Leer el contexto del issue antes de cambiar código
- Generar sugerencias de triaje por etiqueta o estado
- Resumir el avance de la iteración

Este tipo encaja bien primero como **MCP de solo lectura + flujo Skill**.

### Chat y sistemas de notificación

Por ejemplo Slack, correo, IM empresarial.

Adecuado para:

- Notificar fin de tarea, fallo, espera de aprobación
- Empujar de forma periódica diarios, semanales, resúmenes de cambio

Atención: la herramienta de notificación no debería ser la única fuente de auditoría; las tareas importantes deben conservar logs y registro en tickets.

### Plataformas internas y bases de conocimiento

Por ejemplo portal de desarrolladores, Runbook, APIs internas, sitio de documentación.

Adecuado para:

- Meter normas del equipo y manuales de guardia en el contexto
- Dejar que Codex invoque capacidades internas dentro de límites fijos

En este tipo importa más la **estratificación de permisos y la fiabilidad del contenido**.

## Cómo decidir antes de aterrizar

Si solo quieres juzgar rápido «si esta integración merece hacerse primero», mira estas tres:

1. ¿Es trabajo que el equipo ya repite?
2. ¿Puede generar valor primero sobre todo leyendo y organizando información?
3. Aunque el resultado no sea perfecto, ¿puede la persona cubrirlo con facilidad?

Si las tres se cumplen, suele encajar en el primer lote de candidatos.

## Orden de aterrizaje recomendado

Si es tu primera integración, avanza de menor a mayor riesgo:

1. Conectar en solo lectura una fuente externa
2. Dejar que Codex genere resúmenes o sugerencias, sin ejecutar directamente
3. Añadir aprobación humana y notificaciones
4. Solo al final plantear escritura automática de vuelta a sistemas externos

Así validas el valor primero y luego amplías permisos paso a paso.

## Un esquema de integración mínima usable

Ejemplo: «generar automáticamente un borrador de revisión de PR»:

1. GitHub dispara la tarea
2. Codex lee el diff y las reglas relacionadas
3. Salida: borrador de comentario o checklist
4. Confirmación humana antes de decidir si se adopta

Eso es más fácil de poner en marcha —y de ganar confianza del equipo— que «cambiar código solo y fusionar solo».

## Checklist de control de riesgo

- [ ] Owner claro de cada integración
- [ ] Distinguir tres niveles de permiso: solo lectura, comentario, escritura de vuelta
- [ ] Se puede rastrear qué leyó y qué escribió una tarea
- [ ] Si falla hay notificación; no depende de que alguien lo descubra por casualidad
- [ ] Si hay datos sensibles, pasó evaluación de seguridad

En la primera integración, dejar que Codex te ayude a «ver» y «sugerir» suele aterrizar más fácil que pedirle de entrada «cambiar» y «ejecutar».

## Navegación del capítulo

| Integración | Página |
|---|---|
| GitHub | [Integración con GitHub](/guide/integrations/github/) |
| Slack / Linear / Jira, etc. | Sobre todo documentación oficial y capítulos MCP/Automation; este manual se irá completando |

## Relación con otros capítulos

- Conectores de extensión y distribución empaquetada: ver [Resumen de Plugins](/skills/plugins/plugins-overview/)
- Acceso a datos externos: ver [Resumen de MCP](/skills/mcp/mcp-overview/)
- Ejecución programada y en segundo plano: ver [Tareas programadas y en segundo plano](/skills/automations/scheduled-tasks/)
- Colaboración en repositorios Cloud: ver [Web y Cloud](/guide/web-and-cloud/)

## Referencias

- Documentación oficial de OpenAI Codex sobre integraciones y desarrolladores
- Capítulos de integración y automatización Codex en *AI-Coding-Guide-Zh* de KimYx0207
- Capítulos `26-git-github.md` y de automatización de stormzhang
- [codex.bozhouai.com](https://codex.bozhouai.com/)


---

**Estado:** verificado  
**Productos aplicables:** Integrations  
**Base de verificación:** Las explicaciones actuales del OpenAI Help Center sobre plugins y apps siguen enfatizando que las capacidades de integración de Codex/ChatGPT se conectan vía plugins, apps y plantillas de app, y que el administrador puede controlar por separado acceso por rol, acciones de lectura/escritura, requisitos de confirmación y límites de datos. Esta página se centra en principios de diseño de integración, estratificación de permisos y orden de aterrizaje, sin depender de la interfaz momentánea de un sistema externo concreto.  
**Última verificación:** 2026-07-26
