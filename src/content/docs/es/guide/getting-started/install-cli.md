---
title: Instalar la CLI
description: Instala la línea de comandos de Codex y haz la comprobación básica.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Sigue las instrucciones oficiales de instalación de la CLI: [https://developers.openai.com/codex](https://developers.openai.com/codex) (suele ser un gestor de paquetes o un script oficial; prevalece la documentación actual).

Si ya usas el terminal a diario, la CLI te resultará más natural.  
En la primera instalación, los bloqueos más frecuentes suelen estar aquí:

- Cómo confirmar que no quedó a medias tras instalar
- Por qué el comando está instalado pero el terminal no lo encuentra
- Cuándo volver a PATH / autenticación en lugar de reinstalar

Que la CLI esté bien instalada depende sobre todo de si el terminal actual reconoce `codex` de forma estable.

## Comprobación tras la instalación

En el terminal ejecuta el comando de versión o de ayuda (el subcomando concreto lo marca la documentación oficial) y confirma:

- Que el comando se puede ejecutar
- Que puedes entrar en inicio de sesión o en un estado ya autenticado

## Malentendidos frecuentes

### 1. Tras instalar, cualquier ventana de terminal reconoce el comando al instante

A veces necesitas reabrir el terminal o confirmar que el `PATH` del shell actual ya se actualizó.

### 2. Ver «instalación correcta» en la salida implica que ya se puede usar

Lo que más conviene confirmar es si el entorno actual encuentra ese comando.

### 3. Todo problema de la CLI exige reinstalar

Muchas veces lo que hay que revisar es:

- `PATH`
- El shell actual
- El estado de inicio de sesión

## Cómo comprobar después de instalar

1. Confirma primero que el comando se ejecuta
2. Confirma después que la sesión actual puede iniciar sesión o ya está autenticada
3. Si aún falla, revisa la ubicación de instalación y el PATH

Con la CLI instalada, el terminal actual debería encontrarla y tú poder completar la autenticación.

Interacción detallada: [modo interactivo de la CLI](/guide/cli/interactive-mode/). Resolución de problemas: [resolución de problemas de la CLI](/guide/cli/troubleshooting/).


---

**Estado:** outdated  
**Productos aplicables:** CLI  
**Nota de revisión:** Aunque esta página evita a propósito comandos de instalación concretos, sigue asumiendo un ritmo actual de instalación de CLI, comprobación en terminal y autenticación; como cambian el método de instalación, las plataformas admitidas y el flujo de autenticación, no conviene marcarla como `verified` hasta completar las instrucciones oficiales más recientes.  
**Última verificación:** 2026-07-26
