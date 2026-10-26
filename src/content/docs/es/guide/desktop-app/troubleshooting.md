---
title: Resolución de problemas de la App de escritorio
description: Tratamiento habitual de fallos de instalación, inicio de sesión y tareas.
locale: es
source_locale: zh-CN
source_revision: "c298f9f"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-25
sidebar:
  order: 100
legacyVerification:
  status: verified
  products: App
  basis: La documentación de ayuda actual de la aplicación de escritorio de OpenAI sigue cubriendo instalación, inicio de sesión, acceso a proyectos y autorización de archivos locales; esta página usa un marco de triage por síntoma hacia instalación, login, permisos, tareas a la espera de aprobación y alcance del contexto, como entrada estable de resolución de problemas.
  checkedAt: '2026-07-26'
---
Al resolver problemas, investiga en el orden de lo más probable y más fácil de arreglar.

| Síntoma | Prueba primero |
|---|---|
| No se puede instalar/abrir | Comprueba los requisitos del sistema y el paquete oficial; reinicia e inténtalo de nuevo |
| No se puede iniciar sesión | Revisa red, permisos de cuenta y SSO; limpia la sesión y vuelve a entrar |
| No se ven los archivos del proyecto | Confirma que has añadido la carpeta correcta y los permisos de archivos del sistema |
| La tarea espera aprobación sin avanzar | Vuelve a la vista de tarea y gestiona las solicitudes pendientes |
| Los cambios no cumplen lo esperado | Ajusta las restricciones, abre un hilo nuevo, revisa el contexto |

Si sigue fallando: [https://developers.openai.com/codex](https://developers.openai.com/codex) y el [índice de resolución de problemas](/es/guide/reference/troubleshooting/).

## Malentendidos frecuentes

### 1. Si aparece un problema, ¿significa que algo se está usando muy mal?

Muchos problemas son solo:

- La ruta no es la correcta
- Falta un permiso
- La tarea espera tu confirmación
- El contexto de la conversación ya está embrollado

### 2. Si «no veo archivos», ¿qué sospechar primero?

Prioriza el directorio del proyecto y los permisos; no empieces dudando de la capacidad del modelo.

### 3. Si «los cambios no cumplen lo esperado», ¿cómo recuperarlo?

Primero acota el problema:

- Vuelve a aclarar el alcance
- Señala qué está mal
- Si hace falta, abre un hilo nuevo

En resolución de problemas, empieza por las causas más comunes y fáciles de corregir; no hace falta complicarlo desde el principio.
