---
title: Instalar y activar la integración en el IDE
description: Cómo abrir Codex correctamente en editores de la familia VS Code, Xcode y los IDE de JetBrains.
locale: es
source_locale: zh-CN
source_revision: "85e1691"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 20
legacyVerification:
  status: verified
  products: IDE
  checkedAt: '2026-08-26'
reviewed_at: 2026-10-25
---
Las opciones para usar Codex en un IDE se dividen en dos tipos; sus métodos de instalación no son intercambiables:

| Editor | Acceso actual | Cómo abrirlo |
|---|---|---|
| Visual Studio Code, Cursor, Windsurf y VS Code Insiders | Extensión de Codex | Selecciona el icono de Codex o ejecuta `Codex: Open Codex Sidebar` |
| Xcode | Integración del coding assistant de Xcode | Inicia un chat y selecciona Codex agent |
| IDE de JetBrains | Integración de JetBrains AI Chat | Abre AI Chat y selecciona Codex |

Consulta [Editores compatibles](/es/guide/ide/supported-editors/) para ver el alcance completo del soporte y los puntos de acceso oficiales.

## Instalación y comprobación en la familia VS Code

1. Instala la extensión de Codex desde el enlace oficial de Marketplace.
2. Abre un proyecto de práctica en lugar de una ventana vacía.
3. Selecciona el icono de Codex. Si no aparece, ejecuta `Codex: Open Codex Sidebar` desde la paleta de comandos.
4. Autentícate con una cuenta de ChatGPT o una API key.
5. Inicia un chat, menciona el archivo abierto y haz una pregunta de solo lectura.

Prompt mínimo de comprobación:

```text
Lee únicamente el archivo que tengo abierto y no modifiques el código.
Explica en tres puntos su responsabilidad, entradas y salidas; cita un nombre de símbolo concreto en cada punto.
```

Si la respuesta se corresponde con el archivo y sus símbolos, el contexto del editor se ha transmitido correctamente. Antes de pasar a una tarea que escriba archivos, crea un punto de control en Git.

## Problemas frecuentes

- **No aparece la barra lateral**: ejecuta `Codex: Open Codex Sidebar` desde la paleta de comandos.
- **El contexto no corresponde**: comprueba que la ventana del proyecto, el archivo abierto y la selección pertenecen al repositorio previsto.
- **Se repite el inicio de sesión**: la CLI y el IDE comparten la autenticación almacenada en caché; comprueba la cuenta activa y vuelve a iniciar sesión.
- **La cadena de herramientas de Windows está en WSL**: activa `chatgpt.runCodexInWindowsSubsystemForLinux` si hace falta. Cambiar este ajuste recarga VS Code.
- **Un editor de terceros se comporta de otro modo**: comprueba primero que su versión sea compatible con la extensión de VS Code. No traslades los accesos de Xcode o JetBrains a otro editor.

Para los pasos detallados para principiantes, consulta [Instalar la extensión del IDE](/es/guide/getting-started/install-ide-extension/).

## Fuentes oficiales

- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)
- [Ajustes del IDE](https://learn.chatgpt.com/docs/ide/settings)
