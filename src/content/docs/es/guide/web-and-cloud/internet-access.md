---
title: Acceso a internet
description: Política de salida del Entorno Cloud, instalación de dependencias y riesgo de filtración de datos — abrir lo necesario y mantener el límite.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Las Tareas Cloud suelen necesitar **salida a red**: bajar paquetes npm/PyPI, llamar APIs, clonar submódulos. A la vez, el acceso a internet es una superficie de alto riesgo de **filtración de datos**, porque el Agent también puede llevar contenido del repo o de Secrets a servicios externos.

## Contenido

- Si el Entorno Cloud puede acceder a internet por defecto
- Cuándo abrir y cómo minimizar la exposición
- Combinación con Sandbox local y política de Secrets

## Límite básico

«Necesita red» no significa «debe tener red sin límites».

Mucha gente lo ve como una disyuntiva:

- O no hay red en absoluto
- O, por comodidad, se abre todo

Lo más habitual es dar solo la capacidad de red que necesita la Tarea, no de más.

## Dos capas de «red»

| Capa | Significado |
|---|---|
| Salida del Entorno Cloud | Si la máquina remota puede acceder a internet público o APIs internas |
| Herramientas de red del Agent | web search, curl, etc. en la sesión (la política varía por cliente) |

Esta página se centra en el **Entorno Cloud**; conceptos generales en [Sandbox y red](/guide/foundations/sandbox-and-network/).

## Que local pueda no implica que Cloud pueda

En local puedes tener red porque:

- Ya iniciaste sesión en algún servicio
- Tienes `.npmrc`, clave SSH o proxy local
- Estás en la VPN de la empresa

Cloud no hereda esas condiciones por defecto. Así que «en local puedo `npm install`» no implica «en Cloud también».

## Escenarios típicos que necesitan salida

- Instalar dependencias: `npm install`, `pip install`, `go mod download`
- Tirar de un registry privado (hace falta [Secrets](/guide/web-and-cloud/secrets-and-variables/))
- Llamar APIs de terceros (pagos, mapas, gateway LLM, etc.)
- Clonar submódulos o descargar recursos de build

## Principio de juicio

Si una acción de red no es imprescindible para completar esta Tarea, no la abras primero.

Por ejemplo:

- Acceder al origen de paquetes para instalar dependencias suele ser necesario
- Acceder a sitios irrelevantes o descargar recursos extra «de paso» suele no serlo

## Estrategia recomendada

### Por defecto cerrado; abrir según necesidad

1. En el [Entorno Cloud](/guide/web-and-cloud/cloud-environments/), confirma la política de red actual
2. Lista los **dominios imprescindibles** (gestor de paquetes, API de la empresa); evita «abrir toda la red»
3. En `AGENTS.md` indica: qué URLs se permiten y prohíbe escribir secretos en el Prompt
4. Valida con una Tarea de prueba: puede instalar dependencias, pero no sitios irrelevantes (si el producto soporta política fina)

### División con Secrets

| Contenido | Dónde |
|---|---|
| API key, token | Cloud Secrets; no en el repo |
| Base URL de API permitida | Documentación o nombre de variable de entorno (no el valor) |
| Proxy / URL de mirror | Configuración estándar del equipo |

## Malentendidos frecuentes

### 1. Poder salir a red es «solo más cómodo», no un tema de seguridad

En cuanto hay red, se convierte a la vez en:

- Problema de descarga de dependencias
- Problema de uso de credenciales
- Problema de salida de datos

### 2. «Si no pego el Secret en el Prompt, estoy totalmente a salvo»

Si el entorno puede leer el Secret y además puede enviar resultados a un servicio externo, el riesgo sigue existiendo.

### 3. web search y salida de Cloud son lo mismo

Una es capacidad de red a nivel de entorno remoto; la otra, a nivel de Herramienta de sesión. No las mezcles al diagnosticar.

### Protección frente a filtración de datos

- No pongas la cadena de conexión a BD de producción en la descripción de la Tarea
- Revisa si el Agent intenta enviar `.env` o contenido de archivos de secretos al exterior
- En la primera Tarea Cloud de un repo no confiable, **prohíbe la salida o prueba en Sandbox de solo lectura**

## Alineación con el desarrollo local

Que local pueda `curl` no implica que Cloud pueda — causas habituales de «Cloud rojo»:

| Fenómeno | Posible causa |
|---|---|
| Fallo al instalar dependencias | Salida prohibida o registry que requiere autenticación |
| Submódulo que no baja | Clave SSH no inyectada en Secrets |
| Timeout de API interna | Cloud no está en la VPN de la empresa |

Dirección de solución: HTTPS + token, mirror alcanzable, o documentar que Cloud no soporta recursos de intranet.

## Errores frecuentes

- Abrir toda la salida «por comodidad» y correr Tareas sin límite en un repo de producción con Secrets
- Asumir que Cloud comparte el mismo `.npmrc` que el portátil (sin push o sin Secret)
- Confundir «necesita red» con «necesita la Herramienta web search»
- Darse cuenta solo al fallar la instalación de que Cloud no tiene el estado de sesión local

## Lista de aceptación

- [ ] Listar dominios/servicios de salida imprescindibles para Tareas Cloud de ese repo
- [ ] Secrets configurados y no committeados a Git
- [ ] En una rama de prueba, una instalación + prueba completa correcta
- [ ] El equipo sabe qué datos no deben aparecer en Prompts con red

## Fuentes de referencia
- Documentación de red y seguridad de OpenAI Codex Cloud
---

**Estado:** outdated  
**Productos aplicables:** Cloud  
**Nota de revisión:** Esta página trata la capacidad de salida por defecto del Entorno Cloud, la política de dominios y el control fino de red, que dependen mucho del producto y de la configuración de seguridad de la organización; sin documentación oficial vigente de política de red lo bastante sólida, no conviene `verified`.  
**Última verificación:** 2026-07-26
