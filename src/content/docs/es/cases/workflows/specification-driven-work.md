---
title: Trabajo impulsado por especificación
description: Escribe primero una especificación aceptable y deja que Codex implemente según el plan — ideal para entregas con requisitos claros.
locale: es
source_locale: zh-CN
source_revision: cbd6ef7
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

**Trabajo impulsado por especificación** consiste en preparar una especificación breve —objetivo, alcance, interfaces y criterios de aceptación— antes de tocar muchos archivos. Puede ir después de [lluvia de ideas](/es/cases/workflows/brainstorm-before-building/) o entrar directamente en [EPXV](/es/cases/workflows/explore-plan-execute-verify/) cuando el requisito ya está claro.

## Enfoque de esta página

- Qué nivel de detalle basta en la especificación
- Cómo hacer que Codex ejecute según la especificación sin ampliar el scope por su cuenta
- Relación entre especificación, descripción de PR e issue

## Plantilla mínima de especificación

```markdown
## Objetivo
Valor para el usuario en una frase

## Alcance
- Incluye: …
- No incluye: …

## Interfaces / comportamiento
- Entrada / salida / casos de error

## Criterios de aceptación
- [ ] Ítems verificables automáticamente
- [ ] Ítems que requieren revisión humana

## Restricciones
- Módulos intocables, rendimiento, compatibilidad
```

Puedes poner la plantilla en `docs/specs/` del repo o en el cuerpo del issue y citarla con `@` en la tarea.

## Flujo recomendado

```text
① Redactar la especificación (Codex puede ayudar; una persona revisa)
② Confirmar la especificación → responder «ejecutar según la especificación»
③ Ejecutar por pasos, contrastando cada uno con los criterios
④ Todo cambio de especificación debe actualizar versión o changelog de forma explícita
```

Ejemplo de prompt:

```text
Lee @docs/specs/export-csv.md. Primero lista el plan de implementación y los riesgos frente a la especificación;
no añadas funciones que no estén en la especificación. Espera mi confirmación antes de escribir código.
```

## Combinación con trabajo impulsado por tests

Los criterios de aceptación de la especificación deberían ser, en la medida de lo posible, **testeables**; lo que se pueda escribir como test, escríbelo primero: [Trabajo impulsado por tests](/es/cases/workflows/test-driven-work/).

## Errores frecuentes

- Especificación tan larga como un documento de diseño: las restricciones clave se pierden
- Durante la ejecución el alcance crece en silencio y la especificación no se actualiza
- Criterios vagos («más usable») que generan discusiones
- Conflicto entre la especificación y las convenciones de arquitectura de `AGENTS.md`

## Límites de seguridad

- Solo se autoriza implementación con red si la especificación lo permite («llamar APIs externas»)
- El tratamiento de campos con PII debe estar marcado en la especificación

## Checklist de aceptación

- [ ] Lo que queda fuera del alcance está excluido de forma explícita
- [ ] Al menos 3 criterios de aceptación comprobables
- [ ] Confirmación humana o escrita antes de ejecutar
- [ ] Los cambios se sincronizan de vuelta al archivo de especificación

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Contrastado con los capítulos ya verificados de lluvia de ideas, EPXV, tests y `AGENTS.md`. El contenido se limita al método estable «escribir primero una especificación aceptable, luego ejecutar según ella».
