const express = require('express');
const userController = require('../controllers/users');

const router = express.Router();

router.get('/', (req,res) =>{
  res.send('hello nagivate to url until further notice');
});

router.get('/login', userController.loginForm);

router.post('/login', userController.login);

router.get('/register', userController.registerForm);

router.post('/register', userController.register);

module.exports = router;

