---
title: Deshacer y recuperar
description: Retrocede con seguridad cuando el resultado no convence.
locale: es
source_locale: zh-CN
source_revision: 5e7a06e
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 100
legacyVerification:
  status: verified
  products: App / CLI / IDE
  basis: Contrastado con los apartados verificados de introducción a aprobaciones, revisión del resultado, recuperación de fallos y Git/árbol de trabajo. Esta página solo describe el método estable «pausar, comprobar el alcance, preferir deshacer y recuperar un estado seguro», sin fijar como contrato el control de deshacer de ningún cliente.
  checkedAt: '2026-07-26'
---

La primera vez que usas Codex, la preocupación más habitual es: si se equivoca, ¿puedo volver atrás?

En la mayoría de los casos sí, pero conviene retroceder con un método seguro.

Cuando el resultado se sale del alcance o la calidad no sirve:

1. Usa la capacidad de deshacer / restaurar cambios del cliente (según la UI actual)
2. Si el proyecto está bajo Git: descarta los cambios del árbol de trabajo como sepas (los principiantes pueden no usar Git aún y apoyarse en el directorio de práctica)
3. Abre un Hilo nuevo, aprieta las restricciones y vuelve a intentarlo

Muchas veces, reducir el alcance de antemano ahorra trabajo: tocar pocos archivos, escribir prohibiciones claras, ver el plan antes de ejecutar.

## Distinguir «deshacer» y «recuperar»

- **Deshacer**: revertir el cambio reciente que no te convenció
- **Recuperar**: llevar el proyecto a un estado que confirmas seguro

Si practicas con un archivo pequeño, deshacer suele ser sencillo. Se complica cuando:

- Cambió más de un archivo
- Tú también editaste algo a mano después
- Ya no recuerdas qué parte cambió quién

Pausa primero las modificaciones siguientes y reduce el alcance del impacto.

## Orden al equivocarte la primera vez

1. Para de modificar; no dejes que siga cambiando más mientras estás en pánico
2. Confirma primero qué archivos tocó
3. Si el producto ofrece deshacer, úsalo primero
4. Si el proyecto ya está bajo Git, retrocede con el método de Git que conozcas
5. Cuando vuelvas a un estado seguro, da instrucciones más claras

## Si no dominas Git, empieza así

A muchos principiantes les asusta la palabra «recuperar», como si hubiera que dominar muchos comandos de Git. Al principio no hace falta.

Puedes hacer esto primero:

- Practica en el directorio de práctica
- Déjalo cambiar solo un archivo pequeño cada vez
- Si el resultado no convence, deshaz directamente

Cuando pases a proyectos formales, aprende el retroceso con Git de forma sistemática.

## Prevenir importa más que remediar

Estas prácticas bajan mucho la probabilidad de «equivocarse y no poder arreglarlo»:

- Escribe con claridad «solo modifica este archivo»
- Pídele primero un plan y luego ejecuta
- Revisa tras cada paso; no acumules muchos cambios para mirarlos juntos
- Confirma antes las operaciones de alto riesgo

## Usa puntos de recuperación para explorar

Recuperar no sirve solo para errores. También ayuda antes de explorar caminos alternativos.

Buenos momentos:

- Comparar dos rutas de implementación
- Pedir a un Agent una refactorización amplia
- Probar scripts de automatización o reemplazos masivos
- Sospechar que el requisito cambiará pronto

Una secuencia más segura es:

```text
Confirmar el estado seguro actual
→ Pedir a Codex que indique qué archivos afectará
→ Crear un punto de recuperación o comprobar el estado de Git
→ Ejecutar un cambio pequeño
→ Revisar el diff y los resultados de verificación
→ Conservar, revertir o probar otra opción
```

Si el cliente ofrece puntos de control o reproducción, puedes dar prioridad a esas funciones integradas. En un proyecto Git también sirven como punto de recuperación una rama, un stash o un commit pequeño. Lo importante no es memorizar un comando, sino no ampliar los cambios cuando aún no entiendes su alcance.

Equivocarse no es terrible. Seguir cambiando sin conocer el alcance dificulta mucho más la recuperación.
