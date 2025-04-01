const { Router } = require('express');  
const router  = Router();  
const UserController = require('../controllers/user.controller');  
const userController = require('../controllers/userController');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', userController.getMe);

module.exports = router;