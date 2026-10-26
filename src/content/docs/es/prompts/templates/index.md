---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Esta página solo describe el uso de plantillas; se han revisado enlaces y tipología, y el cuerpo no depende de hechos volátiles del producto."
  checkedAt: "2026-07-26"
title: Plantillas de prompts
description: Esqueletos reutilizables por tipo de tarea — comprender, crear, modificar, diagnosticar, revisar, investigar, automatizar.
locale: es
source_locale: zh-CN
source_revision: 'fae2ed3'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-25
---


Ante una «plantilla», hay dos reacciones habituales:

- o la ves demasiado rígida y no quieres usarla
- o la copias tal cual sin distinguir qué hay que adaptar

La plantilla sirve sobre todo para no olvidar bloques clave; no piensa por ti.

El objetivo de estas páginas es conservar la estructura de la tarea, no generar la única respuesta correcta.

## Cómo usarlas

Puedes hacerlo así:

1. Elige el tipo de plantilla más cercano a la tarea
2. Sustituye el contenido entre `【】` por tu caso real
3. Elimina los bloques irrelevantes
4. Añade las restricciones y la aceptación propias de esta vez

La plantilla es un andamiaje, no una respuesta tipo.

| Plantilla | Escenario |
|---|---|
| [Comprender](/es/prompts/templates/understand/) | Leer repositorio, documentación o material y construir primero el mapa mental |
| [Crear](/es/prompts/templates/create/) | Implementar de cero una función, un texto o un artefacto |
| [Modificar](/es/prompts/templates/change/) | Iterar sobre lo existente con límites |
| [Diagnosticar](/es/prompts/templates/diagnose/) | Localizar la causa raíz, sin cambiar código todavía |
| [Revisar](/es/prompts/templates/review/) | Revisar un diff, un PR o un cambio de documentación |
| [Investigar](/es/prompts/templates/research/) | Investigación y comparación con citas |
| [Automatizar](/es/prompts/templates/automate/) | Tareas repetidas, scripts y flujos desatendidos |

## De plantilla a flujo de trabajo

Algunos prompts se usan una sola vez; otros se repiten tanto que conviene estabilizarlos.

| Tarea repetida | Empieza como | Cuando sea estable, pasa a |
|---|---|---|
| Preparar PR | Plantilla de revisión/modificación | Skill con checklist fijo |
| Generar docs de API | Plantilla de crear/modificar | Skill + script de documentación |
| Ampliar cobertura de tests | Plantilla de modificación | Skill + comandos de test acordados |
| Investigar rendimiento | Plantilla de diagnóstico | Subagent o Skill específico |
| Revisar formato tras escribir archivos | No encaja solo como plantilla | Hook |
| Leer tickets externos antes de tocar código | Plantilla de investigación | MCP + Skill |

La plantilla encaja cuando una persona inicia la tarea; Skill cuando el proceso se repite; Hook cuando el chequeo debe dispararse solo; MCP cuando hace falta acceder a sistemas externos.

## Decisión rápida: ¿en qué formato conviene convertir esta tarea?

Hazte cuatro preguntas:

1. ¿Se hará solo una vez?
2. ¿Los pasos serán casi iguales la próxima vez?
3. ¿Tiene un formato de salida o una lista de comprobación fija?
4. ¿Necesita un sistema externo, un script o una comprobación automática?

| Situación | Forma recomendada |
|---|---|
| Trabajo puntual que aún requiere conversación | Prompt completo |
| Trabajo frecuente que todavía se ajusta | Plantilla |
| Proceso estable y salida definida | Skill |
| Otro rol independiente debe investigar a fondo | Subagente |
| Se necesitan datos de un sistema externo | MCP, preferiblemente primero en solo lectura |
| Hay que comprobar siempre un punto del proceso | Hook |
| El equipo necesita un paquete compartido | Plugin |

Un prompt más largo no es necesariamente mejor. Merece la pena reutilizar tareas comprobadas repetidas veces, con límites y criterios de aceptación claros.

## Ideas erróneas habituales

### 1. La plantilla se copia tal cual

Sin sustituir los marcadores de posición ni recortar lo irrelevante, la plantilla deja la tarea sin concretar.

### 2. Con plantilla, el prompt ya es «profesional»

Solo conserva la estructura; no decide:

- cuál es el objetivo real
- dónde trazar la restricción
- cómo escribir la aceptación

### 3. Cuanto más completa la plantilla, mejor

Para quien empieza, «suficiente sin ser voluminosa» basta.

Elige primero el tipo correcto y adáptalo a tu tarea; no sustituyas la tarea por la plantilla.

Principios de escritura: [Fundamentos de prompts](/es/prompts/basics/) y [Anatomía de una tarea](/es/prompts/task-anatomy/).
