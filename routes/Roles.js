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

rutaroles.post('/verificarRol', async (req, res) => {
  try {
    // consultar en la db si existe el email
    const usuario = await Roles.findOne({ correo: req.body.correo })

    if(usuario) {
      return res.json({ mensaje: 'usuario existe' })
    }

    // si el rol no existe se crea
    const rol = {
      apellido: req.body.apellido,
      nombre: req.body.nombre,
      correo: req.body.correo,
      cargo: '',
      identificacion: '',
      roles: 'usuario',
      estado: 'pendiente'
    }

    const result = await Roles.create(rol)
    res.json(result);
  } catch (error) {
    res.send(error);
    console.log('Error', error);
  }
});

rutaroles.post('/agregaRoles', (req, res) => {
  Roles.create({  apellido: req.body.apellido, nombre: req.body.nombre, cargo: req.body.cargo, correo: req.body.correo, identificacion:req.body.identificacion, roles:req.body.roles, estado:req.body.estado })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.send(error);
      console.log('Error', error);
    });
});

module.exports = rutaroles;