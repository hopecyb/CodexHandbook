---
title: Fundamentos de configuración
description: Ubicación de los archivos de configuración de Codex, opciones habituales e introducción a aprobación, Sandbox y modelo.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Los archivos de configuración te permiten **unificar el comportamiento de Codex** en tu máquina o en el proyecto, sin repetir en cada sesión el modelo, el nivel de aprobación o la política de Sandbox.

## Contenido de esta página

- Dónde vive la configuración y cómo se superponen niveles de proyecto y de usuario
- Qué se cambia más a menudo: modelo, aprobación, Sandbox, directorio de trabajo por defecto
- Límite con `AGENTS.md`: la configuración gestiona «interruptores de capacidad»; AGENTS gestiona «cómo se escribe código en este proyecto»

## Qué gestiona realmente la configuración

La configuración se parece más a los **hábitos de trabajo por defecto** de Codex.

Por ejemplo:

- Qué modelo usar por defecto
- Cuán estrictos son por defecto los límites de seguridad
- En qué directorio trabajar por defecto

No gestiona el requisito temporal de una tarea concreta, sino cómo suele empezar a trabajar en la mayoría de los casos.

## Capas de configuración

| Capa | Ubicación típica | Contenido |
|---|---|---|
| Usuario | Configuración bajo `~/.codex/` (nombres exactos según documentación oficial) | Modelo por defecto, hábitos personales de aprobación |
| Proyecto | Fragmentos de configuración en el repositorio o archivos de proyecto relacionados con `codex` | Política de Sandbox/herramientas compartida por el equipo |
| Gestionada | Emitida por la organización | Elementos obligatorios que el individuo no puede anular |

Los **hechos variables** (rutas, nombres de campos, claves TOML) deben seguir la [documentación de OpenAI Codex](https://developers.openai.com/codex); esta página describe conceptos y forma de decidir.

## Malentendidos habituales

### Más configuración no es más profesional

Al tocar por primera vez un archivo de configuración, mucha gente quiere configurar todo lo posible.

Para principiantes suele bastar fijar unas pocas opciones frecuentes, por ejemplo:

- Modelo por defecto
- Política de aprobación/Sandbox por defecto
- Directorio de trabajo por defecto

Estabilizar esas primero suele ser mejor que estudiar todos los campos de golpe.

### Configuración ≠ reglas del proyecto

Si un requisito es «todos los colaboradores deben cumplirlo», suele encajar mejor en `AGENTS.md` o en la documentación del proyecto, no solo en tu configuración local.

Por ejemplo:

- Qué checks ejecutar antes de commit
- Qué directorios no se pueden tocar
- Qué tipo de tareas no deben hacer push automático

Eso no debería sostenerse solo con configuración personal.

## Intenciones de configuración habituales

### Modelo y razonamiento

- Desarrollo diario: equilibra velocidad y calidad
- Refactorizaciones complejas: modelo de razonamiento más fuerte (si el plan lo permite)
- Scripts/CI: modelo fijo para facilitar la reproducción

Trasfondo conceptual: [Modelos y razonamiento](/guide/foundations/models-and-reasoning/)

### Aprobación y Sandbox

| Intención | Dirección de configuración |
|---|---|
| Principiante / repositorio no confiable | Aprobación más estricta; limita red y alcance de escritura |
| Proyecto personal de confianza | Puedes reducir interrupciones con seguridad |
| Repositorio empresarial | Sigue la política gestionada; no la relajes por tu cuenta |

Trasfondo conceptual: [Permisos y aprobación](/guide/foundations/permissions-and-approvals/), [Sandbox y red](/guide/foundations/sandbox-and-network/)

### Consistencia entre CLI y App

La misma cuenta en CLI y en la App de escritorio debería buscar la **misma línea base de seguridad**, evitando el doble rasero «CLI a máximo permiso, App estricta».

## Enfoque mínimo viable

1. Lee el capítulo oficial «Configuration» y confirma las rutas de archivo de la versión actual
2. Cambia solo una cosa: por ejemplo el modo de Sandbox por defecto; observa una semana y luego ajusta
3. Escribe en la documentación del repositorio lo que el equipo comparte; deja las preferencias personales en la máquina
4. En `AGENTS.md`, escribe «cómo se recomienda usar Codex con este proyecto», no copies la configuración entera

## Cómo decidir dónde va

Si no estás seguro de si algo va a configuración, `AGENTS.md` o al prompt de la tarea, mira estas preguntas:

1. ¿Es un hábito por defecto que usaré en la mayoría de las tareas?
2. ¿Es una preferencia que solo me importa a mí?
3. ¿Es una regla que todo el proyecto debe cumplir juntos?

En la mayoría de los casos:

- Hábito por defecto → configuración
- Preferencia personal → capa personal
- Consenso de equipo → repositorio

## Relación con el tema CLI

- Uso interactivo: [Modo interactivo CLI](/guide/cli/interactive-mode/)
- No interactivo y scripts: [Modo no interactivo](/guide/cli/non-interactive-mode/)
- Detalle de configuración: [Configuración CLI](/guide/cli/configuration/) · [Referencia de opciones](/guide/reference/configuration-reference/)

## Errores habituales

- Desactivar todas las aprobaciones por comodidad y abrir el proyecto en un directorio con datos de producción
- Escribir API keys en el archivo de configuración y hacer commit en Git
- Las claves de configuración del documento no coinciden con la versión instalada (tras actualizar el CLI sin revisar)

## Límites de seguridad

Los archivos de configuración pueden incluir **listas blancas de rutas, políticas de red, listas de servidores MCP** — antes de cambiar, imagina «¿podría un prompt malicioso aprovechar esta configuración?». En entornos empresariales debe emitirla el administrador; no eludas la política gestionada a título personal.

La configuración encaja mejor con opciones por defecto que casi siempre eliges; no hace falta meter todas las reglas en el archivo de configuración.

## Referencias

- Documentación de configuración de OpenAI Codex
- stormzhang/ai-coding-guide: `codex/18-config.md`
- KimYx0207 CX-04 configuración de permisos de instrucciones de proyecto (hechos sujetos a revisión oficial)

---

**Estado:** verificado  
**Productos aplicables:** CLI / App  
**Base de verificación:** Los materiales actuales de configuración del Help Center de OpenAI siguen usando directamente `~/.codex/config.toml` y `~/.codex/.env`, y indican que la App de escritorio/IDE puede necesitar reinicio para leer esos ajustes; esta página evita además atarse a nombres de claves variables y conserva solo el marco estable de «configuración de usuario, política gestionada e intenciones habituales de modelo/aprobación/Sandbox».  
**Última verificación:** 2026-07-26
