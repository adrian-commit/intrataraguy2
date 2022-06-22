'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('teams', { 
      id: {
        type: Sequelize.INTEGER ,
        autoIncrement: true,
        primaryKey: true 
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('teams');

  }
};