const express = require('express');
const userController = require('../controllers/users');
const eventController = require('../controllers/events');
const path = require('path');

const cookieParser = require('cookie-parser');

const router = express.Router();

router.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname, '../views', 'landing.html'));
});
// need to move late

router.use(cookieParser());

router.get('/register', userController.registerForm);

router.post('/register', userController.register);

router.get('/login', userController.loginForm);

router.post('/login', userController.login);

// router.use(userController.authenticate);

router.get('/home', userController.homePage);
router.get('/createEvent', userController.createForm);
router.get('/updateEvent', userController.updateForm);

//Responsible for showing all events created by a user
router.get('/events', eventController.getAll);

//Responsible for creating an event
router.post('/events', eventController.create);

//Responsible for updating an event
router.post('/events/:id', eventController.update);

//Responsible for deleting an event
router.delete('/events/:id', eventController.remove);

//Responsible for showing RSVPs of the event created by the user
router.get('/events/:eventId/rsvps', eventController.getRSVPs);

// Resposible for creating RSVPS for an event
router.post('/rsvps', eventController.createRSVPs);

module.exports = router;
