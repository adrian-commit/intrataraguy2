const {calendario} = require('../controllers/calendario');
const {Router} = require('express');
const router = Router();


router.get('/', calendario);



module.exports = router;