---
title: Plugins
description: Explora, instala y gobierna paquetes reutilizables de Skills, conectores, MCP, Hooks y plantillas de tareas.
locale: es
source_locale: zh-cn
source_revision: 33c9fe2
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Un Plugin es una unidad de composición y distribución de capacidades. Puede contener Skills, conectores, servidores MCP, extensiones de navegador, Hooks y plantillas de Scheduled tasks; el trabajo real sigue correspondiendo a esos componentes.

## Para quién es

- Personas que quieren instalar desde un catálogo público un conjunto de capacidades listo para usar.
- Responsables que distribuyen flujos de equipo, herramientas y medidas de protección como una sola unidad versionada.
- Administradores que revisan el origen, los permisos de servicios externos y los Hooks de un Plugin.

## Superficies compatibles actuales

| Superficie | Explorar/instalar | Usar |
|---|---|---|
| ChatGPT Web y App de escritorio | Pestaña Plugins | Chat y Work |
| ChatGPT Mobile | No es una superficie principal de gestión | Usar Plugins ya instalados en la cuenta |
| Codex en la App de escritorio de ChatGPT | Pestaña Plugins | Tareas de Codex |
| Codex CLI | Explorador `/plugins`; iniciar una sesión nueva tras instalar | Entorno Codex |
| Integración IDE | **Plugins no compatibles** | Usar por separado MCP, Skills y otras capacidades compatibles con el IDE |

## Puntos de entrada

- [Introducción a los Plugins](/es/skills/plugins/plugins-overview/): componentes, límites de compatibilidad, verificación de la instalación y revisión de seguridad
- [Mapa de capacidades](/es/skills/capability-map/): compara Plugins, Skills, MCP, Hooks y Scheduled tasks

## Antes de instalar

1. ¿Quién es el autor y responsable del mantenimiento?
2. ¿Qué Skills, conectores, servidores MCP, capacidades de navegador y Hooks incluye?
3. ¿Qué cuentas externas y scopes solicita?
4. ¿Se revisaron y consideraron fiables sus Hooks en `/hooks`?
5. ¿Cómo los desactivará, actualizará y revertirá el equipo, y cómo revocará sus permisos?

## Fuente oficial

- [OpenAI: Plugins](https://learn.chatgpt.com/docs/plugins)

---

**Estado:** verified

**Productos aplicables:** ChatGPT Web / App de escritorio / Mobile; Codex para escritorio y CLI; los Plugins no son compatibles con la integración IDE

**Última verificación:** 2026-08-26
