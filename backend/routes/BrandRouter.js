const Router = require('express').Router;  
const router = Router();  
const brandController = require('../controllers/brandController');  

router.post('/', brandController.create)  
router.get('/', brandController.getAll)

 module.exports = router;   