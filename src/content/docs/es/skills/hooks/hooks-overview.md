---
title: Descripción general de Hooks
description: Inserta validación, logs y auditoría en nodos clave del Agent, para complementar seguridad y cumplimiento del equipo.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

En resumen, un Hook inserta automáticamente una capa de comprobación o registro en un nodo clave.

Los **Hooks** permiten ejecutar lógica personalizada en nodos fijos de la cadena de ejecución de Codex —por ejemplo escanear secretos antes de un commit, registrar llamadas MCP o bloquear comandos peligrosos—. Sirven para complementar las políticas y la observabilidad de [Aprobaciones y Sandbox](/guide/cli/approvals-and-sandbox/).

## Contenido

- Diferencia entre Hooks, Skill y MCP
- Casos típicos de equipo
- Principios de seguridad al diseñar un Hook

## Por qué los equipos usan Hooks

Aunque no pienses escribir Hooks todavía, conviene saber para qué suelen usarse en el equipo:

- Por qué algunas acciones se detienen un momento extra en un punto concreto
- Por qué el equipo dice «esta comprobación no es un Skill, es un Hook»
- Por qué ciertas reglas no van en el Prompt, sino en nodos del sistema

Muchas veces, detrás de «¿por qué hay una comprobación más aquí?» hay un Hook.

Comparación y elección: [Cómo elegir el método de extensión](/skills/choosing-an-extension-method/)

## Qué hacen los Hooks

| Fase (concepto) | Qué puede hacer un Hook |
|---|---|
| Antes de la llamada a herramienta | Rechazar comandos con `rm -rf` o que filtren `.env` |
| Después de la llamada a herramienta | Escribir logs de auditoría a un SIEM |
| Fin de sesión | Resumir la lista de archivos cambiados |
| Antes de crear un PR | Comprobar el formato del número de issue |

## Cómo distinguirlo de un Skill

- **Skill**: indica a Codex «cuando llegue este tipo de Tarea, sigue este flujo»
- **Hook**: indica al sistema «al llegar a este nodo, comprueba primero de forma automática»

Resuelven problemas distintos:

- El Skill se acerca más a la descripción del flujo de trabajo
- El Hook se acerca más a una compuerta o punto de observación en el proceso

Los nombres de evento y el formato de configuración se rigen por la [documentación oficial de Hooks](https://developers.openai.com/codex).

## Diferencia con Skill / MCP

| | Hooks | Skill | MCP |
|---|---|---|---|
| Disparo | Evento del sistema | Usuario o modelo | Petición de herramienta |
| Objetivo | Política, auditoría | Descripción de workflow | Sistema externo |
| Quién lo mantiene | Infraestructura de plataforma/equipo | Equipo de producto o ingeniería | Desarrollador de integración |

## Errores frecuentes

### 1. El Hook puede sustituir Aprobación y Sandbox

El Hook es una capa de comprobación adicional; no debe ser el único límite de seguridad.

### 2. Cuantos más Hooks, más seguro

Demasiados Hooks lentos, pesados o difíciles de entender solo atascan el flujo y complican el diagnóstico.

### 3. El Hook no sirve para lógica compleja

Un Hook encaja mejor con cosas:

- Rápidas
- Deterministas
- Fáciles de probar

No metas aquí otra capa de razonamiento complejo.

## Casos de equipo recomendados

1. **Detección de filtración de secretos**: bloquear si el diff muestra un patrón de clave AWS
2. **Comprobación de cabecera de licencia**: avisar si un archivo nuevo carece de la declaración de copyright de la empresa
3. **Log de cumplimiento**: quién, cuándo y en qué repo hizo escrituras (desensibilizado)
4. **Alineación con CI**: que las reglas del Hook local y de GitHub Actions compartan origen en la medida de lo posible

## Cuándo encaja un Hook

Si una comprobación cumple estas dos condiciones, encaja bien en un Hook:

- Siempre ocurre en un nodo fijo
- No debería depender de que alguien se acuerde cada vez

Por ejemplo: escaneo de información sensible, validación de nombres, registro de auditoría.

## Principios de diseño

- **Rápido**: un timeout del Hook ralentiza cada llamada a herramienta
- **Determinista**: evita llamar otra vez a un LLM dentro del Hook
- **Comprobable**: prueba unitaria del script Hook con entrada fija
- **Desactivable**: en urgencias el equipo puede omitirlo (con auditoría)

Para la perspectiva de seguridad, ver la hoja de ruta `11-team-enterprise`; un usuario individual suele bastarle empezar con un Hook de log de solo lectura.

El Hook encaja en nodos clave del sistema para comprobaciones automáticas. No es una descripción de workflow ni sustituye la Aprobación.

## Errores habituales

- El propio script Hook tiene Permiso de escritura en red y se convierte en nueva superficie de ataque
- Duplica y contradice reglas de `AGENTS.md`
- Configuración de Hook sin versionar: entornos de compañeros inconsistentes

## Lista de verificación

- [ ] Puedes describir el escenario de Hook más necesario del equipo
- [ ] Ante fallo del Hook hay un mensaje de error claro para el desarrollador
- [ ] La configuración entra en revisión de código

## Fuentes de referencia

- Documentación de OpenAI Codex Hooks
- stormzhang `22-hooks.md`
- KimYx0207 CX-08
- Auditoría y cumplimiento de freestylefly/CodexGuide

---

**Estado:** desactualizado  
**Productos aplicables:** CLI / App (según versión)  
**Nota de revisión:** Esta página depende de la descripción actual de capacidades Hook, nodos típicos y gobernanza de equipo; la documentación pública oficial cubre poco estos detalles y hay que reescribirla según el cliente vigente.  
**Última verificación:** 2026-07-26
