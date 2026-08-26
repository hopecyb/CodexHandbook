---
title: Crear tu primer Skill
description: Crea desde cero un Skill pr-review enviable, con pruebas y pasos para compartirlo en el equipo.
locale: es
source_locale: zh-CN
source_revision: d6ef72a
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Si ya sabes asignar tareas pero aún no has hecho un Skill de verdad, esta página cubre el método básico del primero.

Dedicar 15–30 minutos a un Skill **reutilizable en el repositorio** suele ser más directo que leer mucha teoría. Un buen punto de partida es un Skill pequeño con límites claros.

## Para quién

Ya puedes completar la [primera tarea](/es/cases/first-task/) y estás dispuesto a experimentar en un repositorio de prueba.

## Por qué empezar con `pr-review`

Tiene varias ventajas:

- La entrada es relativamente clara
- El riesgo es menor que «cambiar código directamente»
- Es fácil juzgar si funciona bien
- Te ayuda a entender activación y redacción de límites de un Skill

Encaja para practicar cómo convertir un método de trabajo en algo reutilizable.

## Resultado objetivo

Un Skill en `.agents/skills/pr-review/` que emita una revisión estructurada de los cambios actuales.

## Objetivo mínimo

En el primer Skill, basta con lograr estas tres cosas:

1. Que se reconozca
2. Que ejecute de forma estable un flujo claro
3. Que no haga acciones peligrosas por su cuenta

Con eso claro, las iteraciones posteriores van mucho más fluidas.

## Pasos

### 1. Crear el directorio

```bash
mkdir -p .agents/skills/pr-review
```

### 2. Escribir SKILL.md

```md
---
name: pr-review
description: Revisa el git diff; lista problemas bloqueantes, huecos de pruebas y sugerencias de estilo. Úsalo cuando el usuario mencione review, revisión o comprobación previa a fusionar. No sirve para escribir funciones nuevas.
---

# Revisión de PR

## Entrada
- Rama de comparación por defecto: main (si no existe, la rama por defecto)

## Flujo
1. Listar archivos cambiados y tipo de cambio (función/fix/refactor/docs)
2. Por cada cambio lógico: ¿faltan pruebas? ¿rompe la API?
3. Comprobar secretos, logs de depuración y diffs irrelevantes demasiado grandes
4. Salida:
   - 🔴 Bloqueante: hay que corregirlo
   - 🟡 Recomendación: conviene corregirlo
   - 🟢 OK: cumple los requisitos de AGENTS.md

## Prohibido
- No hacer git push
- No modificar APIs públicas no discutidas
```

### 3. Probar en local

Abre el repositorio en Codex e intenta:

```text
$pr-review Por favor revisa mis cambios sin confirmar
```

O en lenguaje natural: «Revisa el diff según el hábito del equipo, prioriza las pruebas.»

### 4. Primero explícito, luego implícito

No empieces probando la activación automática.

Prueba en este orden:

1. Llama explícitamente con `$pr-review`
2. Confirma que el flujo y la salida están bien
3. Luego prueba la activación en lenguaje natural

Así es más fácil saber si el problema está en el contenido del Skill o en que `description` no deja claros los disparadores.

### 5. Iterar description

Si el modelo **nunca lo elige solo**, estrecha o añade palabras de activación en `description`. Si lo **usa en exceso**, añade «cuándo no usarlo».

### 6. Enviar para compartir en el equipo

```bash
git add .agents/skills/pr-review
git commit -m "docs: add pr-review skill for Codex"
```

En el README del equipo o en `AGENTS.md`, añade una línea: «Antes de fusionar puedes usar `$pr-review`.»

## Malentendidos habituales

### 1. El primer Skill debe ser lo más completo posible

A menudo es al revés. Cuanto más pequeño y enfocado sea el primero, más fácil juzgar si aporta valor.

### 2. Lo importante no es que «parezca inteligente»

Lo importante es que los **límites estén claros**.

Qué debe hacer y qué no importa más que «parecer potente».

### 3. Si el Skill corre, ya es un éxito

Un Skill útil al menos debe:

- Dejar claro a otros cuándo usarlo
- Tener una estructura de salida fija
- No hacer operaciones peligrosas por su cuenta

## Lista de aceptación

- [ ] `$pr-review` funciona y no ejecuta operaciones git peligrosas
- [ ] La salida incluye conclusiones graduadas, no generalidades
- [ ] `description` deja claro el escenario de activación en una frase
- [ ] Has contrastado las necesidades de scripts con [Permisos y Sandbox](/es/guide/permissions-and-sandbox/) (este ejemplo no tiene scripts)

Empezar con un Skill «pequeño y estable» facilita reutilizar de forma estable un método de trabajo claro.

## Siguientes pasos

- Consolidar [Explorar—Planificar—Ejecutar—Verificar](/es/prompts/templates/understand/) como Skill
- Cuando necesites la API de GitHub, introduce [MCP](/es/skills/mcp/mcp-overview/)

## Fuentes de referencia
- Ejemplos oficiales de OpenAI Codex Skills y `skill-creator` (si el entorno lo ofrece)
---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE  
**Base de verificación:** El runtime actual de Codex sigue admitiendo directorios de Skills en el proyecto, definición mediante `SKILL.md` y prueba con invocación explícita; esta página es un ejercicio estable de primer Skill.  
**Última verificación:** 2026-07-26
