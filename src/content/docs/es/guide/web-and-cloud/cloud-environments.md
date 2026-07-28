---
title: Entorno Cloud
description: Composición, ciclo de vida y puntos de configuración de equipo del entorno remoto de ejecución de Codex Cloud.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

El «Entorno Cloud» es la máquina de trabajo que usa Codex al ejecutar Tareas en remoto.

Afecta directamente al resultado: sistema operativo, versiones de lenguaje, toolchain, política de red y qué rama del repo recibe. Esta capa responde sobre todo a:

> **¿Por qué en local corre y en Cloud falla?**

## Contenido

- Diferencias entre el Entorno Cloud y la máquina de desarrollo local
- Cómo se vincula el entorno al repo y a la rama de GitHub
- Cómo mantiene el equipo una configuración Cloud reproducible

## Mira primero estas tres cosas

- Cloud no «lee todo tu ordenador actual»; solo ve lo que hay en el entorno remoto
- Al correr la Tarea, Cloud también se enfrenta a dependencias, versiones y red
- Lo que no has committeado ni pusheado en local, Cloud por defecto no lo ve

Puedes pensar Cloud como «cambiar de máquina para trabajar».

## Concepto central

```text
Repo de GitHub (alguna rama)
        ↓ clone / checkout
Instancia de Entorno Cloud (contenedor o VM, según el producto)
        ↓
El Agent ejecuta la Tarea: instalar dependencias, cambiar código, probar, push
```

Combínalo con [Conectar GitHub](/guide/web-and-cloud/connect-github/); el entorno **no** puede acceder a commits de tu portátil sin push.

## Diferencias entre local y Cloud

- **Tarea local**: Codex trabaja delante de ti, alrededor de tu ordenador actual
- **Tarea Cloud**: envías a Codex a una máquina remota

De ahí vienen las confusiones habituales al usar Cloud por primera vez:

- «¿Por qué no ve el archivo que acabo de cambiar en local?»
- «¿Por qué no tiene la herramienta instalada globalmente en mi máquina?»
- «¿Por qué no conecta con la base de datos que tengo abierta en local?»

En la mayoría de los casos, **esa máquina remota simplemente no tiene esas cosas**; el problema está en el entorno.

## Qué incluye el entorno (capa conceptual)

| Componente | Explicación |
|---|---|
| Imagen base | OS, herramientas de build habituales |
| Runtime | Node, Python, Go, etc. (según imagen y Tarea) |
| Directorio de trabajo | Ruta del repo tras el clone |
| Política de red | Si se permite salida, a qué dominios |
| Inyección de credenciales | [Secrets y variables](/guide/web-and-cloud/secrets-and-variables/) |

Lista concreta de imágenes y personalización según la [documentación oficial de Cloud](https://developers.openai.com/codex).

## Malentendidos frecuentes

### 1. Creer que Cloud hereda automáticamente tu entorno local

No.

Node, Python, Homebrew, Chrome o el cliente de BD que tengas en local no aparecen en Cloud «porque los tengas tú».

### 2. Creer que pushear el repo basta para que todo esté listo

El código del repo es solo el punto de partida; el éxito también depende de:

- Cómo se instalan las dependencias
- Cuáles son los comandos de arranque o prueba
- Qué Secrets hacen falta
- Si la política de red permite recursos externos

### 3. Creer que un fallo de Cloud significa que Codex «no sirve»

Muchos fallos de Cloud son entorno incompleto, no incapacidad de hacer la Tarea.

Orden de diagnóstico:

1. ¿Repo y rama correctos?
2. ¿Dependencias y versiones de runtime correctas?
3. ¿Secret y red disponibles?
4. ¿El Prompt de la Tarea está claro?

## Flujo de configuración recomendado

1. Completa la primera Tarea Cloud en un **repo de prueba** y registra los comandos de instalación de dependencias
2. Escribe los pasos repetidos en la documentación del repo (`README`, `AGENTS.md` o el archivo de environment que soporte el producto)
3. Configura [Secrets](/guide/web-and-cloud/secrets-and-variables/) (registry privado, API key)
4. Confirma que la política de [acceso a internet](/guide/web-and-cloud/internet-access/) cumple los requisitos de seguridad
5. Con la misma plantilla de entorno, valida el ciclo issue → PR

## Cuándo conviene Cloud

Puedes decidir así:

- Solo cambias el proyecto de tu máquina y quieres ver el resultado ya: primero local
- Quieres dejar la Tarea corriendo, un entorno unificado para el equipo o conectar GitHub en remoto: entonces Cloud

Si el flujo local aún no está fluido, no hace falta convertir el problema en «configuración de Cloud» de golpe.

## Alineación con el entorno local

Para evitar «verde en local, rojo en Cloud»:

| Práctica | Motivo |
|---|---|
| Fijar versiones de dependencias (lockfile) | Instalación reproducible |
| En `AGENTS.md`, escribir comandos de instalación y prueba | El Agent no adivina |
| CI y Cloud con versiones cercanas de Node/Python | Menos deriva de versión |
| Archivos grandes con Git LFS o descarga en build | Tamaño de clone controlable |

## Ciclo de vida

Tarea Cloud típica:

1. **Crear/reutilizar** instancia de entorno
2. **Preparar**: clone, checkout de rama, instalar dependencias
3. **Ejecutar**: el Agent cambia código y corre comandos
4. **Entregar**: push de rama, PR, log artifact
5. **Destruir o recuperar** (la política varía según el producto)

Las Tareas largas se pueden seguir con [notificaciones de la App de escritorio](/guide/desktop-app/notifications/) o desde el móvil.

## Errores frecuentes

- Asumir que Cloud ya trae toda la toolchain del monorepo privado
- Depender de servicios `localhost` (BD, mock API) sin proveerlos en el entorno
- En el primer intento, correr Tareas sin límite en el repo de producción
- Confundir «problema de entorno» con «problema de capacidad del modelo»

## Límites de seguridad

- Trata el entorno como **semi-confiable**: sigue haciendo falta code review y protección de ramas
- La cadena de conexión a BD de producción solo por Secrets, no en el Prompt
- Limpia periódicamente plantillas de entorno y Secrets en desuso

## Fuentes de referencia

- OpenAI Codex Cloud environments
- stormzhang `10-cloud.md`
- KimYx0207 CX-10, CX-11

---

**Estado:** outdated  
**Productos aplicables:** Cloud  
**Nota de revisión:** Esta página toca forma de instancia, ciclo de vida, plantillas de entorno y vinculación a ramas de GitHub — detalles de implementación; falta documentación oficial vigente lo bastante sólida para confirmarlos uno a uno; hasta completar materiales formales de entorno Cloud, no conviene `verified`.  
**Última verificación:** 2026-07-26
