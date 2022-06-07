const {index,login,register,storage,access,logout,usersList} = require('../controllers/index');
const {Router} = require('express');
const router = Router();

//--llamando middlewares--//
const notLoggedMiddleware = require('../middlewares/notLoggedMiddleware');
const loggedMiddleware = require('../middlewares/loggedMiddleware');


router.get('/', notLoggedMiddleware, index);
router.get('/login', loggedMiddleware, login);
router.get('/register', loggedMiddleware, register);
router.get("/logout", logout);
router.get('/users',notLoggedMiddleware, usersList);


router.post('/create', storage);
router.post('/access', access);

module.exports = router;