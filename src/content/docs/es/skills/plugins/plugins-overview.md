---
title: Introducción a los Plugins
description: Comprende los componentes de un Plugin, las superficies compatibles, la verificación de la instalación y los límites de confianza.
locale: es
source_locale: zh-cn
source_revision: b2c5dae
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

ChatGPT y Codex usan el mismo catálogo público de Plugins. Un Plugin compone capacidades relacionadas en un flujo de trabajo que se puede descubrir e instalar; no inventa un nuevo protocolo para llamar a herramientas.

## Qué puede contener un Plugin

| Componente | Función | Qué debe revisar quien lo instala |
|---|---|---|
| Skills | Pasos, referencias y scripts reutilizables | Si las instrucciones encajan y los scripts son fiables |
| Connectors | Conexiones con GitHub, Slack, Google Drive y otros servicios | Scopes OAuth, acciones de escritura y alcance de datos externos |
| Servidores MCP | Herramientas, autenticación y datos estructurados | Origen del servidor, herramientas, registros y permisos |
| Extensiones de navegador | Capacidad del navegador para un flujo concreto | Alcance del acceso al navegador y necesidad real |
| Hooks | Comandos o herramientas MCP en eventos del ciclo de vida | Revisar y confiar en la definición exacta antes de activarla |
| Plantillas de Scheduled tasks | Puntos de partida reutilizables para superficies con programación | Frecuencia, acceso, salida y revisión humana |

## Diferencia frente a Skill y MCP

| Mecanismo | Pregunta principal | Ejemplo en una revisión de PR |
|---|---|---|
| Skill | ¿Qué pasos hay que seguir? | Leer el diff, verificar evidencias y ordenar por riesgo |
| MCP / Connector | ¿Qué herramientas externas se pueden llamar? | Leer el PR y sus comentarios en GitHub |
| Hook | ¿En qué punto del ciclo de vida se comprueba? | Buscar secretos después de escribir |
| Plugin | ¿Cómo se instala y distribuye el conjunto? | Paquete de revisión de PR del equipo |

Un Plugin es una capa de distribución, no el último paso de la ejecución. Consulta el [mapa de capacidades](/es/skills/capability-map/).

## Instalar y verificar por primera vez

### ChatGPT Web / App de escritorio

1. Abre la pestaña Plugins.
2. Examina el editor, la descripción y los componentes incluidos.
3. Instálalo; si solicita conectar un servicio externo, revisa esa autorización por separado.
4. Haz una verificación de bajo riesgo en una tarea nueva de Chat, Work o Codex.

### Codex CLI

1. Introduce `/plugins` para abrir el explorador de Plugins.
2. Instálalo desde un marketplace configurado.
3. **Inicia una sesión nueva** y verifica después el Skill o la herramienta instalados.

La integración IDE no admite Plugins. No escribas una guía para encontrar en el IDE una entrada que no existe; gestiona los Plugins desde la App de escritorio de ChatGPT o Codex CLI.

## Prompt de verificación de bajo riesgo

```text
Inspecciona únicamente el <plugin-name> recién instalado; no escribas:
1. Enumera los Skills y las herramientas relacionados con él en esta tarea.
2. Marca cada herramienta como de solo lectura o con posibles efectos externos.
3. Usa datos de prueba o realiza una única consulta de solo lectura.
4. Indica qué componente se usó y qué autorizaciones requieren aún revisión humana.
```

Si el Plugin necesita una conexión externa, durante la primera verificación no envíes mensajes, cambies estados, elimines datos ni escribas archivos en bloque.

## Adopción en el equipo

1. **Inventariar:** Skills, conectores, MCP, extensiones de navegador, Hooks y plantillas.
2. **Verificar la procedencia:** marketplace, repositorio, editor y política de actualizaciones.
3. **Aplicar privilegio mínimo:** cuenta de prueba y scopes de solo lectura.
4. **Hacer un piloto aislado:** proyecto que no sea de producción o equipo pequeño.
5. **Revisar los Hooks:** inspeccionar en `/hooks` el hash y el comportamiento de los Hooks incluidos.
6. **Documentar la salida:** desactivación, desinstalación, reversión y revocación de OAuth.

## Límites que no debes ignorar

- Que la instalación termine correctamente no demuestra que los componentes sean seguros ni adecuados para los datos actuales.
- Un Plugin puede pedir que conectes servicios externos; la autorización es un paso independiente y de alto riesgo.
- Los Hooks del Plugin se ejecutan junto con Hooks coincidentes de otros orígenes; no sustituyen automáticamente a los anteriores.
- Los administradores del workspace pueden restringir qué Plugins y herramientas están disponibles; el catálogo personal no equivale a lo permitido por la organización.
- Mobile es adecuado para usar Plugins ya instalados en la cuenta, pero no debe suponerse que ofrece una interfaz completa de gestión.

## Cuándo no hace falta un Plugin

- Solo existe un `SKILL.md` sencillo, sin problema de composición ni distribución.
- Es un script personal y puntual que todavía está en experimentación rápida.
- Las políticas de permisos y actualización aún no son estables.
- Los usuarios trabajan exclusivamente en la integración IDE.

Estabiliza primero un único flujo de Skill o MCP y agrúpalo después. Suele ser más fácil de revisar.

## Lista de aceptación

- [ ] La superficie de destino admite Plugins.
- [ ] El editor y el origen son trazables.
- [ ] Se revisaron las conexiones externas y los scopes OAuth.
- [ ] Los Hooks del Plugin se revisaron y consideraron fiables.
- [ ] La tarea mínima de solo lectura termina correctamente.
- [ ] Una sesión nueva descubre el Skill o la herramienta esperados.
- [ ] El equipo dispone de instrucciones para desactivar, revertir y revocar autorizaciones.

## Fuentes oficiales

- [OpenAI: Plugins](https://learn.chatgpt.com/docs/plugins)
- [OpenAI: Hooks](https://learn.chatgpt.com/docs/hooks)

---

**Estado:** verified

**Productos aplicables:** ChatGPT Web / App de escritorio / Mobile; Codex para escritorio y CLI; la integración IDE no admite Plugins

**Última verificación:** 2026-08-26
