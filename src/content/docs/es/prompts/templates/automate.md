---
title: Plantilla de automatización
description: Tareas repetidas y flujos reutilizables.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Plantilla de automatización

El error habitual en automatización es pensar solo en «¿puede correr solo?» y no en:

- qué pasa si falla
- quién ve el resultado
- si puede parar con seguridad ante un error

El foco de esta plantilla: que la tarea siga siendo controlable cuando algo va mal.

## Plantilla

```text
Objetivo: automatizar 【tarea repetida】 como 【script/Skill/tarea programada】.
Disparador: 【manual / programado / CI】
Entradas: 【fuentes de datos, archivos de configuración】
Restricciones:
- en fallo, código de salida claro y ubicación de logs
- no hardcodear secretos; usar variables de entorno
- ofrecer modo dry-run
Aceptación:
- con 【entrada de ejemplo】 produce el resultado esperado
- la documentación explica cómo ejecutar y depurar
```

## Cuándo usarla

- Tareas repetidas con reglas claras
- Flujos que conviene scriptar o programar
- Quieres añadir primero dry-run, logs y códigos de salida como barandillas

## Ideas erróneas habituales

### 1. Automatizar = eliminar el juicio humano

Muchas automatizaciones más realistas solo comprueban, resumen o abren borradores.

### 2. Si corre una vez, ya se puede automatizar

Para que sea sostenible a largo plazo, hay que complementar:

- logs
- códigos de salida
- dry-run
- guía de depuración

El valor de esta plantilla es que pueda correr de forma segura y duradera.

## Relacionado

- [Prompts para tareas largas](/prompts/long-running-tasks/)
- [Caso: automatizar un informe diario](/cases/automate-a-daily-report/)

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Esta página ofrece una plantilla de tareas de automatización; se han revisado enlaces y estructura, y el cuerpo no depende de hechos volátiles del producto.
