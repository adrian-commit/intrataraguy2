const {index,login,register,storage,access} = require('../controllers/index');
const {Router} = require('express');
const router = Router();

router.get('/',index);
router.get('/login', login);
router.get('/register', register);

router.post('/create', storage);
router.post('/access', access);

module.exports = router;