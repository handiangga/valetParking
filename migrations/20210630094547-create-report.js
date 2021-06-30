'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ValetId: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Valets',
          key : 'id',
        },
        onUpdated : 'CASCASDE',
        onDeleted : 'CASCADE'
      },
      ParkingAreaId: {
        type: Sequelize.INTEGER,
        references : {
          model : 'ParkingAreas',
          key : 'id',
        },
        onUpdated : 'CASCASDE',
        onDeleted : 'CASCADE'
      },
      timeIn: {
        type: Sequelize.DATE
      },
      timeOut: {
        type: Sequelize.DATE
      },
      duration: {
        type: Sequelize.INTEGER
      },
      cost: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Reports');
  }
};