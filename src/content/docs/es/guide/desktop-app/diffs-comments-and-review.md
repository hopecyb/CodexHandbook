---
title: Diferencias, comentarios y revisión
description: Antes de hacer commit o push, comprueba los cambios reales en el panel de revisión y deja comentarios por línea.
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE"
  checkedAt: "2026-08-26"
locale: es
source_locale: zh-CN
source_revision: "32ee40c"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 50
reviewed_at: 2026-10-25
---
El resumen de la conversación es la explicación de Codex sobre su trabajo; el diff de Git muestra lo que realmente cambió en los archivos. El panel de revisión de la aplicación de escritorio permite ver diferencias, añadir comentarios a líneas concretas y decidir qué cambios preparar, revertir, incluir en un commit o enviar.

El proyecto debe estar en un repositorio Git para usar el panel de revisión completo y `/review`.

## Dos niveles de revisión

Primero examina tú el alcance de los cambios. Después, invoca un reviewer independiente para buscar problemas de implementación:

1. Abre el panel de revisión y comprueba el número de archivos modificados y sus rutas.
2. Selecciona **Last turn** para ver exactamente lo que cambió en el último turno.
3. Alterna entre **Unstaged**, **Staged**, **Commit** y **Branch** para confirmar el alcance de la revisión.
4. Ejecuta `/review` en el área de entrada.
5. Elige entre comparar con una rama de referencia, revisar cambios sin commit, inspeccionar un commit concreto o aplicar criterios personalizados.
6. Lee los hallazgos por orden de prioridad y después decide cuáles corregir.

El reviewer de `/review` es de solo lectura de forma predeterminada y no modifica el árbol de trabajo. Si luego pides a Codex que corrija un hallazgo, siguen aplicándose las reglas originales de entorno aislado y aprobación.

## Criterios de revisión reutilizables

```text
Revisa los cambios actuales sin commit, con atención a:
- cambios fuera del alcance de la tarea;
- regresiones de comportamiento, casos límite o problemas de seguridad;
- cobertura de las rutas de fallo por las pruebas;
- coherencia entre la documentación y la implementación.

Enumera primero los problemas por gravedad. Para cada uno, indica archivo,
ubicación, evidencia y la menor corrección razonable.
Si no encuentras problemas, dilo expresamente e indica los riesgos de prueba
que sigan sin cubrirse.
```

## Reduce la ambigüedad con comentarios por línea

Sitúa el cursor sobre una línea sospechosa, selecciona el **+** que aparece y escribe una observación concreta. Cuando hayas dejado todos los comentarios, envía una instrucción clara:

```text
Resuelve los comentarios que dejé en las líneas. Mantén el alcance del cambio
al mínimo; después, vuelve a ejecutar las pruebas pertinentes y muestra
el nuevo diff.
```

Un comentario útil señala el riesgo o la condición de aceptación, por ejemplo: «¿Qué devuelve esto si el array está vacío?». Un simple «Esto está mal» normalmente no basta.

## Preparar y revertir cambios

El panel de revisión permite preparar, retirar de la preparación o revertir el diff completo, un archivo o un hunk concreto. Revertir descarta cambios. Antes de hacerlo, asegúrate de que no pertenecen al usuario y no estaban presentes ya al inicio de la tarea.

Sigue un orden de aceptación constante: alcance → comportamiento → pruebas → seguridad → mantenimiento. Encontrarás más métodos en [Revisar diferencias](/es/guide/quality/review-diffs/).

## Fuente oficial

- [Revisión de código](https://learn.chatgpt.com/docs/code-review)
