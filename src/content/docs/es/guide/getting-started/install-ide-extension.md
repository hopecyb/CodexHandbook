---
title: Instalar la extensión IDE
description: Instala la extensión de Codex en un editor compatible.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

1. Confirma que el editor está en la lista de soporte oficial (ver [https://developers.openai.com/codex](https://developers.openai.com/codex))
2. Busca e instala la extensión oficial de Codex en el marketplace
3. Reinicia el editor (si hace falta) y abre el panel de la extensión

Si pasas la mayor parte del tiempo en VS Code o JetBrains, la extensión IDE suele encajar mejor.  
En la primera instalación, lo más confuso es que «ya está instalada» y «ya funciona con normalidad en el espacio de trabajo actual» siguen siendo dos pasos.

## Confirma también esto tras instalar

- Usas un editor con soporte oficial
- La extensión está en el editor actual, no en el entorno equivocado
- Tras reiniciar ves la entrada de la extensión
- Abriste el directorio del proyecto en el que realmente vas a trabajar

## Malentendidos frecuentes

### 1. Pulsar Instalar en el Marketplace ya basta

Después suele hacer falta:

- Reiniciar el editor
- Iniciar sesión
- Abrir el espacio de trabajo correcto

### 2. La extensión IDE sabe por sí sola en qué proyecto quieres trabajar

Si la raíz del espacio de trabajo no es la correcta, el Contexto que obtiene también se desvía.

Tras instalar la extensión IDE, confirma además que aparece y funciona en tu editor y espacio de trabajo actuales.

Siguiente: [flujo de Tareas locales en el IDE](/guide/ide/local-task-workflow/). Resolución de problemas: [resolución de problemas del IDE](/guide/ide/troubleshooting/).

---

**Estado:** outdated  
**Productos aplicables:** IDE  
**Nota de revisión:** El alcance de soporte de la extensión IDE, la entrada del marketplace, el encaje del inicio de sesión y la integración con el espacio de trabajo son información de producto muy volátil; sin contrastar punto a punto la matriz de soporte y la documentación de instalación oficiales actuales, conviene marcarla primero como `outdated`.  
**Última verificación:** 2026-07-26
