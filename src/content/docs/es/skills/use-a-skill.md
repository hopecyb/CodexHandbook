---
title: Usar un Skill
description: Activación explícita e implícita de Skills, y claves para escribir bien description.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Un malentendido habitual al empezar es pensar: «una vez instalado, ya funciona solo». Usar un Skill es hacer que Codex siga un flujo de trabajo ya escrito.

Un Skill puede invocarse **por nombre explícito** o, en el escenario adecuado, ser **elegido automáticamente** por el modelo. Distinguir ambas formas de activación evita rodeos al depurar.

# Usar un Skill

## Formas de activación

1. **Explícita**: en entornos compatibles, llama con `$skill-name` (coincide con el `name` del frontmatter)
2. **Implícita**: el modelo decide por semántica de `description` si la tarea actual encaja

## Cómo distinguirlas

- **Activación explícita**: dices «usa este Skill»
- **Activación implícita**: no lo nombras, pero la descripción de la tarea se parece mucho a su escenario de uso

Al probar un Skill por primera vez, prioriza la **activación explícita**. Así es más fácil comprobar:

- Si el Skill se reconoce
- Si el comportamiento es el esperado
- Si el nombre y la descripción están bien escritos

## Ejemplo

```text
$pr-review Por favor revisa mis cambios sin confirmar
```

O en lenguaje natural: «Revisa el diff según el hábito del equipo, prioriza las pruebas.»

## Malentendidos habituales

### 1. Si escribí el Skill, se activará solo

La activación automática depende de lo clara que sea `description` y de si la tarea actual se parece lo bastante a su escenario.

### 2. Lenguaje natural y `$name` dan siempre el mismo resultado

No necesariamente.

`$name` es más explícito: útil para verificar y forzar el uso. El lenguaje natural es más cómodo, pero a veces el modelo elige mal el Skill o no lo usa.

### 3. Si no se activa, el Skill está roto

También puede ser:

- Nombre incorrecto
- `description` demasiado genérica
- La descripción de la tarea no acierta las palabras de activación

Al depurar, no mires solo «si el archivo existe»; mira también «si está escrito como una herramienta que merezca ser elegida».

## Orden de prueba habitual

Para comprobar una vez que funciona:

1. Llama explícitamente con `$skill-name`
2. Comprueba si la salida cumple lo esperado
3. Ajusta `description`
4. Prueba si el lenguaje natural lo activa

Así separas «problema del Skill en sí» de «condiciones de activación automática mal escritas».

## Escribir bien description

- Deja claro «cuándo usarlo» y «cuándo no»
- Incluye palabras clave que el usuario podría decir (review, release, changelog)
- Evita frases vagas como «ayudar al usuario a escribir código»
- Pon el escenario de activación principal **al principio** (la lista de Skills tiene presupuesto de caracteres)

## ¿Está clara la description?

Un criterio útil:  
tras leer esa `description`, deberías saber «cuándo usarlo y cuándo no».

Si tras leerla parece que «sirve para casi todo», suele ser demasiado genérica.

Más conceptos: [Descripción general de Skills](/skills/overview/).
---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** El runtime actual de Codex sigue permitiendo referenciar Skills por nombre de forma explícita y hacer match automático cuando encaja; OpenAI Help «Skills in ChatGPT» también confirma que los Skills se usan automáticamente cuando ayudan. Esta página se centra en formas de activación y principios de redacción.  
**Última verificación:** 2026-07-26
