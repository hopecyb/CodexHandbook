---
title: Entrada y salida de voz
description: Escenarios, límites y privacidad al interactuar con Codex por voz.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Algunos clientes de Codex admiten **voz**: dictas la tarea o escuchas un resumen de la respuesta. Encaja cuando tienes las manos ocupadas o quieres volcar ideas rápido; **no** sirve para leer claves en voz alta ni sustituye el registro escrito de aceptación.

La voz encaja mejor para expresar dirección, complementar contexto o hacer seguimiento rápido; cuando hace falta detalle preciso, buscable y revisable, vuelve al texto.

## Contenido de esta página

- A qué formas de tarea encaja la voz
- Cómo combinarla con el prompt escrito
- Privacidad y precisión

## Escenarios adecuados

| Adecuado | No adecuado |
|---|---|
| Dictar objetivos de alto nivel, brainstorming | Instrucciones de código precisas hasta nombres de variable |
| Seguimiento breve en móvil | Leer en voz alta API keys o contraseñas |
| Necesidades de accessibility | Documentos normativos que deben ser buscables y con diff |

Tras dictar, conviene pedir a Codex que **repita lo entendido** o genere un plan escrito, y tú confirmas. Ver [Pedir un plan](/prompts/ask-for-a-plan/).

## Para qué sirve la voz

Ventajas principales:

- Rápida
- Libera las manos
- Encaja para volcar primero lo que tienes en la cabeza

Problemas habituales:

- Fácil omitir palabras
- Fácil oír mal
- No encaja para rutas exactas, nombres de variable o parámetros de línea de comandos

La práctica habitual es dictar primero la dirección y luego completar la confirmación por escrito.

## Recomendaciones de uso

1. Entorno silencioso, frases cortas; di por partes «objetivo / restricciones / criterios de hecho»
2. Con rutas de archivo o nombres de rama, **pasa a teclear** o pide al Agent que repita la ortografía
3. En proyectos sensibles, desactiva el procesamiento de voz en la nube (si el producto ofrece opción local/desactivar)
4. Decisiones importantes: deja registro escrito en issue o PR

## Malentendidos habituales

### 1. ¿La voz puede sustituir del todo al teclado?

No.  
Esto conviene teclearlo:

- Rutas de archivo
- Nombres de rama
- Comandos
- Parámetros
- Criterios de aceptación

### 2. Cuanto más largo y detallado digas, no necesariamente menos errores

Un dictado largo sin estructura dispersa el foco con más facilidad.

### 3. ¿La respuesta por voz sustituye la revisión del resultado?

No.  
El resumen por voz ayuda a captar la idea rápido, pero al confirmar cambios, archivos, diffs y resultados de tests hay que volver al texto y al artefacto.

## Orden habitual de formulación

Si empiezas la tarea por voz, puedes decir en este orden:

1. Qué quiero hacer
2. Qué no hacer
3. Cómo verificar al terminar

Al acabar, pide que lo organice en versión escrita para que confirmes.

## Privacidad

- La voz puede pasar por transcripción en la nube; no leas PII de clientes ni credenciales
- En lugares públicos, cuidado con quien escucha
- La política del equipo puede prohibir funciones de grabación con nombres de código confidenciales

## Relación con lo multimodal

- **Entrada de imagen**: diseños, capturas → [Prompts con imágenes](/prompts/prompting-with-images/)
- **Entrada de voz**: esta página
- **Salida**: sigue centrada en código, archivos y diffs escritos; el resumen por voz no sustituye la revisión

## Errores frecuentes

- Dictado largo sin estructura; el Agent omite restricciones
- Aceptar por voz un lote grande de cambios de código sin mirar el diff
- Describir por voz detalles no desensibilizados de un incidente de producción

La voz sirve para arrancar y hacer seguimiento; no sustituye instrucciones precisas, el tratamiento de información sensible ni la aceptación final.

---

**Estado:** verificado  
**Productos aplicables:** App / Desktop Voice (según plan y ajustes del espacio de trabajo)  
**Base de verificación:** El OpenAI Help Center actual (*ChatGPT Voice* y *ChatGPT Work and Codex*) deja claro que Voice puede usarse en la App de escritorio con Work / Codex para arrancar tareas, seguir el progreso y coordinar trabajo; capacidad y disponibilidad dependen del plan, ajustes del espacio de trabajo y versión. Esta página se centra en escenarios adecuados de la voz, privacidad y el método «tras dictar, volver a confirmar por escrito».  
**Última verificación:** 2026-07-26
