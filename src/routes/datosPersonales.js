const {datosPersonales} = require('../controllers/datosPersonales');
const {Router} = require('express');
const router = Router();


router.get('/', datosPersonales);



module.exports = router;