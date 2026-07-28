---
title: Local frente a Cloud
description: Compara cuándo encajan las Tareas locales y las Tareas Cloud.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

«Local» y «Cloud» suenan a jerga técnica; en corto: local es trabajar en tu propio ordenador; Cloud, en una máquina remota.

Si solo quieres empezar a usar Codex, suele ser más sencillo empezar por **local**.

| | Tarea local | Tarea Cloud |
|---|---|---|
| Dónde se ejecuta | Tu máquina / entorno local | Entorno Cloud |
| Encaja cuando | Iteración rápida, archivos locales, depuración que necesita claves locales | Conectar repositorios remotos, Tareas largas, entornos estandarizados |
| Atención | Permisos locales y riesgo de ediciones erróneas | Configuración del entorno, inyección de claves, políticas de red |

## Cómo se siente al usarlo

A grandes rasgos:

- **Tarea local**: como si estuvieras delante de tu ordenador y Codex te ayudara a editar el proyecto actual
- **Tarea Cloud**: como encargarle la Tarea a una máquina remota para que siga allí

La diferencia no es solo «dónde», también incluye:

- a qué archivos puede acceder
- si puede usar directamente el software y el entorno que ya tienes en local
- cuánto tiempo puede correr la Tarea
- si el equipo necesita un entorno unificado

## Por qué muchos principiantes empiezan en local

Porque es más fácil de entender y de comprobar.

- Sabes que los archivos están en tu ordenador
- Es más fácil abrir el proyecto, ver el resultado y corregir a mano
- Si algo falla, la vía de revertir es más clara

Para la primera vez, cerrar el ciclo de una Tarea importa más que subir a la nube de entrada.

## Malentendidos frecuentes

### 1. Cloud no es necesariamente más avanzado ni más adecuado para trabajo formal

Si tu Tarea es editar un proyecto local, mirar archivos locales y probar unas cuantas veces, local es más directo.

### 2. ¿Local es «menos profesional»?

Mucho trabajo de desarrollo real ya se hace en local. Usar Cloud o no depende sobre todo del tipo de Tarea; no uses la «sensación de avanzado» como criterio.

### 3. Cómo elegir

Puedes juzgar así:

- **Editar un proyecto que ya tienes en el ordenador**: local
- **Tarea larga, quieres dejarla corriendo, quieres un entorno de repositorio remoto**: entonces considera Cloud

## Cómo elegir si no estás seguro

Si aún no lo tienes claro, usa esta regla: si se puede completar en local, no te apresures a subir a Cloud.

Cuando de verdad encuentres estas necesidades, pasa a Cloud:

- la Tarea dura mucho
- necesitas un entorno unificado
- necesitas conectar un repositorio remoto o recursos remotos
- no quieres ocupar la máquina local

Muchos principiantes empiezan con **local + App de escritorio**. Detalles de Cloud: [Resumen de Web y Cloud](/guide/web-and-cloud/). Cambio dentro de la App: [Tareas locales y Cloud](/guide/desktop-app/local-and-cloud-tasks/).

Local encaja mejor para entender el flujo y hacer cambios pequeños. Cloud, para Tareas más largas, más estandarizadas y con más colaboración remota.

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** OpenAI Help Center, en «Using Codex with your ChatGPT plan», sigue distinguiendo “local workflows run on your device” y “cloud tasks run in OpenAI-managed environments”; «ChatGPT Work and Codex» también confirma que Work en web/móvil corre en la nube. Esta página solo resume escenarios y trade-offs de Tareas locales y Cloud, sin atarse a planes o detalles de entrada concretos.  
**Última verificación:** 2026-07-26
