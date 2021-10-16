const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db.js');

class Roles extends Model {}
Roles.init(
  {
    apellido: DataTypes.STRING,
    nombre: DataTypes.STRING,
    cargo: DataTypes.STRING,
    identificacion: DataTypes.INTEGER,
    correo: DataTypes.STRING,
    roles: DataTypes.STRING,
    estado: DataTypes.STRING
  },
  { sequelize, modelName: 'Roles', timestamps:false }
);

module.exports = Roles;