const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const User = require('../models/Users');

const register = (req, res) => {
  try{
    
    const {
      firstName, lastName, email, password,
    } = req.body;
    console.log(firstName, lastName)
    const saltRounds = 8;
    bcrypt.hash(password, saltRounds)
      .then((hashedPassword) => User.create(firstName, lastName, email, hashedPassword))
      .then(() => res.send('User successfully created'));
  }catch(err){
    console.log(err);
    res.status(500).send(err);
  }
 
};
// need to fix login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.getByEmail(email);

    if (!user) {
      return res.status(401).send('User not found.');
    }
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.send('Incorrect Password.');
    }

    const payload = { email, password, id: user.id };
    return jwt.sign(payload, 'secret', (err, encryptedPayload) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      console.log('JWT:', encryptedPayload);
      res.cookie('userToken', encryptedPayload);
      // redirect to event home page after
    });
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
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
  authenticate,
};
