const {login,register} = require('../controllers/users');
const {Router} = require('express');
const router = Router();

router.get('/login', login);
router.get('/register', register);

module.exports = router;