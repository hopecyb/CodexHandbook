---
title: Variables de entorno
description: Uso, capas y seguridad de las variables de entorno relacionadas con Codex — índice complementario de la referencia de configuración.
locale: es
source_locale: zh-CN
source_revision: 603ee7b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 80
---

Las «variables de entorno» llevan a dos extremos: o se ven como algo muy de bajo nivel, o se cree que toda la configuración cabe ahí. En claro: una variable de entorno es una forma de entregar valores al programa en tiempo de ejecución, especialmente adecuada para información sensible e interruptores.

Suelen usarse para **inyectar secretos, sobrescribir interruptores y adaptar CI**, sin escribir valores sensibles en el archivo de configuración o en Git. Esta página es un índice conceptual; los nombres concretos de variables los marca la [documentación oficial](https://developers.openai.com/codex) y `codex --help`.

## Contenido de esta página

- Qué debe ir en variables de entorno y no en el archivo de config
- Cómo se dividen nivel usuario, nivel proyecto, Cloud Secrets y CI
- Naming habitual y riesgos de filtración

## Criterio de juicio

Si un valor cumple cualquiera de estas, prioriza variable de entorno:

- No quieres meterlo en Git
- Cambia según máquina, usuario o entorno
- Solo quieres que aplique en esta ejecución

Por eso tokens, interruptores temporales e inyecciones de CI suelen ir por variables de entorno, no hardcodeados.

Conceptos de claves de configuración: [Referencia de configuración](/es/guide/reference/configuration-reference/); Cloud: [Secrets y variables](/es/guide/web-and-cloud/secrets-and-variables/).

## Qué encaja en variables de entorno

| Tipo | Intención de ejemplo | No |
|---|---|---|
| Token de autenticación | API key, GitHub PAT | Committear al repo |
| Interruptor temporal | Nivel de log de depuración | Configuración de negocio a largo plazo |
| Inyección de CI | Modo de revisión de solo lectura | Token de escritura de producción |
| Subproceso MCP | Key de servicio de terceros | Texto en claro en `AGENTS.md` |

## No trates las variables de entorno como un cajón universal

Muchos equipos acaban en «si cabe, a la variable de entorno».

Más estable es distinguir:

- **Valores sensibles, diferencias en runtime**: variables de entorno
- **Acuerdos de equipo a largo plazo**: archivo de configuración o documentación
- **Reglas de flujo de trabajo**: `AGENTS.md` o Skill

Así, al diagnosticar, también sabes mejor dónde mirar.

## Qué es realmente `.env`

La primera vez con variables de entorno, lo primero que se encuentra suele ser un archivo `.env`. Ahí también hay más malentendidos.

`.env` no es otro centro de configuración. Es solo un método habitual que muchos tools ofrecen para **cargar variables de entorno por lotes** en desarrollo local.

Así:

- La variable de entorno es «el valor en sí»
- `.env` es «un contenedor habitual local para esos valores»

Por tanto:

- Que `.env` sea cómodo no implica que sea seguro
- `.env.example` es para nombres de ejemplo, no para secretos reales
- En producción o CI, lo habitual es un gestor de Secrets

## Qué no conviene resolver solo con variables de entorno

- Normas de código, estructura de directorios → `AGENTS.md`
- Valores por defecto de modelo consensuados por el equipo → configuración de proyecto (parte no secreta)
- Allowlists complejas → [Reglas](/es/guide/customization/rules/allow-and-deny-patterns/)

## Malentendidos frecuentes

### 1. Las variables de entorno no sirven para meter toda la configuración

Sirven bien para «valores»; no para cargar todo el conjunto de reglas de equipo y explicaciones a largo plazo.

### 2. ¿Meterlo en `.env` ya es seguro?

Si `.env` se committea, se ve en una pantalla compartida o se imprime en logs, también se filtra.

### 3. ¿Tras `unset` ya no hay riesgo?

El riesgo puede seguir en:

- Historial de shell
- Herencia de subprocesos
- Logs
- Archivos o capturas guardados antes

### 4. ¿Si en local uso `.env`, en producción basta con pasar otro `.env`?

A menudo no. En CI, Cloud y plataformas gestionadas lo habitual es:

- Configurar el Secret en la consola de la plataforma
- Inyectar la variable de entorno en runtime
- No dejar el valor real como archivo del repo

## Capas y prioridad (concepto)

```text
Política obligatoria de la organización (si existe)
    ↓ sobrescribe
Variables de entorno inyectadas por Shell / CI
    ↓ se fusionan con el archivo de configuración (reglas concretas según lo oficial)
Archivo de config de nivel usuario / proyecto
```

Cuando la misma clave está en varios sitios, prevalece la **prioridad de la documentación oficial**; al diagnosticar, imprime la «configuración efectiva» o mira los logs.

## Un orden de juicio habitual

Al configurar por primera vez:

1. ¿Es sensible este valor?
2. ¿Es para uso local personal, o para CI / Cloud?
3. ¿Hay que conservarlo a largo plazo, o solo existe en esta ejecución?
4. ¿Va a variable de entorno local, Secret de CI o Secret de Cloud?

Así es menos fácil el «el valor es correcto, pero está en el sitio equivocado».

## Escenarios habituales

| Escenario | Práctica más estable |
|---|---|
| Depurar API de terceros en la máquina local | Variable de entorno local o `.env`, e ignorar en commit |
| Ejemplo de configuración compartido por el equipo | Committear `.env.example`, no valores reales |
| GitHub Actions / CI | Secret de la plataforma |
| Tarea Cloud que llama a un servicio privado | Cloud Secret |
| Servidor MCP que necesita leer una key | Variable de entorno del proceso padre o inyección de Secret |

Si no tienes claro: los secretos reales, en lo posible, no deberían quedarse a largo plazo como contenido de archivo ordinario en el repo.

## Escenarios de uso habituales

### Desarrollo local

Exporta el token personal en `~/.zshrc` o en el `.envrc` de direnv — **no committees** `.env`.

### CLI no interactivo

CI inyecta variables desde el almacén de secrets y luego corre `codex exec`. Véase [Modo no interactivo](/es/guide/cli/non-interactive-mode/).

### Servidor MCP

El proceso MCP suele heredar el entorno del padre; en la configuración referencia `$VAR` en lugar de hardcodear. Véase [Conectar MCP](/es/skills/mcp/connect-an-mcp-server/).

### Cloud

Los Secrets a nivel de repo se configuran en la consola Cloud; el nombre debe coincidir con la referencia dentro de la Tarea.

Las variables de entorno encajan en valores que cambian, son sensibles o solo hacen falta en runtime; no cargan reglas ni explicaciones a largo plazo.

## Lista de seguridad

- [ ] `.env` está en `.gitignore`
- [ ] Desensibilizar tokens antes de imprimir logs
- [ ] Rotar keys que se hayan filtrado
- [ ] Scope de privilegio mínimo (token de CI de solo lectura, etc.)

## Errores frecuentes

- Rellenar `.env.example` con keys reales y committear
- Hacer `export` de un token visible en una pantalla compartida
- Asumir que tras `unset` los subprocesos siguen seguros — hay que mirar el árbol de procesos

## Fuentes de referencia
- Documentación de configuration / environment de OpenAI Codex
---

**Estado:** verified  
**Productos aplicables:** CLI / App / IDE / Cloud  
**Base de verificación:** La documentación de configuración actual del OpenAI Help Center sigue ofreciendo expresiones modernas de `~/.codex/.env`, inyección en CI/runtime y Secrets de plataforma; esta página se centra en principios estables —qué valores encajan en variables de entorno, cuáles no, y que `.env` es solo un contenedor local— sin fijar una lista concreta de nombres de variables.  
**Última verificación:** 2026-07-26
