---
title: Imágenes y capturas
description: Proporciona capturas y diseños a Codex, y gestiona archivos de imagen en la tarea.
locale: es
source_locale: zh-CN
source_revision: b5ab733
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 20
---

Las imágenes permiten al Agent **ver** problemas de interfaz, intención de diseño o bocetos de pizarra. Esta página cubre la entrada (imágenes que aportas) y la gestión de archivos de imagen en el repositorio; para generar imágenes nuevas, ver [Generación de imágenes](/es/guide/tools/image-generation/).

Al encargar una tarea con capturas, conviene que sepa dónde mirar y por qué ahí hay un problema.

## Contenido de esta página

- Cómo adjuntar capturas de la forma más eficaz
- Cómo usar exportaciones de diseño / Figma
- Problemas de tamaño de imagen en el repositorio y el contexto

## Escenarios de entrada de imagen

| Escenario | Enfoque |
|---|---|
| Bug de UI | Captura + texto que marque la zona anómala |
| Fidelidad al diseño | Exportar PNG + indicar breakpoints y biblioteca de componentes |
| Pizarra de arquitectura | Foto nítida o exportación + leyenda |
| Ventana de error | Incluye el texto completo del error; evita cortar solo una esquina |

Profundidad: [Prompt con imágenes](/es/prompts/prompting-with-images/)

## Qué aporta realmente la imagen

Lo más valioso de una imagen es mostrar lo que cuesta describir solo con texto, por ejemplo:

- Cómo está torcido el layout
- Hasta dónde se aprieta el botón
- Qué dice exactamente el diálogo

Pero la imagen sola no le dice automáticamente a Codex:

- Qué bloque te importa más
- Cómo quieres que lo cambie
- Si es la «situación actual» o el «efecto objetivo»

Por eso la imagen suele ir acompañada de una frase directa.

## Requisitos de calidad

- **Resolución**: texto legible; evita miniaturas borrosas
- **Recorte**: quita escritorio ajeno y datos sensibles de la barra de notificaciones
- **Anotaciones**: flechas/círculos sirven, pero repite el punto clave en texto
- **Varias imágenes**: súbelas emparejadas «actual / esperado»

## Malentendidos habituales

### 1. Enviar una captura no significa que entienda el problema solo

La captura aporta evidencia visual, pero conviene añadir:

- Dónde está el problema
- Cómo quieres cambiarlo
- Cuál es la actual y cuál el objetivo

### 2. Cuanto más grande y nítida, no siempre mejor

Una original demasiado grande trae dos problemas:

- Demasiada información irrelevante
- Más peso en el repositorio o el contexto

### 3. Solo enviar el diseño aún no basta

Si es «implementar según la imagen», añade también:

- Requisitos de breakpoints
- Restricciones de componentes
- Dónde se puede improvisar y dónde no

## Imágenes en el repositorio

| Práctica | Motivo |
|---|---|
| Directorio unificado `assets/` o `docs/images/` | Más fácil de mantener |
| WebP / compresión | Controlar el tamaño del clone |
| Nombres con sentido | `login-form-mobile.png`, no `image1.png` |
| Texto alt (en documentos) | Accesibilidad |

## Forma de escritura aplicable directamente

Puedes escribir:

```text
La primera imagen es la página actual; la segunda es el efecto esperado.
Céntrate en el área del título de la primera pantalla y el espaciado de los botones.
No adivines lógica de negocio a partir de la captura; solo trata lo visual y el layout.
```

## Privacidad y seguridad

- Las capturas pueden contener datos de clientes, URLs internas, tokens — enmascáralos primero
- No envíes pantallas de configuración con secretos a tareas no confiables
- [Contexto sensible](/es/guide/context/sensitive-context/)

## Referencias
- OpenAI Help Center: ChatGPT Image Inputs FAQ
- OpenAI Academy: Working with files in ChatGPT
- OpenAI API Developer Quickstart: Analyze images and files
## Aceptación

Para tareas del tipo «implementar según la imagen»:

1. Compara en paralelo implementación y referencia (o abre la página con la [herramienta de navegador](/es/guide/tools/browser/))
2. Comprueba responsive y modo oscuro (si se exige)
3. [Verificar artefactos](/es/guide/quality/verify-artifacts/)

## Errores habituales

- Solo dar el diseño sin explicación de interacción
- Hacer commit de originales 4K
- Asumir que el modelo puede leer un enlace de Figma sin exportar

Una buena captura no es solo «hay imagen». Imagen clara, foco claro y expectativa clara: así la tarea se hace bien con más facilidad.

---

**Estado:** verificado  
**Productos aplicables:** App / Cloud  
**Base de verificación:** Contrastado con materiales oficiales de OpenAI sobre entrada de imágenes y subida de archivos respecto a subida de capturas, marcado de focos, tamaño de archivo y privacidad; el cuerpo no conserva pasos de interfaz concretos que haya que contrastar versión a versión.  
**Última verificación:** 2026-07-26
