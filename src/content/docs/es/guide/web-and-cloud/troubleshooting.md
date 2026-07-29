---
title: Diagnóstico de Cloud
description: Índice de fallos habituales en conexión GitHub, entorno, Secrets, salida a red y PR.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 80
---

Cuando Cloud falla, volver a ejecutar casi nunca ataca la causa raíz.

Los problemas de Cloud suelen estar en cuatro capas: **Permiso, diferencia de entorno, credenciales o red**. Esta página apunta por síntoma al tema correspondiente, para no reintentar a ciegas en el chat.

## Contenido

- Ante un fallo de Tarea, qué tipo de causa mirar primero
- División con el diagnóstico local
- Cuándo volver a validar en local a pasos pequeños

## Qué mirar primero

Si aparece «Cloud rojo, local verde», prioriza las condiciones de ejecución.

Causas habituales:

- El entorno remoto no es como el local
- Cloud no ve lo que no has pusheado en local
- El Secret no está bien configurado
- Red o Permisos restringidos

Al diagnosticar, mira primero si se cumplen las condiciones; después, si la Tarea en sí tiene problema.

## Triaje rápido

| Síntoma | Mira primero |
|---|---|
| No conecta el repo / 403 | [Conectar GitHub](/guide/web-and-cloud/connect-github/) |
| Fallo al instalar dependencias | [Acceso a internet](/guide/web-and-cloud/internet-access/) · [Entorno Cloud](/guide/web-and-cloud/cloud-environments/) |
| Paquete privado / API 401 | [Secrets y variables](/guide/web-and-cloud/secrets-and-variables/) |
| La Tarea se queda esperando | [Delegar y hacer seguimiento](/guide/web-and-cloud/delegate-and-follow-up/) · ¿pendiente de Aprobación? |
| Hay commit en local, Cloud no lo ve | ¿Ya hay push? Cloud no lee contenido local sin push |
| No abre PR o no hace push | Protección de ramas · [Crear PR](/guide/web-and-cloud/create-pull-requests/) |
| Pruebas rojas en Cloud, verdes en local | Tabla de alineación de versión/entorno en [Entorno Cloud](/guide/web-and-cloud/cloud-environments/) |

## Orden de diagnóstico

Puedes seguir este orden:

1. ¿Repo y rama correctos?
2. ¿Permisos y autorización suficientes?
3. ¿Entorno y dependencias completos?
4. ¿Secret y red funcionan?
5. ¿Falta alguna restricción clave en la descripción de la Tarea?

Vaciar estas capas primero suele ser más efectivo que volver a correr.

## Conexión y Permisos

**Fenómeno:** OAuth correcto pero la Tarea no puede hacer clone.

**Comprueba:**

1. Si el alcance de autorización incluye la organización/repo objetivo
2. Si el repo está archived o hay restricciones de GitHub App
3. Si usas una cuenta personal contra un repo que exige SSO de la org

**Fenómeno:** push rechazado.

**Comprueba:** protección de ramas, required review, si intentaste push directo a `main`

## Malentendidos frecuentes

### 1. ¿Un error en la fase de instalación es siempre un problema de dependencias?

También puede ser red, autenticación, Secret o Permiso del registry privado.

### 2. ¿Si corre en local, el código está bien y Cloud «falla a ratos»?

A menudo significa:  
**tu entorno local tiene precondiciones que Cloud no tiene.**

### 3. ¿Una Tarea colgada es el modelo «pensando»?

También puede ser:

- Esperando Aprobación
- Esperando red
- Esperando el arranque del entorno
- Ejecutando una Tarea de alcance demasiado amplio

## Entorno y dependencias

**Fenómeno:** `command not found` (node, python, etc.).

**Comprueba:** si la imagen base incluye el runtime necesario; si en `AGENTS.md` están versión y comando de instalación.

**Fenómeno:** conflicto de lockfile o timeout de instalación.

**Comprueba:** política de salida; mirror del registry; si la dependencia necesita VPN (Cloud normalmente no está en la intranet)

## Secrets y variables

**Fenómeno:** variable de entorno vacía en el build.

**Comprueba:**

- Si el nombre del Secret coincide con la documentación (mayúsculas/minúsculas suelen importar)
- Si está configurado en el alcance correcto de repo/entorno
- Si pegaste el valor del Secret en el Prompt y quedó desensibilizado

Más: [Secrets y variables](/guide/web-and-cloud/secrets-and-variables/)

## Tarea colgada y timeout

| Causa | Tratamiento |
|---|---|
| Esperando Aprobación humana | Aprobar o rechazar en App/móvil |
| Tarea demasiado grande | Partir en varias delegaciones pequeñas |
| Arranque lento del entorno | El cold start la primera vez es normal; si sigue lento, mira la página de estado oficial |

Método de seguimiento: [Delegar y hacer seguimiento](/guide/web-and-cloud/delegate-and-follow-up/)

## Calidad de la entrega

Cloud terminó pero el resultado no sirve:

1. Contrasta si a la descripción de la Tarea le faltan criterios de aceptación
2. Haz checkout local de la misma rama y corre las pruebas
3. Añade seguimiento con [Diagnosticar antes de corregir](/cases/workflows/diagnose-before-fixing/), en lugar de rehacer toda la Tarea

## Cuándo volver primero a local

Si llevas dos rondas seguidas diagnosticando condiciones de Cloud en lugar de avanzar la Tarea, vuelve primero a local:

- Haz la reproducción mínima en local
- Escribe con claridad dependencias, comandos y forma de Verificación
- Vuelve a delegar a Cloud

Suele ahorrar más tiempo que seguir adivinando en el entorno remoto.

## Relación con el índice global de diagnóstico

Problemas locales de CLI/IDE/App: [Referencia · Diagnóstico](/guide/reference/troubleshooting/). Esta página solo cubre la cadena **específica de Cloud**.

## Fuentes de referencia
- Documentación de soporte de OpenAI Codex Cloud
---

**Estado:** outdated  
**Productos aplicables:** Cloud  
**Nota de revisión:** El marco de diagnóstico es útil, pero se apoya en supuestos actuales de conexión de repo Cloud, Secrets, Aprobación, red y comportamiento de PR; al cambiar el producto Cloud y las capacidades multiplataforma, el mapeo de síntomas a páginas temáticas debe reescribirse según la documentación oficial de soporte más reciente.  
**Última verificación:** 2026-07-26
