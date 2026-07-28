---
title: "Alcance y prioridad de AGENTS.md"
description: Varios archivos, monorepos y «reglas de proyecto vs prompt de conversación» — quién manda.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Cuando coexisten varios `AGENTS.md`, archivos de configuración y la conversación actual, hay que aclarar **qué regla aplica**.

Aquí se trata de: cuando dos reglas parecen distintas, ¿a cuál hay que hacer caso?

## Resumen de prioridad

```text
Política gestionada de la organización > AGENTS.md más cercano al directorio > AGENTS.md de la raíz del repo > configuración de usuario > conversación actual
```

«Más cercano» significa el archivo de subdirectorio **más próximo a la ruta de trabajo actual**. Por ejemplo, al trabajar bajo `packages/web/AGENTS.md`, ese archivo se fusiona con el de la raíz; en conflicto, **gana el subdirectorio**.

## Cómo entender «lo más cercano gana»

Puedes verlo así:

- Las reglas de la raíz son la «ley por defecto de todo el repo»
- Las reglas de un subdirectorio son la «nota especial de esa zona»

Así, cuanto más cerca de la ubicación de trabajo, más específicas suelen ser — y más prioridad tienen.

## Relación con el prompt de conversación

| Fuente | Persistencia | Qué conviene escribir |
|---|---|---|
| AGENTS.md | Entre sesiones, versionable | Consenso de equipo, comandos de build, zonas prohibidas |
| Prompt de la tarea | Solo esta sesión | Objetivo de esta vez, alcance, plazo |
| Referencias `@` a archivos | Refuerzo de contexto de esta sesión | Archivos de implementación concretos, diseños |

**No** pegues de nuevo el `AGENTS.md` entero en el chat; si debes enfatizar una regla, cita en una frase: «Cumple los requisitos de test de AGENTS.md; esta vez, además, no toques el directorio `legacy/`.»

## Patrón monorepo

```text
repo/
├── AGENTS.md              # Común a todo el repo: gestor de paquetes, CI, seguridad
├── apps/
│   └── web/
│       └── AGENTS.md      # Frontend: biblioteca de componentes, comandos E2E
└── packages/
    └── api/
        └── AGENTS.md      # Backend: convenciones de migraciones de base de datos
```

Principios:

- **Archivo raíz**: 10–20 reglas duras compartidas por todo el repo
- **Archivos de subpaquete**: solo comandos y notas de directorio propias de ese paquete
- Evita tres archivos con un 80 % de repetición — lo repetido va en la raíz; el subpaquete solo escribe el incremento

## Malentendidos habituales

### 1. Lo dicho en la conversación actual es lo más nuevo, así que también tiene la máxima prioridad

La conversación sirve para añadir «requisitos extra de esta vez», pero eso no equivale a poder anular a la ligera reglas duras de equipo u organización.

### 2. El `AGENTS.md` del subdirectorio es una copia de las reglas raíz

Tampoco debería serlo.

Enfoque más adecuado:

- La raíz escribe lo común
- El subdirectorio solo escribe incrementos y excepciones

### 3. Solo memorizar el orden no basta

No basta.

Más importante es saber:

- Qué tipo de información va en cada capa
- Por qué, en conflicto, manda una capa concreta

## Cómo juzgar un conflicto

Cuando dos reglas parecen chocar, mira en este orden:

1. ¿Cuál está más cerca del directorio de trabajo actual?
2. ¿Cuál es una regla de proyecto a largo plazo y cuál solo un refuerzo temporal?
3. ¿Hay una política de organización o gestionada que restrinja desde una capa superior?

En conflicto, suele ganar la capa más cercana, más dura y más explícita; no asumas por defecto que «la frase más reciente» siempre gana.

## Errores habituales

- El `AGENTS.md` del subdirectorio contradice el de la raíz sin aclarar cuál manda
- Escribir secretos en `AGENTS.md` y hacer commit en Git — usa gestión de secretos y variables de entorno
- Esperar que un «relajamiento temporal» en el chat anule la política gestionada del equipo (normalmente no se puede)

## Lista de verificación

- [ ] El `AGENTS.md` raíz y los de subpaquete tienen un reparto claro
- [ ] Hay conciencia clara de «el subdirectorio gana» ante conflictos
- [ ] El prompt de la tarea solo escribe el incremento; no copia el manual entero del proyecto

---

**Estado:** desactualizado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Nota de revisión:** Esta página escribe la prioridad entre `AGENTS.md`, configuración de usuario y conversación actual como un orden lineal demasiado determinista; la precedence real puede diferir según cliente, capacidades gestionadas por la organización y entorno de ejecución. Hay que reescribirla tras completar la base oficial actual.  
**Última verificación:** 2026-07-26
