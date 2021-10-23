const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db.js');

class Productos extends Model {}
Productos.init(
  {
    nombre_producto: DataTypes.STRING,
    id_producto: DataTypes.INTEGER,
    precio: DataTypes.FLOAT,
    unidades: DataTypes.INTEGER,
    estado_producto: DataTypes.STRING,
    descripcion: DataTypes.STRING
    
  },
  { sequelize, modelName: 'Productos', timestamps:false }
);

module.exports = Productos;