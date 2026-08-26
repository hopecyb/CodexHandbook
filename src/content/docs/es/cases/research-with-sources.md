---
title: Investigación con fuentes
description: Usa Codex para buscar, comparar y verificar hechos — con fuentes y conclusiones trazables.
locale: es
source_locale: zh-CN
source_revision: ba7014d
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

El flujo **investigación con fuentes** insiste en que toda conclusión debe poder volver a una **fuente** (documentación oficial, papers, archivos del repo), no a la confianza inventada del modelo. Sirve para selección técnica, comparación de competidores, revisiones bibliográficas e interpretación de políticas.

## Qué resuelve esta página

- Cuándo usar [búsqueda web](/es/guide/tools/web-search/) frente a solo leer el repositorio
- Cómo exigir formato de citas y marcar incertidumbre
- Encaje con [validar fuentes](/es/guide/quality/validate-sources/)

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

Las investigaciones largas se parten en varias rondas; ver [gestión de tareas largas](/es/prompts/long-running-tasks/).

## Errores frecuentes

- No exigir URL: la salida no se puede contrastar
- Mezclar blogs obsoletos con docs oficiales sin aclararlo
- Tomar conclusiones de investigación como instrucciones de implementación, saltándose la especificación
- Subir archivos con datos confidenciales a herramientas externas no autorizadas

## Límites de seguridad

- Material interno no publicado no debe salir por MCP no controlados
- Hechos variables (precios, versiones, disponibilidad por región) deben marcar [fecha de verificación](/es/guide/start-here/handbook-version-policy/)

## Checklist de aceptación

- [ ] Cada conclusión clave tiene al menos una fuente clicable o trazable
- [ ] La información en conflicto se presenta en paralelo
- [ ] Los puntos «inciertos» están listados, no disfrazados de hechos
- [ ] No aparecen datos sensibles en el prompt ni en los logs

## Capítulos relacionados

- [Gestionar la incertidumbre](/es/guide/quality/handle-uncertainty/)
- [Caso: refactorizar documentación con revisión](/es/cases/use-cases/content-creation/refactor-docs-with-review/)

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Los use cases actuales de Codex en OpenAI Developers siguen incluyendo «Learn a new concept», centrados en convertir material denso en una salida de aprendizaje o investigación verificable. Esta página exige además URL o ruta de archivo del repo en cada conclusión, y marca explícitamente lo pendiente de confirmar, alineado con la buena práctica de «investigación con fuentes».
