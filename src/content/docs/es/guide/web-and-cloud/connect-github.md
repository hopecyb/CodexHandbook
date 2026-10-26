---
title: Conectar GitHub
description: Configura el acceso de Codex Cloud a GitHub con el alcance mínimo de repositorios.
legacyVerification:
  status: "verified"
  products: "Cloud / GitHub"
  checkedAt: "2026-08-26"
locale: es
source_locale: zh-CN
source_revision: 'b126a7e'
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 10
reviewed_at: 2026-10-25
---

Codex Cloud necesita conectarse primero a GitHub o GitLab (Beta) antes de crear un entorno para un repositorio. El alcance de la autorización de GitHub determina qué repositorios puede ver. Los clones locales y los cambios sin enviar quedan fuera de ese alcance.

## Pasos para conectar

1. Abre Codex Cloud e inicia sesión con tu cuenta de ChatGPT.
2. Conecta GitHub cuando se te solicite.
3. En la pantalla de autorización de GitHub, elige la organización y **solo los repositorios necesarios**.
4. Vuelve a Codex, selecciona el repositorio y crea un entorno Cloud.
5. Comprueba la clonación, la rama y el diff mediante una tarea de solo lectura o con un cambio pequeño.
6. Si necesitas revisar PR, activa Code review para el repositorio en Codex Settings.

Autoriza únicamente los repositorios necesarios para esta tarea. En repositorios de equipo, confirma además que la organización permite instalar la integración, que tu cuenta tiene los permisos adecuados y que se mantiene la protección de ramas.

## Comprobaciones antes y después de conectar

- [ ] El repositorio de destino no es un fork homónimo elegido por error.
- [ ] Has confirmado la rama predeterminada y el punto de partida de la tarea.
- [ ] Has enviado los cambios locales necesarios o has dejado claro que no forman parte de la tarea.
- [ ] La rama principal impide escrituras directas sin revisión.
- [ ] El entorno no contiene credenciales de producción con permisos ilimitados.
- [ ] La primera tarea modifica solo archivos de bajo riesgo.

## Dos formas de usar GitHub

### Pedir a Cloud que implemente una tarea

En Codex Cloud, selecciona el entorno del repositorio y la rama inicial, y describe el objetivo. Cuando termine la tarea, examina el diff antes de crear un PR.

### Pedir a Codex que revise un PR

Tras activar Code review en el repositorio, escribe en un comentario del PR:

```text
@codex review
```

Codex publicará una revisión estándar de GitHub. La revisión automática debe activarse por separado en Codex Settings. Los equipos pueden añadir reglas propias del repositorio en `AGENTS.md`, dentro de `## Code Review Rules`.

## Cómo diagnosticar problemas de permisos

- **El repositorio no aparece en la lista**: revisa el alcance de repositorios autorizado en GitHub.
- **Un repositorio de la organización devuelve 403**: comprueba la política de la organización, el SSO y el permiso para instalar la integración.
- **No puedes activar la revisión automática**: confirma que tienes los permisos de push o admin necesarios en GitHub.
- **Cloud no ve un commit local**: solo hace checkout del repositorio remoto; envía el commit a una rama concreta.

No autorices todos los repositorios privados para resolver un único 403. Identifica antes el repositorio de destino y el permiso que falta.

## Fuentes oficiales

- [Inicio rápido de Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Revisión de Pull Requests en GitHub](https://learn.chatgpt.com/docs/third-party/github)
