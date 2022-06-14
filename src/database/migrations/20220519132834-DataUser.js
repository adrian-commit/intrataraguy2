'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('datausers', { 
      id: {
        type: Sequelize.INTEGER ,
        autoIncrement: true,
        primaryKey: true 
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      LastName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      dni: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      telephone: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      birthDay: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      profession: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      hobbie: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      childrens: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      team: {
        type: Sequelize.STRING,
        allowNull: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('datausers');

  }
};
