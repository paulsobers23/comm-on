const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.get('/login', userController.login);

router.post('/login', userController.verify);

router.get('/register', userController.registerForm);

router.post('/register', userController.register);



module.exports = router;