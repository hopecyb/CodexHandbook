---
title: Descripción general de Skills
description: Enseña a Codex flujos de trabajo reutilizables con SKILL.md; escríbelo una vez y llámalo cuando haga falta.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Un **Skill** es un directorio que contiene `SKILL.md` (y, opcionalmente, scripts y material de referencia) que empaqueta un flujo fijo en una capacidad que Codex puede **invocar automáticamente o de forma explícita**.

Encaja con métodos de trabajo que ya se han repetido y que seguirán reutilizándose.

## Conceptos clave

### Diferencia con los comandos slash

| | Comando slash | Skill |
|---|---|---|
| Activación | Escribes `/xxx` | Puedes llamar con `$name`, o el modelo hace match por la descripción |
| Contexto | Suele expandirse de inmediato | **Divulgación progresiva**: en reposo solo ocupa nombre + descripción; el texto completo se lee al seleccionarlo |
| Encaja con | Entradas fijas, frecuentes y que recuerdas | Flujos largos, con documentación, en los que quieres que el modelo decida cuándo usarlo |

### Divulgación progresiva

Al arrancar, Codex solo ve el **name, description y ruta** de cada Skill; carga el `SKILL.md` completo solo cuando decide usarlo. Por eso el cuerpo puede incluir listas de comprobación detalladas sin saturar el contexto.

Nota: la lista de Skills tiene un **presupuesto inicial de caracteres** (una fracción pequeña del contexto). Pon los escenarios de activación principales **al principio** de `description`, para que un recorte no rompa el match.

## Estructura del directorio de un Skill

```text
my-skill/
├── SKILL.md          # Obligatorio
├── scripts/          # Opcional: pasos deterministas
└── references/       # Opcional: documentación de referencia larga
```

Ejemplo mínimo de `SKILL.md`:

```md
---
name: pr-review
description: Revisa el diff de la rama actual frente a main; señala riesgos y huecos de pruebas. Úsalo cuando el usuario pida review, revisar un PR o comprobar antes de fusionar.
---

## Pasos
1. Obtener el diff respecto a main
2. Clasificar por archivo: errores lógicos, seguridad, rendimiento, pruebas
3. Emitir lista graduada: bloqueante / recomendación / nit
4. No hacer push ni fusionar automáticamente
```

## Dónde guardarlo

| Tipo | Ubicación típica | Notas |
|---|---|---|
| Skill de proyecto | `.agents/skills/<name>/` | Viaja con el repo; compartido por el equipo |
| Skill de usuario | Directorio de skills del usuario (ver docs oficiales) | Personal, entre proyectos |
| Selección oficial | Instalado mediante el instalador | Ruta gestionada por el instalador; no confundir con directorios escritos a mano |

**No** copies rutas erróneas de tutoriales obsoletos ni campos inventados como `trigger:`; sigue la [documentación oficial de Skills](https://developers.openai.com/codex/skills).

## Formas de activación

1. **Explícita**: en entornos compatibles, llama con `$skill-name` (el nombre coincide con el `name` del frontmatter)
2. **Implícita**: el modelo decide por semántica de `description` si la tarea actual encaja

Claves para escribir bien `description`:

- Deja claro «cuándo usarlo» y «cuándo no»
- Incluye palabras clave que el usuario podría decir (review, release, changelog)
- Evita frases vagas como «ayudar al usuario a escribir código»

## Flujo de trabajo recomendado

1. Detectas que un flujo ya se ha repetido varias veces
2. Redactas `SKILL.md`, primero solo con pasos en texto
3. Pruebas en una tarea pequeña con `$name` y match implícito
4. Cuando necesites determinismo, añades `scripts/`
5. Lo envías a `.agents/skills/` y abres un PR para el equipo

Práctica: [Crear tu primer Skill](/skills/create-your-first-skill/)

## Confusiones habituales

### 1. ¿Qué diferencia hay entre un Skill y un Prompt?

- **Prompt**: lo que dices de forma temporal para esta tarea
- **Skill**: un flujo reutilizable para tareas parecidas en el futuro

### 2. ¿Debo aprender a escribir Skills desde el principio?

No. Primero formula bien las tareas normales; cuando un flujo se repita muchas veces, plantéate consolidarlo como Skill.

### 3. ¿Es lo mismo que un comando slash?

No del todo. El comando slash es más una entrada rápida; el Skill es un paquete de trabajo con instrucciones y flujo completos.

Un Skill no es obligatorio al empezar; encaja mejor para organizar flujos que ya se repiten.

## Límites de seguridad

- Los scripts y las llamadas MCP dentro de un Skill heredan la política de Aprobación actual
- No codifiques secretos en el Skill; usa variables de entorno o autenticación MCP
- El equipo debe revisar Skills de terceros como revisaría dependencias

## Errores frecuentes

- `description` demasiado largo o genérico → nunca se activa o se activa mal
- Meter diez flujos no relacionados en un solo Skill
- Sustituir con scripts pasos que bastaría describir con claridad, y volverse difíciles de mantener

## Fuentes de referencia
- Documentación de OpenAI Codex Skills
---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE  
**Base de verificación:** Las reglas actuales de carga de Skills en el runtime de Codex (`SKILL.md`, lectura bajo demanda del archivo completo) coinciden con la definición de Skill como workflow reutilizable en OpenAI Help «Skills in ChatGPT»; esta página se centra en conceptos y organización de directorios, sin depender de UI volátil.  
**Última verificación:** 2026-07-26
