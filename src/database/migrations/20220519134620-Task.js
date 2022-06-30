'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('tasks', { 
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
      client: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      service_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      team: {
        type: Sequelize.STRING,
        allowNull: false
      },
      records: {
        type: Sequelize.STRING,
        allowNull: false
      },
      recordsQuantity: {
        type: Sequelize.STRING,
        allowNull: false
      },
      observations: {
        type: Sequelize.TEXT,
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
      totalTime: {
        type: Sequelize.TIME,
        allowNull:true
      },
      condition: {
        type: Sequelize.STRING,
        allowNull: false,
        default:'Pendiente'
      }
    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('tasks');

  }
};
