const {Client} = require("../database/models");

module.exports = {
  login: (req, res)=>{
    res.render('login'); 
  },
    
  register: (req, res)=>{
    res.render('register');
  },

  clientes: (req, res)=>{
    res.render('clientes');
  },

  createClient: async (req,res) => {
    try {
      let newClient = await Client.create({
        name: req.body.name,
        businessName: req.body.businessName,
        typePerson: req.body.typePerson,
        cuit: req.body.cuit,
        officesQuantity: req.body.officesQuantity,
        staffQuantity: req.body.staffQuantity,
        typeActivity: req.body.typeActivity,
        timeExerciseEnd: req.body.timeExerciseEnd,
        user_id: req.body.user
      });
      return res.redirect('/detalleCliente');
    } catch (error) {
      return res.render('error', {error});
    }
  },

  perfilCliente: async (req,res) => {
    try {
    let client = await Client.findOne({where:{id:req.params.id}});
    return res.render('perfilCliente', {cliente: client});
    } catch (error) {
    return res.render('error', {error});
    }
  },

  updateClient: async (req,res) => {
    try {
      let client = await Client.findOne({where:{id:req.params.id}});
      return res.render('updateClientes', {cliente: client});
    } catch (error) {
      return res.render('error', {error});
    }
  },

  modifyClient: async (req,res) => {
    try {
      let client = await Client.findOne({where:{id:req.params.id}});
      await client.update({
        name: req.body.name,
        businessName:req.body.businessName,
        cuit:req.body.cuit,
        staffQuantity:req.body.staffQuantity,
        timeExerciseEnd:req.body.timeExerciseEnd,
        officesQuantity:req.body.officesQuantity,
        typeActivity:req.body.typeActivity,
        typePerson:req.body.typePerson
      })
      return res.redirect('/detalleCliente');
    } catch (error) {
      return res.render('error', {error});
    }
  },

  destroyClient: async (req,res) => {
    try {
      let clientDelete = await Client.findByPk(req.body.id);
      await clientDelete.destroy();
      return res.redirect('/detalleCliente'); 
    } catch (error) {
      return res.render('error', {error: error});
    }
  }
  
}
