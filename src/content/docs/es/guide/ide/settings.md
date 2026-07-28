---
title: Ajustes de la extensión IDE
description: Entradas de configuración en el IDE para modelo, Aprobación, Contexto y comportamiento de la extensión.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Los ajustes de la extensión IDE conectan **preferencias personales** y **reglas del proyecto**: qué nivel de modelo, cuánta Aprobación, si se adjuntan automáticamente los archivos abiertos, etc. Coinciden con los [fundamentos de configuración](/guide/customization/configuration/config-basics/) globales; esta página se centra en las opciones habituales dentro del editor.

## Contenido de esta página

- Reparto entre ajustes del IDE, configuración de usuario y `AGENTS.md`
- Lo que más suelen tocar los desarrolladores
- Cómo alinear valores por defecto en el equipo

## Qué controlan realmente estos ajustes

Los ajustes del IDE se parecen más a: **los hábitos por defecto de cómo Codex colabora contigo en el editor**.

Resuelven preguntas como:

- Qué modelo usar por defecto
- Cuánta Aprobación aplicar por defecto
- Si incluir automáticamente el archivo actual y la selección

No definen las reglas del proyecto en sí; deciden si el uso en el editor te resulta cómodo y estable.

## Capas de configuración (repaso)

| Capa | Ejemplo | Prioridad |
|---|---|---|
| Política gestionada por la organización | Prohibir relajar el Sandbox | Máxima |
| `AGENTS.md` / configuración del proyecto | Comandos de test, convenciones de directorios | Alta |
| UI de ajustes de la extensión IDE | Modelo por defecto, disposición del panel | Media |
| Prompt de una sola Tarea | «Esta vez no conectes a la red» | A nivel de Tarea |

Ver [Alcance y precedencia](/guide/customization/agents-md/scope-and-precedence/)

## Malentendidos frecuentes

### Los ajustes del IDE no son la norma del proyecto

Muchos confunden «cómo lo tengo por defecto en mi editor» con «así debe hacerse en este proyecto».

Más claro:

- Los ajustes del editor van hacia la experiencia personal
- `AGENTS.md` y la configuración del proyecto van hacia el consenso del equipo

Están relacionados, pero no son lo mismo.

### Más Contexto automático no siempre es mejor

Incluir automáticamente archivo actual, selección y pestañas abiertas es cómodo; pero si se mete demasiado, también diluye el foco de la Tarea.

El criterio práctico es lo suficiente; no hace falta perseguir «cuanto más abierto, más potente».

## Ajustes que se cambian a menudo (concepto)

### Modelo y razonamiento

Afectan a la velocidad de respuesta y a la calidad en Tareas complejas. En proyectos de equipo, el README puede indicar el «nivel de modelo recomendado» para que cada uno no tenga un default distinto y sea difícil reproducir problemas.

### Aprobación y Sandbox

Corresponde a [Permisos y Aprobaciones](/guide/foundations/permissions-and-approvals/):

- Principiantes: mantén el default o algo más estricto
- Repositorios de confianza: relaja con cuidado y no mezcles con directorios de secrets de producción

CLI e IDE deben compartir la **misma línea base de seguridad**; detalle de CLI en [Configuración de la CLI](/guide/cli/configuration/).

### Comportamiento del Contexto

Algunas extensiones permiten configurar:

- Si incluir automáticamente el archivo / selección actuales
- Si leer `AGENTS.md`
- Opciones relacionadas con la ventana de Contexto (según versión)

Demasiado Contexto automático añade ruido; ver [Mantener el Contexto enfocado](/guide/context/keep-context-focused/).

### Login y cuenta

Se comparte con [Inicio de sesión y autenticación](/guide/getting-started/sign-in-and-authentication/); tras cambiar de cuenta, reinicia la sesión de la extensión.

## Alineación de equipo

1. Lo que **debe ser igual** va al repositorio (`AGENTS.md` + configuración de proyecto opcional)
2. Los **hábitos personales** se quedan en los ajustes del IDE, fuera de Git
3. Onboarding de nuevos miembros: contrastar la versión de la extensión con [Instalación IDE](/guide/ide/installation/)

## Qué mirar la primera vez

La primera vez que configures la extensión IDE, basta con tres tipos de ajustes:

1. Modelo y nivel de razonamiento
2. Relacionados con Aprobación / seguridad
3. Relacionados con Contexto automático

Si esas tres categorías están en orden, ya cubres la mayoría de problemas reales de uso.

## Resolución de problemas

| Fenómeno | Comprueba |
|---|---|
| El ajuste no aplica | Si lo sobrescribe una política de organización; si hace falta recargar la ventana |
| Comportamiento distinto al de la CLI | Contrasta con la [referencia de configuración](/guide/reference/configuration-reference/) |
| La extensión no responde | [Resolución de problemas del IDE](/guide/ide/troubleshooting/) |

Los ajustes del IDE se parecen más a «cómo colaboras con Codex en el editor»; cómo se escriben las reglas del proyecto es otra capa — no las mezcles.

## Fuentes de referencia

- OpenAI Codex IDE settings
- stormzhang `18-config.md`, `09-ide.md`

---

**Estado:** outdated  
**Productos aplicables:** IDE  
**Nota de revisión:** Esta página gira en torno a opciones de la extensión IDE, Contexto automático, preferencias de Aprobación y cobertura por organización, pero esas entradas y nombres cambian con facilidad según la versión; falta documentación oficial de ajustes lo bastante sólida para sostener toda la página.  
**Última verificación:** 2026-07-26
