/*Que es una variable de entorno: es una cadena de texto que sistemas operativos como Windows, 
Linux o Mac usan para almacenar valores que pueden variar de un equipo a otro */

// require('dotenv').config({ path: '.env' }); // Variables de Entorno

// Informacion necesaria para establecer la conexion con la base de datos (credenciales)
module.exports = {
  database: {
    username: 'sql10446210',
    password: 'GSX1xaldMT',
    database: 'sql10446210',
    host: 'sql10.freesqldatabase.com',
  },
};

// module.exports = {
//   database: {
//     username: 'carito',
//     password: 'Test1234*',
//     database: 'Roles',
//     host: 'localhost',
//   },
// };
