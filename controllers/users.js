const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const User = require('../models/Users');

const register = (req, res) => {
  const {
    firstName, lastName, email, password,
  } = req.body;
  const saltRounds = 8;
  bcrypt.hash(password, saltRounds)
    .then((hashedPassword) => User.create(firstName, lastName, email, hashedPassword))
    .then(() => res.send('User successfully created'));
};
// need to fix login
const login = (req, res) => {
  const { email, password } = req.body;

  const user = User.getByEmail(email);

  if (!user) {
    return res.status(401).send('Unauthorized User');
  }

  const validPassword = bcrypt.compare(password, user.password);

  if (validPassword) {
    return jwt.sign({
      email, password, userId: user.id, expiresIn: '3hr',
    }, 'secret', (err, encryptedPayload) => {
      if (err) {
        res.status(403).send('Unauthorized User');
      }
      console.log('JWT:', encryptedPayload);
      res.cookie('userToken', encryptedPayload, { httpOnly: true }).send('Logged in');
    });
  }
  // only here for testing
  return res.status(500).send('Internal Server Error');
};

const authenticate = (req, res, next) => {
  if (!req.cookies.userToken) {
    res.status(401).send('Unauthorized User');
    return res.redirect('/login');
  }
  const payload = jwt.verify(req.cookies.userToken, 'secret');
  console.log('Payload:', payload);
  const { email, password } = payload;

  const user = User.getByEmail(email);
  if (!user) {
    return res.status(401).send('Unauthorized User');
  }

  if (password === user.password) {
    console.log('cookie verified');
    return next();
  }
  return res.status(500).send('Internal Server');
};

const loginForm = (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'login.html'));
};

const registerForm = (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'register.html'));
};

module.exports = {
  login,
  register,
  loginForm,
  registerForm,
};
