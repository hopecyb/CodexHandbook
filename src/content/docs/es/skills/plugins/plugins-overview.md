---
title: Descripción general de Plugins
description: Empaqueta Skills, MCP y conectores de aplicación para que el equipo los distribuya y gestione de forma unificada.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Un Plugin se puede ver como un paquete de instalación: agrupa un conjunto de capacidades de extensión ya configuradas para que otros las instalen directamente.

Un **Plugin (plugin / conector)** empaqueta Skills, servidores MCP, integraciones de aplicaciones, etc., en una unidad **instalable, actualizable y gobernable**, especialmente útil cuando «una persona lo configura y todo el equipo lo reutiliza».

## Diferencia clave

| Uso por separado | A través de Plugin |
|---|---|
| Copiar a mano el directorio Skill | Instalación / actualización en un clic |
| Cada uno configura su JSON de MCP | Servidor y descripción de Permisos predefinidos |
| Documentación dispersa | El publicador aporta inventario y notas de versión |

El Plugin pertenece a la **capa de distribución y composición**. La capacidad en sí sigue residiendo en Skill, MCP y conectores; ver [Mapa de capacidades de extensión](/skills/capability-map/).

## Diferencia entre Plugin, Skill y MCP

Puedes mirar esta versión breve:

- **Skill**: indica a Codex «con qué pasos hacerlo»
- **MCP**: indica a Codex «qué herramientas externas puede llamar»
- **Plugin**: empaqueta lo anterior para facilitar instalación y gobernanza

Gran parte de la confusión viene de tratar estas tres capas como la misma cosa.

## Composición típica

```text
Paquete Plugin
├── Skills (opcional)
├── Definiciones de servidor MCP (opcional)
├── Conector de aplicación / flujo OAuth (opcional)
└── Metadatos: versión, declaración de Permisos, changelog
```

## Cuándo usar Plugin

| Usar Plugin | No usar Plugin |
|---|---|
| Instalación unificada en el equipo de un paquete Figma/Linear/GitHub | Script personal único |
| Hace falta versionado y rollback | Basta un solo `SKILL.md` |
| La empresa solo permite extensiones en lista blanca | Prototipo en fase experimental |

## Cuándo preocuparte por Plugin

- Solo aprendes por tu cuenta y escribes unos cuantos Skills: puedes aparcarlo un tiempo
- Vas a distribuir al equipo un conjunto unificado de capacidades: entonces sí conviene preocuparte por Plugin

Plugin resuelve sobre todo **distribución y gobernanza**; no es imprescindible la primera vez que usas Codex.

## Combinaciones que encajan como Plugin

Plugin aporta más valor cuando varias capacidades deben entregarse juntas.

| Paquete de equipo | Puede incluir |
|---|---|
| Revisión PR | Skill de revisión, MCP GitHub solo lectura, plantilla, Hook de riesgo |
| Mantenimiento docs | Skill de documentación, glosario, Hook de links, plantilla de release notes |
| Colaboración diseño | Conector de diseño, Skill de captura/anotación, permisos, ejemplos |
| Inspección seguridad | Skill de revisión solo lectura, Hook de secretos, configuración de auditoría |

Si es un script personal, no hagas Plugin. Si el equipo instala, actualiza y revoca un conjunto de capacidades, empaquétalo.

## Antes de empaquetar

- ¿Workflow estable de equipo o experimento?
- ¿Qué partes son Skill, MCP y Hook?
- ¿La declaración de permisos se entiende en un minuto?
- ¿Hay rollback ante upgrade o instalación fallida?
- ¿Cómo se revocan autorizaciones al salir personas o cerrar proyectos?

## Instalación y gestión (concepto)

1. Elige el Plugin en el **marketplace oficial o la lista aprobada por el equipo**
2. Lee la descripción de Permisos: qué repos lee, a qué SaaS accede
3. Tras instalar, reinicia la sesión y verifica la lista de herramientas y Skills
4. Actualiza con regularidad; las versiones mayores, pruébalas primero en un repo de staging

Los botones y comandos concretos se rigen por la UI actual de la App de escritorio / CLI.

## Malentendidos frecuentes

### 1. Instalar un Plugin no implica seguridad automática

El Plugin solo facilita la distribución; el Permiso no es seguro por naturaleza. Sigue mirando:

- A qué puede acceder
- Si ejecuta acciones externas en tu nombre
- Si la fuente es de confianza

### 2. Si se puede instalar, merece la pena instalarlo

En el equipo solo encajan a largo plazo las extensiones que se pueden mantener, retirar y auditar.

## Seguridad y privacidad

- Instala solo fuentes de confianza; revisa el scope OAuth que pide el Plugin
- Distingue Permisos de «leer diseños» frente a «enviar mensajes en tu nombre»
- Al cambiar de rol o dejar la empresa, retira la autorización del conector
- Se suma a [Permisos y Aprobaciones](/guide/foundations/permissions-and-approvals/); no asumas que el Plugin trae seguridad por sí solo

## Comparación con otros ecosistemas Agent

El significado de «Plugin» no es idéntico en todos los productos. Al comparar, mira: **qué empaqueta, el modelo de Permisos y si es open source auditable** — ver [Comparación de funciones](/guide/reference/feature-comparison/).

## Errores habituales

- Hacer un Plugin por cada Skill pequeño: el coste de mantenimiento explota
- Instalar y no actualizar nunca: te pierdes correcciones de seguridad
- Activar Plugins experimentales en el repo de producción

## Fuentes de referencia
- Documentación de OpenAI Codex Plugins
---

**Estado:** desactualizado  
**Productos aplicables:** App / CLI  
**Nota de revisión:** OpenAI Help confirma que Plugin es un contenedor que empaqueta Skills, Apps y plantillas de app, pero esta página aún incluye flujos demasiado concretos de instalación, actualización y gobernanza, más allá de la base pública estable actual.  
**Última verificación:** 2026-07-26
