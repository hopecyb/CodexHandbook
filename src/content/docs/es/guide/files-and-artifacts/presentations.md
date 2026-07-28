---
title: Presentaciones
description: Generar, revisar y exportar diapositivas y guiones — convenciones de estructura, plantilla maestra y notas del orador.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Las presentaciones (PPT, Keynote, Google Slides, Marp/Reveal, etc.) priorizan la **estructura narrativa** y la **consistencia visual**. El Agent destaca en esquemas y borradores; la plantilla maestra y las normas de marca siguen necesitando supervisión humana.

Al usar Codex para una presentación, lo más valioso es montar primero estructura, orden de páginas y lógica del relato; el cierre final del entregable sigue siendo tuyo.

## Contenido de esta página

- Flujo recomendado al hacer diapositivas con Codex
- Criterios entre formatos (`.pptx`, diapositivas Markdown)
- Cómo evitar «cada página con un estilo distinto»

## Fija primero el formato de entrega

| Formato | Adecuado para |
|---|---|
| Marp / Slidev / reveal.md | Desarrolladores; amigable con control de versiones |
| `.pptx` | Informes de negocio; compartir con clientes |
| Google Slides | Colaboración en tiempo real (a menudo vía exportación o MCP) |
| Exportación PDF | Distribución de solo lectura |

Fija el formato al inicio de la tarea para evitar que el Agent mezcle varias cadenas de herramientas.

Elige según a quién entregas:

- Cliente, jefe o colegas que abren y editan directamente: suele ser `.pptx`
- Versionar junto con el código: suelen ser diapositivas Markdown
- Solo versión de lectura: suele exportarse finalmente a PDF

## Flujo de trabajo recomendado

```text
1. Esquema: audiencia, duración, 3–5 mensajes clave
2. Título de cada página + 3 bullets; puntos del guion en notas
3. Elegir herramienta y generar el borrador
4. Ajuste humano de plantilla, gráficos y procedencia de datos
5. Exportar PDF y ensayar con cronómetro
```

Alineado con [Explorar—planificar—ejecutar—verificar](/cases/workflows/explore-plan-execute-verify/): en la fase de esquema, acepta primero y luego rellena el detalle.

## Por qué conviene controlar primero la estructura

Sin controlar la estructura, Codex tiende a llenar muchas páginas, pero el contenido también suele:

- Tener el orden revuelto
- Descontrolar el número de páginas
- Que cada página parezca un cartel independiente, no el mismo informe

Avanzar en estas 3 capas suele ser más estable:

1. Fija primero «qué debe dejar claro esta presentación»
2. Luego «qué mensaje clave lleva cada página»
3. Solo al final deja que el Agent rellene copy, notas de gráficos y notas del orador

## Malentendidos habituales

### 1. ¿Un PPT más florido equivale a expresión más fuerte?

A menudo, lo que de verdad afecta a la comprensión es:

- Si el título dice el punto clave en una frase
- Si hay relación de avance entre páginas
- Si los datos tienen fuente

### 2. ¿Si el Agent puede generar el borrador entero, ya no hace falta supervisión humana?

Tampoco.  
Estas partes conviene revisarlas siempre a mano:

- Marca y plantilla de la empresa
- Conclusiones clave
- Números y gráficos
- Versión que se envía al exterior

### 3. ¿Cuanto más llena una página, más completa parece la información?

Suele ser más difícil de explicar.  
Si una página mete demasiados bullets, figuras y conclusiones, al público le cuesta agarrar el foco de golpe.

## Orden habitual de producción

Si quieres que Codex te ayude ya con una presentación, puedes pedir en este orden:

1. Di primero quién es la audiencia
2. Luego la duración de la charla
3. Luego los 3 puntos que quieres que se lleven
4. Pide primero el esquema
5. Tras confirmar el esquema, que desarrolle cada página
6. Al final, notas del orador, requisitos visuales y formato de exportación

Con ese orden suele ser más fácil cerrar: primero estructura, luego copy, al final estilo.

## Puntos clave del Prompt

- **Audiencia**: colegas técnicos vs. dirección — decide la profundidad del léxico
- **Tope de páginas**: evita 80 páginas de relleno
- **Marca**: color principal, ruta del logo, prohibir clipart (si la empresa tiene norma)
- **Gráficos de datos**: indica el archivo fuente; pide actualizables, no inventar capturas

También puedes formular el requisito con este tono:

> «Primero un esquema de ≤10 páginas; audiencia: dirección no técnica; cada página solo una conclusión clave; al final añade notas del orador.»

Ese tipo de pedido suele producir versiones más fáciles de seguir puliendo que «haz un PPT impresionante».

Necesidades de imagen: [Imágenes y capturas](/guide/files-and-artifacts/images-and-screenshots/); solo generación de imagen: [Generación de imágenes](/guide/tools/image-generation/).

## Aceptación

- Tamaño de tipografía legible a resolución de proyección
- Animación moderada (demasiada es difícil de mantener)
- Números alineados con [Validar fuentes](/guide/quality/validate-sources/)
- Si las notas del orador bastan (si hacen falta)

## Qué conviene dejar a Codex y qué conviene decidir tú

| Más adecuado para Codex | Mejor supervisión humana |
|---|---|
| Dividir el esquema en páginas | Redacción final de la conclusión |
| Borrador de títulos de página | Consistencia de marca |
| Borrador de notas del orador | Datos sensibles |
| Copy de explicación de gráficos | Versión de publicación externa |

Esa división suele ahorrar tiempo y facilita sujetar la calidad al final.

## Errores frecuentes

- Sin esquema, pedir directamente «haz un PPT del informe trimestral»
- Editar a mano el binario `.pptx` una y otra vez sin conservar la fuente Markdown
- Datos de gráficos inconsistentes con el CSV del repositorio
- Pedir de una vez que el Agent decida estructura, diseño, conclusiones y criterio de datos

## Checklist de aceptación

- [ ] El esquema lo confirma una persona antes de generar el texto completo
- [ ] Se abre en el entorno de reproducción objetivo sin tipografía rota
- [ ] Los datos clave se pueden rastrear hasta el archivo fuente

---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Contrastado con los capítulos ya verificados de este manual sobre artefacto primero, validar fuentes, imágenes y capturas, verificar artefactos, etc.; el contenido se limita al método estable de trabajo con presentaciones «primero estructura, luego copy, al final estilo y exportación».  
**Última verificación:** 2026-07-26
