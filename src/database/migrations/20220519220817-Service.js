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
      typeActivity: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contributionType: {
        type: Sequelize.STRING,
        allowNull: true
      },
      aplication: {
        type: Sequelize.STRING,
        allowNull: true
      },
      province: {
        type: Sequelize.STRING,
        allowNull: true
      }

    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('services');

  }
};
