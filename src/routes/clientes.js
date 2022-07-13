const {clientes,createClient} = require('../controllers/clientes');
const {Router} = require('express');
const router = Router();


router.get('/', clientes);

// router.post('/createClient', createClient)



module.exports = router;