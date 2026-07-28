---
title: Matriz de Permisos
description: Tabla conceptual de tipos de operación de Codex, puntos de Aprobación y diferencias entre productos.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

La «matriz de Permisos» también sirve al usuario cotidiano. Explica sobre todo: con la misma frase, por qué la reacción de Codex cambia según la entrada.

Operaciones distintas, en entradas de producto distintas, disparan comportamientos distintos de Aprobación y Sandbox. Esta matriz ayuda al equipo a alinear «qué debe confirmar una persona»; es una **tabla de contraste de riesgo y comportamiento**, no un texto de cumplimiento legal. Los valores por defecto los marcan la [documentación oficial](https://developers.openai.com/codex) y la política gestionada por la organización.

## Qué mira esta tabla

La primera vez que te encuentras con Aprobación, restricción o rechazo, sueles pensar:

- El modelo se ha roto
- Me expresé mal
- ¿Por qué ayer sí y hoy no?

Muchas diferencias vienen en realidad de la entrada actual, la política y el nivel de riesgo.

## Punto central

No todo «ayúdame a hacer esto» es el mismo riesgo.

Por ejemplo:

- Leer un archivo
- Cambiar un archivo
- Correr un comando
- Conectar a internet
- Hacer push de código

Parecen «ejecutar la Tarea», pero el riesgo no es el mismo nivel. Por eso el producto añade Aprobación, límites y bloqueos distintos en sitios distintos.

Base conceptual: [Permisos y Aprobaciones](/guide/foundations/permissions-and-approvals/)

## Niveles de riesgo de operación

| Nivel | Ejemplo de operación | Expectativa por defecto |
|---|---|---|
| L0 lectura | Leer texto del proyecto, buscar código | Suele automático |
| L1 escritura | Cambiar archivos del proyecto, formatear | A menudo confirmación o automático dentro del Sandbox |
| L2 ejecución | Shell, gestor de paquetes, pruebas | Suele requerir confirmación |
| L3 salida a red | curl, npm registry, API | Confirmación estricta o prohibido |
| L4 fuera de alcance | Escribir fuera del proyecto, git push, borrar BD | Debe bloquearse o confirmarse con fuerza |
| L5 GUI | Computer Use, diálogos del sistema | Máxima sensibilidad; a menudo desactivado por defecto |

## Cómo leerla

La primera vez no hace falta memorizar cada celda. Úsala así:

- Juzga a qué clase de operación pertenece esta Tarea
- Mira si esa operación suele bloquearse en la entrada actual
- Decide si completar la explicación, esperar Aprobación o cambiar a una entrada más adecuada

La tabla también sirve para anticipar.

## Matriz (concepto — valores típicos por defecto)

**Y** = en casos habituales hace falta consentimiento explícito o está limitada por política · **A** = puede ser automática con configuración de confianza · **—** = depende de versión/política · **N** = normalmente no permitido

| Operación | App de escritorio | CLI interactivo | IDE | Cloud |
|---|---|---|---|---|
| Leer archivos del repo | A | A | A | A |
| Escribir archivos dentro del repo | Y/A | Y | Y/A | Y/A |
| Correr comandos de prueba | Y/A | Y | Y/A | Y/A |
| Instalar dependencias globales | Y | Y | Y | Y |
| Acceder a internet público | Y | Y | Y | Y |
| Leer archivos sensibles como `.env` | Y | Y | Y | Y |
| `git commit` | Y | Y | Y | Y |
| `git push` | Y | Y | Y | Y |
| Escribir fuera del proyecto | N/Y | N/Y | N/Y | N |
| Herramientas MCP de terceros | Y | Y | Y | Y |
| Abrir URL en el navegador | Y | — | — | Y |
| Computer Use | Y/— | — | — | — |

Notas:

- **Cloud** corre en un Sandbox remoto y no puede acceder al sistema de archivos de tu portátil
- **IDE** es similar a la App, pero la forma de Aprobación en la UI es distinta
- La **política gestionada** puede forzar todo a Y o N

## Malentendidos frecuentes

### 1. Poder o no hacerlo no depende solo de si el modelo «quiere»

Muchas veces lo que más afecta al resultado es:

- Si la entrada actual lo permite
- Si la política actual lo deja pasar
- Si el Permiso actual basta

### 2. Cloud no es necesariamente más libre ni necesariamente más seguro

La seguridad depende de si Sandbox, red, Secrets, protección de ramas y política de Aprobación van juntos.

### 3. Escribir reglas no hace desaparecer el riesgo solo

Reglas de documentación, política de Aprobación, límites técnicos y revisión humana suelen usarse juntos.

### 4. Que te bloqueen no implica que hayas hecho mal

A menudo solo indica:

- Este paso tiene más riesgo
- La entrada actual no encaja para hacerlo
- Hace falta Aprobación más explícita o un enfoque más ligero

## Cómo aterrizan configuración y documentación

| Mecanismo | Función |
|---|---|
| Modo Sandbox | Limitar L3/L4 aunque el Agent «quiera» hacerlo |
| Política de Aprobación | Controlar si L1–L3 muestran diálogo |
| `AGENTS.md` | Declarar prohibiciones a nivel de proyecto (p. ej. prohibir push) |
| Protección de ramas | En GitHub, bloquear merge sin review |
| Hooks | Comprobación automática antes del commit (véase la página de Hooks en la hoja de ruta) |

[Patrones de Aprobación humana](/cases/workflows/human-approval-patterns/) · [Referencia de configuración](/guide/reference/configuration-reference/)

## Cuándo elevar la alerta

Si una acción cumple cualquiera de estas, eleva la alerta:

- Va a cambiar archivos
- Va a correr comandos
- Va a acceder a internet
- Va a tocar información sensible
- Va a enviar el resultado fuera del repo

No hace falta recordar si es L-qué; sí saber que ya no es un riesgo de «mirar un momento».

La matriz de Permisos es sobre todo una herramienta de anticipación: por qué este paso se bloquearía, si conviene más cautela, o si hay un enfoque más ligero.

## Estrategia recomendada de equipo (ejemplo)

| Escenario | Sugerencia |
|---|---|
| Repo de práctica open source | Sandbox estándar + permitir comandos de prueba |
| Monorepo de empresa | Estricto + prohibir push + PR con review humana obligatoria |
| CI `codex exec` | Solo lectura o directorio limitado + sin push |
| Cloud relacionado con producción | Secrets al mínimo + protección de ramas |

## Malentendidos habituales

| Malentendido | Hecho |
|---|---|
| «Cloud es más seguro» | Depende de secrets, review y política de red |
| «El IDE no corre shell» | Puede ejecutarlo vía Herramientas del Agent |
| «Si escribí prohibir push, seguro que no hace push» | Hace falta Sandbox + Permisos de Git + review humana en capas |

---

**Estado:** outdated  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Nota de revisión:** La idea de niveles de riesgo sigue siendo útil, pero la matriz hace bastantes supuestos concretos sobre comportamiento por defecto, puntos de Aprobación y capacidades disponibles por entrada; sin documentación oficial actual de matriz de Permisos por entrada, esta tabla no debería seguir marcada como `review` o `verified`.  
**Última verificación:** 2026-07-26
