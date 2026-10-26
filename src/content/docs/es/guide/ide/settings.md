---
title: Ajustes de la extensión para IDE
description: Distingue entre la configuración compartida del agente y los ajustes de comportamiento de los editores basados en VS Code.
locale: es
source_locale: zh-CN
source_revision: "6f28910"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 80
legacyVerification:
  status: verified
  products: IDE
  checkedAt: '2026-08-26'
reviewed_at: 2026-10-25
---
En el IDE hay dos niveles de ajustes:

| Nivel | Ubicación | Qué controla |
|---|---|---|
| Ajustes del agente de Codex | `config.toml` | Modelo, esfuerzo de razonamiento, permisos, sandbox, MCP y personalización; se comparten con la CLI |
| Ajustes del editor | `chatgpt.*` en el sistema de ajustes de VS Code | Barra lateral, cola de mensajes, tecla de envío, presentación de la revisión, idioma y fuentes |

Las reglas del repositorio deben seguir en `AGENTS.md`, no en los ajustes del editor de una persona.

## Abrir los ajustes

En la barra lateral de Codex, selecciona el icono de engranaje y luego **Codex Settings**. Puedes cambiar las opciones habituales del agente en el panel o seleccionar **Open config.toml** para editar la capa de configuración que está activa.

Para cambiar el comportamiento del editor, busca `@ext:openai.chatgpt`, `Codex` o el nombre de una clave concreta en los ajustes del editor.

## Ajustes que conviene conocer primero

| Clave | Valor predeterminado | Cuándo cambiarlo |
|---|---:|---|
| `chatgpt.openOnStartup` | `false` | Si quieres que la extensión enfoque la barra lateral al iniciarse |
| `chatgpt.followUpQueueMode` | `queue` | Cámbialo a `steer` para que los mensajes nuevos redirijan la ejecución en curso |
| `chatgpt.composerEnterBehavior` | `enter` | Si envías por error prompts de varias líneas con frecuencia |
| `chatgpt.reviewDelivery` | `inline` | Usa `detached` si quieres que `/review` aparezca en un chat independiente |
| `chatgpt.localeOverride` | Automático | Si necesitas fijar el idioma de la interfaz |
| `chatgpt.runCodexInWindowsSubsystemForLinux` | `false` | Actívalo si el repositorio y las herramientas están en WSL2 |

`chatgpt.cliExecutable` sirve únicamente para desarrollar Codex CLI. Los usuarios habituales no deben reemplazar manualmente el ejecutable incluido con la extensión, porque algunas funciones podrían dejar de funcionar.

## Cómo entender la prioridad de la configuración

- Las políticas de la organización fijan límites que no se pueden superar.
- `config.toml` define el comportamiento predeterminado del agente.
- `AGENTS.md` aporta reglas para el repositorio y sus directorios.
- Los ajustes del editor solo modifican la experiencia en el IDE.
- Un prompt puntual añade el objetivo y los límites de la tarea actual.

Si un ajuste parece no surtir efecto, comprueba primero en qué nivel lo cambiaste y después si una política de nivel superior lo limita. Encontrarás el modelo completo en [Ámbito y prioridad](/es/guide/customization/agents-md/scope-and-precedence/).

## Comprobar los cambios

Cambia un solo ajuste cada vez. Por ejemplo, después de establecer `chatgpt.reviewDelivery` en `detached`, ejecuta `/review` en un repositorio Git y comprueba si se abre un chat de revisión independiente. Anota el valor anterior; si el resultado no es el esperado, restáuralo y vuelve a cargar el editor.

## Fuentes oficiales

- [Referencia de ajustes de Codex IDE](https://learn.chatgpt.com/docs/ide/settings)
- [Fundamentos de configuración](https://learn.chatgpt.com/docs/config)
