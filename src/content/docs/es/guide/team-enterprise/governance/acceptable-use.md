---
title: Política de uso aceptable
description: Acuerdos a nivel de equipo sobre qué puede y qué no puede hacer Codex, alineados con tecnología y formación.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

La **política de uso aceptable (AUP)** convierte «¿se puede usar Codex para esto?» en un consenso organizacional, en lugar de dejarlo al criterio individual. Complementa el [modelo de amenazas](/guide/team-enterprise/security/threat-model/): el modelo habla de riesgos; la AUP habla de **límites de comportamiento**.

## Contenido

- Temas que debe cubrir la AUP
- Encaje con RR. HH./cumplimiento y controles técnicos
- Borrador de cláusulas de ejemplo (requiere localización legal)

## Qué gestiona la AUP

La AUP responde sobre todo a: aunque sea técnicamente posible, ¿está permitido hacerlo en nuestro equipo?

No sustituye la política técnica; escribe los límites organizacionales como reglas que todos puedan entender y aplicar.

:::caution
Lo siguiente es un **esquema educativo**, no un dictamen legal. Antes de publicarlo formalmente debe revisarlo legal y cumplimiento.
:::

## Malentendidos frecuentes

### La AUP también importa a quien la usa en el día a día

Mucha gente ve estas políticas como un requisito formal, ajenas al usuario de primera línea.

Pero en el trabajo diario suelen aparecer preguntas como:

- Qué datos no se pueden pasar a Codex
- En qué escenarios hace falta revisión humana
- Qué extensiones y conexiones externas no se pueden enlazar a la ligera

Así que no es solo un documento legal: también es el límite real de uso.

### Tener política escrita no significa que el equipo la cumpla

Si la política dice «los cambios de producción requieren Aprobación», pero la herramienta permite saltárselo por defecto, la política pierde efecto enseguida.

Por eso lo importante de la AUP es alinearla con formación, Permisos, configuración y auditoría, no solo escribirla completa.

## Temas recomendados

| Tema | Puntos clave |
|---|---|
| Usos permitidos | Desarrollo, documentación, investigación, automatización interna |
| Usos prohibidos | Acceso no autorizado, contenido de acoso, eludir controles de seguridad |
| Clasificación de datos | Qué repos/datos se pueden usar; reglas de PII de clientes |
| Responsabilidad de la salida | Merge tras revisión humana; no usar la salida como consejo legal/médico externo |
| Extensiones | Solo Plugin/MCP de la lista aprobada |
| Cuentas | Prohibido compartir asientos personales; recuperar al salir |
| Incidentes | Canal para reportar comportamiento sospechoso |

## Estructura básica

1. **Propósito y alcance**
2. **Escenarios de uso permitidos** (enlace al [mapa de capacidades](/guide/start-here/codex-capability-map/))
3. **Escenarios de uso prohibidos**
4. **Datos y confidencialidad**
5. **Requisitos de supervisión humana** (merge, cambios de producción)
6. **Consecuencias del incumplimiento** (remisión al manual de empleados existente)
7. **Contactos y fecha de actualización**

## Alineación con controles técnicos

| Cláusula AUP | Aplicación técnica |
|---|---|
| No exfiltrar código fuente | Política de red, Aprobación de MCP |
| Cambios de producción requieren Aprobación | Protección de ramas, deny de `git push` |
| Solo modelos aprobados | Configuración gestionada por la organización |

## Errores frecuentes

- AUP escrita sin formación
- Desalineada con la realidad técnica (la política prohíbe lo que la herramienta permite)
- Sin actualizar durante años, desfasada respecto a funciones nuevas (Computer Use, etc.)

## Cómo juzgar si una AUP es efectiva

Pregunta primero:

1. ¿Responde a límites de uso reales del equipo?
2. ¿Puede aterrizar en formación, configuración o flujos de Aprobación?
3. Ante una infracción, ¿el equipo sabe cómo detectarla y tratarla?

Si las tres se acercan a «sí», la política tiene más probabilidad de ser realmente efectiva.

## Lista de aceptación

- [ ] El onboarding incluye confirmación de la AUP
- [ ] Sin contradicción con las [reglas de equipo](/guide/customization/rules/team-rules/)
- [ ] Revisión anual o al publicar funciones importantes

El valor de la AUP es escribir con claridad los límites de uso de Codex en el equipo y alinearlos con los controles reales.

---

**Estado:** verified  
**Productos aplicables:** Organización / equipo  
**Base de verificación:** La documentación empresarial actual de OpenAI sigue enfatizando que plugins, apps, acciones externas y acceso a sistemas de origen deben gestionarse por rol y límites de Permiso; esta página define la AUP como límite de comportamiento organizacional y mantiene la premisa de «esquema educativo, requiere localización legal», sin presentarla como plantilla oficial de política.  
**Última verificación:** 2026-07-26
