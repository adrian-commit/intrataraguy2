const {tareas,cargarTarea} = require('../controllers/works');
const {Router} = require('express');
const router = Router();

router.get('/', tareas);

//--pedidos por POST--//
router.post('/create', cargarTarea);

module.exports = router;

