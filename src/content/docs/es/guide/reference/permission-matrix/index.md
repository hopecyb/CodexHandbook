---
title: Matriz de permisos
description: Distingue entre los Permission Profiles locales, el sandbox anterior y las políticas de red de Cloud.
locale: es
source_locale: zh-CN
source_revision: 'c38e374'
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 70
legacyVerification:
  status: verified
  products: App, CLI, IDE, Cloud
  checkedAt: '2026-08-26'
reviewed_at: '2026-10-25'
---

No intentes deducir los permisos a partir de una tabla fija que solo indique si la aplicación, la CLI, el IDE o Cloud mostrarán un aviso. El comportamiento real depende del lugar de ejecución, la configuración efectiva, los requisitos de la organización, el sistema operativo y la acción concreta.

![Flujo de decisiones entre el bloqueo del sandbox, la aprobación humana y el resultado de la ejecución](/illustrations/flow-sandbox-approval.webp)

## Distingue primero los tres mecanismos

| Mecanismo | Ámbito | Control principal |
|---|---|---|
| Permission Profiles locales (Beta) | Comandos locales en macOS, Linux, WSL y Windows nativo | Lectura, escritura o denegación en el sistema de archivos; destinos de red |
| Ajustes del sandbox anterior | Codex local | `read-only`, `workspace-write`, `danger-full-access` y política de aprobaciones |
| Política del entorno de Cloud | Codex Cloud | Contenedor aislado, acceso a la red durante la configuración, lista de destinos permitidos y métodos HTTP para el agente |

Los Permission Profiles no se combinan con el antiguo `sandbox_mode`. Si la configuración cargada contiene `sandbox_mode`, se pasa `--sandbox` por la línea de comandos o un perfil de configuración establece un sandbox, Codex utiliza los ajustes del sandbox anterior en lugar de `default_permissions`.

## Permission Profiles locales integrados

| Nombre | Límite | Adecuado para |
|---|---|---|
| `:read-only` | Los comandos locales solo pueden leer | Entender código, revisar y explorar un repositorio por primera vez |
| `:workspace` | Permite escribir en las raíces del espacio de trabajo actual y en los directorios temporales del sistema | Tareas de desarrollo habituales |
| `:danger-full-access` | Elimina las restricciones del sandbox local | Solo cuando existe un aislamiento externo y se necesita expresamente |

Un perfil personalizado puede asignar `read`, `write` o `deny` a rutas, y usar reglas más específicas para excluir archivos sensibles como `.env` de un ámbito más amplio. Si varias reglas afectan a la misma ruta, `deny` prevalece sobre `write` y `write` prevalece sobre `read`.

## Ejemplo de privilegios mínimos

```toml
default_permissions = "project-edit"

[features]
network_proxy = true

[permissions.project-edit.filesystem]
":minimal" = "read"

[permissions.project-edit.filesystem.":workspace_roots"]
"." = "write"
".devcontainer" = "read"
"**/*.env" = "deny"

[permissions.project-edit.network]
enabled = true

[permissions.project-edit.network.domains]
"api.openai.com" = "allow"
"tracking.example.com" = "deny"
```

`network.enabled = true` solo permite que los comandos accedan a la red. También debes activar `features.network_proxy` para que las reglas de dominios se apliquen mediante el proxy.

## Evalúa cada acción

| Acción | Riesgo principal | Límite mínimo |
|---|---|---|
| Leer código fuente | Incluir archivos sensibles en el contexto | Lectura del espacio de trabajo y denegación explícita de credenciales |
| Modificar archivos | Sobrescribir o eliminar elementos fuera del alcance | Escritura solo en el espacio de trabajo objetivo; revisar el diff antes |
| Ejecutar pruebas | Efectos secundarios de los scripts | Revisar los scripts y usar un entorno controlado |
| Instalar dependencias | Cadena de suministro y acceso a la red | Fijar versiones y limitar dominios |
| Git push / PR | Cambios en sistemas externos | Rama independiente, protección de ramas y revisión humana |
| Herramientas MCP o plugins | Datos de terceros y operaciones de escritura | Alcance mínimo, aprobaciones por acción y registros |

`AGENTS.md` puede indicar «no hagas push», pero no impone una barrera técnica. Combina esas reglas con el sandbox y los permisos, los permisos de GitHub y la revisión humana.

## Cómo comprobarlo en equipo

1. Anota el cliente y la versión de Codex.
2. Enumera todas las capas de configuración cargadas.
3. Confirma si se usa un Permission Profile o el sandbox anterior.
4. Comprueba por separado lectura, escritura, denegación y red en un directorio de prueba sin datos sensibles.
5. Después conecta el repositorio real y mantén los controles de Git y de la organización.

Los Permission Profiles siguen en Beta. Repite estas comprobaciones después de una actualización.

## Fuentes oficiales

- [Permissions (Beta)](https://learn.chatgpt.com/docs/permissions)
- [Sandboxing](https://learn.chatgpt.com/docs/sandboxing)
- [Agent approvals and security](https://learn.chatgpt.com/docs/agent-approvals-security)
- [Cloud internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
