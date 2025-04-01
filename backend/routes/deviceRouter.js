const { Router } = require('express');  
const router  = Router();  
const deviceController = require('../controllers/deviceController');

router.post('/', deviceController.createDevice);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);

 module.exports = router;