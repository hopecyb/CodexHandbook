---
title: Permisos y Aprobaciones
description: Explica cuándo Codex necesita que apruebes una operación.
locale: es
source_locale: zh-CN
source_revision: 0870303
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 70
---

Codex no debería ejecutar operaciones de alto riesgo sin consentimiento. La **Aprobación** es la compuerta de la colaboración entre persona y máquina.

Si Codex pudiera leer cualquier archivo, conectarse a la red a voluntad y ejecutar cualquier comando, el coste de entender mal una Tarea sería alto.

## Qué te importa

- Si puede leer/escribir rutas fuera del proyecto actual
- Si puede conectarse a la red
- Si puede ejecutar ciertos comandos de shell
- Si el equipo impone políticas obligatorias (configuración gestionada)

## Qué controla

Puedes ver la Aprobación como «la caja de confirmación antes de un paso peligroso».

Por ejemplo, en estos casos debería detenerse y preguntarte:

- va a escribir en archivos
- va a ejecutar un comando que puede cambiar el sistema
- va a acceder a rutas fuera del proyecto
- va a leer o enviar contenido por la red

Ver un popup o una petición de confirmación no significa que Codex haya fallado; muchas veces solo está respetando el límite de seguridad.

## Malentendidos frecuentes

### 1. ¿Por qué a veces actúa solo y otras te pregunta?

Porque el riesgo de cada operación es distinto.

- Leer un archivo corriente: riesgo bajo
- Cambiar muchos archivos, salir a la red, ejecutar comandos: riesgo más alto

### 2. ¿Debería pulsar siempre «permitir»?

Al menos mira estas tres cosas:

1. qué va a hacer
2. a qué afectará
3. si es lo que tú querías que hiciera

### 3. Si rechazo, ¿se arruina toda la Tarea?

En general, no. Puedes rechazar y pedirle que continúe de una forma más segura.

## Principios sencillos al usar

- Si no lo entiendes, no apruebes todavía
- Ten especial cuidado si sale del alcance del proyecto actual
- Mira con más atención cuando pida red, comandos o ediciones masivas
- Si dudas, pídele primero que explique «por qué necesita este permiso»

## Explicación por capas

| Capa | Qué dice | Dónde leerlo |
|---|---|---|
| Concepto (esta página) | Por qué hace falta la Aprobación | — |
| Diferencias de producto | Cómo confirma cada entrada | [Guías de producto](/es/guide/) |
| Estrategia de Prompt | Cómo declarar límites de permiso en la Tarea | [Definir restricciones](/es/prompts/constraints-and-boundaries/) |

Las políticas oficiales y los valores por defecto pueden cambiar; comprueba [https://developers.openai.com/codex](https://developers.openai.com/codex).

La Aprobación sirve para que «si se puede hacer» lo decidas siempre tú.

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** La documentación actual de introducción a Codex CLI en OpenAI Help Center sigue distinguiendo approval modes y estratificando por riesgo acciones como leer archivos, escribir archivos y ejecutar comandos; esta página solo explica por qué existe la Aprobación, cuándo conviene aprobar con cautela y cómo juzgar el alcance del impacto, sin declarar valores por defecto fijos del producto.  
**Última verificación:** 2026-07-26
