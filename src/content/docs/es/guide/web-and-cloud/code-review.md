---
title: Revisión de código en Cloud
description: Revisar el diff, el PR y las sugerencias de revisión automática que produce una Tarea Cloud.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Cloud te ayuda a producir cambios, pero no asume por ti la responsabilidad del merge.

Tras una Tarea Cloud, la **revisión humana** sigue siendo la última puerta antes del merge. Esta página explica cómo revisar lo que produce el Agent remoto y cómo encajarlo con PR de GitHub, CI y revisión con Skill.

## Contenido

- En qué se diferencia revisar un PR de Cloud de uno local
- Lista de revisión y puntos de riesgo habituales
- Cómo usar Codex para ayudar a revisar sin ceder la responsabilidad

## Por qué la revisión Cloud pide un poco más de atención

Porque el Agent remoto cae con más facilidad en:

- Cambiar archivos no relacionados «de paso»
- Generar cambios masivos de lockfile o archivos generados por diferencias de entorno
- Parecer que corrió pruebas sin cubrir la lógica clave
- Escribir una descripción de PR muy completa que aún no has verificado

Así que la revisión Cloud no es más ligera: hay que agarrar los puntos clave.

## Dónde encaja la revisión en el flujo

```text
Tarea Cloud terminada → push de rama → abrir PR
        ↓
CI (pruebas, lint, escaneo de seguridad)
        ↓
Revisión humana del diff + revisión auxiliar opcional del Agent
        ↓
Aprobar merge (sujeto a protección de ramas)
```

Abrir PR: [Crear Pull Request](/guide/web-and-cloud/create-pull-requests/)

## Criterio mínimo de comprobación

Antes de una revisión completa, confirma al menos cuatro cosas:

1. Si el alcance del cambio se desvió
2. Si la lógica clave cambió de verdad según el objetivo
3. Si las pruebas o la Verificación se hicieron de verdad
4. Si entró información sensible o un cambio peligroso

Sin eso, «Tarea terminada» no equivale a «se puede mergear».

## Lista de revisión humana

Alineada con [Revisar diffs](/guide/quality/review-diffs/); en Cloud presta atención extra a:

| Comprobación | Motivo |
|---|---|
| ¿Cambió archivos no relacionados? | El Agent remoto puede refactorizar «de paso» |
| lockfile / archivos generados | Diferencias de entorno → cambios masivos |
| Origen de dependencias nuevas | Riesgo de cadena de suministro |
| ¿Las pruebas cubren de verdad la lógica nueva? | El Agent puede escribir pruebas vacías |
| Cambios de Permiso y autenticación | Elevación de privilegios, token hardcodeado |
| Alineado con el alcance del issue | Evitar scope creep |

## Malentendidos frecuentes

### 1. ¿CI en verde implica que se puede mergear?

CI solo dice «este conjunto de comprobaciones automáticas no falló». Si el requisito se entendió bien, si el alcance se desvió y si el riesgo es aceptable sigue siendo juicio humano.

### 2. ¿Si la descripción del PR que escribió es completa, puedo mirar menos?

Tampoco.

La descripción del PR te mete más rápido en el contexto; no sustituye verificar los hechos.

### 3. ¿Pedir a Codex otra revisión equivale a haber revisado?

La revisión auxiliar es útil, pero la responsabilidad final sigue siendo humana.

## Usar Codex para ayudar a revisar (sin sustituir a la persona)

Aceptable:

- Correr el Skill `$pr-review` en local o Cloud sobre el PR nuevo (véase [Crear tu primer Skill](/skills/create-your-first-skill/))
- Pedir opiniones en tres clases: «bloqueante / sugerencia / nit»
- **Tú** confirmas uno a uno los bloqueantes

No aceptable:

- Mergear solo porque el Agent «dice que no hay problema» sin leer el diff
- Dejar que el Agent apruebe solo una rama protegida

Véase [Verificación y revisión humana](/guide/foundations/verification-and-human-review/)

## Orden sugerido

Puedes mirar en este orden:

1. Título y descripción del PR; confirmar el objetivo
2. Diff de la lógica principal
3. Pruebas, archivos generados, configuración
4. Comentarios automáticos y sugerencias complementarias

Así evitas ahogarte de entrada en detalles.

## Comentarios de review que impulsan la revisión

Cuando el PR recibe comentarios de review:

1. Abre una Tarea Cloud o local nueva: «trata solo estos comentarios de review; no amplíes el alcance»
2. Adjunta enlaces o números de comentario
3. Haz push de un commit nuevo al mismo PR
4. Vuelve a correr CI + mira a ojo el delta

Lado GitHub: [Integración con GitHub](/guide/integrations/github/)

## Combinar con Automations

- Al abrir el PR, correr automáticamente el Skill de revisión (solo comentar, no merge)
- Detalle en [Tareas programadas y disparadas](/skills/automations/scheduled-tasks/)

## Errores frecuentes

- Confiar en el «aislamiento» del Entorno Cloud y saltarse la revisión de seguridad
- Mergear un diff enorme porque «CI está verde»
- Pegar en comentarios de review logs de producción sin desensibilizar
- Tomar «no encontré problemas» por «de verdad no hay problemas»

## Lista de aceptación

- [ ] CI todo verde y entiendes el historial de reintentos fallidos
- [ ] Al menos una persona leyó el diff de la lógica principal
- [ ] Alineado con el alcance del issue/descripción de la Tarea
- [ ] Sin Secrets en el repo

## Fuentes de referencia

- stormzhang `26-git-github.md`
- Capítulos Review/PR de KimYx0207
- [Patrones de Aprobación humana](/cases/workflows/human-approval-patterns/)

---

**Estado:** outdated  
**Productos aplicables:** Cloud / GitHub  
**Nota de revisión:** El principio de que la entrega de Cloud sigue necesitando revisión humana es correcto, pero esta página escribe de forma bastante concreta el PR de Cloud, la apertura automática, el ritmo de revisión remota y las notificaciones; esas formas de integración Cloud/GitHub cambian rápido y hay que reescribirlas según el flujo oficial más reciente.  
**Última verificación:** 2026-07-26
