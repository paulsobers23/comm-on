const express = require('express');
const cookieParser = require('cookie-parser');
const userController = require('../controllers/users');
const eventController = require('../controllers/events');


const router = express.Router();
// need to remove before production
router.get('/', (req, res) => {
  res.send('hello nagivate to url until further notice');
});

router.use(cookieParser());

router.get('/register', userController.registerForm);

router.post('/register', userController.register);

router.get('/login', userController.loginForm);

router.post('/login', userController.login);

router.use(userController.authenticate);

router.get('/home', userController.homePage);

// Responsible for showing all events created by a user
router.get('/events', eventController.getAll);

// Responsible for creating an event
router.post('/events', eventController.create);

// Responsible for updating an event
router.put('/events/:id', eventController.update);

// Responsible for deleting an event
router.delete('/events/:id', eventController.remove);

// Responsible for showing RSVPs of the event created by the user
router.get('/events/:eventId/rsvps', eventController.getRSVPs);

// Resposible for creating RSVPS for an event
router.post('/rsvps', eventController.createRSVPs);

// need to be added for all users
// router.get('user/:userId', userController.getAll)


module.exports = router;
