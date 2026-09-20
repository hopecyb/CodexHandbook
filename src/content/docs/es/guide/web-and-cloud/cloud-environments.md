---
title: Entornos Cloud
description: Configura el entorno de ejecución, las dependencias, la preparación, la caché y el punto de partida del repositorio en Codex Cloud.
legacyVerification:
  status: "verified"
  products: "Cloud"
  checkedAt: "2026-08-26"
locale: es
source_locale: zh-CN
source_revision: "1745f70"
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 20
---

Un entorno Cloud define qué instala y ejecuta Codex para un repositorio. No hereda la configuración de tu portátil. Si algo funciona en local pero falla en Cloud, compara primero las versiones de ejecución, las dependencias, las variables y el acceso a la red.

## Orden de ejecución de cada conversación

1. Se crea un contenedor y se hace checkout de la rama o el commit SHA elegido.
2. Se ejecuta el script de setup; si se reutiliza una caché, también puede ejecutarse un script de maintenance.
3. Se aplica la política de acceso a Internet.
4. El Agent ejecuta comandos, modifica y verifica en su ciclo de trabajo, y lee los archivos `AGENTS.md` aplicables.
5. Devuelve una respuesta y un diff para continuar la conversación o crear un PR.

La imagen `universal` predeterminada incluye lenguajes, paquetes y herramientas comunes. Puedes fijar versiones de Python, Node.js y otros componentes en la configuración del entorno e instalar dependencias adicionales mediante el script de setup.

## Configuración mínima reproducible

Para un proyecto pnpm, fija primero en el entorno la misma versión de Node.js que usa CI y configura:

```bash
corepack enable
pnpm install --frozen-lockfile
```

En el `AGENTS.md` de la raíz del repositorio, indica:

```md
## Validación

- Ejecutar `pnpm test` después de modificar código.
- Ejecutar `pnpm typecheck` antes de informar de que la tarea terminó.
- No actualizar el lockfile salvo que se soliciten cambios de dependencias.
```

Setup y Agent se ejecutan en sesiones Bash distintas. Un `export` temporal durante setup no se conserva automáticamente. Configura los valores no sensibles en el entorno o, como recomienda la documentación oficial, guárdalos de forma persistente en la configuración de la shell.

## Caché y maintenance

Cloud puede conservar en caché el estado del contenedor hasta 12 horas para acelerar las conversaciones nuevas y los seguimientos. Al restaurar la caché, hace checkout de la rama seleccionada para la conversación y puede ejecutar un script de maintenance para actualizar dependencias.

Cambiar setup, maintenance, variables de entorno o Secrets invalida automáticamente la caché. Usa **Reset cache** manualmente si un cambio del repositorio vuelve incompatible la caché. En Business y Enterprise, los usuarios con acceso al entorno pueden compartir su caché; reiniciarla puede afectar a otras personas del espacio de trabajo.

## Variables de entorno y Secrets

- Las variables de entorno están disponibles tanto en setup como en la fase Agent.
- Los Secrets se descifran solo durante setup y se eliminan antes de que empiece la fase Agent.
- La fase setup tiene acceso a Internet.
- La fase Agent no tiene acceso a Internet de forma predeterminada, aunque puede activarse para cada entorno.

Estas diferencias se confunden a menudo. Se explican con más detalle en [Secrets y variables de entorno](/es/guide/web-and-cloud/secrets-and-variables/).

## Lista de comprobación para alinear el entorno

| Comprobación | Objetivo |
|---|---|
| Rama o commit inicial | Coincide con la descripción de la tarea |
| Versiones del entorno de ejecución | Coinciden con CI o las restricciones de producción |
| Lockfile | Instalación con versiones fijadas |
| Setup | Repetible, no interactivo y se detiene si falla |
| Comandos de verificación | Indicados en `AGENTS.md` |
| Red | Solo se permiten los dominios y métodos necesarios para el Agent |

## Fuentes oficiales

- [Entornos Cloud](https://learn.chatgpt.com/docs/environments/cloud-environment)
- [Imagen codex-universal](https://github.com/openai/codex-universal)
