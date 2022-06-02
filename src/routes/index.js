const {index,login,register,storage,access,usersList} = require('../controllers/index');
const {Router} = require('express');
const router = Router();

router.get('/',index);
router.get('/login', login);
router.get('/register', register);
router.get('/usuarios', usersList);

router.post('/create', storage);
router.post('/access', access);

module.exports = router;