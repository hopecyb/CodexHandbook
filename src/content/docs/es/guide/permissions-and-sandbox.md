---
title: Permisos y Sandbox
description: Entiende Aprobaciones, aislamiento de ejecución y límites de red para usar Codex con seguridad.
sidebar:
  order: 14
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Permisos y Sandbox

Codex no debería ejecutar operaciones de alto riesgo sin consentimiento. La **Aprobación** es la compuerta clave de la colaboración humano–Agent; el **Sandbox** limita el sistema de archivos y parte de las capacidades del sistema a las que el Agent puede llegar.

## Contenido de esta página

La primera vez que ves «Permiso», «Aprobación», «Sandbox» y «acceso a la red», mucha gente piensa que son casi lo mismo: ajustes de seguridad.

El problema suele estar justo en esa confusión: crees que solo le permites continuar, y en realidad puedes estar abriendo a la vez escritura de archivos, ejecución de comandos o acceso a internet.

Esta página separa esos conceptos para que sepas qué estás liberando en cada confirmación.

## Distingue primero estos conceptos

Puedes separarlos así:

- **Aprobación**: si debe preguntarte antes
- **Sandbox**: aunque quiera hacerlo, hasta dónde puede llegar como máximo
- **Acceso a la red**: si puede sacar información o traer cosas desde fuera

Influyen juntos en el resultado, pero no son lo mismo.

## Lo que suele importarte

- Si se permite leer/escribir rutas fuera del proyecto actual
- Si se permite conexión a red
- Si se permite ejecutar ciertos comandos de shell
- Si el equipo impuso una política obligatoria (configuración gestionada)

## Sandbox y red

El **Sandbox** reduce la superficie de error. El **acceso a la red** es otra capa de riesgo: puede filtrar información sensible del Prompt o traer datos poco fiables.

Al empezar, suele ayudar este enfoque:

1. En la primera práctica, cierra la red innecesaria o permite solo el acceso claramente necesario
2. No pongas claves de producción en el proyecto de práctica
3. Si ves una petición de «salir a la red / escribir en una ruta sensible», para, entiéndela y luego aprueba

## Malentendidos frecuentes

### Que aparezca un diálogo no implica que sea peligroso

Muchas operaciones normales también disparan Aprobación, por ejemplo:

- Instalar dependencias
- Escribir fuera del directorio del proyecto
- Abrir el navegador o una app del sistema
- Acceder a un sitio externo o a una API

Lo que hay que juzgar es: **si este paso es necesario para la Tarea actual**. No basta con mirar si salió el diálogo.

### Que no haya diálogo tampoco implica riesgo cero

Si el Sandbox actual ya permite cierto tipo de operación, o si antes ya relajaste reglas, Codex puede no volver a preguntar.

Por eso no puedes juzgar el riesgo solo por «si hay un aviso»; también hay que mirar cómo está configurado el entorno actual.

## Cómo juzgar cuando ves una petición de Permiso

Cada vez que veas una petición relacionada con Permisos, pregúntate tres cosas:

1. ¿Es imprescindible este paso para completar la Tarea actual?
2. ¿Los datos o la ruta que toca se salen de lo que yo esperaba?
3. Aunque falle la ejecución, ¿sé cómo deshacer o remediar?

Si no puedes responder dos de las tres, no apruebes aún; pide a Codex que explique por qué necesita ese paso.

## Capas de explicación

| Capa | Qué escribe | Dónde leer |
|---|---|---|
| Concepto (esta página) | Por qué hacen falta Aprobación y aislamiento | — |
| Diferencias de producto | Cómo cada entrada muestra la confirmación | [Aprobaciones y Sandbox en la CLI](/guide/cli/approvals-and-sandbox/) · [Ajustes de la App de escritorio](/guide/desktop-app/settings/) |
| Estrategia de Prompt | Cómo declarar límites de Permiso en la Tarea | [Restricciones y límites](/prompts/constraints-and-boundaries/) |

Las políticas oficiales y los valores por defecto pueden cambiar; comprueba [OpenAI Codex](https://developers.openai.com/codex).

La Aprobación pregunta «¿continuar?»; el Sandbox limita «aunque continues, hasta dónde como máximo». Mirar las dos capas juntas deja el límite más claro.

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** OpenAI Developers sigue ofreciendo la entrada oficial de Codex; esta página solo explica que Aprobación, Sandbox y acceso a la red son límites de seguridad distintos, y dirige a los capítulos de cada producto para el comportamiento concreto, sin declarar valores por defecto actuales ni una matriz exacta de Permisos.  
**Última verificación:** 2026-07-26
