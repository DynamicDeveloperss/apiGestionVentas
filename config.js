/*Que es una variable de entorno: es una cadena de texto que sistemas operativos como Windows, 
Linux o Mac usan para almacenar valores que pueden variar de un equipo a otro */

// require('dotenv').config({ path: '.env' }); // Variables de Entorno

// Informacion necesaria para establecer la conexion con la base de datos (credenciales)
module.exports = {
  database: {
    username: 'root',
    password: '123456Nikolas',
    database: 'vendedores',
    host: 'localhost',
  },
};
