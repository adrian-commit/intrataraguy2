'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.bulkInsert('tasks', [
     {
       id: 1,
       name:'Liquidación de Iva',
       type:'impositivo',
       client:"kabak",
       team:"info 1",
       observations:'Completado',
       date:'2022-05-19',
       timeBeginning:'07:15',
       timeEnd:'08:30',
       timePause:'07:30',
       timeContinue:'07:50',
       totalTime:'01:50:59',
       condition:'Completado'
     },
     {
      id: 2,
      name:'Liquidación de Sueldos',
      type:'Laboral',
      client:"depot",
      team:"info 2",
      observations:'falta pagar',
      date:'2022-05-17',
      timeBeginning:'10:15',
      timeEnd:'14:30',
      timePause:'10:25',
      timeContinue:'12:20',
      totalTime:'02:00:31',
      condition:'Pendiente'
    },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('tasks', null, {});
    
  }
};
