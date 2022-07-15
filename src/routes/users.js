const {users,storagePersonalInfo} = require('../controllers/users');
const {Router} = require('express');
const router = Router();



router.get('/', users);
router.post('/createPersonalInfo', storagePersonalInfo);




module.exports = router;