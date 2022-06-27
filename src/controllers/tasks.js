const {Client,Team,Task} = require('../database/models');
module.exports = {
    tareas: async (req, res) =>{
        try {
          let clientes = await Client.findAll();
          let equipos = await Team.findAll(); 
          return res.render('tareas', {
            clientes: clientes,
            equipos: equipos
          });  
        } catch (error) {
            return res.render('error', {error});
        }  
    },

    cargarTarea: async (req,res) => {
        try {
            let workInDb = await Task.findAll({where:{
                name:req.body.name,
                client: req.body.cliente
            }});
            if (workInDb != "") {
                return res.render('tareas', {
                    alert: true,
                    alertTitle: "Error",
                    alertMassage: "Esta tarea ya esta cargada",
                    alertIcon: 'error',
                    showConfirmButton: true,
                    timer:2500,
                    ruta:''
                })
            } else {
                console.log(req.body);
                    //--- Seleccionado las horas,minutos,segundos de cada uno de los tiempos ---//
                    const tiempoDeInicio = Date.parse(req.body.date + ' ' + req.body.tiempoInicio);
                    let fechaInicio = new Date(tiempoDeInicio);
                    let horaInicio = fechaInicio.getHours();
                    let minutosInicio = fechaInicio.getMinutes();
                    let segundosInicio = fechaInicio.getSeconds();
                    const tiempoDePausa = Date.parse(req.body.date + ' ' + req.body.tiempoPausa);
                    let fechaPausa = new Date(tiempoDePausa);
                    let horaPausa = fechaPausa.getHours();
                    let minutosPausa = fechaPausa.getMinutes();
                    let segundosPausa = fechaPausa.getSeconds();
                    const tiempoDeContinuo = Date.parse(req.body.date + ' ' + req.body.tiempoContinuar);
                    let fechaContinuo = new Date(tiempoDeContinuo);
                    let horaContinuo = fechaContinuo.getHours();
                    let minutosContinuo = fechaContinuo.getMinutes();
                    let segundosContinuo = fechaContinuo.getSeconds();
                    const tiempoDeFin= Date.parse(req.body.date + ' ' + req.body.tiempoFin);
                    let fechaFin = new Date(tiempoDeFin);
                    let horaFin = fechaFin.getHours();
                    let minutosFin = fechaFin.getMinutes();
                    let segundosFin = fechaFin.getSeconds();

                    //--- Defininiendo las variables totales ---//
                    let horaTotal = 0;
                    let minutosTotal = 0;
                    let segundosTotal = 0;

                    //--- Haciendo los calculos ---//
                    ///--- Calculando la hora ---//
                    if (horaInicio != horaFin) {
                        if (horaPausa != horaContinuo) {
                        let horaDescanso = horaContinuo - horaPausa;
                        horaTotal = horaFin - horaDescanso - horaInicio;
                        } else {
                        horaTotal = horaFin - horaInicio;
                        }
                    }
                     
                    ///--- Calculando Los minutos ---//
                    if (minutosInicio != minutosFin) {
                        if (minutosPausa != minutosContinuo) {
                        let minutosDescanso = minutosContinuo - minutosPausa;
                        minutosTotal = minutosFin - minutosDescanso - minutosInicio;
                        } else {
                        minutosTotal = minutosFin - minutosInicio;
                        }
                    }

                    ///--- Calculando los segundos ---//
                    if (segundosInicio != segundosFin) {
                        if (segundosPausa != segundosContinuo) {
                        let segundosDescanso = segundosContinuo - segundosPausa;
                        segundosTotal = segundosFin - segundosDescanso - segundosInicio;
                        } else {
                        segundosTotal = segundosFin - segundosInicio;
                        }
                    }

                let tiempoTotal = {horaTotal, minutosTotal, segundosTotal};
                console.log(tiempoTotal);

                let client = await Client.findOne({where:{name:req.body.cliente}});
                let newTask = await Task.create({
                    name: req.body.name,
                    type: req.body.area,
                    client: client.id,
                    team: req.body.equipo,
                    observations: req.body.comment,
                    date: req.body.date,
                    timeBeginning:req.body.tiempoInicio,
                    timeEnd:req.body.tiempoFin,
                    timePause:req.body.tiempoPausa,
                    timeContinue:req.body.tiempoContinuar,
                    totalTime:'',
                    condition:'Pendiente'
                });
                return res.redirect('panelTareas');
            }
        } catch (error) {
            return res.render('error', {error}); 
        }
    },

    panelTareas: async (req,res) => {
        try {
            let allTasks = await Task.findAll({include:{all:true}});
            let client = await Client.findAll({include:{all:true}});
            console.log(client);
            return res.render('panelTareas', {tasks: allTasks});
        } catch (error) {
            return res.render('error', {error}); 
        }
    }
}