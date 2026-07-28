---
title: Flujo de Tareas locales
description: Iniciar, seguir y completar Tareas locales de Codex en el IDE a partir de archivos abiertos y la selección.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

La Tarea local en el IDE es el ciclo «**abrir → seleccionar → describir → revisar → probar**», pensado para cambios pequeños y frecuentes. Aquí va el camino práctico más habitual; el detalle de Contexto está en [Selección y archivos abiertos](/guide/ide/selected-code-and-open-files/).

## Flujo recomendado

1. **Abre la raíz del workspace** (todo el repositorio, no un solo archivo)
2. Abre los archivos relevantes; si hace falta, [selecciona un fragmento de código](/guide/ide/selected-code-and-open-files/)
3. En el panel de Codex deja claro: objetivo, restricciones y [definición de hecho](/prompts/define-done/)
4. Si la Tarea es compleja, primero [pide un plan](/prompts/ask-for-a-plan/) y luego ejecuta
5. En la vista de diff / inline, [revisa los cambios](/guide/ide/reviewing-changes/)
6. En la terminal del IDE ejecuta los tests del proyecto
7. Tú haces `git commit` (salvo que el equipo autorice explícitamente commits del Agent)

## Prompt de ejemplo (ilustrativo)

```text
Solo modificar src/auth/login.ts y los tests correspondientes.
Objetivo: corregir el 500 al enviar email vacío; devolver 400 + mensaje de error.
Prohibido: tocar package-lock, git push.
Hecho: ejecutar npm test -- auth y listar un resumen de cambios.
```

## Cuándo cambiar a otra entrada

| Situación | Sugerencia |
|---|---|
| Multitarea en paralelo, árboles de trabajo | [App de escritorio](/guide/desktop-app/) |
| Scripts / CI | [CLI no interactiva](/guide/cli/non-interactive-mode/) |
| Entorno remoto estandarizado, abrir PR | [Tareas Cloud en el IDE](/guide/ide/cloud-task-workflow/) |

## Errores frecuentes

- No abrir el workspace y no poder leer `AGENTS.md`
- Aceptar de un golpe todas las sugerencias inline
- Hacer commit sin ejecutar tests

Contexto: [Contexto del editor](/guide/ide/editor-context/) · [Contexto de archivos y carpetas](/guide/context/file-and-folder-context/)

## Preguntas frecuentes

### 1. ¿Por qué se insiste tanto en «abrir la raíz del workspace»?

Porque gran parte del Contexto de la extensión IDE depende de que abras el proyecto completo, no un archivo suelto.

### 2. Si en el IDE es muy cómodo cambiar, ¿puedo revisar menos?

No.

Cuanto más cómodo, más fácil es aceptar por inercia; por eso conviene mantener el hábito de comprobar.

### 3. ¿Qué Tarea conviene la primera vez?

Algo así:

- Solo 1 o 2 archivos
- El resultado se entiende de un vistazo
- Tras el cambio es fácil probar o previsualizar

Las Tareas locales del IDE van bien para avanzar a pasos cortos, pero «cómodo» no significa saltarse revisión y Verificación.

---

**Estado:** verified  
**Productos aplicables:** IDE  
**Base de verificación:** El centro de ayuda de OpenAI sigue describiendo la IDE extension como cliente que trabaja con el repositorio de código local; este flujo se centra en el ciclo estable «abrir workspace, acotar archivos, describir Tarea, revisar diff, ejecutar tests, commit humano», sin depender de una UI concreta de extensión.  
**Última verificación:** 2026-07-26
