const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./database/db.js');
require('dotenv').config({ path: '.env' });

app.use(
  cors({
    origin: '*',
  })
);
const rutaproductos = require('./routes/Productos.js');
const rutaroles = require('./routes/Roles.js');
const rutasVentas = require('./routes/ventas.js');
const rutasvendedores = require('./routes/vendedores.js');
const port = process.env.PORT || 5000;

// parse application/x-www-form-urlencoded
app.use(cors());

// parse application/json
app.use(bodyParser.json());

// Rutas
app.use(rutasVentas);
app.use(rutasvendedores);
app.use(rutaroles);
app.use(rutaproductos);

app.listen(port, () => {
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
