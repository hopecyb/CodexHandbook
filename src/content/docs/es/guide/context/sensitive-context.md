---
title: Contexto sensible
description: Claves, privacidad y material que no se debe compartir.
locale: es
source_locale: zh-CN
source_revision: 909b1ff
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 70
---

Todo lo que no quieras que se vea, copie, reenvíe o quede a largo plazo en el registro de la Tarea, trátalo primero como información sensible.

## Por qué hay que juzgar primero

Muchos problemas de seguridad no vienen de alguien que viola a propósito, sino de pensarse solo «primero resolvamos el problema».

Por ejemplo:

- Para depurar, pegar el `.env` entero
- Para que lo entienda, pegar datos originales del cliente
- Por comodidad, pegar tal cual el error con un token real

Esas prácticas parecen cómodas en el momento; después suelen ser las más difíciles de remediar.

No proporciones a Codex (en práctica o producción):

- Claves de API, contraseñas, cookies de sesión
- Datos de clientes sin anonimizar, números de identidad, etc.
- Material interno no público cuya salida prohíbe el contrato

Usa marcadores de posición: `YOUR_API_KEY`. Si ya se filtró, rota la clave según el proceso de la organización.

## Cómo juzgar si no estás seguro

Si no sabes si un tramo cuenta como sensible, pregúntate primero dos cosas:

1. Si alguien no relacionado ve este contenido, ¿hay riesgo?
2. Si este contenido se queda a largo plazo en el registro de la Tarea, ¿me deja inquieto?

Si alguna respuesta es «sí», trátalo primero como información sensible.

## No te fíes de «no debería pasar nada»

Quien usa por primera vez una IA de tipo herramienta suele pensar por inercia:

- «Solo lo pego un momento»
- «Solo me ayuda a mirarlo»
- «Este archivo no se va a enviar de verdad»

Pero en cuanto la información entra en el flujo de la Tarea, hay que tratarla como sensible. El control de seguridad conviene ponerlo antes.

## Contenido que más se pasa por alto

Además de contraseñas y claves, esto también suele ser sensible:

- Listas de clientes
- Teléfonos, emails, números de identidad
- Capturas internas, planes no publicados
- Archivos de configuración con direcciones reales de producción o tokens de acceso

Es decir: información sensible no es solo una clave `sk-...`.

## Hasta qué punto anonimizar basta

No hay que borrar toda la información: hay que conservar «la información mínima necesaria para resolver el problema».

Puedes seguir este enfoque:

- Conservar la estructura
- Sustituir valores reales
- Quitar identificadores
- Eliminar campos no relacionados con el problema actual

Por ejemplo puedes conservar:

- Nombres de campos
- Tipo de error
- Orden de llamadas

Pero sustituir:

- Claves reales
- Emails reales
- Teléfonos reales
- Nombres reales de clientes

## Si hay que proporcionarlo, cómo hacerlo más seguro

Prácticas más seguras:

- Sustituir claves por valores falsos o marcadores de posición
- Anonimizar datos reales de usuarios
- Conservar solo los campos que de verdad hacen falta para depurar
- Si puedes describir el fenómeno, evita pegar de golpe el contenido sensible original

Por ejemplo:

```text
Sustituye la API Key real por YOUR_API_KEY y el email real por user@example.com.
```

## Si ya se ha filtrado por accidente

Trátalo según el nivel de riesgo:

1. Deja de seguir difundiendo
2. Rota de inmediato la clave, contraseña o token
3. Informa y remedia según el proceso de la organización

Al resolver problemas, por defecto da solo «la información mínima necesaria para depurar»; si se puede anonimizar, anonimiza; si se puede usar un marcador de posición, úsalo.

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Esta página solo explica minimización de información sensible y principios de anonimización; conceptos, ejemplos de riesgo y recomendaciones de tratamiento se han revisado, y el cuerpo no depende de hechos volátiles de producto.  
**Última verificación:** 2026-07-26
