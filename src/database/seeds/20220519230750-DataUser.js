'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.bulkInsert('datausers', [
     {
       id: 1,
       firstName:'Luciano',
       lastName:'Testi',
       dni:36190187,
       telephone:37894555662,
       birthDay:'1992-09-16',
       profession: 'contador publico',
       hobbie: 'correr',
       childrens: false,
       team: 'info 1',
       user_id: 1
     },
     {
      id: 2,
      firstName:'Pedro',
      lastName:'Rios',
      dni:38160189,
      telephone:37945668967,
      birthDay:'1981-03-23',
      profession: 'contador publico',
      hobbie: 'bailar',
      childrens: true,
      team: 'info 2',
      user_id: 2
     }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('datausers', null, {});
    
  }
};
