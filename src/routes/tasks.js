const {tareas,panelTareas,cargarTarea} = require('../controllers/tasks');
const {Router} = require('express');
const router = Router();

router.get('/panelTareas', panelTareas );
router.get('/formularioTarea', tareas);

//--pedidos por POST--//
router.post('/create', cargarTarea);

module.exports = router;

