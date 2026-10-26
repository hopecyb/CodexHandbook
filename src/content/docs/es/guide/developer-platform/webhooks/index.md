---
legacyVerification:
  status: "verified"
  products: "API / Cloud"
  basis: "Contrastado con la estructura actual del subcapítulo webhooks y sus enlaces de entrada; esta página solo aclara que el Webhook actúa como «disparador de eventos» en la integración, sin fijar campos de evento ni detalles de implementación como contrato."
  checkedAt: "2026-07-26"
title: Webhooks
description: 'Página de integración disparada por eventos: el Webhook recibe notificaciones; no sustituye el diseño del flujo de trabajo.'
locale: es
source_locale: zh-CN
source_revision: "68cb29b"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-25
---

La palabra `Webhook` suena abstracta.  
En claro: cuando ocurre algo, el sistema te envía una notificación por iniciativa propia.

En integraciones de Codex, resuelve «llegó un evento externo → cómo disparar el flujo siguiente».

## Entrada de este grupo

- [Límites de Webhooks y eventos de tareas](/es/guide/developer-platform/webhooks/overview/): distingue resultados de ejecución local, eventos de App Server y callbacks HTTP propios. Este grupo no ofrece un contrato unificado de Webhooks de Cloud sin verificar.

## Contenido del grupo

- Cómo envían eventos los sistemas externos
- Cómo encajar el flujo después de que llega el evento
- Por qué el Webhook es solo un disparador, no una automatización completa

Un Webhook es más un timbre: te dice «pasó algo»; cómo lo tratas después lo defines tú en el flujo.
