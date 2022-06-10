module.exports = {
    login: (req, res)=>{
      res.render('login'); 
    },
    
    register: (req, res)=>{
      res.render('register');
    },

    datosPersonales: (req, res)=>{
        res.render('datosPersonales');
      }
}