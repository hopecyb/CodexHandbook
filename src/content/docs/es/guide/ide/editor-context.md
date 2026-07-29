---
title: Contexto del editor
description: Cómo la extensión IDE pasa a Codex los archivos abiertos, el workspace y las reglas del proyecto.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

En el IDE, Codex no solo lee tu Prompt: también obtiene automáticamente el **estado del editor**. Esa es la ventaja central del IDE frente a la CLI. Entender de dónde viene el Contexto evita la frustración de «tenía el archivo abierto y no lo vio».

Codex en el IDE no mira solo lo que dices: también toma como referencia lo que estás viendo en el editor.

## Contenido de esta página

- Qué Contexto aporta el IDE de forma automática
- Cómo se superpone con archivos `@`, selección y `AGENTS.md`
- Cómo reducir ruido y mejorar la precisión

## Orígenes del Contexto (capas conceptuales)

| Origen | Quién lo controla | Contenido típico |
|---|---|---|
| Raíz del workspace | La carpeta que abres | Estructura del proyecto, `AGENTS.md`, archivos de configuración |
| Archivo abierto actual | Pestañas del editor | El código fuente que estás editando |
| Selección | El código que resaltas | Función, fragmento de error |
| `@` explícito | Rutas que mencionas con `@` en el chat | Archivos entre directorios, documentación |
| Reglas del proyecto | `AGENTS.md` etc. en el repo | Normas de código, comandos de test |

Prioridad y conflictos: [Prioridad del Contexto](/guide/context/context-priority/).

## Flujo de trabajo recomendado

1. **Abre el repositorio por la raíz del workspace**; no abras solo una subcarpeta (salvo excepciones de monorepo según la documentación del equipo)
2. Al cambiar lógica local, **selecciona primero el código relevante** y luego describe la Tarea → [Selección y archivos abiertos](/guide/ide/selected-code-and-open-files/)
3. En Tareas entre módulos, nombra archivos clave con `@`; no asumas que «ya lo encontrará solo»
4. En sesiones largas, [compacta el Contexto](/guide/context/compaction/) periódicamente o abre un hilo nuevo

## Diferencias con la CLI

| | Extensión IDE | CLI |
|---|---|---|
| Percepción de archivos | Fuerte (abrir ya es Contexto) | Hace falta `--cwd` y que las herramientas lean el disco |
| Selección | Soporte nativo | Hay que pegar o indicar la ruta |
| Encaja con | Cambios a nivel de línea, explicar código | Scripts, CI, entornos sin GUI |

## Preguntas frecuentes

### 1. Tenía el archivo abierto, ¿por qué no cambió lo que yo quería?

Porque «archivo abierto» no equivale a «el foco está lo bastante claro».

Si el alcance de la Tarea sigue difuso, puede mirar otro contenido relacionado o no atrapar el fragmento que más te importa.

### 2. ¿Cuantos más archivos abiertos, mejor?

Abrir demasiados archivos irrelevantes ensucia el Contexto y diluye el foco.

### 3. Si el IDE ya trae Contexto automático, ¿puedo dejar de escribir con claridad?

El Contexto automático ayuda, pero no sustituye la descripción de la Tarea.
Objetivo, límites y criterios de hecho siguen teniendo que quedar claros por tu parte.

El Contexto del IDE te ayuda, pero no adivina por ti; cuanto más preciso sea el alcance de archivos, más estable suele ser el resultado.

## Información sensible

No dejes `.env` con claves abiertos mucho tiempo en primer plano del editor; ver [Contexto sensible](/guide/context/sensitive-context/).

Anonimiza logs y datos de clientes antes de pegarlos; el IDE no juzga por ti el cumplimiento.

## Errores frecuentes

- Esperar leer `AGENTS.md` en modo de archivo único (sin workspace)
- Abrir una docena de archivos grandes irrelevantes y llenar la ventana de Contexto
- Decir oralmente «esta función» sin seleccionar ni hacer `@` al archivo

## Lista de verificación

- [ ] La raíz del workspace es la correcta
- [ ] 1–3 archivos relacionados con la Tarea están abiertos o con `@`
- [ ] Los comandos de test de `AGENTS.md` coinciden con la terminal del IDE

## Fuentes de referencia
- [Contexto de archivos y carpetas](/guide/context/file-and-folder-context/)
---

**Estado:** verified  
**Productos aplicables:** IDE  
**Base de verificación:** OpenAI Help Center sigue situando la IDE extension como una de las entradas principales junto a herramientas locales; esta página no asume botones de un editor concreto, sino que resume la metodología estable de que workspace, archivos abiertos, selección, archivos `@` y reglas del proyecto forman juntos el Contexto del IDE.  
**Última verificación:** 2026-07-26
