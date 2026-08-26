---
title: Guía completa de Scheduled tasks
description: Elige entre una tarea independiente o dentro de un chat y configura proyectos, worktrees, permisos, prompts y revisión humana.
locale: es
source_locale: zh-cn
source_revision: 7b79596
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

La parte difícil de una Scheduled task no es elegir la hora. Es conseguir que cada ejecución desatendida tenga entradas estables, permisos limitados, resultados revisables y condiciones de parada.

![Ciclo de seguridad desde la verificación manual hasta la programación, la revisión humana y el ajuste](/diagrams/scheduled-task-safety-loop-es.svg)

## Para quién es

- Personas que generan informes diarios o semanales, comprueban documentación o hacen seguimiento de PR.
- Desarrolladores que ejecutan mantenimiento periódico sobre un proyecto local o un worktree aislado.
- Responsables que evalúan permisos, tratamiento de fallos y Skills compartidos por el equipo.

## Límites de compatibilidad

| Superficie | Qué permite | Restricción principal |
|---|---|---|
| ChatGPT Web | Crear, gestionar y consultar ejecuciones; usar archivos cargados, herramientas conectadas, Skills y Plugins | No puede acceder directamente a carpetas locales |
| App de escritorio de ChatGPT | Crear y gestionar; elegir un proyecto local o un Git worktree | El equipo debe estar encendido, la App en ejecución y el proyecto disponible |
| Codex CLI | Preparar y probar manualmente prompts, Skills y scripts | No ofrece una interfaz de gestión de Scheduled tasks |
| Integración IDE | Verificar comandos y cambios en el workspace | No ofrece una interfaz de gestión de Scheduled tasks |

## 1. Elegir entre una tarea independiente y una tarea dentro del chat

### Scheduled task independiente

Cada ejecución parte del prompt guardado y aparece por separado en Scheduled. Es adecuada para informes y comprobaciones de estado independientes; una misma tarea puede abarcar varios proyectos.

### Scheduled task dentro del chat

Vuelve al mismo chat según la programación y conserva el contexto. Es adecuada para consultar periódicamente trabajos largos, seguir el estado de un PR, continuar una investigación o mantener una conversación previa.

Elige una tarea independiente cuando cada ejecución deba empezar de nuevo; elige una tarea dentro del chat cuando una misma cuestión necesite continuidad.

## 2. Elegir los materiales de ejecución

### Ejecutar en Web

Incluye las instrucciones duraderas en el prompt o en un Skill y proporciona archivos cargados, un Project o servicios conectados. Una indicación como «lee latest.csv de mi escritorio» no puede funcionar en Web.

### Usar un proyecto local en la App de escritorio

Para un repositorio Git puedes elegir:

- **Proyecto local:** trabaja en el checkout principal y podría tocar archivos que estás editando.
- **Worktree dedicado:** aísla los cambios en segundo plano del trabajo sin terminar; es preferible para tareas que modifican archivos.

Los proyectos que no usan Git se ejecutan directamente en su directorio. Archiva las ejecuciones frecuentes que ya no necesites para evitar la acumulación de worktrees.

## 3. Verificar manualmente primero

Ejecuta en un chat normal exactamente el mismo prompt, modelo, nivel de razonamiento y conjunto de herramientas. Comprueba al menos que:

- las entradas siguen siendo claras sin explicaciones en directo;
- si no hay cambios, la tarea termina sin generar ruido;
- el resultado puede revisarse con rapidez;
- los comandos, Skills y herramientas conectadas funcionan;
- si faltan permisos o materiales, la tarea se detiene y lo explica en vez de adivinar.

Revisa las primeras ejecuciones programadas antes de ajustar el prompt o la frecuencia.

## 4. Prompt de tarea reutilizable

```text
Crea una Scheduled task independiente:

Nombre: Comprobación semanal de enlaces rotos en la documentación
Hora: lunes a las 09:00, en la zona horaria actual
Ubicación: worktree dedicado del proyecto Git actual

En cada ejecución:
1. Lee únicamente docs/, src/content/docs/, examples/ y public/diagrams/.
2. Ejecuta pnpm check:links.
3. Si pasa, informa solo del número de archivos y enlaces; no modifiques nada.
4. Si falla, enumera el archivo de origen, el destino roto y la corrección sugerida;
   no corrijas los enlaces automáticamente.
5. Sin internet, instalaciones, commit, push ni PR.
6. Si falta el comando o una dependencia, o el resultado es incierto, detente e
   indica el elemento exacto que requiere intervención humana.

Finalización: termina después de producir un informe revisable; no reintentes.
```

Aquí quedan definidos la hora, el proyecto, el alcance de lectura, el comando, las ramas de éxito y fallo, las acciones prohibidas y la condición de parada. La programación solo vuelve a activar la tarea; no sustituye su especificación.

## 5. Permisos y revisión humana

Las Scheduled tasks se ejecutan sin supervisión con la configuración predeterminada del sandbox.

| Modo de sandbox | Resultado habitual |
|---|---|
| read-only | Fallan la edición de archivos, la red y el control de Apps locales |
| workspace-write | Se puede escribir en el workspace; las escrituras externas, la red y el control de Apps fallan de forma predeterminada |

Empieza con el modo más restrictivo que permita completar la tarea. Si necesitas red o un acceso de archivos más amplio, añade allowlists explícitas; no concedas permisos generales solo para eliminar un fallo puntual.

Conserva la revisión humana para:

- enviar mensajes o publicar contenido fuera del sistema;
- modificar el estado de producción;
- fusionar PR o hacer push a la rama principal;
- eliminar en bloque, migrar o cambiar permisos;
- un diff que exceda el alcance esperado o pruebas que fallen.

## 6. Diseñar las rutas «sin cambios», fallo y parada

Una tarea duradera debe definir tres rutas:

1. **Hay hallazgos:** presentar evidencias, gravedad y siguiente paso.
2. **No hay cambios:** informar brevemente del alcance comprobado sin inventar problemas.
3. **No se puede completar:** indicar los materiales o permisos que faltan, detenerse y esperar a una persona.

Para una tarea dentro del chat que consulta periódicamente un estado, añade condiciones de terminación como «el PR se ha fusionado o cerrado», «se ha repetido el mismo error tres veces» o «se requiere aprobación humana».

## Una Scheduled task no es CI basada en eventos

Si la ejecución debe producirse inmediatamente después de un `push`, de la creación de un PR o de una publicación, usa GitHub Actions, CI, webhooks o Codex SDK. Consultar el estado cada minuto no equivale a una activación precisa por eventos.

## Lista de aceptación

- [ ] El prompt se ejecutó por completo en un chat normal.
- [ ] Se eligió una tarea independiente o dentro del chat.
- [ ] Los materiales de Web o el proyecto local estarán disponibles durante la ejecución.
- [ ] El sandbox predeterminado basta, o existe una razón explícita para el acceso adicional.
- [ ] Están definidas las rutas con hallazgos, sin cambios, de fallo y de parada.
- [ ] Una persona revisó una muestra de las tres primeras ejecuciones.
- [ ] Los worktrees frecuentes tienen una política de archivo y limpieza.
- [ ] Las escrituras críticas conservan confirmación humana.

## Fuentes oficiales

- [OpenAI: Scheduled tasks](https://learn.chatgpt.com/docs/automations)
- [OpenAI: Sandboxing](https://learn.chatgpt.com/docs/permissions/sandboxing)

---

**Estado:** verified

**Productos aplicables:** ChatGPT Web / App de escritorio; CLI e IDE sirven para preparar y probar

**Última verificación:** 2026-08-26
