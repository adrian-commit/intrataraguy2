'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('clients_services', { 
      id: {
        type: Sequelize.INTEGER ,
        autoIncrement: true,
        primaryKey: true 
      },
      service_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      client_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }

    });
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('clients_services');
    
  }
};
