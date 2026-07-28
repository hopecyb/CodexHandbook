---
title: Resolución de problemas del IDE
description: Problemas de carga de la extensión, Contexto y sincronización.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

La resolución de problemas del IDE se diferencia de la de la CLI en esto:  
muchos problemas parecen «el Plugin no funciona», pero a menudo el desvío está en el **workspace, el estado de login o el propio Contexto del editor**.

Cuando el IDE falla, primero separa si «la extensión no arranca» o «la extensión arranca, pero el Contexto que recibe no es el correcto».

| Síntoma | Prueba primero |
|---|---|
| La extensión no responde | Actualiza extensión y editor; mira los logs del extension host |
| Se pierde el estado de login | Vuelve a autenticarte |
| El Contexto no es el correcto | Confirma la raíz del workspace abierto |

## Primero, tres categorías

- **Ninguna respuesta**: suele ser carga de la extensión
- **Se abre pero no sirve**: suele ser login o autenticación
- **Responde mal o cambia el sitio equivocado**: suele ser workspace o Contexto

## Malentendidos frecuentes

### 1. Si el icono del Plugin sigue ahí, la extensión está bien

Que el icono esté solo dice que está instalado; no implica que la sesión actual funcione de verdad.

### 2. Si el Contexto falla, es que el modelo entiende mal

A menudo no es comprensión: es la raíz abierta, el alcance de archivos elegidos o el propio workspace.

### 3. ¿Reinstalar el Plugin tiene que ser el primer paso?

No hace falta empezar por ahí.

Confirma primero:

- Versión del editor
- Versión de la extensión
- Estado de login
- Workspace actual

Muchos problemas se localizan en ese punto.

## Orden de investigación

1. Mira si la extensión responde
2. Confirma el estado de login
3. Confirma la raíz del workspace actual y los archivos abiertos
4. Si sigue fallando, mira los logs de la extensión

La causa raíz más habitual en resolución de problemas del IDE es workspace, estado de login u origen del Contexto incorrectos; no tiene por qué ser un Plugin dañado.

Documentación oficial: [OpenAI Codex](https://developers.openai.com/codex).


---

**Estado:** verified  
**Productos aplicables:** IDE  
**Base de verificación:** El centro de ayuda de OpenAI sigue confirmando la IDE extension como una entrada formal; esta página reparte los problemas del IDE en «extensión sin respuesta / estado de login / workspace y Contexto», un marco estable de triage más que un manual de códigos de error concretos.  
**Última verificación:** 2026-07-26
