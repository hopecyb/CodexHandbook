---
title: Tareas locales y Cloud
description: Cambiar entre ejecución local y Cloud en la App.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 70
---

Aquí se trata de si, en la App de escritorio, la Tarea se ejecuta en tu máquina o en un entorno remoto.

En la App eliges dónde corre la Tarea:

- **Local**: archivos y entorno de tu máquina; la iteración es rápida
- **Cloud**: entorno en la nube; conviene para repositorios remotos y Tareas largas

Conceptos: [Local frente a Cloud](/guide/foundations/local-vs-cloud/) · Resumen: [Web y Cloud](/guide/web-and-cloud/)

Antes de cambiar, confirma: si las claves deben aparecer en ese entorno y si la política de red lo permite.

## Malentendidos frecuentes

### 1. Si estoy en la App de escritorio, ¿por qué distinguir local y Cloud?

Porque la App es solo la entrada; no implica que toda Tarea se ejecute en tu máquina.

### 2. ¿Cuál debería elegir por defecto?

En la mayoría de los casos, empieza por local, sobre todo porque:

- Los archivos ya están en tu ordenador
- Los resultados son más fáciles de comprobar
- Si algo falla, es más fácil deshacerlo

### 3. ¿Cuándo conviene considerar Cloud?

Situaciones habituales:

- La Tarea es larga
- Hay que conectar un entorno de repositorio remoto
- Necesitas un entorno unificado
- No quieres ocupar la máquina local

En la App de escritorio, si lo local basta, usa local; cuando la Tarea sea más larga, más remota o necesites un entorno unificado, entonces considera Cloud.

---

**Estado:** verified  
**Productos aplicables:** App  
**Base de verificación:** La documentación actual de OpenAI Help Center (*ChatGPT Work and Codex* y *Using Codex with your ChatGPT plan*) distingue claramente local workflows y cloud tasks; esta página solo resume, en el contexto de la App de escritorio, el criterio de que lo local encaja mejor con iteración rápida y Cloud con repositorios remotos y Tareas largas.  
**Última verificación:** 2026-07-26
