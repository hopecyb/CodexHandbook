---
title: Plantilla de diagnóstico
description: Localizar primero la causa raíz y luego hablar de la corrección.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Plantilla de diagnóstico

El error habitual en diagnóstico es decir «primero investiga» y, en la práctica, dejar que corrija ya.

Esta plantilla separa «encontrar la causa» de «arreglar».

## Plantilla

```text
Fenómeno: 【mensaje de error, test fallido, informe de usuario】
Contexto: 【cambios recientes, entorno, pasos de reproducción】
Entradas: @【logs/tests/código relacionado】
Restricciones: no cambies código todavía; lista 2–3 causas raíz posibles y cómo verificarlas.
Salida:
1. Causa raíz más probable (con evidencia)
2. Pasos de verificación ejecutables (comandos o checkpoints)
3. Si la verificación pasa, borrador del plan de corrección (espera mi confirmación antes de ejecutar)
```

## Cuándo usarla

- El bug aún no está localizado
- Los tests fallan y no sabes qué capa se rompió
- Sospechas complejidad y no quieres que adivine la corrección

## Ideas erróneas habituales

### 1. Diagnosticar es lento; mejor cambiar ya

Mucho retrabajo viene de saltarse el diagnóstico.

### 2. ¿Listar 2–3 causas posibles es demasiado verboso?

No: ayuda a ver si está adivinando.

La plantilla de diagnóstico exige primero explicar por qué se rompe y luego cómo cambiarlo.

## Relacionado

- [Diagnosticar antes de corregir](/cases/workflows/diagnose-before-fixing/)
- [Caso: corregir un bug](/cases/fix-a-bug/)

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Esta página ofrece una plantilla de tareas de diagnóstico; se han revisado enlaces y estructura, y el cuerpo no depende de hechos volátiles del producto.
