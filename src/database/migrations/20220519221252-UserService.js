'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('users_services', { 
      id: {
        type: Sequelize.INTEGER ,
        autoIncrement: true,
        primaryKey: true 
      },
      service_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }

    });
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('users_services');
    
  }
};
