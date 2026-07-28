---
title: Resolución de problemas de la CLI
description: Investigar fallos de autenticación, Permisos y comandos.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Cuando la CLI falla, el error puede parecer siempre un error de terminal, pero la causa de fondo no tiene por qué ser de la misma clase.

Al resolver problemas de la CLI, primero sitúa el problema en una de estas: «mal instalado / sin login / sin Permiso / directorio equivocado».

| Síntoma | Prueba primero |
|---|---|
| command not found | Comprueba instalación y PATH |
| Fallo de autenticación | Vuelve a iniciar sesión; revisa la política de la organización |
| Permiso denegado | Mira el modo de Aprobación y los ajustes de Sandbox |
| Cambia archivos en el directorio equivocado | Confirma el directorio de trabajo actual |

## Primero, 4 categorías

- **Ni siquiera encuentra el comando**: suele ser instalación o `PATH`
- **El comando corre, pero no entra**: suele ser autenticación
- **Entra, pero no puede hacer nada**: suele ser Permisos o Sandbox
- **Hace algo incorrecto**: suele ser directorio o Contexto equivocado

## Malentendidos frecuentes

### 1. Todo error de CLI hay que investigarlo en el mismo log

Clasificar el problema en una categoría grande suele ser más rápido que profundizar de entrada en el detalle del error.

### 2. Permiso denegado significa que el programa está roto

A menudo no está roto: Aprobación, Sandbox o la política están funcionando con normalidad.

### 3. Si el comando se ejecutó, el directorio está bien

Tampoco.

Muchos problemas de la CLI no son que el comando no corra, sino que lo ejecutas en el repositorio o el directorio de trabajo equivocados.

## Orden de investigación

1. Confirma primero si el comando existe
2. Confirma el estado de login
3. Mira el modo de Permisos actual y los límites del Sandbox
4. Por último confirma si el directorio de trabajo actual es el proyecto que creías

Al resolver problemas de la CLI, distinguir primero si es instalación, login, Permisos o directorio suele ordenar la investigación.

Documentación oficial: [OpenAI Codex](https://developers.openai.com/codex).


---

**Estado:** verified  
**Productos aplicables:** CLI  
**Base de verificación:** El material de introducción y configuración de la CLI de OpenAI Help Center sigue cubriendo instalación, autenticación, Permisos/Sandbox y directorio de trabajo como orígenes habituales de problemas; esta página usa un triage por síntoma en cuatro categorías (instalación, login, Permisos, directorio), un marco estable de desvío de fallos.  
**Última verificación:** 2026-07-26
