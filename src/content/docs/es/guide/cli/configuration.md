---
title: Configuración de la CLI
description: Modelo, Sandbox, Aprobación y MCP — unificar el comportamiento de Codex en la terminal.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

La configuración de la CLI decide el **modelo por defecto, el directorio de trabajo, la severidad de Aprobación, los servidores MCP**, etc. Coincide conceptualmente con los [fundamentos de configuración](/guide/customization/configuration/config-basics/); esta página se centra en lo que más suelen cambiar los usuarios de terminal.

## Contenido de esta página

Quien ve por primera vez la configuración de la CLI suele imaginarla como «un panel de ajustes avanzados». Eso genera dos malentendidos habituales:

- Creer que no configurar no importa, y acabar repitiendo a mano los mismos ajustes en cada arranque
- Creer que cuantas más opciones, más profesional, y meter en un solo sitio preferencias personales, reglas de equipo y experimentos temporales, hasta que luego cuesta depurar

Aquí se trata sobre todo de distinguir: **qué ajustes conviene fijar a largo plazo y cuáles solo deberían cambiarse de forma temporal.**

## Qué controla la configuración de la CLI

Puedes entenderla como «los hábitos de trabajo por defecto de Codex en la terminal».

- Configuración del modelo: quién hace el trabajo por defecto
- Sandbox y Aprobación: hasta dónde puede llegar por defecto y en qué paso necesita tu visto bueno
- Directorio de trabajo: en qué proyecto trabaja por defecto
- MCP y extensiones: qué capacidades externas puede tomar prestadas por defecto

Sin configurar nada, Codex sigue funcionando; solo que repetirás las mismas elecciones con más frecuencia.

## Dónde vive la configuración

| Capa | Uso |
|---|---|
| Nivel de usuario | Defaults personales, entre proyectos |
| Nivel de proyecto | Estrategia compartida del equipo (revisar antes de commit) |
| Variables de entorno | Inyectar claves e interruptores en CI |

**Rutas y nombres de archivo** cambian con la versión de la CLI; manda la [documentación oficial](https://developers.openai.com/codex). Lo habitual es `config.toml` o un archivo equivalente bajo el directorio de usuario.

## Malentendidos frecuentes

### No toda la configuración debe ir al proyecto

Muchos principiantes mezclan «el modelo por defecto que me gusta», «rutas de mi máquina» y «la estrategia de Aprobación que el equipo debe cumplir».

Más claro:

- Preferencias personales a largo plazo → nivel de usuario
- Lo que debe ser igual en este repo → nivel de proyecto
- Solo para CI, scripts o una ejecución concreta → variables de entorno

### Configurar no equivale a abrir Permisos de inmediato

Escribir una política en la configuración no significa que luego todas las acciones pasen sin condiciones. El comportamiento real también lo afectan la entrada del producto, el entorno de ejecución, las políticas gestionadas y el contenido de la Tarea.

Así que la configuración es más una tendencia por defecto, no un privilegio permanente.

## Explicación de opciones habituales

### Modelo por defecto e intensidad de razonamiento

Afectan a velocidad, coste y tasa de éxito en Tareas complejas. En escenarios con scripts conviene **fijar el modelo** para comparar logs.

### Sandbox y red

| Intención del ajuste | Notas |
|---|---|
| Estricto | Repositorios no confiables |
| Estándar | Desarrollo diario |
| Relajado | Solo entorno personal de confianza, y conforme a la política de la empresa |

Conceptos: [Sandbox y red](/guide/foundations/sandbox-and-network/)

### Estrategia de Aprobación

La CLI puede preguntar antes de ejecutar shell, escribir en disco o conectar a la red. El equipo debería indicar en `AGENTS.md` qué comandos pueden pasar automáticamente de forma previsible — solo es efectivo si coincide con el comportamiento real del producto.

### Lista de servidores MCP

Comparte configuración con [Conectar un servidor MCP](/skills/mcp/connect-an-mcp-server/); tras cambiar, reinicia la sesión.

## Un orden de configuración suficiente

Al empezar no hace falta estudiar todos los campos de golpe. Este orden suele ser más fácil:

1. Fija primero el modelo que más usas
2. Confirma si el directorio de trabajo por defecto es el proyecto actual
3. Decide si Aprobación y Sandbox van a ser conservadores o relajados
4. Al final añade MCP, automatización u extensiones más avanzadas

Ese orden se debe a que las dos primeras son más de uso diario y las dos últimas más de control de riesgo.

## Alinear proyecto y CLI

Evita «en la App corre y en CI falla»:

1. En el README indica la versión mínima recomendada de la CLI
2. En la configuración de proyecto solo pon ítems de **consenso del equipo**
3. Las claves nunca van al repositorio

## Resolución de problemas

| Fenómeno | Comprueba |
|---|---|
| La configuración no aplica | Si cambiaste la capa equivocada; si hace falta reiniciar |
| MCP no carga | Sintaxis JSON/TOML, rutas |
| Aprobación demasiado frecuente | Modo Sandbox y allowlist |

Más: [Resolución de problemas de la CLI](/guide/cli/troubleshooting/)

Trata la configuración de la CLI como «hábitos de trabajo por defecto» y fija solo lo que **casi siempre vuelves a elegir**. Las capacidades avanzadas pueden llegar después.

## Fuentes de referencia
- OpenAI Codex CLI configuration
---

**Estado:** verified  
**Productos aplicables:** CLI  
**Base de verificación:** El material de configuración de OpenAI Help Center sigue usando `~/.codex/config.toml` y `~/.codex/.env` como ejemplos verificables; esta página evita además atarse a nombres de campo concretos y solo resume intenciones habituales de configuración de la CLI, reparto por capas y límites de riesgo, por lo que puede marcarse como `verified` a nivel conceptual.  
**Última verificación:** 2026-07-26
