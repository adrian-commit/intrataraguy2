const {DataUser,User} = require('../database/models');
module.exports = {
    users: (req, res) => {
        return res.render('users');
    },

    storagePersonalInfo: async (req,res) => {
        try {
            let dataUser = await DataUser.findByPk(req.params.id);
            await dataUser.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                dni: req.body.dni,
                telephone: req.body.telephone,
                birthDay: req.body.birthDay,
                profession: req.body.profession,
                hobbie: req.body.hobbie,
                childrens: req.body.childrens === "si" ? true : false,
                team: req.body.teams,
                user_id: req.body.id
            });
            return res.redirect('/users');
        } catch (error) {
            return res.render('error', {error});
        }
    },

    showUsers: async (req,res) => {
        try {
            let user = await User.findByPk(req.params.id, {include:{all:true}});
            return res.render('perfilUsuarios', {usuario: user});
        } catch (error) {
            return res.render('error', {error});
        }
    },

    updateUsers: async (req,res) => {
        try {
            let user = await User.findByPk(req.params.id, {include:{all:true}});
            return res.render('updateUsers', {usuario: user});
        } catch (error) {
            return res.render('error', {error});
        }
    },

    modifyUser: async (req,res) => {
        try {
            let user = await User.findByPk(req.params.id);
            await user.update({
                userName: req.body.userName,
                email: req.body.email,
                is_admin: req.body.rol == "admin" ? true : false
            });
            return res.redirect('/users');
        } catch (error) {
            return res.render('error', {error});
        }
    },

    updatePersonalData: async (req,res) => {
        try {
            let dataUser = await DataUser.findByPk(req.params.id);
            return res.render('updateDatosPersonales', {data: dataUser});
        } catch (error) {
            return res.render('error', {error});
        }
    },

    destroyUser: async (req,res) => {
            try {
                let dataUser = await DataUser.findByPk(req.body.idData);
                let user = await User.findByPk(req.body.idUser);
                await user.destroy();
                await dataUser.destroy();
                return res.redirect('/users');
            } catch (error) {
                return res.render('error', {error});
            }
    }
};
