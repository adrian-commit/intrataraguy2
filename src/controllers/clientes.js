module.exports = {
    login: (req, res)=>{
      res.render('login'); 
    },
    
    register: (req, res)=>{
      res.render('register');
    },

    clientes: (req, res)=>{
        res.render('clientes');
      }
}
