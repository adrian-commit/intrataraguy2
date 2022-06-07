const {User,DataUser} = require('../database/models');
const {hashSync, compareSync} = require('bcryptjs');
const session = require('express-session');

module.exports = {
    
    login: (req, res)=>{
        res.render('login'); 
    },
      
    register: (req, res)=>{
        res.render('register');
    },

    storage: async (req, res) => {
        try {
            let userInDb = await User.findAll({where:{email: req.body.email},include:{all:true}});
            if (userInDb != "") {
                return res.render('register', {
                    alert: true,
                    alertTitle: "Error",
                    alertMassage: "Este correo ya esta registrado",
                    alertIcon: 'error',
                    showConfirmButton: true,
                    timer:2500,
                    ruta:'register'
                })
            } else {
                let newUser = await User.create({
                    userName: req.body.userName,
                    email: req.body.email,
                    password: hashSync(req.body.pass, 10),
                    is_admin: req.body.rol == 'admin' ? true : req.body.rol == 'data entry' ? false : false
                })
                let newDataUser = await DataUser.create({
                    user_id: newUser.id
                })
                return res.render('login',{
                    alert: true,
                    alertTitle: "Nuevo Registro",
                    alertMassage: "Se registro Correctamente!",
                    alertIcon: 'success',
                    showConfirmButton: false,
                    timer:2500,
                    ruta:'login'
                })
            }
        } catch (error) {
            return res.render('error', {error});
        }
    },

    access: async (req, res) => {
        try {
            let userLogin = await User.findOne({where:{email: req.body.email},include:{all:true}});
            if (userLogin) {
                let userPass = compareSync(req.body.pass, userLogin.password);
                if (userPass) {
                    delete userLogin.password;
                    req.session.userLogged = userLogin;
                    return res.redirect('/');
                    /* , {
                        /* alert: true,
                        alertTitle: "Conexión Exitosa",
                        alertMassage: "¡LOGIN CORRECTO!",
                        alertIcon: 'succes',
                        showConfirmButton: false,
                        timer:2500,
                        ruta:'/' */ 
                    
                }
                return res.render('login',{
                    alert: true,
                    alertTitle: "Error",
                    alertMassage: "Credenciales incorrectas",
                    alertIcon: 'error',
                    showConfirmButton: true,
                    timer:'',
                    ruta:'login'
                });
            } else {
                return res.render('login',{
                    alert: true,
                    alertTitle: "Error",
                    alertMassage: "Email no registrado",
                    alertIcon: 'error',
                    showConfirmButton: true,
                    timer:'',
                    ruta:'login'
                });
            }
        } catch (error) {
            return res.render('error', {error});
        }
    },

    index: (req,res) => {
        res.render('index', {user:req.session.userLogged}); 
        console.log(req.session.userLogged);
            
    },

    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('login');
    },

    usersList: async (req, res) => {
        try {
            let users = await User.findAll({include:{all:true}});
            return res.render('users', {users: users});
        } catch (error) {
            return res.render('error', {error});
        }
    }
}
    