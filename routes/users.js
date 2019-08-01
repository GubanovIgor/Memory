const express = require('express');
const router = express.Router();

const { User } = require('../models/User');

router.get('/register', function(req, res) {
  res.render('register');
});

router.post('/addUser', async function(req, res, next) {
  const name = req.body.name;
  const surname = req.body.surname;
  const email = req.body.email;
  
  const user = new User({
    name: name,
    surname: surname,
    email: email
  });

  await user.save();
  req.session.name = user.email;
  res.end();
});

module.exports = router;

// const user = require('./routes/user.js');

// app.use('/users.js', users); в app.js