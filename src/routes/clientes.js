const {clientes,createClient,perfilCliente,updateClient,
    modifyClient,destroyClient} = require('../controllers/clientes');
const {Router} = require('express');
const router = Router();


router.get('/', clientes);
router.get('/perfilCliente/:id', perfilCliente);
router.get('/editarCliente/:id', updateClient);

router.post('/createClient', createClient)

router.put('/updateClient/:id', modifyClient);

router.delete('/borrarCliente', destroyClient)



module.exports = router;