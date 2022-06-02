'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.bulkInsert('clients', [
     {
       id: 1,
       name:'depot',
       businessName:'depot SA',
       typePerson:'Juridica',
       cuit:'5012532215634',
       officesQuantity: 15,
       staffQuantity: 300,
       typeActivity:'supermercados/retail',
       timeExerciseEnd:'2020-03-31',
     },
     {
      id: 2,
      name:'kabak',
      businessName:'kabak SRL',
      typePerson:'Juridica',
      cuit:'3025356235616',
      officesQuantity: 1,
      staffQuantity: 25,
      typeActivity:'construcción',
      timeExerciseEnd:'2020-03-15',
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('clients', null, {});
    
  }
};
