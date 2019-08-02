const express = require('express');
const router = express.Router();

const { User } = require('../models/User');

router.post('/addUser', async function(req, res, next) {
  const name = req.body.firstName;
  const surname = req.body.secondName;
  const email = req.body.email;

  req.session.userName = req.body.firstName;
  console.log(req.session)
  
  const user = new User({
    firstName: name,
    secondName: surname,
    email: email
  });

  await user.save();
  req.session.email = user.email;
  

  res.json(name);
});

module.exports = router;
