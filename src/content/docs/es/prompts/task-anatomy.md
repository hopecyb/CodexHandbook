---
title: Anatomía de una tarea
description: Objetivo, contexto, entradas, restricciones, aceptación y límites de permiso.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Al formular un requisito, con mucha información es fácil dispersarse: hay material de sobra, pero el foco no está claro, y Codex malinterpreta con más facilidad.

Aquí se resumen las partes habituales de una tarea.

## Estructura de la tarea

Puedes organizarla en este orden:

- cuál es el resultado
- por qué hay que hacerlo
- qué materiales hacen falta
- dónde están los límites
- cómo juzgar que está terminado

El orden no tiene que ser rígido; cuando estos puntos están claros, la tarea se estabiliza mucho.

## Plantilla recomendada

```text
Objetivo: …… (cuál es el artefacto final)
Contexto: …… (por qué importa, estado actual)
Entradas: …… (archivos / enlaces / contenido pegado)
Restricciones: …… (alcance editable, estilo, prohibiciones)
Criterios de aceptación: …… (condiciones comprobables de terminado)
Límites de permiso: …… (¿red? ¿instalar dependencias? ¿cambiar configuración?)
Si falta información: pregunta primero, no adivines.
```

## Función de cada bloque

- **Objetivo:** evita tareas que solo tienen acción y no resultado
- **Contexto:** ayuda a Codex a entender por qué hacerlo así
- **Entradas:** pone a su alcance los archivos, enlaces y materiales que de verdad necesita
- **Restricciones:** evita extralimitarse y cambios «de paso»
- **Criterios de aceptación:** convierte «¿está terminado?» en algo comprobable
- **Límites de permiso:** aclara de antemano red, dependencias y configuración

## Malentendidos habituales

### 1. Cada bloque debe llenarse por completo

La plantilla es más una lista de comprobación que un formulario.  
Algunas tareas no necesitan un contexto largo, pero al omitirlo también pierdes parte de la base de juicio.

### 2. Objetivo y aceptación no son lo mismo

No son lo mismo.

- **Objetivo** dice qué resultado quieres
- **Aceptación** dice cómo comprobar que de verdad se alcanzó

### 3. Entradas = pegar un montón de material

Más no es mejor; importa la relevancia.  
La clave es entregar con claridad el «material que debe mirar».

## Plantilla mínima de tarea

Si solo quieres una versión usable, puedes reducirla así:

```text
Objetivo: convertir qué en qué
Entradas: archivos o páginas relevantes aquí
Restricciones: solo puedes cambiar dónde; no toques qué
Aceptación: cómo comprobaré que de verdad terminaste
Ante la incertidumbre: pregunta primero
```

## Ejemplo

```text
Objetivo: reescribir el copy de la primera pantalla de la home de docs para que lo entiendan principiantes
Entradas: src/content/docs/guide/index.md
Restricciones: solo este archivo; no cambiar estilos; no añadir componentes
Aceptación: conservar la estructura actual; tono más conversacional; pnpm build pasa
Ante la incertidumbre: primero expón tu comprensión y el alcance del cambio, luego actúa
```

Esta estructura reduce las suposiciones y hace la aceptación más directa. Puedes recortar bloques según el caso, pero al eliminar uno aceptas perder esa parte de información.

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Esta página solo describe el método de estructura de tarea; se han revisado ejemplos y enlaces internos, y el cuerpo no depende de hechos volátiles del producto.
