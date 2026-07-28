---
title: CLI
description: Explicación mínima usable de la entrada por línea de comandos.
sidebar:
  order: 11
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

La CLI encaja con usuarios de terminal y con la integración en scripts y CI.

La primera vez que veas «CLI», puedes entenderla como la entrada para colaborar con Codex directamente en la terminal, sin interfaz gráfica.

Se inclina más a estos escenarios:

- Quien está acostumbrado a la línea de comandos
- Quien quiere combinarla con scripts
- Quien necesita enganchar CI / automatización

Para un principiante que no domina la terminal, la CLI no es una primera parada obligatoria; pero si ya sabes hacer `cd`, `ls` y ejecutar comandos en el directorio del proyecto, es muy eficiente.

- [Instalación y actualizaciones](/guide/cli/installation-and-updates/)
- [Modo interactivo](/guide/cli/interactive-mode/)
- [Modo no interactivo](/guide/cli/non-interactive-mode/)
- [Configuración de la CLI](/guide/cli/configuration/)
- [Comandos y atajos](/guide/cli/commands-and-shortcuts/)
- [Aprobación y Sandbox](/guide/cli/approvals-and-sandbox/)
- [Resolución de problemas](/guide/cli/troubleshooting/)

La referencia completa de comandos está en [Referencia de comandos CLI](/guide/reference/commands/).

## Qué distinguir en el primer uso

En la primera fase, distingue estos dos modos:

1. **Modo interactivo**: conversar con Codex directamente en la terminal
2. **Modo no interactivo**: tratar Codex como un comando en scripts o CI

Si es la primera prueba, suele ir mejor el modo interactivo. Cuando necesites automatizar, mira entonces el modo no interactivo.

---

**Estado:** verified  
**Productos aplicables:** CLI  
**Base de verificación:** El material de introducción a la CLI de OpenAI Help Center sigue describiendo Codex CLI como entrada de terminal y distingue el uso interactivo de flujos de línea de comandos más automatizados; esta página solo navega el capítulo CLI y resume esos dos modos, sin atarse a parámetros ni comandos de instalación concretos.  
**Última verificación:** 2026-07-26
