---
title: Web y Cloud (resumen)
description: Navegación de entrada para Tareas Cloud, entornos, Secrets y revisión de PR.
sidebar:
  order: 13
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Cloud encaja para correr Tareas en un **entorno remoto estandarizado**, conectar GitHub y producir PRs. Antes de empezar, mira [Local frente a Cloud](/guide/foundations/local-vs-cloud/) y lee la [documentación oficial de Cloud](https://developers.openai.com/codex).

La Tarea no corre en tu ordenador: sigue en un entorno remoto.

Escenarios habituales:

- La Tarea tarda mucho
- No quieres vigilar la máquina local todo el tiempo
- Necesitas conectar directamente el repo remoto y el flujo de PR

Cloud no tiene por qué ser lo primero que tocas, pero al empezar con repos remotos, PRs y Tareas largas asíncronas casi siempre aparece.

## Navegación del capítulo

| Fase | Página |
|---|---|
| Conexión | [Conectar GitHub](/guide/web-and-cloud/connect-github/) |
| Entorno | [Entorno Cloud](/guide/web-and-cloud/cloud-environments/) |
| Credenciales | [Secrets y variables de entorno](/guide/web-and-cloud/secrets-and-variables/) |
| Entrega | [Crear Pull Request](/guide/web-and-cloud/create-pull-requests/) |
| Calidad | [Revisión de código en Cloud](/guide/web-and-cloud/code-review/) |
| Colaboración | [Delegar y hacer seguimiento](/guide/web-and-cloud/delegate-and-follow-up/) |
| Red | [Acceso a internet](/guide/web-and-cloud/internet-access/) |
| Diagnóstico | [Diagnóstico de Cloud](/guide/web-and-cloud/troubleshooting/) |
| Integración | [Integración con GitHub](/guide/integrations/github/) |

Tareas Cloud desde la App de escritorio: [Tareas locales y Cloud](/guide/desktop-app/local-and-cloud-tasks/). Delegar desde el IDE: [Flujo de Tarea Cloud en el IDE](/guide/ide/cloud-task-workflow/).

## Orden de lectura sugerido

La primera vez con Cloud, lee en este orden:

1. [Conectar GitHub](/guide/web-and-cloud/connect-github/)
2. [Secrets y variables de entorno](/guide/web-and-cloud/secrets-and-variables/)
3. PR, revisión de código y flujo de colaboración

Cuando tengas claros «cómo se conecta el repo, cómo obtiene Permisos y cómo trata los secretos», los detalles de automatización cuestan menos.

Cloud sirve para Tareas de repo remoto que siguen corriendo lejos de tu máquina, no solo para «mover el flujo local a la web».

---

**Estado:** outdated  
**Productos aplicables:** Cloud  
**Nota de revisión:** Como página de navegación de Cloud sigue teniendo valor estructural, pero depende de capacidades muy volátiles (conectar GitHub, Secrets, PR, seguimiento móvil, acceso a red); hasta completar página a página la documentación oficial actual de Cloud, conviene marcarla como `outdated`.  
**Última verificación:** 2026-07-26
