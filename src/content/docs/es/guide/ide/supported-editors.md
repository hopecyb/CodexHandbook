---
title: Editores compatibles
description: Distingue entre la extensión compatible con VS Code y las integraciones de Xcode y JetBrains.
locale: es
source_locale: zh-CN
source_revision: "7b82896"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 10
legacyVerification:
  status: verified
  products: IDE
  basis: Se contrastaron los puntos de acceso específicos de VS Code, Cursor, Windsurf, VS Code Insiders, Xcode y los IDE de JetBrains con la página oficial actual de IDE, sin suponer que todas las integraciones ofrecen las mismas funciones.
  checkedAt: '2026-08-26'
reviewed_at: 2026-10-25
---
Codex llega a los principales editores de distintas maneras: la familia VS Code utiliza la extensión de Codex, mientras que Xcode y los IDE de JetBrains tienen sus propios puntos de integración.

## Formas de acceso actuales

| Editor | Acceso a Codex | Cómo abrirlo |
|---|---|---|
| Visual Studio Code | Extensión de Codex | Icono de Codex o `Codex: Open Codex Sidebar` |
| Cursor | Extensión de Codex compatible | Icono de Codex o paleta de comandos |
| Windsurf | Extensión de Codex compatible | Icono de Codex o paleta de comandos |
| Visual Studio Code Insiders | Extensión de Codex | Panel de extensiones y barra lateral de Codex |
| Xcode | Integración del coding assistant de Xcode | Inicia un chat y selecciona Codex Agent |
| IDE de JetBrains | Integración de JetBrains AI Chat | Abre AI Chat y selecciona Codex |

Los puntos de instalación y las versiones mínimas pueden cambiar. Parte siempre de la [página oficial de Codex IDE](https://learn.chatgpt.com/docs/codex/ide); no deduzcas que una extensión de terceros cuenta con soporte oficial solo porque tenga un nombre parecido.

## Para qué resulta más útil el acceso desde el IDE

- Añadir directamente a una pregunta el archivo abierto o una selección.
- Explicar o modificar una parte del código y continuar la conversación.
- Revisar resúmenes y cambios junto al código fuente.
- Mantener las tareas pequeñas en el entorno local y delegar las más grandes a flujos de trabajo más largos.

Ejemplo:

```text
Examina el bucle de reintentos de la selección actual.
Explica primero la condición de terminación y luego haz el cambio mínimo; modifica solo el archivo actual y su prueba correspondiente.
Al terminar, informa del diff y del comando de prueba. No actualices las dependencias.
```

## Mantener la coherencia en equipos con varios editores

1. Escribe los comandos de compilación, pruebas y formato en `AGENTS.md` del repositorio o en la guía de contribución.
2. Limita en el prompt los archivos que se pueden modificar, sin depender de un botón exclusivo de un IDE.
3. Para la aceptación final, revisa el diff de Git y ejecuta el mismo conjunto de pruebas, en lugar de conformarte con «funciona en mi IDE».
4. Escribe instrucciones específicas de cada IDE solo cuando sea necesario indicar controles exactos de la interfaz.

## Editores que no figuran en la lista

Usa preferentemente [Codex CLI](/es/guide/cli/) o la [aplicación de escritorio](/es/guide/desktop-app/). No fuerces la instalación de la extensión de VS Code en un editor incompatible ni des por hecho que una integración de terceros es una función oficial de OpenAI.

Consulta [Instalar la integración en el IDE](/es/guide/getting-started/install-ide-extension/) para ver los pasos de instalación y [Contexto del editor](/es/guide/ide/editor-context/) para aprender a usar el contexto.
