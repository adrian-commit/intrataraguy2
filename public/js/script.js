//Calendario-Scripts//

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      },
      initialDate: new Date(),
      navLinks: true, 
      businessHours: true, 
      selectable: true,
      locale: 'es',
      themeSystem:'Darkly',
      buttonText:{
          today:'Hoy',
          month:'Mes',
          week:'Semana',
          day:'Dia',
          list:'Lista',
              },

      events: [
        {
          title: 'Cumple Jordana',
          start: '2022-06-08T13:00:00',
            end: '2022-06-09T11:00:00',
          color: 'blue',
        },
        {
          title: 'Vencimiento IVA-DEMONTE',
          start: '2022-06-08T11:00:00',
            end: '2022-06-09T11:00:00',
          color: 'blue',
        },
        
      ]
    });

    calendar.render();
  });