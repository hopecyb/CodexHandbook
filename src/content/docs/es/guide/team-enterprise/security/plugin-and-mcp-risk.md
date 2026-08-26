---
title: Riesgos de Plugin y MCP
description: Qué pueden acceder las extensiones y cómo las aprueba y monitoriza el equipo — una mirada unificada a Skills, Plugin y MCP.
locale: es
source_locale: zh-CN
source_revision: 7e3cb49
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 20
---

Los **Plugin** y los **servidores MCP** conectan Codex a sistemas externos: tickets, bases de datos, API internas. Cuanta más capacidad, mayor es la superficie de filtración y abuso de privilegios del [modelo de amenazas](/es/guide/team-enterprise/security/threat-model/). Léelo junto con [Resumen de MCP](/es/skills/mcp/mcp-overview/) y [Resumen de Plugins](/es/skills/plugins/plugins-overview/).

La primera vez que veas estos términos, no hace falta memorizar definiciones. Quédate con una idea: cuando Codex se conecta a sistemas externos, la capacidad crece y el riesgo también.

Da igual que se llame Plugin o MCP; la pregunta central es parecida:

- Qué puede leer
- Qué puede cambiar
- Quién lo aprueba
- Cómo se rastrea un incidente

## Contenido

- Clasificación de riesgos de extensiones
- Lista de Aprobación y fijación de versiones
- Aislamiento en depuración e incidentes

## Clasificación de riesgos

| Tipo | Ejemplo | Control |
|---|---|---|
| Lectura de datos | MCP lee la base de clientes | Cuenta de solo lectura, permisos a nivel de fila |
| Escritura de datos | Cerrar tickets o cambiar configuración automáticamente | Aprobación humana, confirmación de doble escritura |
| Red | Conexiones externas arbitrarias | Allowlist de salida |
| Credenciales | Token OAuth en disco | Custodia de secretos, tokens de corta duración |
| Cadena de suministro | Actualización envenenada de un server de terceros | Versión fija, bloqueo por hash |

## Flujo de Aprobación del equipo (recomendado)

```text
Solicitud (uso, clasificación de datos, Permisos) → review de seguridad/arquitectura
    → Entrada en el repositorio o catálogo interno de «lista aprobada»
    → Número de versión fijo + responsable
    → Revisión trimestral o al subir major
```

Un MCP experimental personal **no debe** compartir el mismo token que el repositorio de producción.

## Prácticas mínimas

1. **Denegar por defecto** la instalación de MCP remotos fuera de la lista
2. Un **MCP local** aún puede leer todo el disco — usa un usuario de SO dedicado o un contenedor
3. **Registros**: nombre de la herramienta y resumen de parámetros (sin datos sensibles); véase [auditoría con Hook](/es/skills/hooks/hooks-examples/)
4. **División Skill / MCP**: el Skill describe el flujo; el MCP ejecuta la conexión externa — la política más estricta gana al unir Permisos

## Errores frecuentes

- «Mercado oficial» = «ya revisado en seguridad»
- El mismo OAuth app de MCP para desarrollo y producción
- Abrir `DEBUG=*` en depuración y volcar tokens en logs de CI

## Malentendidos frecuentes

### 1. Aún no distingo bien Plugin y MCP; ¿importa?

En la primera fase, poco.

Lo común es:  
ambos ponen a Codex en contacto con sistemas externos, así que hay que pensar en Permisos y riesgos.

### 2. ¿Por qué se insiste tanto en «solo lectura primero»?

Porque la solo lectura suele implicar:

- Más fácil de pilotar
- Más fácil de demostrar valor
- Menor coste si algo falla

### 3. ¿Se puede confiar en estas extensiones nada más instalarlas?

Aunque la función parezca cómoda, sigue preguntando:

- A qué datos puede acceder
- Si escribe de vuelta en el sistema
- Cómo se gestionan las credenciales

Con extensiones externas, mira primero Permisos y límites; después, si la función es potente.

## Lista de aceptación

- [ ] Hay lista de Aprobación escrita o flujo equivalente
- [ ] Cada MCP de producción tiene owner y clasificación de datos
- [ ] Alineado con la política de [seguridad de Skill](/es/skills/security/)

## Fuentes de referencia
- [Depurar MCP](/es/skills/mcp/debugging-mcp/)
---

**Estado:** verified  
**Productos aplicables:** CLI / App / Cloud  
**Base de verificación:** La documentación actual de plugins en OpenAI Help Center sigue enfatizando que la capacidad de app/plugin está limitada por acceso por rol, control de acciones, requisitos de confirmación, límites de dominio/origen y Permisos del sistema de origen; esta página mapea esos principios a una mirada unificada de riesgo Plugin/MCP y defiende solo lectura primero, versión fija, owner claro y lista de Aprobación.  
**Última verificación:** 2026-07-26
