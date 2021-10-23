const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./database/db.js');
const cors = require('cors');


const rutasVentas = require('./routes/ventas.js');

// parse application/x-www-form-urlencoded
app.use(cors());

// parse application/json
app.use(bodyParser.json());

// Rutas
app.use(rutasVentas);

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
