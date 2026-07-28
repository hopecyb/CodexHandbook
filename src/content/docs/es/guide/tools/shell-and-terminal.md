---
title: Shell y terminal
description: Capacidades y riesgos de la ejecución de comandos.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

El terminal es una de las formas más directas de que Codex ejecute acciones: por eso es muy eficiente y también hace falta que entiendas el riesgo.

## Por qué es potente y peligroso

Las herramientas de archivo tratan sobre todo texto; el terminal opera directamente el sistema y el entorno de ejecución.

Una vez en el terminal, las acciones habituales ya no son solo leer; pueden pasar a:

- Instalar
- Construir
- Probar
- Borrar
- Hacer commit
- Hacer push

Antes de usarlo, aclara qué va a cambiar.

El terminal es potente y peligroso. Principios:

- Antes de la aprobación, entiende el comando
- Prohibir `rm -rf`, force push, cambiar la configuración ssh, etc., salvo que lo entiendas del todo y sea necesario
- Incluye los comandos de verificación en los criterios de aceptación

Entrada de producto: [Terminal integrado](/guide/desktop-app/integrated-terminal/)

## Por qué el riesgo del terminal es mayor

Porque no solo «da sugerencias»: ejecuta acciones de verdad.

Por ejemplo, puede:

- Instalar dependencias
- Borrar archivos
- Ejecutar tests
- Reescribir configuración
- Hacer push de código

Si no entiendes un comando, pregunta primero y luego decide si lo permites.

## Cuándo encaja el terminal

Estas cosas encajan con el terminal:

- Ejecutar tests
- Ejecutar builds
- Consultar el estado de archivos
- Ejecutar scripts que ya tiene el proyecto

Si solo quieres:

- Ver cómo se ve una página
- Consultar material público actualizado
- Cambiar un par de textos conocidos

el terminal no tiene por qué ser la primera opción.

## Malentendidos habituales

### 1. Si no conoces comandos, no significa que no puedas usar el terminal

Al principio no hace falta saber escribir muchos comandos, pero al menos debes poder entender:

- Qué pretende más o menos ese comando
- Si va a cambiar archivos o el sistema
- Si de verdad tiene que ver con la tarea actual

### 2. ¿Si es un comando de test, siempre es seguro?

Tampoco.  
La mayoría de comandos de test tienen riesgo bajo, pero igual hay que mirar:

- Si escriben muchos archivos
- Si salen a la red
- Si invocan scripts que no conoces

### 3. ¿Y si no lo entiendes?

Puedes preguntar, por ejemplo:

```text
¿Qué hace este comando? ¿Qué contenido modifica? Si no lo ejecuto, ¿qué impacto tiene?
```

## Formulación aplicable directamente

Puedes añadir:

```text
Antes de ejecutar un comando, explica el propósito, si escribe archivos, si sale a la red y cómo recuperarse si falla.
```

Antes de ejecutar, confirma qué va a cambiar ese comando.

---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Esta página solo indica que la ejecución en terminal tiene mayor capacidad de acción y riesgo que la edición de archivos, y enfatiza entender el comando antes de la aprobación, confirmar alcance de escritura, red y forma de recuperación; los principios se contrastaron con los capítulos de permisos, verificación y herramientas del sitio.  
**Última verificación:** 2026-07-26
