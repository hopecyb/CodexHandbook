---
title: Agents en paralelo
description: Avanzar varias Tareas de Agent a la vez sin acabar en conflictos de merge ni en un caos de revisión.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

Los Agents en paralelo sirven para repartir **trabajo que ya puede avanzar de forma independiente**, de modo que el hilo principal se centre en coordinar, aceptar resultados y decidir el merge.

Si la división es correcta, el paralelismo acorta mucho la espera; si no lo es, solo genera conflictos más deprisa.

## Malentendidos frecuentes

Quien ve «Agents en paralelo» por primera vez suele pensar que solo significa «más rápido». No es del todo falso, pero se queda corto.

La premisa es: **esas Tareas ya pueden sostenerse por sí solas**. Si en realidad dependen unas de otras y solo las has forzado a separarse, el paralelismo te ralentiza: luego hay que alinear premisas, recuperar resultados y gestionar conflictos.

## Cuándo conviene el paralelismo

| Conviene | No conviene |
|---|---|
| Dos investigaciones independientes a la vez | Varios Agents modificando el mismo archivo central |
| Un análisis de solo lectura mientras se redacta un borrador de documentación | Requisitos que cambian a menudo y necesitan aclaraciones tuyas continuas |
| Frontera clara entre la UI front-end y la API back-end | Un problema que no puede empezar sin el resultado de otro |

Criterios habituales:

- **Puedes definir el entregable** → apto para paralelo
- **Puedes acordar límites de antemano** → apto para paralelo
- **Puedes verificar de forma independiente** → apto para paralelo

## Qué hace el Agent principal

En modo paralelo, el Agent principal no tiene que completar todas las subtareas en persona. Se centra en tres cosas:

1. Dejar claro el objetivo y las zonas prohibidas de cada subtarea
2. Comprobar que los resultados sean verificables
3. Decidir el desempate cuando los resultados choquen

El Agent principal actúa más como un pequeño responsable técnico: coordina y elige, no ejecuta todas las subtareas.

## Cómo conviene dividir

### Divide «problemas», no «pasos de un proceso»

Mejor división:

- Agent A: analizar si el fallo de login se debe al refresco del token
- Agent B: revisar los dos últimos cambios relacionados con autenticación

Peor división:

- Agent A: mirar la mitad de los logs
- Agent B: mirar la otra mitad

En el primer caso cada Tarea tiene un objetivo completo; en el segundo solo hay un troceo mecánico y el coste de recuperación es alto.

### Prioriza estos tipos

- **Análisis de solo lectura**: leer código, logs, documentación; listar riesgos
- **Comparación de enfoques**: rutas de implementación A/B, elección de librerías, esquemas de permisos
- **Artefactos con frontera clara**: página independiente, documento independiente, módulo independiente

## Una plantilla de delegación

La instrucción a un Agent paralelo debería incluir, en lo posible, estos cuatro puntos:

```text
Tarea: analizar solo el cálculo de cupones en el flujo de checkout; no modificar código.
Entrega: resumen de 200 palabras + rutas de archivos clave + puntos de riesgo + siguiente paso sugerido.
Límites: no buscar fuera del módulo de pagos; no ejecutar comandos de escritura.
Aceptación: la conclusión debe poder enlazarse a evidencia en archivos o logs.
```

Esto funciona mucho mejor que «échale un vistazo a este problema».

## Tres patrones habituales de paralelismo

### 1. Investigación en dos vías

Cuándo: aún no sabes qué ruta es la correcta.

- Agent A investiga la implementación actual
- Agent B investiga alternativas
- El hilo principal compara coste, riesgo y compatibilidad

### 2. Avance por capas

Cuándo: los límites del sistema ya están claros.

- Agent A trabaja en la capa de documentación o de prompts
- Agent B trabaja en la capa de código o de configuración
- El hilo principal hace la comprobación de coherencia

### 3. Borrador + revisión

Cuándo: necesitas una primera versión y una revisión rápida.

- Agent A produce el borrador
- Agent B solo hace review, sin editar
- El hilo principal decide si adoptarlo

Este patrón encaja bien con completar documentación, revisar PRs y organizar casos.

## Gestión de conflictos

En paralelo, el cuello de botella suele ser el merge.

### Acuerda estos límites de antemano

- Qué directorios corresponde a cada Agent
- Si se permite tocar archivos de configuración compartidos
- Quién tiene el derecho final de commit

### Vuelve a serie en estos casos

- Ambas subtareas necesitan cambiar el mismo flujo de negocio
- La conclusión de un Agent sigue invalidando las premisas del otro
- Te das cuenta de que gastas más tiempo «explicando contexto» que avanzando la Tarea

Cuando el coste de coordinación supera el tiempo ahorrado, el paralelismo deja de tener sentido.

## Revisión y aceptación

La salida de cada Agent paralelo debería cumplir al menos una de estas:

- Poder volver a un archivo, log, enlace o diff concreto
- Explicar con claridad «qué no se ha hecho»
- Decir al hilo principal cómo verificar el siguiente paso

Si la entrega es solo «creo que aquí puede haber un problema», el hilo principal casi no recibe nada útil.

## Errores frecuentes

- Paralelizar a ciegas porque hay muchas Tareas, sin mirar dependencias
- Varios Agents modificando el mismo directorio sin acuerdo de propiedad
- El hilo principal no verifica y simplemente pega los subresultados como respuesta final
- Usar el paralelismo como forma de «pensar menos» y acabar amplificando el caos

La premisa de los Agents en paralelo sigue siendo la misma: Tareas independientes, verificables por separado y avanzadas por separado.

## Orden de lectura recomendado

1. [Subagents](/guide/agent-work/subagents/)
2. [Progreso y reorientación](/guide/agent-work/progress-and-steering/)
3. [Traspaso y reanudación](/guide/agent-work/handoff-and-resume/)
4. [Flujo de coordinación multi-Agent](/cases/workflows/multi-agent-coordination/)

## Fuentes de referencia
- Documentación de OpenAI Codex sobre multitarea y colaboración entre Tareas
---

**Estado:** outdated  
**Productos aplicables:** App  
**Nota de revisión:** La metodología de Agents en paralelo sigue siendo útil, pero esta página la presenta como una capacidad actual que se puede adoptar directamente en la App de escritorio, sin documentación oficial vigente lo bastante sólida sobre la forma concreta de la UI, las entradas y la colaboración entre Tareas; por eso se marca temporalmente como `outdated`.  
**Última verificación:** 2026-07-26
