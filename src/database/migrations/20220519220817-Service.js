'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('services', { 
      id: {
        type: Sequelize.INTEGER ,
        autoIncrement: true,
        primaryKey: true 
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tarea_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }

    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('services');

  }
};
