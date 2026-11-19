---
title: Tareas de Cloud desde el IDE
description: Delega tareas largas desde el IDE a Codex Cloud y vuelve a resultados que se puedan revisar.
locale: es
source_locale: zh-CN
source_revision: "d5369b5"
translation_status: stale
translated_at: 2026-09-20
sidebar:
  order: 60
legacyVerification:
  status: verified
  products: IDE / Cloud
  checkedAt: '2026-08-26'
reviewed_at: 2026-10-25
---
Desde el IDE puedes mantener las iteraciones rápidas en local o conectarte a Codex web y delegar las tareas más largas a Cloud. El punto de partida sigue estando en el editor, pero el entorno de ejecución, el estado del repositorio y los límites de acceso a la red pasan a ser los de Cloud.

## Cuándo delegar

| Seguir en local | Delegar a Cloud |
|---|---|
| Necesitas hacer cambios rápidos y sucesivos en la selección actual | La tarea tiene muchos pasos o tarda bastante tiempo |
| Dependes de cambios locales que aún no has confirmado | Los datos de entrada ya están en el repositorio remoto o se pueden subir |
| Debes usar herramientas exclusivas de tu equipo | El entorno de Cloud puede reconstruir las dependencias y ejecutar las comprobaciones |
| Necesitas interactuar con el proceso en tiempo real | Quieres seguir trabajando en otras cosas en local |

Cloud no dispone automáticamente de los archivos sin confirmar, las credenciales ni los procesos en ejecución de tu equipo. Antes de delegar, deja claro desde qué repositorio, rama y commit debe empezar la tarea.

## Lista de comprobación antes de delegar

- [ ] Has iniciado sesión con una cuenta de ChatGPT; Codex Cloud no admite iniciar sesión con una clave de API.
- [ ] Has conectado GitHub o utilizas la integración con GitLab Beta, si está disponible para ti.
- [ ] El entorno de Cloud puede ejecutar los scripts de instalación y comprobación.
- [ ] Las variables y los secretos necesarios están configurados en el entorno, sin incluirlos en el prompt.
- [ ] Has gestionado los cambios locales sin confirmar o has indicado expresamente que quedan fuera de la tarea.
- [ ] Has definido el objetivo, las rutas permitidas, las zonas excluidas y los comandos de aceptación.

## Ejemplo de principio a fin

```text
Objetivo: corregir el módulo de reintentos, que sigue esperando una vez después de alcanzar el límite.
Punto de partida: repositorio acme/retry-service, rama fix/retry-limit.
Alcance: modificar solo src/retry.ts y sus pruebas correspondientes.
Restricciones: no actualizar dependencias, no modificar la API pública y no enviar cambios a main.
Aceptación: ejecutar pnpm test -- retry y pnpm typecheck; mostrar el diff y los resultados de los comandos.
```

Flujo recomendado:

1. Adjunta los archivos o la selección pertinentes en el IDE y confirma primero los límites del problema.
2. Elige Cloud para continuar con la tarea más larga.
3. Consulta en Cloud el plan, el progreso y los resultados de las comprobaciones.
4. Vuelve al IDE o a la web para examinar los resultados.
5. Recupera la rama o consigue los cambios mediante una PR.
6. Vuelve a ejecutar las pruebas en un entorno local de confianza y revisa los cambios antes de fusionarlos.

Que una tarea figure como «completada» en Cloud solo significa que terminó la ejecución remota; no garantiza que el código esté listo para fusionarse. Las dependencias, el sistema operativo o las credenciales remotas pueden diferir de las de tu entorno local o CI y revelar problemas específicos del entorno.

## Conflictos y seguridad

- Evita modificar el mismo archivo a la vez en local y en Cloud después de delegar la tarea.
- No pegues claves de producción en el prompt; usa los secretos del entorno.
- No des por hecho que Cloud tiene acceso a la red; configúralo según la lista de destinos permitidos del entorno.
- Enviar cambios, abrir una PR y fusionarla son acciones distintas. La fusión debe seguir sujeta a revisión humana o a los controles de CI.

Continúa con [Entornos de Cloud](/es/guide/web-and-cloud/cloud-environments/) y [Crear pull requests](/es/guide/web-and-cloud/create-pull-requests/).

## Fuentes oficiales

- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)
- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
