---
title: Tareas Cloud en el IDE
description: Delegar Tareas Cloud desde el IDE, seguir el estado y revisar el resultado remoto.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Algunas integraciones IDE permiten **delegar la Tarea a Cloud**. La Tarea corre en un entorno remoto estandarizado; puedes seguir editando en local o simplemente dejar el ordenador. El flujo se parece al de Cloud/Web puro; solo cambia que la entrada está en el lado del editor.

## Contenido

- Cuándo lanzar una Tarea Cloud desde el IDE en lugar de puro local
- Qué preparar antes y después de delegar
- Cómo traer el diff remoto de vuelta a la revisión local

## Escenarios adecuados

| Conviene Cloud | Quédate en local |
|---|---|
| Instalación de dependencias pesada, entorno difícil de reproducir | Cambiar dos líneas rápido |
| Hay que hacer push de rama / abrir PR | GitHub no está conectado |
| Ejecución larga, quieres notificaciones de Aprobación en el móvil | Incluye borradores sensibles locales sin commit |

Conceptos: [Local frente a Cloud](/guide/foundations/local-vs-cloud/)

## Cuándo encaja este flujo

Es habitual cuando:

- Estás acostumbrado a trabajar en el IDE
- Pero la Tarea en sí conviene ejecutarla en un entorno remoto

Es decir: sigues trabajando en el IDE, pero el entorno de ejecución ya es remoto.

## Condiciones previas

- [ ] [GitHub conectado](/guide/web-and-cloud/connect-github/)
- [ ] Entorno [Cloud](/guide/web-and-cloud/cloud-environments/) y [Secrets](/guide/web-and-cloud/secrets-and-variables/) configurados (si la Tarea lo necesita)
- [ ] Los cambios locales ya tienen commit, o está claro «prevalece la rama remota»

**El IDE no puede sustituir a Cloud para ver commits locales que aún no has empujado.**

## Malentendidos frecuentes

### 1. Si en el IDE pulso «ejecutar en la nube», ¿lleva automáticamente todo lo de mi máquina?

No.  
Lo que ve la Tarea remota sigue siendo el repositorio remoto, el entorno remoto y lo que le entregues de forma explícita.

### 2. Como la entrada está en el IDE, ¿es casi igual que una Tarea local?

Tampoco.  
Aunque se inicie desde el IDE, los límites de ejecución, el entorno y lo visible siguen siendo los de Cloud.

### 3. Que Cloud termine no significa que la revisión haya pasado

Que remota termine solo significa que la Tarea corrió allí; no implica que review local, tests y confirmación final estén hechos.

## Flujo recomendado

```text
1. En el IDE escribe la descripción de la Tarea (objetivo, rama, restricciones, aceptación)
2. Elige «ejecutar en la nube» o la entrada equivalente (según la UI del producto)
3. Confirma el plan (si está activo el modo plan)
4. Sal o sigue trabajando en local → mira el progreso en notificaciones/panel
5. Cuando remota termine: mira el diff en Web/App → abre PR o haz pull de la rama a local
6. Tests locales + review humana → merge
```

Detalle de abrir PR: [Crear Pull Request](/guide/web-and-cloud/create-pull-requests/)

## Un orden habitual

La primera vez que lances una Tarea Cloud desde el IDE, puedes seguir este orden:

1. Confirma si los cambios locales ya están committed o si a propósito no quieres llevarlos
2. Confirma que GitHub, Secrets y la rama están listos
3. Lanza la Tarea con objetivo, alcance y criterios de aceptación claros
4. Cuando remota termine, vuelve a mirar el diff
5. En local completa tests y revisión humana

La diferencia central entre Tarea Cloud en el IDE y Tarea local es si el entorno de ejecución es remoto.

## Relación con la delegación desde la App de escritorio

Las [Tareas locales y Cloud](/guide/desktop-app/local-and-cloud-tasks/) de la App de escritorio y la delegación desde el IDE comparten el mismo backend Cloud; la diferencia está sobre todo en la **UI de entrada y los adjuntos de Contexto** (el IDE puede adjuntar un resumen de la selección actual).

## Límites de seguridad

- Los Permisos de la Tarea Cloud están acotados por el alcance de la conexión de GitHub y las políticas de la organización
- No pegues claves de producción en la descripción de la Tarea; usa [Secrets](/guide/web-and-cloud/secrets-and-variables/)
- Antes del merge sigue haciendo falta [revisión humana](/guide/web-and-cloud/code-review/)

## Errores frecuentes

- Tras delegar, seguir cambiando el mismo archivo en local y chocar con la rama remota
- No indicar el nombre de rama y empujar directamente a una rama compartida
- Tratar el resultado de Cloud como «ya aceptado» y saltarse el CI

---

**Estado:** outdated  
**Productos aplicables:** IDE / Cloud  
**Nota de revisión:** Esta página describe como capacidad y flujo actuales bastante concretos «delegar Tareas Cloud desde el IDE, recuperar el diff y seguir en local», pero el material oficial vigente no basta para demostrar uno a uno esa experiencia; conviene marcarla como `outdated` hasta completar la documentación formal IDE/Cloud.  
**Última verificación:** 2026-07-26
