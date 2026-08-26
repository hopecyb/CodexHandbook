---
title: Temas de Codex
description: "Entiende qué es Codex Dream Skin, cómo instalarlo y cambiar fondos, por qué usa inyección CDP y qué límites de seguridad conviene revisar antes de usar temas."
locale: es
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-07-29
reviewed_at: 2026-08-26
source_revision: 8c0e360
---

# Temas de Codex

Cambiar la piel de Codex suena como un detalle para que se vea mejor, pero detrás hay una solución completa de temas para escritorio: mantiene las interacciones nativas de Codex, no modifica el paquete oficial e inyecta desde fuera el fondo, los colores y la atmósfera visual en la interfaz real.

## Qué es Codex Dream Skin

Codex Dream Skin es un proyecto open source para cambiar el aspecto de la app de escritorio de Codex. Coloca un fondo 16:9 detrás de Codex y se adapta automáticamente al modo claro u oscuro, la posición del foco y la paleta. La barra lateral, las tarjetas sugeridas, el selector de proyectos y el cuadro de entrada siguen siendo controles nativos interactivos.

![Codex Dream Skin aplica un fondo 16:9 a la pantalla inicial de Codex](/theme/codex-dream-skin/article/codex-dream-skin-home.jpg)

_Pantalla inicial real de Codex tras aplicar el tema; la barra lateral, las tarjetas y el cuadro de entrada siguen siendo controles nativos._

Es muy distinto de la antigua forma de modificar binarios para cambiar el aspecto:

| Enfoque | Modifica archivos oficiales | Rompe la firma | Controles nativos | Libertad de imagen |
| --- | --- | --- | --- | --- |
| Inyección CDP (Dream Skin) | No | No | Sí | Alta |
| Modificar `app.asar` | Sí | Sí | Parcial | Media |
| Modo claro/oscuro oficial | No | No | Sí | Ninguna |

Modificar `app.asar` era una práctica común: desempaquetar los recursos de Codex, cambiar CSS e imágenes y volver a empaquetar. El problema es que la firma deja de ser válida, cada actualización de Codex puede obligar a repetir el proceso y el software de seguridad puede bloquearlo.

La inyección CDP no modifica los binarios oficiales. Inyecta estilos y scripts desde fuera de Codex mediante un puerto de depuración, sin tocar `.app`, `app.asar` ni la firma de código.

Puede cambiar temas, cambiar fondos, guardar varias apariencias y restaurar el aspecto oficial con una acción.

No hace estas cosas:

- El instalador no escribe en silencio una API Key ni una Base URL de terceros; el tema y la configuración de relay se mantienen separados.
- No modifica el directorio oficial de instalación ni la firma.
- CDP solo se enlaza a `127.0.0.1`; mientras el tema esté activo, evita ejecutar programas locales de origen desconocido.

El proyecto declara que no es un producto oficial de OpenAI. Al elegir restaurar y desinstalar, Codex vuelve al aspecto oficial y la conexión CDP se corta.

Enlaces del proyecto:

| Tipo | URL | Uso |
| --- | --- | --- |
| GitHub del proyecto | [github.com/Fei-Away/Codex-Dream-Skin](https://github.com/Fei-Away/Codex-Dream-Skin) | Ver código fuente, README, issues y guías de instalación |
| Sitio del proyecto | [codex-dream-skin.org](https://codex-dream-skin.org/) | Leer descripción del proyecto, explicación técnica, límites de seguridad y tutoriales |
| Descargas | [GitHub Releases](https://github.com/Fei-Away/Codex-Dream-Skin/releases) | Descargar instaladores macOS `.dmg` y Windows `.exe` |
| Biblioteca de temas / Studio online | [DreamSkin.cc](https://dreamskin.cc/) | Explorar temas, probarlos online, crear y enviar temas |

## Instalación y primeros pasos

Antes de instalar, abre Codex una vez y confirma que la app de escritorio inicia, permite iniciar sesión y se cierra correctamente. Así la herramienta puede encontrar el entorno local correcto.

### macOS

En macOS normalmente se descarga el `.dmg` desde Releases del proyecto. Después de instalar, arrastra `Codex Dream Skin.app` a Applications y gestiona temas, fondos y restauración desde la barra de menús.

Si el sistema dice que la app está "dañada" o no puede abrirse, suele ser Gatekeeper bloqueando una app sin firmar. Permítela en Ajustes del sistema > Privacidad y seguridad solo después de confirmar que la fuente es confiable.

### Windows

En Windows normalmente se descarga el instalador desde Releases, o se sigue el flujo PowerShell documentado por el proyecto. Tras instalar, abre la herramienta desde la bandeja del sistema para gestionar temas y fondos.

Si SmartScreen muestra una advertencia azul, la causa habitual es la falta de certificado de firma de código. Continúa solo si confías en la fuente.

### Problemas frecuentes

| Síntoma | Causa | Solución |
| --- | --- | --- |
| macOS dice que la app está "dañada" | App sin firmar bloqueada por Gatekeeper | Ajustes del sistema -> Privacidad y seguridad -> Abrir igualmente |
| Advertencia azul de Windows SmartScreen | Falta certificado de firma | Más información -> Ejecutar de todos modos |
| No hay efecto tras instalar | Codex no se abrió una vez antes | Abre Codex, inicia sesión, sal y luego instala Dream Skin |
| El tema falla tras actualizar Codex | La actualización pudo cambiar rutas internas | Descarga el instalador más reciente e instala encima |

Instalar encima no borra los temas ni las imágenes guardadas.

## Fondos y gestión de temas

Después de instalar, usa "Cambiar fondo" desde la barra de menús de macOS o la bandeja de Windows y elige una imagen.

![Vista previa y cambio de temas en Codex Dream Skin](/theme/codex-dream-skin/article/codex-dream-skin-gallery.jpg)

_Tras cambiar la imagen, revisa inicio, barra lateral, cuadro de entrada y páginas de tareas para asegurarte de que el uso real sigue siendo claro y legible._

Después de elegir la imagen, el motor analiza localmente brillo, color dominante, posición de foco y qué lado tiene menos información visual; luego genera variables de tema adaptadas a esa imagen. Los temas pueden guardarse, nombrarse y cambiarse con una acción.

Gothic Void Crusade es el tema predeterminado del instalador público y fue aportado por la comunidad. También puedes importar cualquier fondo puro 16:9.

Reglas para imágenes:

- Recomendado: `2560 x 1440` en 16:9, sin ventanas, barras laterales, texto ni logos incrustados.
- Evita colocar el sujeto principal sobre el cuadro de entrada, la barra lateral o las tarjetas sugeridas de Codex.
- Evita fondos demasiado brillantes, recargados o de contraste extremo.
- Antes de compartir o vender, confirma derechos de imagen, personajes, marcas, fuentes e IP.

Las imágenes que no cumplan la composición también funcionan, pero el contenido nativo puede tapar el sujeto o perder legibilidad.

## Cómo funciona

### Inyección CDP

CDP, Chrome DevTools Protocol, es el protocolo de depuración remota usado por Chromium. Las herramientas de desarrollo de Chrome lo usan para depurar páginas móviles: el navegador abre un puerto local y herramientas externas pueden inyectar CSS y JavaScript.

Codex para escritorio está construido con Electron, también basado en Chromium. El flujo de Dream Skin puede simplificarse así:

![Flujo de inyección CDP del artículo](/theme/codex-dream-skin/article/cdp-injection-flow.png)

```text
Iniciar la herramienta de temas
  -> Abrir Codex con un endpoint CDP local
  -> Conectar con el proceso renderer de Chromium de Codex
  -> Inyectar CSS de tema y DOM decorativo
  -> Codex sigue funcionando y la capa de tema controla la apariencia
```

Al detener el inyector, valida PID, ruta del ejecutable y hora de inicio para evitar cerrar otro proceso por error.

El CSS inyectado mantiene la interacción nativa de barra lateral, cuadro de entrada y tarjetas. El fondo queda debajo de los controles y una capa translúcida ayuda a conservar la legibilidad.

### Colores adaptativos: cálculo local, sin subir datos

Al cambiar una imagen, Dream Skin la reduce localmente en Canvas, extrae color dominante, brillo y foco, y calcula variables CSS en HSL, como color de acento, secundario y resaltado.

En modo oscuro parte de un color dominante oscuro para calcular acentos, secundarios y grises neutros. En modo claro hace lo inverso: parte de grises claros y calcula texto y acentos más oscuros. Al cambiar la imagen, la paleta completa se recalcula automáticamente.

Con conciencia de ruta, la página inicial conserva el fondo completo y el degradado; al entrar en una tarea, el fondo pasa a una capa ambiental de baja interferencia para dar prioridad visual al contenido.

## Para terminar

La idea de la inyección CDP es aplicar estilos desde fuera de la app sin modificar binarios oficiales. No solo sirve para Codex: en teoría, cualquier app basada en Electron podría personalizar temas de forma similar si expone un puerto CDP.

La necesidad de personalizar el entorno de desarrollo es real. Un buen tema no solo debe verse más interesante; también debe preservar interacciones nativas, poder restaurarse, poder inspeccionarse y no mezclar mejoras visuales con configuración del modelo.
