---
title: Equipo y empresa
description: Adopción, estándares, gobernanza y seguridad para escalar Codex sin perder el control.
sidebar:
  order: 70
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

El capítulo **Equipo y empresa** está dirigido a responsables de ingeniería, plataformas y seguridad. El foco es pasar Codex de «usable por una persona» a «gestionable, auditable y revisable por el equipo». Léelo junto con [Rutas de aprendizaje · Equipo](/guide/learning-paths/team/); este capítulo se centra más en gobernanza y adopción.

Si aún lo usas en solitario o estás familiarizándote con lo básico, puedes dejar este capítulo para más adelante. Aquí se trata de cómo ordenar límites, procesos y responsabilidades cuando mucha gente lo usa a la vez.

Las preguntas centrales son:

- Quién puede usarlo
- Hasta dónde puede llegar
- Cómo rastrear problemas
- Cómo aprobar extensiones de alto riesgo

## Contenido del capítulo

- Camino del piloto en equipo pequeño a la adopción organizacional
- Seguridad, cumplimiento y riesgos de extensiones (Plugin/MCP)
- Referencias cruzadas con otros capítulos del manual

## Quién debería leerlo

| Rol | Empieza por |
|---|---|
| EM / responsable | [Modelo de amenazas](/guide/team-enterprise/security/threat-model/) · [Uso aceptable](/guide/team-enterprise/governance/acceptable-use/) |
| Ingeniería de plataforma | [Reglas de equipo](/guide/customization/rules/team-rules/) · [Hooks](/skills/hooks/hooks-overview/) |
| Seguridad | [Riesgos de Plugin y MCP](/guide/team-enterprise/security/plugin-and-mcp-risk/) · [Prompt injection](/guide/team-enterprise/security/prompt-injection/) |

## Modelo de gobernanza (concepto)

```text
Política (gestión organizacional, AUP)
    ↓
Estándares (AGENTS.md, lista de extensiones aprobadas)
    ↓
Ejecución (reglas, Sandbox, Hooks, CI)
    ↓
Observabilidad (auditoría, métricas, retrospectiva)
```

## Navegación del capítulo (inicio)

| Tema | Páginas |
|---|---|
| Seguridad | [Modelo de amenazas](/guide/team-enterprise/security/threat-model/) · [Riesgos Plugin/MCP](/guide/team-enterprise/security/plugin-and-mcp-risk/) · [Prompt injection](/guide/team-enterprise/security/prompt-injection/) |
| Gobernanza | [Política de uso aceptable](/guide/team-enterprise/governance/acceptable-use/) |

La hoja de ruta añadirá adoption, administration, deployment-patterns, etc.; véase [chapter-outline](/docs/planning/chapter-outline.md) (documento de planificación del repositorio).

## Relación con la personalización

- Capa de gestión organizacional en [prioridad de AGENTS.md](/guide/customization/agents-md/scope-and-precedence/)
- [Estrategia de reglas de equipo](/guide/customization/rules/team-rules/)

## Errores frecuentes

- Comprar asientos sin formación ni estándares
- Tomar como predeterminado organizacional el Sandbox personal relajado
- Aprobar todos los Plugin de la comunidad sin lista

## Lista de aceptación

- [ ] Hay AUP escrita o política equivalente
- [ ] Las extensiones de alto riesgo tienen flujo de Aprobación
- [ ] Contactos de incidente claros (seguridad/plataforma)

## Malentendidos frecuentes

### 1. ¿Necesito leer este capítulo si ahora lo uso solo?

No hace falta profundizar ya.  
Pero conviene saber que, cuando Codex pasa de herramienta personal a sistema de equipo, el problema ya no es solo cómo escribir el Prompt.

### 2. ¿Por qué se habla tanto de auditoría, gobernanza y políticas?

En entorno de equipo, el riesgo mayor es que, con mucha gente usándolo a largo plazo, los límites se vuelvan cada vez más difusos.

### 3. Si solo quiero formarme el concepto, ¿qué leo primero?

Puedes empezar por:

- [Riesgos de Plugin y MCP](/guide/team-enterprise/security/plugin-and-mcp-risk/)
- [Política de uso aceptable](/guide/team-enterprise/governance/acceptable-use/)

Si ahora te importa sobre todo el arranque personal, deja este capítulo para más adelante; vuelve cuando empieces la adopción en equipo, la gestión de Permisos o el control de riesgos.

## Fuentes de referencia

- Capítulos de seguridad y empresa de KimYx0207
- Playbook de equipo de freestylefly/CodexGuide
- Tutoriales de seguridad de stormzhang

---

**Estado:** verified  
**Productos aplicables:** Edición organizacional / funciones de equipo (según plan)  
**Base de verificación:** El centro de ayuda y la documentación de plugins/apps de OpenAI siguen enfatizando que adoptar Codex/ChatGPT en equipo requiere capas de gobernanza: acceso por rol, habilitación de plugins, Aprobación de acciones, límites de datos y responsabilidad de auditoría. Esta página es solo la navegación del capítulo equipo y empresa, centrada en el modelo de gobernanza y el orden de lectura, sin atarse a rutas concretas de consola.  
**Última verificación:** 2026-07-26
