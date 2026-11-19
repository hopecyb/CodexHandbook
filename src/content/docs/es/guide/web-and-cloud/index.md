---
legacyVerification:
  status: "verified"
  products: "Cloud"
  checkedAt: "2026-08-26"
title: "Web y Cloud: resumen"
description: Del repositorio y el entorno reproducible a la revisión y el Pull Request en tareas remotas.
locale: es
source_locale: zh-CN
source_revision: '86fa0ac'
translation_status: stale
translated_at: 2026-09-20
sidebar:
  order: 13
reviewed_at: 2026-10-25
---

Codex Cloud ejecuta tareas de programación en un entorno aislado en la nube. Sirve para trabajos largos en segundo plano, intentos paralelos y tareas iniciadas desde GitHub, GitLab (Beta), Linear o Slack. No controla tu ordenador a distancia ni puede ver automáticamente archivos locales que todavía no hayas enviado al repositorio.

![Ilustración: un repositorio en el navegador se conecta a contenedores aislados en la nube; el resultado vuelve como una tarjeta de pull request con marca verde](/illustrations/web-and-cloud.webp)

## Etapas de una tarea Cloud

```text
Iniciar sesión en ChatGPT
  → conectar GitHub / GitLab
  → crear el entorno del repositorio
  → hacer checkout de la rama o el commit indicado
  → instalar dependencias mediante un setup script
  → el Agent modifica y verifica dentro de la política de red
  → revisar el resumen, los registros y el diff
  → pedir ajustes o crear un PR
  → revisión humana y CI antes de fusionar
```

Cloud aporta aislamiento, reproducibilidad y paralelismo. Sigue siendo necesario revisar el resultado.

## Elegir entre local y Cloud

| Elige local | Elige Cloud |
|---|---|
| Dependencia de archivos sin confirmar o servicios de tu máquina | Las entradas ya están en el repositorio remoto |
| Necesidad de interactuar con un proceso en tiempo real | La tarea puede ejecutarse de forma independiente en segundo plano |
| Cambio rápido y de alcance reducido | Compilaciones y pruebas de varios pasos o intentos paralelos |
| Herramientas disponibles solo en tu equipo | El entorno puede reconstruirse mediante scripts |

Lee primero [Local frente a Cloud](/es/guide/foundations/local-vs-cloud/) para entender los límites de ejecución.

## Orden de aprendizaje recomendado

1. [Conectar GitHub](/es/guide/web-and-cloud/connect-github/): autoriza solo los repositorios necesarios.
2. [Entornos Cloud](/es/guide/web-and-cloud/cloud-environments/): fija herramientas, versiones y setup.
3. [Secrets y variables de entorno](/es/guide/web-and-cloud/secrets-and-variables/): distingue los Secrets de instalación de las variables disponibles durante la ejecución.
4. [Acceso a internet](/es/guide/web-and-cloud/internet-access/): la etapa del Agent no tiene red por defecto; abre solo los dominios y métodos necesarios.
5. [Delegar y hacer seguimiento](/es/guide/web-and-cloud/delegate-and-follow-up/): envía tareas con objetivo, restricciones y criterios de aceptación.
6. [Crear un Pull Request](/es/guide/web-and-cloud/create-pull-requests/) y [revisar código](/es/guide/web-and-cloud/code-review/): convierte el resultado en una entrega que puede fusionarse.
7. [Solucionar problemas de Cloud](/es/guide/web-and-cloud/troubleshooting/): busca la causa en el repositorio, el setup, la red o la tarea.

Si empiezas desde la aplicación de escritorio o el IDE, consulta respectivamente [Tareas locales y Cloud](/es/guide/desktop-app/local-and-cloud-tasks/) y [Tareas Cloud desde el IDE](/es/guide/ide/cloud-task-workflow/).

## Primer ejercicio

Elige un repositorio de prueba sin credenciales de producción. Pide a Codex que corrija enlaces de documentación y ejecute el comprobador de enlaces. El éxito exige que el entorno arranque, que el diff incluya solo los archivos previstos, que se vea la salida del comando y que el resultado pueda convertirse en un PR. No uses la indicación «completado» en la pantalla como único criterio de aceptación.

## Fuentes oficiales

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Entornos Cloud](https://learn.chatgpt.com/docs/environments/cloud-environment)
