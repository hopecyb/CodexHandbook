---
title: Modelo de amenazas
description: 'Principales superficies de riesgo de Codex en entornos de equipo: datos, Herramientas, extensiones y cadena de suministro.'
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

El «modelo de amenazas», en claro, es anticipar el riesgo:

> **Si Codex entra de verdad en nuestro código, comandos y herramientas externas, ¿qué es lo más probable que salga mal?**

El **modelo de amenazas** descompone eso con claridad. Codex no es «otra ventana de chat»: puede **leer código, ejecutar comandos y llamar a herramientas externas**. Este capítulo despliega primero las superficies principales; los controles concretos están en la [matriz de Permisos](/guide/reference/permission-matrix/) y el [Sandbox](/guide/foundations/sandbox-and-network/).

## Contenido

- Activos y límites de confianza
- Amenazas típicas y direcciones de mitigación
- División de roles con reglas, Hooks y CI

## Por qué no es «solo cosa de seguridad»

Si eres desarrollo, plataforma, documentación o responsable de proyecto, también te afecta. En el equipo suelen fallar estos escenarios concretos:

- Entregar a la automatización un token con demasiados Privilegios
- Dejar que el Agent haga acciones de alto riesgo sobre entrada no confiable
- No saber qué datos se pueden ver y cuáles no se pueden sacar
- Al introducir extensiones, mirar solo la función y no los Permisos ni el origen

El valor del modelo de amenazas es que el equipo piense los límites antes del incidente.

## Activos y límites

| Activo | Ejemplo |
|---|---|
| Código fuente e IP | Repos privados, diseños no publicados |
| Credenciales | API key, `.env`, IAM en la nube |
| Datos de usuario | PII, contenido de tickets de clientes |
| Infraestructura | CI, pipelines de despliegue a producción |

**Límite de confianza:** el modelo y las extensiones están por defecto en el lado **no totalmente confiable**; la revisión humana y la política hacen enforcement en el límite.

## Dos preguntas centrales

Antes de cualquier integración a nivel de equipo, pregunta:

1. ¿Qué es lo que más tememos perder?
2. ¿Qué es lo que más tememos que Codex haga mal?

La primera identifica «activos importantes»; la segunda, «acciones peligrosas». Muchas estrategias de control giran en torno a estas dos.

## Un escenario

Imagina:

- Codex puede leer tu repo privado
- Puede acceder a un sistema de tickets con Permisos
- Puede ejecutar comandos shell
- Puede devolver resultados como comentarios

Entonces importa más:

- Si verá contenido que no debería
- Si hará acciones que no debería
- Si sacará información que debía quedarse dentro

A ese nivel, el modelo de amenazas se parece a una lista de riesgos previa al go-live.

## Resumen de amenazas

| Amenaza | Descripción | Dirección de mitigación |
|---|---|---|
| Prompt injection | Issue/web maliciosa induce operaciones fuera de alcance | Sanitizar entrada, CI de solo lectura, [tema de inyección](/guide/team-enterprise/security/prompt-injection/) |
| Exceso de Permisos | Token o Sandbox demasiado amplios | Privilegio mínimo, protección de ramas |
| Filtración de datos | Comando/MCP envía contenido del repo fuera | Política de red, DLP, Hook de auditoría |
| Extensión maliciosa | Plugin/MCP sin revisar | [Riesgos de extensión](/guide/team-enterprise/security/plugin-and-mcp-risk/) |
| Cadena de suministro | Dependencias y scripts envenenados | Combinar con SCA y code review existentes |
| Error operativo | Agent borra la BD o hace push incorrecto | Deny de comandos, CI sin push |

## Cuándo priorizar el modelo de amenazas

Si una capacidad cumple las dos condiciones, debe entrar primero en el modelo:

- Puede tocar activos importantes
- Puede ejecutar acciones reales

Por ejemplo: leer repos privados, acceder a API de producción, llamar a MCP con escritura, hacer push automático de código.

## En la primera adopción, no pretendas completarlo todo

Muchos equipos, al oír gobernanza de seguridad, quieren completar de golpe toda la documentación, procesos y políticas… y no aterrizan nada.

Para un equipo que integra Codex por primera vez, suele bastar con lo más directo:

1. Lista las 3 clases de activos más importantes
2. Lista las 3 clases de acciones que menos quieres que el Agent haga mal
3. Asigna a cada una de esas 6 un control lo más directo posible

Por ejemplo:

- Temes filtrar datos de la BD de producción → limita primero credenciales de producción y rutas de exportación
- Temes un push erróneo a la rama principal → añade protección de ramas y Aprobación
- Temes que una web o un issue te desvíe → endurece la entrada externa y el flujo de review de solo lectura

No es completo, pero suele ser más útil que un documento grande que nadie sigue.

## Control por capas recomendado

```text
L1 Identidad y tenant (SSO, grupos)
L2 Configuración gestionada por la organización y política de modelos
L3 Rules del repo + AGENTS.md
L4 Sandbox / Aprobación / Hooks
L5 Review humana y protección de ramas
```

## Errores frecuentes

- Solo formar, sin controles técnicos
- Asumir que «el modelo es lo bastante listo» y no se equivoca
- Secretos de producción en rutas escribibles por el Agent
- Reducir todos los riesgos a «con review humana basta»

## Versión mínima

Antes deja firmes estas tres:

- Las acciones de alto riesgo requieren Aprobación
- Los datos muy sensibles no se entregan por defecto
- Los flujos automatizados son de solo lectura por defecto

Con eso ya se pueden bajar muchos riesgos de equipo. La gobernanza más fina puede ir después.

## Lista de aceptación

- [ ] Puedes enumerar los Top 3 activos de preocupación de la organización
- [ ] Cada amenaza tiene control correspondiente o registro de riesgo aceptado
- [ ] Alineado con los contactos de respuesta a incidentes

## Capítulos relacionados

- [Contexto sensible](/guide/context/sensitive-context/)
- [Patrones de Aprobación humana](/cases/workflows/human-approval-patterns/)

## Fuentes de referencia
- Libro blanco de seguridad empresarial de OpenAI (oficial)
---

**Estado:** verified  
**Productos aplicables:** Equipo / empresa  
**Base de verificación:** La documentación actual de OpenAI sobre plugins, apps e integraciones sigue distinguiendo acceso a datos externos, Permisos de acción, requisitos de Aprobación y límites de Permiso de sistemas de origen; esta página concentra la superficie de riesgo de equipo en activos, límites de confianza, amenazas típicas y control por capas — un resumen organizado de esos principios actuales, sin depender de un interruptor concreto del producto.  
**Última verificación:** 2026-07-26
