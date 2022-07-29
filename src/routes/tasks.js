const {tareas,panelTareas,cargarTarea,servicios,showTask,
    updateTask,modifyTask,destroyTask} = require('../controllers/tasks');
const {Router} = require('express');
const router = Router();

router.get('/panelTareas', panelTareas );
router.get('/elegirServicios', servicios);
router.get('/formularioTarea/:id', tareas);
router.get('/perfilTarea/:id', showTask);
router.get('/editarTarea/:id', updateTask)
//--pedidos por POST--//
router.post('/create', cargarTarea);
//--pedidos por PUT--//
router.put('/updateTask/:id', modifyTask);
//--pedidos por DELETE--//
router.delete('/borrarTarea', destroyTask);

module.exports = router;

