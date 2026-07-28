---
title: Integración con GitHub
description: Conexión de repositorio, PR, Review y CI — el lugar de Codex en el flujo de GitHub.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


GitHub es la cara de colaboración de código más habitual de Codex: tareas Cloud, revisión de PR, Actions y push local giran en torno al mismo conjunto de ramas y permisos.

Aquí se habla sobre todo de cómo Codex se conecta al flujo de colaboración de «repositorio, ramas, PR, Review».

Aunque no seas desarrollador senior, puedes mirar primero qué tipos de cosas trata:

- Dónde está el código
- Cómo se proponen los cambios para que otros los vean
- Cómo ocurren la revisión y la fusión

## Mapa de capacidades

| Capacidad | Entrada típica | Lugar en el manual |
|---|---|---|
| Conectar repositorio remoto | Ajustes de Cloud | [Conectar GitHub](/guide/web-and-cloud/connect-github/) |
| Cambiar código en la nube y abrir PR | Tarea Cloud | [Crear Pull Requests](/guide/web-and-cloud/create-pull-requests/) |
| Revisar diff en local | App de escritorio / IDE | [Diffs y comentarios](/guide/desktop-app/diffs-comments-and-review/) |
| Ejecutar Codex en CI | GitHub Actions | Hoja de ruta `08-developer-platform/ci-cd/` |
| Comentarios de revisión automáticos en PR | Actions + exec | [Modo no interactivo](/guide/cli/non-interactive-mode/) |

## Normas de equipo recomendadas

```md
## GitHub × Codex (puede ir en AGENTS.md)

- Proteger la rama por defecto main; Codex solo hace push a ramas feature
- El PR debe enlazar un issue; la descripción incluye explicación de tests
- Prohibido que Codex fusione PRs, salvo autorización explícita de un release bot
- Las claves usan GitHub Secrets / secrets de entorno; no entran en el prompt
```

## Cloud vs Git local

| | Clone local | Cloud |
|---|---|---|
| Origen del código | Espacio de trabajo en tu máquina | Clon remoto |
| Commits no pusheados | Visibles | No visibles; hay que hacer push primero |
| Entorno | Tu versión de Node/sistema | Imagen de entorno configurada |
| Adecuado para | Desarrollo diario | Tareas largas asíncronas, builds estandarizados |

## Flujo de Review

1. Codex o una persona abre el PR
2. Una persona lee el diff (o el Skill `$pr-review`)
3. CI ejecuta tests
4. Los comentarios impulsan revisiones — se puede usar una nueva tarea Codex «solo tratar review comments»
5. Una persona fusiona

## Malentendidos habituales

### 1. Integración con GitHub ≠ «que Codex desarrolle solo por mí»

Los usos más habituales son:

- Leer el contexto del repositorio
- Ayudarte a organizar diff o review
- Ayudar a abrir PRs y atender comentarios

### 2. ¿Aún no entiendo bien PR, Review, etc.?

Puedes entenderlo primero a grandes rasgos así:

- **PR**: presentas formalmente tus cambios para que otros los miren
- **Review**: alguien revisa esos cambios

Con ese nivel ya basta para leer la mayor parte de esta página.

### 3. Al tocar por primera vez la integración con GitHub, lo más importante es distinguir esto

Lo primero no es el token ni Actions, sino:

> **Cambio local, repositorio en la nube y revisión de PR no son lo mismo.**

El foco de la integración con GitHub es meter a Codex en el flujo de colaboración de código existente.

## Seguridad

- Minimizar el scope del GitHub Token
- Mantener vigilancia ante modos sensibles de Actions como `pull_request_target` (superficie de inyección)
- La automatización en PRs de forks necesita estrategias extra de aislamiento

## Errores frecuentes

- La tarea Cloud asume que existen cambios locales no committeados
- Dejar que Codex ejecute en la descripción del PR instrucciones no desinfectadas (inyección de prompt)
- Mezclar en el mismo PR formateo y cambio funcional

## Referencias

- Documentación de integración GitHub de OpenAI Codex
- KimYx0207 CX-10; stormzhang `26-git-github.md`

---

**Estado:** verificado  
**Productos aplicables:** Cloud / App / CLI  
**Base de verificación:** Los use cases actuales de Codex en OpenAI Developers siguen incluyendo «Review GitHub pull requests»; las explicaciones del Help Center sobre plugins e integraciones también enfatizan que el acceso a repositorios externos depende de permisos de la app subyacente, acceso por rol y límites de acción. Esta página solo resume la posición de colaboración de repositorio GitHub, ramas, PR, Review y CI, y las diferencias de visibilidad de código entre local y Cloud.  
**Última verificación:** 2026-07-26
