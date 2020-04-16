const express = require('express');
const userController = require('../controllers/users');
const eventController = require('../controllers/events');

const cookieParser = require('cookie-parser');

const router = express.Router();
// need to remove before production
router.get('/', (req,res) =>{
  res.send('hello nagivate to url until further notice');
});
// need to move late
router.get('/home', (req,res) => {
  res.send('event page waiting to be loaded ...');
});

router.use(cookieParser());

router.get('/register', userController.registerForm);

router.post('/register', userController.register);

router.get('/login', userController.loginForm);

router.post('/login', userController.login);

// router.use(userController.authenticate);

//Responsible for showing all events created by a user
router.get('/events', eventController.getAll);

//Responsible for showing RSVPs of the event created by the user
router.get('/events/:id', eventController.getRSVPs);

//Responsible for creating an event
router.post('/events', eventController.create);

//Responsible for updating an event
router.put('/events/:id', eventController.update);

//Responsible for deleting an event
router.delete('/events/:id', eventController.remove);

module.exports = router;

