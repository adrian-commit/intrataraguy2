'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.bulkInsert('services', [
     {
       id: 1,
       type:"Laboral",
       typeActivity:"Servicio"
     },
     {
      id: 2,
      type:"Impuestos",
      typeActivity:"Servicio",
      contributionType:"IVA",
      aplication:"negocios",
      province:"Chaco"
     }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('services', null, {});
    
  }
};
