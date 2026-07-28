---
title: Referencia de errores y mensajes
description: Índice de aprendizaje de mensajes de error habituales, códigos de salida y causas de fallo — apunta a páginas de diagnóstico; no sustituye el soporte oficial.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Ante un error, mucha gente se queda mirando esa línea en inglés e intenta adivinar. Clasificar el problema primero suele ser más efectivo.

Al ver un error, juzga primero si parece un problema de **autenticación, Permiso, entorno, red o lógica de la Tarea**. Esta página resume el sentido de mensajes frecuentes y el siguiente paso; no es un diccionario completo de errores. El comportamiento más reciente lo marcan la documentación oficial y la salida del cliente.

## Cómo leer un error al verlo

Ante un error, haz primero estos tres pasos:

1. Mira a qué clase pertenece la palabra clave: autenticación, Permiso, entorno, red, Contexto
2. Mira en qué fase ocurre: arranque, instalación, ejecución, push, salida
3. Salta a la página temática correspondiente a diagnosticar

Suele ser más rápido que adivinar la causa.

Índice global: [Diagnóstico](/guide/reference/troubleshooting/)

## Autenticación y cuenta

| Mensaje o fenómeno | Posible causa | Siguiente paso |
|---|---|---|
| Authentication failed / 401 | Token caducado, sin iniciar sesión | [Iniciar sesión y autenticación](/guide/getting-started/sign-in-and-authentication/) |
| Organization policy | La organización desactiva la función o el modelo | Contacta al administrador; mira el plan en [Cuenta y acceso](/guide/getting-started/account-plans-and-access/) |
| Rate limit / 429 | Demasiadas peticiones o cuota | Reintenta más tarde; mira el uso del plan |

## Malentendidos frecuentes

### 1. Un error largo no implica que el problema sea más complejo

Muchos errores largos solo apilan contexto; lo útil suele ser ese pequeño tramo de palabras clave.

### 2. Un código de salida distinto de cero no implica que el modelo «no sepa hacerlo»

Puede ser solo:

- Sin Permiso
- Sin red
- Formato de salida que no cumple el requisito
- La Tarea en sí disparó una condición de fallo

### 3. 401 / 403 / 429 no son lo mismo

Difieren mucho:

- `401` suele ser «no autenticado bien»
- `403` suele ser «sé quién eres, pero no te dejo hacerlo»
- `429` suele ser «vas demasiado rápido; vuelve más tarde»

### 4. La última línea no siempre es la más importante

A veces la última línea solo es el «resumen final del fallo»; la información útil está unas líneas más arriba, por ejemplo:

- Qué paso lo disparó
- Qué archivo, comando o Herramienta falló
- Si hay una pista de causa más original

## CLI y comandos

| Mensaje o fenómeno | Posible causa | Siguiente paso |
|---|---|---|
| command not found: codex | No instalado o PATH | [Instalar CLI](/guide/getting-started/install-cli/) |
| Config parse error | Sintaxis TOML/YAML | [Configuración del CLI](/guide/cli/configuration/) |
| Permission denied (write) | Sandbox o Aprobación rechazada | [Aprobaciones y Sandbox](/guide/cli/approvals-and-sandbox/) |
| Código de salida distinto de cero (exec) | Fallo de Tarea o criterio de finalización no cumplido | Mira logs de stderr; endurece el Prompt |

## Clasifica primero

Si no sabes por dónde empezar, divide el error en 5 clases:

| Clase | Mira primero |
|---|---|
| Autenticación | Cuenta, token, estado de inicio de sesión |
| Permiso | Aprobación, Sandbox, Permisos del repo |
| Entorno | Instalación, PATH, configuración, dependencias |
| Red | Salida, proxy, alcanzabilidad de servicios remotos |
| Lógica de la Tarea | Prompt, archivos de entrada, requisitos de salida |

Si llegas a clasificarlo así, la dirección de diagnóstico se desvía menos.

## Cómo usarlo

Úsalo como tabla de desvío de errores, no como diccionario completo:

- Ves la palabra clave
- Encuentras la clase correspondiente
- Vas a la página de diagnóstico más concreta

Si aún no lo entiendes, reformula el error como una pregunta más directa:

- ¿No inicié sesión bien?
- ¿Sin Permiso?
- ¿Este comando ni siquiera está instalado?
- ¿La red no llega?
- ¿El requisito que di a Codex no estaba claro?

Si aún no sabes a dónde mirar, usa esta página para clasificar el problema en una categoría amplia.

## Permisos y Sandbox

| Mensaje o fenómeno | Posible causa | Siguiente paso |
|---|---|---|
| User rejected tool call | Tú o la política rechazasteis la operación | Confirma si debía Aprobarse; o cambia la Tarea |
| Sandbox violation | Ruta de escritura o comando fuera de alcance | [Sandbox y red](/guide/foundations/sandbox-and-network/) |
| Network access denied | Salida a red prohibida | Cloud: [Acceso a internet](/guide/web-and-cloud/internet-access/) |

## Cloud y GitHub

| Mensaje o fenómeno | Posible causa | Siguiente paso |
|---|---|---|
| Repository access denied | Alcance OAuth insuficiente | [Conectar GitHub](/guide/web-and-cloud/connect-github/) |
| Clone failed | Nombre del repo, Permiso, red | [Diagnóstico de Cloud](/guide/web-and-cloud/troubleshooting/) |
| Secret not found | Nombre incorrecto o alcance | [Secrets y variables](/guide/web-and-cloud/secrets-and-variables/) |
| Push rejected | Protección de ramas | [Crear PR](/guide/web-and-cloud/create-pull-requests/) |

## MCP y extensiones

| Mensaje o fenómeno | Posible causa | Siguiente paso |
|---|---|---|
| MCP server failed to start | Ruta del comando, dependencias que faltan | [Conectar MCP](/skills/mcp/connect-an-mcp-server/) |
| Tool timeout | API externa lenta o caída | Reintentar; mirar logs de MCP |
| Unknown tool | Configuración y versión del servidor inconsistentes | Reiniciar la sesión; actualizar la configuración |

## Contexto y modelo

| Mensaje o fenómeno | Posible causa | Siguiente paso |
|---|---|---|
| Context length exceeded | Conversación o archivos @ demasiado grandes | [Compactación](/guide/context/compaction/) · reducir el alcance |
| Model not available | Región o plan no lo soporta | [Modelos y razonamiento](/guide/foundations/models-and-reasoning/) |

## Cómo usar esta página

1. **Copia la frase clave** a la búsqueda del cliente o de este manual
2. Salta por la tabla a la página temática y ejecuta la lista de comprobación
3. Si sigue sin resolverse: conserva el log completo y mira [Recursos oficiales](/guide/reference/official-resources/)

## Al reportar un problema, esto ayuda más

- Tipo y versión del cliente (App / CLI / IDE / Cloud)
- Sistema operativo
- Texto completo del error desensibilizado
- Si es no interactivo, si es CI

## Orden de depuración

1. Captura o copia el error completo; no solo la última frase
2. Clasifica primero; no adivines detalles técnicos de golpe
3. Recuerda qué acabas de cambiar
4. Cambia solo una variable y reintenta una vez
5. Si sigue fallando, pregunta o consulta lo oficial con la información completa

Así evitas mezclar varios cambios, y a otros les resulta más fácil ayudarte a localizar.

## Fuentes de referencia
- Documentación de soporte de OpenAI Codex
---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Esta página se posiciona como «índice de desvío de errores», no como diccionario completo; el método de clasificación son cinco clases —autenticación, Permiso, entorno, red, lógica de la Tarea— contrastadas con los capítulos actuales de CLI, Cloud, Permisos y configuración, sin depender de una tabla fija de códigos de error.  
**Última verificación:** 2026-07-26
