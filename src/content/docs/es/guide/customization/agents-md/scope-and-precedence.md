---
title: "Ámbito y prioridad de AGENTS.md"
description: "Comprende exactamente cómo se descubren y combinan las reglas globales, las de la raíz del proyecto y las del directorio actual."
contentType: reference
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: "Se han contrastado punto por punto las reglas oficiales de descubrimiento y combinación; los ejemplos de directorios y las indicaciones para comprobar la carga son didácticos y no implican pruebas en todos los clientes."
  evidence:
    - label: "AGENTS.md"
      href: https://learn.chatgpt.com/docs/agent-configuration/agents-md
legacyVerification:
  status: "verified"
  products: "App、CLI、IDE、Cloud"
  checkedAt: "2026-08-26"
locale: es
source_locale: zh-CN
source_revision: b5f31cc
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 20
---

Codex construye una cadena de instrucciones al comienzo de cada ejecución. Lo primero es comprender el orden en que descubre los propios archivos `AGENTS.md`, en lugar de suponer una clasificación que mezcle políticas de la organización, configuración y prompts.

## Orden oficial de descubrimiento

1. **Nivel global**: en el directorio de inicio de Codex (por defecto `~/.codex`), busca primero `AGENTS.override.md` y, si no existe, lee `AGENTS.md`. En este nivel solo utiliza el primer archivo que no esté vacío.
2. **Nivel de proyecto**: desde la raíz del proyecto (normalmente la raíz de Git) hasta el directorio de trabajo actual, comprueba en cada directorio `AGENTS.override.md`, `AGENTS.md` y los nombres alternativos configurados. Toma como máximo un archivo por directorio.
3. **Combinación**: concatena el contenido desde la raíz hasta el directorio actual. Los archivos más cercanos a este aparecen después y, por tanto, pueden sustituir instrucciones anteriores.

Codex omite los archivos vacíos. Deja de cargar cuando el contenido combinado alcanza `project_doc_max_bytes`, cuyo límite predeterminado es de 32 KiB.

## Ejemplo de monorepo

```text
repo/
├── AGENTS.md
├── apps/
│   └── web/
│       └── AGENTS.md
└── services/
    └── payments/
        ├── AGENTS.md
        └── AGENTS.override.md
```

Al iniciar desde `services/payments`, se carga primero el `AGENTS.md` de la raíz. Si en ese directorio existe `AGENTS.override.md`, se ignora el `AGENTS.md` situado junto a él.

Escribe en el archivo raíz las reglas para todo el repositorio, como el gestor de paquetes, las pruebas comunes y las restricciones de seguridad. Los archivos anidados deben contener solo las reglas adicionales del servicio. No dupliques un 80 % del contenido.

## Cómo encaja el prompt de la tarea

`AGENTS.md` recoge las convenciones del proyecto que perduran y pueden versionarse. El prompt define el objetivo, el alcance y los criterios de aceptación de esta tarea. Por ejemplo:

```text
Sigue los archivos AGENTS.md aplicables. En esta tarea modifica solo
services/payments/retry.ts y sus pruebas. No rotes las claves.
Ejecuta make test-payments e informa del resultado real.
```

Un prompt no puede habilitar capacidades bloqueadas por los límites del sistema, la organización, el entorno aislado o los permisos. Ante un conflicto, pide a Codex que enumere las fuentes de las instrucciones pertinentes y el alcance de cada una. Distingue las convenciones predeterminadas del proyecto que pueden ajustarse de las restricciones reales de ejecución. Si el alcance está claro, ya está autorizado y no entra en conflicto con instrucciones de mayor prioridad, continúa; explica el bloqueo concreto solo cuando realmente falten datos o permisos. Encontrarás la comparación completa en [Prioridad del contexto](/es/guide/context/context-priority/).

## Comprobar qué se cargó realmente

Inicia una sesión nueva desde el directorio de destino y pregunta:

```text
Antes de empezar, enumera en orden las fuentes AGENTS.md / AGENTS.override.md
cargadas en esta ejecución y resume por separado las restricciones que añade
cada archivo. No modifiques ningún archivo.
```

`AGENTS.md` se lee al iniciar. Tras modificarlo, compruébalo en una ejecución o sesión nueva; no supongas que la sesión actual se actualizó automáticamente.

## Nombres alternativos y capacidad

Si ya tienes `TEAM_GUIDE.md`, puedes configurar:

```toml
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]
project_doc_max_bytes = 65536
```

Un nombre alternativo solo se usa si en el mismo directorio no hay un archivo de mayor prioridad. Antes de aumentar el límite, elimina duplicados e información de contexto innecesaria para que no queden fuera las reglas importantes.

## Fuente oficial

- [Custom instructions with AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)
