const express = require('express');
const userController = require('../controllers/users');
const eventController = require('../controllers/events');

const cookieParser = require('cookie-parser');

const router = express.Router();

router.get('/', (req,res) =>{
  res.send('hello nagivate to url until further notice');
});

router.get('/home', (req,res) => {
  res.send('event page waiting to be loaded ...');
});

router.use(cookieParser());

router.get('/register', userController.registerForm);

router.post('/register', userController.register);

router.get('/login', userController.loginForm);

router.post('/login', userController.login);



router.use(userController.authenticate);

//Responsible for showing all events created by a user
// router.get('/events', eventController.getByCreator);

// router.post('/events', eventController.create);

// router.put('/events/:id', eventController.update);

// router.delete('/events/:id', eventController.delete);

module.exports = router;

