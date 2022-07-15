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
  }
}
