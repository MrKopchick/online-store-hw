const { Router } = require('express');  
const router  = Router();  
const typeController = require('../controllers/typeController');  
const checkRole = require('../middlewares/checkRoleMiddleware');  

router.post('/', checkRole('ADMIN'), typeController.createType);
router.get('/', typeController.getAllTypes);

module.exports = router;