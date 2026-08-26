---
title: Cómo elegir un método de extensión
description: Elige entre prompts, AGENTS.md, Skills, MCP, Hooks, Plugins o Scheduled tasks según lo que deba persistir.
locale: es
source_locale: zh-cn
source_revision: 461cac4
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

El error más común es elegir primero el nombre de una tecnología y buscar después un problema al que aplicarla. Pregunta antes: **¿qué quiero conservar o qué debería suceder automáticamente?**

Los nombres que más suelen confundirse son:

- prompts;
- AGENTS.md;
- Skills;
- MCP;
- Plugins;
- Scheduled tasks.

A veces basta con un prompt; los mecanismos más complejos solo tienen sentido bajo ciertas condiciones.

## Diagrama de decisión

![Diagrama para elegir un método de extensión de Codex](/diagrams/extension-selection-map-es.svg)

No es un árbol de decisiones excluyente. Un flujo maduro puede combinar `AGENTS.md`, un Skill y MCP; el diagrama ayuda a no asignar a cada mecanismo una responsabilidad inadecuada.

## Siete preguntas

### 1. ¿Solo afecta a esta tarea?

Usa un prompt. Define el objetivo, las entradas, el alcance, la aceptación y los permisos. Es la opción de menor coste y la que permite observar con más facilidad el problema real.

### 2. ¿Debe respetarse en cada ejecución dentro de este repositorio?

Usa `AGENTS.md` para los comandos de prueba, el estilo, los directorios prohibidos y las reglas de instalación. No conviertas una necesidad puntual en una regla persistente.

### 3. ¿Una clase de tareas tiene pasos y resultados estables?

Crea un Skill con instrucciones reutilizables y, si hace falta, plantillas, referencias, recursos o scripts. Sigue experimentando con prompts mientras los criterios de éxito no sean estables.

### 4. ¿Necesitas datos o acciones externas?

Evalúa MCP o un Connector. Enumera las herramientas y los datos necesarios, empieza con solo lectura y privilegio mínimo, y evita una conexión adicional si bastan los archivos o comandos locales.

### 5. ¿Necesitas comprobar algo en un punto fijo del ciclo de vida?

Usa un Hook, por ejemplo para aplicar una política antes de un comando, examinar un parche después de escribir o registrar un resumen final. Prueba los timeouts, fallos y falsos positivos.

### 6. ¿Necesitas distribuir un conjunto de capacidades?

Usa un Plugin para agrupar Skills, conectores, MCP, Hooks y plantillas de Scheduled tasks. La instalación no convierte automáticamente en fiables sus conexiones, scripts o Hooks.

### 7. ¿La tarea ya funciona de forma estable manualmente y debe repetirse por tiempo?

Crea una Scheduled task solo después de verificar el prompt, el Skill, los permisos y el formato de salida. Examina las primeras ejecuciones y conserva puertas humanas para publicar o fusionar.

## Correspondencia de escenarios

| Escenario | Combinación recomendada |
|---|---|
| Unificar pruebas y reglas de commit | AGENTS.md |
| Lista de comprobación antes de fusionar | Skill `pr-review` |
| Obtener contexto de una incidencia de Linear | MCP más prompt de tarea |
| Informe semanal de dependencias | Scheduled task → borrador de issue |
| Buscar credenciales en un parche después de escribir | Hook o CI; ambos si el riesgo es alto |
| Distribuir el flujo de revisión y herramientas de GitHub | Plugin, después de revisar permisos y Hooks |
| Informe semanal de riesgo de dependencias | Skill verificado + Scheduled task + revisión humana |
| Revisiones paralelas de seguridad, pruebas y mantenibilidad | Subagents de solo lectura; el Agent principal consolida |

## Dimensiones de coste

| Mecanismo | Coste de creación | Coste de mantenimiento | Riesgo de seguridad |
|---|---|---|---|
| Prompt | Bajo | Bajo | Bajo |
| AGENTS.md | Medio | Medio | Bajo |
| Skill | Medio | Medio | Bajo-medio |
| MCP | Alto | Alto | Medio-alto |
| Hook | Medio | Medio-alto | Medio-alto |
| Plugin | Bajo al instalar / alto al crear | Medio-alto | Medio-alto |
| Scheduled task | Medio | Alto | Alto |

## Antipatrones

- **Inflación de Skills:** instalar decenas con descripciones que se solapan y compiten entre sí.
- **MCP como solución universal:** integrar una API cuando `git` ya resuelve el problema.
- **Programación sin aceptación:** editar código de forma desatendida sin evidencias, condición de parada ni revisión humana.
- **Rehacer conectores oficiales:** construir un MCP propio sin necesidad.
- **Regla mal ubicada:** incluir una necesidad puntual en `AGENTS.md` y arrastrarla a tareas posteriores.
- **Sobrecarga de Hooks:** ejecutar lógica de negocio lenta en cada llamada a una herramienta.

## Preguntas habituales

### 1. ¿Debo instalar Plugins y conectar MCP desde el principio?

No. Muchos problemas se resuelven con prompts claros, un alcance bien definido y `AGENTS.md`.

### 2. ¿Cuántas repeticiones justifican crear un Skill?

No hay un número fijo. Importan más la estabilidad de los pasos, la claridad de los criterios de éxito y el coste de los fallos.

### 3. ¿Por dónde suele empezar una persona nueva?

Normalmente por:

- prompts;
- `AGENTS.md`;
- Skills.

MCP y la automatización desatendida rara vez son el punto de partida.

Lo importante no es lo avanzado que parezca el mecanismo, sino que la responsabilidad encaje, el permiso sea mínimo y el resultado pueda verificarse.

## Ejercicio mínimo

Para revisar el diff antes de fusionar:

1. Ejecuta dos veces un prompt y anota las comprobaciones que tienes que repetir.
2. Incluye en `AGENTS.md` los comandos fijos del repositorio y la exclusión de archivos generados.
3. Define en un Skill `pr-review` los pasos de revisión, los niveles de gravedad y el formato de salida.
4. Añade MCP o un Connector solo si necesitas comentarios de GitHub o el estado de CI.
5. Añade un Hook o una Scheduled task solo para comprobaciones automáticas en momentos fijos.
6. Crea un Plugin únicamente cuando varios equipos deban instalar el conjunto.

Por cada capa añadida, vuelve a preguntar: qué acceso nuevo incorpora, cómo se verifica y cómo se desactiva o revierte.

## Lecturas relacionadas

- [Mapa de capacidades](/es/skills/capability-map/)
- [Patrones de aprobación humana](/es/cases/workflows/human-approval-patterns/)
- [Convertir un flujo de trabajo en un Skill](/es/cases/workflows/turn-a-workflow-into-a-skill/)

## Fuentes oficiales

- [Skills y Plugins](https://learn.chatgpt.com/docs/skills-and-plugins)
- [Crear Skills de Codex](https://learn.chatgpt.com/docs/build-skills)
- [MCP de Codex](https://learn.chatgpt.com/docs/extend/mcp)
- [Hooks de Codex](https://learn.chatgpt.com/docs/hooks)
- [Plugins de Codex](https://learn.chatgpt.com/docs/plugins)
- [Scheduled tasks](https://learn.chatgpt.com/docs/automations)

---

**Estado:** verified
**Productos aplicables:** ChatGPT Web / App de escritorio / Codex CLI / IDE (la compatibilidad varía según el mecanismo)
**Base de verificación:** Comparado con la documentación oficial de OpenAI sobre Skills, Plugins, MCP, Hooks y Scheduled tasks el 2026-08-25.
**Última verificación:** 2026-08-25
