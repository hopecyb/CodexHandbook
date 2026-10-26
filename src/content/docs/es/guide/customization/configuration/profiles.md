---
legacyVerification:
  status: "verified"
  products: "CLI"
  checkedAt: "2026-08-26 (codex-cli 0.148.0 en el equipo local)"
title: Profiles de configuración
description: Superpón un conjunto de ajustes con nombre a Codex CLI mediante un archivo de configuración independiente.
locale: es
source_locale: zh-CN
source_revision: "6ab30c5"
translation_status: reviewed
translated_at: "2026-09-20"
sidebar:
  order: 20
reviewed_at: 2026-10-25
---
En la versión actual de Codex CLI, `--profile <name>` superpone `$CODEX_HOME/<name>.config.toml` a la configuración básica del usuario. Se utiliza principalmente en CLI; no debe presentarse como un «modo de un clic» universal de la aplicación de escritorio.

## Ejemplo mínimo

Conserva los valores predeterminados compartidos en la configuración básica:

```toml
# ~/.codex/config.toml
model_reasoning_effort = "medium"
```

Profile de revisión de solo lectura:

```toml
# ~/.codex/review.config.toml
sandbox_mode = "read-only"
approval_policy = "never"
```

Inícialo así:

```bash
codex --profile review
# Forma abreviada
codex -p review
```

Comprueba el comportamiento de la versión instalada:

```bash
codex --help
```

La ayuda actual debe indicar la ruta del archivo del profile y cómo se superpone a la configuración básica. Si tu versión es distinta, sigue la salida local y la referencia oficial de configuración.

## Para qué sirve un profile

| Profile | Propósito | Ejemplo de límite |
|---|---|---|
| `review` | Revisión de solo lectura | `read-only`, sin escrituras |
| `workspace` | Modificaciones habituales del proyecto | Escritura solo en el espacio de trabajo, aprobación cuando sea necesaria |
| `ci` | Comprobación no interactiva | Salida fija, sin `push` |

Un profile solo guarda un punto de partida para la configuración. No anula los requirements de la organización ni hace que un prompt sea seguro automáticamente. En particular, no conviertas `danger-full-access` en un profile predeterminado de uso habitual.

## No lo confundas con un Permission Profile

- **Profile de configuración:** `--profile name` selecciona `<name>.config.toml` y puede superponer varios ajustes de Codex.
- **Permission Profile (Beta):** `default_permissions` y `[permissions.<name>]` definen los límites del sistema de archivos y de la red.

Ambos se llaman profile, pero tienen usos y estructuras de configuración diferentes. Actualmente, Permission Profile tampoco se combina con el antiguo `sandbox_mode`; configura uno de los dos sistemas de permisos.

## Límites para equipos

Los profiles de configuración residen en el directorio Codex home del usuario; en la versión actual no son, por sí mismos, configuraciones de proyecto que se puedan confirmar en el repositorio. El equipo puede publicar archivos de ejemplo revisados en su documentación para que cada miembro los instale y compruebe expresamente. No supongas que clonar el repositorio activa automáticamente un profile personal.

## Validación

1. Ejecuta `codex --help` para confirmar que tu versión admite `-p/--profile`.
2. Prueba `review` con una tarea de solo lectura.
3. Pide leer un archivo fuera del espacio de trabajo o escribir un archivo y comprueba que el límite lo impide como esperabas.
4. Comprueba la configuración efectiva; no te fíes solo del nombre del archivo.

## Fuentes oficiales

- [Schema de configuración de Codex](https://github.com/openai/codex/blob/main/codex-rs/core/config.schema.json)
- [Capa de configuración en el código fuente de Codex CLI](https://github.com/openai/codex/blob/main/codex-rs/config/src/loader/mod.rs)
