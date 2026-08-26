---
title: Patrones de aprobación humana
description: Cuándo aprobar, rechazar o pedir a Codex que pause, y cómo dejar esas reglas por escrito.
locale: es
source_locale: zh-CN
source_revision: 0e37633
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

La aprobación deja las operaciones irreversibles en manos humanas. Esta página resume patrones habituales.

## Capas de aprobación

```text
Zona segura automática (leer, analizar, planificar)
    ↓
Zona de confirmación (escribir archivos, ejecutar comandos, red)
    ↓
Zona de intervención humana obligatoria (push, borrar datos, salida a internet, cambiar config de producción)
```

El comportamiento concreto de los diálogos varía según el [punto de entrada del producto](/es/guide/); el principio es el mismo.

## Patrón 1: Planificar primero, ejecutar después

```text
Regla: Sin ver mi «aprobar plan», no modificar archivos del repositorio.
```

Adecuado para: código base desconocido, cambios ligados a producción, diffs grandes.

## Patrón 2: Comandos en lista blanca

En [AGENTS.md](/es/guide/customization/agents-md/writing-effective-instructions/) deja escrito:

```md
Permitidos sin preguntar de nuevo: pnpm test, pnpm lint, git status, git diff
Confirmación obligatoria cada vez: git push, npm publish, migrate de base de datos
```

Si hay conflicto con la política del hosting, prevalece la **más estricta**.

## Patrón 3: Fusión en dos fases

1. Codex abre un draft PR o una rama local
2. Tras CI humano + review, se fusiona

Escenarios Cloud: [Crear Pull Request](/es/guide/web-and-cloud/create-pull-requests/).

## Patrón 4: Reconocimiento en solo lectura

```text
Esta ronda es solo lectura: puedes leer archivos, ejecutar tests, hacer curl a APIs locales;
prohibido escribir en disco y hacer git commit.
```

Útil para auditorías, aprender un proyecto desconocido o diagnosticar problemas de producción.

## Cuándo rechazar y empezar de nuevo

| Señal | Sugerencia |
|---|---|
| El plan no coincide con el objetivo | Rechaza la ejecución; pide revisar el plan |
| El alcance se amplía | Para y divide la tarea |
| Se saltan tests | Rechaza la fusión; exige verificación |
| No puede explicar un comando | Rechaza; pide explicación |

## Relación con Automations

Las tareas desatendidas también deben conservar puntos de confirmación humana en el diseño; ver [Tareas programadas y en segundo plano](/es/skills/automations/scheduled-tasks/).

## Errores frecuentes

- Marcar «permitir siempre» a largo plazo y olvidar el riesgo
- Aprobar de forma ceremonial sin leer el diff
- Sustituir un patrón explícito por un «no te pases» oral

## Checklist de aceptación

- [ ] Al inicio de la tarea se declara qué patrón de aprobación se usa
- [ ] Las operaciones de alto riesgo tienen segundo revisor o CI de control
- [ ] El equipo tiene una política unificada para `git push` y similares

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Contrastado con la guía oficial actual de OpenAI Developers sobre autonomy / approval boundaries, y con los capítulos ya verificados de aprobación, reglas de comandos, PR y automatización. Esta página solo confirma el principio estable de «qué puede continuar solo y qué debe detenerse para aprobación humana».
