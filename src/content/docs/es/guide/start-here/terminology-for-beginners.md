---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Esta página solo ofrece una guía de terminología para principiantes; se revisaron enlaces internos y las explicaciones de términos, y el cuerpo no depende de hechos de producto volátiles."
  checkedAt: "2026-07-26"
title: Terminología para principiantes
description: Definiciones breves de tarea, contexto, sandbox, Skill y otros términos frecuentes.
locale: es
source_locale: zh-CN
source_revision: 'a18bacf'
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-25
sidebar:
  order: 6
---

Para entradas más completas, ve al [Glosario](/es/guide/reference/glossary/). Aquí están primero los términos más comunes y que más afectan la lectura.

Al empezar el manual de Codex, lo que más atasca suele ser la densidad de nombres. Cada palabra por separado se entiende; juntas, marean.

Hay sobre todo dos situaciones:

- Entiendes cada palabra, pero no sabes a qué apunta en la práctica
- No sabes qué términos debes dominar ya y cuáles pueden esperar

No lo trates como un examen de vocabulario. Basta con saber de qué hablan para no quedarte trabado al leer.

## Los primeros términos que conviene conocer

Si tu objetivo ahora es solo completar la primera tarea, entiende primero estos 6:

| Término | Por qué primero |
|---|---|
| **Prompt** | Cómo dejas clara la tarea |
| **Contexto** | Qué información puede ver Codex ahora |
| **Agent** | Por qué no se limita a devolver un párrafo |
| **Aprobación** | Por qué a veces se detiene a preguntarte |
| **Diff** | Cómo compruebas qué cambió exactamente |
| **Tarea** | La unidad básica de un trabajo completo |

| Término | Explicación breve |
|---|---|
| **Prompt** | El objetivo, el trasfondo y los requisitos que le das a Codex |
| **Contexto** | Proyecto, archivos y conversación que el modelo puede ver ahora |
| **Agent** | Forma de ejecución que llama herramientas e itera hacia un objetivo |
| **Herramienta** | Capacidades invocables: leer archivos, ejecutar comandos, buscar, etc. |
| **Sandbox** | Entorno de ejecución que limita el alcance en el sistema de archivos y la red |
| **Aprobación** | Algunas operaciones solo continúan si das tu consentimiento explícito |
| **Diff** | Comparación del contenido antes y después del cambio, para tu revisión |
| **Hilo / sesión** | Una conversación continua y su contexto acumulado |
| **Tarea** | Una unidad de trabajo con objetivo (puede abarcar varias llamadas a herramientas) |
| **Skill** | Paquete reutilizable de instrucciones y recursos para un trabajo concreto (avanzado) |
| **MCP** | Protocolo para conectar herramientas y fuentes de datos externas (avanzado) |
| **Tarea Cloud** | Tarea que se ejecuta en un entorno cloud, no en el sandbox local |

## En palabras más sencillas

- **Prompt**: lo que dices cuando le das la tarea
- **Contexto**: el material que tiene a mano en ese momento
- **Agent**: no solo te responde un párrafo; hace avanzar la tarea
- **Aprobación**: hay cosas que no puede hacer solo; necesita tu visto bueno
- **Diff**: la comparación entre antes y después del cambio
- **Skill**: empaquetar un procedimiento fijo para reutilizarlo

## Cómo usarlos

Cuando los veas en otras páginas, no hace falta parar cada vez a buscar la definición:

- Si entiendes a grandes rasgos, sigue leyendo
- Si los ves una y otra vez y siguen borrosos, vuelve aquí
- Si ya afectan a entender el flujo, lee la página temática correspondiente

## Puedes agruparlos

Si no quieres memorizar demasiados de golpe:

- Qué dices tú: Prompt
- Qué ve él: Contexto
- Cómo actúa: Agent, Herramienta
- Si puede actuar: Aprobación, Sandbox
- Cómo compruebas tú: Diff, resultado de la tarea

## Estos pueden esperar

Lo siguiente suele ser avanzado; la primera vez no hace falta dominarlo:

- Skill
- MCP
- Hook
- Plugin
- Detalles del entorno Cloud

Completa primero la [primera tarea](/es/guide/getting-started/run-your-first-task/) y luego vuelve a estos términos; suele encajar mejor.

Cuando aparezca una palabra nueva, consulta y sigue leyendo.

En la primera lectura, trátalos como pistas. Saber más o menos a qué apuntan es más realista que memorizarlos todos de entrada.
