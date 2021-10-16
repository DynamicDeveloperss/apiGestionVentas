const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db.js');

class vendedores extends Model {}
vendedores.init(
  {
    lastName: DataTypes.STRING,
    sailsName: DataTypes.STRING,
    phone: DataTypes.STRING,
    dateOfAdmision: DataTypes.STRING,
    sailsId: DataTypes.STRING
  },
  { sequelize, modelName: 'vendedores' }
);

module.exports = vendedores;