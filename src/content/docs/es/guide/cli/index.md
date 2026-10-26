---
legacyVerification:
  status: verified
  products: CLI
  basis: El material de introducción a la CLI de OpenAI Help Center sigue describiendo Codex CLI como entrada de terminal y distingue el uso interactivo de flujos de línea de comandos más automatizados; esta página solo sirve de navegación por el capítulo CLI y resume esos dos modos, sin atarse a parámetros ni comandos de instalación concretos.
  checkedAt: '2026-07-26'
title: CLI
description: Guía básica para usar Codex desde la línea de comandos.
sidebar:
  order: 11
locale: es
source_locale: zh-CN
source_revision: "a80ef7e"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-25
---

La CLI encaja con usuarios de terminal y con la integración en scripts y CI.

La primera vez que veas «CLI», puedes entenderla como la entrada para colaborar con Codex directamente en la terminal, sin interfaz gráfica.

Resulta especialmente útil en estos casos:

- Quien está acostumbrado a la línea de comandos
- Quien quiere combinarla con scripts
- Quien necesita integrarla en CI o automatizaciones

Para un principiante que no domina la terminal, la CLI no es una primera parada obligatoria; pero si ya sabes hacer `cd`, `ls` y ejecutar comandos en el directorio del proyecto, es muy eficiente.

- [Instalación y actualizaciones](/es/guide/cli/installation-and-updates/)
- [Modo interactivo](/es/guide/cli/interactive-mode/)
- [Modo no interactivo](/es/guide/cli/non-interactive-mode/)
- [Configuración de la CLI](/es/guide/cli/configuration/)
- [Comandos y atajos](/es/guide/cli/commands-and-shortcuts/)
- [Aprobaciones y sandbox](/es/guide/cli/approvals-and-sandbox/)
- [Resolución de problemas](/es/guide/cli/troubleshooting/)

La referencia completa de comandos está en [Referencia de comandos CLI](/es/guide/reference/commands/).

![Ilustración: un pequeño asistente sentado sobre una ventana de terminal escribe comandos, conectada a scripts y pruebas](/illustrations/cli.webp)

## Qué distinguir en el primer uso

En la primera fase, distingue estos dos modos:

1. **Modo interactivo**: conversar con Codex directamente en la terminal
2. **Modo no interactivo**: tratar Codex como un comando en scripts o CI

Si es la primera prueba, suele ir mejor el modo interactivo. Cuando necesites automatizar, mira entonces el modo no interactivo.
