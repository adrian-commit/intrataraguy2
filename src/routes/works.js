const {tareas} = require('../controllers/works');
const {Router} = require('express');
const router = Router();

router.get('/', tareas);

module.exports = router;

