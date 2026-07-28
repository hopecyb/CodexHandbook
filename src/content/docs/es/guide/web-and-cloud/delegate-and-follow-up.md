---
title: Delegar y hacer seguimiento
description: Entregar Tareas a Cloud desde App, IDE o móvil, y seguir viendo, Aprobando e iterando lejos del ordenador.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Delegar** es entregar la Tarea a Cloud para que se ejecute en un entorno remoto; **hacer seguimiento** es, mientras corre o al terminar, ver el progreso, completar el Contexto, Aprobar operaciones peligrosas y pedir cambios. Es el flujo central de «seguir avanzando lejos del puesto de trabajo».

## Contenido

- Cuándo delegar a Cloud en lugar de correr en local
- Diferencias al lanzar la delegación desde cada entrada
- Cómo hacer un seguimiento efectivo y evitar «lo tiro y me olvido»

## Cómo va este tipo de flujo

Una Tarea Cloud se parece más a esto:

- Primero formular bien la Tarea
- Empieza a correr en remoto
- A mitad de camino puede hacer falta una restricción o una Aprobación
- Al terminar aún hay que mirar el diff, el PR y decidir si continuar

Cloud solo cambia el lugar de ejecución; el seguimiento y el juicio siguen siendo tuyos.

## Para quién

| Escenario | Sugerencia |
|---|---|
| Build/pruebas largas | Delega a Cloud; en local sigue con otra cosa |
| Trayecto / huecos entre reuniones | Ver estado y Aprobar pasos clave en el móvil |
| Necesitas entorno estandarizado | Cloud + [configuración de entorno](/guide/web-and-cloud/cloud-environments/) |
| Prueba-error rápida en local | Prioriza [App de escritorio](/guide/desktop-app/) o [IDE](/guide/ide/local-task-workflow/) |

## Cuándo conviene delegar

Si no tienes claro si delegar:

- La Tarea aún se prueba una y otra vez y quieres ir viendo y cambiando: primero local
- La Tarea tarda mucho, quieres alejarte del ordenador o entregarla a un entorno unificado: entonces Cloud

## Comprobación antes de delegar

- [ ] [GitHub conectado](/guide/web-and-cloud/connect-github/); estrategia de rama objetivo clara
- [ ] La descripción de la Tarea incluye: objetivo, alcance, prohibiciones, forma de aceptación (véase [Anatomía de una buena Tarea](/prompts/task-anatomy/))
- [ ] Si hacen falta commits locales sin push, haz push primero o hazlo en local
- [ ] Secrets / [necesidad de salida a red](/guide/web-and-cloud/internet-access/) listos

## Malentendidos frecuentes

### 1. Tras delegar, ya no hace falta mirar

Eso es lo que más tiempo pierde. Si la dirección se desvía, cuanto más tarde lo detectes, más retrabajo.

### 2. Hacer seguimiento es «empujar el progreso»

El seguimiento de más valor son estas acciones:

- Completar Contexto que faltaba
- Acotar el alcance
- Rechazar operaciones peligrosas que no deben pasar
- Al terminar, pedir más correcciones

### 3. Delegar y local son opuestos

Un flujo real muy habitual es:  
**explorar en local → delegar la Tarea larga → retomar el cierre en local.**

## Delegación desde cada entrada (concepto)

| Entrada | Peculiaridad |
|---|---|
| [App de escritorio · Tareas locales y Cloud](/guide/desktop-app/local-and-cloud-tasks/) | Misma vista de proyecto; cambiar entre local/Cloud |
| [IDE · Tarea Cloud](/guide/ide/cloud-task-workflow/) | Lleva el código seleccionado y el Contexto de archivos abiertos |
| Web / móvil | Ver ligero, Aprobar, añadir una línea de seguimiento |

Botones y nombres según el producto actual.

## Ritmo de seguimiento recomendado

```text
Lanzar delegación → confirmar que el entorno arrancó → (opcional) mirar logs a mitad
    → Aprobar en puntos de operación peligrosa → al terminar mirar diff/PR
    → Si no convence: instrucción adicional o nueva Tarea de seguimiento
```

Orden de acción:  
**Tras enviarla, mira al menos una vez a mitad de camino y una vez al terminar.**

### Intervención a mitad de camino

- **Completar Contexto**: si faltaba un archivo o una restricción, dilo en un mensaje de seguimiento; evita reabrir la Tarea y perder historial
- **Acotar alcance**: si se desvía, deja claro «deja de cambiar X; solo haz Y»
- **Aprobar**: véase [Patrones de Aprobación humana](/cases/workflows/human-approval-patterns/) — mejor un paso más lento que aprobar en lote shells desconocidos

### Al terminar

- Revisar el diff en el flujo de [Crear PR](/guide/web-and-cloud/create-pull-requests/)
- Validar con [Revisión de código en Cloud](/guide/web-and-cloud/code-review/) o haciendo checkout local de la rama
- Si hace falta seguir cambiando: delegar de nuevo sobre el mismo PR, o retomar en local

## Combinar con notificaciones

Activa [notificaciones de escritorio](/guide/desktop-app/notifications/) o push móvil para evitar que la Tarea se quede colgada sin Aprobación. El equipo debería acordar: en qué franjas debe haber alguien que pueda Aprobar repos relacionados con producción.

## Errores frecuentes

- Texto de delegación demasiado vago; Cloud «entiende» solo y hace un refactor amplio
- Local a medias sin commit, y se delega a Cloud desde main remoto
- Nunca mirar a mitad; al terminar descubres que la dirección era incorrecta y se pierde toda la ronda de entorno
- En el PR solo «LGTM» sin correr pruebas
- Confundir «ejecución remota» con «responsabilidad remota»

## Lista de aceptación

- [ ] Puedes lanzar y completar una Tarea Cloud desde al menos una entrada
- [ ] Puedes añadir una restricción efectiva mientras corre la Tarea
- [ ] Produce PR o rama, y pasó por revisión humana del diff

## Fuentes de referencia

- Documentación de Tareas de OpenAI Codex Cloud
- stormzhang `10-cloud.md`, `27-mobile.md`
- KimYx0207 CX-10
- Capítulos de colaboración App/Cloud de codex.bozhouai.com

---

**Estado:** outdated  
**Productos aplicables:** Cloud / App / IDE / Mobile  
**Nota de revisión:** Esta página depende de la forma actual del producto para lanzar o seguir Tareas Cloud desde App, IDE, Web y móvil; esas capacidades multiplataforma han cambiado rápido en los últimos meses; hasta alinear ítem a ítem con la documentación oficial vigente, conviene `outdated`.  
**Última verificación:** 2026-07-26
