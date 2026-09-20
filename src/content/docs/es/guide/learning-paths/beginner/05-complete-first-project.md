---
title: Completar el primer proyecto pequeño
description: Entrega el aviso, la revisión y el registro de recuperación; no te limites a escribir impresiones sobre lo aprendido.
contentType: path
audiences:
- beginner
level: beginner
editorialStatus: review
sidebar:
  order: 50
verification:
  kind: editorial
  checkedAt: '2026-09-18'
  summary: Se completaron los materiales fijos y la referencia del autor; se ejecutó el script de operaciones con archivos en un directorio temporal, pero aún no se han hecho pruebas independientes con un modelo o lectores.
  evidence:
  - label: Registro de operaciones con archivos del autor
    href: /downloads/first-project/validation/record.json
prev:
  link: /es/guide/learning-paths/beginner/04-review-results/
  label: Revisar resultados
next:
  link: /es/cases/analyze-a-spreadsheet/
  label: Continuar con el informe semanal de ventas
locale: es
source_locale: zh-CN
source_revision: cc1139b
translation_status: draft
translated_at: '2026-09-20'
---

## Requisitos previos

El aviso ha pasado una revisión punto por punto, facts.md y private-note.md no han cambiado, y records contiene tu propio registro de revisión.

## Practica una recuperación

1. Copia toda la carpeta `work` a una nueva carpeta `backup-final` y comprueba que están los tres archivos.
2. Haz otra copia en una carpeta nueva `recovery-drill`. Solo en esta copia de práctica, cambia notice.md por una «versión errónea para el ejercicio de recuperación». Mantén intacta la carpeta work real.
3. Abre el archivo de práctica para comprobar que realmente cambió y, después, sobrescríbelo con el notice.md correcto de backup-final.
4. Compara, uno por uno, los tres archivos de recovery-drill con los de la copia de seguridad para comprobar que su contenido coincide. Confirma también que work no ha cambiado.

Basta con un gestor de archivos y un editor. Primero comprueba que la ruta de destino es la copia de práctica. Si ya existe una carpeta con el mismo nombre, elige otro para no sobrescribir contenido. Si no puedes confirmar el resultado de la recuperación, deja constancia de «sin confirmar» en el registro.

## Guarda un resultado que puedas entregar

Copia `templates/handoff.md` a records. Completa según lo ocurrido la versión del cliente, los archivos finales, las fuentes, las pruebas de revisión, el método de inscripción pendiente y el resultado de la recuperación. Guarda las instrucciones que usaste para poder sustituir los materiales la próxima vez.

La entrega incluye el notice.md final, el facts.md original, tus propios review.md y handoff.md y las instrucciones reutilizables. Son archivos didácticos; no autorizan una publicación real.

## Qué cuenta como terminado

El aviso está basado en hechos y no inventa lo desconocido; el alcance de los cambios es correcto; se han identificado los errores de la muestra defectuosa; has realizado y registrado el ejercicio de recuperación; y la entrega permite a otra persona encontrar las fuentes y asuntos pendientes. Escribir solo «tres tareas completadas» no demuestra el resultado.

El [registro de validación de operaciones con archivos](/downloads/first-project/validation/record.json) y el [script de reproducción](/downloads/first-project/validation/reproduce.py) del autor solo prueban el proceso de copia y recuperación de referencia en un directorio temporal. El ejercicio principal no requiere Python y estos registros no sustituyen tu práctica real.

Continúa con el [informe semanal de ventas](/es/cases/analyze-a-spreadsheet/) o la [ruta para creadores](/es/guide/learning-paths/creator/).

[Paquete de ejercicios e instrucciones de preparación](/es/guide/learning-paths/beginner/).
