const express = require('express');
const router = express.Router();

const { Test } = require('../models/Test');

router.get('/admin', async function(req, res) {
  let search = await Test.find({});
  let arr = []
  
  let name = [];
  let surname = [];
  let email = [];
  let countRight = [];
  // let listLength = [];
  let positionRight = [];

  for (let i = 0; i < search.length; i++) {
    arr.push({
      name: search[i].firstName,
      surname: search[i].secondName,
      email: search[i].email,
      countRight: search[i].countRight,
      positionRight: search[i].positionRight,
    })
    // name.push(search[i].firstName);
    // surname.push(search[i].secondName);
    // email.push(search[i].email);
    // countRight.push(search[i].countRight);
    // listLength.push(search[i].listLength1);
    // positionRight.push(search[i].positionRight);
  }
  res.render('routerGet', {
    arr: arr,
    // name: name,
    // surname: surname,
    // email: email,
    // countRight: countRight,
    // // listLength: listLength.length,
    // positionRight: positionRight
  });
});

module.exports = router;
