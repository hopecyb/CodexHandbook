---
title: Aceptación de artefactos generados
description: Aceptación sistemática de archivos, informes y salidas de build nuevos o exportados por Codex.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Al completar una tarea, el Agent puede crear informes, scripts, sitios estáticos, datos de test y otros **artefactos generados**. No siempre pasan por la ruta de revisión de código que conoces, así que hace falta un hábito de aceptación aparte.

Que el archivo lo haya generado Codex de nuevo no significa que ya se pueda usar directamente.

## Contenido de esta página

- Diferencias de aceptación entre artefactos generados y «cambiar código existente»
- Checklist
- Cuándo rechazar y pedir rehacer

## Tipos de artefactos

| Tipo | Foco de aceptación |
|---|---|
| Scripts `.sh` `.py` | Ejecutable, inocuo, idempotente |
| Informes `.md` `.html` | Hechos exactos, enlaces válidos |
| Salida de build `dist/` | Si debe ir en gitignore |
| Fixtures de test | Sin PII real |
| Plantillas de configuración | Sin contraseñas débiles por defecto |

## Qué son aquí los «artefactos generados»

Aquí «artefacto generado» es:

- Archivos que escribió de nuevo por ti
- Informes que exportó por ti
- Páginas, directorios o paquetes que construyó por ti

No es lo mismo que «solo cambió unas líneas de código existente», porque es más fácil que ignores el contenido real.

## Flujo de aceptación

```text
1. Abrir el artefacto (no te quedes solo con el resumen textual del Agent)
2. Contrastar con la «definición de hecho» de la tarea
3. Ejecutar tests o comandos de vista previa relacionados
4. Revisar rutas, permisos, tamaño
5. Decidir: aceptar / modificar en parte / descartar y rehacer
```

Método: [Verificar artefactos](/guide/quality/verify-artifacts/), [Definición de hecho](/guide/quality/definition-of-done/)

## Malentendidos habituales

### 1. Aunque diga «terminado», hay que mirar el artefacto real

El resumen solo te dice «qué cree que hizo»; no sustituye abrir el archivo y confirmar «cómo es el artefacto real».

### 2. Un archivo nuevo no es necesariamente más seguro que cambiar uno viejo

Un archivo nuevo también puede tener:

- Contenido incorrecto
- Dependencias de más
- Filtración de información
- Archivos grandes que no deberían entrar al repositorio

### 3. Que «corra» no significa que merezca commit

Algunos artefactos solo sirven de forma temporal en local; no encajan en Git.

## Relación con Git

- Deja claro qué artefactos **deben hacerse commit** y cuáles deben ir en `.gitignore`
- Evita mezclar en un PR megabytes de caché de build
- Artefactos grandes: CI artifact o almacenamiento externo

## Orden habitual de aceptación

Si acabas de recibir un lote de artefactos, puedes mirarlos en este orden:

1. Confirma qué archivos se generaron
2. Abre el artefacto más crítico
3. Mira si cae en un directorio permitido
4. Mira si debería hacerse commit al repositorio
5. Luego decide aceptar, modificar o rehacer

## Artefactos no confiables

En tareas impulsadas por repositorios o datos externos no confiables:

- Lee el script antes de ejecutarlo
- Desconfía de `curl | bash` y payloads ofuscados
- Previsualiza en Sandbox o contenedor

Un artefacto no basta con «ya se generó». Al menos hay que abrirlo, verificarlo y saber si debe hacerse commit.

## Errores frecuentes

- Solo mirar el bullet summary del Agent sin abrir archivos
- Hacer commit en main de salidas de depuración de un solo uso
- Informes HTML con píxeles de seguimiento o scripts externos no revisados

## Checklist de aceptación

- [ ] La ruta de cada archivo nuevo está en el alcance permitido
- [ ] Se abrió y se ojeó el contenido principal
- [ ] Las comprobaciones automáticas (lint/test/link check) ya se ejecutaron
- [ ] Sin secrets ni directorios generados de más

## Referencias

- [Gestionar la incertidumbre](/guide/quality/handle-uncertainty/)
- Requisitos de aceptación de casos en external-source-integration

---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Contrastado con los capítulos ya verificados de este manual sobre verificar artefactos, definición de hecho, gestionar la incertidumbre y archivos/artefactos; esta página se centra en el método estable de aceptación «generar ≠ entregable, hay que abrir y aceptar, y dejar claro si debe hacerse commit».  
**Última verificación:** 2026-07-26
