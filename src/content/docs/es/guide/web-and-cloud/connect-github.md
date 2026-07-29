---
title: Conectar GitHub
description: Enlazar Codex Cloud con repositorios de GitHub — Permisos, ramas y entorno.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

Tras conectar GitHub, Codex puede clonar el repo en un **entorno remoto**, abrir ramas, hacer push y abrir PRs: es el prerrequisito del flujo Cloud.

## Contenido

- Por qué hace falta conectar y qué Permisos autorizar
- Lista de comprobación antes y después de conectar
- División con las Tareas locales de escritorio

## Diagrama de relación

```text
Tu repositorio de GitHub
    ↕ (OAuth / GitHub App, según el producto)
Entorno Cloud de Codex
    ↕
Tareas Cloud que lanzas en Web/App
```

La [App de escritorio](/guide/desktop-app/) local sigue pudiendo editar el clone de tu máquina; Cloud encaja en **entorno estandarizado, seguir corriendo lejos del ordenador, Aprobar desde el móvil**, etc. Véase [Local frente a Cloud](/guide/foundations/local-vs-cloud/).

## Malentendidos frecuentes

### 1. Ya tengo el repo en local; ¿por qué conectar otra vez GitHub?

Las Tareas Cloud miran el repo remoto, no la copia de tu máquina.

### 2. ¿Conectar GitHub implica que ve todos mis cambios locales?

Los cambios locales sin push, Cloud normalmente no los ve.  
Es un punto de confusión habitual.

### 3. ¿Qué conviene mirar al conectar?

Confirma primero:

- Si el alcance de repos no es demasiado amplio
- Cómo está la protección de ramas
- Si los secretos están en el sitio seguro de Cloud

Tras conectar GitHub, Cloud ve el repo remoto, no el estado local aún sin push de tu ordenador.

## Comprobación previa

- [ ] Tienes Permiso de push en el repo objetivo (o estrategia de fork si solo necesitas PR)
- [ ] Conoces las reglas de protección de ramas: si prohíben push directo a main
- [ ] Los secretos no están en el repo; Cloud usa [configuración de Secrets](/guide/web-and-cloud/secrets-and-variables/)
- [ ] La organización permite integraciones de terceros de GitHub

## Pasos recomendados (concepto)

1. En la configuración de Codex Web/Cloud, abre **conexión de GitHub**
2. Elige organización y alcance de repos (**lista mínima posible**)
3. Confirma la explicación de Permisos OAuth: suele hacer falta leer código y abrir PRs; escritura según la Tarea
4. Lanza una Tarea Cloud pequeña en un repo de prueba
5. Tras el éxito, configura rama por defecto y variables de entorno (si aplica)

Botones e interfaz según el producto actual.

## Permisos y seguridad

| Práctica | Motivo |
|---|---|
| Usuario de máquina o cuenta bot dedicada (equipo) | Auditoría y recuperación al salir |
| No autorizar todos los repos privados | Reducir la superficie de error |
| Activar protección de ramas + review obligatoria | La entrega de Cloud sigue pasando por review humana |
| Revisar periódicamente la lista de repos conectados | Desconectar a tiempo proyectos abandonados |

## Tareas habituales tras conectar

- Implementar un issue en remoto → [Crear Pull Request](/guide/web-and-cloud/create-pull-requests/)
- Revisar y seguir un PR → integración [GitHub](/guide/integrations/github/)
- Combinar con [Automations](/skills/automations/scheduled-tasks/)

## Errores frecuentes

- Conectar GitHub personal a repos de la organización de producción con política personal
- Asumir que Cloud ve commits locales sin push
- En el primer intento, correr Tareas sin límite en un monorepo grande

## Fuentes de referencia
- Documentación de integración OpenAI Codex Cloud / GitHub
---

**Estado:** outdated  
**Productos aplicables:** Cloud / Web  
**Nota de revisión:** Esta página depende del método actual de conexión a GitHub, del modelo de autorización, del alcance de repos y de las entradas de botones en Cloud — información de integración muy volátil; se restaurará `verified` cuando haya documentación oficial de conexión actualizada.  
**Última verificación:** 2026-07-26
