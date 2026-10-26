---
legacyVerification:
  status: "verified"
  products: "Cloud"
  checkedAt: "2026-08-26"
title: Secrets y variables de entorno
description: Elige correctamente entre los Secrets de la configuración de Cloud y las variables de entorno normales disponibles durante todo el chat.
sidebar:
  order: 30
locale: es
source_locale: zh-CN
source_revision: '78937be'
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-10-25
---

Las variables de entorno y los Secrets de Cloud tienen ciclos de vida distintos. Esta diferencia determina para qué pueden usarse con seguridad; no se limita a si la interfaz oculta el valor.

| Tipo | Fase en la que está visible | Contenido adecuado |
|---|---|---|
| Variable de entorno | Configuración y toda la fase del Agent | Configuración no sensible, como el modo de ejecución o la URL base de una API pública |
| Secret | Solo el script de configuración | Token de paquetes privados o credenciales necesarias para instalar dependencias |

Los Secrets se almacenan cifrados, se descifran al ejecutar la tarea y se eliminan antes de que comience la fase del Agent. No son un canal general de credenciales para que el Agent llame a APIs de producción durante la ejecución.

## Ejemplo correcto: instalar un paquete privado

Crea un Secret `NPM_TOKEN` en la configuración del entorno. El script de configuración lo usa para generar una configuración de autenticación temporal e instalar las dependencias:

```bash
set -euo pipefail
printf '//registry.npmjs.org/:_authToken=%s\n' "$NPM_TOKEN" > ~/.npmrc
pnpm install --frozen-lockfile
rm -f ~/.npmrc
```

La fase del Agent ya no necesita el token: solo utiliza las dependencias instaladas. El script no debe mostrar el Secret con `echo` en los logs.

## Ejemplo incorrecto

```text
Configura la API_KEY de producción como una variable de entorno normal
y pide al Agent que consulte una API externa para validar pedidos reales.
```

El valor sensible quedaría disponible durante toda la fase del Agent. Si se permite el acceso a internet, aparece un riesgo de filtración o de operaciones accidentales. Usa fixtures, mocks, credenciales de prueba temporales con permisos mínimos o limita a la configuración cualquier preparación que requiera autenticación.

## Comprobar la configuración

1. Enumera por separado los valores que necesitan la configuración y la fase del Agent.
2. Usa un Secret para los valores sensibles necesarios solo durante la instalación.
3. Usa variables de entorno para la configuración no sensible que necesite el Agent.
4. No escribas valores en prompts, issues, PR, el repositorio ni `AGENTS.md`.
5. Ejecuta un escáner de Secrets y revisa los logs de configuración.
6. Rota periódicamente las credenciales y elimina las que ya no se utilicen.

La configuración se ejecuta en una sesión Bash independiente. Un `export` normal no pasa automáticamente a la fase del Agent. Configura directamente como variable de entorno cualquier valor no sensible que deba estar disponible durante todo el chat.

## Relación con CI

Los Secrets de GitHub Actions y los de Codex Cloud pertenecen a sistemas de almacenamiento distintos y no se sincronizan automáticamente. Puedes unificar los **nombres** para documentarlos mejor, pero no reutilices un token de producción con más permisos de los necesarios para la tarea.

## Qué hacer tras una filtración

Revoca o rota las credenciales de inmediato. Después, elimina el valor expuesto de logs, chats, issues y el historial de Git. Borrar solo el archivo actual no invalida un Secret que ya se ha propagado.

## Base oficial

- [Cloud environments: variables and secrets](https://learn.chatgpt.com/docs/environments/cloud-environment)
