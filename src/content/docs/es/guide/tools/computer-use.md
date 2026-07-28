---
title: Computer Use
description: Capacidad avanzada de operar la GUI mediante pantalla y dispositivos de entrada — escenarios, riesgos y aprobación.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Computer Use** (uso del ordenador) permite al Agent ver la pantalla, mover el puntero y teclear como una persona, no solo en el navegador o el terminal. Es la capacidad más fuerte y también la que **exige más riesgo y aprobación**.

Computer Use actúa en la capa de pantalla, ratón y teclado; no es la misma clase de capacidad que el navegador o el terminal, así que conviene activarla con más cautela.

## Contenido de esta página

- División de trabajo entre Computer Use, navegador y terminal
- Qué tareas merecen activarlo
- Cómo protegerse a nivel personal y de equipo

## Límites de capacidad

| Capa | Capacidades típicas |
|---|---|
| Terminal | Shell, scripts, programas CLI |
| Navegador | DOM de la página, interacción limitada |
| Computer Use | Apps de escritorio, diálogos del sistema, flujos multi-ventana |

## En qué se diferencia de otras herramientas

Puedes distinguirla así:

- Trabajar en todo el escritorio
- Cambiar entre varias ventanas
- Pulsar botones reales y diálogos del sistema

Por eso, el alcance de interfaces e información a las que llega suele ser también mayor.

Adecuado para:

- Flujos de clics repetidos en software de demostración sin API (con tu supervisión)
- Copiar datos entre aplicaciones (bajo cumplimiento)
- Verificar el comportamiento de la propia App de escritorio

No adecuado para:

- Escribir código a diario (IDE + terminal es más eficiente)
- Operaciones de producción desatendidas
- Eludir software de seguridad o DRM

## Malentendidos habituales

### 1. ¿Si es más potente, hay que priorizarla?

Solo cuando:

- La tarea implica de verdad GUI de escritorio
- No hay una herramienta más ligera y segura que la complete

### 2. ¿Si estoy mirando, no hay riesgo?

Con alguien al lado es más seguro, pero aún puede ocurrir:

- Pulsar por error un diálogo de confirmación
- Abrir ventanas que no debía
- Meter en el flujo información sensible visible en pantalla

### 3. ¿Puede sustituir toda la automatización GUI?

Encaja más en asistencia puntual, verificación de flujos y pasos GUI sin API; no como automatización de producción estable, a largo plazo y desatendida.

## Modelo de riesgo

Computer Use equivale casi a **entregar teclado y ratón al Agent**:

- Puede abrir correo, chat, el gestor de archivos
- Puede pulsar por error diálogos de confirmación
- La pantalla puede incluir información sensible en notificaciones

Lectura obligatoria: [Permisos y aprobaciones](/guide/foundations/permissions-and-approvals/), [Sandbox y red](/guide/foundations/sandbox-and-network/)

## Cómo decidir si usarlo

Si el objetivo es solo esto, en general no hace falta Computer Use primero:

- Cambiar código
- Ejecutar tests
- Mirar páginas web
- Consultar material

La mayoría se completa con herramientas más ligeras.

Si la tarea es de este tipo, entonces plantéatelo:

- Hay que operar una app de escritorio
- Hay que cruzar varias ventanas GUI
- Hay que tratar interfaces a las que no llegan ni el navegador ni el terminal

Ahí sí merece considerarlo en serio.

## Forma de uso recomendada

1. **Entorno dedicado**: máquina virtual o cuenta de usuario secundaria; sin ventanas privadas en pantalla
2. **Tarea mínima**: «verifica la fórmula en Calculator», no «gestiona todo mi correo»
3. **Humano en el bucle**: mantenerlo visible; listo para interrumpir
4. **Grabación / logs**: para retrospectiva del equipo (la grabación también puede contener datos sensibles)
5. **Comprobar al terminar**: sistema de archivos, portapapeles, apps abiertas

En entornos empresariales puede estar desactivado por defecto; prevalece la política gestionada.

## Elección frente a la herramienta de navegador

```text
¿Solo mirar páginas web?           → herramienta de navegador
¿Operar apps fuera del IDE?        → Computer Use (con más cautela)
¿Solo cambiar código y ejecutar tests? → terminal + herramientas de archivo
```

Ver [Selección de herramientas](/guide/tools/tool-selection/)

## Formulación aplicable directamente

Puedes escribir:

```text
Solo se permite operar Calculator y la app de pruebas local; no abras correo, chat, el gestor de archivos ni ningún panel de producción.
Si aparece un diálogo de confirmación del sistema, párate, explícalo y luego continúa.
```

## Errores frecuentes

- Ejecutar Computer Use de un proyecto no confiable en el escritorio principal
- Seguir con la tarea con 2FA, banca o datos de clientes visibles en pantalla
- Tomar la automatización GUI como estrategia completa de tests

## Checklist de aceptación

- [ ] Solo se activa en entorno aislado
- [ ] El prompt indica apps permitidas y prohibiciones
- [ ] Tras la tarea, comprobar que no hay archivos/conexiones de red imprevistos
- [ ] La política de la organización permite esa capacidad

---

**Estado:** verificado  
**Productos aplicables:** App / Codex (según versión, región y permisos)  
**Base de verificación:** El material actual del OpenAI Help Center sobre planes Codex y capacidades de escritorio sigue tratando Computer Use como una función relacionada con Codex; las notas de Business también confirman soporte de Computer Use en Windows desde 2026-05-29. Este texto solo resume modelo de riesgo, escenarios adecuados y límites de aprobación, y no declara disponibilidad por defecto en todas las plataformas o cuentas.  
**Última verificación:** 2026-07-26
