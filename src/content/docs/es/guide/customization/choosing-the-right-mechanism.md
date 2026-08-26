---
title: Elegir el mecanismo adecuado
description: Prompt temporal, AGENTS.md, memoria, Skill y MCP — en qué capa va cada uno, con un marco de decisión claro.
locale: es
source_locale: zh-CN
source_revision: 99ae41f
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 30
---

El problema de muchos equipos suele ser **poner la misma información en el lugar equivocado**: reglas que deberían estar en el repositorio van al chat, flujos que deberían ser un Skill se meten en `AGENTS.md`, y datos que deberían conectarse solo lectura reciben un MCP de alto permiso.

Aquí importa una pregunta práctica:

> Cuando descubres que «esto volverá a pasar», ¿en qué capa deberías anclarlo?

## Tabla breve

| Mecanismo | Qué encaja mejor |
|---|---|
| Prompt de una sola vez | Objetivo, restricciones y criterios de aceptación que solo valen para esta tarea |
| `AGENTS.md` | Reglas de colaboración a nivel de repositorio y restricciones a largo plazo |
| Memoria | Preferencias personales o pocos hechos no sensibles que se repiten entre sesiones |
| Skill | Flujos reutilizables, listas de verificación, plantillas especializadas |
| MCP | Acceso a herramientas externas, fuentes de datos y capacidades del sistema |

Si esta tabla no basta, sigue leyendo.

## Método de decisión en cinco pasos

### 1. Información que solo vale para la tarea actual

Prioriza ponerla en el **prompt de esta sesión**.

Sirve para:

- «Esta vez solo cambia `docs/`, no toques el código»
- «Salida: resumen en español; al final, una pregunta por confirmar»
- «Primero analiza la causa; no modifiques archivos todavía»

No sirve para:

- Que el equipo siempre exija `pnpm test`
- Directorios prohibidos del repositorio
- Que cada revisión de PR use la misma plantilla de salida

Esas reglas a largo plazo deben seguir bajando de capa.

### 2. ¿Es una regla de colaboración del proyecto o un hábito personal?

Si es una **regla que todos los colaboradores deben conocer**, va en [`AGENTS.md`](/es/guide/customization/agents-md/what-is-agents-md/).

Por ejemplo:

- Comandos de test, lint y build
- Qué directorios no se tocan
- Reglas de mensajes de commit o de aceptación de PR
- Normas especiales de distintos subdirectorios en un monorepo

Si es solo **tu preferencia**, por ejemplo «explica en español» o «primero la conclusión, luego el detalle», encaja mejor en [memoria](/es/guide/customization/memories-and-persistent-context/) o en la configuración personal.

Regla práctica:

- Lo que debe pasar por review de PR → prioriza el repositorio
- Lo que no importa que otros no vean → considera la capa personal

### 3. ¿Es una «regla» o un «paso»?

Muchos documentos fallan porque mezclan reglas y pasos.

| Si pertenece a… | Encaja mejor en |
|---|---|
| «No hagas push directo a main» | `AGENTS.md` |
| «En el review: primero tests, luego riesgos, luego regresiones» | Skill |
| «Antes de publicar, ejecuta estos 4 comandos» | Skill o script |
| «Solo acceso de lectura a datos de issues» | MCP + configuración de permisos |

Al decidir, quédate con estas dos ideas:

- La **regla** responde «qué se puede hacer y qué no»
- El **paso** responde «cómo se suele hacer este tipo de cosa»

Los pasos reutilizables suelen encajar mejor como [Skill](/es/skills/overview/).

## Combinaciones habituales, no una elección binaria

Los equipos maduros casi nunca usan un solo mecanismo; los combinan.

### Combinación 1: `AGENTS.md` + Skill

Sirve para: revisión de código, checklist de release, diagnóstico de fallos.

División:

- `AGENTS.md` escribe restricciones duras: no fusionar automáticamente, qué checks son obligatorios
- Skill escribe el flujo: cómo revisar, con qué plantilla de salida, cómo clasificar problemas

### Combinación 2: Skill + MCP

Sirve para: leer tickets, consultar bases de datos, traer diseños, generar informes semanales.

División:

- Skill define el orden de ejecución y el formato de salida
- MCP aporta «a qué se puede conectar, qué se puede consultar, qué se puede cambiar»

Puedes verlos por separado:

> Skill es la guía de trabajo; MCP es la caja de herramientas conectada.

### Combinación 3: `AGENTS.md` + memoria

Sirve cuando las reglas de equipo son estables, pero cada persona tiene hábitos de expresión distintos.

División:

- `AGENTS.md` escribe las normas públicas del equipo
- La memoria guarda preferencias personales: idioma, estilo de explicación, estructura de salida por defecto

No lo hagas al revés. Las reglas de equipo no deberían vivir solo en la memoria de alguien.

## Una matriz de decisión más práctica

| Pregunta | Sí | No |
|---|---|---|
| ¿Solo afecta a la tarea actual? | Prompt | Sigue decidiendo |
| ¿Todos deben cumplirlo? | `AGENTS.md` / configuración del proyecto | Sigue decidiendo |
| ¿Es un flujo repetible? | Skill | Sigue decidiendo |
| ¿Necesita datos externos o acciones en tiempo real? | MCP | Sigue decidiendo |
| ¿Es solo una preferencia personal a largo plazo? | Memoria / configuración de usuario | Prompt |

Cuando un requisito cae en dos columnas a la vez, suele significar que debes **dividir en capas**, no forzar todo en el mismo sitio.

## Tres ejemplos típicos

### Ejemplo 1: el equipo siempre olvida ejecutar tests de regresión

No te quedes solo diciendo en el chat «acordaros de ejecutar los tests».

Enfoque más sólido:

1. En `AGENTS.md`, deja claro: «si tocas lógica de negocio, debes ejecutar `pnpm test`»
2. Si el flujo es complejo, añade un Skill de ejecución de tests
3. Usa CI como red de seguridad final

### Ejemplo 2: en cada PR review quieres que Codex use el mismo formato

No pegues la plantilla entera cada vez.

Enfoque más sólido:

1. Convierte la estructura de salida en un Skill
2. En `description`, aclara: «usar cuando el usuario diga review, revisión o chequeo previo a merge»
3. Si el equipo lo usa de forma unificada, documenta la ruta del Skill en el proyecto

### Ejemplo 3: necesitas leer tickets de Linear y luego cambiar código

No pegues el API token en la conversación.

Enfoque más sólido:

1. Conecta Linear con MCP
2. Permisos de solo lectura por defecto
3. Si quieres un flujo fijo, usa un Skill: «primero lee el ticket, luego el código, luego propone el plan»

## Los errores más fáciles de cometer

### Convertir `AGENTS.md` en una enciclopedia

El resultado: las restricciones duras no destacan y los comandos y zonas prohibidas importantes quedan ahogados. `AGENTS.md` encaja mejor corto, duro y ejecutable.

### Usar Skill como «cajón de sastre»

Un Skill que mezcla review, release, depuración y el informe diario acaba siendo difícil de disparar y de mantener.

### Tratar MCP como la respuesta por defecto

Si la información se puede leer directamente del repositorio, no hace falta conectar una herramienta externa por parecer «avanzado». MCP amplía capacidades; no es un premio a la complejidad.

### Dejar que la memoria cargue hechos del equipo

Quien lo tenga en su cuenta lo pierde al irse o al cambiar de máquina. Esa información debe volver al repositorio.

## Orden de implantación recomendado

Si el equipo está aún desordenado, puedes convergirlo así:

1. Escribe primero un `AGENTS.md` mínimo viable
2. Convierte en Skill los flujos que se repitan más de tres veces
3. Introduce MCP solo cuando realmente necesites un sistema externo
4. Por último organiza memoria y preferencias personales

Así es más fácil estabilizar primero el **consenso de colaboración** y ampliar capacidades después.

## Lecturas relacionadas

- [Qué es AGENTS.md](/es/guide/customization/agents-md/what-is-agents-md/)
- [Memorias y contexto persistente](/es/guide/customization/memories-and-persistent-context/)
- [Resumen de Skills](/es/skills/overview/)
- [Resumen de MCP](/es/skills/mcp/mcp-overview/)
- [Cómo elegir el método de extensión](/es/skills/choosing-an-extension-method/)

## Referencias
- Documentación oficial de OpenAI Codex (según la versión actual)
---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Contrastado con los capítulos ya verificados de este manual sobre `AGENTS.md`, contexto, Skills, MCP y calidad; esta página conserva solo el marco estable de decisión: «requisitos temporales, reglas de proyecto, preferencias personales, encapsulación de flujos y capacidades externas deben vivir en capas distintas».  
**Última verificación:** 2026-07-26
