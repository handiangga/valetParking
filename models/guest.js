'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Guest.hasMany(models.Valet)
    }
  };
  Guest.init({
    guestName: DataTypes.STRING,
    NoHp: DataTypes.STRING,
    time: DataTypes.DATE,
    carName: DataTypes.STRING,
    noPol: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Guest',
  });
  return Guest;
};