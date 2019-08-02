const express = require('express');
const router = express.Router();

const { Test } = require('../models/Test');

router.get('/admin', async function(req, res, next) {
  res.render('routerGet');
});

module.exports = router;
