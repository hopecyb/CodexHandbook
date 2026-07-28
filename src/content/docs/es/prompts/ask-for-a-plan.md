---
title: Pedir un plan primero
description: Antes de que Codex actúe, haz que explique los pasos, los riesgos y cómo verificar.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Muchos problemas no son de imposibilidad, sino de **empezar demasiado rápido**. Un «ayúdame a arreglarlo» mezcla con facilidad exploración, plan y ejecución, y al final solo puedes validar de forma pasiva mirando el diff.

En ese caso es más eficaz pedirle primero un plan, en lugar de alargar cada vez más el requisito.

## Cuándo pedir un plan es imprescindible

| Escenario | Por qué |
|---|---|
| Varios archivos o módulos | fácil tocar zonas no relacionadas |
| No conoces el repositorio | confirmar primero el alcance que entiende |
| El requisito aún oscila | sacar a la luz las discrepancias pronto |
| Necesitas aprobación antes de ejecutar | separar «autorización de ejecución» y «discusión de enfoque» |
| Acciones de alto riesgo | ver antes el rollback y la verificación |

Una typo o un cambio puntual de texto no siempre necesita un plan formal, pero si sientes que «desviarse sería muy costoso», conviene pausar.

## Qué debe cubrir como mínimo un buen plan

Incluso en versión mínima, estos cuatro puntos:

1. pasos
2. archivos o alcance implicados
3. riesgos o puntos por confirmar
4. cómo verificar cada paso

Sin el punto 4, es más una lista de tareas que un plan verificable.

## Tres formulaciones habituales

### Versión mínima

```text
No modifiques el código todavía. Dame primero un plan de 3 a 5 pasos: qué archivos tocarás y cómo verificar cada paso.
```

Encaja cuando ya conoces la dirección y solo quieres ver cómo lo descompone.

### Versión recomendada

```text
No ejecutes todavía. Con base en el repositorio actual, dame un plan que incluya:
1. Comprensión del objetivo
2. Pasos numerados
3. Archivos o directorios implicados
4. Riesgos y puntos por confirmar
5. Forma de verificación

No modifiques archivos hasta que yo responda «ejecuta según el plan».
```

Encaja en desarrollo diario, cambios de documentación, reescritura de Prompts y ajustes de configuración.

### Versión de alto riesgo

```text
No hagas cambios todavía. Produce primero un plan y explica por separado:
- qué paso introduce regresiones con más facilidad
- cómo hacer rollback si falla
- qué operaciones requieren mi confirmación
- qué tests o revisiones humanas demuestran que está terminado
```

Encaja en problemas de producción, configuración de permisos, scripts de automatización y refactorizaciones entre módulos.

## El plan no es cuanto más largo, mejor

Lo que necesitas es un artefacto intermedio **aprobable, corregible y ejecutable**, no un documento largo.

Para juzgar si el plan sirve, mira tres cosas:

- puedes decir con claridad «el paso 2 no; cámbialo por otra cosa»
- ves de un vistazo qué zonas críticas tocará
- sabes antes de empezar cómo aceptar el resultado

Si no, el plan aún no es lo bastante concreto.

## Cómo aprobar el plan

No hace falta reescribirlo entero; basta orientar como a un compañero.

Frases habituales:

```text
Conserva los pasos 1 y 2; elimina el 3.
Separa el cambio de base de datos en un paso propio.
Haz solo análisis de solo lectura; no pases a la implementación.
Añade al plan tests de regresión y un plan de rollback.
```

Eso ahorra más contexto que un «empieza de nuevo» y reorienta el resultado con más facilidad.

## Beneficios frente a «empezar ya»

| Pedir un plan primero | Empezar ya |
|---|---|
| Detectas malentendidos pronto | A menudo solo ves el error de dirección tras el cambio |
| Facilita aprobación y colaboración | Solo puedes mirar el diff final de forma pasiva |
| Ayuda a dividir en subtareas | Fácil mezclar varios objetivos |
| La verificación es visible de antemano | A menudo solo piensas en tests al final |

Muchos flujos separan «exploración» y «plan». Ver [Explorar—planificar—ejecutar—verificar](/cases/workflows/explore-plan-execute-verify/).

## Problemas más frecuentes del plan

### Solo acciones, sin límites

Por ejemplo: «actualiza la documentación y optimiza la estructura», sin decir qué directorios tocar y cuáles no. Ese plan crece con facilidad.

### Solo implementación, sin verificación

Por ejemplo: «cambia la lógica del componente, actualiza estilos, haz commit», sin decir cómo demostrar que el comportamiento no se rompió.

### Solo lista de tareas, sin puntos por confirmar

Un buen plan admite incertidumbre; no finge que todas las premisas ya están cerradas.

## Combinaciones recomendadas

- Cadena de ejecución formal: [Planificación](/guide/agent-work/planning/)
- Plan reutilizable: [Anatomía de una tarea](/prompts/task-anatomy/)
- Corrección a mitad de ejecución: [Progreso y reorientación](/guide/agent-work/progress-and-steering/)
- Aceptación clara: [Definir el terminado](/prompts/define-done/)

## Una convención útil en el equipo

Puedes dejarlo explícito en `AGENTS.md`:

```md
- Cambios que afecten a más de 3 archivos: plan primero
- Sin confirmación, no ejecutar comandos destructivos
- El plan debe incluir la forma de verificación
```

Así «pedir un plan primero» deja de ser un recordatorio puntual y pasa a ser la práctica por defecto del equipo.

## Fuentes de referencia
- Enfoque de plan y ejecución en la documentación oficial de OpenAI Codex
---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Esta página solo describe el método de colaboración de pedir un plan primero; se han revisado enlaces y estructura de ejemplos, y el cuerpo no depende de hechos volátiles del producto.
