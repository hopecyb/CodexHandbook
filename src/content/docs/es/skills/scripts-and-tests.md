---
title: scripts/ y pruebas
description: Añade scripts deterministas a un Skill y verifica su comportamiento.
locale: es
source_locale: zh-CN
source_revision: 5a7da46
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Al empezar un Skill, lo habitual es meterlo todo en `SKILL.md`. En flujos simples vale; pero cuando un paso debe ejecutarse de forma **estable, repetible y verificable**, un script es más fiable que solo prosa.

Las acciones fijas van al script; el juicio y el flujo de colaboración se quedan en el Skill.

# scripts/ y pruebas

Cuando un paso debe ejecutarse de forma determinista (correr pruebas, generar un diff, validar formato), ofrece el script en `scripts/` y explica en `SKILL.md` cuándo invocarlo.

## Ejemplo

```text
my-skill/
├── SKILL.md
└── scripts/
    └── run-checks.sh
```

## Cuándo considerar `scripts/`

Si un paso cumple cualquiera de estas, prioriza un script:

- Debe ejecutarse exactamente igual cada vez
- El código de salida en sí tiene sentido
- Describirlo en lenguaje natural sería muy verboso
- Quieres reutilizarlo después en CI u otras herramientas

Acciones como «correr comprobaciones», «generar diff», «validar formato» o «exportar un informe fijo» encajan en scripts.

## Sugerencias de prueba

- Ejecuta el script a mano en un repositorio de práctica y confirma código de salida y salida
- Dispara el flujo de extremo a extremo con el Skill y comprueba que llama al script como se espera
- En equipo: verifica en CI o pre-commit que el script sigue siendo usable

## Malentendidos habituales

### 1. Con scripts el Skill se complica, así que mejor no

Si el script fija un paso que antes era inestable, el conjunto suele volverse más simple.

### 2. Si el script corre en local, el Skill ya está bien

También hay que mirar:

- Si el Skill lo dispara correctamente
- Si la política de Aprobación lo bloquea
- Si sigue funcionando en el entorno del equipo o en CI

### 3. «Probar el Skill» es solo probar el script

No basta.

El script prueba una acción;  
el Skill también debe probar «cuándo llamarlo, cómo llamarlo y si la salida cumple lo esperado».

## Orden de verificación habitual

Al empezar, sigue este orden:

1. Ejecuta el script solo
2. Comprueba que el código de salida y la salida sean claros
3. Deja que el Skill ejecute una vez el flujo completo
4. Prueba otra vez en un entorno más cercano a la realidad

Así separas «el script está roto» de «la integración del Skill es incorrecta».

Las acciones que pueden repetirse de forma estable no deben depender solo de prosa. Primero haz correr el script; luego confirma que la llamada del Skill está bien.

Los scripts heredan la política de Aprobación actual; ver [Reglas de comandos](/es/guide/customization/rules/command-rules/) y [Seguridad de Skills](/es/skills/security/).
---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** El runtime actual de Codex permite que los Skills combinen scripts y comandos deterministas; esta página enfatiza el principio «acciones estables en script, el flujo lo sigue acotando el Skill», alineado con la capacidad actual.  
**Última verificación:** 2026-07-26
