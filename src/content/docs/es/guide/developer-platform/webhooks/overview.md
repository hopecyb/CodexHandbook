---
title: Resumen de Webhooks
description: Conectar el estado de Tareas de Codex a sistemas internos con callbacks HTTP — eventos, firma e idempotencia.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Un **Webhook** te permite, cuando cambia el estado de una Tarea de Codex o Cloud, enviar un callback HTTP a tu propio servicio y disparar actualizaciones de tickets, notificaciones de Slack o mesas de Aprobación internas. Este capítulo es la entrada de integración por eventos de la [plataforma para desarrolladores](/guide/developer-platform/).

## Qué cubre esta página

- Cuándo elegir Webhook frente a sondeo con SDK
- Eventos habituales y campos del payload (concepto)
- Verificar firma, replay e idempotencia

## Primero entiende qué hace

Si es la primera vez con Webhooks, piénsalo así: cuando cambia el estado de la Tarea, Codex notifica a tu sistema, en lugar de que tú preguntes una y otra vez «¿ya está?».

Encaja cuando «al terminar la Tarea aún hay que encadenar otra acción de sistema».

:::note
Ruta del Webhook, nombres de eventos y algoritmo de firma según la [documentación oficial de la API](https://developers.openai.com/codex).
:::

## Malentendidos frecuentes

### El Webhook no es la respuesta por defecto a toda automatización

Si solo corres un `codex exec` y miras el código de salida, normalmente no hace falta Webhook.

El Webhook encaja mejor en:

- Tareas largas
- Orquestación multi-paso
- Notificar o disparar otros sistemas al terminar

### Recibir el callback ≠ poder confiar en él de inmediato

Muchos principiantes tratan el Webhook como «mensaje oficial, se puede usar tal cual».

Sin verificación de firma, idempotencia y manejo de timeouts, puedes acabar con peticiones falsificadas, entregas duplicadas o problemas por inestabilidad del sistema.

## Cuándo usar Webhook

| Adecuado | No adecuado |
|---|---|
| Notificar sistemas internos al completar la Tarea | Necesitas streaming palabra a palabra en tiempo fuerte |
| Integrar con un bus de eventos existente | Un cron simple solo necesita el código de salida de `exec` |
| Orquestación multi-paso (completar → disparar deploy) | Sin endpoint alcanzable desde internet y sin querer usar cola |

Pipelines simples pueden bastar con [Scripts y pipelines](/guide/developer-platform/non-interactive/scripts-and-pipelines/); un servicio multi-tenant productivizado suele combinar **SDK + Webhook**.

## Eventos típicos (concepto)

| Evento | Uso |
|---|---|
| `task.completed` | Obtener resultado, actualizar estado del PR |
| `task.failed` | Alerta, cola de reintentos |
| `task.needs_approval` | Empujar a UI de Aprobación humana |
| `review.posted` | Sincronizar la conclusión de la revisión de código |

El payload debería incluir: `task_id`, estado, marca de tiempo, identificador de repo/proyecto; **evita** poner el Prompt completo en el body del webhook si contiene PII.

## Requisitos mínimos del receptor

1. Terminal **HTTPS**; verificar la cabecera de firma oficial (p. ej. `X-Signature` + HMAC)
2. **Idempotencia**: el mismo `event_id` se procesa una sola vez
3. **2xx rápido**: la lógica pesada a una cola asíncrona
4. **Logs desensibilizados**: no registrar secretos ni la entrada completa del usuario

Esquema (pseudocódigo):

```python
def handle(request):
    verify_signature(request.headers, request.body)
    event = parse_json(request.body)
    if already_processed(event["id"]):
        return 200
    enqueue(process_codex_event, event)
    return 200
```

## Relación con CI

- Dentro de CI, `codex exec` suele **no** necesitar webhook; basta el código de salida
- Tareas largas en Cloud y Aprobación desde móvil encajan mejor con webhook hacia sistemas internos

## Errores frecuentes

- Sin verificación de firma; callbacks falsificados
- Procesar más allá del timeout de la plataforma y provocar reentregas
- Correr un segundo Codex de forma síncrona en el handler del webhook
- Exponer la URL del webhook en el frontend del cliente

## Cómo decidir si usarlo

Si no tienes claro el escenario, pregunta:

1. ¿Necesito que me notifiquen de forma activa cuando cambia el estado de la Tarea?
2. Al terminar, ¿hay un siguiente paso a nivel de sistema que deba encadenarse solo?
3. ¿Ya tengo un backend que pueda recibir de forma segura callbacks HTTP?

Cuantas más respuestas sean «sí», más sentido tiene el Webhook.

## Límites de seguridad

- Véase [modelo de amenazas](/guide/team-enterprise/security/threat-model/) y [uso aceptable](/guide/team-enterprise/governance/acceptable-use/)
- Incluye la rotación del secreto del webhook en el calendario de operaciones

## Lista de aceptación

- [ ] Fallo de verificación de firma → 4xx
- [ ] Tabla de idempotencia o clave de dedupe implementada
- [ ] Worker asíncrono y DLQ (cola de letra muerta) configurados
- [ ] Convenio de campos alineado con [salida estructurada](/guide/developer-platform/non-interactive/structured-output/)

El Webhook sirve para enchufar cambios de estado de Tarea a otros sistemas; antes hay que dejar bien firma, idempotencia y procesamiento asíncrono.

## Fuentes de referencia
- Documentación de eventos de la API OpenAI Codex / Cloud
---

**Estado:** verified  
**Productos aplicables:** API / Cloud  
**Base de verificación:** Contrastado con la documentación pública actual de OpenAI Developers sobre plataforma para desarrolladores e integración orientada a eventos, y con las páginas verificadas de Webhooks, CI/CD, salida estructurada y límites de seguridad de equipo; esta página solo confirma el principio estable de que el Webhook sirve para notificar estado y que el receptor debe verificar firma, ser idempotente y procesar de forma asíncrona.  
**Última verificación:** 2026-07-26
