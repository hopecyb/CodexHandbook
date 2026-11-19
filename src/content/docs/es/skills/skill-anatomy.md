---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "El runtime actual de Codex sigue centrando las instrucciones del Skill en `SKILL.md` y permite ampliar con scripts y material de referencia bajo demanda; esta página se centra en la división de responsabilidades de directorios, sin atarse a entradas de producto volátiles."
  checkedAt: "2026-07-26"
title: Anatomía de un Skill
description: Roles de SKILL.md, references/, templates/ y scripts/, con ejemplos.
locale: es
source_locale: zh-CN
source_revision: 'c4b740a'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-25
---

La primera vez que abres un directorio de Skill, lo habitual es reconocer las carpetas… pero no entender por qué están organizadas así.

Esta página explica cómo separar «flujo principal, documentación larga, plantillas y scripts» para no meterlo todo en un solo archivo.

Así es más fácil leer, modificar y reutilizar, y menos probable que el contenido se enrede.


![Ilustración: una carpeta abierta como un archivador por capas, con la tarjeta de instrucciones arriba y cajones de referencias, plantillas y scripts debajo; el asistente carga solo la capa necesaria](/illustrations/skills-anatomy.webp)

## Estructura de directorios

```text
my-skill/
├── SKILL.md          # Obligatorio
├── scripts/          # Opcional: pasos deterministas
├── references/       # Opcional: documentación de referencia larga
└── templates/        # Opcional: plantillas de salida
```

## Qué hace cada capa

- `SKILL.md`: manual principal; primero dice a Codex «qué es, cuándo usarlo y en qué pasos»
- `references/`: armario de material largo; no mete todo el contexto de fondo en el archivo principal
- `templates/`: esqueleto de salida listo; evita improvisar cada vez
- `scripts/`: los pasos que pueden ejecutarse de forma determinista van al script, no solo a prosa

Al principio incluso basta con un `SKILL.md`.  
Cuando de verdad se complique, entonces separas `references/`, `templates/` y `scripts/`.

## Cargar según haga falta, no todo a la vez

Un Skill fácil de mantener suele tener tres capas:

| Capa | Contenido | Cuándo se usa |
|---|---|---|
| Metadatos | Nombre, descripción y situaciones de activación | Ayudan a Codex a decidir si usarlo |
| Instrucciones principales | Pasos obligatorios, prohibiciones y definición de terminado | Se leen primero al activar el Skill |
| Archivos auxiliares | Plantillas, referencias, scripts y ejemplos | Solo se abren o ejecutan cuando la tarea los necesita |

Así, la descripción de activación sigue siendo breve durante el trabajo normal y los detalles se cargan al ejecutar. La separación importa más a medida que crece el número de Skills.

## Ejemplo mínimo de SKILL.md

```md
---
name: pr-review
description: Revisa el diff de la rama actual frente a main; señala riesgos y huecos de pruebas. Úsalo cuando el usuario pida review, revisar un PR o comprobar antes de fusionar.
---

## Pasos
1. Obtener el diff respecto a main
2. Clasificar por archivo: errores lógicos, seguridad, rendimiento, pruebas
3. Emitir lista graduada: bloqueante / recomendación / nit
4. No hacer push ni fusionar automáticamente
```

## Errores frecuentes

### 1. Crear todos los directorios desde el principio

Muchos buenos Skills empiezan solo con un `SKILL.md`; los demás directorios aparecen al aumentar las reutilizaciones.

### 2. `references/` es solo para meter más contenido

Lo importante no es «meter más», sino aparcar la documentación larga que no debe ocupar siempre la atención del flujo principal, y leerla solo cuando haga falta.

### 3. Evitar `scripts/` siempre que se pueda

Si un paso debe ser estable, determinista y repetible, un script suele ser más fiable que describirlo una y otra vez en lenguaje natural.

## Responsabilidades por directorio

| Directorio | Uso |
|---|---|
| `SKILL.md` | Flujo principal, condiciones de activación, prohibiciones |
| `references/` | Documentos largos, normas y documentación de API |
| `templates/` | Formato de salida, esqueleto de informes |
| `scripts/` | Comandos y comprobaciones deterministas |

## Cuándo separar directorios

Decide con este orden:

1. ¿El flujo principal ya es demasiado largo para una primera lectura?
2. ¿Hay un bloque grande de material que no hace falta ver cada vez?
3. ¿Hay un formato de salida fijo que se repite?
4. ¿Hay un paso ya lo bastante estable para scriptizarlo?

Si uno o dos de estos puntos son «sí», empieza a separar.

## De plantilla a Skill

Muchos equipos no empiezan diseñando un Skill, sino copiando una y otra vez un prompt útil. Puede evolucionar por etapas:

| Etapa | Forma | Cuándo subir de nivel |
|---|---|---|
| prompt único | Conversación actual | Solo se usa una vez |
| Plantilla | Biblioteca de prompts o docs de equipo | La tarea se repite, pero los pasos aún cambian |
| Skill de un archivo | Un `SKILL.md` | El proceso es estable y el disparador claro |
| Directorio Skill completo | `SKILL.md` + `templates/` + `references/` + `scripts/` | Formato de salida, referencias largas y checks deterministas ya son estables |

No conviertas cada plantilla en Skill. Vale la pena cuando hay repetición, criterios de éxito claros y acuerdo del equipo.

## Componentes reutilizables habituales

| Componente | Sirve para |
|---|---|
| Instrucción principal | Disparadores, pasos, prohibiciones, definición de finalización |
| Plantillas | Salida de revisión PR, estructura de documento, informe de riesgo |
| Referencias | Estándares de código, glosario, reglas de dominio, notas API |
| Scripts | Análisis de complejidad, comprobación de enlaces, estadísticas de cobertura y validación de formato |

Un buen Skill no es un prompt más largo: separa trabajo reutilizable en partes legibles, comprobables y mantenibles.

Primero haz funcionar el Skill con `SKILL.md`; cuando se complique de verdad, saca poco a poco material, plantillas y scripts.

Práctica completa: [Crear tu primer Skill](/es/skills/create-your-first-skill/).
