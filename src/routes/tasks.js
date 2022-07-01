const {tareas,panelTareas,cargarTarea,servicios} = require('../controllers/tasks');
const {Router} = require('express');
const router = Router();

router.get('/panelTareas', panelTareas );
router.get('/elegirServicios', servicios);
router.get('/formularioTarea/:id', tareas);
//--pedidos por POST--//
router.post('/create', cargarTarea);


module.exports = router;

