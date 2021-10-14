const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db.js');

class Usuario extends Model {}
Usuario.init(
  {
    nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    correo: DataTypes.STRING,
  },
  { sequelize, modelName: 'Usuario' }
);

module.exports = Usuario;
