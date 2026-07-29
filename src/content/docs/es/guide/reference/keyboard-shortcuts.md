---
title: Atajos de teclado
description: Índice de aprendizaje de atajos habituales en App, TUI del CLI y extensión IDE — según la versión actual.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 90
---

Los atajos varían mucho según **cliente y versión**. Esta página los clasifica por **intención de operación**, para juzgar si hay una forma más rápida; la tecla concreta, en la ayuda o ajustes del producto.

No hace falta memorizarlos todos de golpe. Usar con fluidez los pocos que más interrumpen el ritmo ya ayuda mucho.

:::caution
La tabla siguiente es **esquemática**, no una tabla completa de bindings. Tras actualizar, las teclas pueden cambiar.
:::

## Índice de intenciones generales

| Intención | App de escritorio (esquema) | TUI del CLI (esquema) | Extensión IDE (esquema) |
|---|---|---|---|
| Nueva Tarea/sesión | `Cmd/Ctrl+N` o barra lateral | Salir y volver a entrar / comando de nuevo Hilo | Paleta de comandos «Codex» |
| Enviar mensaje | `Enter` / `Cmd+Enter` | Según el producto | Enviar en el panel |
| Nueva línea sin enviar | `Shift+Enter` | Según la TUI | Según el panel |
| Abrir paleta de comandos | Tipo `Cmd/Ctrl+K` | Comandos slash `/` | `Cmd/Ctrl+Shift+P` |
| Buscar historial | Búsqueda en la barra lateral | Búsqueda en la sesión (si existe) | Historial del chat |
| Aprobar llamada a Herramienta | Botón del panel | `y` / flechas (según la TUI) | Notificación o botón en línea |
| Rechazar | Botón del panel | `n` | Rechazo en línea |

**Prevalece la UI de la versión que tengas instalada.**

## Qué acciones priorizar

El valor de los atajos está sobre todo en reducir estos atascos:

- Querer enviar y tener que buscar el botón
- Querer nueva línea y enviar por error
- Querer Aprobar y hacerlo a trompicones
- Querer abrir una Tarea nueva y no saber la entrada

Más que memorizar el juego completo, conviene familiarizarse primero con estas 4 clases:

- Enviar / nueva línea
- Nueva Tarea
- Paleta de comandos
- Aprobar / rechazar

## Comandos slash vs teclado

- **Comandos slash**: `/review`, `/help`, etc. — véase [Comandos slash](/guide/reference/slash-commands/)
- **Atajos**: disparan una acción de UI sin escribir texto

Se pueden combinar: primero `Cmd+K` para enfocar la entrada, luego `/review`.

## Usuarios de terminal CLI

- Aprende **Ctrl+C** para interrumpir salida descontrolada (cuidado con interrumpir estado sin guardar)
- Multiplexor de terminal (tmux) en pantalla partida: Codex a un lado, `git diff` al otro
- Empaqueta `codex exec` habituales como alias de shell — véase [Comandos y atajos](/guide/cli/commands-and-shortcuts/)

## Malentendidos frecuentes

### 1. No hace falta dominar los atajos para empezar a usar

Usar con fluidez las pocas clases de acción que más se disparan ya baja mucho el coste.

### 2. Que otro los use con soltura no significa que tú seas torpe ahora

Los atajos son memoria muscular que se forma con la familiaridad, no un umbral de entrada.

### 3. No hace falta forzar las mismas teclas en todos los clientes

Más importante es saber:

- Si esa acción tiene atajo
- Dónde ver y cambiar bindings
- Qué acciones merecen priorizar

## Al empezar, familiarízate primero con estas

Al empezar:

1. Cómo enviar
2. Cómo hacer nueva línea sin enviar
3. Cómo abrir la paleta de comandos
4. Cómo Aprobar o rechazar
5. Cómo abrir una Tarea nueva

Con esas 5 fluidas, el resto de atajos se puede ir completando al usar.

## Usuarios de IDE

- Vincula «explicar el código seleccionado con Codex» a una tecla cómoda
- Combínalo con el diff nativo del editor y «ir a definición» para menos copiar y pegar

[Ajustes del IDE](/guide/ide/settings/) · [Código seleccionado y archivos abiertos](/guide/ide/selected-code-and-open-files/)

## Accesibilidad y personalización

La mayoría de clientes permiten cambiar bindings en ajustes. El equipo puede documentar **bindings recomendados**, sin exigir que todos coincidan.

Los atajos no son materia de examen. Usar con fluidez los pocos que más te interrumpen suele bastar.

## Fuentes de referencia
- Páginas oficiales de Settings / Keyboard shortcuts de cada producto
---

**Estado:** outdated  
**Productos aplicables:** App / CLI / IDE  
**Nota de revisión:** Aunque declara varias veces «esquema», el cuerpo sigue incluyendo supuestos de atajos actuales, forma de envío, paleta de comandos y teclas de Aprobación; dependen mucho de versión y plataforma, y falta documentación oficial unificada de atajos lo bastante sólida.  
**Última verificación:** 2026-07-26
