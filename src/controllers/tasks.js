const {Client,Team,Task,Service} = require('../database/models');
module.exports = {
    tareas: async (req, res) =>{
        try {
          let servicio = "Programación";  
            if (req.params.id == 1) {
                servicio = "Laboral";
            } else if (req.params.id == 2) {
                servicio = "Impuestos";
            } else if (req.params.id == 3) {
                servicio = "Administración";
            } else if (req.params.id == 4) {
                servicio = "Contabilidad";
            };
          let clientes = await Client.findAll();
          let equipos = await Team.findAll(); 
          return res.render('tareas', {
            clientes: clientes,
            equipos: equipos,
            servicio: servicio
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
                    //--- y convirtiendolos a minutos ---//
                    const tiempoDeInicio = Date.parse(req.body.date + ' ' + req.body.tiempoInicio);
                    let fechaInicio = new Date(tiempoDeInicio);
                    let horaInicioaMinutos = fechaInicio.getHours() * 60;
                    let minutosInicio = fechaInicio.getMinutes();
                    let segundosInicioaMinutos = fechaInicio.getSeconds() / 60;
                    const tiempoDePausa = Date.parse(req.body.date + ' ' + req.body.tiempoPausa);
                    let fechaPausa = new Date(tiempoDePausa);
                    let horaPausaaMinutos = fechaPausa.getHours() * 60;
                    let minutosPausa = fechaPausa.getMinutes();
                    let segundosPausaaMinutos = fechaPausa.getSeconds() / 60;
                    const tiempoDeContinuo = Date.parse(req.body.date + ' ' + req.body.tiempoContinuar);
                    let fechaContinuo = new Date(tiempoDeContinuo);
                    let horaContinuoaMinutos = fechaContinuo.getHours() * 60;
                    let minutosContinuo = fechaContinuo.getMinutes();
                    let segundosContinuoaMinutos = fechaContinuo.getSeconds() / 60;
                    const tiempoDeFin= Date.parse(req.body.date + ' ' + req.body.tiempoFin);
                    let fechaFin = new Date(tiempoDeFin);
                    let horaFinaMinutos = fechaFin.getHours() * 60;
                    let minutosFin = fechaFin.getMinutes();
                    let segundosFinaMinutos = fechaFin.getSeconds() / 60;

                    //--- Defininiendo las variables totales en minutos---//
                    let minutosTotalInicio = horaInicioaMinutos + minutosInicio + segundosInicioaMinutos;
                    let minutosTotalPausa = horaPausaaMinutos + minutosPausa + segundosPausaaMinutos;
                    let minutosTotalContinuo = horaContinuoaMinutos + minutosContinuo + segundosContinuoaMinutos;
                    let minutosTotalFin = horaFinaMinutos + minutosFin + segundosFinaMinutos;
                    //--- Haciendo los calculos ---//
                    ///--- Calculando el tiempo total---//
                    let tiempoDescanso = 0;
                    let tiempoTotal = 0;
                    if (minutosTotalFin != minutosTotalInicio) {
                        if (minutosTotalContinuo != minutosTotalPausa) {
                        let tiempoDescanso = minutosTotalContinuo - minutosTotalPausa;
                        tiempoTotal = Math.round(minutosTotalFin - tiempoDescanso - minutosTotalInicio);
                        } else {
                            tiempoTotal = Math.round(minutosTotalFin - minutosTotalInicio);
                        }
                    }
                    console.log(tiempoTotal);
                    let fechaTotal = new Date("00:" + tiempoTotal + ":00");
                    console.log(fechaTotal);
                let newService = await Service.create({
                    type:req.body.type,
                    typeActivity:req.body.typeActivity,
                    contributionType:req.body.type == "Impuestos" ? req.body.contributionType : null,
                    aplication:req.body.type == "Impuestos" ? req.body.aplication : null,
                    province:req.body.type == "Impuestos" ? req.body.province : null,

                })
                let newTask = await Task.create({
                    name: req.body.name,
                    type: req.body.area,
                    client: req.body.cliente,
                    service_id: newService.id,
                    team: req.body.equipo,
                    records:req.body.records,
                    recordsQuantity:req.body.recordsQuantity,
                    observations: req.body.comment,
                    date: req.body.date,
                    timeBeginning:req.body.tiempoInicio,
                    timeEnd:req.body.tiempoFin,
                    timePause:req.body.tiempoPausa,
                    timeContinue:req.body.tiempoContinuar,
                    totalTime:'',
                    condition:'Pendiente'
                });
                console.log(newService);
                console.log(newTask);
                return res.redirect('panelTareas');
            }
        } catch (error) {
            return res.render('error', {error}); 
        }
    },

    panelTareas: async (req,res) => {
        try {
            let allTasks = await Task.findAll({include:{all:true}});
            return res.render('panelTareas', {tasks: allTasks});
        } catch (error) {
            return res.render('error', {error}); 
        }
    },

    servicios: (req,res) => {
            return res.render('elegirServicios');
    }
}