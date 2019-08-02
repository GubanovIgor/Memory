const express = require('express');
const router = express.Router();
const Test = require('../models/Test')
const { User } = require('../models/User')
const { exposeTemplate } = require('../template');


router.get('/', exposeTemplate, function (req, res) {
    res.render('index', {
        register: res.register,
        instructions: res.instructions,
        test: res.test,
        stat: res.stat,
    });
});


router.get('/stat', function (req, res) {
    res.render('stat');
});

router.post('/stat', async function (req, res, next) {
    let user = await User.findOne({ email: req.body.email });
    console.log(user._id);
    let tests = await Test.find({ user: user._id })
    console.log(tests)
    // let countRight = tests.countRight
    // let positionRight = tests.positionRight
    // let total = tests.total
    // console.log (countRight, positionRight, total)
    
    res.json(tests);

});




module.exports = router;


// console.log(email)
// let user = await User.find({ 'email': email })
// let [findmail] = await Test.find({ user: { $eq: user } })
// console.log('1', findmail)
// const { countRight } = findmail
// console.log('2', countRight)