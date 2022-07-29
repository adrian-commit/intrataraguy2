const {users,storagePersonalInfo,showUsers,updateUsers,modifyUser,updatePersonalData,
    destroyUser} = require('../controllers/users');
const {Router} = require('express');
const router = Router();



router.get('/', users);
router.get('/perfilUsuarios/:id', showUsers);
router.get('/editarUsuarios/:id', updateUsers);
router.get('/editarPersonal/:id', updatePersonalData);


router.put('/modifyUser/:id', modifyUser);
router.put('/modifyDataUser/:id', storagePersonalInfo);

router.delete('/borrarUsuario', destroyUser);


module.exports = router;