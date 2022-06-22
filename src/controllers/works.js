const {Client,Team,Work} = require('../database/models');
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
            console.log(req.body)
            let workInDb = await Work.findAll({where:{
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
                let client = await Client.findOne({where:{name:req.body.cliente}});
                let newTask = await Work.create({
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
                    condition:'Pendiente'
                });
                return res.send(newTask);
            }
        } catch (error) {
            return res.render('error', {error}); 
        }
    }
}