const Router = require('express').Router;  
const router  = Router();  
const deviceController = require('../controllers/deviceController');

router.post('/', deviceController.create);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);

 module.exports = router;