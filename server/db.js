const Pool = require('pg').Pool; //Pool es un objeto que se crea a partir de la clase Pool
require('dotenv').config(); //para acceder a las variables de entorno que se encuentran en el archivo .env

const pool = new Pool({
  user: process.env.DB_USER, //usuario de la base de datos
  password: process.env.DB_PASSWORD, //contraseña de la base de datos
  host: process.env.DB_HOST, //host de la base de datos
  port: process.env.DB_PORT, //puerto de la base de datos
  database: process.env.DB_NAME //nombre de la base de datos
});

module.exports = pool; //exportamos el objeto pool para poder utilizarlo en otros archivos

