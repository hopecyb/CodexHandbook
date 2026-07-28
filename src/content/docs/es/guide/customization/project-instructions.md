---
title: Instrucciones del proyecto
description: Contexto a nivel de proyecto más allá de AGENTS.md — cómo se reparten README, docs y referencias en la conversación.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Las «instrucciones del proyecto» son el **contexto estático** con el que Codex entiende el repositorio; no se limitan a un único formato de archivo.

## Contenido

- Además de `AGENTS.md`, dónde más debe vivir la información a nivel de proyecto
- Cómo repartir el trabajo entre README, docs y scripts
- Qué información encaja en el repositorio y qué solo en la conversación actual

## Componentes del contexto del proyecto

| Fuente | Función |
|---|---|
| `AGENTS.md` | Reglas de colaboración y comandos (autoridad: la serie AGENTS de este capítulo) |
| `README.md` | Qué es el proyecto y cómo arrancarlo |
| `docs/` | Arquitectura, ADR, runbooks |
| Dependencias y scripts | `package.json`, `Makefile`, etc. — la verdad ejecutable |

Codex combina herramientas para leer estos materiales; lo clave es que la **verdad sea única**: los comandos de arranque del README deben poder ejecutarse de verdad.

## Enfoque básico

1. Asegura que el `README.md` raíz tenga cuatro bloques: propósito, instalación, desarrollo, tests
2. Ancla en `AGENTS.md` las **explicaciones que le repites a Codex**
3. En la tarea, apunta con `@` a archivos concretos en lugar de pegar el texto completo:

```text
Según los requisitos de test de @AGENTS.md, corrige el null pointer en @src/auth/login.ts.
El diseño relacionado está en @docs/auth-flow.md
```

## Por qué importa

Situaciones habituales:

- El README dice una cosa
- docs dice otra
- Los comandos que realmente funcionan están escondidos en `package.json`

Entonces no solo se confunden las personas: también Codex. El objetivo es que la «verdad del proyecto» en el repositorio esté lo más concentrada y coherente posible.

## Reparto con el «contexto de conversación»

- **Instrucciones del proyecto**: relativamente estables a lo largo de meses
- **Contexto de conversación**: objetivo de esta vez, restricciones, conclusiones intermedias

Si en una tarea larga ves que una regla se menciona una y otra vez, **vuelve a escribirla** en `AGENTS.md` o `docs/`, en lugar de copiarla y pegarla en diez hilos. Ver [Mantener el contexto enfocado](/guide/context/keep-context-focused/).

## Errores habituales

- README desactualizado: Codex opera con comandos incorrectos
- Meter toda la documentación en un `CONTEXT.md` gigante que nadie mantiene
- Poner información sensible en la documentación pública del repositorio

## Malentendidos habituales

### 1. «Si lo explico bien en el chat, da igual que la documentación del repo esté desordenada»

A corto plazo puede valer; a largo plazo se degrada.

Porque la próxima vez tendrás que explicarlo otra vez, y los demás no ven lo que dijiste esta vez.

### 2. `AGENTS.md` resuelve todos los problemas de instrucciones del proyecto

Tampoco.

`AGENTS.md` encaja mejor con reglas y restricciones de colaboración; no sustituye la presentación del proyecto, el trasfondo de arquitectura ni la guía completa de ejecución.

### 3. Cuanta más documentación, mejor

Lo más importante es:

- Reparto claro
- Contenido coherente
- Comandos clave ejecutables

## Sugerencias de reparto

- `README.md`: qué es el proyecto, cómo arrancar, cómo testear
- `AGENTS.md`: reglas de colaboración, zonas prohibidas, definición de hecho
- `docs/`: trasfondo más largo, arquitectura, descripción de flujos
- Scripts y archivos de configuración: verdad ejecutable

El foco de las instrucciones del proyecto es que Codex y las personas encuentren más fácilmente la misma «verdad del repositorio». La cantidad de documentos no es el punto.

## Lista de verificación

- [ ] Quien clone el repositorio (o Codex) puede ejecutar los tests siguiendo README + AGENTS.md
- [ ] Los prompts de tarea se basan sobre todo en referencias `@`, evitando pegar trasfondos largos

---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Contrastado con las explicaciones públicas actuales de OpenAI Developers sobre contexto de proyecto y colaboración con archivos, y con los capítulos ya verificados de este manual sobre contexto de proyecto, archivos y flujos de trabajo; el contenido se limita al principio estable de reparto entre README, `AGENTS.md`, `docs/` y la conversación de la tarea.  
**Última verificación:** 2026-07-26
