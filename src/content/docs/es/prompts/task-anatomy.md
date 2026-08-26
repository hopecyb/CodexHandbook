---
title: Estructura de una buena tarea
description: Objetivo, contexto, entradas, restricciones, aceptación y límites de permisos.
locale: es
source_locale: zh-cn
source_revision: 4df3d01
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Cuando una solicitud contiene mucha información sin organizar, el resultado esperado, los límites y la aceptación acaban mezclados. Codex tiene entonces que completar los vacíos por su cuenta.

Esta página ofrece una ficha de tarea reutilizable. Explica qué problema resuelve cada parte y cómo la descripción entra en el ciclo de explorar, planificar, ejecutar y verificar.

## Para quién es

- Personas que ya saben abrir Codex, pero suelen obtener cambios excesivos, trabajos incompletos o resultados difíciles de verificar.
- Desarrolladores, creadores y equipos que quieren convertir requisitos verbales en trabajo para un Agent.
- Quienes necesitan definir el alcance, los permisos y las condiciones de parada de una tarea larga.

## Estructura de la tarea

Puedes organizarla en este orden:

- resultado deseado;
- motivo;
- materiales necesarios;
- límites;
- forma de comprobar que ha terminado.

El orden no tiene que ser rígido, pero aclarar estos puntos hace mucho más estable la ejecución.

## Plantilla recomendada

```text
Objetivo: ... (cuál es el entregable final)
Contexto: ... (por qué importa y cuál es la situación actual)
Entradas: ... (archivos, enlaces o contenido pegado relevante)
Restricciones: ... (alcance editable, estilo y acciones prohibidas)
Criterios de aceptación: ... (condiciones observables de finalización)
Límites de permisos: ... (internet, dependencias y configuración)
Si falta información: pregunta primero; no hagas suposiciones.
```

![Ciclo desde la especificación de una tarea hasta un resultado verificable](/diagrams/task-execution-loop-es.svg)

Los seis campos de la izquierda no pretenden alargar el prompt, sino eliminar vacíos críticos. Una vez iniciada la ejecución, las evidencias de verificación determinan el siguiente paso: solo se entrega si todo pasa; si no, se vuelve a la tarea o al plan con la información del fallo, en lugar de seguir cambiando cosas a ciegas.

## Función de cada sección

- **Objetivo:** evita que la tarea describa una acción sin definir el resultado.
- **Contexto:** ayuda a Codex a entender por qué importa ese enfoque.
- **Entradas:** pone a su alcance los archivos, enlaces y materiales que debe consultar.
- **Restricciones:** impide ampliar el alcance o realizar cambios incidentales.
- **Aceptación:** convierte la finalización en algo comprobable.
- **Permisos:** aclara de antemano los límites de internet, instalación y configuración.

## Errores de interpretación habituales

### 1. Todas las secciones deben ser extensas

La plantilla se parece más a una lista de comprobación que a un formulario. Algunas tareas no necesitan mucho contexto, pero omitirlo también elimina información útil para decidir.

### 2. El objetivo y la aceptación son lo mismo

No lo son.

- **Objetivo:** qué resultado quieres obtener.
- **Aceptación:** cómo sabrás que realmente se ha conseguido.

### 3. Las entradas consisten en pegar todo el material disponible

La relevancia importa más que el volumen. Señala de forma explícita qué materiales es imprescindible consultar.

## Plantilla mínima

Si solo necesitas una versión práctica para empezar, puedes reducirla a esto:

```text
Objetivo: convertir qué en qué resultado
Entrada: archivos o páginas relevantes
Restricciones: qué se puede modificar y qué no debe tocarse
Aceptación: cómo comprobaré que el trabajo está terminado
Si hay dudas: pregunta primero
```

## De una solicitud ambigua a una tarea ejecutable

### Solicitud original

```text
Mejora la página de inicio de la documentación.
```

No define el público, el alcance editable ni qué significa «mejor». Aunque Codex produzca contenido, será difícil saber si se excedió.

### Versión ejecutable

```text
Objetivo: reescribir la primera pantalla de la página de inicio para que una
persona que no conoce Codex entienda en 30 segundos qué es y por dónde empezar.
Contexto: la página actual presupone que el lector ya conoce Agent, contexto y Skill.
Entrada: src/content/docs/guide/index.md
Restricciones: modifica solo este archivo; no cambies la navegación, los estilos
ni los componentes. Explica Agent en lenguaje sencillo la primera vez que aparezca.
Criterios de aceptación:
- La primera pantalla indica el propósito, el público y el primer punto de lectura.
- Se conservan el frontmatter y los niveles de encabezado.
- No se añade jerga sin explicar.
- pnpm build pasa correctamente.
Permisos: se pueden leer páginas relacionadas del sitio; sin internet, instalaciones,
cambios de configuración ni Git commit.
Si falta información: enumérala junto con el alcance propuesto y espera confirmación.
```

### Proceso de ejecución esperado

1. Leer la página de inicio y las entradas adyacentes, y explicar los problemas actuales.
2. Proponer un plan breve que afecte a un solo archivo.
3. Modificar el texto y resumir el diff.
4. Ejecutar `pnpm build`.
5. Presentar evidencias para cada uno de los cuatro criterios de aceptación.

## Cómo revisar la tarea antes de enviarla

- ¿El objetivo describe un resultado o solo acciones como «mejorar», «arreglar» o «revisar»?
- ¿Las entradas se limitan a archivos y materiales realmente relevantes?
- ¿Las restricciones indican qué partes no deben tocarse?
- ¿Otra persona podría decidir si cada criterio pasa o falla?
- ¿Hace falta autorizar de antemano internet, instalaciones, escrituras externas o commits?
- Cuando falte información, ¿el Agent debe preguntar, investigar o detenerse?

Ajusta la plantilla al tamaño de la tarea. Una errata en un solo archivo necesita poco contexto; una migración entre módulos no puede reducirse a una frase con el objetivo.

## Siguientes pasos

- [Definir cuándo está terminado](/es/prompts/define-done/)
- [Restricciones y límites](/es/prompts/constraints-and-boundaries/)
- [Pedir primero un plan](/es/prompts/ask-for-a-plan/)
- [Explorar, planificar, ejecutar y verificar](/es/cases/workflows/explore-plan-execute-verify/)

---

**Estado:** verified
**Productos aplicables:** App / CLI / IDE / Cloud
**Base de verificación:** Esta página documenta un método estable para diseñar tareas. Se revisaron los ejemplos y enlaces internos, y el contenido no depende de interfaces, precios ni versiones cambiantes.
**Última verificación:** 2026-08-25
