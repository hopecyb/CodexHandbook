---
title: 'Descripción del SDK: tareas locales e integración de clientes'
description: Distingue el SDK de Codex, la CLI no interactiva, App Server y un servicio de tareas remoto construido por ti.
contentType: reference
audiences: [developer]
level: intermediate
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: Se contrastaron el lugar de ejecución, las interfaces de threads y los límites de integración con la documentación oficial del SDK y App Server. Del ejemplo mínimo solo se comprobó la sintaxis; no se realizó ninguna llamada autenticada al modelo.
  evidence:
    - label: Documentación oficial del SDK de Codex
      href: https://learn.chatgpt.com/docs/codex-sdk
    - label: Documentación oficial de Codex App Server
      href: https://learn.chatgpt.com/docs/app-server
sidebar:
  order: 10
locale: es
source_locale: zh-CN
source_revision: "e888ae6"
translation_status: reviewed
translated_at: '2026-09-20'
reviewed_at: 2026-10-25
---

El SDK de Codex permite controlar desde un programa un Agent de Codex local. «Local» se refiere a la máquina que ejecuta el SDK y el Agent: tu equipo o un runner de CI que administras. No lo interpretes como un servicio HTTP alojado que crea tareas Cloud, consulta su estado y descarga artefactos. Consulta la [documentación oficial del SDK](https://learn.chatgpt.com/docs/codex-sdk).

## Elegir la entrada según el objetivo

| Objetivo | Punto de partida | Sigue siendo tu responsabilidad |
|---|---|---|
| Ejecutar una tarea en un script | [`codex exec`](/es/guide/developer-platform/non-interactive/codex-exec/) | Directorio de trabajo, entrada, código de salida y almacenamiento de resultados |
| Ejecutar y continuar tareas desde un programa | SDK de Codex | Ciclo de vida, entorno, errores y verificación |
| Crear un cliente con sesiones, aprobaciones y eventos en streaming | App Server | Interacción, conexión, identidad y despliegue del cliente |
| Ofrecer una plataforma remota para varios usuarios | Tu propia arquitectura | Colas, aislamiento entre clientes, credenciales, almacenamiento, cancelación y callbacks |

La última fila es una decisión de arquitectura, no una plataforma alojada incluida en el SDK. La guía oficial sitúa el SDK en automatización y CI, y App Server en la integración profunda de clientes. App Server intercambia solicitudes y eventos mediante JSON-RPC bidireccional. Consulta la [documentación de App Server](https://learn.chatgpt.com/docs/app-server).

## Llamada mínima al SDK de TypeScript

El paquete oficial de TypeScript es `@openai/codex-sdk` y requiere Node.js 18 o posterior. El ejemplo usa sintaxis de módulos JavaScript para mostrar la interfaz básica del mismo paquete; no es un servicio de producción completo.

Instala la dependencia en un directorio de práctica específico y conserva la versión resuelta y el archivo de bloqueo:

```sh
npm init -y
npm install --save-exact @openai/codex-sdk
npm ls @openai/codex-sdk
```

Prepara un `README.md` sin datos sensibles y guarda esto como `example.mjs`:

```js
import { Codex } from '@openai/codex-sdk';

const agent = new Codex();
const session = agent.startThread();
const answer = await session.run(
  'Lee solo el README.md del directorio actual y resume su propósito en tres puntos en chino; no modifiques archivos ni realices operaciones externas.'
);
console.log(answer.finalResponse);
```

Después ejecuta `node example.mjs`. Antes, completa la autenticación apropiada para el entorno y comprueba la configuración real de sandbox y aprobaciones. «Solo lectura» en el prompt es una restricción de la tarea, no reemplaza los límites de ejecución. La llamada al modelo puede consumir uso de tu cuenta; esta página no ha instalado ni llamado al modelo por ti.

Los métodos y campos de retorno se contrastaron con el [ejemplo oficial](https://learn.chatgpt.com/docs/codex-sdk). El sitio solo comprobó la sintaxis JavaScript: no fijó ni probó una versión publicada concreta del SDK y no ofrece una salida de éxito inventada. Al reproducirlo, registra versión del paquete, CLI/runtime, sistema, método de autenticación sin credenciales y resultado.

## Continuar y recuperar tareas

Puedes llamar de nuevo a `run()` sobre el mismo objeto thread; un ID existente se puede pasar a `resumeThread()`. Los threads recuperables dependen del entorno donde se almacena el estado: el ID no es una URL Cloud consultable desde cualquier máquina. Existe además una interfaz oficial para Python; comprueba sus nombres y dependencias en la sección correspondiente y no mezcles código de los dos lenguajes. Consulta [threads e interfaces por lenguaje](https://learn.chatgpt.com/docs/codex-sdk).

Al recuperar una tarea, comprueba primero si los archivos actuales coinciden con la descripción histórica; consulta [Entrega y recuperación](/es/guide/agent-work/handoff-and-resume/).

## Qué comprobar después de una llamada correcta

1. **Lugar de ejecución:** registra directorio de trabajo y archivos realmente leídos o modificados, no solo el prompt.
2. **Resultado:** examina respuesta, diferencias y pruebas. Recibir `finalResponse` no implica aprobación del resultado de negocio.
3. **Tipo de fallo:** distingue dependencias o proceso local, autenticación, servicio de modelo y validación de la tarea; no reduzcas todos los errores a 400/429.
4. **Efecto de reintentar:** comprueba antes si ya hay archivos o efectos externos y decide después; no repitas sin más la misma solicitud.
5. **Permisos:** eres responsable del entorno y las herramientas disponibles. El nombre del SDK no otorga automáticamente Cloud, administración organizativa ni aislamiento multiusuario.

Son comprobaciones de integración propuestas por este sitio, no una lista de campos devueltos por el SDK. Consulta los tipos de la versión instalada y la documentación oficial para los campos reales.

## Relación con callbacks, colas y ejecución remota

Tu runner puede ejecutar el SDK y tu servicio enviar después una notificación de finalización. En ese caso, estados de cola, callback HTTP, formato de firma y estrategia de reintento son parte del protocolo de tu sistema. Los eventos de App Server tampoco son directamente una dirección Webhook.

Continúa con [Límites de Webhooks y eventos de tareas](/es/guide/developer-platform/webhooks/overview/) y [Scripts y pipelines](/es/guide/developer-platform/non-interactive/scripts-and-pipelines/). Esta página no promete que una llamada SDK cree automáticamente una tarea Codex Cloud, una URL de artefacto o una delegación OAuth.
