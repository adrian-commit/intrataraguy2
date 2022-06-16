const {index,login,register,storage,access,logout,usersList,calendario,datosPersonales,clientes,storageInfo,storageClient} = require('../controllers/index');
const {Router} = require('express');
const router = Router();

//--llamando middlewares--//
const notLoggedMiddleware = require('../middlewares/notLoggedMiddleware');
const loggedMiddleware = require('../middlewares/loggedMiddleware');


//--- Rutas GET ---//
router.get('/login', loggedMiddleware, login);
router.get('/register', loggedMiddleware, register);
router.get("/logout", logout);
router.get('/users',notLoggedMiddleware, usersList);

router.get('/', notLoggedMiddleware, index);
router.get('/calendario', notLoggedMiddleware, calendario);
router.get('/datosPersonales', notLoggedMiddleware, datosPersonales);
router.get('/clientes', notLoggedMiddleware, clientes);

//--- Rutas POST ---//
router.post('/create', storage);
router.post('/createPersonalInfo', storageInfo);
router.post('/createClient', storageClient);
router.post('/access', access);


module.exports = router;