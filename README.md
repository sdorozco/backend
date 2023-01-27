# Backend-Netflix-Clone

El siguiente proyecto es complemento de Netflix-Clone aqui se encuentra desarrollado el backend en donde se implementa Express, MongoDB, Node JS y la API de Tv Maze.

## Instalación

Cuando descargues el proyecto en tu equipo, necesitas para poder iniciarlo instalar los paquetes de NODE JS para esto ejecuta el siguiente comando dentro de la carpeta principal del proyecto:
```
npm install
```

Luego de que se instalen las dependencias, hay que configurar el archivo .env. Ahi debes te agregar:
```
//ruta para conectar con tu base de datos en mongoDB se genera en MondoDB Atlas.

MONGODB_URI=mongodb+srv://USER:PASSWORD@cluster0.btgsx4a.mongodb.net/NAME_BD

//Puerto por defecto escogido puede cambiar pero si se hace debe modificarse tambien en e archivo .env de Netflix-Clone

PORT=5000

//Debes ingresar a Google Developer, crear un proyecto y activar la API de YouTube Data obtener 
la API KEY y añadirla aquí

API_KEY=GOOGLE_API_TOUTUBE_DATA

//esta es a ruta que usa la api para hacer busquedas puedes encontrar mas información en YouTube Documentación API

URL_YOUTUBE=https://www.googleapis.com/youtube/v3/search

```

Cuando ya tienes confurado tu .env, puedes iniciar el servidor con el siguiente comando:
```
npm run dev
```

Para comprobar el correcto funcionamiento puedes escribir en tu navegador la siguiente ruta:
```
http://localhost:5000/
```

Obtendras la siguiente respuesta si todo salio bien:

> Welcome to my API

Para agregar en tu Base de datos de MongoDB las serie consultadas a Tv Maze, para poder mostrarlas en la aplicación abre la siguiente ruta:
```
http://localhost:5000/api/all
```
En tu servidor se vera un contador que ira aumentando hasta llegar a 50 puedes pararlo en cualquier momento
pero se establecio que agregue un maximo de 50 datos que se llamaran para mostrarse en la aplicación, pero
puedes modificarlo.

[You Tube Documentación](https://developers.google.com/youtube/v3/docs?hl=es)

[MongoDB Atlas](https://account.mongodb.com/account/login?n=%2Fv2%2F62c89762afff8347a080da6e&nextHash=%23clusters)
