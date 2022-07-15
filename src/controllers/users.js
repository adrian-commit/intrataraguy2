const {DataUser} = require('../database/models');
module.exports = {
    users: (req, res) => {
        return res.render('users');
    },

    storagePersonalInfo: async (req,res) => {
        try {
            let dataUser = await DataUser.findOne({where:{id:req.body.id}});
            let updateInfo = dataUser.update({
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
            return res.redirect('/detallePersonal');
        } catch (error) {
            return res.render('error', {error});
        }
    }
};
