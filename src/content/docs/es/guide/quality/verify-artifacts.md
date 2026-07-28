---
title: Verificar artefactos
description: Comprueba documentos, páginas y otros artefactos generados.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Aquí «artefacto» es el contenido que entrega finalmente la tarea, por ejemplo:

- Un documento
- Una página
- Una imagen
- Una tabla
- Un archivo generado

No asumas que el artefacto es correcto solo porque el código «parece bien».

## Por qué verificar el artefacto por separado

Muchas tareas no entregan solo un diff de código; también entregan lo que el usuario verá y usará de verdad.

Al verificar el artefacto, suele mirarse:

- Si lo final se puede usar
- Si la presentación cumple lo esperado
- Si al compartirlo con otros se ve raro, incorrecto o incompleto

Algunos problemas no están en la capa de código, sino en la de presentación final.

Por ejemplo:

- El código de la página corre, pero el layout está mal
- La estructura del texto es correcta, pero se lee torpe
- El formato del enlace es correcto, pero al abrirlo está mal
- La tabla se generó, pero el orden de campos no encaja con el uso

Así que «se generó» no equivale a «es usable».

Para artefactos que no son código: abre el archivo, comprueba enlaces, contrasta con el diseño, lee el texto en voz alta. Para páginas: previsualiza en dispositivo real o navegador, no solo mires el código generado.

## Comprobar según el tipo de artefacto

Puedes decidir cómo verificar según el tipo:

- **Página**: render real, layout, enlaces, interacción
- **Documento**: estructura, terminología, legibilidad, enlaces
- **Imagen**: tamaño, nitidez, texto, detalles
- **Tabla o archivo exportado**: campos, orden, que se abra, legibilidad

## Malentendidos habituales

### 1. Que el build pase no significa que la página esté bien

El build solo dice «se pudo generar»; no dice «se ve bien, el contenido es correcto y la interacción funciona».

### 2. El contenido documental también hay que verificarlo

Sí.

Sobre todo:

- Si la jerarquía de títulos es razonable
- Si los enlaces son clicables y correctos
- Si la terminología es coherente
- Si el texto es natural y legible

### 3. Solo mirar capturas no basta

Las capturas sirven para un vistazo rápido, pero muchos problemas solo aparecen al abrir el archivo o la página reales.

## Aplicación directa

Puedes exigir:

```text
Al terminar, auto-revisa desde la perspectiva del artefacto final y dime qué abriste realmente, qué encontraste y qué aún no verificaste.
```

## Orden de comprobación

Puedes seguir este orden:

1. Abre primero el artefacto real
2. Contrasta punto por punto con tus criterios de aceptación
3. Luego mira problemas pequeños de experiencia

Que se ejecute solo dice que la base no está rota; si se puede entregar aún depende del efecto de uso final.

---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Esta página solo explica métodos de verificación orientados al entregable final; se han revisado enlaces internos, clasificación de artefactos y orden de comprobación, y el cuerpo no depende de hechos variables de producto.  
**Última verificación:** 2026-07-26
