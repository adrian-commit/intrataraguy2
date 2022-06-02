'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER ,
        autoIncrement: true,
        primaryKey: true 
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      is_admin: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue: false
      }
    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('users');

  }
};
