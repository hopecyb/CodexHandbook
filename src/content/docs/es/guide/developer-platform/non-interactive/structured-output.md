---
title: Salida estructurada
description: Hacer que exec produzca resultados parseables por máquina — para pasos posteriores, paneles y puertas de calidad.
locale: es
source_locale: zh-CN
source_revision: aa19d49
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 30
reviewed_at: 2026-08-26
---

La primera vez que se automatiza, mucha gente deja que Codex escriba un párrafo «que suena razonable». Sirve para leerlo una persona; no tanto para un script.

La salida estructurada resuelve algo directo: que Codex devuelva el resultado en el formato que tú defines.

Si una Tarea no interactiva solo produce texto libre, al siguiente paso le cuesta decidir automáticamente «¿pasó o falló?», «¿cuántos hallazgos?», «¿qué gravedad?». La salida estructurada hace el resultado más apto para que una máquina lo siga procesando.

## Contenido de esta página

- Cuándo pedir JSON / tabla Markdown / campos fijos
- Cómo definir el schema en el Prompt
- Estrategia de degradación si falla el parseo

## Malentendidos frecuentes

### La salida estructurada existe para que el siguiente paso pueda engancharse

Mucha gente oye JSON y schema y lo toma por manía de ingeniería.

La razón práctica: si el siguiente paso es un script que juzga éxito/fallo, un bot que comenta o un panel que muestra resultados, necesitas un formato estable, no que el programa adivine cada vez qué estás diciendo.

### Formato estable ≠ conclusión fiable

La salida estructurada solo garantiza que «se parece a lo que pediste»; no garantiza que la Tarea se entendiera bien.

Resuelve la interfaz de salida; no sustituye la definición de la Tarea ni la Verificación del resultado.

## Una distinción directa

- Texto libre: para personas
- Salida estructurada: para programas

Si el siguiente paso es `jq`, un script, un panel, una puerta de calidad o un bot de comentarios, no deberías depender solo de lenguaje natural libre.

## Práctica mínima usable

Al final del Prompt, fija el formato:

```text
…(cuerpo de la Tarea)…

Requisitos de salida:
- Solo un objeto JSON, sin cercas de código markdown
- Campos: {"pass": boolean, "findings": [{"severity":"P0|P1|P2", "file":"", "message":""}]}
- Si no hay problemas, findings es un array vacío
```

Parseo en Shell (esquema):

```bash
result=$(codex exec --cd . "$(cat prompts/structured-review.md)")
echo "$result" | jq -e '.pass == true'
```

## Trampas frecuentes

### 1. Decir «salida JSON» sin decir «solo JSON»

El modelo explica primero y luego da el JSON: el parseo falla.

### 2. Un nombre de campo hoy, otro mañana

Si el script depende de un campo, trata el schema como interfaz, no lo cambies a la ligera.

### 3. Querer que la salida estructurada resuelva toda la vaguedad

Resuelve «formato estable». Si la Tarea en sí está mal definida, el JSON solo emitirá de forma estable un resultado confuso.

## Flujo de trabajo recomendado

```text
Definir schema (versión v1)
    → El Prompt referencia el archivo de schema @schemas/review-output.json
    → Ejecutar exec
    → Validar con jq / validador propio
    → Si no pasa, exit 1
```

Con salidas grandes puedes pedir un campo de ruta de archivo; el Agent escribe en `artifacts/` y CI sube el artifact.

## Cómo juzgar

Si el resultado lo consume «el siguiente programa», estructura.  
Si es sobre todo para leer y discutir, el texto libre suele ser más natural.

Mientras el resultado deba seguir procesándolo un programa, haz que Codex lo devuelva con campos acordados y estables.

## Comparación con el SDK

| | CLI + Prompt JSON | SDK |
|---|---|---|
| Coste de integración | Bajo | Medio |
| Seguridad de tipos | Por convención + validación | Tipos del SDK |
| Adecuado | Scripts de CI | Servicios multi-tenant |

Véase [Resumen del SDK](/es/guide/developer-platform/sdk-overview/).

## Errores frecuentes

- El modelo mezcla texto explicativo y el JSON falla — enfatiza «solo JSON» en el Prompt
- Cambio de schema sin subir versión; CI antigua parsea mal
- Meter secretos en campos JSON que vuelven a los logs
- Sin comportamiento de salida claro ante fallo de parseo

## Lista de aceptación

- [ ] Hay archivo de schema o campos documentados
- [ ] CI falla de forma explícita si el parseo falla
- [ ] Salidas de ejemplo en `fixtures/` para regresión
- [ ] Alineado con la estrategia de [códigos de salida](/es/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## Fuentes de referencia
- Prácticas generales de structured outputs de OpenAI (alineación conceptual)
---

**Estado:** verified  
**Productos aplicables:** CLI / API  
**Base de verificación:** La documentación actual de modelos/comparación de la API de OpenAI sigue listando la capacidad `Structured outputs`; el contenido se limita a la práctica general de «diseñar una interfaz de salida estable para Tareas no interactivas»; el schema JSON, la validación y la degradación del ejemplo son patrones de ingeniería.  
**Última verificación:** 2026-07-26
