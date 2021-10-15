const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db.js');

class Ventas extends Model {}
Ventas.init(
  {
    id: {
      type: DataTypes.STRING,
      unique: false,
      primaryKey: true,
      allowNull: false,
    },
    cedula_comprador: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_producto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valor: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATEONLY,
      defaultValue: new Date(),
      allowNull: true,
    },
    id_vendedor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, timestamps: false, modelName: 'Ventas' }
);

module.exports = Ventas;
