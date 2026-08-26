---
title: Sandbox y red
description: Entiende el aislamiento de ejecución, el acceso a la red y los límites de riesgo.
locale: es
source_locale: zh-CN
source_revision: b3d6d57
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 80
---

«Sandbox» y «red» son en realidad dos cosas: el Sandbox limita a dónde puede tocar; la red, a dónde puede conectarse.

El **Sandbox** limita el sistema de archivos y parte de las capacidades del sistema a las que puede llegar el Agent, y reduce la superficie de errores. El **acceso a la red** es otra capa de riesgo: puede filtrar información sensible del Prompt o traer datos no fiables.

## Por qué importan estos dos límites

Sin estos bordes, si Codex entiende mal la Tarea, el problema puede ser mayor, por ejemplo:

- cambiar directorios que no querías tocar
- leer archivos sensibles que no debería
- enviar contenido de la Tarea a sitios externos
- traer datos o scripts de origen dudoso

Así que son más una barandilla de seguridad por defecto que un obstáculo a propósito.

## Consejos al empezar

1. En la práctica, desactiva la red innecesaria o permite solo el acceso que haga falta con claridad
2. No pongas claves de producción en proyectos de práctica
3. Si ves una petición de «salir a la red / escribir en una ruta sensible», para, entiéndela y luego aprueba

## Malentendidos frecuentes

### 1. ¿El Sandbox significa que no es lo bastante capaz?

El Sandbox sirve sobre todo para controlar el riesgo, no para recortar capacidad a propósito.

### 2. ¿Cuanta más red, mejor?

Cuanta más red, significa:

- fuentes de información más complejas
- posible contacto con contenido no fiable
- que parte del contenido de la Tarea pueda salir a servicios externos

En la práctica, si puedes no salir a la red, mejor no salir primero.

### 3. ¿Cómo juzgo una solicitud de permiso?

Mira estas tres cosas:

1. ¿Esta Tarea necesita de verdad salir a la red?
2. ¿La ruta o el sitio al que accede es el que esperaba?
3. Si rechazo este paso, ¿puedo seguir con un método más seguro?

## Una mirada más intuitiva

Piensa en dos puertas:

- **Puerta del Sandbox**: decide a qué archivos y zonas del sistema puede entrar
- **Puerta de la red**: decide si puede mirar o conectarse hacia fuera

Ninguna es solo un ajuste técnico; también es tu forma de controlar el riesgo.

Entrada de ajustes en el producto: App de escritorio [Ajustes](/es/guide/desktop-app/settings/); detalles oficiales: [https://developers.openai.com/codex](https://developers.openai.com/codex).

Al empezar, mejor restringir un poco de más que abrir todas las puertas cuando aún no entiendes el riesgo.

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** La documentación actual de Codex CLI en OpenAI Help Center sigue describiendo Full Auto como “sandboxed, network-disabled environment scoped to the current directory” y lo distingue de los modos de Aprobación; esta página solo explica que Sandbox y red son dos límites de riesgo distintos, y cómo un principiante debe estrechar el alcance de acceso.  
**Última verificación:** 2026-07-26
