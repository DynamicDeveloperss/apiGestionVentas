const express = require('express');
const rutasvendedores = express.Router();
const vendedores = require('../database/models/vendedores.js');

rutasvendedores.get('/obtenervendedores', (req, res) => {
  vendedores.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.send(error);
    });
});


rutasvendedores.post('/agregavendedores', (req, res) => {
    vendedores.create({  lastName: req.body.lastName, sailsName: req.body.sailsName, phone: req.body.phone, dateOfAdmision: req.body.dateOfAdmision, sailsId:req.body.sailsId})
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res.send(error);
        console.log('Error', error);
      });
  });

module.exports = rutasvendedores;