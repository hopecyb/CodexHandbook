---
title: Qué es AGENTS.md
description: Archivo de instrucciones persistentes a nivel de proyecto — el «contrato de colaboración» para Codex, no una enciclopedia de arquitectura.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

`AGENTS.md` es un archivo de **instrucciones de proyecto en Markdown** en el repositorio (o en un subdirectorio). Codex lo lee al entrar en el proyecto para alinear estilo de código, requisitos de test, normas de commit y zonas prohibidas.

Puedes entender `AGENTS.md` como el manual de «cómo espera este proyecto que Codex colabore».

No es documentación avanzada de arquitectura ni el manual completo para un empleado nuevo humano; son reglas de colaboración del proyecto para Codex.

## Un concepto central

Trátalo como la **versión condensada del manual de onboarding de un colega nuevo**: solo escribe «cómo se trabaja en este repositorio», no la historia de la empresa.

| Sí conviene en AGENTS.md | No conviene |
|---|---|
| Cómo ejecutar tests, lint y build | Documentación completa de API (enlaza a la documentación formal) |
| Convenciones de directorios y estilo de nombres | Miles de líneas de decisiones de diseño históricas |
| Prohibiciones (p. ej. no tocar `main`, no committear secretos) | Requisitos temporales distintos en cada tarea |
| Mensajes de commit, checklist de PR | Preferencias personales ajenas al código |

## Enfoque mínimo viable

Crea `AGENTS.md` en la raíz del repositorio:

```md
# Instrucciones del proyecto

## Build y tests
- Instalación: `pnpm install`
- Tests: `pnpm test` (obligatorio tras cambiar lógica)
- Comprobación de tipos: `pnpm typecheck`

## Estilo de código
- Usa TypeScript en modo estricto
- Componentes nuevos en `src/components/`, nombres de archivo en PascalCase

## Prohibido
- No modifiques `pnpm-lock.yaml` salvo cambios de dependencias
- No committees `.env` ni API keys
- No ejecutes `git push` sin confirmación

## Definición de hecho
- Tests relacionados en verde
- Sin errores nuevos de lint
- En la descripción del PR, explica los pasos de verificación
```

Tras guardar, en tareas nuevas solo escribe la **diferencia de esta vez**, por ejemplo: «Corrige el layout de la página de login en Safari; acepta según AGENTS.md.»

## Malentendidos habituales

### 1. ¿Tengo que volver a decir estas reglas a mano cada vez?

Normalmente no.  
Ese es precisamente uno de los sentidos de `AGENTS.md`:
poner dentro las **reglas estables del proyecto** para no repetirlas al abrir cada tarea nueva.

### 2. ¿Escribirlo equivale a «Codex lo cumplirá al 100 %»?

`AGENTS.md` importa, pero sigue trabajando junto a:

- Los requisitos explícitos de esta tarea
- Los mecanismos de permisos y aprobación del producto
- Sandbox, red y políticas de equipo

Más exactamente: ayuda a alinear, pero no es un forzador universal.

### 3. Si no programo, ¿también debo preocuparme por este archivo?

Conviene entender el concepto básico.  
Aunque no escribas código tú, si usas Codex de forma continua en un proyecto, `AGENTS.md` reduce repeticiones y desviaciones.

## Dónde colocarlo

| Ubicación | Alcance |
|---|---|
| `AGENTS.md` en la raíz del repositorio | Aplica por defecto a todo el proyecto |
| `AGENTS.md` en un subdirectorio | Ese directorio y sus subrutas (habitual en monorepos) |
| Notas a nivel de usuario | Usa configuración personal o preferencias globales; no las mezcles con instrucciones de proyecto |

Sobre alcance y conflictos: [Alcance y prioridad](/guide/customization/agents-md/scope-and-precedence/).

## Diferencia con Skill y comandos slash

| Mecanismo | Esencia | Uso típico |
|---|---|---|
| AGENTS.md | Reglas de proyecto persistentes y pasivas | Estilo, tests, zonas prohibidas |
| Skill | Paquete de flujo reutilizable (`SKILL.md`) | Checklist de release, flujos de revisión especializados |
| Comandos slash | Atajos que disparas tú | `/review`, flujos de una sola vez |

Reglas de proyecto → `AGENTS.md`; **un conjunto de pasos repetible y compartible** encaja mejor como [Skill](/skills/overview/).

## Cómo decidir dónde escribir

Si no estás seguro de dónde va una frase, usa esta regla:

- **La regla vale a largo plazo** → mejor en `AGENTS.md`
- **Es un requisito especial de esta tarea** → en el prompt de la tarea actual
- **Es un conjunto de pasos reutilizable** → considera un Skill

Por ejemplo:

- «Este repositorio valida siempre con `pnpm test`» → `AGENTS.md`
- «Esta vez solo cambia la página de login; no toques el registro» → tarea actual
- «Antes de cada release, ejecuta el mismo flujo de checks» → mejor como Skill

## Errores habituales

- Archivo demasiado largo: el modelo solo lee bien la primera mitad — **pon las restricciones duras en las primeras 30 líneas**
- Instrucciones de alto riesgo del tipo «siempre haz push automático», en conflicto con [permisos y aprobación](/guide/foundations/permissions-and-approvals/)
- Nadie del equipo lo mantiene; el documento no coincide con los scripts reales

## Límites de seguridad

`AGENTS.md` **no sustituye** Sandbox ni aprobación. Aunque escribas «puedes ejecutar cualquier comando», el producto puede seguir pidiendo confirmación; la política gestionada del equipo puede restringirlo aún más.

`AGENTS.md` le dice a Codex «cómo se suele trabajar en este proyecto», no te sustituye al describir qué hay que hacer en esta tarea concreta.

## Referencias
- Explicación de contexto de proyecto de OpenAI Codex
---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Contrastado con las explicaciones públicas actuales de OpenAI Developers sobre contexto de proyecto, límites de tarea y restricciones de aprobación/Sandbox; el contenido se limita al uso, límites y escrituras habituales de `AGENTS.md`, sin detalles de prioridad forzada no confirmados.  
**Última verificación:** 2026-07-26
