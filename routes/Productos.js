const express = require('express');
const rutaproductos = express.Router();
const Productos = require('../database/models/productos.js');

rutaproductos.get('/obtenerProductos', (req, res) => {
  Productos.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.send(error);
    });
});


rutaproductos.post('/agregaProductos', (req, res) => {
  Productos.create({  nombre_producto: req.body.nombre_producto, id_producto: req.body.id_producto, precio: req.body.precio, unidades: req.body.unidades, estado_producto:req.body.estado_producto, descripcion:req.body.descripcion, })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.send(error);
      console.log('Error', error);
    });
});

module.exports = rutaproductos;