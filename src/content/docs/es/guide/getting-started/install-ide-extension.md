---
legacyVerification:
  status: "verified"
  products: "IDE"
  basis: "La guía oficial actual de inicio rápido para IDE enumera VS Code, Cursor, Windsurf y VS Code Insiders, además de las integraciones propias de Xcode y JetBrains. Esta página separa las instrucciones según esas dos formas de acceso."
  checkedAt: "2026-08-26"
title: Instalar la integración con el IDE
description: Habilita Codex en editores compatibles con VS Code, Xcode o IDE de JetBrains.
locale: es
source_locale: zh-CN
source_revision: e8f88ec
translation_status: draft
translated_at: "2026-09-20"
sidebar:
  order: 50
---

Actualmente no hay una única forma de instalar la integración con el IDE:

| IDE | Instalación o activación |
|---|---|
| Visual Studio Code, Cursor, Windsurf, VS Code Insiders | Instalar o habilitar la extensión Codex |
| Xcode | Seleccionar Codex Agent en el coding assistant de Xcode |
| IDE de JetBrains | Seleccionar Codex en AI Chat |

Entra por la opción oficial para tu IDE desde la [página oficial de Codex IDE](https://learn.chatgpt.com/docs/codex/ide). No deduzcas la posición de los botones a partir de capturas de otro editor.

## Editores compatibles con VS Code

1. Instala la extensión Codex desde su entrada oficial en el Marketplace.
2. Abre la raíz del workspace de un proyecto real.
3. Selecciona el icono de Codex. Si no aparece, abre la Command Palette y ejecuta `Codex: Open Codex Sidebar`.
4. Inicia sesión con ChatGPT o una API key.

## Xcode y JetBrains

- Xcode: abre el coding assistant, crea una conversación y selecciona Codex como Agent.
- JetBrains: abre AI Chat y selecciona Codex.

Estas opciones las ofrece cada IDE. Su interfaz no será exactamente igual a la de la extensión de VS Code.

## Comprobar el contexto después de instalar

Abre un archivo de código, selecciona un fragmento corto y pregunta:

```text
Explica solo las entradas, las salidas y las rutas de error de la selección actual, sin modificar archivos. Cita los nombres de las funciones correspondientes.
```

Si la respuesta no se relaciona claramente con el fragmento seleccionado, comprueba primero:

- que está abierta la raíz del proyecto correcto;
- que el archivo o la selección se han adjuntado al composer;
- que la identidad y el workspace activos son los esperados;
- que no hay otra extensión de IA o un atajo de teclado que interfiera.

Después, sigue el [flujo de tareas locales en el IDE](/es/guide/ide/local-task-workflow/). Para ver todo el ámbito de compatibilidad, consulta [Editores compatibles](/es/guide/ide/supported-editors/).
