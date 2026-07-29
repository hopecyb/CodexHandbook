---
title: Archivos, Herramientas y comandos
description: Explica cómo Codex lee y escribe archivos, ejecuta comandos y usa Herramientas.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

Su mayor diferencia frente a un chatbot normal es que actúa mediante **Herramientas**.

Los archivos son donde cambia cosas; los comandos, cómo actúa; las Herramientas, la puerta para poner manos a la obra.

Codex actúa sobre el mundo real mediante **Herramientas**:

- Leer/escribir archivos del proyecto
- Ejecutar comandos en la terminal (si lo permiten los permisos y la política del Sandbox)
- Buscar en la web, abrir el navegador, etc. (según capacidad y política del producto)

## Separa primero estos tres términos

| Término | Significado |
|---|---|
| Archivo | Contenido real del proyecto: código, documentación, configuración |
| Comando | Un paso ejecutado en la terminal: construir, probar, buscar |
| Herramienta | La entrada de capacidad con la que Codex lee, edita, ejecuta y busca |

También puedes verlo así:

- **Archivos** como material
- **Comandos** como acciones
- **Herramientas** como los instrumentos con los que toma material y actúa

## Proceso de trabajo habitual

Tras darle una Tarea, Codex suele hacer esto:

1. Leer primero algunos archivos relevantes para entender la estructura del proyecto
2. Si hace falta, buscar texto, abrir directorios, revisar configuración
3. Si necesita verificar el resultado, ejecutar un comando, por ejemplo pruebas o build
4. Tras editar archivos, entregarte los cambios para que los revises

Así que cuando ves que «quiere leer archivos» o «quiere ejecutar un comando», casi siempre está dando un paso normal de la Tarea.

## Malentendidos frecuentes

### 1. Si puede ejecutar comandos, ¿puede hacer cualquier cosa?

No necesariamente.

Que pueda depende también de:

- qué Herramientas da la entrada de producto actual
- si el Sandbox lo permite
- si ese paso necesita tu Aprobación
- si la política del equipo añade límites extra

### 2. ¿Debería ejecutar menos comandos y editar archivos directamente para ir más rápido?

No necesariamente.

A veces ejecutar un comando de comprobación detecta el problema antes. Por ejemplo, correr pruebas tras cambiar código suele ser más estable que descubrir el fallo después.

### 3. ¿Y si no entiendo los comandos?

Si no los entiendes de momento, puedes preguntar:

```text
¿Qué hace este comando? ¿Qué contenido cambia? ¿Qué pasa si no lo ejecuto?
```

## Una forma sencilla de juzgar

Cuando Codex vaya a leer, editar o ejecutar, usa primero estas tres preguntas:

1. ¿Este paso tiene que ver con mi objetivo?
2. ¿El alcance es el directorio o los archivos que esperaba?
3. Si se equivoca, ¿puedo revertirlo con facilidad?

Si alguna no tiene respuesta clara, pídele primero una explicación.

## Principios de uso

1. **Alcance mínimo necesario**: indica directorios y archivos; evita «cambiar el repositorio entero a voluntad»
2. **Los comandos peligrosos necesitan Aprobación**: borrar, hacer push, cambiar configuración del sistema, etc.
3. **Hay método para elegir Herramientas**: ver [Selección de Herramientas](/guide/tools/tool-selection/)

Según la entrada de producto, el panel de Herramientas y la forma de confirmar cambian; los detalles están en cada guía de producto.

Codex no solo «habla»: actúa de verdad mediante archivos, comandos y Herramientas, así que hay que vigilar alcance y riesgo.

Siguiente lectura recomendada:

1. [Permisos y Aprobaciones](/guide/foundations/permissions-and-approvals/)
2. [Sandbox y red](/guide/foundations/sandbox-and-network/)
3. [Ejecuta tu primera Tarea](/guide/getting-started/run-your-first-task/)

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Esta página solo explica la diferencia conceptual entre archivos, comandos y Herramientas, y el método para juzgar riesgos; se revisaron enlaces internos y formulaciones de ejemplo, y el cuerpo no depende de hechos de producto volátiles.  
**Última verificación:** 2026-07-26
