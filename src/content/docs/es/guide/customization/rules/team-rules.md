---
title: "Política de reglas de equipo"
description: Gobierna por capas reglas de comandos y rutas entre organización, repositorio e individuo — revisable y reversible.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Al usar Codex en equipo, la **política de reglas** responde: qué restricciones unifica toda la empresa, cuáles mantiene el repositorio y si el individuo aún puede relajarlas. Este capítulo es la perspectiva de gobernanza de [reglas de comandos](/guide/customization/rules/command-rules/) y [patrones de permitir y denegar](/guide/customization/rules/allow-and-deny-patterns/).

## Contenido

- Política gestionada de la organización vs reglas de proyecto vs preferencias personales
- Cómo pasan las reglas por revisión y publicación
- Coordinación con `AGENTS.md`, Hooks y CI

## Función de la política de reglas de equipo

La política de reglas de equipo responde: qué límites debe fijar la empresa de forma unificada, cuáles el propio proyecto y cuáles son solo hábitos personales.

Si esa estratificación no está clara, es fácil caer en dos problemas:

- Reglas que deberían ser iguales en todo el equipo viven solo en el ordenador de alguien
- Ajustes personales de comodidad temporal se toman por error como estándar del equipo

## Para quién

| Rol | Enfoque |
|---|---|
| Responsable de ingeniería | Deny de línea roja, requisitos de auditoría |
| Mantenedor del repositorio | Allowlist del proyecto, comandos de test |
| Desarrollador individual | Complementos locales dentro de lo que permite la política |

## Malentendidos habituales

### Las reglas de equipo no tienen por qué ser lo más unificadas posible

Algunos límites sí deben unificarse en toda la organización, por ejemplo denys de alto riesgo.

Pero forzar todos los repositorios a ser idénticos trae otro problema: reglas demasiado anchas o demasiado estrechas, a las que al final nadie cree de verdad.

El foco es aclarar los límites entre capa de organización, de proyecto y personal, no hacer todas las reglas iguales.

### Los complementos personales no deben debilitar la línea roja del equipo

Puedes añadir ajustes cómodos en tu máquina, siempre que no eludan la línea roja ya fijada por el equipo o la organización.

Si no, en apariencia «esta máquina es más eficiente»; en la práctica estás sembrando minas en la colaboración.

## Modelo de capas recomendado

```text
L1 Organización gestionada (Managed) → no anulable por proyecto/individuo
L2 Repositorio plantilla del equipo     → fragmentos de rules que heredan repos nuevos
L3 Rules del proyecto + AGENTS.md      → revisión por Git PR
L4 Configuración personal              → solo esta máquina; no puede debilitar L1
L5 Prompt de una sola tarea            → se puede endurecer temporalmente; relajar temporalmente está limitado por L1
```

Contrasta con [alcance de AGENTS.md](/guide/customization/agents-md/scope-and-precedence/): **las reglas inclinan hacia enforcement de ejecución; AGENTS.md inclina hacia explicación de comportamiento**; deben ser coherentes, no escribir requisitos contradictorios por separado.

## Enfoque básico

1. **Escribe primero la lista de «nunca permitido»** (deny): `git push --force`, leer `~/.ssh`, POST a internet público con contenido del repo
2. **Luego la lista de «permitido a diario»** (allow): tests, lint, git de solo lectura
3. **Emite L1 de forma gestionada** (si la organización ya usa Managed configuration)
4. **Cada servicio / subpaquete de monorepo** puede añadir L3, sin chocar con L1
5. **Revisión trimestral**: «bloqueos falsos» y «permisos falsos» que se repiten en logs de aprobación vuelven a un PR de reglas

## Flujo recomendado: cambio de reglas

```text
Propuesta (issue o RFC) → review de seguridad/plataforma → PR que cambia archivos de reglas
    → prueba tipica en repo de staging → merge → anuncio + actualización de la página del manual
```

Cambios grandes (por ejemplo abrir salida a red) deben actualizar a la vez [auditoría con Hooks](/skills/hooks/hooks-overview/) y [uso aceptable](/guide/team-enterprise/governance/acceptable-use/).

## Alineación con Hooks y CI

| Mecanismo | Función |
|---|---|
| Reglas | Permitir/denegar antes de ejecutar |
| Hooks | Validación compleja, logs, formato de cumplimiento |
| CI | Puerta de merge, scripts de la misma fuente que las reglas locales |

Evita tres lógicas distintas cada una por su lado: prioriza una **única fuente de verdad** (p. ej. `tools/codex-rules.json`) referenciada por CLI y CI.

## Errores habituales

- Solo acuerdo oral «no hagas push», sin actualizar el archivo de reglas
- Relajar el Sandbox en tu máquina y tomar capturas como «estándar del equipo»
- Subproyectos de monorepo con necesidades distintas pero una allowlist global demasiado ancha
- Cambios de reglas sin anuncio: los compañeros empiezan a fallar en masa en aprobaciones

## Cómo decidir en qué capa va una regla

Mira estas tres preguntas:

1. ¿Es una línea roja que deben respetar todos los repositorios?
2. ¿Solo vale para el proyecto actual?
3. ¿Es solo un complemento personal por comodidad?

Suele corresponder a:

- Capa de organización
- Capa de proyecto
- Capa personal

## Límites de seguridad

- Las reglas no sustituyen el [modelo de amenazas](/guide/team-enterprise/security/threat-model/) ni el flujo de respuesta a incidentes
- Con datos regulados, las reglas deben revisarse junto con clasificación de datos y políticas de retención
- Un bypass de emergencia debe tener **registro de auditoría** y retrospectiva posterior

## Lista de verificación

- [ ] Puedes dibujar el reparto L1–L3 de tu organización
- [ ] Los archivos de reglas del repositorio tienen owner claro y requisitos de review
- [ ] No hay contradicciones mutuas con `AGENTS.md`, Hooks y CI
- [ ] Hay un canal para feedback de «bloqueos falsos» (plantilla de issue o formulario interno)

Lo más importante de la política de reglas de equipo es aclarar primero «quién fija el límite de cada capa» y luego decidir cómo escribir las reglas.

---

**Estado:** verificado  
**Productos aplicables:** CLI / App / Cloud (según funciones de la organización)  
**Base de verificación:** Los materiales actuales de OpenAI sobre plugins, apps y permisos a nivel de organización siguen enfatizando el acceso por rol, la aprobación de acciones, la configuración gestionada y el control a nivel de equipo; esta página abstrae la política de reglas como un modelo de gobernanza organización/proyecto/individuo y exige que los cambios de reglas pasen por revisión y anuncio — resumen de práctica de gobernanza estable.  
**Última verificación:** 2026-07-26
