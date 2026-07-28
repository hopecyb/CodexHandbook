---
title: Recuperación ante fallos
description: Cuando la tarea se desvía, los tests fallan o se agota el contexto — cómo retroceder con seguridad y continuar.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Recuperación ante fallos** trata de cómo contener la situación cuando una tarea se desvía o se interrumpe, y luego seguir adelante. Este capítulo ofrece un ciclo repetible **detectar → contener → recuperar → retrospectiva**, combinable con [Deshacer y recuperar](/guide/getting-started/undo-and-recover/) y [Gestión de tareas largas](/cases/workflows/long-running-task-management/).

## Enfoque de esta página

- Cuándo usar `git stash`, revertir un commit o abrir un hilo nuevo
- Cómo volcar la información del fallo en el siguiente prompt
- Cómo registra el equipo los problemas recurrentes

## Señales de fallo

| Señal | Acción posible |
|---|---|
| Fallo masivo de tests | Detener la ejecución, reducir el diff |
| Directorio/rama equivocados | Deshacer, volver a `@` la ruta correcta |
| Plan e implementación muy desviados | Volver a explorar o planificar |
| Contexto demasiado largo, se olvidan restricciones | Hilo nuevo + traspaso con resumen |
| Aprobación/reglas rechazan una y otra vez | Revisar si reglas y tarea se contradicen |

## Flujo mínimo de recuperación

```text
1. Deja de cambiar (di claramente «no escribas código todavía»)
2. Guarda el estado: git status / stash / anota el thread ID
3. Resume en ≤5 puntos: objetivo, hecho, síntoma del fallo, hipótesis
4. Elige: retroceder / reducir alcance / continuar en hilo nuevo
5. Tras el éxito, escribe en AGENTS.md o en la retrospectiva del caso
```

Ejemplo de prompt:

```text
Los cambios actuales hacen fallar 12 tests. No sigas corrigiendo todavía.
Lista los archivos afectados por los 3 commits más recientes, sugiere el punto mínimo de rollback
y propón un plan de corrección más pequeño.
```

## Flujo recomendado

```text
Detectar (tests / humano / CI)
    → Contener (dejar de escribir, aislar la rama)
    → Diagnosticar (ver «Diagnosticar antes de corregir»)
    → Reintentar en pasos pequeños
    → Retrospectiva y captura
```

En escenarios multi-Agent, ver [Coordinación multi-Agent](/cases/workflows/multi-agent-coordination/): ante un fallo hay que dejar claro qué subtarea hace el rollback.

## Errores frecuentes

- Seguir «añadiendo un poco más» en la dirección equivocada
- No guardar logs del fallo → el hilo nuevo repite el mismo error
- Forzar `git push` para «salvar» la situación
- No distinguir entornos (local vs Cloud) → pasos de recuperación inútiles

## Límites de seguridad

- La propia recuperación está sujeta a [reglas de comandos](/guide/customization/rules/command-rules/)
- En incidentes de producción: rollback primero, análisis de causa después; no dejes que el Agent conecte a producción a «arreglar datos»

## Checklist de aceptación

- [ ] Puedes explicar la estrategia de recuperación elegida y por qué
- [ ] El repo vuelve a un estado construible/testeable
- [ ] Causa y lecciones quedaron registradas (issue o AGENTS.md)
- [ ] Si hace falta un hilo nuevo, hay un resumen de restricciones clave

## Capítulos relacionados

- [Diagnosticar antes de corregir](/cases/workflows/diagnose-before-fixing/)
- [Traspaso y reanudación](/guide/agent-work/handoff-and-resume/)
- [Referencia de errores](/guide/reference/error-reference/)

## Fuentes de referencia

- Retrospectivas y playbooks de freestylefly/CodexGuide
- Capítulos de depuración de stormzhang

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Contrastado con los capítulos ya verificados de traspaso y reanudación, diagnóstico, reglas de comandos y referencia de errores. Esta página describe el método general de contención y continuación ante fallos; no fija un botón o comando concreto de un cliente.
