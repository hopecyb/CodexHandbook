---
title: Instalación y actualizaciones de la CLI
description: Instalar, actualizar y confirmar la versión.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

La primera vez que instalas la CLI, mucha gente se atasca aquí:

- Si de verdad se instaló bien
- Por qué tras instalar la terminal sigue sin reconocer `codex`
- Cómo confirmar, tras actualizar, qué versión estás ejecutando ahora

Instalar la CLI no es «el comando corrió una vez»: es que tu terminal actual pueda encontrarla de forma estable.

## Tras instalar, comprueba al menos estas 3 cosas

1. El comando se puede ejecutar directamente
2. La terminal actual lo encuentra en el `PATH`
3. La autenticación ya está hecha; no basta con tener el ejecutable

## Malentendidos frecuentes

### 1. Que el script de instalación termine no significa que esté listo

Que el script termine solo dice que «se ejecutaron los pasos de instalación».  
Lo siguiente es: si la terminal que tienes abierta ahora reconoce el comando.

### 2. Abrir otra ventana de terminal lo arreglará solo

A veces sí, a veces no.  
Si el `PATH` no se actualizó, en otra ventana puede seguir sin encontrarlo.

### 3. Actualizar es volver a instalar

A menudo lo que necesitas primero es confirmar:

- Si la versión actual es antigua
- Qué instalación estás actualizando exactamente

## Puedes comprobar en este orden

Justo después de instalar:

1. Confirma primero si el comando `codex` se ejecuta directamente
2. Confirma si el `PATH` del shell actual incluye la ubicación de instalación
3. Completa el login o la autenticación
4. Por último confirma la información de versión

El criterio práctico es: la terminal actual lo encuentra y ya puedes autenticarte.

También puedes contrastar: [Instalar la CLI](/guide/getting-started/install-cli/)
Instalación y actualización oficiales: [OpenAI Codex](https://developers.openai.com/codex).


---

**Estado:** outdated  
**Productos aplicables:** CLI  
**Nota de revisión:** Aunque esta página habla de cómo comprobar tras instalar, el cuerpo asume un flujo concreto de instalación, actualización y autenticación; como la forma de instalar la CLI oficial, los pasos de autenticación y los comandos de confirmación de versión son detalles muy volátiles, no conviene marcarla como `verified` hasta completar la documentación oficial de instalación más reciente.  
**Última verificación:** 2026-07-26
