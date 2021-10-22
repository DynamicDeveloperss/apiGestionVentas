const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./database/db.js');


app.use(cors({
    origin: '*'
}))
const rutaproductos = require('./routes/Productos.js');
const rutaroles = require('./routes/Roles.js');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(rutaroles);
app.use(rutaproductos);


// app.post('/venta', (req, res) => {
//     console.log(req.body)
//     res.send('Hello  prueba!');
// });

// Rutas de prueba

// Ruta GET de prueba: permite obtener todos los registros de la tabla usuarios
//app.get('/obtenerUsuarios', (req, res) => {
  //Usuario.findAll()
    //.then((result) => {
    //  res.json(result);
    //})
    //.catch((error) => {
     // res.send(error);
    //});
//});

// Ruta POST de prueba: permite crear un nuevo registro en la base de datos, exactamente en la tabla de usuarios
/*app.post('/agregarUsuario', (req, res) => {
  Usuario.create({ nombre: req.body.nombre, edad: req.body.edad, correo: req.body.correo })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.send(error);
      console.log('Error', error);
    });
  });*/

app.listen(5000, () => {
  console.log('Example app listening on port 3000!');

  // Conexion a la base de datos desde el servidor
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log('Conexión a la base de datos exitosa');
    })
    .catch((error) => {
      console.log('Error', error);
    });
});

//Run app, then load http://localhost:3000 in a browser to see the output.
