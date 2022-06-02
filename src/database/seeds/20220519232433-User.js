'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.bulkInsert('users', [
     {
       id: 1,
       userName:'LucianoTesti',
       email:'lucianotesti@gmail.com',
       password: 'lucianotesti',
       is_admin: false
     },
     {
      id: 2,
      userName:'PedroRios',
      password:'pedrorios',
      password: 'pedrorios@gmail.com',
      is_admin: false
     }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('users', null, {});
    
  }
};

