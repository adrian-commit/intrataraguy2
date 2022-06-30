'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.bulkInsert('users', [
     {
       id: 1,
       userName:'LucianoTesti',
       email:'lucianotesti@gmail.com',
       password: 'lucianotesti',
       team_id: 1,
       is_admin: false
     },
     {
      id: 2,
      userName:'PedroRios',
      email: 'pedrorios@gmail.com',
      password:'pedrorios',
      team_id: 2,
      is_admin: false
     }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('users', null, {});
    
  }
};

