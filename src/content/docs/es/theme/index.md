---
title: "Temas de Codex"
description: "Comprueba la fuente, la versión, las interacciones y la recuperación de un tema de terceros, distinguiendo lo que afirma el proyecto de las pruebas de este manual."
contentType: guide
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: "Se consultaron el repositorio, las versiones y la guía de instalación del proyecto. No se instaló el tema, ni se probaron la interfaz o la recuperación tras desinstalar; no se garantiza compatibilidad."
  evidence:
    - label: "Descripción del proyecto Dream Skin"
      href: https://github.com/Fei-Away/Codex-Dream-Skin
    - label: "Instrucciones de instalación y retirada en macOS"
      href: https://github.com/Fei-Away/Codex-Dream-Skin/blob/v1.5.18/docs/install-macos.md
    - label: "Paquetes publicados e historial de versiones"
      href: https://github.com/Fei-Away/Codex-Dream-Skin/releases
locale: es
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: "4ecfa1c"
---

Codex Dream Skin es un tema de escritorio de terceros. Su documentación dice que inyecta cambios visuales mediante una conexión CDP local sin modificar el paquete oficial. Es la descripción del proyecto; este manual no ha verificado el comportamiento de archivos y red ni la compatibilidad de la interfaz en todas las versiones.

![Ilustración del aspecto del tema](/theme/codex-dream-skin/article/codex-dream-skin-home.jpg)

La ilustración ya alojada aquí no es una prueba de esta revisión de versión. Tampoco demuestra que el cuadro de entrada, los botones de aprobación y todas las vistas de tareas funcionen correctamente.

## Versión y estado de verificación

| Elemento | Resultado de esta revisión |
|---|---|
| Fuente | [Repositorio del proyecto](https://github.com/Fei-Away/Codex-Dream-Skin) y [versiones publicadas](https://github.com/Fei-Away/Codex-Dream-Skin/releases) |
| Versión observada | [v1.5.18](https://github.com/Fei-Away/Codex-Dream-Skin/releases/tag/v1.5.18), comprobada el 18-09-2026, commit `34335d27d54300eccb325cc652f6c93fef428b84`; no instalada |
| Cliente local | Info.plist leído sin modificar: 26.911.61220, build 9647, identificador com.openai.codex |
| Combinación tema/cliente probada | Ninguna; instalación, interacciones y retirada no probadas |
| Compatibilidad con Windows | No probada por este manual |
| Resultado de recuperación | No probado; a continuación hay pasos y criterios de aceptación |

Las notas de la versión mencionan que algunas correcciones de interfaz se comprobaron con macOS Codex 26.901.41123. Es distinta de la 26.911.61220 registrada aquí, así que no demuestra compatibilidad de esta combinación. El enlace de instalación para macOS está fijado a v1.5.18; consulta la etiqueta correspondiente para otras versiones.

Leer la versión del cliente aporta información del entorno, no prueba la compatibilidad del tema. Usa el [registro de compatibilidad y recuperación](/es/guide/reference/resource-compatibility/) para guardar tus propias pruebas.

## Antes de instalar

1. Elige una versión concreta en las publicaciones del proyecto. Anota nombre del paquete, URL de descarga y SHA-256. Si el autor proporciona un archivo de sumas, compáralo con el paquete. Un hash coincidente prueba que los archivos coinciden, no que el programa sea seguro.
2. Guarda las versiones del cliente y del sistema, la configuración del tema y copias de imágenes personalizadas que tengas derecho a usar. Anota dónde se encuentra la copia de seguridad.
3. Comprueba primero la pantalla de inicio, las tareas, la entrada, el desplazamiento, la búsqueda y la interfaz de aprobaciones sin tema como referencia.
4. Lee las instrucciones de instalación, actualización y retirada correspondientes a la versión elegida. La documentación de la rama main puede ser más reciente que el instalador.

En macOS, consulta la [guía de instalación del proyecto](https://github.com/Fei-Away/Codex-Dream-Skin/blob/v1.5.18/docs/install-macos.md); en Windows, la [guía para Windows](https://github.com/Fei-Away/Codex-Dream-Skin/blob/main/docs/install-windows.md). No atribuyas por defecto un aviso de «dañado» o un bloqueo del sistema a la falta de firma. Comprueba fuente, integridad del paquete y error concreto antes de seguir.

## Qué comprobar después de cambiar una imagen

El proyecto ofrece gestión de fondos y temas; los nombres de menús dependen de la versión. Usa imágenes para las que tengas derechos y comprueba los modos claro y oscuro, el tamaño de ventana y las páginas de tareas reales.

- ¿Siguen siendo legibles, clicables y enfocables el cuadro de entrada, los botones y la información de aprobación?
- ¿Oculta el fondo resultados de búsqueda, salidas largas, diffs de código o errores?
- Tras cambiar de página y reiniciar, ¿coincide el tema mostrado con el elegido?
- Al desactivar el tema, ¿vuelve la interfaz original y sigue reproduciéndose el problema?

Si el contenido queda oculto o los controles dejan de funcionar, deja de usar el tema y sigue la recuperación. No ocultes el problema superponiendo más estilos.

## Desinstalación y recuperación

La guía de macOS del proyecto pide usar primero «Restaurar original y desinstalar» en la barra de menús y luego retirar la aplicación del tema. Los temas e imágenes del usuario se pueden conservar o eliminar por separado. Guarda antes los recursos personalizados. En Windows, sigue la guía de la versión correspondiente y no reutilices las rutas de macOS.

Estas son recomendaciones del manual para comprobar la recuperación, no el registro de una prueba ya realizada:

1. Guarda el trabajo del cliente y anota el tema actual y los archivos que quieres conservar.
2. Usa el proceso de recuperación del tema y conserva los avisos de éxito, fallo o estado sin confirmar.
3. Abre Codex de nuevo desde su acceso habitual y comprueba fondo, texto, entrada y navegación entre tareas.
4. Confirma que el tema ya no arranca automáticamente ni vuelve a inyectarse. Si hacen falta comprobaciones técnicas, examina procesos y conexiones de depuración sin cerrar indiscriminadamente otros procesos con nombre parecido.
5. Retira la aplicación solo después de pasar las comprobaciones. Conserva las imágenes personalizadas hasta decidir por separado que ya no las necesitas.

Una copia de seguridad, la salida del desinstalador o el cierre de la ventana del tema no prueban por sí solos la recuperación. Si el resultado es incierto, guarda los registros y consulta los Issues del proyecto; no afirmes que se restauró. No borres todo el directorio de configuración de Codex para desinstalar el tema.

## Alcance de estas conclusiones

CDP puede modificar el contenido de la página, así que «no cambia el paquete oficial» no implica que no afecte al uso. Vuelve a verificar tras cambios de interfaz. Revisa por versión las afirmaciones del proyecto sobre procesamiento local, acceso a red y recuperación. Este manual no promete que las imágenes nunca se suban, que todas las versiones puedan restaurarse con un clic ni que una actualización por sobrescritura no pierda datos.
