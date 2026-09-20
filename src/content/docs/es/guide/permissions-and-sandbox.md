---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Se contrastó con la documentación actual de Codex sobre el sandbox, las aprobaciones y la seguridad; esta página distingue los límites de ejecución del sistema operativo, la política de aprobación, las restricciones de la tarea y la revisión humana, y explica por separado los modelos de red local y Cloud."
  checkedAt: "2026-08-26"
title: Permisos y sandbox
description: Entiende el sandbox, las aprobaciones, el acceso a la red y los límites de ejecución local y en Cloud mediante una secuencia de decisiones.
locale: es
source_locale: zh-CN
source_revision: 6b5fcb8
translation_status: draft
translated_at: "2026-09-20"
sidebar:
  order: 14
---

Para usar Codex con seguridad, hay que tener en cuenta dos controles: **el sandbox determina hasta dónde puede llegar técnicamente; la política de aprobación determina si debe preguntarte antes de cruzar el límite actual.**

![Flujo del sandbox y las aprobaciones de Codex: una acción pasa por el límite del sandbox, solicita aprobación humana si lo cruza y deja pruebas para verificar el resultado](/diagrams/sandbox-approval-flow-es.svg)

## Recuerda esta distinción

| Control | Pregunta que responde | Elementos habituales |
|---|---|---|
| Sandbox | ¿Hasta dónde puede llegar esta acción? | Archivos del proyecto, rutas externas, funciones del sistema, red |
| Política de aprobación | ¿Hay que preguntar a una persona antes de cruzar el límite actual? | Instalar dependencias, acceder a la red, escribir fuera del proyecto, iniciar aplicaciones |
| Restricciones de la tarea | ¿Qué debe hacerse y qué debe evitarse en este trabajo? | Directorios modificables, acciones prohibidas, comandos de validación |
| Revisión humana | ¿Es aceptable el resultado de lo ejecutado? | Diff, registros, pruebas, efectos en sistemas externos |

Las restricciones de la tarea no sustituyen al sandbox, y el sandbox tampoco sustituye a la revisión final. Cada uno se ocupa, respectivamente, de la intención, los límites de ejecución y la aceptación del resultado.

## Cómo atraviesa una acción los límites de seguridad

Cuando Codex se dispone a ejecutar un comando o usar una herramienta, puedes entender el proceso así:

1. Primero se comprueba si la acción está dentro de lo permitido por el sandbox actual.
2. Si está dentro, se ejecuta y se registra la salida; puede que no aparezca ningún aviso.
3. Si supera el límite, se solicita permiso según la política de aprobación o se deniega directamente.
4. Puedes rechazarla, pedir una acción más acotada o aprobar solo esa operación concreta.
5. Después de ejecutarla, revisa el diff, las pruebas y el estado de los sistemas externos para confirmar que el resultado cumple el objetivo.

El sandbox también limita los subprocesos y comandos que inicia Codex. No supongas que una acción elude ese límite por ejecutarse dentro de un script.

## Los límites son distintos en local y en Cloud

| Entorno | Aislamiento principal | Acceso a la red | Qué debes revisar |
|---|---|---|---|
| Tareas locales en App / CLI / IDE | Sandbox del sistema operativo y política de aprobación vigente | Por lo general, una tarea local no debería depender de Internet de forma predeterminada; aprueba o configura el acceso cuando haga falta | Alcance del espacio de trabajo, comandos, rutas externas y motivo del acceso a la red |
| Tareas en Cloud | Contenedor aislado gestionado por OpenAI | La fase de configuración puede acceder a la red según el entorno; la fase del Agent tiene la red desactivada de forma predeterminada, salvo que se habilite expresamente | Repositorio, configuración del entorno, dominios permitidos, diff devuelto y pruebas de verificación |

Los secretos del entorno Cloud se usan en la fase de configuración y se eliminan antes de que comience la fase del Agent. Aun así, aplica el principio de mínimo privilegio y no incluyas credenciales de producción ajenas a la tarea.

## Cómo evaluar una solicitud de aprobación en cuatro pasos

### 1. Compárala con la tarea

¿Esta acción contribuye realmente al objetivo actual? Que «podría ser útil» no basta para aprobarla.

### 2. Comprueba su alcance

¿Quiere acceder al proyecto actual, a un directorio externo, a la red o a una aplicación del sistema? Cuanto más concretas sean la ruta, el dominio y el comando, más fácil será decidir.

### 3. Comprueba los efectos secundarios

¿Solo lee, o también escribe archivos, instala software, envía datos o modifica un sistema remoto? Los efectos externos suelen exigir más cautela que los cambios locales que se pueden revertir.

### 4. Comprueba cómo verificar y revertir

¿Cómo confirmarás que se completó correctamente? ¿Podrás deshacerlo si falla? Si no hay respuesta, pide primero a Codex una explicación o una alternativa de menor alcance.

## Un ejemplo concreto: instalar dependencias

Supón que Codex solicita ejecutar:

```bash
pnpm install
```

No te fijes solo en si conoces el comando. Comprueba:

- Que la tarea actual realmente necesita las dependencias que faltan.
- Que el comando se ejecutará en el directorio del repositorio correcto.
- A qué registro de paquetes necesita acceder.
- Si modificará el archivo de bloqueo.
- Qué pruebas o compilación se ejecutarán después.

Si solo hay que verificar el código existente y las dependencias ya están instaladas, puedes rechazar la solicitud y pedir que se use primero el entorno actual.

## Declara los límites en el prompt

Puedes incluir directamente el alcance permitido en la tarea:

```text
Modifica solo src/auth y tests/auth.
Usa primero las dependencias ya instaladas; no accedas a la red ni actualices versiones.
Si necesitas acceder a rutas externas al proyecto o a la red, explica antes el propósito, el destino y la operación mínima necesaria.
Al terminar, ejecuta pnpm test --filter auth e informa de la salida del comando y de los riesgos restantes.
```

Esto aclara la intención, pero las limitaciones efectivas de ejecución siguen dependiendo del sandbox, la política de aprobación y la configuración administrada por el equipo.

## Errores de interpretación frecuentes

- **Si aparece una solicitud de aprobación, la acción es necesariamente peligrosa:** una instalación, una conexión de red o una escritura fuera del proyecto normales también pueden requerir aprobación; lo decisivo es su necesidad y alcance.
- **Si no aparece una solicitud, la acción es totalmente segura:** puede que la acción ya esté permitida por el sandbox; aun así, revisa los cambios reales.
- **Una aprobación concede acceso permanente:** la duración y el alcance dependen del producto y la política concretos; lee con atención la solicitud.
- **Un subagente tiene otros permisos:** los subagentes heredan el sandbox y el modo de permisos de la tarea principal; no adquieren privilegios superiores por sí solos.
- **Los Hooks sustituyen al sandbox:** un Hook añade protección y auditoría, pero no sustituye al aislamiento impuesto por el sistema operativo.

Para los ajustes del producto, consulta [Aprobaciones y sandbox de CLI](/es/guide/cli/approvals-and-sandbox/) y [Configuración de la aplicación de escritorio](/es/guide/desktop-app/settings/). Para redactar tareas, consulta [Restricciones y límites](/es/prompts/constraints-and-boundaries/).
