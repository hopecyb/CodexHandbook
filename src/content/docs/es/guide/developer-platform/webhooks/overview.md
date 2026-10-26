---
title: Límites de Webhooks y eventos de tareas
description: Distingue resultados locales de Codex, eventos de App Server y callbacks HTTP diseñados por ti.
contentType: reference
audiences: [developer]
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: Se comprobaron los modelos de ejecución y eventos del SDK y App Server. La sección de callbacks HTTP propone una arquitectura propia; no afirma que exista un contrato unificado de Webhooks de Codex Cloud.
  evidence:
    - label: Documentación oficial del SDK
      href: https://learn.chatgpt.com/docs/codex-sdk
    - label: Protocolo y eventos de App Server
      href: https://learn.chatgpt.com/docs/app-server
sidebar:
  order: 10
locale: es
source_locale: zh-CN
source_revision: "8a84ab8"
translation_status: reviewed
translated_at: '2026-09-20'
reviewed_at: 2026-10-25
---

Al terminar una tarea puedes notificar a un sistema interno mediante un valor de retorno, el código de salida de un proceso, un flujo de eventos o un callback HTTP. Define primero el emisor y el protocolo; después decide si necesitas un Webhook.

## No confundas estos tres mecanismos

| Mecanismo | Cómo se recibe | Límite |
|---|---|---|
| Ejecución local con SDK o CLI | Resultado del programa o estado del proceso | No es una API alojada de callbacks HTTP |
| Eventos de App Server | Notificaciones JSON-RPC en una conexión establecida | Hay que conectar, inicializar y procesar mensajes según el protocolo |
| Callback de tu runner | Solicitud HTTP enviada por tu servicio | Tú defines nombres de evento, firmas, reintentos y almacenamiento |

`turn/completed` de App Server es una notificación del protocolo; el estado final puede ser completado, interrumpido o fallido. Tras recibirlo, comprueba el estado y el resultado de negocio; no inicies un despliegue basándote solo en el nombre del evento. Consulta los [eventos oficiales](https://learn.chatgpt.com/docs/app-server).

Esta página no ha verificado un endpoint unificado para registrar Webhooks de Codex Cloud, una cabecera de firma ni un contrato de evento `task.completed`. Por eso no presenta URL, cabeceras ni tablas de eventos como interfaz oficial. Si un producto concreto ofrece Webhooks, intégralo según la documentación versionada de ese producto.

## Cuándo conviene un callback propio

Una tarea de CI aislada suele continuar mediante su código de salida y la salida guardada. No necesita un receptor público solo por ser «asíncrona».

Si tu sistema programa tareas entre procesos y actualiza un ticket al finalizar, puedes diseñar este flujo interno:

```text
Cola propia → runner controlado que ejecuta SDK/CLI → guardar resultado y estado
                                               → servicio propio de notificación → ticket interno
```

Es una recomendación de arquitectura del sitio, no una función de despliegue incluida en el SDK. Para el lugar de ejecución y los límites de integración, consulta la [Descripción del SDK](/es/guide/developer-platform/sdk-overview/).

## Qué debe definir tu protocolo

- **Identidad e integridad:** establece cómo verifica el receptor al emisor; usa una autenticación revisada y no inventes una «cabecera oficial de firma».
- **ID estables y deduplicación:** registra ID de tarea, ID de evento y número de intentos; un evento repetido no debe repetir el efecto externo.
- **Estado y versión:** distingue ejecución completada, fallo, interrupción y aceptación de negocio; versiona el payload.
- **Recepción persistente:** confirma solo después de guardar o encolar el evento de forma fiable. Un error debe permitir reintentos; no confirmes el éxito si después podrías perder el evento.
- **Alcance de los datos:** envía únicamente el resumen y referencias seguras que el consumidor necesita; no registres credenciales.
- **Condiciones de parada:** limita los reintentos, prevé intervención humana y una forma de cancelar acciones posteriores.

Son requisitos de diseño que aún hay que implementar y verificar, no un ejemplo listo para ejecutar. Esta página no conecta automáticamente tickets, envía mensajes ni crea despliegues.

## Escenarios mínimos de aceptación

En pruebas, cubre al menos éxito, fallo de ejecución, cancelación, duplicados, identidad incorrecta e indisponibilidad temporal del receptor. Comprueba que duplicar entregas produce un solo efecto de negocio, que cancelar no cuenta como éxito y que un resultado generado sin validar no se publica directamente.

Puedes practicar con el [caso de clasificación de issues](/es/cases/use-cases/team-automation/issue-triage-suggestions/) y la [comprobación programada de enlaces](/es/cases/use-cases/team-automation/scheduled-link-check/); el estado de sus materiales consta en cada página.
