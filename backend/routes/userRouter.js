const { Router } = require('express');  
const router  = Router();  
const UserController = require('../controllers/user.controller');  
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware ,userController.getMe);

module.exports = router;