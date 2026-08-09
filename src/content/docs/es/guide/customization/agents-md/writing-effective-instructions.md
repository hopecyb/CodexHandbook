---
title: Escribir instrucciones eficaces
description: Checklist de escritura de AGENTS.md — corto, duro, ejecutable y verificable.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

Las instrucciones de proyecto eficaces se parecen más a una **lista de verificación**. El objetivo es que Codex cometa menos errores previsibles en el primer intento.

La primera vez que se escriben, el problema habitual es que hay muchas ideas, pero las restricciones realmente clave no quedan claras.

## Contenido

- Cómo deberían verse las instrucciones del proyecto
- Qué significa «corto, duro y ejecutable»
- Qué estilos hacen más difícil que Codex y las personas entiendan

## Estructura recomendada

```md
# Instrucciones del proyecto

## Inicio rápido (3–5 líneas)
Instalación, servidor de desarrollo, comando de test más usado

## Obligatorio
Lista numerada de reglas que no se pueden violar

## Código y directorios
Nombres, ubicación, convenciones de dependencias

## Definición de hecho
Qué cuenta como «listo para commit»

## Prohibiciones
Deja claro qué no hacer
```

## Principios de escritura

### 1. Pon delante las restricciones duras

Coloca «debe» y «prohibido» al inicio del archivo. Con contexto limitado, el modelo da más peso al comienzo — la misma lógica que [prioridad del contexto](/guide/context/context-priority/).

### 2. Comandos copiables

Escribe comandos **realmente ejecutables**, no «pasa los tests»:

```md
# Bien
pnpm test --filter @app/web

# Mal
Asegura que los tests pasen
```

### 3. Criterios de hecho verificables

```md
## Definición de hecho
- `pnpm lint` y `pnpm test` sin fallos
- Las APIs nuevas tienen tests unitarios correspondientes
- Cambios visibles al usuario con pasos de prueba manual (navegador + móvil)
```

### 4. El «por qué» en una frase como máximo

```md
- No toques `generated/`: lo genera el código; un cambio manual se sobrescribe en el próximo build
```

El trasfondo largo debe enlazar a documentación formal en `docs/`.

## Qué es una «buena instrucción»

Una buena instrucción permite que personas y Codex capten rápido:

- Qué hacer primero
- Qué no se puede hacer
- Hasta dónde hay que llegar para darlo por hecho

Si tras leerla aún no sabes qué comando ejecutar primero, qué no tocar ni cómo darlo por terminado, aún no es lo bastante útil.

## Fragmento de playbook de equipo

```md
## PR y Git
- Nombres de rama con prefijos `feat/`, `fix/`, `docs/`
- Un PR hace una sola cosa; los refactorings grandes van en un PR aparte
- Antes del merge, alguien debe revisar el diff a mano, aunque Codex ya haya ejecutado los tests

## Colaboración con Codex
- En tareas grandes, pide primero «dame un plan; espera mi confirmación antes de cambiar código»
- Con migraciones de base de datos, primero saca el SQL de migración para revisión humana
```

## Errores habituales

| Error | Consecuencia |
|---|---|
| Apilar una enciclopedia del framework | Se ignoran los comandos de test clave |
| Reglas que se contradicen | El modelo elige una al azar |
| Solo frases vacías del tipo «sé elegante» | No se puede verificar |
| Incluir secretos o URLs de intranet | Riesgo de fuga |

## Malentendidos habituales

### 1. Más detalle no siempre es mejor

Demasiado disperso, largo o enciclopédico ahoga las reglas de alta prioridad.

### 2. ¿«Presta atención a las normas» ya cuenta como instrucción?

Ese tipo de frase suele no ser ejecutable.  
Es mejor dar directamente:

- Comandos reales
- Directorios concretos
- Criterios de hecho específicos

### 3. ¿Se pueden mezclar trasfondo y reglas de ejecución?

Tampoco conviene.  
Mejor:

- Reglas delante
- Trasfondo comprimido en una frase
- Explicaciones más largas en docs

## Al reescribir, céntrate en esto

Si tienes unas instrucciones de proyecto muy dispersas, puedes condensarlas así:

1. Sube «debe/prohibido» al principio
2. Convierte frases vacías en comandos o ítems de checklist
3. Acorta el trasfondo largo y conviértelo en enlaces
4. Da un conjunto mínimo de definición de hecho

Una buena instrucción de proyecto no se mide por cuánto escribe, sino por si las restricciones clave, los comandos clave y los criterios de hecho están lo bastante claros para ejecutarse directamente.

## Ritmo de mantenimiento

- Cada vez que cambien comandos de CI, **actualiza a la vez** `AGENTS.md`
- Revisión trimestral: elimina reglas obsoletas
- Primer paso del onboarding de un miembro nuevo: leer AGENTS.md y completar el «inicio rápido»

## Lecturas relacionadas

- [Instrucciones del proyecto](/guide/customization/project-instructions/)
- [Explorar—planificar—ejecutar—verificar](/cases/workflows/explore-plan-execute-verify/)
- [Definir hecho](/prompts/define-done/)

## De una tarea a una regla de proyecto

No todo buen Prompt debe ir directamente a `AGENTS.md`. Primero decide qué capa debe poseerlo.

| Contenido repetido | Mejor lugar |
|---|---|
| “No tocar directorios generados” | Prohibición en `AGENTS.md` |
| “Revisar cada PR con este formato” | Skill o plantilla de Prompt |
| “Formatear archivos tras escribir” | Hook |
| “Leer Linear/Jira antes de programar” | MCP + Skill correspondiente |
| “Prefiero explicaciones en chino” | Memoria o preferencia personal |

`AGENTS.md` encaja mejor con reglas duraderas, compartidas y verificables. Los procesos pueden pasar a Skills; los chequeos automáticos, a Hooks; el acceso externo, a MCP.

---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Contrastado con las páginas actuales de la serie `AGENTS.md` de este repositorio y con los capítulos de contexto y flujos de trabajo; esta página solo explica principios estables de escritura y ritmo de mantenimiento de instrucciones de proyecto, sin convertir detalles de implementación de un cliente concreto en promesas a largo plazo.  
**Última verificación:** 2026-07-26
