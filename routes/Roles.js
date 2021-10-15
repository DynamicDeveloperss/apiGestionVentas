const express = require('express');
const rutaroles = express.Router();
const Roles = require('../database/models/roles.js');

rutaroles.get('/obtenerRoles', (req, res) => {
  Roles.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.send(error);
    });
});

rutaroles.post('/agregaRoles', (req, res) => {
  Roles.create({  apellido: req.body.apellido, nombre: req.body.nombre, cargo: req.body.cargo, correo: req.body.correo, identificacion:req.body.identificacion })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.send(error);
      console.log('Error', error);
    });
});

module.exports = rutaroles;