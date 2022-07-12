const {index,login,register,storage,access,logout,usersList,contarServicios,contarClientes,formServicios,detalleServicio,detalleServ,clientsList,servicios,detalleList,calendario,datosPersonales,clientes,storageInfo,storageClient,detallePersonal,detalleCliente} = require('../controllers/index');
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
router.get('/servicios',notLoggedMiddleware, servicios);
router.get('/detalleCliente',notLoggedMiddleware, clientsList);
router.get('/detallePersonal',notLoggedMiddleware, detalleList);
router.get('/detalleServicio',notLoggedMiddleware, detalleServ);
router.get('/',notLoggedMiddleware, contarServicios);
router.get('/',notLoggedMiddleware, contarClientes);


router.get('/', notLoggedMiddleware, index);
router.get('/calendario', notLoggedMiddleware, calendario);
router.get('/datosPersonales', notLoggedMiddleware, datosPersonales);
router.get('/clientes', notLoggedMiddleware, clientes);
router.get('/formServicios', notLoggedMiddleware, formServicios);
router.get('/detallePersonal', notLoggedMiddleware, detallePersonal);
router.get('/detalleCliente', notLoggedMiddleware, detalleCliente);
router.get('/detalleServicio', notLoggedMiddleware, detalleServicio);

//--- Rutas POST ---//
router.post('/create', storage);
router.post('/createPersonalInfo', storageInfo);
router.post('/createClient', storageClient);
router.post('/access', access);


module.exports = router;