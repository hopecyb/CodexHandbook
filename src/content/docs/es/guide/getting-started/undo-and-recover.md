---
title: Deshacer y recuperar
description: Retrocede con seguridad cuando el resultado no convence.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
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

Equivocarse no es terrible. Seguir cambiando sin ver el alcance del Diff sí lo es.

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE  
**Base de verificación:** Se cruzó con los principios de inicio ya verificados de Aprobación, revisión de resultados, recuperación ante fallos y Git/árbol de trabajo; esta página solo confirma el método estable de «pausar, mirar el alcance, deshacer primero y luego recuperar un estado seguro», sin fijar la entrada de deshacer de un cliente concreto como contrato.  
**Última verificación:** 2026-07-26
