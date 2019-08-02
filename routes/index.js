const express = require('express');
const router = express.Router();
const Test = require('../models/Test')
const { User } = require('../models/User')
const { exposeTemplate } = require('../template');
const Words = require('../models/Words')
const result = require('./result')


router.get('/', exposeTemplate, function (req, res) {
    res.render('index', {
        register: res.register,
        instructions: res.instructions,
        test: res.test,
        stat: res.stat,
    });
});

router.get('/test', async function (req, res) {
    const allWords = await Words.find()
    const randomWords = (arr) => {
        const wordsForTest = [];
        const length = arr.length;
        const set = {};

        for (let i = 0; i < 20; i++) {
            let randomN = Math.floor(Math.random() * length);
            if (set[randomN] === undefined) {
                set[randomN] = true;
                wordsForTest.push(arr[randomN].value);
            } else {
                i--;
            }
        };
        return wordsForTest;
    }
    const testWords = randomWords(allWords)
    const user = await User.findOne({ email: req.session.name })
    const test = new Test({
        user: user._id,
        firstName: user.firstName,
        secondName: user.secondName,
        email: user.email,
        words: testWords
    })
    await test.save()
})

router.post('/answers', async function (req, res) {
    const userAnswers = req.body
    const test = await Test.findOne({ email: req.session.name })
    const words = test.words
    const yourResult = result(words, userAnswers)
    console.log(yourResult);

    res.end();
})




router.get('/stat', function (req, res) {
    res.render('stat');
});

router.post('/stat', async function (req, res, next) {
    let user = await User.findOne({ email: req.body.email });
    let tests = await Test.find({ user: user._id })

    res.json(tests);
});

router.post('/test', async function (req, res, next) {

})




module.exports = router;


// console.log(email)
// let user = await User.find({ 'email': email })
// let [findmail] = await Test.find({ user: { $eq: user } })
// console.log('1', findmail)
// const { countRight } = findmail
// console.log('2', countRight)