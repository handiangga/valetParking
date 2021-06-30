'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ParkingArea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ParkingArea.belongsToMany(models.Valet, { through: 'Report' });
    }
  };
  ParkingArea.init({
    location: DataTypes.STRING,
    status: DataTypes.STRING,
    reserved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ParkingArea',
  });
  return ParkingArea;
};