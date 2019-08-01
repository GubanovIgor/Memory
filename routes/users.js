const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/register', function(req, res) {
  res.render('register');
});

router.post('/register', async function(req, res, next) {
  const firstName = req.body.name;
  const secondName = req.body.surname;
  const email = req.body.email;

  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('email', 'Name is required').notEmpty();
  
  const user = new User({
    name: firstName,
    surname: secondName,
    email: email
  });

  await user.save();
  req.session.name = user.email;
  res.end();
});

module.exports = router;

// const user = require('./routes/user.js');

// app.use('/users.js', users); в app.js