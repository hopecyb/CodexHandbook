---
title: Verificación
description: Revisa diffs, ejecuta pruebas, valida fuentes y define el criterio de hecho.
sidebar:
  order: 17
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Verificación

El error más frecuente de muchos principiantes la primera vez con Codex es **tratar «dijo que está hecho» como si realmente lo estuviera**.

Verificación significa: no mirar lo que dice, sino si el resultado cumple de verdad tus requisitos.

La salida de Codex debe ser comprobable. La Verificación no es opcional: cierra el ciclo de cada Tarea.

## Qué mira realmente la Verificación

Tanto si cambias código, escribes documentación o investigas, al final respondes a la misma pregunta:

> **¿Esto ahora «casi parece» o «ya se puede entregar»?**

Muchas repeticiones no vienen de que el modelo falle del todo, sino de que:

- Cambió lo que no debía
- Dejó a medias lo que sí debía
- Dice que consultó fuentes, pero no son fiables
- La página abre, pero el flujo real no funciona
- El documento existe, pero un recién llegado no puede seguirlo

Por eso la Verificación sirve para **cerrar el riesgo antes de la entrega**.

## Malentendidos frecuentes

### 1. Si se puede ejecutar, ya está hecho

«Se puede ejecutar» solo dice que no falló al instante; no implica:

- Lógica correcta
- Alcance correcto
- Sin regresiones
- Resultado alineado con lo que pediste

### 2. Si el modelo dice «ya verificado», puedes confiar

Mira **qué Verificación hizo de verdad**. Por ejemplo:

- ¿Ejecutó las pruebas de verdad?
- ¿Leyó el Diff de verdad?
- ¿Abrió el artefacto para comprobarlo?
- ¿Dio fuentes rastreables?

### 3. ¿La Verificación solo la necesitan los programadores?

Escribir artículos, tablas, generar configuración, organizar material o redactar la descripción de un PR también requieren Verificación; solo cambia el método.

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

- [Revisar diffs](/guide/quality/review-diffs/) — leer el Diff, confirmar alcance y riesgo
- [Ejecutar pruebas](/guide/quality/run-tests/) — regresión automática
- [Verificar artefactos](/guide/quality/verify-artifacts/) — documentos, configuración, generados
- [Validar fuentes](/guide/quality/validate-sources/) — conclusiones de investigación rastreables
- [Gestionar la incertidumbre](/guide/quality/handle-uncertainty/) — qué hacer cuando el modelo no está seguro
- [Definición de hecho](/guide/quality/definition-of-done/) — qué significa «está hecho»

## Cada tipo de Tarea enfatiza algo distinto

- **Cambiar código**: mira el Diff, luego ejecuta pruebas, luego pasa a mano las rutas críticas
- **Escribir documentación**: si encaja con el lector objetivo, si los enlaces funcionan, si los pasos se pueden seguir de verdad
- **Investigar**: si las fuentes son reales, si están actualizadas, si la conclusión no se sale de la evidencia
- **Generar configuración o scripts**: premisas del entorno, alcance de Permisos, cómo recuperar tras un fallo

Si no sabes por dónde empezar, lee por defecto [Definición de hecho](/guide/quality/definition-of-done/).

La Verificación confirma que este resultado se puede usar, se puede confiar en él y se puede entregar.

Cómo escribir criterios de aceptación en el Prompt: [definir el criterio de hecho](/prompts/define-done/). Casos de extremo a extremo: [casos prácticos](/cases/).

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** La página de inicio de OpenAI Developers sigue enfatizando usar Codex para construir, probar, revisar y entregar cambios; esta página descompone la Verificación en revisar diffs, ejecutar pruebas, validar fuentes y definir hecho, y se cruzó con los capítulos de calidad del sitio.  
**Última verificación:** 2026-07-26
