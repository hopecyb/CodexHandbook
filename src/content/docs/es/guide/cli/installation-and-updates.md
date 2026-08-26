---
title: Instalación y actualizaciones de la CLI
description: Instala, actualiza y confirma la versión activa.
locale: es
source_locale: zh-cn
source_revision: 6b8ceaf
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

La primera instalación de la CLI suele plantear tres preguntas:

- ¿La instalación terminó realmente bien?
- ¿Por qué la terminal sigue sin reconocer `codex`?
- Después de actualizar, ¿cómo sé qué versión se está ejecutando?

La instalación termina cuando la terminal actual puede encontrar el comando de forma fiable, no cuando el instalador se ha ejecutado una vez.

## Comprueba al menos tres cosas

1. El comando se ejecuta directamente.
2. La terminal actual lo encuentra a través de `PATH`.
3. La autenticación está completa; no basta con instalar el ejecutable.

## Errores de interpretación habituales

### 1. Si el instalador termina, la instalación está completa

Solo significa que se ejecutaron sus pasos. A continuación, confirma que la terminal actual reconoce el comando.

### 2. Una ventana de terminal nueva siempre lo arregla

A veces sí, pero no siempre. Si `PATH` no se actualizó, la ventana nueva puede seguir sin encontrar el ejecutable.

### 3. Actualizar consiste en reinstalar a ciegas

Determina primero:

- si la versión actual es antigua;
- qué instalación concreta estás actualizando.

## Comprueba en este orden

Después de instalar:

1. Confirma que `codex` se ejecuta directamente.
2. Confirma que el `PATH` del shell actual incluye la ubicación de instalación.
3. Completa el inicio de sesión o la autenticación.
4. Confirma la información de versión.

El criterio práctico es que esta terminal pueda encontrar el comando y que la autenticación termine correctamente.

Consulta también [Instalar la CLI](/es/guide/getting-started/install-cli/). Las instrucciones actuales de instalación y actualización están en [Codex CLI](https://learn.chatgpt.com/docs/codex/cli). El instalador independiente oficial para macOS/Linux usa el mismo comando para instalar y actualizar; para Windows, npm o Homebrew, usa la pestaña correspondiente de la página vigente.

---

**Estado:** verified

**Productos aplicables:** CLI

**Base de verificación:** Comparado con el inicio rápido actual de la CLI para los puntos de entrada de macOS/Linux, Windows, npm y Homebrew, las rutas de actualización y el inicio de sesión con `codex`. Los comandos exactos se mantienen en la página de instalación para principiantes.

**Última verificación:** 2026-08-26
