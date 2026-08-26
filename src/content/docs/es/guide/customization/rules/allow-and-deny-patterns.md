---
title: Reglas de permitir y denegar
description: Restringe con reglas de comandos y rutas lo que el Agent puede ejecutar — hábitos personales y línea roja del equipo.
locale: es
source_locale: zh-CN
source_revision: 0ae6680
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

Las **Rules (reglas)** declaran en la configuración o en archivos del proyecto qué comandos shell, rutas y llamadas a herramientas están **permitidos o prohibidos**, para reducir clics de aprobación manual y a la vez impedir que se automaticen operaciones peligrosas.

## Contenido

- Cómo funcionan las reglas Allow / Deny
- Relación con Sandbox, ventanas de aprobación y `AGENTS.md`
- Ejemplos de reglas de equipo

## Qué hacen realmente las reglas

Si «reglas» te suena abstracto, puedes verlas primero como: acordar de antemano qué puede hacer Codex y qué no, en lugar de depender cada vez del juicio del momento y de aprobar a mano.

Su valor es sobre todo de dos tipos:

- Reducir operaciones de bajo riesgo que ocurren cada día pero siempre piden confirmación
- Bloquear de antemano operaciones de alto riesgo que no deberían ocurrir de forma automática

## Tipos de reglas (concepto)

| Tipo | Ejemplo |
|---|---|
| Allowlist de comandos | Permitir `npm test`, `git status` |
| Denylist de comandos | Prohibir `rm -rf`, `curl \| bash` |
| Rutas | Prohibir escritura en `../`, prohibir lectura de `~/.ssh` |
| Red | Prohibir salida a internet o permitir solo dominios del registry |

Contrasta con la [matriz de permisos](/es/guide/reference/permission-matrix/): las reglas son enforcement **configurable**; la matriz describe **defaults típicos**.

## Capas recomendadas

```text
Política gestionada de la organización (no anulable)
    ↓
Rules del proyecto + AGENTS.md (revisión en Git)
    ↓
Allowlist personal complementaria (solo esta máquina)
    ↓
Restricciones del prompt de una sola tarea
```

## Malentendidos habituales

### Las reglas no son solo para ver menos ventanas

La primera vez que oyen allowlist, mucha gente cree que el objetivo es menos ventanas y menos interrupciones.

Menos ventanas es solo una parte; lo más importante es dejar pasar lo de bajo riesgo y bloquear lo de alto riesgo.

### Reglas ≠ Sandbox

El Sandbox limita «hasta dónde puede llegar como máximo»; las reglas acuerdan «qué acciones no deberían hacerse en principio».

Conviene usar ambos juntos, no elegir uno para sustituir al otro.

### La línea roja del equipo no puede vivir solo en la máquina de alguien

Si solo las reglas de tu máquina saben «prohibido push» o «no tocar `.env`», los demás pueden seguir cayendo.

La línea roja del equipo debería vivir, en la medida de lo posible, donde se pueda hacer review.

## Ejemplo de equipo (ilustrativo, no copiar tal cual)

**Permitir:**

- Instalar dependencias **dentro del proyecto** con el gestor de paquetes
- Ejecutar scripts de test documentados

**Denegar:**

- `git push`, `git reset --hard`
- Lectura/escritura de `.env*` (salvo tarea explícita)
- POST a internet público con contenido del repositorio

Las reglas deben escribirse en archivos que el equipo pueda revisar, no solo en acuerdos orales.

## Errores habituales

- Allowlist demasiado ancha (permitir `bash` equivale a permitirlo casi todo)
- Solo deny sin allow: siguen saliendo demasiadas aprobaciones
- Reglas en contradicción con `AGENTS.md`

## Sugerencia para empezar

Al organizar reglas por primera vez, no hace falta una política completa de golpe. Con estos dos pasos ya basta:

1. Lista 3 a 5 comandos de bajo riesgo que se ejecutan cada día
2. Lista unas cuantas acciones de alto riesgo que no quieres que se ejecuten solas

Primero haz funcionar el límite mínimo; luego refina.

## Límites de seguridad

- Las reglas **no** sustituyen code review ni protección de ramas
- Un prompt malicioso puede inducir al Agent a intentar saltarse las reglas — mantén el Sandbox estricto por defecto
- Cambia las reglas por PR, como si cambiaras CI

Una buena regla allow/deny deja claro de antemano qué acciones son razonables y cuáles no deberían ocurrir.

---

**Estado:** verificado  
**Productos aplicables:** CLI / App  
**Base de verificación:** La documentación actual de permisos de Codex/plugins de OpenAI sigue enfatizando la estratificación de acciones de lectura/escritura, aprobación, límites de origen y control de acceso por rol; esta página no declara la sintaxis concreta de archivos de reglas, sino que explica allow/deny como un patrón de límite de ejecución, separado de Sandbox, aprobación y flujos de revisión del equipo.  
**Última verificación:** 2026-07-26
