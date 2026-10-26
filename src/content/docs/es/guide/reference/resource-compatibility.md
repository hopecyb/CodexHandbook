---
title: "Mascotas y temas: registro de compatibilidad y recuperación"
description: Registra por versión el origen, la carga, la interacción, la desactivación y la recuperación de los recursos visuales, sin presentar una revisión documental como prueba de instalación.
contentType: reference
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Se ofrece un procedimiento de prueba por completar. Este sitio aún no tiene registros de instalación y desinstalación de mascotas o temas completadas en el cliente.
locale: es
source_locale: zh-CN
source_revision: '96ff34f'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-25'
---

La compatibilidad siempre corresponde a una combinación concreta de versiones. Una estructura de paquete válida, imágenes con el tamaño correcto o una interfaz que se abre no demuestran por sí solas que funcionen los estados de animación ni la desinstalación y recuperación.

## Evidencia disponible

El 2026-09-18 se consultó en modo de solo lectura el archivo `Info.plist` de la aplicación local. El identificador del cliente era `com.openai.codex`, la versión `26.911.61220` y el build `9647`. Esta comprobación no cargó mascotas ni temas y no modificó la configuración del cliente. **Combinaciones de versiones con pruebas completas de instalación, reproducción, cambio y recuperación: ninguna por ahora.**

Usa las instrucciones de [instalación de mascotas](/es/pets/install/), [creación de mascotas](/es/pets/create/) y [temas](/es/theme/) junto con las versiones del recurso y del cliente correspondientes. Atribuye las afirmaciones de proyectos de terceros a sus fuentes; no las presentes como pruebas realizadas por este sitio.

## Plantilla de registro para copiar

```text
Tipo de registro: mascota / tema
Estado: sin ejecutar / en curso / aprobado / fallido / resultado no confirmado
Fecha de la prueba:
Persona que realizó la prueba:
Sistema y arquitectura:
Versión y build del cliente:
Nombre y versión del recurso o herramienta:
URL de origen y tag/commit correspondiente:
Nombre del archivo descargado y SHA-256:
Autoría y licencia de los recursos:
Estado anterior a la instalación y ubicación de la copia de seguridad (eliminar datos sensibles antes de publicar):
Pasos de instalación realizados:
Pruebas de carga e interfaz:
Comprobaciones de animación o interacción:
Pasos y resultado de la desactivación:
Pasos y resultado de la recuperación:
Comprobación después de reiniciar:
Registros de fallos y asuntos pendientes:
Plataformas, estados o funciones sin probar:
```

Deja vacíos los elementos no ejecutados o márcalos como tales. No pongas tiempo cero, «aprobado» ni una versión supuesta. Los registros públicos deben usar rutas anonimizadas y capturas de prueba sin contenido de tareas reales.

## Comprobaciones de mascotas

Primero valida el JSON y las rutas de los recursos. Después comprueba en el cliente la selección, la carga, el fondo transparente, el cambio de acciones y el ajuste del tamaño de la ventana. Si el atlas tiene un campo de versión, confirma que coincide con el contrato de filas y columnas. Que una imagen se abra no significa que el cliente la haya interpretado según la versión correcta del formato.

Para desactivar una mascota, vuelve primero a un recurso integrado o apaga las mascotas. Mueve el paquete personalizado a una copia de seguridad fuera del directorio explorado. Actualiza o reinicia y confirma que ya no aparece. Para restaurarlo, devuelve el mismo paquete y comprueba la carga. Cambiarle el nombre dentro del directorio explorado no basta; no elimines todo el directorio de configuración.

## Comprobaciones de temas

Registra el aspecto y la interacción de las mismas páginas antes y después de activar el tema. Incluye al menos la página de inicio, una tarea, el campo de entrada, la búsqueda, los mensajes de error y las pantallas de aprobación a las que puedas acceder. Marca como no probadas las pantallas que no puedas activar. No realices acciones de alto riesgo reales solo para probar un botón.

Después de la recuperación, abre de nuevo el cliente normal y confirma que el aspecto y los controles funcionan, y que el tema no se reinicia ni vuelve a inyectarse. Comprueba por separado la recuperación de la interfaz y el cierre de la conexión de depuración. Deja constancia del resultado pendiente si no puedes confirmar cualquiera de los dos.

## Cuándo volver a verificar

Repite los pasos si cambia el cliente, el sistema, el motor de temas, el formato de mascotas o el paquete de recursos. Conserva el registro anterior y añade la nueva combinación de versiones; no te limites a actualizar la fecha de verificación. Si hay un fallo, restaura primero una configuración que sepas que funciona y después investiga el cambio por separado.
