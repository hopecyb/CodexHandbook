---
title: Cómo elegir el método de extensión
description: Árbol de decisión desde Prompt hasta Automations; evita «usar por usar».
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Cuantos más mecanismos de extensión hay, más cuesta elegir mal. Esta página ayuda a decidir si hace falta un Plugin o MCP antes de instalarlos.

Los nombres que más se mezclan:

- Prompt
- AGENTS.md
- Skill
- MCP
- Plugin
- Automation

Todos «extienden Codex», pero a veces basta un Prompt; otras veces hace falta un mecanismo más pesado.

## Árbol de decisión

```text
¿La tarea se repetirá ≥3 veces?
├─ No → Basta con un buen Prompt + referencias @
└─ Sí → ¿Necesitas reglas persistentes?
    ├─ Sí → Escríbelas en AGENTS.md
    └─ No → ¿El flujo es fijo y describible?
        ├─ Sí → Haz un Skill
        └─ No → ¿Necesitas leer sistemas externos?
            ├─ Sí → Evalúa MCP (prioridad solo lectura)
            └─ No → ¿Necesitas ejecución desatendida?
                ├─ Sí → Automations + compuerta humana
                └─ No → Mantén Skill + activación manual
```

¿El equipo debe distribuir de forma unificada varios Skills + MCP? Al final de este camino, considera un **Plugin**.

## Correspondencia por escenario

| Escenario | Combinación recomendada |
|---|---|
| Unificar normas de pruebas y commits | AGENTS.md |
| Lista de revisión antes de cada fusión | Skill `pr-review` |
| Traer contexto de un ticket de Linear | MCP + Prompt de la tarea |
| Informe semanal de dependencias | Automation → abrir issue |
| Escaneo de secretos antes del commit | Hooks (empresa) o CI |
| Que un nuevo se instale todo de un golpe | Plugin (tras revisión de seguridad) |

## Dimensiones de coste

| Mecanismo | Coste de escritura | Coste de mantenimiento | Riesgo de seguridad |
|---|---|---|---|
| Prompt | Bajo | Bajo | Bajo |
| AGENTS.md | Medio | Medio | Bajo |
| Skill | Medio | Medio | Bajo–medio |
| MCP | Alto | Alto | Medio–alto |
| Plugin | Bajo (listo) / alto (propio) | Medio | Medio–alto |
| Automations | Alto | Alto | Alto |

## Antipatrones

- **Inflación de Skills**: instalar decenas; las `description` se pisan al hacer match
- **MCP como martillo**: forzar una API para lo que bastaría con `git`
- **Automatización sin aceptación**: cambia código a horario fijo y nadie mira el diff
- **Reinventar la rueda**: construir MCP propio cuando ya hay Connector oficial

## Preguntas frecuentes

### 1. ¿Debo instalar Plugins y conectar MCP desde el principio?

Muchos problemas se resuelven primero con un buen Prompt, control de alcance y `AGENTS.md`.

### 2. ¿Cómo leer este árbol?

Con un solo principio: empieza por lo ligero; si no basta, sube de peso.

### 3. ¿Por dónde suele empezar alguien la primera vez?

En la mayoría de casos, en estas tres:

- Prompt
- `AGENTS.md`
- Skill

Normalmente no hace falta MCP ni automatización desatendida desde el día uno.

La clave no es lo avanzado del mecanismo, sino si encaja con el problema actual.

## Lecturas relacionadas

- [Mapa de capacidades de extensión](/skills/capability-map/)
- [Patrones de Aprobación humana](/cases/workflows/human-approval-patterns/)
- [Consolidar un flujo como Skill](/cases/workflows/turn-a-workflow-into-a-skill/) (página de hoja de ruta)

---

**Estado:** desactualizado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Nota de revisión:** El árbol de esta página toca los límites y el alcance actuales de Automations, Plugins, MCP y Connectors oficiales; esas formas de producto siguen cambiando rápido y el material público actual no sostiene de forma estable el juicio de toda la página.  
**Última verificación:** 2026-07-26
