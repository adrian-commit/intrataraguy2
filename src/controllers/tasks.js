const {Client,Team,Task,Service} = require('../database/models');
module.exports = {
    tareas: async (req, res) =>{
        try {
          let id_servicio = req.params.id;
          console.log(id_servicio);
          let servicio = "Programación";  
            if (id_servicio == 1) {
                servicio = "Laboral";
            } else if (id_servicio == 2) {
                servicio = "Impuestos";
            } else if (id_servicio == 3) {
                servicio = "Administración";
            } else if (id_servicio == 4) {
                servicio = "Contabilidad";
            };
          let clientes = await Client.findAll();
          let equipos = await Team.findAll(); 
          return res.render('tareas', {
            clientes: clientes,
            equipos: equipos,
            servicio: servicio,
            ids: id_servicio
          });  
        } catch (error) {
            return res.render('error', {error});
        }  
    },

    cargarTarea: async (req,res) => {
        try {
                let newService = await Service.create({
                    type:req.body.type,
                    typeActivity:req.body.typeActivity,
                    contributionType:req.body.type == "Impuestos" ? req.body.contributionType : null,
                    aplication:req.body.type == "Impuestos" ? req.body.aplication : null,
                    province:req.body.type == "Impuestos" ? req.body.province : null,

                });
                let clientAssociate = await Client.findOne({where:{name:req.body.cliente}})
                let newTask = await Task.create({
                    name: req.body.name,
                    type: req.body.area,
                    client: clientAssociate.id,
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
                    totalTime:req.body.total,
                    condition:'Pendiente'
                });
                return res.redirect('panelTareas');   
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