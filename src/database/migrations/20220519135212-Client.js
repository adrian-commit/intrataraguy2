'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('clients', { 
      id: {
        type: Sequelize.INTEGER ,
        autoIncrement: true,
        primaryKey: true 
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      businessName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      typePerson: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cuit: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      officesQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      staffQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      typeActivity: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      timeExerciseEnd: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('clients');

  }
};
