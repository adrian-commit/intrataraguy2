const {clientes} = require('../controllers/clientes');
const {Router} = require('express');
const router = Router();


router.get('/', clientes);



module.exports = router;