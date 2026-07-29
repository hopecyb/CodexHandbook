---
title: Revisa el resultado
description: Lee los cambios, valida el artefacto y decide aceptar o modificar.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 90
---

Tras terminar la Tarea, muchos principiantes se saltan este paso.

Para usar Codex con más solidez, importa saber **revisar el resultado**.

No te quedes solo con «está hecho»: mira qué cambió de verdad y si el resultado es el que pediste.

## Lista de comprobación

1. **Mira el Diff**: ¿solo se modificaron los archivos permitidos?
2. **Abre el artefacto**: ¿el contenido cumple los criterios de aceptación?
3. **Pide una corrección**: si solo falta un poco, sigue con feedback preciso
4. **Decide**: aceptar / editar a mano / [deshacer](/guide/getting-started/undo-and-recover/)

Más métodos: [revisar diffs](/guide/quality/review-diffs/).

## Puntos que suelen pasarse por alto

### 1. Solo miras el resumen, no el cambio real

Codex puede escribir un resumen fluido, pero lo importante es:

- Si tocó el archivo equivocado
- Si cambió algo que no autorizaste
- Si el resultado cumple de verdad la aceptación

### 2. Ves «casi» y aceptas al momento

«Casi» deja agujeros pequeños después.  
Si solo falta un poco, mejor añade feedback preciso; no te conformes en silencio.

### 3. Ves que algo no encaja y no sabes cómo decirlo

Puedes continuar con frases como:

```text
El resultado se acerca, pero quedan dos problemas: 1) … 2) … Corrige solo esos dos puntos; no toques nada más.
```

## Orden de revisión

En la primera práctica, puedes revisar así:

1. **Alcance**: qué archivos cambió
2. **Resultado**: si la página, el documento o la salida de código cumplen
3. **Efectos secundarios**: si introdujo cambios de más o errores nuevos

En la aceptación, lo esencial es confirmar si este resultado se puede recibir con tranquilidad.

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE  
**Base de verificación:** Se cruzó con las secciones ya verificadas de revisar diffs, definir hecho y deshacer/recuperar; esta página se centra en el método estable de «mirar alcance, resultado y efectos secundarios, y luego decidir si recibirlo».  
**Última verificación:** 2026-07-26
