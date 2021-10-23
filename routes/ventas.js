const express = require('express');
const rutasVentas = express.Router();
const Ventas = require('../database/models/ventas.js');

rutasVentas.get('/obtenerVentas', (req, res) => {
  Ventas.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.send(error);
    });
});

rutasVentas.post('/agregarVenta', (req, res) => {
  Ventas.create({
    id: req.body.id_venta,
    cedula_comprador: req.body.cedula,
    id_producto: req.body.productos,
    valor: req.body.valor,
    id_vendedor: req.body.id_vendedor,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log('Error', error);
    });
});
module.exports = rutasVentas;
