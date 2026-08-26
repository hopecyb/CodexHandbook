---
title: "Personalización y configuración del proyecto"
description: Preferencias personales, AGENTS.md, configuración y prioridad de las reglas — para que Codex siga trabajando a tu manera a lo largo del tiempo.
sidebar:
  order: 40
locale: es
source_locale: zh-CN
source_revision: 3a2992b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Codex no depende solo de «cómo preguntas esta vez»; también usa una **configuración persistente** para recordar tus convenciones y las del equipo. Este capítulo separa principalmente lo que debe quedarse en la conversación de lo que debe anclarse en el proyecto.

Si has empezado a repetir las mismas cosas —como «no toques este directorio», «ejecuta primero los tests» o «usa este modelo por defecto»—, este capítulo trata ese tipo de problema.

## Contenido

- Quién anula a quién entre preferencias personales, instrucciones del proyecto, reglas de equipo y prompts temporales
- Qué pertenece a `AGENTS.md` y qué no
- En qué capa se gestionan los archivos de configuración y la política de aprobación/Sandbox

## Para quién

| Lector | Empieza aquí |
|---|---|
| Acabas de completar la primera tarea | [Instrucciones del proyecto](/es/guide/customization/project-instructions/) |
| Quieres fijar normas de colaboración en el repositorio | [Qué es AGENTS.md](/es/guide/customization/agents-md/what-is-agents-md/) |
| Quieres unificar el comportamiento de CLI/App | [Fundamentos de configuración](/es/guide/customization/configuration/config-basics/) |

## Qué trata este capítulo

Tras un tiempo usando Codex, mucha gente tropieza con el mismo tipo de problema: hay muchas reglas escritas, pero no parecen aplicarse del todo, o distintos sitios se contradicen.

Este capítulo habla principalmente de cómo estratificar bien las reglas de colaboración:

- Qué es un hábito personal
- Qué es una regla compartida del repositorio
- Qué es un límite duro a nivel de organización
- Qué es solo un requisito temporal de esta tarea

Cuando las capas no están claras, es fácil acabar con «mucho escrito, pero no se aplicó cuando debía».

## Capas habituales (concepto)

Entender las capas ayuda a evitar la confusión de «escribí reglas pero no se aplicaron». Los clientes, las capacidades gestionadas por la organización y las implementaciones por versión pueden diferir, pero suele bastar empezar con estas capas:

```text
1. Política gestionada de organización/equipo (si está desplegada)
2. AGENTS.md / instrucciones de proyecto a nivel de proyecto (en el repositorio)
3. Configuración y preferencias de usuario (máquina local, p. ej. ~/.codex)
4. Requisitos temporales y referencias @ en la tarea actual
```

**Principio:** Cuanto más cerca de «impuesto por la organización», menos debería relajarse a la ligera por una sola tarea; cuanto más cerca de «la tarea actual», más flexible —y más fácil de perder al terminar la sesión—. La prioridad real sigue al cliente actual y a la documentación oficial.

## Malentendidos habituales

### 1. ¿Si sé escribir prompts, no necesito configuración a largo plazo?

Para tareas cortas quizá baste a duras penas, pero en cuanto la colaboración es continua, querrás ir anclando los requisitos repetidos hacia abajo.

### 2. ¿Se puede meterlo todo en `AGENTS.md`?

Tampoco.  
Algunas cosas encajan mejor en:

- Preferencias personales
- Archivos de configuración
- Política gestionada por la organización
- El prompt de la tarea actual

### 3. Más configuración no siempre es mejor

Cuando la configuración está dispersa, las reglas son demasiado largas y las capas están desordenadas, personas y herramientas tienen más difícil saber a quién seguir.

## Navegación del capítulo

| Tema | Páginas |
|---|---|
| AGENTS.md | [Resumen](/es/guide/customization/agents-md/what-is-agents-md/) · [Alcance y prioridad](/es/guide/customization/agents-md/scope-and-precedence/) · [Escribir instrucciones eficaces](/es/guide/customization/agents-md/writing-effective-instructions/) |
| Instrucciones del proyecto | [Instrucciones del proyecto](/es/guide/customization/project-instructions/) |
| Memoria | [Memorias y contexto persistente](/es/guide/customization/memories-and-persistent-context/) |
| Elección de mecanismo | [Elegir el mecanismo adecuado](/es/guide/customization/choosing-the-right-mechanism/) |
| Configuración | [Fundamentos de configuración](/es/guide/customization/configuration/config-basics/) · [Profiles](/es/guide/customization/configuration/profiles/) |
| Preferencias personales | [Preferencias personales](/es/guide/customization/personal-preferences/) |
| Reglas | [Permitir y denegar](/es/guide/customization/rules/allow-and-deny-patterns/) · [Reglas de comandos](/es/guide/customization/rules/command-rules/) · [Política de equipo](/es/guide/customization/rules/team-rules/) |
| Ejemplos | [AGENTS.md en un monorepo](/es/guide/customization/examples/monorepo-agents-md/) |

La cobertura de Rules ya ha empezado; se irán añadiendo más páginas de detalle de configuración a medida que crezca el módulo de personalización.

## Orden sugerido

La primera vez que organices de forma sistemática las reglas de colaboración de Codex, puedes seguir este orden:

1. Organiza primero las reglas del proyecto
2. Luego completa `AGENTS.md`
3. Después separa las preferencias personales
4. Por último gestiona los archivos de configuración y los controles de reglas más finos

Así hay menos caos que cambiar de golpe un montón de claves de config.

Las reglas no necesitan ser muchas; lo importante es ponerlas en el sitio correcto.

## Errores habituales

- Meter un largo documento de arquitectura en `AGENTS.md` y ahogar las restricciones clave
- Repetir normas de equipo en el chat sin committearlas al repositorio, con experiencias inconsistentes para los colaboradores
- Relajar el Sandbox en tu máquina personal asumiendo que los compañeros en un repositorio compartido tienen los mismos permisos

## Lista de verificación

- [ ] Puedes explicar la prioridad de las cuatro capas de configuración
- [ ] El repositorio tiene un `AGENTS.md` breve (o instrucciones de proyecto equivalentes)
- [ ] Las operaciones sensibles siguen pasando por aprobación, en lugar de confiar en que las reglas de texto «asusten» al modelo

## Referencias
- Documentación OpenAI Codex: [https://developers.openai.com/codex](https://developers.openai.com/codex)
---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Los materiales actuales del Help Center de OpenAI y de configuración de Codex siguen describiendo con claridad la estratificación entre configuración de usuario `~/.codex`, capacidades gestionadas por la organización e instrucciones de colaboración a nivel de proyecto; esta página reescribe la «prioridad» como una descripción de capas habituales más conservadora, para evitar convertir detalles de implementación concretos en reglas absolutas.  
**Última verificación:** 2026-07-26
