const express = require('express');
const router = express.Router();
const { Test } = require('../models/Test')
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
        playSounds: res.playSounds,
        showResult: res.showResult,
    });
});

router.post('/createTest', async function (req, res) {
    console.log('asd')
    const allWords = await Words.find()
    const randomWords = (arr) => {
        const wordsForTest = [];
        const length = arr.length;
        const set = {};

        for (let i = 0; i < 5; i++) {
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
    console.log(testWords);
    const user = await User.findOne({ email: req.session.email })
    const test = new Test({
        user: user._id,
        firstName: user.firstName,
        secondName: user.secondName,
        email: user.email,
        words: testWords,
        countRight: 0,
        positionRight: 0,
        total: 'Good',
    })
    await test.save()
    res.end();
})

router.post('/answers', async function (req, res) {
    const userAnswers = req.body
    const test = await Test.findOne({ email: req.session.email })
    console.log(test);
    const words = test.words
    console.log(words)
    // console.log(userAnswers)
    const yourResult = result(words, userAnswers)
    console.log(yourResult);

    res.json({
        right: yourResult[0],
        rightP: yourResult[1],
    });
})

router.get('/stat', function (req, res) {
    res.render('stat');
});

router.post('/stat', async function (req, res, next) {
    let user = await User.findOne({ email: req.body.email });
    let tests = await Test.find({ user: user._id })

    res.json(tests);
});

router.post('/sound', async function(req, res, next) {
    console.log(req.session)
    res.json(req.session.userName)
})

router.post('/showTest', async function (req, res, next) {
    // new Array(4).fill(1).map((el, key) => {return {number:key+1}}) // Саша создает массив как Бог
    const answers = [
        {number: 1},
        {number: 2},
        {number: 3},
        {number: 4},
        {number: 5},
    ];
    res.json({answers});
})



module.exports = router;
