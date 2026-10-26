---
title: "Revisar resultados"
description: "Practica la detección de errores con un ejemplo fijo defectuoso y luego revisa tu propio aviso."
contentType: "path"
audiences: ["beginner"]
level: "beginner"
editorialStatus: "review"
sidebar:
  order: 40
verification:
  kind: "editorial"
  checkedAt: "2026-09-18"
  summary: "Ya están completos los materiales fijos y el resultado de referencia del autor. Se ejecutó el script de operaciones con archivos en un directorio temporal, pero aún no se ha realizado una prueba independiente con un modelo ni con lectores."
  evidence:
    - label: "Registro de operaciones con archivos del autor"
      href: "/downloads/first-project/validation/record.json"
prev:
  link: "/es/guide/learning-paths/beginner/03-give-clear-tasks/"
  label: "Dar tareas claras"
next:
  link: "/es/guide/learning-paths/beginner/05-complete-first-project/"
  label: "Completar tu primer proyecto pequeño"
locale: es
source_locale: zh-CN
source_revision: 'e426ec4'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-25
---

## Primero, examina un ejemplo con errores conocidos

Abre el [aviso erróneo preparado por el autor](/downloads/first-project/references/flawed-notice.md), compáralo con `facts.md` y anota cada frase incorrecta, el número de dato correspondiente y cómo corregirla. El ejemplo no es una salida del modelo ni demuestra que un prompt determinado tenga que fallar.

No relajes deliberadamente los permisos de tu directorio de trabajo real para provocar cambios fuera de alcance. El ejemplo fijo ya sirve para practicar la detección de errores y comparar los resultados repetidamente.

## Después, revisa tu propio resultado

Copia `templates/review.md` del paquete a una carpeta nueva llamada `records` fuera del directorio de trabajo y completa cada punto:

- ¿Son correctos la hora, el lugar, el aforo, el coste y los preparativos?
- ¿Sigue sin conocerse el método de inscripción y respaldan los números de dato el texto?
- ¿Se cambió solo notice.md? ¿Siguen iguales los datos y la nota originales?
- ¿Se crearon o borraron archivos adicionales o se envió algo fuera?

Marca los puntos desconocidos como «no comprobados»; no los des por correctos solo porque el modelo diga «terminado».

## Criterios de finalización

Señala de manera independiente los cuatro errores de hecho del ejemplo y luego consulta la [clave de revisión](/downloads/first-project/references/review-key.md): la hora de finalización, el número de asistentes, un método de inscripción inventado y la conversión de traer un libro voluntariamente en una obligación. Si tu aviso tiene problemas, corrígelos y vuelve a comprobarlo.

Guarda el registro de revisión que realmente completaste; no copies la referencia del autor como prueba de haber terminado. Relacionado: [Revisar diferencias](/es/guide/quality/review-diffs/).

[Paquete del ejercicio y preparación](/es/guide/learning-paths/beginner/)
