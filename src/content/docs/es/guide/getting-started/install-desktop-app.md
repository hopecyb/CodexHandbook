---
title: Instalar la aplicación de escritorio
description: Instala la aplicación de escritorio de ChatGPT y abre en ella un espacio de trabajo de Codex.
locale: es
source_locale: zh-CN
source_revision: 974842f
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 30
---

En este manual, «aplicación de escritorio» se refiere al **espacio de trabajo de Codex dentro de la aplicación de escritorio de ChatGPT**. OpenAI ofrece versiones para macOS, Windows y Linux.

## Pasos de instalación

1. Abre la [documentación oficial de la aplicación de escritorio de ChatGPT](https://learn.chatgpt.com/docs/app).
2. Descarga desde el sitio oficial el instalador que corresponda a tu sistema operativo.
3. Instala y abre ChatGPT; inicia sesión con tu cuenta de ChatGPT u otro método disponible.
4. Inicia una conversación, crea un proyecto o abre una carpeta de práctica.
5. Entra en Codex, crea una tarea y describe el resultado que necesitas.

No descargues instaladores de sitios de terceros que aparezcan en los resultados de búsqueda. Si tu empresa gestiona sus dispositivos, sigue su política de distribución y actualización del software.

## Comprobación mínima después de instalar

Prepara una carpeta de práctica sin claves secretas y confirma que:

- la aplicación se abre y muestra la cuenta o el espacio de trabajo actual;
- puedes abrir la carpeta o añadir archivos al proyecto;
- puedes crear una tarea de Codex y recibir una respuesta;
- el acceso a archivos cubre solo lo necesario para esta tarea;
- encuentras los resultados, los cambios de archivos y la interfaz de aprobación.

Puedes usar esta tarea de solo lectura como prueba inicial:

```text
Lee esta carpeta sin modificar archivos. Dime qué archivos contiene,
qué tipo de proyecto podría ser y en qué nombres de archivo te basaste.
```

## Problemas frecuentes

### La aplicación se abre, pero no aparece Codex

Comprueba primero la cuenta, el espacio de trabajo y el acceso disponible en tu plan. Verifica también si tu organización ha desactivado esa función. No intentes eludir las políticas de la cuenta o del administrador reinstalando repetidamente.

### El sistema solicita acceso a archivos, accesibilidad o control de aplicaciones

Comprueba si la tarea actual necesita realmente ese permiso. Para abrir una carpeta de práctica no hace falta conceder acceso a discos o funciones del sistema que no guardan relación con ella. Consulta [Permisos y sandbox](/es/guide/permissions-and-sandbox/) para decidir.

### La interfaz instalada no coincide con las capturas

La aplicación de escritorio cambia con frecuencia. Considera que la instalación funciona si puedes iniciar sesión, elegir el lugar de trabajo, iniciar una tarea y revisar su resultado. No dependas de la ubicación fija de un botón.

Para conocer la interfaz, consulta [Instalación e interfaz](/es/guide/desktop-app/installation-and-interface/). Si algo falla, visita [Solución de problemas de la aplicación de escritorio](/es/guide/desktop-app/troubleshooting/).
