---
title: Tipos de eventos Hook
description: Puntos de disparo de Hook en la cadena de ejecución de Codex, para validar, registrar y bloquear en la fase adecuada.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Aquí se trata de cuándo debe dispararse una misma comprobación.

Un **evento Hook** es el momento en que el sistema llama a la lógica que configuraste en un nodo fijo. Entender los tipos de evento permite aplicar la «auditoría y validación» de [Descripción general de Hooks](/skills/hooks/hooks-overview/) en la configuración, sin ralentizar cada llamada a herramienta.

## Contenido

- Fases de eventos habituales y escenarios adecuados
- División de responsabilidades con [reglas de comandos](/guide/customization/rules/command-rules/)
- Rendimiento y estrategia ante fallos al configurar

## Un principio de decisión

No empieces preguntando «¿se puede implementar este Hook?».  
Pregúntate primero: ¿quieres detenerlo antes de que ocurra, o solo registrarlo después?

Muchos Hooks mal colocados fallan porque el momento de disparo está mal elegido.

:::note
**Los nombres de evento y los campos se rigen por la [documentación oficial de Hooks](https://developers.openai.com/codex).** La tabla siguiente es un agrupamiento conceptual; tras actualizar la CLI, comprueba `--help` y las notas de la versión.
:::

## Agrupación de eventos (concepto)

| Fase | Eventos típicos (nombres conceptuales) | Para qué sirven |
|---|---|---|
| Sesión | `session.start` / `session.end` | Comprobar entorno, resumir cambios, escribir cola de auditoría |
| Antes de la herramienta | `tool.call.before` / `pre_tool_use` | Bloquear comandos peligrosos, escanear patrones de secretos |
| Después de la herramienta | `tool.call.after` / `post_tool_use` | Logs estructurados, métricas, archivo desensibilizado |
| Prompt | `user_prompt.submit` | Escaneo de políticas de inyección, límite de longitud |
| Artefacto | `artifact.create` | Cabeceras de licencia, lista blanca de tipos de archivo |
| Integración | `pr.before_create` (si está soportado) | Número de issue, formato de changelog |

No cuelgues la misma lógica en varios eventos para que se ejecute varias veces; elige el punto **más temprano que aún pueda bloquear**.

## Cómo entender estas fases

- **Sesión**: al empezar o terminar esta Tarea
- **Antes de la herramienta**: el comando o la herramienta aún no se ha ejecutado de verdad
- **Después de la herramienta**: la acción ya ocurrió; puedes registrar, resumir o volver a comprobar
- **Prompt**: justo al enviar el contenido del usuario
- **Artefacto**: justo al generar un archivo o un resultado

Empieza por este nivel; no hace falta memorizar los nombres de evento de golpe.

## Relación con el motor de reglas

```text
Prompt del usuario → (opcional) Hook de prompt
    → el modelo propone una llamada a herramienta
    → motor de reglas allow/deny
    → (opcional) Hook pre_tool → ejecución → Hook post_tool
```

- **Reglas**: declarativas, rápidas, adecuadas a patrones de comando conocidos
- **Hook**: scripts imperativos, adecuados a políticas complejas y sistemas externos

## Errores frecuentes

### 1. Si se puede comprobar, da igual colgarlo antes o después

Importa mucho.

Si quieres «impedir que ocurra el efecto secundario», colócalo lo antes posible.  
Si la acción ya terminó y solo descubres el problema en `post_tool`, suele ser tarde.

### 2. Cuantos más eventos y más detalle, más profesional la configuración

Al configurar conviene buscar «pocos y precisos»: primero cuelga la lógica en el punto más adecuado.

### 3. Los tipos de evento Hook son solo un detalle técnico

Influyen directamente en:

- Si el riesgo se puede detener a tiempo
- Si el log es útil
- Si la interacción global se vuelve lenta

## Estrategia ante fallos

| Estrategia | Cuándo usarla |
|---|---|
| `block` | Violaciones de seguridad, requisitos duros de cumplimiento |
| `warn` | Estilo, comprobaciones orientativas |
| `log` | Solo observación, sin bloquear |

Ante timeout o caída del Hook, el comportamiento por defecto debe ser **seguro**: en producción, inclinarse a block o fail closed, y registrar el error para diagnóstico.

## Si no sabes dónde colgarlo

Si dudas del evento, usa esta regla simplificada:

- Quieres impedir una acción peligrosa: prioriza el evento previo
- Quieres registrar lo ocurrido: prioriza el evento posterior
- Quieres una comprobación de arranque o un resumen de cierre: mira los eventos de sesión

Eso basta para la mayoría de configuraciones.

## Enfoque de configuración mínima

1. Elige un evento (recomendado: empezar con log de solo lectura en `post_tool`)
2. El script recibe por stdin la carga JSON (nombre de herramienta, resumen de argumentos, directorio de trabajo)
3. Código de salida `0` = ok; distinto de `0` = block/warn según política
4. Prueba unitaria: ejecuta el script con un fixture JSON fijo

Decide primero si quieres bloquear o registrar; después elige en qué evento colgar el Hook.

Ejemplos completos: [Ejemplos de configuración de Hook](/skills/hooks/hooks-examples/).

## Errores habituales

- Bloquear en `post_tool` lo que debía ir en `pre_tool` (el efecto secundario ya ocurrió)
- Llamar a un LLM o a red lenta dentro del Hook y hundir la interacción
- Que la carga del evento contenga secretos y se escriban en logs en claro
- Hooks sin versionar: entornos de compañeros inconsistentes

## Límites de seguridad

- El Permiso del script Hook debe ser ≤ al del Agent monitorizado
- Ver [casos de equipo recomendados](/skills/hooks/hooks-overview/#casos-de-equipo-recomendados) y [modelo de amenazas](/guide/team-enterprise/security/threat-model/)

## Lista de verificación

- [ ] Puedes nombrar el evento más usado del equipo y por qué
- [ ] Ante fallo hay un mensaje de error legible
- [ ] El script tiene tests unitarios o fixtures
- [ ] La configuración entra en revisión de código

## Fuentes de referencia
- Referencia de OpenAI Codex Hooks
---

**Estado:** desactualizado  
**Productos aplicables:** CLI / App (según versión)  
**Nota de revisión:** El núcleo de esta página son la agrupación de eventos Hook, la carga útil y la estrategia ante fallos; son detalles de implementación muy volátiles y el material público oficial a 2026-07-26 no basta para marcarlos como estables.  
**Última verificación:** 2026-07-26
