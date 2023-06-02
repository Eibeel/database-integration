### Mongoose Database Integrarion
Conexión y operaciones CRUD con MongoDB.

### Como usar:
1. Asegúrate de tener instalado [Node.js](https://nodejs.org/es) en tu sistema.
2. En el directorio raíz del proyecto, crea un archivo .env y agrega las siguientes variables de entorno:

```bash
PORT=[Puerto de preferencia]
MONGO_DB_URI=[Tu URL de conexión de MongoDB]
```
- Añade tu puerto. Luego, reemplaza la URL de conexión de tu base de datos MongoDB.
Asegúrate de tener las credenciales y permisos necesarios para acceder a la base de datos.
3. Instala las dependecias:
```bash
npm install
```
### Listo para usar.
Una vez instaladas las dependencias, ejecuta el siguiente comando para abrir la base de datos:
```bash
npm run dev
```
Esto conectará tu aplicación a la base de datos MongoDB utilizando la URL de conexión especificada en el archivo .env.
Si la conexión es exitosa, verás el mensaje "Database connected" en la consola.
En caso de que ocurra un error, se mostrará un mensaje de error en la consola indicando el problema. </br>

### Autor:
[@Eibeel](https://github.com/Eibeel)
