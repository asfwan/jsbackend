'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      line1: {
        type: Sequelize.STRING
      },
      line2: {
        type: Sequelize.STRING
      },
      area: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      postcode: {
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      user_id: {
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
    await queryInterface.dropTable('Addresses');
  }
};