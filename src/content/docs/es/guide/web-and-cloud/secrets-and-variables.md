---
title: Secrets y variables de entorno
description: Elige correctamente entre los Secrets de la configuracion de Cloud y las variables de entorno normales disponibles durante todo el chat.
sidebar:
  order: 30
locale: es
source_locale: zh-CN
source_revision: 08f8d64
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Las variables de entorno y los Secrets de Cloud tienen ciclos de vida distintos. Esta diferencia determina para que pueden usarse con seguridad; no se limita a si la interfaz oculta el valor.

| Tipo | Fase en la que esta visible | Contenido adecuado |
|---|---|---|
| Variable de entorno | Configuracion y toda la fase del Agent | Configuracion no sensible, como el modo de ejecucion o la URL base de una API publica |
| Secret | Solo el script de configuracion | Token de paquetes privados o credenciales necesarias para instalar dependencias |

Los Secrets se almacenan cifrados, se descifran al ejecutar la tarea y se eliminan antes de que comience la fase del Agent. No son un canal general de credenciales para que el Agent llame a APIs de produccion durante la ejecucion.

## Ejemplo correcto: instalar un paquete privado

Crea un Secret `NPM_TOKEN` en la configuracion del entorno. El script de configuracion lo usa para generar una configuracion de autenticacion temporal e instalar las dependencias:

```bash
set -euo pipefail
printf '//registry.npmjs.org/:_authToken=%s\n' "$NPM_TOKEN" > ~/.npmrc
pnpm install --frozen-lockfile
rm -f ~/.npmrc
```

La fase del Agent ya no necesita el token: solo utiliza las dependencias instaladas. El script no debe mostrar el Secret con `echo` en los logs.

## Ejemplo incorrecto

```text
Configura la API_KEY de produccion como una variable de entorno normal
y pide al Agent que consulte una API externa para validar pedidos reales.
```

El valor sensible quedaria disponible durante toda la fase del Agent. Si se permite el acceso a internet, aparece un riesgo de filtracion o de operaciones accidentales. Usa fixtures, mocks, credenciales de prueba temporales con permisos minimos o limita a la configuracion cualquier preparacion que requiera autenticacion.

## Comprobar la configuracion

1. Enumera por separado los valores que necesitan la configuracion y la fase del Agent.
2. Usa un Secret para los valores sensibles necesarios solo durante la instalacion.
3. Usa variables de entorno para la configuracion no sensible que necesite el Agent.
4. No escribas valores en prompts, issues, PR, el repositorio ni `AGENTS.md`.
5. Ejecuta un escaner de Secrets y revisa los logs de configuracion.
6. Rota las credenciales y elimina las que ya no se utilicen.

La configuracion se ejecuta en una sesion Bash independiente. Un `export` normal no pasa automaticamente a la fase del Agent. Configura directamente como variable de entorno cualquier valor no sensible que deba estar disponible durante todo el chat.

## Relacion con CI

Los Secrets de GitHub Actions y los de Codex Cloud pertenecen a sistemas de almacenamiento distintos y no se sincronizan automaticamente. Puedes unificar los **nombres** para documentarlos mejor, pero no reutilices un token de produccion con mas permisos de los necesarios para la tarea.

## Que hacer tras una filtracion

Revoca o rota las credenciales de inmediato. Despues, elimina el valor expuesto de logs, chats, issues y el historial de Git. Borrar solo el archivo actual no invalida un Secret que ya se ha propagado.

## Base oficial

- [Cloud environments: variables and secrets](https://learn.chatgpt.com/docs/environments/cloud-environment)

---

**Estado:** verified

**Productos aplicables:** Cloud

**Ultima verificacion:** 2026-08-26
