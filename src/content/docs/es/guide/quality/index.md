---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "La página de inicio de OpenAI Developers sigue enfatizando usar Codex para construir, probar, revisar y entregar cambios; esta página descompone la verificación en revisar diffs, ejecutar pruebas, validar fuentes y definir cuándo está terminado, y se cruzó con los capítulos de calidad del sitio."
  checkedAt: "2026-07-26"
title: Calidad y verificación
description: Revisa diffs, ejecuta pruebas, valida fuentes y define el criterio de finalización.
sidebar:
  order: 21
locale: es
source_locale: zh-CN
source_revision: "90d62fb"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-25
---

El error más frecuente de muchos principiantes la primera vez con Codex es **tratar «dijo que está hecho» como si realmente lo estuviera**.

Verificación significa: no mirar lo que dice, sino si el resultado cumple de verdad tus requisitos.

La salida de Codex debe ser comprobable. La verificación no es opcional: cierra el ciclo de cada tarea.

![Ilustración: una lupa revisa las líneas añadidas y eliminadas de un diff, junto a una lista de aceptación y tubos de ensayo, con un punto marcado como pendiente](/illustrations/verification.webp)

## Qué mira realmente la verificación

Tanto si cambias código, escribes documentación o investigas, al final respondes a la misma pregunta:

> **¿El resultado solo parece estar casi listo o ya se puede entregar?**

Muchas repeticiones no vienen de que el modelo falle del todo, sino de que:

- Cambió lo que no debía
- Dejó a medias lo que sí debía
- Dice que consultó fuentes, pero no son fiables
- La página abre, pero el flujo real no funciona
- El documento existe, pero un recién llegado no puede seguirlo

Por eso la verificación sirve para **cerrar el riesgo antes de la entrega**.

## Malentendidos frecuentes

### 1. Si se puede ejecutar, ya está hecho

«Se puede ejecutar» solo dice que no falló al instante; no implica:

- Lógica correcta
- Alcance correcto
- Sin regresiones
- Resultado alineado con lo que pediste

### 2. Si el modelo dice «ya verificado», puedes confiar

Mira **qué verificación hizo de verdad**. Por ejemplo:

- ¿Ejecutó las pruebas de verdad?
- ¿Leyó el diff de verdad?
- ¿Abrió el artefacto para comprobarlo?
- ¿Dio fuentes rastreables?

### 3. ¿La verificación solo la necesitan los programadores?

Escribir artículos, tablas, generar configuración, organizar material o redactar la descripción de un PR también requieren verificación; solo cambia el método.

## Si aún no tienes tu propio flujo, comprueba en este orden

Si aún no tienes flujo propio, empieza así:

1. Mira si el resultado se desvió del tema
2. Mira si el alcance del cambio es demasiado grande
3. Ejecuta las comprobaciones automáticas posibles
4. Al final, mira con ojos humanos si se puede entregar

Puedes entenderlo como:

- **¿Va en la dirección correcta?**
- **¿Cambió demasiado?**
- **¿Lo pasó la máquina?**
- **¿Una persona se atreve a recibirlo?**

## Temas centrales

- [Revisar diffs](/es/guide/quality/review-diffs/) — leer el diff, confirmar alcance y riesgo
- [Ejecutar pruebas](/es/guide/quality/run-tests/) — regresión automática
- [Verificar artefactos](/es/guide/quality/verify-artifacts/) — documentos, configuración, generados
- [Validar fuentes](/es/guide/quality/validate-sources/) — conclusiones de investigación rastreables
- [Gestionar la incertidumbre](/es/guide/quality/handle-uncertainty/) — qué hacer cuando el modelo no está seguro
- [Definición de terminado](/es/guide/quality/definition-of-done/) — qué significa «está hecho»
- [Uso, tiempo y elección de modelo](/es/guide/quality/usage-time-and-model-choice/)
- [Evaluación de flujos de trabajo y 20 muestras](/es/guide/quality/workflow-evaluation/)

## Cada tipo de tarea enfatiza algo distinto

- **Cambiar código**: mira el diff, luego ejecuta pruebas, luego pasa a mano las rutas críticas
- **Escribir documentación**: si encaja con el lector objetivo, si los enlaces funcionan, si los pasos se pueden seguir de verdad
- **Investigar**: si las fuentes son reales, si están actualizadas, si la conclusión no se sale de la evidencia
- **Generar configuración o scripts**: premisas del entorno, alcance de permisos, cómo recuperar tras un fallo

Si no sabes por dónde empezar, lee por defecto [Definición de terminado](/es/guide/quality/definition-of-done/).

La verificación confirma que este resultado se puede usar, se puede confiar en él y se puede entregar.

Cómo escribir criterios de aceptación en el prompt: [definir el criterio de finalización](/es/prompts/define-done/). Casos de extremo a extremo: [casos prácticos](/es/cases/).
