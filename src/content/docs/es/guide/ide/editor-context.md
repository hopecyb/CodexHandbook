---
title: Contexto del editor
description: Cómo la extensión para IDE transmite a Codex los archivos abiertos, el espacio de trabajo y las reglas del proyecto.
locale: es
source_locale: zh-CN
source_revision: "6d1b248"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 30
legacyVerification:
  status: verified
  products: IDE
  basis: 'El Help Center de OpenAI sigue presentando la extensión para IDE como una de las principales formas de trabajar con herramientas locales. Esta página no presupone botones concretos de un editor: describe el método estable de combinar el espacio de trabajo, los archivos abiertos, las selecciones, las referencias @ y las reglas del proyecto.'
  checkedAt: '2026-07-26'
reviewed_at: 2026-10-25
---
En el IDE, Codex no solo lee tu prompt: también recibe automáticamente el **estado del editor**. Esta es una de las principales ventajas del IDE frente a la CLI. Entender de dónde procede el contexto evita la frustración de pensar «el archivo estaba abierto, ¿por qué no lo vio?».

Codex en el IDE no se limita a lo que le dices; también tiene en cuenta el contenido que estás viendo en el editor.

## Contenido de esta página

- Qué contexto adjunta automáticamente el IDE.
- Cómo se combina con los archivos mencionados mediante `@`, las selecciones y `AGENTS.md`.
- Cómo reducir el ruido y hacer que Codex se centre en lo relevante.

## Flujo de trabajo recomendado

1. **Abre el repositorio desde la raíz del espacio de trabajo**, no solo una subcarpeta (consulta las indicaciones del equipo para los monorepos).
2. Si vas a cambiar lógica local, **selecciona primero el código relevante** y después describe la tarea → [Selecciones y archivos abiertos](/es/guide/ide/selected-code-and-open-files/).
3. En tareas que abarcan varios módulos, menciona los archivos importantes con `@` en lugar de suponer que Codex los encontrará por sí solo.
4. En sesiones largas, [compacta el contexto](/es/guide/context/compaction/) periódicamente o abre una conversación nueva.

## Diferencias con la CLI

| | Extensión para IDE | CLI |
|---|---|---|
| Conocimiento de archivos | Alto: los archivos abiertos se incluyen en el contexto | Requiere `--cd` / `-C` y herramientas para leer archivos del disco |
| Selección | Compatibilidad integrada | Hay que pegarla o indicar la ruta |
| Más útil para | Cambios a nivel de línea y explicación de código | Scripts, CI y entornos sin interfaz gráfica |

## Preguntas frecuentes

### 1. Si el archivo estaba abierto, ¿por qué no lo modificó como esperaba?

Porque «tener un archivo abierto» no siempre deja suficientemente claro dónde debe centrarse.

Si el alcance de la tarea sigue siendo ambiguo, Codex puede consultar otro contenido relacionado o pasar por alto el fragmento que más te importa.

### 2. ¿Es mejor tener más archivos abiertos?

Abrir demasiados archivos irrelevantes añade ruido al contexto y diluye lo importante.

### 3. Si el IDE aporta contexto automáticamente, ¿ya no necesito explicar la tarea?

El contexto automático ayuda, pero no sustituye las instrucciones de la tarea. Debes indicar el objetivo, las restricciones y los criterios de finalización.

El contexto del IDE ayuda a Codex, pero no adivina por ti. Cuanto más preciso sea el conjunto de archivos, más estables suelen ser los resultados.

## Información sensible

No mantengas abierto en primer plano un archivo `.env` que contenga claves. Consulta [Contexto sensible](/es/guide/context/sensitive-context/).

Elimina los datos sensibles de los registros y los datos de clientes antes de pegarlos; el IDE no puede determinar automáticamente si cumplen las normas aplicables.

## Errores frecuentes

- Esperar que se lea `AGENTS.md` cuando solo hay un archivo abierto y ningún espacio de trabajo.
- Abrir muchos archivos grandes sin relación con la tarea y ocupar la ventana de contexto.
- Decir «esta función» sin seleccionarla ni mencionar su archivo con `@`.

## Lista de comprobación

- [ ] La raíz del espacio de trabajo es la correcta.
- [ ] Hay entre uno y tres archivos relevantes abiertos o mencionados con `@`.
- [ ] Los comandos de prueba de `AGENTS.md` coinciden con los del terminal del IDE.

## Referencia

- [Contexto de archivos y carpetas](/es/guide/context/file-and-folder-context/)
