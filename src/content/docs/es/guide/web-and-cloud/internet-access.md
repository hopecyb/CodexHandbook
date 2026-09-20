---
title: Acceso a Internet
description: Distingue el acceso durante la instalación del acceso del Agent y limita los riesgos mediante dominios y métodos HTTP.
legacyVerification:
  status: "verified"
  products: "Cloud"
  checkedAt: "2026-08-26"
locale: es
source_locale: zh-CN
source_revision: 5bbb905
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 70
---

Cloud tiene dos fases distintas de acceso a la red:

| Fase | Comportamiento predeterminado | Uso principal |
|---|---|---|
| Script de setup | Puede conectarse | Instalar dependencias y herramientas |
| Fase Agent | Desactivado de forma predeterminada | Acceder a recursos externos mientras el Agent ejecuta la tarea |

Por tanto, que `pnpm install` funcione durante setup no significa que el Agent pueda ejecutar después `curl` contra cualquier sitio.

## Por qué está desactivado de forma predeterminada

El acceso del Agent a Internet aumenta el riesgo de inyección de prompts, exfiltración de código o datos, dependencias maliciosas y entrada en el repositorio de contenido con licencias incompatibles. Una incidencia, página web o README de una dependencia que no sea fiable puede incluir instrucciones para inducir al Agent a enviar datos fuera.

El principio es permitir solo los destinos y acciones necesarios para la tarea y revisar los registros de trabajo.

## Opciones de configuración

El acceso del Agent a Internet se configura por entorno:

- **Off**: bloquea por completo el acceso del Agent a Internet.
- **On**: permite la conexión y puede limitarla por dominios y métodos HTTP.

La lista de dominios puede empezar vacía, usar la opción predefinida Common dependencies o seleccionar All (unrestricted). En un repositorio de producción, no uses el acceso sin restricciones como atajo para resolver problemas.

Si la tarea solo necesita leer documentación o descargar contenido, limita los métodos HTTP a `GET`, `HEAD` y `OPTIONS`. De este modo se bloquean `POST`, `PUT`, `PATCH` y `DELETE`, que podrían enviar o modificar datos.

## Ejemplo de acceso mínimo

Una tarea necesita consultar la documentación de una API pública:

1. Mantén Off y confirma que el fallo se debe realmente a la red.
2. Activa el acceso del Agent.
3. Añade a la allowlist únicamente el dominio oficial de esa documentación.
4. Permite solo `GET`, `HEAD` y `OPTIONS`.
5. Vuelve a ejecutar la tarea y revisa todas las solicitudes salientes en los registros.
6. Al terminar, valora si debes volver a Off.

## Relación esencial con los Secrets

Los Secrets de Cloud se eliminan antes de la fase Agent, lo que reduce el riesgo de que este envíe directamente un Secret usado durante setup. Sin embargo, aún podría enviar variables de entorno ordinarias, contenido del repositorio y datos generados por la tarea. No disfraces valores sensibles como variables normales para eludir el ciclo de vida de los Secrets.

## Lista de aceptación

- [ ] Se ha explicado por qué la fase Agent necesita acceso a Internet.
- [ ] La allowlist contiene solo los dominios necesarios.
- [ ] Los métodos HTTP se han limitado al conjunto mínimo.
- [ ] Las fuentes de entrada son fiables o se ha considerado el riesgo de inyección de prompts.
- [ ] Los registros no contienen comandos que suban datos del repositorio, del entorno o credenciales.
- [ ] Se han comprobado la procedencia, la versión y la licencia de las nuevas dependencias.

## Fuentes oficiales

- [Acceso del Agent a Internet](https://learn.chatgpt.com/docs/cloud/internet-access)
- [Entornos Cloud](https://learn.chatgpt.com/docs/environments/cloud-environment)
