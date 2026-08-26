---
title: Convertir un flujo de trabajo en Skill
description: La tercera repetición de un proceso merece convertirse en Skill — disparador, instrucciones y aceptación en uno.
locale: es
source_locale: zh-CN
source_revision: bc54539
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Cuando el mismo tipo de tarea (comprobación de release, sincronización de docs, escaneo de seguridad) se completa **por tercera vez** pegando el mismo prompt, toca considerar un [Skill](/es/skills/overview/). Este capítulo enlaza [Métodos de flujo de trabajo](/es/cases/workflows/) con el sistema de extensiones.

## Qué resuelve esta página

- Cuándo pasar de plantilla de prompt a Skill
- Qué debe incluir un Skill (instrucciones, recursos, scripts)
- Cómo compartirlo y versionarlo en el equipo

## Señales de que merece la pena capturar

- Pasos fijos + checklist de aceptación fijo
- Necesitas citar plantillas o scripts del repo
- Varias personas necesitan el mismo comportamiento
- Quieres que el modelo **recuerde automáticamente** el flujo en tareas relacionadas

No hace falta capturar: exploración de una sola vez, arreglos pequeños muy ligados al contexto del día.

## Práctica mínima viable

1. **Escribe SKILL.md con claridad:** cuándo se dispara, entradas/salidas, prohibiciones
2. **Añade `references/`:** checklist, ejemplo de diff
3. **Opcional `scripts/`:** comandos de verificación repetibles (alineados con [reglas de comandos](/es/guide/customization/rules/command-rules/))
4. **Menciona el nombre del Skill** en el README del repo o en AGENTS.md
5. **Prueba 2–3 veces** y luego marca `verified`

Inicio: [Crear tu primer Skill](/es/skills/create-your-first-skill/)

## Flujo recomendado

```text
Extraer prompt y criterios de aceptación del caso de éxito
    → Reducir al cuerpo del Skill (quitar coloquialismos, dejar restricciones)
    → Añadir descripción del disparador («antes de fusionar», «antes del release»)
    → PR review del equipo
    → Escribir en el directorio examples/ acordado, plugin del equipo o biblioteca interna de skills
```

Comparación con [Convertir un proceso en automatización](/es/skills/automations/scheduled-tasks/): el Skill orienta de forma **interactiva**; Automation es más **programada / desatendida**.

## Errores frecuentes

- Skill tan largo que cansa más que leer `AGENTS.md`
- Sin checklist de aceptación → la calidad de ejecución deriva
- Scripts que necesitan secretos locales sin nota SECURITY
- Duplicación y contradicción con reglas de Hooks

## Límites de seguridad

- Ver [Seguridad y versiones de Skills](/es/skills/security/)
- Los Skills de equipo deben entrar en la lista de aprobación de extensiones (ver [Riesgos de Plugin y MCP](/es/guide/team-enterprise/security/plugin-and-mcp-risk/))

## Checklist de aceptación

- [ ] Un compañero nuevo puede completar una tarea solo con el Skill
- [ ] Condiciones de disparo claras; pocos falsos positivos
- [ ] Hay versión o CHANGELOG (nivel equipo)
- [ ] Enlace cruzado con el documento del flujo de origen

## Fuentes de referencia
- [`docs/planning/examples-system.md`](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/examples-system.md) y [`examples/README.md`](https://github.com/hopecyb/CodexHandbook/blob/main/examples/README.md) del repo
---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE  
**Última verificación:** 2026-07-26  
**Base de verificación:** Contrastado con los use cases públicos actuales de «Save workflows as skills» de OpenAI Developers, y con los capítulos ya verificados de Skills, automatización, reglas de comandos y riesgos de extensiones. El contenido se limita al método estable «cuándo capturar un proceso repetido como Skill y cómo organizar instrucciones y aceptación».
