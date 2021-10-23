const express = require('express');
const rutasusuarios = express.Router();
const Usuario = require('../database/models/usuario.js');

rutasusuarios.get('/obtenerUsuarios', (req, res) => {
  Usuario.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.send(error);
    });
});

rutasusuarios.post('/agregarUsuario', (req, res) => {
  Usuario.create({ nombre: req.body.nombre, edad: req.body.edad, correo: req.body.correo })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.send(error);
      console.log('Error', error);
    });
});

module.exports = rutasusuarios;
