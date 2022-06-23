const {index,login,register,storage,access,logout,usersList,clientsList,detalleList,calendario,datosPersonales,clientes,storageInfo,storageClient,detallePersonal,detalleCliente} = require('../controllers/index');
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
router.get('/detalleCliente',notLoggedMiddleware, clientsList);
router.get('/detallePersonal',notLoggedMiddleware, detalleList);


router.get('/', notLoggedMiddleware, index);
router.get('/calendario', notLoggedMiddleware, calendario);
router.get('/datosPersonales', notLoggedMiddleware, datosPersonales);
router.get('/clientes', notLoggedMiddleware, clientes);
router.get('/detallePersonal', notLoggedMiddleware, detallePersonal);
router.get('/detalleCliente', notLoggedMiddleware, detalleCliente);

//--- Rutas POST ---//
router.post('/create', storage);
router.post('/createPersonalInfo', storageInfo);
router.post('/createClient', storageClient);
router.post('/access', access);


module.exports = router;