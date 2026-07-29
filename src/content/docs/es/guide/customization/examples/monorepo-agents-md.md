---
title: AGENTS.md en un monorepo
description: Patrón de ejemplo para colocar instrucciones de proyecto, alcances y comandos de test en un único repositorio con varios paquetes.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

En un monorepo conviven varias apps, paquetes compartidos y stacks distintos: un `AGENTS.md` gigante hace que el Agent **cambie el paquete equivocado** o ejecute el test equivocado. Esta página ofrece un patrón reutilizable de **explicación por capas** (ejemplo; adáptalo a tu repositorio).

## Qué cubre esta página

- Cómo repartir instrucciones entre raíz y subpaquetes
- Cómo alinear referencias `@` y restricciones de ruta con los límites de paquete
- Cómo mantener coherencia con comandos de CI / entorno Cloud

## Por qué este tipo de repositorio necesita más explicación por capas

Si un repositorio normal es una casa, un monorepo se parece más a un edificio.

Hay habitaciones distintas, vecinos distintos, reglas distintas.  
Si solo pegas en la puerta principal una nota general larguísima, Codex suele caer en dos problemas:

- Ve todo, pero no sabe qué capa cumplir ahora
- Solo querías cambiar un paquete y acaba tocando otro

El foco es que las reglas se aclaren junto con los límites de directorio, no escribir mecánicamente más `AGENTS.md`.

## Estructura recomendada (ejemplo)

```text
repo-root/
  AGENTS.md              # Global: estrategia de ramas, normas de commit, prohibiciones
  apps/web/AGENTS.md     # Frontend: framework, comandos de test, convenciones de rutas
  apps/api/AGENTS.md     # Backend: estilo de API, disciplina de migraciones
  packages/shared/       # Solo enlace desde la raíz, o una nota breve de subpaquete
```

El `AGENTS.md` raíz debería incluir:

- Qué directorios **prohíbe** modificar el Agent (p. ej. `infra/prod/`)
- **Responsables o enlaces de documentación** de cada subpaquete
- Comando global de instalación: `pnpm install` se ejecuta en la raíz

## Malentendidos habituales

### 1. Cuando hay más directorios, no apiles todo en la raíz

La primera vez que se escriben instrucciones de monorepo, mucha gente mete todas las restricciones en el `AGENTS.md` raíz.

Resultado:

- El archivo es muy largo
- Las reglas realmente relevantes para la tarea actual no destacan
- Las convenciones especiales de cada subpaquete quedan ahogadas

Más sólido suele ser: la raíz escribe el consenso global; el subpaquete escribe reglas locales especiales.

### El papel de la nota del subpaquete es reducir el alcance de cambios erróneos, no repetir las reglas raíz

Si `apps/web` y `apps/api` tienen comandos de desarrollo, de test y restricciones distintos, escribir esas diferencias en su propio directorio ayuda más a que Codex se equivoque menos.

## Fragmento de plantilla de AGENTS.md de subpaquete

```markdown
## Alcance
Solo modifica `apps/web/**`, salvo que la tarea pida explícitamente un cambio entre paquetes.

## Desarrollo
- Instalación: en la raíz del repo `pnpm install`
- Desarrollo: `pnpm --filter web dev`
- Tests: `pnpm --filter web test`
- Comprobación de tipos: `pnpm --filter web typecheck`

## Dependencias
Importa tipos compartidos desde `@acme/shared`; no copies y pegues.
```

## Coordinación con el prompt de la tarea

En refactorizaciones entre paquetes, **lista rutas de forma explícita**:

```text
Objetivo: que apps/web use el nuevo cliente de API
Permitido modificar: apps/web/**, packages/api-client/**
Prohibido: cambiar directamente el servidor de apps/api
Aceptación: pnpm --filter web test && pnpm --filter api-client test
```

Ver [Contexto de archivos y carpetas](/guide/context/file-and-folder-context/)

## Cloud y CI

En Cloud, los monorepos suelen fallar por **no instalar en la raíz** o por un filter incorrecto. En el `AGENTS.md` raíz deja claro:

- El directorio de trabajo por defecto es la raíz del repositorio
- Comandos filter para tareas de un solo paquete
- Estrategia de caché (si usas turborepo/nx, indica el grafo de tareas)

[Entornos Cloud](/guide/web-and-cloud/cloud-environments/)

## Errores habituales

- Solo hay notas en `apps/web`, pero el Agent cambia el lockfile a lo loco en la raíz
- Comandos de test distintos por subpaquete y sin documentar
- El AGENTS.md del subpaquete choca con el documento raíz

## Cómo decidir si va en la raíz o en el subpaquete

Si no estás seguro de dónde escribir una nota, pregúntate:

1. ¿Es un consenso que deben respetar todos los paquetes?
2. ¿Solo vale para un directorio concreto?
3. ¿Si la pones en el sitio equivocado, hará que el Agent cambie el alcance equivocado?

Si se parece más a la 1 → raíz; si a la 2 o 3 → mejor en el subpaquete.

## Lista de verificación

- [ ] Raíz y subpaquetes tienen al menos una nota de scope legible cada uno
- [ ] Cualquier paquete puede ejecutar solo su comando de test
- [ ] Las tareas entre paquetes dejan claras en el prompt las rutas permitidas

En un monorepo, AGENTS.md no necesita concentrarse a toda costa; lo más adecuado es que el «consenso global» y las «reglas locales de directorio» vivan cada uno en su sitio.

---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Contrastado con los capítulos actuales de este manual sobre `AGENTS.md`, contexto de archivos/directorios y entornos Cloud; el contenido se limita al patrón de ejemplo de explicación por capas en monorepo y a la organización de comandos, sin tratar entradas concretas de producto o implementaciones gestionadas como contrato fijo.  
**Última verificación:** 2026-07-26
