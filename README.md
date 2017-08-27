# CSIPro - Generador de posters
Aplicación para generar posters de eventos CSIPro.

### Motivación

Se tienen templates de posters para los eventos que hacemos en CSIPro, los cuales se editan en un archivo que tenemos que estarnos pasando entre los integrantes del equipo, además de que es necesario contar con un programa especializado para realizar esta tarea que no todos tienen disponible.

La propuesta con la que se realiza este proyecto es la de eliminar las dependencias en otros programas (y personas que lo tengan) mediante una aplicación web accesible para para cualquiera con un navegador, donde el usuario puede editar un template del poster de un evento CSIPro, ingresar la información necesaria para el mismo y descargarlo.

### Estado del proyecto

Se trata de una aplicación web hecha con React en el cliente y cuenta con un pequeño servidor de Express para el manejo de archivos en producción.

### Features:
- Edición en tiempo real y descarga de posters de CSITalks.

### Roadmap:
- Modularización de código (separar en más componentes).
- Separación en código en el build (code splitting).
- Más diseños para posters (CSITalks, CSIPro+Nearsoft)
- Usuarios y autenticación.

### Comandos
Necesitas:
- [NodeJS](https://nodejs.org/en/) para correr la aplicación.
- [Yarn](https://yarnpkg.com/) para agregar paquetes al proyecto.
- [NPM](https://npmjs.org) para los comandos de ejecución.

Primero clona el repositorio.
```js
npm run dev // inicia la aplicación en modo de desarrollo con live reload de js y css
npm run build // prepara los assets que mandaremos a producción
npm run start // inicia la aplicación en modo de producción con assets optimizados
```
