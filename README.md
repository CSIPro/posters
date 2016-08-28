# CSIPro posters

### Motivación

Se tienen templates de posters para los eventos que hacemos en CSIPro (como CSITalks y CSICode), el problema radica en que, editar y ajustar la información resulta en mucho tiempo perdido, sin contar en que es indispensable contar con algún programa que pueda realizar esa tarea.

La idea para solcionar este problema es una aplicación web que permite elegir el evento para el cual quieres hacer un poster, te entrega el template para que nomás ingreses la información requerida y te regresa la imagen que necesitas.

### Estado del proyecto

Se trata de una aplicación hecha con React en el cliente y cuenta con un pequeño servidor de Express para el manejo de archivos en producción.

Por el momento la aplicación se encuentra en estado beta.

#### Roadmap

1. Mover los inline-styles en sus respectivos archivos CSS.
2. Agregar una plantilla de poster para CSICode.
3. Un paso de seguridad, para que no cualquiera pueda hacer posters con nuestra imagen.

### Como correr la aplicación

1. Clona este repo
2. Entra a la carpeta en terminal, bash, etc.
3. Ejecuta ```npm install```
4. Ejecuta ```npm run dev``` para correr la aplicación en modo development
5. Ejecuta ```npm run start``` para correr la aplicación en modo producción
