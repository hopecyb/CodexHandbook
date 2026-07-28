---
title: Contexto de archivos y carpetas
description: Señalar archivos relevantes y evitar ruido irrelevante.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

No digas solo «ayúdame a cambiarlo»: dile también a Codex qué archivos mirar y cuáles no.

Puede que ya sepas que el problema está en cierto directorio, pero si el alcance no está claro, Codex puede arrastrar también archivos irrelevantes.

## Por qué importa el alcance

Cuando el alcance es demasiado grande, suelen aparecer a la vez:

- Lee muchos archivos no relacionados
- El Contexto se llena de información irrelevante
- Toma por objetivo otro archivo parecido
- El alcance del cambio supera lo que esperabas

Así que el Contexto de archivos y carpetas sirve para dibujarle límites.

## Por qué hay que acotar el alcance de archivos

Puedes pensarlo como llevar a alguien a la oficina a buscar material:

- Si dices solo «búscala», puede revolver media planta
- Si dices «solo mira la carpeta azul del tercer armario», la eficiencia sube mucho

Con Codex pasa igual. Cuanto más claro sea el alcance que das, menos tiene que completar a base de conjeturas.

## Un ejemplo sencillo

Indica rutas relevantes:

```text
Lee solo src/components/Button.tsx y su archivo de tests; no escanees todo el repositorio.
```

Esa frase deja claro a la vez:

- Dónde mirar
- Dónde no mirar
- Que no amplíe el alcance por su cuenta

## Malentendidos frecuentes

### 1. ¿Cuantos más archivos relevantes, mejor?

Demasiado pocos le hacen adivinar; demasiados diluyen el foco.
Lo más adecuado: **dar solo la parte que de verdad hace falta para completar la Tarea actual.**

### 2. Si no sé dónde están los archivos relevantes, ¿qué hago?

Puedes pedirle primero que estreche el alcance, pero con el objetivo claro, por ejemplo:

```text
Primero ayúdame a encontrar los archivos relacionados con el estilo del botón de login; todavía no modifiques nada.
```

Primero localizar, luego ejecutar, suele ser más estable que «buscar en todo el repo y de paso cambiar».

### 3. ¿Da igual no indicar alcance, total ya buscará solo?

Puede buscar, pero el coste suele ser:

- Lee más
- Va más lento
- Es más fácil arrastrar también archivos parecidos
- Es más probable que cambie sitios que no esperabas

### 4. ¿Hay que decir directorio y archivo?

No necesariamente, pero cuanto más concreto, mejor.

- Ya sabes qué archivo: nómbralo
- Solo sabes la zona aproximada: indica primero el directorio
- No tienes ni idea: pídele primero solo localizar y explicar

## Tres cosas que conviene añadir al Prompt

Si te preocupa que cambie de más, puedes añadir en el Prompt estas tres:

1. Solo mirar qué archivos o directorios
2. No escanear dónde
3. Antes de modificar, explicar qué archivos afectará

En el IDE, comprueba que la raíz del workspace actual sea la correcta.

## Redacción lista para usar

Puedes usar directamente algo así:

```text
Primero mira solo `src/pages/home/` y `src/components/Hero.tsx`.
No escanees `backend/` ni `scripts/`.
Si necesitas otros archivos, dime primero por qué y luego continúa.
```

Señalar a Codex el alcance de archivos es reducir conjeturas, ruido y cambios erróneos.

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Esta página solo explica cómo limitar el alcance de archivos y directorios; las redacciones de ejemplo y los conceptos se han revisado, y el cuerpo no depende de hechos volátiles de producto (versión, precio o interfaz).  
**Última verificación:** 2026-07-26
