---
title: Introducción a los Hooks
description: Comprende cómo se descubren y revisan los Hooks, sus controladores, su ejecución y sus límites de seguridad.
locale: es
source_locale: zh-cn
source_revision: 169a1ec
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Los Hooks ejecutan scripts de comandos o herramientas de servidores MCP conectados dentro del ciclo del Agent de Codex. Entre sus usos habituales están detectar secretos en prompts, aplicar políticas a llamadas de herramientas, registrar auditorías, resumir sesiones y verificar antes de detenerse.

![Ciclo de vida de los Hooks de Codex en sesiones, turnos, llamadas a herramientas, compactación y subagents](/diagrams/hook-lifecycle-events-es.svg)

La distinción más importante es que `PreToolUse` puede rechazar o reescribir la entrada de herramientas locales compatibles antes de ejecutarlas. `PostToolUse` se ejecuta después y no puede deshacer los efectos secundarios.

## Descubrimiento de la configuración

Codex busca Hooks junto a las capas de configuración activas:

- `~/.codex/hooks.json`
- `[hooks]` en `~/.codex/config.toml`
- `<repo>/.codex/hooks.json`
- `[hooks]` en `<repo>/.codex/config.toml`
- Hooks incluidos en Plugins habilitados
- Hooks gestionados distribuidos mediante políticas del sistema, MDM, Cloud o `requirements.toml`

El contenido de `.codex/` del proyecto solo se carga cuando el proyecto es de confianza. Se ejecutan todos los Hooks coincidentes de las distintas fuentes; una capa de mayor prioridad no sustituye el conjunto completo de Hooks de una capa inferior.

Cuando una misma capa contiene `hooks.json` y `[hooks]` en línea, Codex los combina y muestra una advertencia al iniciar. Usa preferiblemente una sola representación por capa.

## Revisa todos los Hooks no gestionados

Codex registra la confianza asociada al hash de la definición del Hook. Los Hooks no gestionados nuevos o modificados se omiten como pendientes de revisión hasta que una persona confía en la definición nueva.

Usa `/hooks` en la CLI para inspeccionar los orígenes, revisar cambios y confiar en un Hook no gestionado o deshabilitarlo. Los Hooks de Plugins siguen el mismo proceso de confianza. Las políticas de la organización establecen la confianza de los Hooks gestionados, que los usuarios no pueden desactivar desde su explorador personal de Hooks.

## Dos controladores ejecutables

| Controlador | Propósito | Límite |
|---|---|---|
| `command` | Ejecutar un script local con el JSON del evento por stdin | El script tiene capacidad de proceso local; revisa sus dependencias y su salida |
| `mcp_tool` | Llamar a una herramienta de un servidor MCP ya conectado | No inicia ni vuelve a conectar el servidor; no es compatible con `SessionEnd` |

La documentación actual indica que los controladores `prompt` y `agent` pueden analizarse, pero se omiten. No los incluyas en una configuración que deba ejecutarse.

## Comportamiento durante la ejecución

- Varios Hooks de comando coincidentes se inician en paralelo; uno no puede detener a otro que ya haya coincidido.
- La mayoría de los Hooks tienen un `timeout` predeterminado de 600 segundos. `SessionEnd` usa un segundo de forma predeterminada y permite como máximo tres. Los guardianes de producción deben definir timeouts explícitos más cortos.
- Un Hook de comando se ejecuta con el `cwd` de la sesión. Resuelve los scripts del repositorio desde la raíz de Git para que iniciar desde un subdirectorio no rompa las rutas relativas.
- Los Hooks asíncronos son adecuados para registro y análisis, pero no pueden bloquear, aprobar, reescribir ni controlar la acción que los activó.

## Relación con otras capas de seguridad

| Capa | Responsabilidad |
|---|---|
| Sandbox | Límite de capacidades del sistema, la red y el sistema de archivos |
| Aprobación | Decisión humana antes de acciones de alto riesgo |
| Reglas de comandos | Allow/deny declarativo para patrones de comandos conocidos |
| Hook | Lógica personalizada y comprobable en puntos del ciclo de vida |
| Permiso del servicio | Autoridad final de lectura o escritura en un sistema externo |

La cobertura de herramientas de los Hooks no constituye un límite de seguridad completo. Algunas rutas de herramientas dedicadas pueden evitar la ruta predeterminada de Hooks; las herramientas alojadas, como WebSearch, tampoco ejecutan `PreToolUse` ni `PostToolUse` locales.

## Orden de adopción

1. Empieza con registros redactados en `PostToolUse` o `SessionEnd`.
2. Usa `systemMessage` o contexto adicional para advertencias de alta confianza.
3. Bloquea en `PreToolUse` solo cuando la regla sea segura, el script tenga fixtures y los falsos positivos sean aceptables.
4. Alinea los Hooks con CI, las comprobaciones pre-commit y los permisos del servicio para evitar políticas contradictorias.

## Lista de aceptación

- [ ] Los nombres de evento proceden de la lista oficial actual.
- [ ] Los matchers cubren únicamente las herramientas u orígenes necesarios.
- [ ] Los scripts tienen pruebas con fixtures y errores comprensibles.
- [ ] Los registros omiten tokens, prompts completos y entradas sensibles de herramientas.
- [ ] Se probaron las rutas de fallo, timeout y desactivación.
- [ ] El equipo entiende los cambios de confianza que muestra `/hooks`.

## Fuente oficial

- [OpenAI: Hooks](https://learn.chatgpt.com/docs/hooks)

---

**Estado:** verified

**Productos aplicables:** Entornos que usan un host de Codex local; la CLI proporciona `/hooks` para gestionar la confianza

**Última verificación:** 2026-08-25
