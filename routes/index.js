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
        words: testWords,
        countRight: 0,
        positionRight: 0,
        total: Good,
    })
    await test.save()
})

router.post('/answers', async function (req, res) {
    const userAnswers = req.body
    const test = await Test.findOne({ email: req.session.name })
    const words = test.words
    const yourResult = result(words, userAnswers)
    
    test.countRight = yourResult[0]
    test.positionRight = yourResult[1]
    if (yourResult[0] >= 19){
        test.total = "У Вас отличная память"
    }
    if (10 < yourResult[0] < 19){
        test.total = "Очень хороший результат"
    }
    if (0 < yourResult[0] <=10) {
        test.total = "Возможно, Вам нужно потренировать память"
    }
    if (yourResult[0] === 0) {
        test.total = "У Вас не памяти"
    }
    
    
    console.log(test);
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