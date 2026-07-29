---
title: Inicio de sesión y autenticación
description: Completa el inicio de sesión y confirma identidad y estado de Permisos.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 60
---

Muchos principiantes confunden «ya inicié sesión» con «ya puedo usarlo con normalidad»; no son exactamente lo mismo.

El inicio de sesión responde a «quién eres»; la autenticación y la confirmación de Permisos responden a «si puedes empezar a usarlo con normalidad en este cliente».

Inicia sesión en el cliente elegido siguiendo las indicaciones de la interfaz. Puedes encontrarte con:

- Autorización con redirección al navegador
- SSO / cuenta de organización
- Código de dispositivo o token (escenarios CLI)

## Qué confirmar después de iniciar sesión

Confirma sobre todo:

- Si ya estás realmente en un estado usable
- Si usas identidad personal u organizacional
- Si aún no puedes usarlo, si el problema parece un fallo de inicio de sesión o Permisos no habilitados

## Confirmación tras el inicio de sesión

- Se muestra tu cuenta u organización
- Puedes crear o abrir un proyecto
- No hay errores del tipo «sin Permiso para usar Codex»

Si las tres se cumplen, en general puedes pasar al siguiente paso.

## Malentendidos frecuentes

### 1. Si el navegador ya autorizó, todo está bien

A veces el navegador ya autorizó, pero en el cliente aún puede pasar:

- No cambiaste a la cuenta correcta
- Los Permisos de la organización no están abiertos
- El plan o la elegibilidad de acceso no coinciden
- El estado del cliente local aún no se ha actualizado

### 2. La experiencia de inicio de sesión de App, CLI e IDE debería ser idéntica

Cada cliente puede completar la verificación de forma distinta, por ejemplo:

- La App de escritorio suele usar redirección en interfaz gráfica
- La CLI puede usar código de dispositivo, token o autorización en el navegador
- La extensión IDE además depende del estado del propio editor

### 3. Si puedo iniciar sesión, da igual qué identidad estoy usando

Sobre todo cuando coexisten cuenta personal, de equipo y SSO organizacional, mira con claridad:

- Quién aparece ahora
- A qué organización pertenecen los Permisos actuales
- Bajo qué identidad se colgarán los proyectos y Tareas siguientes

## Orden de diagnóstico si iniciaste sesión pero aún no puedes usarlo

Si iniciaste sesión pero aún no puedes empezar con normalidad, comprueba en este orden:

1. Confirma que la cuenta mostrada es la que quieres usar
2. Confirma que entraste en la organización o el espacio de trabajo correctos
3. Mira si hay avisos de Permisos, elegibilidad de acceso o límite de plan
4. Al final, comprueba si el propio cliente está bloqueado o sin sincronizar

Lo importante es confirmar que usas la identidad correcta y que ya puedes crear proyectos e iniciar Tareas.

Los detalles de autenticación y las advertencias de seguridad se rigen por la documentación oficial: [https://developers.openai.com/codex](https://developers.openai.com/codex). Si falla, consulta el [índice de resolución de problemas](/guide/reference/troubleshooting/).

---

**Estado:** outdated  
**Productos aplicables:** App / CLI / IDE  
**Nota de revisión:** Esta página cubre autorización en el navegador, SSO, código de dispositivo, identidad organizacional y estado usable del cliente; esa experiencia cambia rápido entre entradas y versiones; falta documentación oficial de inicio de sesión suficientemente sólida para respaldar toda la página, por eso se marca primero como `outdated`.  
**Última verificación:** 2026-07-26
