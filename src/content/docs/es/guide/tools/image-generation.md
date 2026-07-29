---
title: Generación de imágenes
description: Generar o editar imágenes en tareas Codex — prompts, formatos y aceptación.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 60
---

En algunos escenarios, Codex puede invocar la capacidad de **generación de imágenes**: ilustraciones, borradores de iconos, conceptos de UI, esquemas. El resultado debe tratarse como **artefacto pendiente de aceptación**, no como activo de marca listo para publicar.

Sirve para dar primero un borrador visual; no para tomarlo directamente como producto final.

## Contenido de esta página

- Cuándo generar imágenes en Codex frente a usar herramientas profesionales
- Cómo escribir el prompt de imagen y las restricciones
- Copyright, marca y gestión de archivos

## Escenarios adecuados

| Adecuado | No adecuado |
|---|---|
| Borradores de imagen para blog, esquemas de documentación interna | Material externo sujeto a manual de marca estricto |
| Explorar rápido el ambiente de un layout de UI | Entrega de diseño con fidelidad a nivel de píxel |
| Iconos de ejemplo en tutoriales | Escenas con retratos reales sin autorización |

Complementa [Prompts con imágenes](/prompts/prompting-with-images/): esa página trata la **entrada** de imágenes; esta, la **salida**.

## Para qué sirve la generación de imágenes

Encaja mejor en:

- Sacudir rápido una dirección
- Ayudarte a ver un concepto visual
- Dar a artículos, docs o prototipos un boceto usable primero

Estos usos no encajan con tomar el resultado generado tal cual:

- Hacer pasar por material de marca oficial
- Hacer pasar por diseño preciso de entrega
- Hacer pasar por visual final publicable al exterior

## Flujo de trabajo recomendado

1. Indica uso, proporción de tamaño, palabras clave de estilo (evita apilar nombres de estilos que infrinjan derechos)
2. Exige formato de salida (PNG/SVG si está soportado) y ruta de guardado
3. Tras generar, [Verificar artefactos](/guide/quality/verify-artifacts/): abrir el archivo, comprobar resolución y legibilidad
4. Antes de publicar al exterior, revisión de diseño o legal

## Malentendidos habituales

### 1. ¿Si la imagen se ve bien, ya se puede usar?

También hay que mirar:

- Si el escenario encaja con el uso
- Si hay detalles raros
- Si el texto sale corrupto
- Si el estilo encaja con tu contenido

### 2. ¿Basta con «genera una imagen»?

A menudo no.  
Hay que aclarar al menos:

- Uso
- Formato horizontal/vertical/cuadrado o proporción
- Dirección de estilo
- Si debe haber texto
- Formato de archivo

### 3. ¿La generación de imágenes sustituye al diseñador?

Se acerca más a:

- Herramienta de exploración temprana
- Herramienta de imagen de acompañamiento de contenido
- Herramienta de boceto conceptual

No a un sustituto de la entrega de diseño estricta.

## Cómo formularlo

Puedes pedir con esta estructura:

1. Para qué sirve la imagen
2. Si necesita horizontal, vertical o cuadrada
3. Qué atmósfera y color quieres
4. Si debe aparecer texto
5. Cómo vas a verificar tras la salida

## Archivos y repositorio

- Imágenes grandes en `assets/` o CDN; evalúa el volumen de Git
- En el PR, indica el prompt de generación y la versión del modelo (auditoría interna)
- Ver [Imágenes y capturas](/guide/files-and-artifacts/images-and-screenshots/)

## Seguridad y cumplimiento

- No generar contenido engañoso con identificadores sensibles, documentos falsos o retratos ajenos
- La política empresarial puede prohibir ciertos temas; cumple el [uso aceptable](https://openai.com/policies/) y las normas internas

## Referencias
- OpenAI Help Center: Images in ChatGPT
- OpenAI Academy: Creating images with ChatGPT
## Errores frecuentes

- Hacer commit de imágenes 4K sin comprimir
- Usar imágenes generadas como si fueran foto real o logo oficial
- No restringir «sin texto» en el prompt y obtener subtítulos corruptos

La generación de imágenes encaja mejor para dirección y borradores primero; en la entrega externa, sigue aceptando con el estándar de artefacto formal.

---

**Estado:** verificado  
**Productos aplicables:** App / Cloud (según versión)  
**Base de verificación:** Revisado con material oficial de OpenAI sobre generación y edición de imágenes respecto a escenarios, forma de escribir prompts y límites de aceptación; el cuerpo conserva la conclusión prudente de «prioridad al borrador; el artefacto formal necesita revisión».  
**Última verificación:** 2026-07-26
