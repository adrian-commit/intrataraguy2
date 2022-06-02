'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('works', { 
      id: {
        type: Sequelize.INTEGER ,
        autoIncrement: true,
        primaryKey: true 
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      timeBeginning: {
        type: Sequelize.TIME,
        allowNull: false
      },
      timeEnd: {
        type: Sequelize.TIME,
        allowNull: false
      },
      timePause: {
        type: Sequelize.TIME,
        allowNull: true
      },
      timeContinue: {
        type: Sequelize.TIME,
        allowNull: true
      },
    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('works');

  }
};
