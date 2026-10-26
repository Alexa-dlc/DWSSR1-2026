![Place Itgam](.github/assets/pleca_itgam.jpg)
# Desarrollo de aplicaciones Web Server Side Rendering 
Proyecto de la materia de Desarrollo Web Server Side Redering
# ⭐ Competencias

<aside>
✅

**Competencias previas**

Desarrolla aplicaciones web utilizando ES6, HTML y CSS, y utiliza herramientas de software que facilitan el desarrollo de aplicaciones web modernas.

</aside>

<aside>
🚀

**Competencias a desarrollar**

El participante identifica los frameworks más utilizados en la industria para el desarrollo de aplicaciones web de pila completa y emplea uno de ellos para desarrollar aplicaciones web siguiendo las mejores prácticas de desarrollo.

</aside>

# 🧩 Caracterización de la asignatura

Esta asignatura proporciona al perfil del ingeniero en ITICS las competencias necesarias para participar en todas las etapas de la pila tecnológica de una aplicación web.

| Tipo de commit | Nombre               | ¿Para qué se utiliza?                                          |
| -------------- | -------------------- | -------------------------------------------------------------- |
| ➕ `feat`       | Nueva función        | Agregar una nueva funcionalidad al proyecto.                   |
| 🐛 `fix`       | Corrección           | Corregir un error o problema del código.                       |
| 📄 `docs`      | Documentación        | Modificar o agregar documentación.                             |
| 🎨 `style`     | Estilo               | Cambiar formato, espacios o estilo sin modificar la lógica.    |
| 🔧 `refactor`  | Refactorización      | Mejorar o reorganizar el código sin cambiar su funcionamiento. |
| 🧪 `test`      | Pruebas              | Agregar o modificar pruebas del proyecto.                      |
| ⚙️ `chore`     | Tareas               | Cambios de configuración o tareas generales.                   |
| 📦 `build`     | Construcción         | Cambios en dependencias o configuración de compilación.        |
| 🔄 `ci`        | Integración continua | Cambios en procesos automáticos, workflows o scripts.          |
| 🚀 `perf`      | Rendimiento          | Mejorar la velocidad o rendimiento del proyecto.               |
| ↩️ `revert`    | Revertir             | Deshacer un commit anterior.                                   |
| 🔒 `security`  | Seguridad            | Corregir vulnerabilidades o mejorar la seguridad.              |
| 🔀 `merge`     | Combinar             | Integrar cambios de una rama con otra.                         |
| 🌿 `branch`    | Rama                 | Crear o trabajar con una nueva rama.                           |
| 🔄 `update`    | Actualización        | Actualizar archivos, dependencias o componentes existentes.    |

# Guía de estilo para JavaScript

El proyecto usa Airbnb Base para JavaScript junto con Prettier. La configuración
de ESLint aplica las reglas de Airbnb en el servidor, el cliente y la configuración
de Vite; `eslint-config-prettier` desactiva las reglas de formato de ESLint que
podrían entrar en conflicto con Prettier. En VS Code, Prettier formatea
JavaScript al guardar y ESLint aplica sus correcciones automaticas.

Las dependencias se instalan con:

```sh
npm install
```

Comandos disponibles:

```sh
npm run lint:all      # Revisa servidor, cliente y configuracion de Vite
npm run lint:fix      # Aplica las correcciones automaticas de ESLint
npm run format        # Formatea JavaScript con Prettier
npm run format:check  # Comprueba el formato sin modificar archivos
```
