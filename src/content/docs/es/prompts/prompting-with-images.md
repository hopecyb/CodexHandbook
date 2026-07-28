---
title: Prompts con imágenes
description: Cómo preguntar al dar a Codex capturas, diseños o fotos de pizarra para obtener resultados ejecutables.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Muchos fallos de «trabajar a partir de una imagen» no vienen de que el modelo no la vea, sino de dar solo la imagen **sin decir qué debe mirar en ella**.

Un Prompt con imagen debe ayudar a Codex a fijar tres cosas:

1. qué es esta imagen
2. dónde quieres que se centre
3. a qué tarea debe servir la salida final

## Escenarios adecuados para Prompts con imágenes

| Escenario | Papel de la imagen |
|---|---|
| Depurar un bug de UI | ver ubicación y estado anómalos |
| Fidelidad al diseño | referencia de layout, jerarquía, espaciado y ambiente |
| Explicar una captura en documentación | redactar instrucciones o tutoriales a partir de la UI |
| Ordenar pizarra / diagrama de flujo | convertir un dibujo a mano en descripción estructurada |
| Comparar actual vs. esperado | identificar diferencias en lugar de adivinar el requisito |

Si el foco está en «apariencia, posición, estado visual», la imagen suele ser más eficaz que un texto largo; si el foco está en «reglas de negocio», la imagen es sobre todo evidencia auxiliar.

## Estructura en cuatro bloques

Como en un Prompt de texto, mantén estructura:

### 1. Identidad de la imagen

Di qué es y de dónde viene.

Por ejemplo:

```text
Esta es una captura de la página de inicio de sesión en producción, desde iPhone 14 Safari.
```

### 2. Zona de atención

Indica dónde mirar; no te quedes en «busca el problema tú».

Por ejemplo:

```text
Céntrate en el espaciado entre el botón inferior y el campo de entrada, y en el cambio de layout cuando aparece el teclado.
```

### 3. Objetivo de la tarea

Di qué debe hacer: analizar, reproducir, cambiar código, escribir explicación, sacar una tabla comparativa.

Por ejemplo:

```text
Primero analiza las causas posibles; no cambies código todavía. Da 2–3 archivos de frontend más probablemente relacionados.
```

### 4. Formato de salida

Di qué resultado quieres; evita lo genérico.

Por ejemplo:

```text
Salida:
1. Lo que observas en la imagen
2. Causas posibles
3. Archivos que conviene revisar
4. Capturas que aún necesito aportar
```

## Tres plantillas habituales

### 1. Buscar el problema en la imagen

```text
Subo una captura de la página actual. Mira sobre todo la zona del marco rojo.
Describe primero la anomalía que observas y luego lista 2–3 causas posibles.
No modifiques el código todavía.
```

### 2. Implementar según la imagen

```text
Subo el diseño objetivo.
Resume a partir de esta imagen la estructura de la página, los componentes clave, los puntos responsive y el estilo visual.
Si pasas a implementar, prioriza estructura y jerarquía; no añadas funciones por tu cuenta.
```

### 3. Comparar actual vs. esperado

```text
Subiré dos imágenes: la primera es el efecto actual; la segunda, el esperado.
Compara diferencias en layout, jerarquía tipográfica, espaciado e indicios de interacción, y prioriza las correcciones.
```

## Qué texto conviene complementar para que mire con más precisión

La imagen suele carecer de contexto de ejecución; estas piezas ayudan:

- dispositivo o navegador
- si el estado incluye hover / focus / error
- posición de scroll de la página
- si es «efecto actual» o «efecto objetivo»
- si hay que respetar un design system existente

Una frase como «en Chrome de escritorio va bien; solo falla en iOS Safari» suele valer más que otra captura.

## Cómo dar varias imágenes

### Entrada por pares

Lo que mejor funciona:

- imagen actual
- imagen esperada

O bien:

- estado normal
- estado anómalo

No subas de golpe un montón de imágenes sin explicación y dejes que Codex adivine el orden.

### Da a cada imagen un rol

Por ejemplo:

```text
Imagen 1: efecto actual en escritorio
Imagen 2: efecto actual en móvil
Imagen 3: efecto objetivo del diseño
```

Así le cuesta menos ordenar las correspondencias.

## Errores más fáciles con imágenes

### Solo decir «hazlo según esto»

Codex intenta inferir todos los requisitos de la imagen y a menudo trata como obligatorios detalles que no te importan.

### Solo un recorte, sin contexto

El recorte muestra el punto del problema, pero no siempre la página, el estado, el responsive o si es un overlay.

### Tratar el diseño como especificación completa

El diseño expresa apariencia; no siempre origen de datos, condiciones límite ni lógica de interacción. Las reglas de negocio siguen necesitando texto.

### Creer que la imagen sustituye la aceptación

Aunque implementes según la imagen, al final hay que mirar la página real, el diff, los breakpoints y la usabilidad. La imagen es entrada, no resultado de aceptación.

## Cómo combinarlo con otras páginas

- Subir y gestionar archivos de imagen: [Imágenes y capturas](/guide/files-and-artifacts/images-and-screenshots/)
- Generar imágenes nuevas: [Generación de imágenes](/guide/tools/image-generation/)
- Formular la tarea completa: [Anatomía de una tarea](/prompts/task-anatomy/)
- Analizar antes de actuar: [Pedir un plan primero](/prompts/ask-for-a-plan/)

## Una experiencia práctica

Si quieres que Codex «mire la imagen como en una revisión de diseño», pídele primero **observar**, luego **juzgar** y al final **proponer**.

Por ejemplo:

```text
Primero describe solo lo que observas en la imagen; no saques conclusiones.
Después infiere la causa más probable.
Por último, propone la dirección del cambio.
```

Suele ser más claro que un «ayúdame a arreglarlo» y más fácil de continuar.

## Fuentes de referencia

- OpenAI Help Center: ChatGPT Image Inputs FAQ
- OpenAI Academy: Working with files in ChatGPT
- OpenAI API Developer Quickstart: Analyze images and files

---

**Estado:** verified  
**Productos aplicables:** App / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Se ha revisado la estructura, los escenarios y las precauciones de esta página según materiales oficiales de OpenAI sobre entrada de imágenes y subida de archivos; el cuerpo ya no depende de fuentes de escenarios no oficiales y no conserva detalles de interfaz que exijan contraste versión a versión.
