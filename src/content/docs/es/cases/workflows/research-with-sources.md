---
title: Investigación con fuentes
description: Usa Codex para buscar, comparar y verificar hechos — con fuentes y conclusiones trazables.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Investigación con fuentes** exige que cada conclusión clave vuelva a una fuente concreta —documentación oficial, papers o archivos del repo—, no a un juicio sin base. Sirve para selección técnica, comparación de competidores, revisiones bibliográficas e interpretación de políticas.

## Enfoque de esta página

- Cuándo usar [búsqueda web](/guide/tools/web-search/) frente a solo leer el repositorio
- Cómo exigir formato de citas y marcar incertidumbre
- Cómo encajar con [validar fuentes](/guide/quality/validate-sources/)

## Práctica mínima viable

```text
Investiga la idoneidad de «Rust frente a Go en el contexto de este repositorio»:
1. Lista primero las dimensiones de evaluación (rendimiento, ecosistema, familiaridad del equipo)
2. Cada conclusión lleva URL de fuente o ruta de archivo @en el repo
3. Lo no verificable se marca como «pendiente de confirmar»
4. Al final, recomendación y preguntas abiertas
No cambies el código.
```

## Flujo recomendado

```text
Definir el problema y las exclusiones
    → Recoger fuentes (búsqueda / leer docs / MCP)
    → Tabla comparativa + pros y contras
    → Marcar confianza y fuentes en conflicto
    → Decisión humana o pasar a la fase de especificación
```

Las investigaciones largas se parten en varias rondas; ver [Gestión de tareas largas](/cases/workflows/long-running-task-management/).

## Errores frecuentes

- No exigir URL: la salida no se puede contrastar
- Mezclar blogs obsoletos con docs oficiales sin aclararlo
- Tomar conclusiones de investigación como instrucciones de implementación, saltándose la especificación
- Subir archivos con datos confidenciales a herramientas externas no autorizadas

## Límites de seguridad

- Material interno no publicado no debe salir por MCP no controlados
- Hechos variables (precios, versiones, disponibilidad por región) deben marcar [fecha de verificación](/guide/start-here/handbook-version-policy/)

## Checklist de aceptación

- [ ] Cada conclusión clave tiene al menos una fuente clicable o trazable
- [ ] La información en conflicto se presenta en paralelo
- [ ] Los puntos «inciertos» están listados, no disfrazados de hechos
- [ ] No aparecen datos sensibles en el prompt ni en los logs

## Capítulos relacionados

- [Gestionar la incertidumbre](/guide/quality/handle-uncertainty/)
- [Caso: refactorizar documentación con revisión](/cases/use-cases/content-creation/refactor-docs-with-review/)

## Fuentes de referencia

- Métodos de investigación y citas de CodexGuide
- Capítulos de búsqueda y verificación de stormzhang

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Contrastado con las capacidades públicas actuales de Web search e investigación con fuentes de OpenAI Developers, y con los capítulos ya verificados de búsqueda web, validar fuentes, incertidumbre y política de versiones. Esta página solo confirma el método estable «conclusiones clave trazables a fuentes; conflictos e incertidumbre marcados de forma explícita».
