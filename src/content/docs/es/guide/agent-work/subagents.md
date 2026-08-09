---
title: Subagents
description: Delegar subtareas a un contexto independiente — cuándo dividir, cómo traspasar y cómo aceptar.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

Un **subagent (Subagent)** es una **unidad de trabajo independiente** que el Agent principal arranca para un subproblema concreto: tiene un contexto relativamente aislado y, al terminar, devuelve el resultado al hilo principal.

Puedes entender un subagent así: das una subtarea clara a un asistente que solo se ocupa de eso. Su valor no está en «ser más cool», sino en «más limpio, más enfocado y más fácil de paralelizar».

## Un concepto central

| Agent principal | Subagent |
|---|---|
| Mantiene el objetivo global y el diálogo con el usuario | Se centra en una sola subtarea |
| El contexto incluye el historial completo | Contexto más limpio, apto para profundizar |
| Coordina y fusiona resultados | Ejecuta exploración, búsqueda o implementación especializada |

Diferencia respecto a [Agents en paralelo](/guide/desktop-app/parallel-agents/): el subagent suele ser una unidad de tarea **delegada activamente por el Agent principal**, no varias ventanas abiertas a mano por el usuario (las implementaciones de producto pueden solaparse; prevalece la UI actual).

## Cuándo merece la pena dividir

No hace falta dividir solo porque la tarea sea grande, sino cuando ves que:

- Un subproblema necesita profundizar por sí solo
- Ese subproblema no es el mismo tipo de trabajo que la línea principal
- Quieres primero una conclusión independiente y luego volver

En esos casos, dividir en subagent suele ser más estable que hacer que el hilo principal cuide a la vez el global y el detalle.

## Escenarios adecuados

| Adecuado | No adecuado |
|---|---|
| Búsqueda dirigida en un monorepo grande: «cómo valida el token el módulo de autenticación» | Necesitas aclarar requisitos ida y vuelta con el usuario |
| Investigar en paralelo dos enfoques técnicos | Subtareas con edición mutuamente excluyente del mismo archivo |
| Análisis largo solo de lectura, sin contaminar el contexto principal | «Mirar un poco» sin entregable claro |

## Roles de subagent que conviene consolidar

De las delegaciones puntuales, lo que más conviene conservar son roles con límites claros y formato de entrega estable.

| Rol | Entrega fuerte | Restricción recomendada |
|---|---|---|
| Revisor de código | Problemas por gravedad, archivo y tests faltantes | Solo lectura por defecto; no arregla salvo petición explícita |
| Ingeniero de tests | Huecos de cobertura, casos a añadir, comandos | Un paquete o workflow por encargo |
| Redactor de documentación | API, migración, guía de usuario | Atado al código y al estilo existente |
| Debugger | Reproducción, causa probable, plan de verificación | Conclusión basada en logs, tests o ruta de código |
| Revisor de seguridad | Amenazas, escaladas, riesgos con secretos | Solo lectura, alcance claro |
| Analista de rendimiento | Hipótesis de cuello de botella, medición, mejoras de bajo riesgo | Requiere benchmark o experimento reproducible |

En tareas de implementación, pide primero un plan de parche. La integración y la verificación final se quedan en el hilo principal.

## Malentendidos habituales

### 1. Más subagents no siempre es mejor

Dividir demasiado trae costes nuevos:

- Tienes que leer más resultados de vuelta
- Distintos subagents pueden contradecirse
- El coste de coordinación puede superar el beneficio

### 2. ¿Si la tarea es compleja, hay que dividir en subagent de inmediato?

No necesariamente.  
Si el problema está muy acoplado y hay que confirmar contigo a menudo, avanzar en el hilo principal suele ahorrar más.

### 3. ¿Puede el subagent de paso hacer también todos los cambios?

Si puede depende de cómo lo delegues; pero el enfoque por defecto más estable es:

- Dejar primero que el subagent haga análisis de solo lectura, comparación y localización
- Tras ver las conclusiones en el hilo principal, decidir si entrar a modificar

## Flujo de trabajo recomendado

### 1. El Agent principal escribe el contrato de la subtarea

```text
Subtarea: análisis de solo lectura de la lógica de refresco de session en packages/auth.
Entrega: resumen de ≤1 página + rutas de archivos clave + puntos de riesgo.
Prohibido: cambiar cualquier archivo; no hacer push.
```

Aquí lo importante no es el formato, sino dejar claras 4 cosas:

- De qué se ocupa exactamente
- Cómo debe ser el entregable
- Qué acciones no puede hacer
- Quién decide tras la vuelta

### 2. El subagent ejecuta y devuelve un resultado estructurado

Formato esperado:

```text
## Conclusión
## Evidencia (archivo:línea)
## Siguiente paso sugerido
## Problemas sin resolver
```

### 3. El Agent principal fusiona y decide

El hilo principal (o tú) decide qué ruta adoptar y luego entra en la fase de ejecución de [Explorar—planificar—ejecutar—verificar](/cases/workflows/explore-plan-execute-verify/).

### 4. Aceptación

- Si la salida del subagent se puede verificar de forma independiente (abrir archivos y contrastar)
- Si modificó el repositorio fuera de su alcance
- Si, con varios subagents, los conflictos de conclusión ya están marcados

## Criterios para decidir

Si una subtarea cumple 2 de estas 3 condiciones, puedes considerar dividir:

1. Se puede describir de forma independiente
2. Tiene un entregable claro
3. No necesita compartir a menudo el mismo montón de contexto fino con el hilo principal

## Coordinación con Skill y MCP

- **Skill**: define el formato estándar de entrega de la subtarea (p. ej. lista de revisión de seguridad)
- **MCP**: el subagent consulta solo lectura tickets externos; el Agent principal decide en conjunto

## Errores frecuentes

- Alcance del subagent demasiado grande: se convierte en un segundo Agent principal
- No exigir retorno estructurado: el hilo principal vuelve a leer logs largos
- Varios subagents cambian el mismo directorio a la vez

El subagent encaja mejor en subproblemas con «límites claros, entrega explícita y que se pueden completar solos»; no sirve para copiar otra vez toda la tarea principal.

## Lectura complementaria

- [Coordinación multi-agent](/cases/workflows/multi-agent-coordination/)
- [Traspaso y reanudación](/guide/agent-work/handoff-and-resume/)

---

**Estado:** verificado  
**Productos aplicables:** App / CLI / Cloud  
**Base de verificación:** Contrastado con las explicaciones públicas actuales de OpenAI Developers sobre multi-agent, tareas largas y flujos en paralelo; esta página solo confirma el principio estable de «subtareas independientes, límites claros, entrega explícita»; donde toca UI actual o implementación concreta de planificación se mantiene como formulación no contractual («según el producto actual»).  
**Última verificación:** 2026-07-26
