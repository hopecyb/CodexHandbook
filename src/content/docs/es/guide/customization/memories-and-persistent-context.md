---
title: Memorias y contexto persistente
description: Cómo Codex recuerda preferencias y hechos entre sesiones — capacidades, límites y normas de equipo.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 20
---

Algunos clientes de Codex admiten **memoria (Memory)**: conservar preferencias o hechos que confirmaste en varios turnos para sesiones posteriores. Complementa `AGENTS.md` y la configuración del proyecto, pero **no** sustituye las normas de equipo versionadas.

## Contenido

- Qué guardar en memoria y qué no
- Prioridad respecto a AGENTS.md, la función Memories y las instrucciones del proyecto
- Cómo gestionar el contenido de memoria a nivel personal y de equipo

## Para qué sirve la memoria

Puedes entenderla así: **Codex te ayuda a recordar lo que siempre tienes que repetir, pero que no merece la pena volver a explicar cada vez.**

Por ejemplo:

- Prefieres explicaciones en español
- Te gusta la conclusión primero y el detalle después
- En un proyecto, «backend» apunta por defecto a cierto directorio

Se parece más a «preferencias personales a largo plazo y unos pocos hechos estables» que a un manual del proyecto o a una caja fuerte de secretos.

## Qué conviene guardar en memoria

| Conviene | No conviene |
|---|---|
| Preferencias personales de código (idioma de comentarios, sangría) | Claves de producción, tokens |
| Alias de proyecto que repites («backend = `services/api`») | Estado de sprint que cambia |
| Hechos no sensibles que dijiste explícitamente «por favor, recuerda» | Normas de equipo que deberían estar en Git |

Las normas a nivel de equipo deben ir a **`AGENTS.md` o a la configuración del proyecto**, para poder hacer review y onboarding. Ver [Alcance y prioridad](/guide/customization/agents-md/scope-and-precedence/).

## Malentendidos habituales

### La memoria no «lo recuerda todo para siempre»

Mucha gente cree que, si lo dijo una vez, Codex lo recordará después de forma completa y estable.

Es más preciso verla como una capa auxiliar para reducir repeticiones; no sustituye la documentación ni la información formal del repositorio.

### La memoria no debe cargar el consenso del equipo

Si una regla solo existe en la memoria de tu cuenta, los demás no la ven y no pueden hacer review.

Ese contenido debe volver a:

- `AGENTS.md`
- Documentación del proyecto
- Archivos de configuración

### La memoria no es el sitio para información sensible

Aunque un cliente admita memoria, no deberías dejarle guardar a largo plazo:

- tokens
- datos de clientes
- cuentas internas
- información de negocio no pública

## Comparación con mecanismos relacionados

| Mecanismo | Quién lo ve | Cómo cambia |
|---|---|---|
| Prompt de una sola vez | Tarea actual | Tú escribes |
| Memoria | Suele ser solo tu cuenta/workspace | Confirmación en el chat o gestión en ajustes |
| `AGENTS.md` | Todos los colaboradores del repositorio | Git PR |
| Configuración del proyecto | Según la capa de configuración | Archivos + política gestionada |

## Cómo distribuir la información por capas

La memoria se vuelve confusa cuando mezclas información con distinta duración y visibilidad.

| Tipo de información | Mejor lugar |
|---|---|
| Preferencia personal de explicación | Memoria |
| Regla compartida por el equipo | `AGENTS.md` o configuración de proyecto |
| Convención de un directorio | Instrucciones de proyecto a nivel de directorio |
| Objetivo temporal de una tarea | Prompt actual o issue |
| Pasos reutilizables | Skill o plantilla de Prompt |
| Chequeo automático | Hook |

Pregunta: quién debe verlo, cuánto durará y si necesita code review. El consenso de equipo va al repositorio; los hábitos personales, a memoria.

## Uso recomendado

1. **Escríbelo primero en el repositorio**: comandos de test, estructura de directorios, prohibición de push — no deberían vivir solo en memoria
2. **Memoria para preferencias personales**: p. ej. «explica en español», «comentarios del diff en inglés»
3. **Limpia con regularidad**: tras un cambio grande de arquitectura, borra memorias obsoletas
4. **Proyectos sensibles**: desactiva o limita la memoria para evitar fugas de contexto entre proyectos

## Cómo decidir si guardar en memoria

Si no estás seguro de si una información debe ir a memoria, pregúntate:

1. ¿Es una preferencia personal que repito a menudo?
2. ¿Es un hecho relativamente estable a corto plazo?
3. ¿Aunque otros no la vean, no afectará a la colaboración del equipo?

Solo si las tres se acercan a «sí» conviene meterla en memoria.

## Límites de seguridad

- No dejes que la memoria sea un **canal secreto** para saltarse prohibiciones de `AGENTS.md`
- No guardes en memoria datos de clientes, credenciales ni información financiera no pública
- En entornos empresariales la memoria puede estar desactivada — respeta la política gestionada

## Errores habituales

- Dejar solo en memoria la «lista de epics de esta semana», invisible para los colaboradores
- Cuando memoria y `AGENTS.md` chocan, no actualizar ninguno de los dos lados
- Creer que memoria equivale a «el modelo recuerda para siempre el repositorio entero»

La memoria encaja mejor con «preferencias personales que siempre hay que repetir y unos pocos hechos estables»; no sustituye la documentación del repositorio, las reglas de equipo ni la gestión de información sensible.

## Referencias
- Documentación de memoria de OpenAI Codex (según versión)
---

**Estado:** verificado  
**Productos aplicables:** App / CLI (según versión)  
**Base de verificación:** Contrastado con la explicación oficial actual del Help Center de OpenAI sobre ChatGPT Memory, y con los capítulos ya verificados de este manual sobre instrucciones de proyecto, preferencias personales y límites de seguridad; el contenido se limita al principio estable «la memoria sirve para preferencias personales y unos pocos hechos estables; no sustituye las reglas del repositorio ni la gestión de información sensible».  
**Última verificación:** 2026-07-26
