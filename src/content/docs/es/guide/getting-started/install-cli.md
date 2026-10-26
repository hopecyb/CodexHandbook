---
legacyVerification:
  status: "verified"
  products: "CLI"
  basis: "Contrastado con la guía de inicio rápido y la documentación de autenticación actuales de Codex CLI: instalador oficial para macOS/Linux, arranque con `codex`, inicio de sesión con ChatGPT y comando para consultar su estado. Para otros métodos de instalación, se remite a las pestañas oficiales actualizadas."
  checkedAt: "2026-08-26"
title: Instalar la CLI
description: Instala Codex CLI y comprueba la versión, el estado de inicio de sesión y una primera tarea en un repositorio.
locale: es
source_locale: zh-CN
source_revision: '564bd75'
translation_status: reviewed
translated_at: "2026-09-20"
sidebar:
  order: 40
reviewed_at: '2026-10-25'
---

Codex CLI permite explorar, modificar, probar y revisar sin salir del terminal. La página oficial de instalación ofrece opciones para macOS/Linux, Windows, npm y Homebrew. Elige la que corresponda a tu sistema y a tu forma de gestionar el software.

## Instalador independiente oficial para macOS y Linux

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

Para actualizar la CLI, vuelve a ejecutar el mismo comando oficial. Si usas Windows, npm o Homebrew, selecciona la pestaña correspondiente en la [página oficial de Codex CLI](https://learn.chatgpt.com/docs/codex/cli). No apliques sin más el comando de macOS/Linux a todos los sistemas.

## Comprobaciones después de instalar

Abre una nueva ventana del terminal y, dentro de un repositorio de práctica, ejecuta:

```bash
codex --version
codex login status
```

Si aún no has iniciado sesión:

```bash
codex login
```

Después de autorizar el acceso en el navegador, inicia una sesión interactiva en el directorio del repositorio:

```bash
codex
```

La primera tarea puede ser solo de lectura:

```text
Todavía no modifiques archivos. Explica cómo se instalan las dependencias, cómo se ejecutan las pruebas y cómo se compila este proyecto. Indica las rutas de los archivos que has consultado.
```

## Resolver problemas por orden

1. Si no se encuentra `codex --version`, vuelve a abrir el terminal y comprueba el `PATH` de la shell actual.
2. Si el comando existe pero no puedes usar Codex, ejecuta `codex login status` para distinguir un problema de instalación de uno de autenticación.
3. Si está activa una identidad equivocada, ejecuta `codex logout` e inicia sesión de nuevo.
4. Si el entorno de la empresa rechaza el acceso, comprueba el workspace, el método de inicio de sesión y la configuración administrada. No eludas la política con credenciales personales.

No pegues una API key en el historial de la shell, en incidencias ni en conversaciones. Si necesitas iniciar sesión con una API key, sigue el método de entrada estándar descrito en [Inicio de sesión y autenticación](/es/guide/getting-started/sign-in-and-authentication/).

Continúa con el [modo interactivo de la CLI](/es/guide/cli/interactive-mode/). Para otros problemas, consulta [Resolución de problemas de la CLI](/es/guide/cli/troubleshooting/).
