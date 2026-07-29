---
title: Resumen del SDK
description: Lanzar Tareas de Codex desde tu aplicación con el SDK oficial — conceptos de autenticación, sesión y manejo de errores.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

El SDK (nombre e idiomas según la [documentación oficial](https://developers.openai.com/codex)) te permite crear Tareas, sondear el estado y obtener resultados en **tu propio servicio**, sin depender solo de la TUI de la terminal.

Si ves «SDK» por primera vez, piénsalo como un conjunto de herramientas de desarrollo para que un programa llame a Codex, no como una interfaz de clics para personas.

Es decir: sirve para que «tu sistema llame a Codex». Si solo lanzas una Tarea puntual, normalmente no hace falta el SDK todavía.

## Qué cubre esta página

- Cuándo usar el SDK en lugar de CLI `exec`
- Autenticación y aislamiento de tenant
- Ideas de combinación con Webhook y colas

Vista general de la plataforma: [Plataforma para desarrolladores](/guide/developer-platform/)

## SDK vs CLI

| | SDK | CLI `exec` |
|---|---|---|
| Dónde se integra | Servicio backend, herramientas internas | Shell, GitHub Actions |
| Gestión de estado | Tu código | Código de salida del proceso |
| Adecuado para | Producto multi-tenant, UI a medida | Pipelines simples |

Muchos equipos usan **CLI en CI y SDK en el producto**.

## Malentendidos frecuentes

### 1. ¿En qué se diferencian SDK y CLI?

A grandes rasgos:

- **CLI**: lo llama una persona o un script en la terminal
- **SDK**: escribes código e incrustas la capacidad de Codex en tu servicio

### 2. ¿Debo aprender primero el SDK?

Normalmente no.

Si solo quieres aprender a usar Codex, la entrada local y el modo interactivo del CLI suelen ser mejor primer paso.

### 3. ¿Cuándo merece la pena el SDK?

Cuando aparecen necesidades como:

- Lanzar Tareas de Codex desde tu propio producto
- Gestionar tú el estado y el resultado de las Tareas
- Hacer UI, Permisos y flujos a medida

El SDK sirve para «conectar sistemas desde un programa», no como entrada principal la primera vez que usas Codex.

## Conceptos centrales (independientes del lenguaje)

1. **Autenticación**: API key de la organización u OAuth delegado — scope mínimo
2. **Tarea / Hilo**: una petición de usuario con ID rastreable
3. **Política de Herramientas**: el servidor fija Sandbox y Aprobación, alineado con el cliente
4. **Resultado**: historial de mensajes, diff de archivos, URL de artefactos (según la API)
5. **Errores**: distinguir reintentables (429) y no reintentables (400)

Índice de errores: [Referencia de errores y mensajes](/guide/reference/error-reference/)

## Lista mínima de integración

- [ ] Probar en staging con un repo de solo lectura
- [ ] Desensibilizar logs; no registrar el Prompt completo del usuario si contiene PII
- [ ] Timeout y cancelación: poder abortar la Tarea si el usuario abandona la página
- [ ] Fijar versión del SDK y del model ID

## Encaje con CI/CD

El SDK puede disparar Cloud o un runner remoto, o CI puede llamar a tu servicio para actualizar el estado del PR. Patrones de ejemplo en [Automatización de revisión de código](/guide/developer-platform/ci-cd/code-review-automation/).

## Errores frecuentes

- Usar la cookie de sesión del navegador del usuario como API key
- Sin límite de concurrencia; un pico de tráfico agota la cuota
- Hacer merge automático de PRs generados por el SDK

## Fuentes de referencia
- Referencia del SDK de OpenAI Codex
---

**Estado:** verified  
**Productos aplicables:** API  
**Base de verificación:** Contrastado con la documentación pública actual de OpenAI Developers sobre API/modelos Codex y casos de la plataforma para desarrolladores, y con los capítulos verificados de resumen de la plataforma, CI/CD y modo no interactivo; esta página solo confirma el principio estable de que el SDK sirve para integración programática, gestión de estado y UI a medida.  
**Última verificación:** 2026-07-26
