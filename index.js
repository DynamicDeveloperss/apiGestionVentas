const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./database/db.js');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// app.post('/venta', (req, res) => {
//     console.log(req.body)
//     res.send('Hello  prueba!');
// });

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
