'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Valet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Valet.belongsTo(models.Guest)
      Valet.belongsToMany(models.ParkingArea, { through: 'Report' });
    }
  };
  Valet.init({
    valetName: DataTypes.STRING,
    idCard: DataTypes.STRING,
    address: DataTypes.STRING,
    numberPhone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Valet',
  });
  return Valet;
};