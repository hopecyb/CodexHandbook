---
title: Definición de terminado
description: Cómo definir una lista de criterios de finalización para uso personal y del equipo.
locale: es
source_locale: zh-CN
source_revision: "f55e9f7"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-25
sidebar:
  order: 60
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Esta página solo explica la función y la forma de escribir la definición de terminado; se han revisado conceptos, ejemplos y formulaciones de checklist, y el cuerpo no depende de hechos variables de producto.
  checkedAt: '2026-07-26'
---
«Definición de terminado» es directo: dejar claro de antemano hasta dónde hay que llegar para que esta vez cuente como realmente terminado.

Sin ese paso, lo habitual es:

- Tú crees que aún falta un poco
- Codex cree que ya terminó
- Ninguno está «equivocado»; solo no se alineó el estándar

## Por qué importa este paso

Mucho retrabajo nace de que el estándar de «hecho» no se dijo claro al principio.

Por ejemplo:

- ¿Basta con cambiar el texto, o también hace falta que la vista previa de la página esté bien?
- ¿Basta con que el build pase, o también hay que verificar a mano que el botón se pueda pulsar?
- ¿Basta con que la función funcione, o también hay que completar documentación?

Si no se aclara de antemano, es fácil que cada uno hable de lo suyo.

Ejemplo mínimo de definición de terminado personal:

- [ ] diff revisado
- [ ] Criterios de aceptación marcados uno a uno
- [ ] Tests o verificación manual hechos
- [ ] Ningún secreto entró en el repositorio
- [ ] Problemas a seguir anotados

La versión de equipo se ampliará en un hito posterior de gobernanza.

## Malentendidos habituales

### 1. La definición de terminado no tiene por qué ser formal ni compleja

En la primera fase, aunque solo escribas tres puntos ya sirve:

- Qué cambiar
- Cómo aceptar
- En qué caso cuenta como no terminado

### 2. No es lo mismo que el «objetivo»

Puedes distinguirlo así:

- **Objetivo**: qué resultado quieres
- **Definición de terminado**: cómo demostrar que ese resultado ya se alcanzó

Por ejemplo:

- Objetivo: corregir el texto del botón de la home
- Definición de terminado: solo cambia la home; el texto del botón pasa a la nueva versión; la vista previa de la página está bien

### 3. No hace falta escribir mucho cada vez

No.

Más importante que escribir largo es escribir claro.

## Una plantilla breve

Puedes empezar con esta:

```text
Criterios de finalización:
1. Solo modifica el alcance indicado
2. El resultado cumple los requisitos que di
3. Los pasos de verificación están hechos, y me dices cómo comprobarlo
```

La «definición de terminado» aclara sobre todo «hasta dónde hay que llegar para darlo por terminado», para que tu juicio y el de Codex no diverjan.
