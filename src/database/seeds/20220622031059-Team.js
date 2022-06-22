'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.bulkInsert('teams', [
     {
       id: 1,
       name: "info 1"
     },
     {
      id: 2,
      name: "info 2"
     },
     {
      id: 3,
      name: "info 3"
     },
     {
      id: 4,
      name: "Laboral"
     }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('teams', null, {});
    
  }
};