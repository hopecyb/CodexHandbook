---
title: Preferencias personales
description: Configuración de usuario, modelo por defecto y hábitos de interfaz — sin contaminar las convenciones del equipo en el repositorio.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Las **preferencias personales** son ajustes de tu máquina que valen entre proyectos: modelo por defecto, tema, hábitos de aprobación, rutas de Skills personales, etc. A diferencia de `AGENTS.md` en el repositorio, las preferencias personales **no** deben asumir que los compañeros tienen las mismas.

## Contenido

- Qué va en la capa personal y qué en la de proyecto
- Cómo combinarlas con [Profiles](/guide/customization/configuration/profiles/) para cambiar de escenario
- Evitar que ajustes personales demasiado permisivos se filtren al repositorio del equipo

Resumen de prioridad: [Personalización](/guide/customization/) · [Alcance y prioridad](/guide/customization/agents-md/scope-and-precedence/)

## Por qué hay que separar esta capa

Mucha gente mezcla primero estas cosas:

- Cómo me gusta trabajar a mí
- Cómo exige trabajar este repositorio
- Cómo lo impone la empresa o el equipo

Si no se separan, después es fácil que pase:

- En tu máquina todo fluye, pero los compañeros no pueden reproducirlo
- Crees que la regla ya aplica, cuando en realidad solo te está cubriendo tu máquina
- Llevas ajustes permisivos a un proyecto más serio

## Contenido de equipo que no debe vivir solo en la capa personal

- Estilo de código, comandos de test, estructura de directorios → **`AGENTS.md` del proyecto**
- Política de Sandbox obligatoria → **configuración del proyecto o gestión de la organización**
- Requisitos de cumplimiento en repositorios de clientes → **documentación + CI**, no memoria personal

## Prácticas recomendadas

1. **Separa Profiles de trabajo / personales**: proyectos de cliente con Profile estricto; proyectos de práctica pueden ser más permisivos
2. **Al entrar en un repositorio nuevo, lee primero las reglas del proyecto**, y luego decide si conviene sobrescribir temporalmente tus valores por defecto
3. **Limpia con regularidad** MCP y Skills personales; elimina fuentes de terceros que ya no uses
4. Al cambiar de máquina o reinstalar, exporta un inventario de configuración (sin valores de secretos)

## Malentendidos habituales

### 1. Lo que te gusta en el día a día no siempre sirve como valor global por defecto

Si tus hábitos por defecto son bastante permisivos, en un proyecto de cliente o de equipo pueden no encajar.

### 2. ¿Preferencias personales y reglas de proyecto son casi lo mismo?

No.  
Las preferencias personales son «yo suelo hacerlo así»; las reglas de proyecto son «en este repositorio todos deberían intentar hacerlo así».

### 3. Que en tu máquina no haya problemas no basta para juzgar si el conjunto es razonable

Un criterio más adecuado:

- No contamina el repositorio
- No depende de valores por defecto que solo tú conoces
- Al pasar a un proyecto estricto no provoca daños colaterales

## Cómo decidir si va en la capa personal

Si no estás seguro de si un ajuste debe vivir en la capa personal, pregúntate:

1. ¿Es un hábito que solo me importa a mí?
2. ¿Afectará a que otros reproduzcan el resultado?
3. ¿Conviene llevarlo a todos los proyectos?

Si la 2 o la 3 apuntan a riesgo, no lo pongas a la ligera como valor global por defecto.

Las preferencias personales existen para que te resulte más cómodo trabajar, no para sustituir las reglas del equipo, ni para llevar ajustes permisivos a todos los proyectos.

## Relación con la función de memoria

Si el producto ofrece «memoria» o preferencias persistentes, ver [Memorias y contexto persistente](/guide/customization/memories-and-persistent-context/). La memoria encaja con hábitos estables; **las restricciones específicas del proyecto deben seguir basándose en archivos del repositorio**.

## Errores habituales

- Escribir API keys de la empresa en la configuración personal
- Aprobar automáticamente el shell de forma global mientras trabajas código de cliente
- Los compañeros clonan el repositorio y se quejan de que «las reglas no aplican» — nunca se hicieron commit

## Lista de verificación

- [ ] Puedes dar un ejemplo de cada capa: personal vs proyecto vs organización
- [ ] Has configurado al menos un Profile estricto para un proyecto de cliente
- [ ] No hay secretos personales dentro del repositorio

---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE  
**Base de verificación:** Contrastado con los capítulos ya verificados de este manual sobre instrucciones de proyecto, Profiles, reparto de ajustes y límites de seguridad; esta página solo explica el principio estable de estratificación «los hábitos personales no deben contaminar las reglas del repositorio del equipo», sin convertir la UI de ajustes actual de un cliente concreto en un contrato fijo.  
**Última verificación:** 2026-07-26
